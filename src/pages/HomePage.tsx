import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import PetCard from "../components/PetCard";
import { getPetsByCategory, pets } from "../data/pets";

export default function HomePage() {
  const featuredDogs = getPetsByCategory("dog").slice(0, 3);
  const featuredCats = getPetsByCategory("cat").slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
          <p className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800">
            {pets.length} animals currently looking for homes
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Find your new
            <span className="text-amber-500"> best friend</span>
          </h1>
          <p className="mt-2 text-xl font-semibold text-amber-600 sm:text-2xl">
            Adopt today!
          </p>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
            Browse adoptable dogs and cats, read their stories, and take the
            first step toward giving a rescue animal a loving home.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/dogs"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-amber-500/25 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/30 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 active:translate-y-0"
            >
              Meet the Dogs
            </Link>
            <Link
              to="/cats"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm outline-none transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:translate-y-0"
            >
              Meet the Cats
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Featured Dogs
            </h2>
            <p className="mt-1 text-slate-600">
              A few friendly faces ready to meet you.
            </p>
          </div>
          <Link
            to="/dogs"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
          >
            View all dogs
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDogs.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Featured Cats
            </h2>
            <p className="mt-1 text-slate-600">
              Independent, affectionate, and ready for a lap to call home.
            </p>
          </div>
          <Link
            to="/cats"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
          >
            View all cats
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCats.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 text-center sm:grid-cols-2 sm:divide-x sm:divide-slate-700 sm:text-left">
          <div className="sm:pr-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to adopt?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-300 sm:mx-0">
              Every animal on this site is vaccinated, health-checked, and
              waiting for the right family. Click into any profile to learn
              more about their personality, background, and needs.
            </p>
          </div>
          <div className="sm:pl-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Want to help another way?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-300 sm:mx-0">
              Every donation helps cover food, vaccinations, and shelter care
              for the animals still waiting for their forever home. Every bit
              helps.
            </p>
            <button
              type="button"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-amber-500/25 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/30 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 active:translate-y-0"
            >
              <Heart className="h-4 w-4" strokeWidth={2.25} fill="currentColor" />
              Donate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
