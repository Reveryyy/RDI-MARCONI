import { useEffect, useRef, useState } from "react";

// Restituisce [ref, visibile]: diventa true quando l'elemento entra nello schermo
export default function useReveal() {
  const ref = useRef(null);
  const [visibile, setVisibile] = useState(() => !("IntersectionObserver" in window));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibile(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visibile];
}
