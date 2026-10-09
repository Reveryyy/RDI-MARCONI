import style from "./Header.module.css";
import Menu from "../ui/Menu";
import { numeroLista } from "../../obj/info";

export default function Header() {
  return (
    <>
      <header class={style.header}>
        <div class={style.header__container}>
          <div class={style.logo__container}>
            <div class={style.logo__div}>
              <p class={style.logo_text}>{numeroLista}</p>
            </div>
            <p className={style.logo__titolo}>Lista {numeroLista}</p>
          </div>
          <Menu />
        </div>
      </header>
    </>
  );
}
