import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Cat, Dog, Heart, Home, Menu, PawPrint, X } from "lucide-react";
import CatPawTrail from "./CatPawTrail";

const navItems = [
  { to: "/", label: "Home", end: true, icon: Home },
  { to: "/dogs", label: "Dogs", end: false, icon: Dog },
  { to: "/cats", label: "Cats", end: false, icon: Cat },
];

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 ${
    isActive
      ? "bg-amber-100 text-amber-800"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
  }`;

const mobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 ${
    isActive
      ? "bg-amber-100 text-amber-800"
      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  }`;

const donateClasses =
  "inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-amber-500/30 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-md hover:shadow-amber-500/40 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 active:translate-y-0";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <NavLink to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 shadow-sm shadow-amber-500/30">
              <PawPrint className="h-4 w-4 text-white" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Happy Home <span className="font-semibold text-amber-500">Adoptions</span>
            </span>
          </NavLink>
          <CatPawTrail />
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <nav className="flex items-center gap-1">
            {navItems.map(({ to, label, end, icon: Icon }) => (
              <NavLink key={to} to={to} end={end} className={linkClasses}>
                <Icon className="h-4 w-4" strokeWidth={2.25} />
                {label}
              </NavLink>
            ))}
          </nav>
          <span className="h-6 w-px bg-slate-200" aria-hidden="true" />
          <button type="button" className={donateClasses}>
            <Heart className="h-4 w-4" strokeWidth={2.25} fill="currentColor" />
            Donate
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" strokeWidth={2.25} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={2.25} />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out sm:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-slate-200 bg-white px-4 py-3">
          {navItems.map(({ to, label, end, icon: Icon }) => (
            <NavLink key={to} to={to} end={end} className={mobileLinkClasses}>
              <Icon className="h-5 w-5" strokeWidth={2.25} />
              {label}
            </NavLink>
          ))}
          <button
            type="button"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-base font-semibold text-white shadow-sm shadow-amber-500/30 outline-none transition-colors hover:bg-amber-600 focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <Heart className="h-5 w-5" strokeWidth={2.25} fill="currentColor" />
            Donate
          </button>
        </nav>
      </div>
    </header>
  );
}
