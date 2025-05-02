import styles from "./CheatScheetsCards.module.css";

export default function CheatScheetsCards({ text, img }) {
  const backgroundImage = typeof img === "string" ? img : img?.src;

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.cardHeader}>{text}</div>
      <div className={styles.cardInfo}>info</div>
    </div>
  );
}
