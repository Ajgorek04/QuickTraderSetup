import CheatSheetsCards from "../CheatSheetsCards/CheatSheetsCards";
import CheatSheetsHeader from "../CheatSheetsHeader/CheatSheetsHeader";
import styles from "./cheat-sheets-page.module.css";
import {
  fiboLogo,
  resistanceAndSupportLogo,
  pointOfControlLogo,
  vwapLogo,
  fibo1,
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
        <a href="/infoPage/fibo">
          <CheatSheetsCards img={pointOfControlLogo} />
        </a>
        <a href="/infoPage/fibo">
          <CheatSheetsCards img={vwapLogo} />
        </a>
      </div>
    </div>
  );
}
