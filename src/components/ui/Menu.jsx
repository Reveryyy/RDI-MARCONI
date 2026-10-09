import style from "./Menu.module.css";

export default function Menu() {
  const voci = [
    { href: "#home", testo: "Home" },
    { href: "#la-lista", testo: "La lista" },
    { href: "#programma", testo: "Programma" },
    { href: "#contatti", testo: "Contatti" },
  ];
  return (
    <>
      <nav class={style.menu}>
        <ul>
          {voci.map((v) => (
            <li key={v.href}>
              <a href={v.href}>{v.testo}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
