import style from "./Reveal.module.css";
import useReveal from "../../hooks/useReveal";

export default function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visibile] = useReveal();
  return (
    <div
      ref={ref}
      className={`${style.reveal} ${visibile ? style.visibile : ""} ${className}`}
      style={{ "--ritardo": `${delay}ms` }}
    >
      {children}
    </div>
  );
}
