import styles from "./TrendlinePageComponent.module.css";
import Image from "next/image";

import {
  trendline1,
  trendline2,
  trendline3,
  trendline4,
  trendline5,
  trendline6,
  trendline7,
  trendline8,
  trendline9,
  trendline10,
  trendline11,
  trendline12,
} from "@/assets";

export default function TrendlinePageComponent() {
  return (
    <div className={styles.container}>
      <h1>Trendline - linia trendu</h1>
      <section>
        <h2>1. Wprowadzenie</h2>
        <p>
          Mamy klaster, który chcemy rozegrać – zaznaczamy linię trendu
          (Trendline)
        </p>
        <Image src={trendline1} alt="trendline1" className={styles.img} />
        <ul>
          <li>Powinna mieć przynajmniej 3 punkty styku (wsparcia/oporu)</li>
          <li>Im więcej punktów, tym silniejszy poziom</li>
          <li>
            Szczyty / dołki nie muszą idealnie się zgadzać – nie chodzi o jedną
            linię, ale o strefę
          </li>
        </ul>
        <Image src={trendline2} alt="trendline2" className={styles.img} />
        <p> Punkt 1, 2, 3 – a w 4 następuje wybicie</p>
      </section>

      <section>
        <h2>2. Kanał trendu</h2>
        <p>Nasz kanał / naszą strefę najlepiej zaznaczać za pomocą narzędzia</p>
        <Image src={trendline3} alt="trendline3" className={styles.img} />
        <p>
          Kanał robimy na wysokości 1 knota, który wyznacza nam strefę skośną
        </p>
        <Image src={trendline4} alt="trendline4" className={styles.img} />
        <p>
          Dodatkowo możemy dostosować nasz trendline – w tym przypadku 2 knoty,
          które się spierają, będą naszą górną częścią kanału
        </p>
        <Image src={trendline5} alt="trendline5" className={styles.img} />
        <p>
          Daje nam to więcej potwierdzeń bo góra oraz dół kanału są testowane
          przez świece co pokazuje nam, że trendline jest dobrze rozrysowany i
          jest miarodajny
        </p>
      </section>

      <section>
        <h2>3. Na co uważać przed wybiciem trendline’u?</h2>
        <ul>
          <li>
            Często przed wybiciem mocnym trendline’u jest zrobienie nowego dołka
          </li>
          <li>
            Patrząc na wykres od dołu, możemy zaznaczyć sobie też jakąś linie
            wsparcia, która jest respektowana
          </li>
          <li>
            Po kilkukrotnym wybiciu lower low – robi nam się higher low, a w
            momencie gdzie mamy 2 knoty respektujące dolną linie naszej strefy
            trendline’u, większość by się spodziewała wybicia trendu ale zostali
            wybici SL’kami – jest to bardzo często powtarzający się schemat
          </li>
        </ul>
        <Image src={trendline6} alt="trendline6" className={styles.img} />
      </section>

      <section>
        <h2>4. TF i TP</h2>
        <h4>Time frame'y – Najlepiej 12H, 1D</h4>
        <h4>Jak możemy zgarnąć TP przy rozgrywaniu wybicia?</h4>
        <p>
          Wchodząc w pozycje przy wybiciu – naszymi TP mogą być poziomy z
          poprzednich knotów
        </p>
        <Image src={trendline7} alt="trendline7" className={styles.img} />
      </section>

      <section>
        <h2>5. Kąt nachylenia</h2>
        <p>Okresla stromość linii trendu – miara tempa zmiany cen</p>
        <Image src={trendline8} alt="trendline8" className={styles.img} />
        <p>
          Robi nam się taki trojkat, pokazuje co się w nim wydarzylo – w tym
          przypadku nic, po prostu jest ruch w prawo, trend nieokreślony
        </p>
        <Image src={trendline9} alt="trendline9" className={styles.img} />
        <p>Ale w bardziej ruchomym rynku widzimy już większe liczby</p>
        <Image src={trendline10} alt="trendline10" className={styles.img} />
        <p>Możemy rozrysować sobie każde low, każde high i robić wedge</p>
        <Image src={trendline11} alt="trendline11" className={styles.img} />
        <h4>Dlaczego to działa?</h4>
        <ul>
          <li>
            Szukając wejścia w pozycje, szukamy zmienności, która pojawia się
            też przy zmianie kąta nachylenia
          </li>
          <li>
            W tym przykładzie wykres miał problem przebić zaznaczoną strefę
            gdzie powstał pewien opór
          </li>
          <li>Szukamy zmiany trendu, jakiejś akcji</li>
          <li>
            Tutaj po 1 wybiciu strefy i powrocie, patrząc jak nam się zwiększa
            kąt nachylenia – mógł być to sygnał do pozycji lognowej
          </li>
        </ul>
        <Image src={trendline12} alt="trendline12" className={styles.img} />
      </section>

      <section>
        <h2>6. Optymalny kąt nachylenia</h2>
        <p>
          45 stopni nachylenia to jest optymalny kąt nachylenia trendu
          wzrostowego, uznawany jest jako stabilny, zdrowy trend wzrostowy
        </p>
        <p>
          Powyżej 60 stopni uznawane jest za zbyt stromy wzrost, a zbyt stromy
          wzrost może być krótkotrwały, mogą go szybko zgasić tylko po to, żeby
          wybić longujących i dalej kontynuować wzrost
        </p>
      </section>

      <section className={styles.summary}>
        <h2>Podsumowanie</h2>
        <div className={styles.summaryItem}>
          🔹 Trendline musi mieć min. 3 punkty styku
        </div>
        <div className={styles.summaryItem}>
          📏 Rysuj kanały, nie tylko linię – testowanie góry i dołu =
          wiarygodność
        </div>
        <div></div>
        <div className={styles.summaryItem}>
          ⚠️ Uważaj na pułapki SL – fałszywe wybicia przed prawdziwym ruchem
        </div>
        <div className={styles.summaryItem}>
          🎯 TP ustawiaj na poprzednich knotach (lokalnych high/low)
        </div>
        <div className={styles.summaryItem}>
          📈 Zmienność + kąt nachylenia = potencjalne wejście w pozycję
        </div>
        <div className={styles.summaryItem}>
          ⏱️ Najlepsze interwały: 12H, 1D
        </div>
        <div className={styles.summaryItem}>
          🔁 Retest wybicia trendline’u zwiększa wiarygodność setupu
        </div>
        <div className={styles.summaryItem}>
          📐 45° = zdrowy trend, większe od 60° = zbyt stromy, potencjalna
          korekta
        </div>
      </section>
    </div>
  );
}
