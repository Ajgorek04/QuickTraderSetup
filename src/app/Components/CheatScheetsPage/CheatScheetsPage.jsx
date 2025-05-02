import CheatScheetsCards from "../CheatScheetsCards/CheatScheetsCards";
import CheatScheetsHeader from "../CheatScheetsHeader/CheatScheetsHeader";
import styles from "./CheatScheetsPage.module.css";
import fiboLogo from "../../assets/fibo/FiboLogo.jpg";

export default function CheatScheetsPage() {
  return (
    <div className={styles.content}>
      <CheatScheetsHeader />
      <div className={styles.contentCards}>
        <a href="google.com">
          <CheatScheetsCards text={"Fibonacci Retracement"} img={fiboLogo} />
        </a>

        <CheatScheetsCards
          text={"Support & Resistance"}
          img={"supportandres.jpg"}
        />
        <CheatScheetsCards text={"a"} />
        <CheatScheetsCards text={"a"} />
        <CheatScheetsCards text={"a"} />
        <CheatScheetsCards text={"a"} />
        <CheatScheetsCards text={"a"} />
      </div>
    </div>
  );
}
