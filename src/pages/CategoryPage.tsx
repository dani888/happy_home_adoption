import PetCard from "../components/PetCard";
import { getPetsByCategory } from "../data/pets";
import type { PetCategory } from "../types/pet";

interface CategoryPageProps {
  category: PetCategory;
  title: string;
  blurb: string;
}

export default function CategoryPage({ category, title, blurb }: CategoryPageProps) {
  const animals = getPetsByCategory(category);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-slate-600">{blurb}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {animals.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}
