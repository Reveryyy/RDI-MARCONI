import { useState } from "react";
import style from "./Programma.module.css";
import Sezione from "../ui/Sezione";
import Reveal from "../ui/Reveal";
import { proposte } from "../../obj/info";

export default function Programma() {
  const [aperta, setAperta] = useState(0);

  return (
    <Sezione id="programma" className={style.programma}>
      <Reveal>
        <p className={style.etichetta}>PROGRAMMA</p>
        <h2 className={style.titolo}>Un unico obiettivo: il nostro futuro</h2>
        <p className={style.intro}>
          Crediamo in una scuola che non sia soltanto un luogo di studio, ma
          anche uno spazio di crescita, condivisione e partecipazione. Vogliamo
          trasformare le idee in proposte concrete, lavorando insieme per
          costruire un ambiente scolastico sempre più dinamico e inclusivo.
        </p>
      </Reveal>

      <div className={style.lista}>
        {proposte.map((p, i) => {
          const isAperta = aperta === i;
          return (
            <Reveal key={p.titolo} delay={i * 80}>
              <div
                className={`${style.item} ${isAperta ? style.item__aperto : ""}`}
              >
                <button
                  type="button"
                  className={style.testa}
                  onClick={() => setAperta(isAperta ? null : i)}
                  aria-expanded={isAperta}
                  aria-controls={`proposta-${i}`}
                >
                  <span className={style.numero}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={style.nome}>{p.titolo}</span>
                  <span className={style.plus} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div id={`proposta-${i}`} className={style.corpo} role="region">
                  <div className={style.corpo__interno}>
                    <p>{p.testo}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className={style.chiusura}>
          <h3>Insieme per un Marconi più forte</h3>
          <p>
            Una scuola migliore si costruisce attraverso la collaborazione,
            l'ascolto e l'impegno di tutti. Non promettiamo di cambiare tutto da
            un giorno all'altro, ma ci impegniamo a lavorare con serietà,
            entusiasmo e determinazione per portare avanti le nostre idee.
          </p>
          <p>
            Queste sono alcune delle idee da cui vogliamo partire: continueremo
            ad ascoltare gli studenti e a raccogliere nuovi suggerimenti, perché
            il programma sia un progetto condiviso e in continua evoluzione.
          </p>
        </div>
      </Reveal>
    </Sezione>
  );
}
