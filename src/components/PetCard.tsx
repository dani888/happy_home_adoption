import { Link } from "react-router-dom";
import type { Pet } from "../types/pet";

export default function PetCard({ pet }: { pet: Pet }) {
  return (
    <Link
      to={`/pet/${pet.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm outline-none transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={pet.images[0]}
          alt={pet.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{pet.name}</h3>
          <div className="flex items-center gap-1.5">
            <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
              {pet.age}
            </span>
            <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
              {pet.gender}
            </span>
          </div>
        </div>
        <p className="text-sm font-medium text-slate-500">{pet.breed}</p>
        <p className="line-clamp-2 text-sm text-slate-600">
          {pet.shortDescription}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-amber-600 group-hover:text-amber-700">
          Meet {pet.name}
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
