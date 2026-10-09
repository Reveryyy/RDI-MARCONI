import style from "./Hero.module.css";
import Sezione from "../ui/Sezione";
import SchedaElettorale from "../ui/SchedaElettorale";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <>
      <Sezione className={style.hero} id="home">
        <div className={style.mini_title__container}>
          <p>Elezioni dei rappresentanti d'istituto</p>
        </div>
        <div className={style.hero__row}>
          <div className={style.hero_body__container}>
            <div className={style.text_title__container}>
              <p className={style.title}>Lista</p>
              <p className={`${style.title} ${style.color_primario}`}>NUMERO</p>
            </div>
            <p className={style.motto}>Il futuro della scuola parte da te.</p>
            <p className={style.description}>
              Siamo tre studenti con idee concrete per rendere l'istituto un
              posto migliore. Scopri chi siamo e cosa vogliamo fare.
            </p>
            <div className={style.buttons__row}>
              <Button
                testo="Scopri il programma"
                primario={false}
                href="#programma-elettorale"
              />
              <Button testo="Conosci la lista" primario={true} href="#lista" />
            </div>
          </div>
          <div className={style.tessera__container}>
            <SchedaElettorale />
          </div>
        </div>
      </Sezione>
    </>
  );
}
