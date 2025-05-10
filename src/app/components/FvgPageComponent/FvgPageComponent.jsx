import styles from "./FvgPageComponent.module.css";
import Image from "next/image";

import { fvg0 } from "@/assets";
import { fvg1 } from "@/assets";
import { fvg2 } from "@/assets";
import { fvg3 } from "@/assets";

export default function FvgPageComponent() {
  return (
    <div className={styles.container}>
      <h1>Fair Value Gap (FVG)</h1>

      <section className={styles}>
        <h2>1. Wprowadzenie</h2>
        <p>
          Fair Value Gap (FVG) to luka cenowa powstająca na wykresie w sytuacji,
          gdy rynek porusza się bez równowagi pomiędzy stroną kupującą (Buy
          Side) a sprzedającą (Sell Side). Mówimy wtedy o tzw. inefficiency,
          czyli braku balansu – przykładowo, gdy dominuje jedna ze stron
          (najczęściej kupujący lub sprzedający), a druga nie zdążyła
          zareagować.
        </p>
        <h3>Narzędzie: </h3>
        <p>
          Tego typu świece często można zidentyfikować przy pomocy indykatora
          PVSRA Volume, w którym warto włączyć wyświetlanie kolorów wolumenu –
          ułatwia to wizualne rozpoznanie świec o dużym naporze jednej ze stron
          rynku.
        </p>
        <Image src={fvg0} alt="fvgTool" className={styles.img} />
      </section>
      <section>
        <h2>2. Jak i kiedy powstaje FVG</h2>
        <p>
          FVG pojawia się zazwyczaj na świecach o wysokim wolumenie, gdzie
          większość transakcji była realizowana tylko po jednej stronie – np.
          prawie wyłącznie kupujący (Buy Side Inefficiency). <br />
          <br />
          Przykładowa świeca FVG
        </p>
        <Image src={fvg1} alt="fvg1" />
        <p>
          Na powyższym przykładzie widać świecę, na której niemal wyłącznie
          kupujący prowadzili ruch. Oznacza to brak równowagi – zbyt mało
          sprzedających, by zapewnić balans na tej świecy.
        </p>
      </section>
      <section>
        <h2>3. Wyznaczanie FVG</h2>
        <p>
          Znajdujemy świecę wolumenową (tę z silnym ruchem i wysokim wolumenem).
        </p>
        <ul>
          <li>Bierzemy szczyt (swing high) ze świecy poprzedzającej</li>
          <li>Ciągniemy do dołku (swing low) świecy następującej</li>
        </ul>
        <p></p>
        <Image src={fvg2} alt="fvg2" />
        <p>
          Aby określić najbardziej znaczącą część tej strefy (często traktowaną
          jako potencjalne wsparcie lub opór):
        </p>
        <ul>
          <li>
            Używamy narzędzia Fibonacci Retracement, zaznaczając te same punkty
            (swing high i swing low), ale zostawiamy tylko poziom 0.5 (czyli
            środek).
          </li>
          <li>
            Alternatywnie możemy po prostu zaznaczyć połowę wysokości prostokąta
            FVG.
          </li>
        </ul>

        <Image src={fvg3} alt="fvg3" />
        <p>
          To właśnie ta środkowa część jest najczęściej testowana przez cenę –
          ma największe prawdopodobieństwo reakcji i może wielokrotnie działać
          jako dynamiczne wsparcie lub opór.
          <br />
          <br />
          FVG może być respektowane wielokrotnie
        </p>
      </section>

      <section className={styles.summary}>
        <h2>5. Podsumowanie – Jak wykorzystywać FVG w tradingu?</h2>
        <div className={styles.summaryItem}>
          📉 FVG powstaje, gdy na świecy brakuje równowagi – np. przewaga
          kupujących bez reakcji sprzedających.
        </div>
        <div className={styles.summaryItem}>
          🔍 Identyfikuj takie świece z pomocą wolumenu (np. PVSRA Volume z
          kolorami).
        </div>
        <div className={styles.summaryItem}>
          📏 Wyznacz strefę FVG od szczytu świecy poprzedzającej do dołka świecy
          kolejnej po wolumenowej.
        </div>
        <div className={styles.summaryItem}>
          ✳️ Zaznacz środek FVG (0.5 boxa lub FIBO 0.5) – to najczęstszy punkt
          reakcji ceny.
        </div>
        <div className={styles.summaryItem}>
          🔁 FVG może działać jako wsparcie/opór i być respektowane
          wielokrotnie.
        </div>
      </section>
    </div>
  );
}
