import style from "./Lista.module.css";
import Sezione from "../ui/Sezione";
import Reveal from "../ui/Reveal";
import { candidati } from "../../obj/info";

export default function Lista() {
  return (
    <Sezione id="la-lista" className={style.lista}>
      <Reveal>
        <p className={style.etichetta}>LA LISTA</p>
        <h2 className={style.titolo}>Tre studenti, un'unica squadra</h2>
      </Reveal>
      <div className={style.griglia}>
        {candidati.map((c, i) => (
          <Reveal key={c.nome} delay={i * 120}>
            <article className={style.card}>
              <div className={style.avatar} aria-hidden="true">
                {c.iniziali}
              </div>
              <h3 className={style.nome}>{c.nome}</h3>
              <p className={style.ruolo}>Candidato · Lista 1</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Sezione>
  );
}
