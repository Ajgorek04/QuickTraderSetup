import CheatSheetsCards from "../CheatSheetsCards/CheatSheetsCards";
import CheatSheetsHeader from "../CheatSheetsHeader/CheatSheetsHeader";
import styles from "./CheatSheetsPage.module.css";
import {
  fiboLogo,
  resistanceAndSupportLogo,
  pocLogo,
  vwapLogo,
  fvgLogo,
} from "@/assets";

export default function CheatSheetsPage() {
  return (
    <div className={styles.pageContent}>
      <CheatSheetsHeader />
      <div className={styles.contentCards}>
        <a href="/infoPage/fibo">
          <CheatSheetsCards img={fiboLogo} />
        </a>
        <a href="/infoPage/fibo">
          <CheatSheetsCards img={resistanceAndSupportLogo} />
        </a>
        <a href="/infoPage/poc">
          <CheatSheetsCards img={pocLogo} />
        </a>
        <a href="/infoPage/fibo">
          <CheatSheetsCards img={vwapLogo} />
        </a>
        <a href="/infoPage/fvg">
          <CheatSheetsCards img={fvgLogo} />
        </a>
      </div>
    </div>
  );
}
