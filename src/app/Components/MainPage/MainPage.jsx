import styles from "./MainPage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h1>Welcome to Quick Trader Setup</h1>
        <p>Your one-stop solution for quick and efficient trading setups.</p>
      </div>

      <a href="/cheatsheets">
        <button className={styles.button}>
          <h2>Get Started &rarr;</h2>
        </button>
      </a>

      <a href="/faq" className={styles.faqLink}>
        <p>📘 FAQ – Dowiedz się więcej o projekcie</p>
      </a>
    </div>
  );
}
