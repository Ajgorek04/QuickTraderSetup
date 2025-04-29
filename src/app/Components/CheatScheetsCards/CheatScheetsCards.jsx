import styles from "./CheatScheetsCards.module.css";

export default function CheatScheetsCards({ text }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>header</div>
      <div className={styles.cardImg}>img</div>
      <div className={styles.cardInfo}>info</div>
    </div>
  );
}
