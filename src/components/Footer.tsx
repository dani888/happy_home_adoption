import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-slate-600">
          Made with
          <Heart className="h-4 w-4 text-amber-500" fill="currentColor" />
          for animals looking for a home.
        </div>
        <p className="mt-2 text-xs text-slate-400">Built by Daniel Werminghausen</p>
      </div>
    </footer>
  );
}
