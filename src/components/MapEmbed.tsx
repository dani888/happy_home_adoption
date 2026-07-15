import { useState } from "react";
import { MapPin } from "lucide-react";

export default function MapEmbed({
  lat,
  lng,
  location,
  zoom,
  className,
  minHeight,
}: {
  lat: number;
  lng: number;
  location: string;
  zoom: number;
  className?: string;
  minHeight?: number;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-slate-100 ${className ?? ""}`}
      style={minHeight ? { minHeight } : undefined}
    >
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 text-slate-400 transition-opacity duration-500 ${
          isLoaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <MapPin className="h-6 w-6 animate-pulse" strokeWidth={2} />
        <span className="text-xs font-medium">Loading map…</span>
      </div>
      <iframe
        title={`Map of ${location}`}
        src={`https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
        className="absolute inset-0 h-full w-full"
        onLoad={() => setTimeout(() => setIsLoaded(true), 600)}
      />
    </div>
  );
}
