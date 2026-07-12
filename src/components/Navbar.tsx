import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Cat, Dog, Heart, Home, Info, Menu, PawPrint, X } from "lucide-react";
import CatPawTrail from "./CatPawTrail";

const navItems = [
  { to: "/", label: "Home", end: true, icon: Home },
  { to: "/dogs", label: "Dogs", end: false, icon: Dog },
  { to: "/cats", label: "Cats", end: false, icon: Cat },
  { to: "/about", label: "About", end: false, icon: Info },
];

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-400 ${
    isActive
      ? "bg-white text-amber-700 shadow-sm"
      : "text-slate-600 hover:text-slate-900"
  }`;

const mobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded-r-lg border-l-4 px-3.5 py-3 text-base font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 ${
    isActive
      ? "border-amber-500 bg-amber-50 text-amber-800"
      : "border-transparent text-slate-700 hover:bg-slate-50 hover:text-slate-900"
  }`;

const donateClasses =
  "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-amber-500/30 ring-1 ring-inset ring-white/25 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-500/40 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 active:translate-y-0 active:shadow-sm";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md"
    >
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
          <CatPawTrail className="hidden items-center lg:flex" />
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <nav className="flex items-center gap-1 rounded-full bg-slate-100 p-1">
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
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
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
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
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
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 px-4 py-3 text-base font-semibold text-white shadow-md shadow-amber-500/30 ring-1 ring-inset ring-white/25 outline-none transition-all duration-200 hover:to-amber-600 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-amber-400 active:shadow-sm"
          >
            <Heart className="h-5 w-5" strokeWidth={2.25} fill="currentColor" />
            Donate
          </button>
        </nav>
      </div>
    </header>
  );
}
