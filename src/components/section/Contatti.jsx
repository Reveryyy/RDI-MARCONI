import style from "./Contatti.module.css";
import Sezione from "../ui/Sezione";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { instagram, slogan } from "../../obj/info";

export default function Contatti() {
  return (
    <Sezione id="contatti" className={style.contatti}>
      <Reveal>
        <div className={style.box}>
          <p className={style.etichetta}>CONTATTI</p>
          <h2 className={style.titolo}>Hai un'idea? Scrivici.</h2>
          <p className={style.testo}>
            Vogliamo ascoltare ogni studente: proposte, dubbi e suggerimenti
            sono il materiale con cui costruiamo il programma.
          </p>
          <div className={style.azioni}>
            <a
              className={style.instagram}
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
              </svg>
              @{instagram}
            </a>
            <Button testo="Scopri tutte le nostre proposte" href="#programma" />
          </div>
        </div>
      </Reveal>
      <footer className={style.footer}>
        <strong>LISTA 1 – MARCONI</strong>
        <span>{slogan}</span>
      </footer>
    </Sezione>
  );
}
