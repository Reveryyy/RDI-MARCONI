// Logo: la M del Marconi che si "smezza" e diventa un 1
export default function Logo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Logo Lista 1 Marconi next"
    >
      <rect width="120" height="120" rx="32" fill="var(--colore-primario)" />
      <g
        fill="none"
        stroke="var(--colore-testo-primario)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      >
        <path d="M26 17 H48 L54 11" />
        <path d="M72 17 H94" />
        <path d="M26 103 H46" />
        <path d="M94 103 H72 L66 109" />
      </g>
      <g fill="var(--colore-testo-primario)" opacity="0.5">
        <circle cx="26" cy="17" r="3" />
        <circle cx="94" cy="17" r="3" />
        <circle cx="26" cy="103" r="3" />
        <circle cx="94" cy="103" r="3" />
      </g>
      <path
        d="M22 92 V30 H36 L58 62 V78 L36 52 V92 Z"
        fill="var(--colore-testo-primario)"
      />
      <path
        d="M98 92 V30 H82 L66 44 V58 L82 46 V92 Z"
        fill="var(--colore-testo-primario)"
      />
    </svg>
  );
}
