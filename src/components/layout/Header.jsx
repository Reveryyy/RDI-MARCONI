import style from "./Header.module.css";
import Menu from "../ui/Menu";
import { numeroLista } from "../../obj/info";
import { useState } from "react";

export default function Header() {
  const [aperto, setAperto] = useState(false);

  function chiudiMenu() {
    setAperto(false);
  }
  return (
    <>
      <header className={style.header}>
        <div className={style.header__container}>
          <div className={style.logo__container}>
            <div className={style.logo__div}>
              <p className={style.logo_text}>{numeroLista}</p>
            </div>
            <p className={style.logo__titolo}>Lista {numeroLista}</p>
          </div>
          <Menu aperto={aperto} chiudiMenu={chiudiMenu} />

          {aperto && (
            <button
              type="button"
              className={style.sfondo}
              onClick={chiudiMenu}
              aria-label={"Chiudi il menu"}
              tab-index={-1}
            ></button>
          )}

          <button
            type="button"
            className={style.hamburger}
            onClick={() => setAperto(!aperto)}
            aria-label={aperto ? "Chiudi il menu" : "Apri il menu"}
            aria-expanded={aperto}
            aria-controls="menu-principale"
          >
            {aperto ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </header>
    </>
  );
}
