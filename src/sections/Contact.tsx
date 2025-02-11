import "./Global.css";

import styles from "./Contact.module.css";

export default function ContactSection() {
  return (
    <div className={`section-container ${styles.container}`}>
      <h1>Contact Me</h1>
      <div className={styles.contact_grid}>
        <p>Contact Information</p>
        <p>Visualization of my Resume!</p>
      </div>
    </div>
  );
}
