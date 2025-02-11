import styles from "./Header.module.css";

function HeaderCard(key: number, name: string) {
  return (
    <div key={key} className={styles.card}>
      <a href={`#${name}`} style={{ textDecoration: "none" }}>
        <p>{name}</p>
      </a>
    </div>
  );
}

export default function HeaderSection() {
  // open a file
  const names = ["Home", "About", "Contact"];

  return (
    <header id={"Home"} className={styles.header}>
      <div>
        <div className={styles.container}>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Header</p>
          <div style={{ width: "30px" }}></div>
          <div className={styles.nav}>{names.map((name, key) => HeaderCard(key, name))}</div>
        </div>
      </div>
    </header>
  );
}
