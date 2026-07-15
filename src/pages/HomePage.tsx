import { Link } from "react-router-dom";
import { ExternalLink, Heart, Newspaper } from "lucide-react";
import PetCard from "../components/PetCard";
import CatPawTrail from "../components/CatPawTrail";
import PetMatchQuiz from "../components/PetMatchQuiz";
import { BLOG_URL } from "../components/Navbar";
import { getPetsByCategory, pets } from "../data/pets";

export default function HomePage() {
  const featuredDogs = getPetsByCategory("dog").slice(0, 3);
  const featuredCats = getPetsByCategory("cat").slice(0, 3);

  return (
    <div>
      <PetMatchQuiz />

      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
        <div className="mx-auto w-full max-w-6xl px-6 pt-14 pb-4 text-center sm:pt-28 sm:pb-12">
          <p className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800">
            {pets.length} animals currently looking for homes
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Meet your new
            <span className="text-amber-500"> Best Friend</span>
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
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-amber-400 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/30 ring-1 ring-inset ring-white/25 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-500/40 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 active:translate-y-0 active:shadow-sm"
            >
              Meet the Dogs
            </Link>
            <Link
              to="/cats"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm outline-none transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50/60 hover:text-amber-700 hover:shadow-md focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:translate-y-0"
            >
              Meet the Cats
            </Link>
          </div>
          <CatPawTrail scale={3} color="text-amber-300" className="mt-6 items-end justify-center sm:mt-10" />
        </div>

      </section>

      <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
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

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-col items-center gap-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 to-white p-8 text-center shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
              <Newspaper className="h-3.5 w-3.5" strokeWidth={2.25} />
              Our Blog
            </span>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
              Stories and advice for dog and cat lovers
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600 sm:mx-0">
              Read articles on pet care, training, and rescue stories, and
              join the conversation by sharing your own thoughts in the
              comments.
            </p>
          </div>
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/30 ring-1 ring-inset ring-white/25 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-500/40 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 active:translate-y-0 active:shadow-sm"
          >
            Visit the Blog
            <ExternalLink className="h-4 w-4" strokeWidth={2.25} />
          </a>
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
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/30 ring-1 ring-inset ring-white/25 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-500/40 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 active:translate-y-0 active:shadow-sm"
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
