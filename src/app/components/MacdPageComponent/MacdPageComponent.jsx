import styles from "./MacdPageComponent.module.css";
import Image from "next/image";

import { macd1 } from "@/assets";
import { macd2 } from "@/assets";
import { macd3 } from "@/assets";

export default function MacdPageComponent() {
  return (
    <div className={styles.container}>
      <h1>MACD – Moving Average Convergence Divergence</h1>

      <section className={styles}>
        <h2 className="naglowek">1. Wprowadzenie</h2>
        <Image src={macd1} alt="macd1" />
        <p>
          MACD to popularny oscylator używany w analizie technicznej, służący
          do: identyfikacji trendu, oceny momentum (impetu rynku), wychwytywania
          potencjalnych punktów odwrócenia rynku.
        </p>
        <h3>Budowa MACD: </h3>
        MACD składa się z trzech głównych elementów:
        <p>🔵 Linia MACD (niebieska)</p>
        <ul>
          <li>
            Obliczana jako różnica dwóch wykładniczych średnich kroczących
            (EMA): zazwyczaj EMA 12 (krótkoterminowa) i EMA 26 (długoterminowa).
          </li>
          <li>
            Pokazuje relację między krótkoterminowym a długoterminowym ruchem
            ceny.
          </li>
        </ul>
        <p>🟠 Linia sygnałowa (pomarańczowa)</p>
        <ul>
          <li>Jest to 9-okresowa EMA linii MACD.</li>
          <li>
            Służy jako wyzwalacz sygnałów kupna lub sprzedaży – przecięcia z
            linią MACD mogą wskazywać zmianę kierunku.
          </li>
        </ul>
        <p>📊 Histogram MACD</p>
        <ul>
          <li>Przedstawia różnicę między linią MACD a linią sygnałową.</li>
          <li>
            Pomaga ocenić siłę momentum – większy histogram = silniejsze
            momentum trendu.
          </li>
        </ul>
        <Image src={macd2} alt="macd2" />
      </section>
      <section>
        <h2>2. Jak używać MACD</h2>
        <p>📌 Główne zasady: </p>
        <ul>
          <li>
            MACD powyżej linii 0 – krótkoterminowa EMA powyżej długoterminowej ⇒
            trend wzrostowy.
          </li>
          <li>
            MACD poniżej linii 0 – krótkoterminowa EMA poniżej długoterminowej ⇒
            trend spadkowy.
          </li>
        </ul>
        <p>🖼️ Przykład zejścia: </p>
        <Image src={macd3} alt="macd3" />
        <p>
          Na załączonym obrazku widzimy zejście na wykresie. MACD przecina linię
          0 z góry na dół – pojawia się sygnał krótkotrwałego trendu spadkowego.
        </p>
        <p>Dodatkowo warto wiedzieć, że MACD dobrze działa z dywergencjami.</p>
      </section>
      <section>
        <h2 className="naglowek">3. Zalety i wady MACD</h2>
        <p>✅ Zalety:</p>
        <ul>
          <li>Przejrzysty i łatwy do interpretacji.</li>
          <li>
            Działa dobrze na trendach, łatwo możemy wyznaczyć w jakim trendzie
            jesteśmy.
          </li>
        </ul>
        <p>⚠️ Wady:</p>
        <ul>
          <li>Może generować fałszywe sygnały</li>
          <li>
            Jest opóźniony, będzie delikatnie się spóźniał, więc nie traktujmy
            go jak "pewniak"
          </li>
        </ul>
      </section>
    </div>
  );
}
