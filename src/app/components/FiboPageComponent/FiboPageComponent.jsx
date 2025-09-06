import styles from "./FiboPageComponent.module.css";
import Image from "next/image";
import {
  poziomyFibo,
  fibo1,
  fibo2,
  fibo3,
  fibo4,
  fibo5,
  fibo6,
  fibo7,
  fibo8,
  fibo9,
  fibo10,
  fibo11,
} from "@/assets";

export default function FiboPageComponent() {
  return (
    <div className={styles.container}>
      <h1>Fibonacci Retracement</h1>

      <section className={styles}>
        <h2 className="navbar">1. Wprowadzenie</h2>
        <p>
          Poziomy fibo pomagają wyznaczyć potencjalne poziomy wsparcia i oporu
          na rynku, szczególnie w trakcie korekt w obrębie dominującego trendu.
        </p>
        <p>
          Działa dobrze, ponieważ wskazuje strefy zwiększonej płynności, w
          których często dochodzi do reakcji cenowej.
        </p>
      </section>

      <section className={styles.sectionClass}>
        <h2 className="navbar">2. Najważniejsze poziomy Fibonacciego</h2>
        <p>Mogą się różnić w zależności od metodologii i preferencji</p>
        <Image src={poziomyFibo} alt="poziomyFibo" />
        <ul>
          <li>0.382 (38.2%) – popularny w silnych trendach.</li>
          <li>
            0.5 (50%) – dobry poziom bo oznacza głęboką korektę w ramach trendu)
          </li>
          <li>0.618–0.65 (61.8–65%) – tzw. „golden pocket”.</li>
        </ul>
        <p>
          Poziomy Fibo nie są liniami dokładnymi – mogą być naruszane, są to
          obszary oraz strefy. Narzędzie rozciągamy od lewej do prawej.
        </p>
      </section>

      <section>
        <h2 className="navbar">
          3. Jak korzystać z Fibonacci Retracement – Praktyka
        </h2>
        <h3>Krok 1: Wyznaczenie trendu</h3>
        <ul>
          <li>
            Na wyższym interwale (np. D1) sprawdzamy czy jest np wzrostowy.
          </li>
          <li>
            Potem niższy interwał (np. H4) – potwierdzamy kierunek trendu.
          </li>
        </ul>
        <h3>Krok 2: Identyfikacja impulsu</h3>
        <p>
          W trendzie wzrostowym: od dołka do szczytu. W spadkowym – odwrotnie.
        </p>
        <Image src={fibo1} alt="fibo1" />
        <p>
          W trendzie wzrostowym używając fibo retracement chcemy znaleźć wejście
        </p>
        <h3>Krok 3: Scenariusze korekt</h3>
        <h4>A. Silny trend wzrostowy</h4>
        <p>
          W mocnym trendzie wzrostowym gdzie momentum jest mocno zauważalne,
          wtedy dla nas kluczowe jest fibo 0.382, ponieważ w mocnym trendzie
          wzrostowym zejście do 0.382 jest bardziej realne niż do aż 0.5 /
          0.618. <br />
          <br />
          Możemy przykładowo połączyć poziom 0.382 z respektowaną strefą
          płynności i wejść w pozycję. <br />
          <br />
          (Najlepiej łączyć to przykładowo ze średnimi kroczącymi, vwapem)
        </p>
        <Image src={fibo2} alt="fibo2" />
        <h4>B. Umiarkowany trend</h4>
        <p>
          Głębsza korekta możliwa – 0.5–0.618. Przebicie 0.618 = możliwy retest
          początku swingu.
        </p>
        <Image src={fibo3} alt="fibo3" />
      </section>

      <section>
        <h2 className="navbar">4. Zbieranie Take Profitów</h2>
        <p>
          TP można zbierać przy poziomach Fibo. <br />
          <br />
          Jeśli przykładowo jesteśmy w shorcie i nie zbieraliśmy jeszcze TP idąc
          w dół, a wykres zaczyna zawracać to możemy zbierać profity na
          kolejnych poziomach, najlepiej aż do 0.618 bo jeśli go wyłamiemy to
          może być niebezpieczny powrót na BE.
        </p>
        <Image src={fibo4} alt="fibo4" />
      </section>

      <section>
        <h2 className="navbar">
          5. Fibonacci Expansion – Wyznaczanie targetów
        </h2>
        <p>
          Expansion pozwala wyznaczać TP przy kontynuacji trendu <br />
          Jak zaznaczamy:
        </p>
        <ul>
          <li>Od dołka swingu</li>
          <li>Do końca impulsu</li>
          <li>Z powrotem do początku swingu</li>
        </ul>
        <Image src={fibo5} alt="fibo5" />

        <p>Poziomy TP:</p>

        <ul>
          <li>
            1. Poziom 1.0 (100%) - równowartość swinga w ktorego wchodzilismy -
            100% tego ruchu
          </li>
          <li>2. Poziom pomiędzy 1.313 a 1.272</li>
          <li>3. Poziom 1.618 - często końcowy target</li>
        </ul>
      </section>

      <section>
        <h2 className="navbar">
          6. Fibonacci Extended – Głębsza analiza kontynuacji
        </h2>
        <p>
          Będzie pokazywało zakres danego ruchu zaznaczonego swinga pod
          kontynuajcę np. ruchu wzrostowego.
          <br />
          Jak zaznaczamy:
        </p>
        <ul>
          <li>Na początku impulsu</li>
          <li>Na szczycie impuslu</li>
          <li>Na 1 większej korekcie</li>
        </ul>
        <Image src={fibo6} alt="fibo6" />
        <p>
          Jeśli już wyznaczyliśmy to najlepszą strefą wejścia (nie pewną) jest
          (zielona strefa).
        </p>
        <Image src={fibo7} alt="fibo7" />
        <p>
          W sytuacji w której mamy już wyznaczone fib extended i pokazane
          miejsce wejścia w pozycję - możemy je potwierdzić jeszcze zwykłym
          fibo, ciągnać go od 0 do 1.
        </p>
        <Image src={fibo8} alt="fibo8" />
        <h3>Przykład</h3>
        <p>
          Rysujemy fibo expansion i naszym miejscem wchodzenia do ewentualnego
          trade'a była by ta zielona strefa na kontynuację zejścia.
        </p>
        <Image src={fibo9} alt="fibo9" />
        <p>I tu już wejście</p>
        <Image src={fibo10} alt="fibo10" />
        <p>
          Jeśli cena wraca do 1.618 – można zebrać ostatnie TP i zamykać pozycję
          oraz rozważyć otwarcie przeciwnej (Nie zawsze, ale to wiadomo). <br />
          <br />A miejsce ewentualnego ponownego wejscia w shorta to poziom 1.0
          czyli 100%
        </p>
        <Image src={fibo11} alt="fibo11" />
      </section>
    </div>
  );
}
