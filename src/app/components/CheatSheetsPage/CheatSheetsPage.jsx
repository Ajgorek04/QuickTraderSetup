import CheatSheetsCards from "../CheatSheetsCards/CheatSheetsCards";
import CheatSheetsHeader from "../CheatSheetsHeader/CheatSheetsHeader";
import styles from "./CheatSheetsPage.module.css";
import { logos } from "@/assets";

export default function CheatSheetsPage() {
  return (
    <div className={styles.pageContent}>
      <CheatSheetsHeader />
      <div className={styles.contentCards}>
        <a href="/infoPage/fibo">
          <CheatSheetsCards img={logos[0]} />
        </a>
        <a href="/infoPage/poc">
          <CheatSheetsCards img={logos[1]} />
        </a>
        <a href="/infoPage/vwap">
          <CheatSheetsCards img={logos[2]} />
        </a>
        <a href="/infoPage/fvg">
          <CheatSheetsCards img={logos[3]} />
        </a>
        <a href="/infoPage/macd">
          <CheatSheetsCards img={logos[4]} />
        </a>
        <a href="/infoPage/rsi">
          <CheatSheetsCards img={logos[5]} />
        </a>
        <a href="/infoPage/cvd">
          <CheatSheetsCards img={logos[6]} />
        </a>
        <a href="/infoPage/oi">
          <CheatSheetsCards img={logos[7]} />
        </a>
        <a href="/infoPage/mfi">
          <CheatSheetsCards img={logos[8]} />
        </a>
        <a href="/infoPage/hursta">
          <CheatSheetsCards img={logos[9]} />
        </a>
        <a href="/infoPage/ema">
          <CheatSheetsCards img={logos[10]} />
        </a>
        <a href="/infoPage/bos">
          <CheatSheetsCards img={logos[11]} />
        </a>
        <a href="/infoPage/trendline">
          <CheatSheetsCards img={logos[12]} />
        </a>
        <a href="/infoPage/abc">
          <CheatSheetsCards img={logos[13]} />
        </a>
        <a href="/infoPage/hyblock">
          <CheatSheetsCards img={logos[14]} />
        </a>
        <a href="/infoPage/orderblock">
          <CheatSheetsCards img={logos[15]} />
        </a>
      </div>
    </div>
  );
}
