import styles from "./VwapPageComponent.module.css";
import Image from "next/image";
import { vwaptool, vwap1, vwap2, vwap3, vwap4, vwap5, vwap6 } from "@/assets";

export default function VwapPageComponent() {
  return (
    <div className={styles.container}>
      <h1>VWAP (Volume Weighted Average Price) </h1>

      <section className={styles}>
        <h2>1. Wprowadzenie</h2>
        <p>
          VWAP to narzędzie pokazujące średnią ważoną wolumenem, która pokazuje
          realną średnią cenę aktywa w danym dniu, sesji lub trendzie. W
          przeciwieństwie do klasycznych średnich kroczących (np. EMA), VWAP
          uwzględnia nie tylko cenę, ale również wolumen, czyli faktyczną
          aktywność rynkową.
        </p>
        <h3>Narzędzie: </h3>
        <Image src={vwaptool} alt="vwaptool" className={styles.vwaptool} />
      </section>
      <section>
        <h2>2. Dlaczego VWAP &gt; EMA?</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Cecha</th>
              <th>EMA</th>
              <th>VWAP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Uwzględnia cenę</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Uwzględnia wolumen</td>
              <td>❌</td>
              <td>✅ (kluczowy aspekt!)</td>
            </tr>
            <tr>
              <td>Jak pokazuje cenę</td>
              <td> Pokazuje tylko średnią z cen</td>
              <td>Pokazuje prawdziwą średnią uwzględniającą obrót</td>
            </tr>
            <tr>
              <td>Gdzie się sprawdza</td>
              <td> Głównie przy trendach</td>
              <td> Przy trendach i jako potwierdzenie siły ruchu</td>
            </tr>
          </tbody>
        </table>
        <p>
          Dzięki uwzględnieniu wolumenu VWAP pokazuje, gdzie faktycznie były
          transakcje, a nie tylko gdzie "przebywała" cena. To daje przewagę przy
          analizie rynku.
        </p>
      </section>
      <section>
        <h2> 3. Jak dodać VWAP do wykresu</h2>
        <p>Przykładowo na rozpoczęciu trendu</p>
        <Image src={vwap1} alt="vwap1" className={styles.img} />
      </section>
      <section>
        <h2>4. VWAP w konsolidacji i trendzie</h2>
        <p>
          Vwap najlepiej sprawdza się jednak w trendzie. W konsoli powinien być
          płaski bo wolumen jest w miarę równo rozłożony. Pierwsze odchylenie
          powinno służyć jako bandy konsolidacji od których gramy podobnie jak w
          profilu wolumenowym.
        </p>
        <h3>Rozpoznanie słabnącego trendu</h3>
        <p>Silny trend = VWAP idzie w miarę równo w górę lub dół.</p>
        <Image src={vwap2} alt="vwap2" className={styles.img} />
        <p>
          Słabnący trend = VWAP zaczyna się wypłaszczać, nawet gdy cena nadal
          idzie w jednym kierunku – możliwy fakeout lub bulltrap.
        </p>
        <Image src={vwap3} alt="vwap3" className={styles.img} />
        <p>⚠️ Ruch bez wolumenu = ostrzeżenie</p>
      </section>
      <section>
        <h2>5. Rozgrywanie VWAPA w trendzie - przykład</h2>
        <p>
          VWAP najlepiej działa w trendzie. Klucz to zapięcie VWAP-u na początku
          ruchu.
        </p>
        <Image src={vwap4} alt="vwap4" className={styles.img} />
        <p>
          W tym przypadku VWAP dał nam 2 wejścia na nadchodzącą hosse jeśli
          pomineliśmy poprzednie i możemy liczyć na dalsze kontynuowanie trendu.
        </p>
      </section>
      <section>
        <h2>6. Reclaims</h2>
        <p>
          Reclaims to pattern gdzie po mocnym spadku mamy powrót nad VWAPY gdzie
          zaczyna się konsolidacja albo odrazu jest odbicie, często takiej
          sytuacji możemy czekać na momentum i rozgrywać longi.
        </p>
        <h4>Retest i wybicie do góry</h4>
        <Image src={vwap5} alt="vwap5" className={styles.img} />
        <h4>
          A tutaj mamy spadek, wybicie się nad VWAPA, konsolidacja (to ważne)
          nad VWAPAMI i ruch w górę.
        </h4>
        <Image src={vwap6} alt="vwap6" className={styles.img} />
      </section>
    </div>
  );
}
