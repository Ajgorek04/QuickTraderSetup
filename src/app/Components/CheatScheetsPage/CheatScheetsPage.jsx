import CheatScheetsCards from "../CheatScheetsCards/CheatScheetsCards";
import CheatScheetsHeader from "../CheatScheetsHeader/CheatScheetsHeader";
import styles from "./CheatScheetsPage.module.css";
import {
  fiboLogo,
  resistanceAndSupportLogo,
  pointOfControlLogo,
  vwapLogo,
} from "@/app/assets";

export default function CheatScheetsPage() {
  return (
    <div className={styles.content}>
      <CheatScheetsHeader />
      <div className={styles.contentCards}>
        <a href="/infoPage/fibo">
          <CheatScheetsCards img={fiboLogo} />
        </a>
        <a href="/infoPage/fibo">
          <CheatScheetsCards img={resistanceAndSupportLogo} />
        </a>
        <a href="/infoPage/fibo">
          <CheatScheetsCards img={pointOfControlLogo} />
        </a>
        <a href="/infoPage/fibo">
          <CheatScheetsCards img={vwapLogo} />
        </a>
      </div>
    </div>
  );
}
