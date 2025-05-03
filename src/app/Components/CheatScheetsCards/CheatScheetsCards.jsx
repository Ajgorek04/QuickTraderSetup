import styles from "./CheatScheetsCards.module.css";

export default function CheatScheetsCards({ text, img }) {
  const backgroundImage = typeof img === "string" ? img : img?.src;

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
}
