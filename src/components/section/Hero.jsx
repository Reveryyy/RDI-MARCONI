import style from "./Hero.module.css";
import Sezione from "../ui/Sezione";
import SchedaElettorale from "../ui/SchedaElettorale";
import Button from "../ui/Button";
import { numeroLista, motto, slogan } from "../../obj/info";

export default function Hero() {
  return (
    <Sezione className={style.hero} id="home">
      <div className={`${style.mini_title__container} ${style.entra}`}>
        <p>Elezioni dei rappresentanti d'istituto</p>
      </div>
      <div className={style.hero__row}>
        <div className={style.hero_body__container}>
          <div className={`${style.text_title__container} ${style.entra}`}>
            <p className={style.title}>Lista</p>
            <p className={`${style.title} ${style.color_primario}`}>
              {numeroLista}
            </p>
          </div>
          <p className={`${style.motto} ${style.entra}`}>{motto}</p>
          <p className={`${style.description} ${style.entra}`}>
            {slogan} Siamo tre studenti con idee concrete per rendere
            l'istituto un posto migliore. Scopri chi siamo e cosa vogliamo
            fare.
          </p>
          <div className={`${style.buttons__row} ${style.entra}`}>
            <Button testo="Scopri il programma" primario href="#programma" />
            <Button testo="Conosci la lista" href="#la-lista" />
          </div>
        </div>
        <div className={`${style.tessera__container} ${style.entra_scheda}`}>
          <SchedaElettorale />
        </div>
      </div>
    </Sezione>
  );
}
