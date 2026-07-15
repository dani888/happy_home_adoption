import { Link, Navigate, useParams } from "react-router-dom";
import { CheckCircle2, Stethoscope, Utensils, XCircle } from "lucide-react";
import { getPetById } from "../data/pets";
import PetImageCarousel from "../components/PetImageCarousel";
import MapEmbed from "../components/MapEmbed";

export default function PetDetailPage() {
  const { id } = useParams<{ id: string }>();
  const pet = id ? getPetById(id) : undefined;

  if (!pet) {
    return <Navigate to="/" replace />;
  }

  const backLink = pet.category === "dog" ? "/dogs" : "/cats";
  const backLabel = pet.category === "dog" ? "All Dogs" : "All Cats";

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link
        to={backLink}
        className="group mb-6 inline-flex items-center gap-1 rounded-full text-sm font-medium text-slate-500 outline-none transition-colors hover:text-amber-600 focus-visible:ring-2 focus-visible:ring-amber-400"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
          ←
        </span>
        Back to {backLabel}
      </Link>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <PetImageCarousel images={pet.images} name={pet.name} />
        </div>

        <div className="lg:col-span-3">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {pet.name}
            </h1>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
              {pet.category === "dog" ? "🐶 Dog" : "🐱 Cat"}
            </span>
          </div>
          <p className="mt-1 text-lg font-medium text-slate-500">
            {pet.breed}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Age", value: pet.age },
              { label: "Gender", value: pet.gender },
              { label: "Size", value: pet.size },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3"
              >
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Where {pet.name} came from
            </h2>
            <p className="mt-1 text-slate-700">{pet.origin}</p>
            <MapEmbed
              lat={pet.lat}
              lng={pet.lng}
              location={pet.location}
              zoom={11}
              minHeight={220}
              className="mt-3 rounded-xl border border-slate-200 shadow-sm"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {pet.temperament.map((trait) => (
              <span
                key={trait}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {trait}
              </span>
            ))}
          </div>

          <Link
            to={`/pet/${pet.id}/adopt`}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-amber-500/30 ring-1 ring-inset ring-white/25 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-500/40 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 active:translate-y-0 active:shadow-sm sm:w-auto"
          >
            Start {pet.name}'s Adoption Process
          </Link>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 border-t border-slate-200 pt-10 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {pet.name}'s Story
          </h2>
          <p className="mt-3 leading-relaxed text-slate-700">{pet.story}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            About the {pet.breed} Breed
          </h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            {pet.breedInfo}
          </p>
        </div>
      </div>

      <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-slate-500">
          <Stethoscope className="h-4 w-4" strokeWidth={2.25} />
          Medical History
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { label: "Vaccinated", value: pet.medicalHistory.vaccinated },
            {
              label: "Spayed/Neutered",
              value: pet.medicalHistory.spayedNeutered,
            },
            { label: "Microchipped", value: pet.medicalHistory.microchipped },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5"
            >
              {item.value ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
              ) : (
                <XCircle className="h-4 w-4 shrink-0 text-slate-400" />
              )}
              <span className="text-sm font-medium text-slate-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">
          {pet.medicalHistory.notes}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-amber-50 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-800">
            Good with
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {pet.goodWith.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-3 py-1 text-sm font-medium text-amber-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-amber-50 p-6">
          <h2 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-amber-800">
            <Utensils className="h-4 w-4" strokeWidth={2.25} />
            Favorite Food
          </h2>
          <p className="mt-3 text-sm font-medium text-slate-700">
            {pet.favoriteFood}
          </p>
        </div>
      </div>
    </div>
  );
}
