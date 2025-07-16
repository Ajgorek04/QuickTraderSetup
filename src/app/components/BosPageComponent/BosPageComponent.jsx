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
        <p>
          Żeby BoS był wysokiej jakości i był prawdziwy to low świecy
          poprzedzającej BoS'a musi zostać przetestowane przez strefę BoS'a
        </p>
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
          W strefie BoS najważniejszy jest dołek – protected low, po wybiciu
          którego, możemy dostać zmianę charakteru trendu.
        </p>
        <Image src={bos4} alt="bos4" />
      </section>

      <section>
        <h2>5. Jak szukamy trade'a - najprostsza metoda</h2>
        <ul>
          <li>
            <strong>Entry:</strong> na lub tuż powyżej linii BoS
          </li>
          <li>
            <strong>Stop Loss:</strong> pod protected low
          </li>
          <li>
            <strong>RR:</strong> 1:2
          </li>
        </ul>
        <Image src={bos5} alt="bos5" />
      </section>

      <section>
        <h2> 6. Przykład zagrania</h2>
        <Image src={bos6} alt="bos6" />
        <p>Mamy: </p>
        <ul>
          <li>Wybicie high → powstaje BoS</li>
          <li>Wyższe high i wyższe low → silny trend wzrostowy</li>
        </ul>
        <p>Co robimy: </p>
        <ul>
          <li>Zaznaczamy Fibo, BoS, protected low</li>
          <li>Czekamy na powrót ceny do strefy BoS</li>
        </ul>
        <Image src={bos7} alt="bos7" />
        <ul>
          <li>
            Wykres wraca do strefy, robi jakieś dołki i ucieka z powrotem do
            góry ale w tym przypadku jest to płynność – liquidity
          </li>
          <li>
            My szukając trade’a szukamy wyjścia i ponownego retestu strefy BoS’a
          </li>
          <li>W tym przypadku retest strefy odbył się na BoS</li>
        </ul>
        <Image src={bos8} alt="bos8" />
        <h4>Podsumowując</h4>
        <ul>
          <li>Szukamy BoS’a</li>
          <li>Szukamy wybicia higher high w trendzie wzrostowym</li>
          <li>
            Szukamy zrobienia płynności, wyjścia, retestu i impulsu w góre
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Na co jeszcze zwrócić uwagę ?</h2>
        <ul>
          <li>
            Knot zawraca nad linią BoS – nie dotykając jej → nie jest to
            liquidity
          </li>
          <li>Gdyby dotknął – gralibyśmy z niższej strefy</li>
        </ul>
        <Image src={bos9} alt="bos9" />

        <p>
          Tutaj się to nie odbyło i mieliśmy wyjście do góry z BoS’a, następnie
          powrót – nasze liquidity, wyjście do góry i kolejny powrót gdzie
          złapaliśmy trade’a.
        </p>
      </section>

      <section>
        <h2>8. Kolejny przykład</h2>
        <p>
          Mamy tutaj jakieś low i czekamy na potwierdzenie BoS’a, czy to już
          jest trend spadkowy
        </p>
        <Image src={bos10} alt="bos10" />
        <p>
          Mamy tapnięcie low, ale świeca zamyka się powyżej BoS → brak
          potwierdzenia
        </p>
        <Image src={bos11} alt="bos11" />
        <p>
          W tym momencie mamy już potwierdzenie, że jest BoS, więc od razu
          zaznaczmy strefę
        </p>
        <p>
          Widzimy, że świeca zaczyna wracać i testować tą strefę, uciekła z niej
          i następny ruch to ten gdzie powinniśmy łapać shorta, ale gdzie
          dokładnie?
        </p>
        <Image src={bos12} alt="bos12" />
        <p>
          Mamy tutaj strukturę, która „łapała” tego BoS’a i go wytworzyła oraz
          powyżej tej struktury mamy 3 gapy FVG, więc możemy się domyślić, że
          będą chcieli je uzupełnić.
        </p>
        <Image src={bos13} alt="bos13" />
        <p>
          Patrząc dalej po lewej stronie mamy strukturę gdzie jest impuls
          wzrostowy, korekta, impuls, coś co jest naszym centrum
          zainteresowania. Zaznaczamy więc strefę i ustawiamy się z pozycją.
        </p>
        <Image src={bos15} alt="bos15" />
        <h4>Dodatkowe uwagi</h4>
        <p>
          Jeżeli mieli byśmy tą strefę na 4h i nie widzielibyśmy za dużo, to
          wtedy zmieniamy sobie time frame na mniejszy np. 1h, 15min. Wtedy
          możemy wywnioskować, czy FVG dalej istnieje, czy mamy potwierdzenia
        </p>
        <Image src={bos16} alt="bos16" />
        <p>A tutaj widok z 15min</p>
        <Image src={bos17} alt="bos17" />
      </section>

      <section>
        <h2>9. Przykład na BTC</h2>
        <p>
          Mamy tapnięcie strefy – tutaj nam powstała płynność i to jest coś po
          co wykres powinien wrócić, więc jeżeli zaczniemy spadać, to do longa
          będziemy chcieli się przyłączyć w strefie BoS
        </p>
        <Image src={bos18} alt="bos18" />
        <p>Przykład setupu</p>
        <ul>
          <li>Entry na liquidity</li>
          <li>SL poniżej protected low</li>
          <li>Gramy pod szczyt</li>
        </ul>
        <Image src={bos19} alt="bos19" />
        <h4>Jak możemy poprawić entry ?</h4>
        <p>
          Mamy po lewej wykres gdzie coś się dzieje, dodatkowo mamy fvg i
          wchodząc z tej strefy mamy aż 7:1
        </p>
        <Image src={bos20} alt="bos20" />
      </section>

      <section>
        <h2>10. Dodatkowe informacje</h2>
        <p>
          Strategia mówi o graniu do poprzedniego high, ale jak mamy słabe,
          marne high (lub low adekwatnie do panującego trendu), tutaj zaledwie
          parę cm nad naszym entry to ten trade będzie marnej jakości, więc
          jeżeli po BoS'ie mamy marny szczyt, to wejście z samego BoS'a będzie
          marnym tradem
        </p>
        <Image src={bos22} alt="22" />
      </section>

      <section className={styles.summary}>
        <h2>🧾 Podsumowanie – Jak grać BoS'em skutecznie?</h2>
        <div className={styles.summaryItem}>
          🎯 BoS + order blocki = skuteczna strategia
        </div>
        <div className={styles.summaryItem}>
          🔐 Zaznaczaj <strong>Protected Low</strong> – miejsce na SL
        </div>
        <div className={styles.summaryItem}>
          ⚔️ Wchodź po potwierdzeniu (np. formacja świecowa, FVG, reakcja ceny)
        </div>
        <div className={styles.summaryItem}>
          ⏳ Zmieniaj TF na niższy, jeśli nie widzisz klarownego setupu
        </div>
        <div className={styles.summaryItem}>
          💡 Unikaj setupów z marną strukturą po wybiciu – liczy się jakość!
        </div>
      </section>
    </div>
  );
}
