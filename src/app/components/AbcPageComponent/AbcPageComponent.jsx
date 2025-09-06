import styles from "./AbcPageComponent.module.css";
import Image from "next/image";
import {
  abc0,
  abc1,
  abc2,
  abc3,
  abc4,
  abc5,
  abc6,
  abc7,
  abc8,
  abc9,
  abc10,
  abc11,
  abc12,
  abc13,
} from "@/assets";

export default function AbcPageComponent() {
  return (
    <div className={styles.container}>
      <h1> Korekta ABC według Deepa </h1>

      <section>
        <h2>1. Teoria</h2>
        <h3> Korekta prosta ABC </h3>
        <ul>
          <li>
            Charakteryzuje się głównie w trendzie wzrostowym (w spadkowym też
            mogą być), tym że fala B nie wybija nowego szczytu, a fala C
            przebija dołek fali A i tym samym ustanawia nowy dołek lokalny.
          </li>
          <li>
            W trendzie <strong>wzrostowym</strong> fala B powinna być krótsza od
            fali A i jej wierzchołek nie powinien przebijać punktu X - tego od
            którego zaczynamy. <br />
            Fala C - dłuższa od fali B i jej minimum nie będzie nam przebijało
            dołka fali A.
          </li>
          <li>
            W trendzie <strong>spadkowym</strong> fala B będzie krótsza od fali
            A, a minimum nie przebija punktu X. <br />
            Fala C - dłuższa od fali B i jej ekstremum przebija szczyt fali A
          </li>
        </ul>

        <h3> Korekta płaska ABC </h3>
        <ul>
          <li>
            Najczęściej pojawia się w silnych trendach. Znacznie rzadziej w
            początkowych etapach budowania trendu, dopiero później powinna się
            pojawiać.
          </li>
          <li>
            W trendzie <strong>wzrostowym</strong> fala B nie wybija nowego
            szczytu, a fala C nie przebije dołka fali A, czyli fala C jest
            najkrótszą spośród fal.
          </li>
        </ul>

        <h3>Korekta pędząca ABC</h3>
        <ul>
          <li>Najczęściej występuje w silnych, szybkich rynkach.</li>
          <li>
            W trendzie <strong>wzrostowym</strong> fala B wybija nowy szczyt, a
            fala C nie przebija dołka fali A. Fala B będzie najdłuższą spośród
            tych fal.
          </li>
        </ul>

        <h3>Korekta nieregularna</h3>
        <ul>
          <li>Najtrudniej ją zidentyfikować</li>
          <li>
            W trendzie <strong>wzrostowym</strong> B wybija nowy szczyt, C
            przebija dołek fali A. Fala C jest najdłuższą falą tworzącą korektę
            nieregularną.
          </li>
        </ul>
      </section>
      <section>
        <h2>2. Wprowadzenie</h2>
        <p>Ustawienia Fibo</p>
        <Image src={abc0} alt="abc0" />
        <p>
          Przypadek gdzie B mieści się w długości fali A, ta długość jest
          oznaczona % i jest od 50% (0.5) do 75% (0.75). Natomiast warto dodać i
          przetestować poziom 0.786, który się dobrze sprawdza wraz z 0.75.
          <br />
          Po zaliczeniu tej strefy mamy 3 targety na fale C
        </p>

        <Image src={abc1} alt="abc1" />
        <ul>
          <li>
            Fala C1 wybija szczyt A i może mieć długość fali a w stosunku 1:1
          </li>
          <li>Fala C2 wchodzi w strefę 1.414 - 1.618</li>
          <li>
            Fala C3 rzadko się zdarza ale podchodzi też pod 2.618 (trzeba mieć
            to na uwadze planując shorty)
          </li>
        </ul>
        <p>
          <strong>Przypadek z korektą nieregularną</strong>, gdzie B wybija fale
          A, najczęściej jest to strefa 1.15 - 1.27, ale może się zdarzyć 1.618
          lub też 2.618
        </p>
        <p>
          W takim przypadku fala C nie ma już długości 1:1 jak w poprzednim
          przypadku, tylko już 1.618 lub 2.618.
        </p>
        <Image src={abc2} alt="abc2" />
      </section>
      <section>
        <h2>3. Rozgrywanie</h2>
        <p>Ciągniemy fibo od low do high</p>
        <Image src={abc3} alt="abc3" />
        <p>Korekta występuje wtedy kiedy wykres przebija 0.5.</p>
        <strong>Zaznaczamy naszą korektę ABC.</strong>
        <ul>
          <li>0 na dołku tam skąd ciągnęliśmy fibo</li>
          <li>A na high, tam gdzie ciągnęliśmy nasze fibo</li>
          <li>B na dołku</li>
          <li>C gdzieś w górę</li>
        </ul>
        <Image src={abc4} alt="abc4" />
        <h3>
          Aby wymierzy fale C musimy rozciągnąć fibo, mamy na to 2 sposoby:
        </h3>
        <h4>1 sposób - rozkładamy na fali A</h4>
        <Image src={abc5} alt="abc5" />
        <p>I następnie 0 przenosimy na dołek fali B</p>
        <Image src={abc6} alt="abc6" />
        <ul>
          <li>Pierwszym naszym targetem będzie długość 1:1</li>
          <li>Następnie strefa 1.414 - 1.618</li>
          <li>I kolejnym poziom 2.618</li>
        </ul>
        <Image src={abc7} alt="abc7" />
        <h4>
          2 sposób trochę prostszy, używamy narzędzia Trend-Based Fib Extension
        </h4>
        <p>
          Ciągniemy od 0 - początku naszych fal, do szczytu fali A i następnie
          do dołka fali B. Wychodzi nam dokładnie to samo.
        </p>
        <Image src={abc8} alt="abc8" />
        <p>
          Mając wyrysowaną tą korektę nie gramy od razu pod nią bo nie wiemy czy
          wykres nie pójdzie w dół, więc szukamy jakiś innych potwierdzeń.
        </p>
        <h4>Przykład z korektą nieregularną</h4>
        <p>
          Wybija nam strefę 1.15 - 1.27 korekty nieregularnej więc możemy sobie
          narysować A B oraz gdzieś w dół C
        </p>
        <Image src={abc9} alt="abc9" />
        <p>
          Teraz możemy zmierzyć zasięgi, target na fale C w korekcie
          nieregularnej będzie 1.618 w strefie z 1.414
        </p>
        <Image src={abc10} alt="abc10" />
        <p>
          Do korekt ABC warto dodawać retesty knotów, które występowały
          wcześniej na wykresie
        </p>
      </section>
      <section>
        <h2>Dodatkowe Uwagi</h2>
        <h3>Kiedy ta metodologia nie działa?</h3>
        <p>Gdy mamy korektę trójkątną - jest ona stricte eliotowska</p>
        <p>Ta korekta występuje najczęściej w Fali 4 i w Fali B</p>
        <Image src={abc11} alt="abc11" />
        <p>
          Wtedy metodologia Deepa na fibo nie działa, po pierwszym swingu już
          jest ona zwalidowana i później nie ma już miejsca na to fibo
        </p>
        <p>
          Czyli mierząc ten swing A - B, targety już nie dochodzą do długości
          minimum 1 dlatego, że jest coraz mniejszy ruch.
        </p>
        <Image src={abc12} alt="abc12" />
        <h3>Zbieranie TP</h3>
        <p>
          Musimy pamiętać, że grając pod tą metodologię wybierajmy TP w takich
          strefach jak np. 0.786, 0.707, 0.618
        </p>
        <h3>Potwierdzenia stre</h3>
        <p>
          Warto schodzić na niższe TF i patrzeć czy ruch został już zakończony
        </p>
        <p>
          Bezpiecznie możemy szukać np. longa nie bezpośrednio ze strefy, tylko
          po potwierdzeniu ruchu
        </p>
        <Image src={abc13} alt="abc13" />
      </section>
    </div>
  );
}
