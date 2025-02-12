import styles from "./Header.module.css";

function HeaderCard(key: number, name: string) {
  return (
    <a href={`#${name}`} style={{ textDecoration: "none" }}>
      <div key={key} className={styles.card}>
        <p>{name}</p>
      </div>
    </a>
  );
}

export default function HeaderSection() {
  // open a file
  const names = ["Home", "About", "Contact"];

  return (
    <header id={"Home"} className={styles.header}>
      <div className={styles.container}>
        <div>
          <div className={styles.logo}>
            <a href={"https://peterzhang.dev"}>
              <p style={{ fontWeight: "bold", fontSize: "20px" }} className={styles.nav}>
                peterzhang.dev
              </p>
            </a>
          </div>
        </div>
        <div style={{ width: "50%" }}></div>
        <div className={styles.nav}>{names.map((name, key) => HeaderCard(key, name))}</div>
      </div>
    </header>
  );
}
