import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <div className={styles.aboutContainer}>
      <h1>O Projekcie - QuickTraderSetup</h1>
      <p>
        QuickTraderSetup to intuicyjna aplikacja internetowa stworzona dla
        traderów, którzy chcą szybko i efektywnie uzyskać dostęp do kluczowych
        narzędzi oraz wiedzy.
      </p>

      <h2>Najważniejsze cechy</h2>
      <ul>
        <li>Szybki dostęp do cheat sheetów i narzędzi tradingowych</li>
        <li>Prosty, przejrzysty interfejs</li>
        <li>Responsywny design na każdy ekran</li>
      </ul>

      <h2>FAQ</h2>
      <details>
        <summary>Jak korzystać z QuickTraderSetup?</summary>
        <p>
          Po prostu wybierz zakładkę "Cheat Scheets", aby uzyskać dostęp do
          gotowych skrótów i zasobów.
        </p>
      </details>

      <details>
        <summary>Czy aplikacja jest darmowa?</summary>
        <p>Tak! Obecna wersja jest całkowicie darmowa do użytku osobistego.</p>
      </details>
    </div>
  );
}
