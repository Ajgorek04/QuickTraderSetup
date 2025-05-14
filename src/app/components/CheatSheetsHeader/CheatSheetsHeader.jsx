import styles from "./CheatSheetsHeader.module.css";

export default function CheatSheetsHeader() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Table of Contents</h1>
      </div>
      <div className={styles.content}>
        <ul className={styles.list}>
          <a href="/infoPage/fibo">
            <li>fibonacci retracement </li>
          </a>
          <a href="">
            <li>support & resistance</li>
          </a>
          <a href="/infoPage/poc">
            <li>point of control (POC) </li>
          </a>
          <a href="/infoPage/vwap">
            <li>vwap</li>
          </a>
        </ul>
      </div>
    </header>
  );
}
