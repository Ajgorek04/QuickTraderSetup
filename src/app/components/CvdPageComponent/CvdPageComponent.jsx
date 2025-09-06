import styles from "./CvdPageComponent.module.css";
import Image from "next/image";

import { cvd1 } from "@/assets";
import { cvd2 } from "@/assets";
import { cvd3 } from "@/assets";

export default function CvdPageComponent() {
  return (
    <div className={styles.container}>
      <h1>CVD – Cumulative Volume Delta</h1>

      <section>
        <h2 className="navbar">1. Wprowadzenie</h2>
        <Image src={cvd1} alt="cvd1" />
        <p>
          CVD (Cumulative Volume Delta) to wskaźnik oparty na rzeczywistej
          aktywności rynkowej. Mierzy różnicę pomiędzy wolumenem zleceń kupna a
          zleceniami sprzedaży w danym czasie. W praktyce pokazuje, kto w danym
          momencie dominuje na rynku – kupujący czy sprzedający.
        </p>
        <ul>
          <li>
            📈 Jeśli linia CVD rośnie – oznacza to przewagę kupujących (dodatnia
            delta).
          </li>
          <li>📉 Jeśli linia spada – dominują sprzedający (ujemna delta).</li>
        </ul>
      </section>

      <section>
        <h2 className="navbar">2. Jak działa CVD?</h2>
        <Image src={cvd2} alt="cvd2" />
        <p>
          CVD rośnie, gdy na rynku przeważa popyt (agresywne kupno), a spada,
          gdy przeważa podaż (agresywna sprzedaż). Dzięki temu możemy ocenić,
          czy za ruchem cenowym faktycznie stoi aktywność inwestorów, czy jest
          to tzw. "fałszywy ruch".
        </p>
        <p>🔍 Przykład:</p>
        <p>
          Jeśli obserwujemy rosnące świece i jednocześnie wzrost CVD, mamy
          potwierdzenie siły trendu.
        </p>
        <p>
          Z kolei jeśli cena rośnie, ale CVD spada – może to oznaczać brak
          chętnych do dalszego kupowania i potencjalne odwrócenie.
        </p>
      </section>
      <section>
        <h2 className="navbar">3. Siła trendu i "nabita" delta</h2>
        <p>
          Delte na CVD powinniśmy porównać z deltą na hyblocku, ponieważ jeżeli
          delta będzie „nabita” longującymi, będzie ich wręcz zbyt wiele to
          możemy spodziewać się tzw. <b>long squeeze'a</b> co oznacza nagłą
          likwidację pozycji długich tylko po to żeby wyciąć longujących (
          zwykle tych którzy mają wąskie stop losy ) i dalej kontynuować ruch
          wzrostowy.
        </p>
        <p>
          CVD używajmy do tego czy trend jest mocny, czy będą się dołączać nowe
          osoby by kontynuować ten trend.
        </p>
      </section>

      <section>
        <h2 className="navbar">4. Korelacja z ceną</h2>
        <ul>
          <li>✅ Cena rośnie + CVD rośnie → potwierdzony trend wzrostowy.</li>
          <li>
            ⚠️Cena rośnie + CVD spada → ostrzeżenie, możliwy fałszywy ruch, brak
            chęci kupowania mimo, że cena idzie w górę.
          </li>
          <li>
            ❗️ Cena spada + CVD rośnie → potencjalna dywergencja i możliwe
            odwrócenie.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="navbar">5. CVD w kontekście analizy trendu</h2>
        <p>
          CVD jest szczególnie pomocne przy ocenie siły trendu po ruchu
          impulsowym:
        </p>
        <ul>
          <li>
            Po mocnych świecach wolumenowych często następuje krótka
            konsolidacja kończąca się np. flagą lub wedgem.
            <br />
            Jeżeli w tym czasie linia CVD nadal rośnie, świadczy to o dalszym
            zainteresowaniu kupujących – co może być zapowiedzią kontynuacji
            ruchu.
          </li>
          <li>
            Dodatkowo możemy to potwierdzać Fibonaccim, który określi nam czy
            trend jest mocny czy słaby. Korekta po tym ruchu impulsywnym nie
            powinna być większa niż 0.382.
          </li>
          <li></li>
        </ul>
      </section>
      <section>
        <h2 className="navbar">6. Interpretacja ekstremów</h2>
        <p>Gdy CVD osiąga nowe maksima lub minima, może to oznaczać:</p>
        <ul>
          <li>Bardzo silne momentum (przyspieszenie trendu),</li>
          <li>Lub wyczerpanie rynku (np. paniczne zakupy/sprzedaż).</li>
        </ul>
        <p>
          Możemy sobie na oko wyrysować średnią szerokość jaka jest po obu
          stronach.
        </p>
        <Image src={cvd3} alt="cvd3" />
        <p>
          To pokazuje nam, że w danej sytuacji np. trend spadkowy może się
          przeciągnąć na trochę dłuższy ruch niż myślimy.
        </p>
      </section>

      <section>
        <h2 className="navbar">7. Zalety i wady CVD</h2>
        <p>✅ Zalety:</p>
        <ul>
          <li>Pokazuje rzeczywistą aktywność kupujących i sprzedających.</li>
          <li>Sprawdza się w analizie order flow.</li>
          <li>
            Świetnie współpracuje z narzędziami takimi jak Fixed Range Volume
            Profile.
          </li>
        </ul>
        <p>⚠️ Wady:</p>
        <ul>
          <li>
            Wymaga dostępu do dokładnych danych wolumenu, co może być
            ograniczeniem bo nie kazdy ma dostęp do takich narzędzi ( na
            discordzie CST akurat są takie za darmo ).
          </li>
          <li>
            Może być mylący na rynkach o niskiej płynności – duże zlecenia mogą
            zaburzyć jego odczyt, ktoś może pompować cenę.
          </li>
        </ul>
      </section>
    </div>
  );
}
