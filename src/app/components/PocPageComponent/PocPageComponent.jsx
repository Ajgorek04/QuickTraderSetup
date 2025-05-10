import styles from "./PocPageComponent.module.css";
import Image from "next/image";
import {
  pocUstawienia,
  pocUstawienia2,
  poc1,
  poc2,
  poc3,
  poc4,
  poc5,
  poc6,
  pocTool,
} from "@/assets";

export default function PocPageComponent() {
  return (
    <div className={styles.container}>
      <h1>POC - Point Of Control</h1>

      <section className={styles}>
        <h2>1. Wprowadzenie</h2>
        <p>
          POC to najważniejszy poziom wolumenowy – miejsce, gdzie wystąpił
          największy obrót (najwyższy wolumen) w wybranym zakresie czasu. Często
          stanowi kluczowy poziom reakcji ceny – może działać zarówno jako
          wsparcie, jak i opór.
        </p>
        <ul>
          <li>
            VAH oraz VAL są tak jakby strefami pomiędzy którymi się porusza
            cena.
          </li>
          <li>VAH (Value Area High) – górna granica strefy wartości.</li>
          <li>VAL (Value Area Low) – dolna granica strefy wartości.</li>
        </ul>
        <h3>Narzędzie: </h3>
        <Image src={pocTool} alt="pocTool" className={styles.img1} />
      </section>

      <section>
        <h2>2. Podstawowe ustawienia POC</h2>
        <p>
          Ustawienia POC i profilu wolumenowego można dostosować do własnych
          preferencji. <br />
          Wiele zależy od stylu tradingu – niektórzy zaznaczają mniejsze
          klastry, inni obejmują całe wykresy.
        </p>
        <div className={styles.ustawieniaPoc}>
          <Image src={pocUstawienia} alt="ustawieniaPoc" />
          <Image src={pocUstawienia2} alt="ustawieniaPoc2" />
        </div>
      </section>

      <section>
        <h2>3. Jak zaznaczać Volume Profile - Praktyka </h2>
        <h3>A. Klaster impulsu</h3>
        <p>
          Wybieramy fragment wykresu, na którym chcemy analizować wolumen (np.
          od początku impulsu do pierwszego swing high).
        </p>
        <Image src={poc1} alt="poc1" className={styles.img} />

        <p>
          Rysujemy Volume Profile, by zobaczyć, gdzie występują POC, VAH, VAL.
        </p>
        <Image src={poc2} alt="poc2" className={styles.img} />
        <h3>B. Łączenie wielu POC</h3>
        <ul>
          <li>
            Możemy wyznaczać kilka POC dla różnych zakresów: np. jeden dla
            lokalnego impulsu, drugi dla większego swingu.
          </li>
          <li>
            Jeśli różne POC pokrywają się z ważnymi strefami (np. płynności),
            tworzy się tzw. confluence – punkt o zwiększonym znaczeniu.
          </li>
        </ul>
        <Image src={poc3} alt="poc3" className={styles.img} />

        <h3>Przykład: VAL jako punkt potwierdzenia</h3>
        <ul>
          <li>
            Gdy VAL (dolna granica strefy wartości) pokrywa się ze strefą
            płynności, tworzy to mocny sygnał.
          </li>
          <li>
            To miejsce może posłużyć jako potencjalny poziom wejścia w pozycję,
            szczególnie jeśli inne narzędzia techniczne (np. retracement,
            struktura rynku) potwierdzają ten poziom.
          </li>
        </ul>
        <Image src={poc4} alt="poc4" className={styles.img} />
      </section>

      <section>
        <h2>4. Gapy wolumenowe i "dziury" w profilu </h2>
        <ul>
          <li>
            W profilu wolumenowym występują miejsca o bardzo niskim wolumenie –
            to tzw. gapy wolumenowe.
          </li>
          <li>
            Są to strefy, przez które cena może się przesuwać szybko i
            impulsywnie, ponieważ brakuje tam aktywności handlowej.
          </li>
        </ul>
        <Image src={poc5} alt="poc5" className={styles.img} />
        <p>
          Jeśli cena przebije VAL i wejdzie w gap wolumenowy, istnieje duża
          szansa na dynamiczne zejście do kolejnej strefy płynności (np. obszar
          o wyższym wolumenie poniżej).
        </p>
        <Image src={poc6} alt="poc6" className={styles.img} />
      </section>

      <section className={styles.summary}>
        <h2>5. Podsumowanie – Jak wykorzystywać POC w tradingu?</h2>
        <div className={styles.summaryItem}>
          🎯 Wyznaczaj POC i obserwuj reakcje ceny w jego pobliżu.
        </div>
        <div className={styles.summaryItem}>
          🧭 Sprawdzaj, gdzie przebiegają VAH i VAL – mogą stanowić granice
          konsolidacji.
        </div>
        <div className={styles.summaryItem}>
          ⚙️ Używaj głębszych lub bardziej lokalnych zakresów Volume Profile w
          zależności od interwału i stylu gry.
        </div>
        <div className={styles.summaryItem}>
          🧠 Szukaj confluence z innymi narzędziami: Fibonaccim, order blockami,
          płynnością, średnimi kroczącymi itp.
        </div>
        <div className={styles.summaryItem}>
          🚀 Obserwuj gapy wolumenowe – cena może tam przyspieszyć.
        </div>
      </section>
    </div>
  );
}
