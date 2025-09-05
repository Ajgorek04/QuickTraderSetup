import styles from "./OiPageComponent.module.css";
import Image from "next/image";

import { oi1, oi2 } from "@/assets";

export default function OiPageComponent() {
  return (
    <div className={styles.container}>
      <h1>OI – Open Interest</h1>
      <section>
        <h2>1. Wprowadzenie</h2>
        <Image src={oi1} alt="oi1" />
        <p>
          Open Interest to wskażnik mierzący całkowitą liczbę kontraktów, które
          są aktualnie otwarte, czyli takich które nie zostały jeszcze
          zamknięte, rozliczone oraz nie wygasły.
        </p>
        <p>
          Kontrakt w OI reprezentuje 2 strony
          <br />
          Kupującego i sprzedającego, ale liczy się taką osobę tylko raz
        </p>
        <Image src={oi2} alt="oi2" />
      </section>

      <section>
        <h2>2. Jak interpretować OI</h2>

        <p>🔼 Wzrost OI + wzrost ceny:</p>
        <ul>
          <li>
            ➡️ Nowe pozycje długie (long) są otwierane – świeży kapitał napływa.
          </li>
          <li>📊 To potwierdza siłę trendu wzrostowego.</li>
        </ul>

        <p>🔽 Spadek OI + wzrost ceny:</p>
        <ul>
          <li>➡️ Inwestorzy zamykają pozycje krótkie (short).</li>
          <li>📊 Trend wzrostowy trwa, ale bez dopływu nowych uczestników.</li>
        </ul>

        <p>🔼 Wzrost OI + spadek ceny:</p>
        <ul>
          <li>➡️ Otwierane są nowe pozycje krótkie (short).</li>
          <li>📉 Może oznaczać nasilającą się presję spadkową.</li>
        </ul>

        <p>🔽 Spadek OI + spadek ceny:</p>
        <ul>
          <li>➡️ Inwestorzy zamykają pozycje długie (long).</li>
          <li>📉 Może wskazywać na osłabienie trendu wzrostowego.</li>
        </ul>
      </section>
    </div>
  );
}
