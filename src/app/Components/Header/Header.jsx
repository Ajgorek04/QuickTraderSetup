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
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>Home</h2>
              </a>
            </li>
            <li>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>Cheat Scheets</h2>
              </a>
            </li>
            <li>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>Contact</h2>
              </a>
            </li>
            <li>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  <i className={style.icon}>P</i>
                </h2>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
