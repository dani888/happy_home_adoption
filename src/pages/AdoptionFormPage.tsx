import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPetById } from "../data/pets";
import VisitDateCalendar from "../components/VisitDateCalendar";
import MapEmbed from "../components/MapEmbed";

export default function AdoptionFormPage() {
  const { id } = useParams<{ id: string }>();
  const pet = id ? getPetById(id) : undefined;

  const [submitted, setSubmitted] = useState(false);
  const [visitDate, setVisitDate] = useState("");
  const [dateTouched, setDateTouched] = useState(false);

  if (!pet) {
    return <Navigate to="/" replace />;
  }

  const backLink = `/pet/${pet.id}`;

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Thanks for applying to meet {pet.name}!
        </h1>
        <p className="mt-3 text-slate-600">
          We've received your request and will reach out to confirm your
          visit.
        </p>
        <Link
          to={backLink}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:to-amber-600"
        >
          Back to {pet.name}'s Profile
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
      <Link
        to={backLink}
        className="group mb-6 inline-flex items-center gap-1 rounded-full text-sm font-medium text-slate-500 outline-none transition-colors hover:text-amber-600 focus-visible:ring-2 focus-visible:ring-amber-400"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
          ←
        </span>
        Back to {pet.name}'s Profile
      </Link>

      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-lg shadow-slate-900/10 sm:aspect-[16/9]">
        <img
          src={pet.images[0]}
          alt={pet.name}
          className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/0 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-amber-800 backdrop-blur-sm">
            {pet.category === "dog" ? "🐶 Dog" : "🐱 Cat"} · {pet.breed}
          </span>
          <h1 className="mt-2 text-2xl font-bold text-white sm:text-4xl">
            Start {pet.name}'s Adoption Process
          </h1>
        </div>
      </div>
      <p className="mt-4 text-slate-600">
        Fill out the form below and we'll be in touch to schedule your visit
        with {pet.name}.
      </p>

      <form
        className="mt-8 flex flex-col gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          if (!visitDate) {
            setDateTouched(true);
            return;
          }
          setSubmitted(true);
        }}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="petName"
              className="text-sm font-medium text-slate-700"
            >
              Pet
            </label>
            <input
              id="petName"
              type="text"
              value={pet.name}
              readOnly
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-600"
            />
          </div>
          <div>
            <label
              htmlFor="petBreed"
              className="text-sm font-medium text-slate-700"
            >
              Breed
            </label>
            <input
              id="petBreed"
              type="text"
              value={pet.breed}
              readOnly
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-600"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-slate-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            placeholder="Jane Doe"
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="text-sm font-medium text-slate-700"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="(555) 123-4567"
              className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="jane@example.com"
              className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">
              Preferred Date to Meet {pet.name}{" "}
              <span className="text-red-500">*</span>
            </span>
            <div className="mt-1.5 flex-1">
              <VisitDateCalendar
                value={visitDate}
                onChange={(iso) => {
                  setVisitDate(iso);
                  setDateTouched(false);
                }}
              />
            </div>
            <p className="mt-1.5 text-xs text-slate-500">
              Visits must be scheduled at least one week out. Choose any
              available day this year.
            </p>
            {dateTouched && !visitDate && (
              <p className="mt-1 text-xs font-medium text-red-600">
                Please select a date to meet {pet.name}.
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">
              Where You'll Meet {pet.name}
            </span>
            <MapEmbed
              lat={pet.lat}
              lng={pet.lng}
              location={pet.location}
              zoom={12}
              minHeight={320}
              className="mt-1.5 flex-1 rounded-2xl border border-slate-200 shadow-sm"
            />
            <p className="mt-1.5 text-xs text-slate-500">
              Visits happen near {pet.location}. We'll confirm the exact
              address once your application is approved.
            </p>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-sm font-medium text-slate-700"
          >
            Anything else we should know? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            required
            placeholder="Tell us about your home, other pets, or any questions you have..."
            className="mt-1.5 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-md shadow-amber-500/30 ring-1 ring-inset ring-white/25 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-500/40 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 active:translate-y-0 active:shadow-sm sm:w-auto"
        >
          Submit Application
        </button>
        <p className="text-center text-xs text-slate-500 sm:text-left">
          We'll send updates to your phone and email to confirm your visit
          and make sure you're all set to meet {pet.name}.
        </p>
      </form>
    </div>
  );
}
