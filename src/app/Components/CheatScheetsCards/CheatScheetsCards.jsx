import styles from "./CheatScheetsCards.module.css";

export default function CheatScheetsCards({ text, img }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>{text}</div>
      <div className={styles.cardImg}>
        <img src={img} alt="" />
      </div>
      <div className={styles.cardInfo}>info</div>
    </div>
  );
}
