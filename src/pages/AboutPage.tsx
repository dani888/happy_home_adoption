import { Code2, Heart, MapPinned, Palette, Route, Shapes, Sparkles } from "lucide-react";

const stack = [
  {
    icon: Code2,
    name: "React + TypeScript",
    description:
      "Component-based UI written in strictly-typed TypeScript for a safer, more maintainable codebase.",
  },
  {
    icon: Sparkles,
    name: "Vite",
    description: "Lightning-fast dev server and production build tooling.",
  },
  {
    icon: Palette,
    name: "Tailwind CSS v4",
    description:
      "Utility-first styling powering a consistent, responsive design system across every page.",
  },
  {
    icon: Route,
    name: "React Router",
    description:
      "Client-side routing between the home page, categories, individual pet profiles, and this page.",
  },
  {
    icon: Shapes,
    name: "Lucide Icons",
    description: "A clean, consistent open-source icon set used throughout the site.",
  },
  {
    icon: MapPinned,
    name: "Google Maps Embed",
    description: "Shows each pet's fictional origin city on an interactive map.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          About This Project
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Happy Home Adoptions is a demo pet adoption website built to
          showcase a modern, polished web app — it isn't a real animal
          shelter. Every pet, photo, and story on this site is fictional and
          created purely for demonstration purposes.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-amber-600">
          Built With
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {stack.map(({ icon: Icon, name, description }) => (
            <div
              key={name}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Icon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{name}</h3>
                <p className="mt-1 text-sm text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 text-center">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-amber-600">
          Best Friends
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-slate-600">
          Dogs and cats can be the very best of friends.
        </p>
        <div className="mx-auto mt-6 max-w-xs rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 to-white p-4 shadow-sm">
          <div className="aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-md">
            <img
              src="https://media.tenor.com/Yz6eoswV6-sAAAAd/dog-cat.gif"
              alt="A dog and a cat sitting happily together in a living room"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            <Heart className="h-3.5 w-3.5" strokeWidth={2.25} fill="currentColor" />
            Happier together
          </span>
        </div>
      </div>
    </div>
  );
}
