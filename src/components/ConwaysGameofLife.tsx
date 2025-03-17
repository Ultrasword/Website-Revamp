"use client";

import * as THREE from "three";
import React, { useEffect, useRef } from "react";

// --- Global Definitions ---
// Define the eight neighboring directions relative to a cell.
const neighbors: [number, number][] = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];

/**
 * Parses a Conway’s Game of Life configuration in RLE format and returns
 * an array of strings where each string represents a row of cells.
 * In the output, a live cell is represented by "1" and a dead cell by "0".
 *
 * The RLE format is expected to have a header like:
 *   x = 50, y = 20, rule = B3/S23
 * followed by the encoded pattern.
 *
 * The encoding rules:
 * - A number immediately preceding a letter tells you how many copies of that cell to output.
 * - The letter "o" represents a live cell (converted to "1").
 * - The letter "b" represents a dead cell (converted to "0").
 * - The "$" symbol ends the current row. If a number immediately precedes "$",
 *   that many rows are output (the first is the current row and the remaining are empty rows).
 * - The "!" symbol marks the end of the pattern.
 *
 * @param config - The full RLE configuration string.
 * @returns An array of strings, each string of length x (the width from the header),
 *          representing one row of the grid.
 */
function parseRLE(config: string): string[] {
  // Extract dimensions from the header using a regular expression.
  const headerRegex = /x\s*=\s*(\d+)\s*,\s*y\s*=\s*(\d+)/i;
  const headerMatch = config.match(headerRegex);
  if (!headerMatch) {
    throw new Error("Invalid RLE header: dimensions not found.");
  }
  const width = parseInt(headerMatch[1], 10);
  const height = parseInt(headerMatch[2], 10);

  // Remove the header part and any whitespace characters from the data section.
  // This makes processing easier.
  let data = config.substring(config.indexOf("\n") + 1).replace(/\s/g, "");

  // Remove the trailing "!" that marks the end of the pattern.
  data = data.replace(/!$/, "");

  // Initialize the grid array and the current row buffer.
  const grid: string[] = [];
  let currentRow: string[] = [];
  // This string accumulates digits that may appear before cell or row tokens.
  let countStr = "";

  // Helper function: returns the numeric value of the accumulated count.
  // If no count was provided (countStr is empty), it returns 1 by default.
  const getCount = () => (countStr === "" ? 1 : parseInt(countStr, 10));

  // Process each character in the RLE data string.
  for (let i = 0; i < data.length; i++) {
    const char = data[i];
    if (char >= "0" && char <= "9") {
      // Accumulate digit characters in countStr.
      countStr += char;
    } else if (char === "b" || char === "o") {
      // When we encounter a cell token:
      //  - "o" means a live cell ("1")
      //  - "b" means a dead cell ("0")
      // The count (if specified) tells us how many cells to add.
      const count = getCount();
      // Reset countStr for the next token.
      countStr = "";
      // Determine the corresponding cell value.
      const cellChar = char === "o" ? "1" : "0";
      // Append the cell value 'count' times to the current row.
      for (let j = 0; j < count; j++) {
        currentRow.push(cellChar);
      }
    } else if (char === "$") {
      // "$" indicates the end of the current row.
      // First, determine if a count was specified before "$" (which means
      // to add extra blank rows). The default count is 1.
      const count = getCount();
      countStr = "";

      // If the current row is shorter than the expected width, pad it with dead cells.
      while (currentRow.length < width) {
        currentRow.push("0");
      }
      // In the rare case that currentRow is longer than width, trim it.
      grid.push(currentRow.slice(0, width).join(""));
      currentRow = [];

      // If the count preceding "$" is greater than 1,
      // add (count - 1) extra blank rows.
      for (let k = 1; k < count; k++) {
        grid.push("0".repeat(width));
      }
    }
    // Any other characters (such as an extra newline) have already been removed.
  }

  // If there is any unfinished row data after processing the string,
  // pad it to the required width and add it to the grid.
  if (currentRow.length > 0) {
    while (currentRow.length < width) {
      currentRow.push("0");
    }
    grid.push(currentRow.join(""));
  }

  // If the number of rows is less than the height specified in the header,
  // pad the grid with additional blank rows.
  while (grid.length < height) {
    grid.push("0".repeat(width));
  }

  // Optionally, if the grid is longer than 'height', you can trim it:
  if (grid.length > height) {
    return grid.slice(0, height);
  }

  return grid;
}

/**
 * Simulates one generation of Conway's Game of Life.
 *
 * @param data   The current grid data as a flat Uint8ClampedArray.
 *               Each cell is represented by 4 consecutive values (RGBA),
 *               and a cell is considered alive if its red channel is > 0.
 * @param width  The width of the grid.
 * @param height The height of the grid.
 * @returns      A new Uint8ClampedArray containing the next generation of the grid.
 */
function simulateGameOfLife(
  data: Uint8ClampedArray,
  width: number,
  height: number
): Uint8ClampedArray {
  // Create a new array for the next generation.
  const newData = new Uint8ClampedArray(data.length);

  // Loop over each cell in the grid (using y for rows and x for columns).
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let count = 0; // count of live neighbors
      // Check all 8 neighboring cells.
      for (const [dx, dy] of neighbors) {
        const nx = x + dx;
        const ny = y + dy;
        // Only count neighbors that are within bounds.
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const neighborIndex = (nx + ny * width) * 4;
          if (data[neighborIndex] > 0) {
            count++;
          }
        }
      }
      // Current cell index in the flat array.
      const index = (x + y * width) * 4;
      const isAlive = data[index] > 0;

      // Apply Conway's Game of Life rules:
      // - Live cell with 2 or 3 neighbors stays alive.
      // - Dead cell with exactly 3 neighbors becomes alive.
      if (isAlive) {
        if (count === 2 || count === 3) {
          newData[index] = 255;
          newData[index + 1] = 255;
          newData[index + 2] = 255;
          newData[index + 3] = 255;
        } else {
          // Dies due to underpopulation or overpopulation.
          newData[index] = 0;
          newData[index + 1] = 0;
          newData[index + 2] = 0;
          newData[index + 3] = 255;
        }
      } else {
        if (count === 3) {
          newData[index] = 255;
          newData[index + 1] = 255;
          newData[index + 2] = 255;
          newData[index + 3] = 255;
        } else {
          newData[index] = 0;
          newData[index + 1] = 0;
          newData[index + 2] = 0;
          newData[index + 3] = 255;
        }
      }
    }
  }
  return newData;
}

export default function ConwaysGameofLife() {
  const refContainer = useRef<HTMLDivElement>(null);

  // Starting configuration from conwaylife.com (50x20)
  const startingConfig = `x = 72, y = 72, rule = B3/S23
5$28b2o$28bobo$30bo4b2o$26b4ob2o2bo2bo$26bo2bobobobob2o$29bobobobo$30b
2obobo$34bo2$20b2o$21bo7b2o$21bobo5b2o$22b2o$31b2o$30b3o$31bo3$40bo$32b
2o7b2o13bo$32bo7b2o12b3o$33b3o17bo$35bo17b2o$20bo$20b2o$19bobo39b2o$62b
o$4b2o56bob2o$5bo48b2o4b3o2bo$3bo47bo2b2o3bo3b2o$3b5o14b2o26b3o6b4o$8b
o13bo22b2o4b2o9bo$5b3o12bobo21bobo12b3o$4bo9b2o4b2o22bo13bo$4b4o6b3o26b
2o14b5o$2b2o3bo3b2o2bo47bo$bo2b3o4b2o48bo$b2obo56b2o$4bo$4b2o39bobo$45b
2o$46bo$12b2o17bo$13bo17b3o$10b3o12b2o7bo$10bo13b2o7b2o$26bo3$35bo$34b
3o$34b2o$43b2o$36b2o5bobo$36b2o7bo$45b2o2$32bo$31bobob2o$31bobobobo$28b
2obobobobo2bo$28bo2bo2b2ob4o$30b2o4bo$36bobo$37b2o!
`;

  // --- Shader Setup ---
  const vertexShader = `
      varying vec2 vUv;
      uniform float u_time;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
  const fragmentShader = `
      varying vec2 vUv;
      uniform float u_time;
      uniform sampler2D u_texture;

      void main() {
        vec3 black = vec3(0, 0, 0);

        vec2 uv = vUv;
        vec4 texColor = texture2D(u_texture, uv);
        float gradient = 0.5 + 0.5 * sin(uv.x * 10.0 + u_time);

        vec3 color = mix(vec3(1.0, 0.254, 0.557), vec3(0.0, 0.141, 0.667), gradient);

        color = texColor.r > 0.5 ? color : black;
        gl_FragColor = vec4(color, 1.0);

      }
    `;
  const width = 72;
  const height = 72;
  const rawdata = parseRLE(startingConfig);

  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      u_time: { value: 0.0 },
      u_texture: { value: null },
    },
  });

  // effect
  useEffect(() => {
    const container = refContainer.current;
    if (!container) return;
    const gamescene = new THREE.Scene();
    const { clientWidth, clientHeight } = container;

    // Create cameras.
    const orthoCamera = new THREE.OrthographicCamera(
      -width / 2,
      width / 2,
      height / 2,
      -height / 2,
      0.1,
      1000
    );
    const perspCamera = new THREE.PerspectiveCamera(50, clientWidth / clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(clientWidth, clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    orthoCamera.position.z = 5;
    perspCamera.position.z = 4;

    if (refContainer.current) {
      refContainer.current.appendChild(renderer.domElement);
    }

    // --- Texture and Initial Grid Setup ---

    // Create a mutable typed array for the texture data.
    let data: Uint8ClampedArray = new Uint8ClampedArray(width * height * 4);
    // Fill the array: each pixel is RGBA; live cell => white (255), dead cell => black (0)
    for (let y = 0; y < height; y++) {
      const row = rawdata[y];
      for (let x = 0; x < width; x++) {
        const char = row[x];
        const index = (x + y * width) * 4;
        if (char === "1") {
          data[index] = 255;
          data[index + 1] = 255;
          data[index + 2] = 255;
          data[index + 3] = 255;
        } else {
          data[index] = 0;
          data[index + 1] = 0;
          data[index + 2] = 0;
          data[index + 3] = 255;
        }
      }
    }
    const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
    texture.needsUpdate = true;
    shaderMaterial.uniforms.u_texture.value = texture;

    // Create a plane that uses the shader.
    const gamegeometry = new THREE.PlaneGeometry(6, 6);
    const gamemesh = new THREE.Mesh(gamegeometry, shaderMaterial);
    gamescene.add(gamemesh);

    // --- Animation Loop ---
    let lastUpdateTime = 0;
    const updateInterval = 100; // Update simulation every 100ms

    const animate = () => {
      requestAnimationFrame(animate);
      const currentTime = performance.now();
      shaderMaterial.uniforms.u_time.value = currentTime / 1000;

      perspCamera.position.x = Math.sin(currentTime / 4000) * 3;
      perspCamera.position.y = Math.cos(currentTime / 4000) * 3;
      perspCamera.up.set(0, 0, 1);
      perspCamera.lookAt(0, 0, 0);
      if (currentTime - lastUpdateTime >= updateInterval) {
        lastUpdateTime = currentTime;
        // Update shader time uniform.

        // Update the simulation: compute next generation.
        data = simulateGameOfLife(data, width, height);
        texture.image.data = data;
        texture.needsUpdate = true;
      }
      renderer.setClearColor(new THREE.Color(0, 0, 0));

      // renderer.render(gamescene, orthoCamera);
      renderer.render(gamescene, perspCamera);
    };

    animate();

    // --- Resize Handling ---
    const handleResize = () => {
      if (refContainer.current) {
        const { clientWidth, clientHeight } = refContainer.current;
        renderer.setSize(clientWidth, clientHeight);
        perspCamera.aspect = clientWidth / clientHeight;
        perspCamera.updateProjectionMatrix();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  });

  // Render a local container only if a mountNode wasn't provided.
  return <div id={"ConwaysGame"} ref={refContainer} style={{ width: "100%", height: "100%" }} />;
}
