import CheatScheetsCards from "../CheatScheetsCards/CheatScheetsCards";
import CheatScheetsHeader from "../CheatScheetsHeader/CheatScheetsHeader";
import styles from "./CheatScheetsPage.module.css";

export default function CheatScheetsPage() {
  return (
    <div className={styles.content}>
      <CheatScheetsHeader />
      <div className={styles.contentCards}>
        <CheatScheetsCards text={"Fibonacci Retracement"} img={"fibo.png"} />
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
