import style from "./Menu.module.css";

export default function Menu({ aperto = false, chiudiMenu }) {
  const voci = [
    { href: "#home", testo: "Home" },
    { href: "#la-lista", testo: "La lista" },
    { href: "#programma", testo: "Programma" },
    { href: "#contatti", testo: "Contatti" },
  ];
  return (
    <>
      <nav
        id="menu-principale"
        className={`${style.menu} ${aperto ? style.menu__aperto : ""}`}
        aria-label="Menu principale"
      >
        <ul>
          {voci.map((v) => (
            <li key={v.href}>
              <a href={v.href} onClick={chiudiMenu}>
                {v.testo}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
