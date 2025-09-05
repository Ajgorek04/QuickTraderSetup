import styles from "./RsiPageComponent.module.css";
import Image from "next/image";

import { rsi1 } from "@/assets";
import { rsi2 } from "@/assets";
import { rsi3 } from "@/assets";

export default function RsiPageComponent() {
  return (
    <div className={styles.container}>
      <h1>RSI – Relative Strength Index</h1>

      <section className={styles}>
        <h2>1. Wprowadzenie</h2>
        <Image src={rsi1} alt="rsi1" />
        <p>
          RSI (Relative Strength Index) to wskaźnik analizy technicznej, który
          mierzy relację między średnimi wzrostami a spadkami ceny w określonym
          okresie. Pomaga ocenić, czy dane aktywo jest:
        </p>
        <ul>
          <li>
            Wykupione (overbought) – cena jest wyższa niż oczekiwania rynku,
          </li>
          <li>
            Wyprzedane (oversold) – cena jest niższa niż oczekiwania rynku.
          </li>
        </ul>
      </section>

      <section className={styles.sectionClass}>
        <h2>2. Budowa i ustawienia RSI</h2>
        <p>
          Ustawienia RSI możemy dopasować do swoich potrzeb, robić backtesty
          sprawdzać itp. Modyfikujemy RSI Upper Band oraz RSI Lower Band.
        </p>
        <p>
          Czyli przykładowo jak tylko wychodzimy powyżej górnej bandy np. 70 to
          jesteśmy overbought czyli uznajemy to za cene wyższą niż rynek tego
          oczekuje. Podobnie do oversold np. poniżej 30 czyli dane aktywo ma
          niższa cene niż rynek tego oczekuje.
        </p>
        <p>
          Mamy jeszcze linie środkową, która pokazuje przewagę kupujących (jeśli
          powyżej linii) / sprzedających (jeśli jesteśmy poniżej tej linii) i
          jej nie zmieniamy, ona również może nam poniekąd posłużyc jako opor
          lub wsparcie gdy przykładowo się od niej odbijamy, mocniejsze
          przebicie może być sygnałem do odwrócenia trendu.
        </p>
        <Image src={rsi2} alt="rsi2" />
      </section>

      <section>
        <h2>3. Jak interpretować RSI</h2>
        <p>
          W silnych trendach RSI może długo pozostawać w strefie wykupienia lub
          wyprzedania, więc nie możemy wtedy oczekiwać natychmiastowego
          odwrócenia więc na to musimy BARDZO uważać.
        </p>
        <p>Przykład takiej sytuacji:</p>
        <Image src={rsi3} alt="rsi3" />
        <p>
          Niższe interwały na RSI np. 1h potwierdzamy wyższymy 4h 7h 12h itp, po
          to żeby mieć większe prawdopodobieństo czy już jesteśmy overbought /
          oversold czy jeszcze mamy miejsce.
        </p>
        <p>RSI również powinniśmy łączyć z dywergencjami.</p>
      </section>

      <section>
        <h2>4. Zalety i wady RSI</h2>
        <p>✅ Zalety:</p>
        <ul>
          <li>Prosty i intuicyjny w użyciu.</li>
          <li>Skuteczny w identyfikowaniu ekstremalnych warunków rynkowych.</li>
          <li>Dobrze współpracuje z innymi oscylatorami.</li>
        </ul>
        <p>⚠️ Wady:</p>
        <ul>
          <li>
            Może generować fałszywe sygnały (szczególnie w trendach bocznych).
          </li>
          <li>Podobnie jak inne oscylatory – działa z opóźnieniem.</li>
        </ul>
      </section>
    </div>
  );
}
