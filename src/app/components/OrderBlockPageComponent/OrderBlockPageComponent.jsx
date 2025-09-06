import styles from "./OrderBlockPageComponent.module.css";
import Image from "next/image";

import { orderBlock } from "@/assets";

export default function OrderBlockPageComponent() {
  return (
    <div className={styles.container}>
      <h1>Order Block</h1>
      <section>
        <h2 className="navbar">1. OB przez formację pochłonięcia</h2>
        <p>
          W trendzie spadkowym następuje reakcja, odwrócenie trendu. Strefa
          pochłonięcia może wytworzyć nam nasz OB.
        </p>
        <p>Przykład byczego OB.</p>
        <p>
          Świeca spadkowa tworzy tzw. „dołek”. Kolejna świeca otwiera się na
          poziomie jej zamknięcia i początkowo schodzi niżej, pogłębiając zakres
          poprzedniej świecy. Ostatecznie jednak zamyka się powyżej niej.
        </p>
        <Image src={orderBlock[0]} alt="ob1" />
        <p>Zaznaczenie OB i reakcja na wykresie</p>
        <p>
          Widzimy jak strefa jest testowana kilkakrotnie, w tej strefie OB
          znajdują się najczęściej największe zlecenia przez banki, duże
          instytucje itd. żeby odwrócić ten rynek powinniśmy dostać wolumen.
        </p>
        <Image src={orderBlock[1]} alt="ob2" />
        <p>
          Grając longa, po wybiciu np. poprzedniej świeczki, SL dajemy poniżej
          OB
        </p>
        <Image src={orderBlock[2]} alt="ob3" />
        <p>
          Jednak patrząc dalej mamy kolejne retesty, OB, kolejne transakcje będą
          tam zawierane, więc musimy pamiętać, żeby nie przesuwać pozycji za
          wcześnie na BE .
        </p>
        <p>Przykład niedźwiedziego OB</p>
        <p>
          Ta malutka świeczka robi nam OB, bo ta kolejna po niej otworzyła się
          na tym samym poziomie a skończyła się dużo niżej, jest świeczką też
          większą od poprzedniej.
        </p>
        <Image src={orderBlock[3]} alt="ob4" />
        <p>Przykład z fajnym wejściem</p>
        <p>
          Mamy OB z bardzo dużym wolumenem, żeby cena się zbytnio za szybko nie
          zmieniła, to wykres wrócił po transakcje do tej strefy - mniej więcej
          0.5 tego OB.
        </p>
        <p>Fajne miejsce pod, które możemy grać wejścia w pozycje.</p>
        <Image src={orderBlock[4]} alt="ob5" />
      </section>

      <section>
        <h2 className="navbar">2. OB za pomocą Fibo</h2>
        <p>
          Fibo rozciągamy odwrotnie, np. w pozycji long - 0 powinno być na dole
          Poziomy 0.382 , 0.214
        </p>
        <p>
          Widząc dołek blisko 0.382 i podejmując się longa, to powinniśmy Entry
          dawać na 0.382 a SL postawić pod tzw. bezpieczny poziom jakim jest
          0.214
        </p>
        <p>Tu akurat nie widać tego jakoś dobrze, to tylko przykład</p>
        <Image src={orderBlock[5]} alt="ob6" />
      </section>

      <section>
        <h2 className="navbar">
          3. Do wyznaczania kolejnych BoS, będziemy musieli znać takie pojęcia
          jak:
        </h2>
        <ul>
          <li>Bos</li>
          <li>CHoCH</li>
          <li>HH / HL</li>
          <li>Support / Resistance</li>
          <li>Trendline</li>
        </ul>
        <p>Mamy taki wykres</p>
        <Image src={orderBlock[6]} alt="ob7" />
        <p>
          W naszym Major High mamy bearish ob, który powstał przez formację
          świecową.
        </p>
        <p>
          Ta świeczka na TF 4h praktycznie nie ma body - pokazuje nam to, że na
          niej jest najwięcej zleceń do wypełnienia a nie zostały one na pewno
          zebrane następną świecą.
        </p>
        <p>
          Zaraz obok mamy High, gdzie na jego knocie na pewno zostały zlecenia
          do wypełnienia, więc możemy ob dociągnąć aż do niego.
        </p>
        <Image src={orderBlock[7]} alt="ob8" />
        <p>
          Podobny schemat mamy na kolejnym bearish OB znajdującym się trochę
          niżej.
        </p>
        <p>
          Na tej 1 świecy zostało bardzo dużo zleceń na tym knocie - jest dużo
          większy niż body. Mamy również dużą ilość świec z wielkimi knotami,
          które informują nas, że jest tutaj masa dużych zleceń na shorta.
          Widać, że wykres próbował do tego wrócić, ale robił coraz niższe
          szczyty. Wróciliśmy do tego Order Blocka po czasie
        </p>
        <Image src={orderBlock[8]} alt="ob9" />
        <p>
          Na dole Order Blocka tworzy nam ostatnia świeca spadkowa, która jest
          mniejsza od jej następującej świecy wzrostowej. Order Blockiem jest
          całe body wraz z knotami.
        </p>
        <Image src={orderBlock[9]} alt="ob10" />
        <p>Miejmy na uwadze to, że nie zawsze bierzemy 0.5 OB.</p>
        <p>
          W naszym przypadku wiedząc, że mamy mocną strefę z OB - Major Low -
          zlecenie ustawiamy powyżej OB.
        </p>
        <p>
          Order Blocki po drodze nie mają jakiegoś większego znaczenia, jak
          widzimy czasem nie działają wcale. Jednak mogą być retestowane.
        </p>
        <p>
          Nie warto grać pozycji ze środka range’u bo w każdej chwili wykres
          może zawrócic i testować główne OB.
        </p>
        <Image src={orderBlock[10]} alt="ob11" />
        <h4>Jeżeli chodzi o SMC</h4>
        <p>
          Mamy trend wzrostowy, konsole tzw. podstawę i dalej znowu trend
          wzrostowy. W tych formacjach świecowych w konsolidacji, powstał nam
          lokalny Order Block, z którego mieliśmy wybicie
        </p>
        <p>BoS dał nam kontynuację trendu</p>
        <p>Choch dał nam pierwszy sygnał na odwrócenie trendu</p>
        <Image src={orderBlock[11]} alt="ob12" />
      </section>

      <section>
        <h2 className="navbar">4. OB przy świecach z Imbalance - FVG</h2>
        <p>OB zaznaczamy na świecy poprzedzającej świecę z FVG</p>
        <Image src={orderBlock[12]} alt="ob13" />
        <p>
          Grając tutaj pozycję powinniśmy czekać na ten powyższy OB. Jednak w
          tym przypadku struktura wykresu nie pozwala nam być optymistycznym co
          do wejścia do tego OB.
        </p>
        <p>Kolejny przykład</p>
        <p>Mamy 2 strefy - FVG i OB</p>
        <Image src={orderBlock[13]} alt="ob14" />
        <p>
          Jak widzimy na początku dostaliśmy reakcję - 3 krotny retest 0.5 OB
        </p>
        <p>
          Jeśli chcielibyśmy wejść w longa robimy to na 0.5 i SL dajemy pod OB,
          najlepiej jeszcze pod jakiegoś knota z płynnością i mamy fajne RR
        </p>
        <Image src={orderBlock[14]} alt="ob15" />
      </section>

      <section>
        <h2 className="navbar">
          5. OB jako ostatnia świeca spadkowa przed wzrostem / ostatnia świeca
          wzrostowa przed spadkiem
        </h2>
        <Image src={orderBlock[15]} alt="ob16" />
        <p>
          Czemu tam na dole nie ma OB? - Ostatnia świeca spadkowa nie jest
          szczytem (dołkiem). Jest to słabe low.
        </p>
        <p>
          Na rynkach tradycyjnych, tylko dotknięcie knotem strefy, nawet nie 0.5
          - zamyka nam naszego OB i bardzo często nie wraca. Na crypto jest
          trochę inaczej, i daje nam sygnał np. do longa na powiedzmy 2 czy 3
          testującej świecy z kolei. Naszym targetem będzie OB u góry.
        </p>
        <Image src={orderBlock[16]} alt="ob17" />
        <h6>
          (Tak wiem, że na screenach nie są to ostatnie świece, tylko np.
          przedostatnia ale z pytaniami czemu tak zapraszam do Deepa oraz do
          obejrzenia całych akademii z OB)
        </h6>
        <p>Przykład bearish OB z ostatniej świecy spadkowej</p>
        <Image src={orderBlock[17]} alt="ob18" />
      </section>

      <section>
        <h2 className="navbar">6. BREAKER- Inwalidacja Order Blocka</h2>
        <p>Kontekst wykresu</p>
        <Image src={orderBlock[18]} alt="ob19" />
        <p>Mamy wybicie, ostatnia strefa wzrostowa traktowana jako OB</p>
        <p>
          Mamy wybicie świecą wolumenową co potwierdza nam BOS’a - potwierdzenie
          na kontynuację ruchu wzrostowego
        </p>
        <p>Jak widzimy ten ruch się nie wydarzył, szybko został zgaszony</p>
        <p>
          OB został przeszyty kilka razy, testowany, strefa BOS’a została dosyć
          mocno wybita.
        </p>
        <p>
          <strong>Co się wydarzyło?</strong>
        </p>
        <Image src={orderBlock[19]} alt="ob20" />
        <p>
          Na dwóch świecach dolnych zostały nam 2 knoty, które świadczą o tym,
          że mamy tam płynność do zebrania. Po opuszczeniu tego OB, wykres
          poszedł zebrać płynność, mamy liquidity sweepa.
        </p>
        <p>
          Mamy też bardzo szerokiego FVG, który został wypełniony praktycznie w
          100% już po 1 spadku.
        </p>
        <p>
          Obie dwie strefy zostały zebrane - oznacza to, że zbierając płynność z
          takiego Bullish OB, wykres go przeszywa i następuje powrót to tworzy
          nam to nasz Bullish Breaker.
        </p>
        <p>
          <strong>Bullish Breaker </strong>charakteryzuje się tym, że zawraca po
          płynność
        </p>
        <Image src={orderBlock[20]} alt="ob21" />
      </section>

      <section>
        <h2 className="navbar">7. MITIGATION BLOCK</h2>
        <p>Kontekst wykresu</p>
        <Image src={orderBlock[21]} alt="ob22" />
        <p>Mamy bardzo podobną sytuację do poprzedniej</p>
        <p>Górna świeca w podstawie, mocny impuls</p>
        <p>Ostatnia świeca wzrostowa jako OB</p>
        <p>
          Też mamy 2 knoty i miejsce do zebrania jako liquidity sweep, który nie
          został wypełniony bo wyżej mamy świece, które już wyszły z OB.
        </p>
        <p>
          <strong>MITIGATION BLOCK</strong> charakteryzuje się brakiem zebrania
          płynności, coś fejkowego
        </p>
        <h3>Różnica Mitigation Block a Breaker</h3>
        <p>
          Formacja Mitigation Block jest bardzo podobna do Breakera, jednak
          różni się tym, że o ile Breaker przyczynia się do prowadzenia
          płynności, wyznaczania nowych high i low oraz przy okazji zbiera tę
          płynność, o tyle Mitigation Block nie usuwa płynności ze struktury
          świec.
        </p>
        <p>Przykład z Breakerem</p>
        <p>
          Mamy OB, który został przebity w dół, zebrał liquidity, następnie
          został wybity. Cała strefa została utracona.
        </p>
        <p>
          ednak zeszliśmy z powrotem w dół i zebraliśmy ten OB, uzupełniliśmy tą
          płynność i w tym momencie powstał nam <strong>Breaker</strong>.
        </p>
        <Image src={orderBlock[22]} alt="ob23" />
        <p>
          W przypadku <strong>Mitigation Block</strong> płynność by została,
          wyglądałoby to tak
        </p>
        <Image src={orderBlock[23]} alt="ob24" />
      </section>

      <section>
        <h2 className="navbar">8. Reversal - odwrócenie</h2>
        <p>
          Reversal to miejsce, w którym możemy rozpoznać ewentualne odwrócenie
          trendu na przeciwny
        </p>
        <p>Przykład:</p>
        <p>
          Mamy trend spadkowy, BoS’a który potwierdza nam kontynuację spadku,
          zrobiła się kolejna podstawa i wykres zaczął iść w 2 stronę.
        </p>
        <Image src={orderBlock[24]} alt="ob25" />
        <p>
          Ten zaznaczony knot jest ważny. Pokazuje, w którą stronę ma iść
          wykres. Cała struktura będąca pod knotem jest naszym Reversalem
        </p>
        <p>Odwrócenie następuje w momencie wybicia świecą wolumenową.</p>
        <p>
          I w tym momencie na tym reversalu możemy sobie dać pozycję. Co do
          strategi to choćby do poprzedniego knota i tak minimum 1:3 (oczywiście
          to czysta spekulacja)
        </p>
        <Image src={orderBlock[25]} alt="ob26" />
        <p>Przykład spadkowy</p>
        <Image src={orderBlock[26]} alt="ob27" />
        <h3>Kiedy dokładnie mamy reversal?</h3>
        <p>
          Mając tego knota po lewej, wykres wpada nam w tą naszą strefę (jeszcze
          jej nie mamy) - robi nam jakieś low.
        </p>
        <Image src={orderBlock[27]} alt="ob28" />
        <p>
          Znaczenie ma to, że ta struktura mocno jechała “sideways”, mieliśmy
          fejkowe wybijanie. Oba zaznaczone miejsca pokazują nam, że mieliśmy
          świece wolumenową.
        </p>
        <p>
          Jeżeli się nabieramy na 1 świecę, musieliśmy uciekać bo chodziliśmy
          niżej, mógł być to fakeout. Jak widzimy oni uciekają ze spadków i
          znowu lecą do góry, znowu wybijają świecą wolumenową, poprawiają drugą
          wyżej i znowu zjazd w dół.
        </p>
        <p>
          Jeżeli chcielibyśmy rozegrać to i utrzymać pozycję oraz zamknąc w
          proficie, SL musiałby być pod strefą co po dźwigni jest jakoś -700%.
        </p>
        <Image src={orderBlock[28]} alt="ob29" />
        <p>
          Nie tracimy 1, 2, 3, 4, 5 SL’ki tylko dajemy 1 duża i dajemy się
          falowo ruszać wykresowi.
        </p>
        <p>
          <strong>Czasami reversal jest robiony samym knotem</strong>
        </p>
        <Image src={orderBlock[29]} alt="ob30" />
      </section>

      <section>
        <h2 className="navbar">9. Order Block - SMC - Płynność</h2>
        <p>
          Strefa płynności to strefa pokazująca nam większość zleceń, które są
          takim magnesem dla ceny.
        </p>
        <Image src={orderBlock[30]} alt="ob31" />
        <p>
          <strong>Sprawdzanie świec poprzednich</strong>
        </p>
        <p>
          Zaczynając np. od miesięcznicy rysujemy sobie coś takiego jak Previous
          Monthly High oraz Previous Monthly Low. To jest nasz range do
          testowania z poprzedniego miesiąca. Zarówno u góry jak i na dole jest
          do zebrania płynność.
        </p>
        <Image src={orderBlock[31]} alt="ob32" />
        <p>
          Schodząc na niższy TF (tygodniowy) widzimy np. świecę bez body, jest
          tam ogrom transakcji, które powinny być uzupełnione - jest to bardzo
          atrakcyjny poziom do przetestowania.
        </p>
        <Image src={orderBlock[32]} alt="ob33" />
        <p>
          Ponownie zaznaczamy tym razem Previous Weekly High oraz Previous
          Weekly Low
        </p>
        <Image src={orderBlock[33]} alt="ob34" />
        <p>
          Schodzimy teraz na dniówkę i ponownie zaznaczamy PDH oraz PDL. Widzimy
          również ciekawą strefę, jest ona strefą zainteresowania POI (Point Of
          Interest) oraz liquidity (płynność). Tutaj jest to czego oczekujemy
        </p>
        <Image src={orderBlock[34]} alt="ob35" />
        <p>
          Natomiast jeśli gramy na lokalnych TF np. 4h to interesuje nas ta
          strefa
        </p>
        <Image src={orderBlock[35]} alt="ob36" />
        <p>
          ak widzimy dostaliśmy test tej strefy, świecy na dole, natomiast nie
          mamy zrobionego testu knota powyżej. To są poziomy pod reakcje. Mamy
          pozostawiane same knoty, więc to jest nasza strefa zainteresowania
          lokalnie.
        </p>
        <p>
          Grając np. z wyższy TF np. 1D czy 1W i szukając właśnie takich
          poziomów no to najbardziej atrakcyjnymi strefami będą te płynności.
        </p>
        <Image src={orderBlock[36]} alt="ob37" />
        <p>
          Major High i Major Low, z których nas interesuje odpalenie shorta lub
          longa. Tutaj są najlepsze trade’y z najlepszym, najbardziej efektywne
          z dużym RR.
        </p>

        <h3>AIO Key Levels</h3>
        <p>
          Jeżeli chcemy sobie skrócić wyznaczanie tych poziomów, możemy użyć
          indykatora
        </p>
        <Image src={orderBlock[37]} alt="ob38" />
        <Image src={orderBlock[38]} alt="ob39" />
        <p>Końcowo to wygląda tak:</p>
        <Image src={orderBlock[39]} alt="ob40" />
        <h3>Equal low</h3>
        <p>EQL to bardzo mocny poziom jeśli chodzi o płynność</p>
        <Image src={orderBlock[40]} alt="ob41" />
        <p>Przykład:</p>
        <p>Mamy EQL oraz na tym samym knocie mamy Reversal</p>
        <p>Pod ten EQL również możemy rozgrywać nasze Trade’y</p>
        <Image src={orderBlock[41]} alt="ob42" />

        <h3>Warto zapamiętać</h3>
        <ul>
          <li>
            Zaznaczamy OB, które są ważne - wyższe TF, okolice ważnych stref jak
            Major Low, Major High
          </li>
          <li>
            Order Block Bullish jest ze świecy wzrostowej a bearish ze spadkowej
          </li>
          <li>Order Blocki zamieniają się w strefy Supportu / Resistance</li>
        </ul>
      </section>
    </div>
  );
}
