import styles from "./MfindexPageComponent.module.css";
import Image from "next/image";

import { mfi1, mfi2 } from "@/assets";

export default function MfindexPageComponent() {
  return (
    <div className={styles.container}>
      <h1>MFI – Money Flow Index</h1>

      <section>
        <h2>1. Wprowadzenie</h2>
        <Image src={mfi1} alt="mfi1" />

        <p>
          MFI mierzy przepływ pieniędzy na rynku, łącząc cenę oraz wolumen.
          Dzięki temu dostarcza bardziej kompleksowej informacji o sile
          kupujących i sprzedających, niż np. RSI – ponieważ uwzględnia
          rzeczywisty obrót.
        </p>
      </section>
      <section>
        <h2>2. Jak działa MFI ?</h2>
        <p>
          MFI działa podobnie do RSI ale będzie bardziej dokładne ( zapoznaj się
          najpierw z RSI ).
        </p>
        <p>Kluczowe poziomy: </p>
        <ul>
          <li>Powyżej 80 – overbought → możliwa korekta lub odwrócenie</li>
          <li>Poniżej 20 – oversold → możliwe odbicie wzrostowe</li>
          <li>
            Linia 50 – punkt równowagi (działa jak opór/wsparcie – analogicznie
            do RSI).
          </li>
        </ul>
        <Image src={mfi2} alt="mfi2" />
      </section>

      <section>
        <h2>3. Dywergencje z MFI</h2>
        <p>Dywergencje między MFI a ceną dają istotne sygnały:</p>
        <ul>
          <li>Cena rośnie, MFI spada → osłabienie trendu wzrostowego,</li>
          <li>Cena spada, MFI rośnie → osłabienie trendu spadkowego.</li>
        </ul>
        <p>
          ➡️ W połączeniu z innymi narzędziami (np. MACD, średnie kroczące) MFI
          może znacznie zwiększyć skuteczność Twojej analizy.
        </p>
      </section>

      <section>
        <h2>4. Zalety i wady MFI</h2>
        <p>✅ Zalety:</p>
        <ul>
          <li>Uwzględnia wolumen, co czyni go bardziej precyzyjnym niż RSI</li>
          <li>Jest prosty w interpretacj</li>
          <li>Dobrze współpracuje z innymi wskaźnikami (np. MACD, EMA)</li>
        </ul>
        <p>⚠️ Wady:</p>
        <ul>
          <li>
            Może dawać fałszywe sygnały na rynkach o niskiej płynności lub w
            konsolidacjach ( oscylatory opierające się na wolumenie nie będą
            dobre do używana na niskich Market Capach czy po prostu projektach o
            obniżonej płynności )
          </li>
          <li>Działa z opóźnieniem, jak inne oscylatory</li>
          <li>Wymaga dokładnych danych wolumenu</li>
        </ul>
      </section>
    </div>
  );
}
