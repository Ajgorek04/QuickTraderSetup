import styles from "./CheatScheetsHeader.module.css";

export default function CheatScheetsHeader() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Table of Contents</h1>
      </div>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li>fibonacci retracement</li>
          <li>support & resistance</li>
          <li>point of control</li>
          <li>vwap</li>
        </ul>
      </div>
    </header>
  );
}
