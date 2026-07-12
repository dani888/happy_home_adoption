import { PawPrint } from "lucide-react";

const paws = [
  { delay: "0.6s", size: 17, rotate: -10, offsetY: 1 },
  { delay: "0.3s", size: 14, rotate: 14, offsetY: -3 },
  { delay: "0s", size: 11, rotate: -6, offsetY: 2 },
];

export default function CatPawTrail({
  scale = 1,
  color = "text-slate-300",
  className = "",
}: {
  scale?: number;
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex ${color} ${className}`}
      style={{ gap: `${6 * scale}px` }}
      aria-hidden="true"
    >
      {paws.map((paw, i) => (
        <span
          key={i}
          className="inline-block"
          style={{ transform: `translateY(${paw.offsetY * scale}px) rotate(${paw.rotate}deg)` }}
        >
          <span
            className="paw-trail-item block"
            style={{
              animation: "paw-appear 4s ease-in-out infinite",
              animationDelay: paw.delay,
            }}
          >
            <PawPrint width={paw.size * scale} height={paw.size * scale} />
          </span>
        </span>
      ))}
    </div>
  );
}
