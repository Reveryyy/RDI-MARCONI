import style from "./SchedaElettorale.module.css";

export default function SchedaElettorale() {
  return (
    <div className={style.contenitore}>
      <div className={style.cerchio_pieno}></div>
      <div className={style.cerchio_anello}></div>

      <div className={style.scheda}>
        <span className={style.etichetta}>SCHEDA ELETTORALE</span>
        <span className={style.numero}>NUMERO</span>
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
              <path d="M4 12.5l5 5L20 6.5" />
            </svg>
          </span>
          <span className={style.nome_lista}>Lista NUMERO</span>
        </div>

        <span className={style.motto}>Il futuro della scuola parte da te.</span>
      </div>
    </div>
  );
}
