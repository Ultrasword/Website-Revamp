"use client";

// ParticleBackground.tsx
import React from "react";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let canvas = canvasRef.current;
  useEffect(() => {
    canvas = canvasRef.current;
  }, [canvasRef]);

  // Set the canvas dimensions to match the container or viewport
  const setCanvasSize = () => {
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }
  };

  useEffect(() => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const numParticles = 30; // Adjust the number of particles as desired

    setCanvasSize();

    // Create an initial set of particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2, // Velocity X between -1 and 1
        vy: (Math.random() - 0.5) * 2, // Velocity Y between -1 and 1
        size: 2, // Size between 1 and 3
        color: `rgba(255, 255, 255, 255)`,
      });
    }

    // Animation function to update and draw particles
    const animate = () => {
      // Clear the canvas on each frame
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      const connections: { particle: Particle; otherParticle: Particle }[] = [];

      // Update and draw each particle
      particles.forEach((particle) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // check all other particles for potential connections
        particles.forEach((otherParticle) => {
          if (particle !== otherParticle) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2)
            );

            if (distance < 100) {
              connections.push({ particle, otherParticle });
            }
          }
        });

        // Bounce off the edges
        if (canvas) {
          if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy;
        }

        // Draw the particle as a circle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // draw connections
      connections.forEach(({ particle, otherParticle }) => {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(otherParticle.x, otherParticle.y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.stroke();
      });

      // Request the next animation frame
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Update canvas size on window resize
    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [canvas, setCanvasSize]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default ParticleBackground;
