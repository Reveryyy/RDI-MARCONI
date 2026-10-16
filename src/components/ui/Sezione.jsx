import style from "./Sezione.module.css";

export default function Sezione({ children, className = "", id }) {
  return (
    <section id={id} className={`${className} ${style.sezione}`}>
      {children}
    </section>
  );
}
