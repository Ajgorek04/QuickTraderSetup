import style from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <h1>QuickTraderSetup</h1>
        </div>
        <div className={style.contact}>
          <ul className={style.list}>
            <li>
              <a href="/">
                <h2>Home</h2>
              </a>
            </li>
            <li>
              <a href="/cheatsheets">
                <h2>Cheat Sheets</h2>
              </a>
            </li>
            <li>
              <a href="/faq">
                <h2>FAQ</h2>
              </a>
            </li>
            <li>
              <a href="/contact">
                <h2>Contact</h2>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
