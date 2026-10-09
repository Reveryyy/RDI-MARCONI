import style from "./Button.module.css";

export default function Button({ testo, primario, href }) {
  return (
    <>
      <a
        href={href}
        className={`${style.button} ${primario ? "" : style.primario}`}
      >
        {testo}
      </a>
    </>
  );
}
