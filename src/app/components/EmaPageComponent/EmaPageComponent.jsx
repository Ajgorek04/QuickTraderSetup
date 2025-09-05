import styles from "./EmaPageComponent.module.css";
import Image from "next/image";

import { ema1, ema2, ema3, ema4, ema5, ema6, ema7 } from "@/assets";

export default function EmaPageComponent() {
  return (
    <div className={styles.container}>
      <h1>Średnie Kroczące – SMA, EMA, WMA</h1>

      <section>
        <h2>1. Wprowadzenie</h2>
        <Image src={ema1} alt="ema1" />
        <p>
          Średnie kroczące to jedno z najprostszych i najpopularniejszych
          narzędzi analizy technicznej. Pomagają identyfikować trend, wygładzać
          wykres oraz znajdować potencjalne punkty wejścia i wyjścia.
        </p>
      </section>
      <section>
        <h2>2. Rodzaje średnich kroczących</h2>
        <p>🔹 SMA (Simple Moving Average)</p>
        <ul>
          <li>
            Prosta średnia krocząca obliczana jako średnia arytmetyczna cen
            zamknięcia dla danego okresu (np. 50).
          </li>
        </ul>

        <p>🔹 EMA (Exponential Moving Average)</p>
        <ul>
          <li>
            Wykładnicza średnia krocząca, która przywiązuje większą wagę do
            nowszych danych co sprawia, że reaguje szybciej na zmiane cen.
          </li>
        </ul>

        <p>🔹 WMA (Weighted Moving Average)</p>
        <ul>
          <li>
            Ważona średnia krocząca, przydziela wagi liniowe, gdzie najnowsze
            ceny mają największy wpływ.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Najczęsciej stosowane okresy średnich</h2>
        <Image src={ema2} alt="ema2" />
        <ul>
          <li>Dla trendów długoterminowych 50 100 200</li>
          <li>Dla trendów krótkoterminowych 9 12 26</li>
        </ul>
      </section>

      <section>
        <h2>4. Jak interpretować średnie</h2>
        <p>🔸 Cena powyżej średniej = trend wzrostowy</p>
        <p>Przyklad: Cena wybiła się powyżej średniej i została utrzymywana</p>
        <Image src={ema3} alt="ema3" />
        <p>
          Jeżeli cena znajduje się poniżej średniej, wskazuje to na trend
          spadkowy
        </p>
        <Image src={ema4} alt="ema4" />
        <p>
          Konsolidacja: Wykres jest niezdecydowany i emy są przecinane od dołu i
          od góry na zmiane
        </p>
        <Image src={ema5} alt="ema5" />
      </section>

      <section>
        <h2>5. Przecięcia średnich</h2>
        <p>📈 Golden Cross</p>
        <ul>
          <li>
            – Krótkoterminowa średnia (np. EMA 50) przecina długoterminową (np.
            EMA 200) od dołu w górę.
          </li>
          <li>➡️ Sygnał potencjalnego rozpoczęcia trendu wzrostowego.</li>
        </ul>
        <Image src={ema6} alt="ema6" />
        <p>📉 Death Cross</p>
        <ul>
          <li>
            – Krótkoterminowa średnia przecina długoterminową od góry w dół.
          </li>
          <li>➡️ Sygnał potencjalnego rozpoczęcia trendu spadkowego.</li>
        </ul>
        <Image src={ema7} alt="ema7" />
      </section>

      <section>
        <h2>6. Zalety i wady</h2>
        <p>✅ Zalety</p>
        <ul>
          <li>Proste i intuicyjne w użyciu</li>
          <li>Pomagają zidentyfikować kierunek trendu</li>
          <li>Pasują do każdego rynku i interwału</li>
        </ul>
        <p>⚠️ Wady</p>
        <ul>
          <li>
            Reaguje na zmiany cen z pewnym przesunięciem (jeśli nie chcemy mieć
            tego przesunięcia najlepiej używac EMA)
          </li>
          <li>
            Generuje fałszywe sygnały w konsolidacji (nie dotykamy ich w ogóle w
            konsolidacji, to głupota) lub na rynkach o niskiej płynności
          </li>
          <li>
            Skuteczność jest zależna od odpowiedniego doboru okresu średniej co
            wymaga doświadczenia
          </li>
        </ul>
      </section>
    </div>
  );
}
