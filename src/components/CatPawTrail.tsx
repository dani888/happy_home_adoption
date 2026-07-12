import { PawPrint } from "lucide-react";

const paws = [
  { delay: "0.6s", size: 17, rotate: -10, offsetY: 1 },
  { delay: "0.3s", size: 14, rotate: 14, offsetY: -3 },
  { delay: "0s", size: 11, rotate: -6, offsetY: 2 },
];

export default function CatPawTrail() {
  return (
    <div className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
      {paws.map((paw, i) => (
        <span
          key={i}
          className="inline-block text-slate-300"
          style={{ transform: `translateY(${paw.offsetY}px) rotate(${paw.rotate}deg)` }}
        >
          <span
            className="paw-trail-item block"
            style={{
              animation: "paw-appear 4s ease-in-out infinite",
              animationDelay: paw.delay,
            }}
          >
            <PawPrint width={paw.size} height={paw.size} />
          </span>
        </span>
      ))}
    </div>
  );
}
