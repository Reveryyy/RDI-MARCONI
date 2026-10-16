import style from "./SchedaElettorale.module.css";
import { numeroLista, nomeLista, slogan, candidati } from "../../obj/info";

export default function SchedaElettorale() {
  return (
    <div className={style.contenitore}>
      <div className={style.cerchio_pieno}></div>
      <div className={style.cerchio_anello}></div>

      <div className={style.scheda}>
        <span className={style.etichetta}>SCHEDA ELETTORALE</span>
        <span className={style.numero}>Lista {numeroLista}</span>
        <div className={style.linea}></div>

        <div className={style.voto}>
          <span className={style.casella}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path className={style.spunta} pathLength="1" d="M4 12.5l5 5L20 6.5" />
            </svg>
          </span>
          <span className={style.nome_lista}>{nomeLista}</span>
        </div>

        <ul className={style.candidati}>
          {candidati.map((c) => (
            <li key={c.nome}>{c.nome}</li>
          ))}
        </ul>

        <span className={style.motto}>{slogan}</span>
      </div>
    </div>
  );
}
