import styles from "./BosPageComponent.module.css";
import Image from "next/image";
import {
  bos1,
  bos2,
  bos3,
  bos4,
  bos5,
  bos6,
  bos7,
  bos8,
  bos9,
  bos10,
  bos11,
  bos12,
  bos13,
  bos14,
  bos15,
  bos16,
  bos17,
  bos18,
  bos19,
  bos20,
  bos21,
  bos22,
} from "@/assets";

export default function BosPageComponent() {
  return (
    <div className={styles.container}>
      <h1> Break of Structure (BoS) </h1>

      <section>
        <h2>1. Wprowadzenie</h2>
        <p>
          Break of Structure jest wtedy, kiedy koniec knota wbija się w
          <strong> body</strong> świecy.
        </p>
        <Image src={bos1} alt="bos1" />
      </section>

      <section>
        <h2>2. Fake BoS</h2>
        <p>Żeby bos był wysokiej jakosci, był prawdzimy to low świecy</p>
        <Image src={bos21} alt="bos21" />
      </section>

      <section>
        <h2>3. Fibo bez Fibo</h2>
        <div className={styles.fiboUstawienia}>
          <Image src={bos2} alt="bos2" />
          <Image src={bos3} alt="bos3" />
        </div>
      </section>

      <section>
        <h2>4. Rozrysowanie BoS</h2>
        <p>
          W tej strefie najważniejszy jest dołek – protected low. Po wybiciu
          tego low możemy dostać zmianę charakteru trendu.
        </p>
        <Image src={bos4} alt="bos4" />
      </section>

      <section className={styles.summary}>
        <h2>Podsumowanie</h2>
        <div className={styles.summaryItem}>Podsumowanie</div>
      </section>
    </div>
  );
}
