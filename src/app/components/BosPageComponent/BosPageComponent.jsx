import styles from "./BosPageComponent.module.css";
import Image from "next/image";

export default function BosPageComponent() {
  return (
    <div className={styles.container}>
      <h1> BOS - Break Of Structure </h1>

      <section className={styles.summary}>
        <h2>Podsumowanie</h2>
        <div className={styles.summaryItem}>Podsumowanie</div>
      </section>
    </div>
  );
}
