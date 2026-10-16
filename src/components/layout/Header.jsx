import style from "./Header.module.css";
import Menu from "../ui/Menu";
import Logo from "../ui/Logo";
import { numeroLista } from "../../obj/info";
import { useEffect, useState } from "react";

function temaIniziale() {
  try {
    const salvato = localStorage.getItem("tema");
    if (salvato) return salvato;
  } catch {
    /* localStorage non disponibile */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Header() {
  const [aperto, setAperto] = useState(false);
  const [tema, setTema] = useState(temaIniziale);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    try {
      localStorage.setItem("tema", tema);
    } catch {
      /* ignora */
    }
  }, [tema]);

  function chiudiMenu() {
    setAperto(false);
  }

  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <a href="#home" className={style.logo__container}>
          <Logo size={40} />
          <p className={style.logo__titolo}>Lista {numeroLista}</p>
        </a>

        <div className={style.destra}>
          <Menu aperto={aperto} chiudiMenu={chiudiMenu} />

          {aperto && (
            <button
              type="button"
              className={style.sfondo}
              onClick={chiudiMenu}
              aria-label="Chiudi il menu"
              tabIndex={-1}
            ></button>
          )}

          <button
            type="button"
            className={style.tema}
            onClick={() => setTema(tema === "dark" ? "light" : "dark")}
            aria-label={
              tema === "dark" ? "Attiva il tema chiaro" : "Attiva il tema scuro"
            }
          >
            {tema === "dark" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className={style.hamburger}
            onClick={() => setAperto(!aperto)}
            aria-label={aperto ? "Chiudi il menu" : "Apri il menu"}
            aria-expanded={aperto}
            aria-controls="menu-principale"
          >
            {aperto ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
