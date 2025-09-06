import styles from "./HyblockPageComponent.module.css";
import Image from "next/image";

import { hyblock1, hyblock2, hyblock3 } from "@/assets";

export default function HyblockPageComponent() {
  return (
    <div className={styles.container}>
      <h1>Hyblock</h1>
      <section>
        <h2 className="navbar">1. Wprowadzenie</h2>
        <p>To narzędzie pokazuje gdzie mamy na rynku płynność.</p>
        <p>
          Przydaje się jeśli chcemy grać z Market Makerami - ludźmi, którzy
          sterują tym rynkiem, manipulują, ustawiają go.
        </p>

        <h4>
          Link do strony:
          <a href="https://hyblockcapital.com/"> https://hyblockcapital.com/</a>
        </h4>
        <p>
          Hyblocka w pełni za darmo znajdziemy na discordzie na kanałach heatmap
          oraz liqlevels
        </p>
      </section>
      <section>
        <h2 className="navbar">2. Jak używać heatmapy?</h2>
        <p>
          Komenda /heatmap na kanale heatmap i dalej już discord podpowie co
          można wpisać np.:
        </p>
        <p>
          <strong>
            heatmap token:BTCUSDT timeframe:6 months | 4 Hr timeframe
          </strong>
        </p>
        <Image src={hyblock1} alt="hyblock1" />
        <p>Po prawej stronie mamy cenę naszego aktywa.</p>
        <p>
          a dole mamy kwoty likwidacji - im bardziej idziemy w ciemniejszą
          stronę tym kwoty są mniejsze, jeśli w jaśniejszą to kwoty są coraz
          większe.
        </p>
        <p>
          Patrzymy na jakiś poziom cenowy i łatwo możemy dostrzec, w których
          miejscach cenowych jest najwięcej kasy do zabrania.
        </p>
        <p>
          Np. w tym miejscu widzimy, że przy cenie około 95 tysięcy $ mamy do
          zabrania dosyć dużą kasę - ktoś mógł kupić od razu z marketu i zabrać
          tą całą kasę, ściągnął płynność z ludzi, wybił shorty.
        </p>
        <Image src={hyblock2} alt="hyblock2" />
        <p>
          Jeżeli są bliżej interesującej ich strefy płynności np. gdzie cena
          musiałaby pójść w gór, mogą tam najpierw zejść a dopiero następnie po
          jakąś paczkę, która jest niżej.
        </p>
      </section>

      <section>
        <h2 className="navbar">3. Parę słów o zabieraniu płynności</h2>
        <p>
          Zabieranie płynności to bardzo prosty temat - market makerzy chcą
          zabierać płynność, czyli pieniądze z rynku po to, żeby byli w stanie
          budować dalszą strukturę.
        </p>
        <h3>Liqlevels</h3>
        <p>
          Komenda /liqlevels na kanale liqlevels i dalej już discord podpowie co
          można wpisać np.:
        </p>
        <p>
          <strong>/liqlevels token:BTCUSDT</strong>
        </p>
        <Image src={hyblock3} alt="hyblock3" />
        <p>
          W tym narzędziu mamy tylko 1 Time Frame - 1 minutowy, więc te
          informacje będą na max do TF 4h, ale najbardziej do 1h.
        </p>
        <p>Po lewej stronie mamy cenę danego aktywa.</p>
        <p>Po prawej mamy wielkość likwidacji.</p>
        <p>
          Jeżeli na dole na histogramie mamy czerwone pole to mamy bardzo dużo
          shortów do zgarnięcia - możemy uznać, że market makerzy będą chcieli
          wybić te shorty poprzez SL ludzi
        </p>
      </section>
    </div>
  );
}
