import styles from "./TradingCard.module.css";

export default function TradingCard() {
  return (
    <div className={styles.card}>
      <h2>Tytul</h2>
      <p>Opis</p>
    </div>
  );
}
