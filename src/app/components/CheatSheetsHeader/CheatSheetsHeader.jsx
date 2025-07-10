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
          <a href="/infoPage/fvg">
            <li>fvg</li>
          </a>
          <a href="/infoPage/macd">
            <li>macd</li>
          </a>
          <a href="/infoPage/rsi">
            <li>rsi</li>
          </a>
          <a href="/infoPage/cvd">
            <li>cvd</li>
          </a>
          <a href="/infoPage/oi">
            <li>open interest</li>
          </a>
          <a href="/infoPage/mfi">
            <li>money flow index</li>
          </a>
          <a href="/infoPage/hursta">
            <li>kanały hursta</li>
          </a>
          <a href="/infoPage/ema">
            <li>ema</li>
          </a>
        </ul>
      </div>
    </header>
  );
}
