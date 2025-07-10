import styles from "./HurstaPageComponent.module.css";
import Image from "next/image";

import { hursta1 } from "@/assets";
import { hursta2 } from "@/assets";

export default function HurstaPageComponent() {
  return (
    <div className={styles.container}>
      <h1>Kanały Hursta – identyfikacja cykli rynkowych</h1>
      <section>
        <h2>1. Wprowadzenie</h2>
        <Image src={hursta1} alt="hursta1" />
        <p>
          Kanały Hursta to narzędzie analizy technicznej służące do
          identyfikowania cykliczności rynku oraz przewidywania potencjalnych
          punktów odwrócenia. Wskaźnik ten opiera się na założeniu, że ruchy cen
          na rynkach finansowych mają charakter cykliczny.
        </p>
      </section>
      <section>
        <h2>2. Budowa kanałów</h2>
        <p>
          KanaŁy hursta są rysowane na wykresie cenowym jako 2 równoległe pasma
          górne i dolne tworzące kanał.
        </p>
        <p>
          Środek kanału reprezentują linie trendu, a granice kanału wskazują
          potencjalne poziomy wsparcia i oporu.
        </p>
        <Image src={hursta2} alt="hursta2" />
      </section>

      <section>
        <h2>3. Jak interpretować kanały Hursta</h2>
        <p>🔹 Ruch w kanale:</p>
        <ul>
          <li>
            Jeśli cena porusza się blisko górnej granicy – sugeruje to siłę
            trendu wzrostowego
          </li>
          <li>
            Jeśli cena zbliża się do dolnej granicy – wskazuje to na siłę trendu
            spadkowego
          </li>
        </ul>
        <p>🔹 Przebicie kanału:</p>
        <ul>
          <li>
            Wybicie ponad górną lub dolną granicę może oznaczać zmianę cyklu lub
            odwrócenie trendu, ale wymaga potwierdzenia innymi elementami AT.
          </li>
        </ul>
        <p>🔹 Cykliczność:</p>
        <ul>
          <li>
            Kanały pomagają identyfikować punkty zwrotne w cyklach rynkowach,
            szczegolnie w połączeniu z innymi narzędziami (najlepiej MACD lub
            RSI).
          </li>
        </ul>
      </section>

      <section>
        <h2>Zalety i wady</h2>
        <p>✅ Zalety</p>
        <ul>
          <li>Umożliwia identyfikację cykli rynkowych</li>
          <li>
            Skuteczny w przewidywaniu momentu odwrócenia na rynkach cyklicznych
          </li>
        </ul>
        <p>⚠️ Wady</p>
        <ul>
          <li>
            Mniej skuteczny na rynkach o wysokiej zmienności lub w trendach
            chaotycznych
          </li>
        </ul>
      </section>

      <section className={styles.summary}>
        <h2>Podsumowanie – Jak korzystać z MFI w praktyce?</h2>
        <div className={styles.summaryItem}>
          🎯 Identyfikuj cykle rynkowe – kanały pomagają zrozumieć, w jakiej
          fazie cyklu znajduje się rynek: akumulacji, wzrostu, dystrybucji czy
          spadku.
        </div>
        <div className={styles.summaryItem}>
          📉 Obserwuj granice kanału – zbliżenie się do dolnej lub górnej linii
          często oznacza zwiększone prawdopodobieństwo reakcji ceny (odbicia lub
          wybicia).
        </div>
        <div className={styles.summaryItem}>
          📊 Korzystaj z linii środkowej – środkowa linia kanału może działać
          jako dynamiczny opór/wsparcie oraz oś rotacyjna ceny.
        </div>
        <div className={styles.summaryItem}>
          🔍 Potwierdzaj inne sygnały – kanały Hursta są dużo skuteczniejsze w
          połączeniu z RSI, MACD itp.
        </div>
        <div className={styles.summaryItem}>
          🚫 Unikaj użycia w chaotycznych rynkach – podczas dużej zmienności lub
          newsów skuteczność kanałów spada, więc stosuj ostrożnie.
        </div>
      </section>
    </div>
  );
}
