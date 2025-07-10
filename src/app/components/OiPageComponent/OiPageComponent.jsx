import styles from "./OiPageComponent.module.css";
import Image from "next/image";

import { rsi1 } from "@/assets";
import { rsi2 } from "@/assets";
import { rsi3 } from "@/assets";

export default function OiPageComponent() {
  return (
    <div className={styles.container}>
      <h1>RSI – Relative Strength Index</h1>

      <section className={styles.summary}>
        <h2>Podsumowanie – Jak wykorzystywać RSI w tradingu?</h2>
        <div className={styles.summaryItem}>
          🎯 Obserwuj poziomy 30 / 70 (lub inne jeśli je zmieniłeś pod swoje
          preferencje) – pomagają wychwycić ekstremy rynku.
        </div>
        <div className={styles.summaryItem}>
          🧭 Używaj RSI na kilku interwałach, aby potwierdzać sygnały.
        </div>
        <div className={styles.summaryItem}>
          📊 Traktuj poziom 50 jako pomocniczy wskaźnik kierunku.
        </div>
        <div className={styles.summaryItem}>
          🔍 Szukaj dywergencji między RSI a ceną – to często skuteczne sygnały.
        </div>
        <div className={styles.summaryItem}>
          ⚙️ Łącz RSI z innymi wskaźnikami technicznymi, aby zwiększyć trafność
          decyzji.
        </div>
      </section>
    </div>
  );
}
