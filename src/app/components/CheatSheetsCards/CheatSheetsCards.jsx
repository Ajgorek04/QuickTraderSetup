import styles from "./CheatSheetsCards.module.css";
import Image from "next/image";

export default function CheatSheetsCards({ img }) {
  return (
    <div className={styles.card}>
      <Image src={img} alt="pocLogo" />
    </div>
  );
}
