import { useState } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  ChevronLeft,
  Dog,
  GraduationCap,
  Home,
  PawPrint,
  Sparkles,
  Users,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import { pets } from "../data/pets";
import type { Pet } from "../types/pet";

type Answers = {
  petType?: string;
  living?: string;
  activity?: string;
  kids?: string;
  otherPets?: string;
  vibe?: string;
  vocal?: string;
  experience?: string;
};

const QUESTIONS: {
  key: keyof Answers;
  icon: LucideIcon;
  question: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "petType",
    icon: PawPrint,
    question: "Are you hoping for a dog, a cat, or open to either?",
    options: [
      { value: "dog", label: "A dog" },
      { value: "cat", label: "A cat" },
      { value: "either", label: "Either is great" },
    ],
  },
  {
    key: "living",
    icon: Home,
    question: "What's your living situation?",
    options: [
      { value: "apartment", label: "Apartment, no yard" },
      { value: "smallYard", label: "House with a small yard" },
      { value: "bigYard", label: "House with a big yard" },
    ],
  },
  {
    key: "activity",
    icon: Zap,
    question: "How active is your day-to-day life?",
    options: [
      { value: "low", label: "Low-key, relaxed evenings" },
      { value: "moderate", label: "Moderately active, regular walks" },
      { value: "high", label: "Very active, hiking or running" },
    ],
  },
  {
    key: "kids",
    icon: Users,
    question: "Any kids in the home?",
    options: [
      { value: "young", label: "Yes, young kids" },
      { value: "older", label: "Yes, older kids or teens" },
      { value: "none", label: "No kids" },
    ],
  },
  {
    key: "otherPets",
    icon: Dog,
    question: "Do you already have other pets at home?",
    options: [
      { value: "dogs", label: "Other dogs" },
      { value: "cats", label: "Other cats" },
      { value: "none", label: "No other pets" },
    ],
  },
  {
    key: "vibe",
    icon: Sparkles,
    question: "What personality vibe are you drawn to?",
    options: [
      { value: "calm", label: "Calm and cuddly" },
      { value: "playful", label: "Playful and silly" },
      { value: "independent", label: "Independent and confident" },
    ],
  },
  {
    key: "vocal",
    icon: Volume2,
    question: "Chatty companion or the strong, silent type?",
    options: [
      { value: "chatty", label: "I love a chatty companion" },
      { value: "quiet", label: "I prefer the quiet, mellow type" },
      { value: "either", label: "No preference" },
    ],
  },
  {
    key: "experience",
    icon: GraduationCap,
    question: "Have you owned a pet before?",
    options: [
      { value: "first", label: "This would be my first" },
      { value: "experienced", label: "I'm an experienced owner" },
    ],
  },
];

const CALM_TRAITS = [
  "calm",
  "low-energy",
  "gentle",
  "docile",
  "easygoing",
  "dignified",
  "quiet",
  "reserved",
  "sweet",
];
const PLAYFUL_TRAITS = [
  "playful",
  "energetic",
  "goofy",
  "comedic",
  "curious",
  "athletic",
  "bold",
];
const INDEPENDENT_TRAITS = [
  "independent",
  "confident",
  "alert",
  "protective",
  "selective",
  "dignified",
];

function scorePet(pet: Pet, answers: Answers) {
  let score = 0;
  const reasons: string[] = [];
  const goodWith = pet.goodWith.map((g) => g.toLowerCase());
  const temperament = pet.temperament.map((t) => t.toLowerCase());
  const size = pet.size.toLowerCase();

  if (answers.petType && answers.petType !== "either") {
    if (pet.category === answers.petType) {
      score += 4;
    } else {
      score -= 4;
    }
  }

  if (answers.living === "apartment") {
    if (goodWith.some((g) => g.includes("apartment"))) {
      score += 3;
      reasons.push("Does great in apartments");
    }
    if (size.includes("small")) score += 2;
    if (size.includes("large") || size.includes("giant")) score -= 3;
  } else if (answers.living === "smallYard") {
    if (goodWith.some((g) => g.includes("famil"))) score += 1;
    if (size.includes("medium")) score += 1;
  } else if (answers.living === "bigYard") {
    if (goodWith.some((g) => g.includes("active") || g.includes("space"))) {
      score += 3;
      reasons.push("Loves having room to roam");
    }
    if (size.includes("large") || size.includes("giant")) score += 2;
  }

  if (answers.activity === "low" && temperament.some((t) => CALM_TRAITS.includes(t))) {
    score += 3;
    reasons.push("Matches your relaxed pace");
  } else if (
    answers.activity === "moderate" &&
    temperament.some((t) =>
      ["friendly", "affectionate", "playful", "sociable", "social"].includes(t),
    )
  ) {
    score += 2;
  } else if (answers.activity === "high") {
    if (temperament.some((t) => ["energetic", "athletic", "active", "alert"].includes(t))) {
      score += 3;
      reasons.push("Ready to keep up with an active lifestyle");
    }
    if (goodWith.some((g) => g.includes("active"))) score += 2;
  }

  if (answers.kids === "young") {
    if (goodWith.some((g) => g.includes("kid"))) {
      score += 3;
      reasons.push("Great with kids");
    }
  } else if (answers.kids === "older") {
    if (goodWith.some((g) => g.includes("kid"))) score += 2;
  } else if (answers.kids === "none") {
    if (
      goodWith.some(
        (g) => g.includes("single-pet") || g.includes("quiet") || g.includes("senior"),
      )
    )
      score += 1;
  }

  if (answers.otherPets === "dogs" && goodWith.some((g) => g.includes("other dogs"))) {
    score += 3;
    reasons.push("Gets along well with other dogs");
  } else if (answers.otherPets === "cats" && goodWith.some((g) => g.includes("cats"))) {
    score += 3;
    reasons.push("Comfortable around other cats");
  } else if (answers.otherPets === "none" && goodWith.some((g) => g.includes("single-pet"))) {
    score += 1;
  }

  if (answers.vibe === "calm" && temperament.some((t) => CALM_TRAITS.includes(t))) {
    score += 3;
    reasons.push("A calm, cuddly personality");
  } else if (answers.vibe === "playful" && temperament.some((t) => PLAYFUL_TRAITS.includes(t))) {
    score += 3;
    reasons.push("A playful, silly streak");
  } else if (
    answers.vibe === "independent" &&
    temperament.some((t) => INDEPENDENT_TRAITS.includes(t))
  ) {
    score += 3;
    reasons.push("An independent, confident spirit");
  }

  if (answers.vocal === "chatty" && temperament.includes("vocal")) {
    score += 2;
    reasons.push("Loves to chat with you");
  } else if (
    answers.vocal === "quiet" &&
    temperament.some((t) => ["quiet", "calm", "reserved"].includes(t))
  ) {
    score += 2;
  }

  if (answers.experience === "first") {
    if (goodWith.some((g) => g.includes("first-time"))) {
      score += 3;
      reasons.push("Beginner-friendly and easygoing");
    }
    if (goodWith.some((g) => g.includes("experienced"))) score -= 2;
  } else if (answers.experience === "experienced") {
    if (goodWith.some((g) => g.includes("experienced"))) score += 2;
  }

  return { score, reasons: reasons.slice(0, 3) };
}

function getMatches(answers: Answers) {
  return pets
    .map((pet) => ({ pet, ...scorePet(pet, answers) }))
    .sort((a, b) => b.score - a.score);
}

export default function PetMatchQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState<"intro" | "quiz" | "result">("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [matches, setMatches] = useState<
    { pet: Pet; score: number; reasons: string[] }[]
  >([]);

  const reset = () => {
    setPhase("intro");
    setStep(0);
    setAnswers({});
    setMatches([]);
  };

  const startQuiz = () => {
    setStep(0);
    setAnswers({});
    setPhase("quiz");
  };

  const selectAnswer = (key: keyof Answers, value: string) => {
    const nextAnswers = { ...answers, [key]: value };
    setAnswers(nextAnswers);
    if (step + 1 < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      setMatches(getMatches(nextAnswers));
      setPhase("result");
    }
  };

  const currentQuestion = QUESTIONS[step];
  const topMatch = matches[0];
  const runnersUp = matches.slice(1, 3);

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Find My Pet Match"
          className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-amber-400 to-amber-500 text-white shadow-lg shadow-amber-500/40 ring-1 ring-inset ring-white/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/50 sm:right-6 sm:bottom-6 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3.5"
        >
          <PawPrint className="h-6 w-6 sm:h-5 sm:w-5" strokeWidth={2.25} />
          <span className="hidden text-sm font-semibold sm:inline">
            Find My Pet Match
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-x-4 bottom-4 z-50 flex max-h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[400px]">
          <div className="flex items-center justify-between bg-gradient-to-b from-amber-400 to-amber-500 px-5 py-4 text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" strokeWidth={2.25} />
              <span className="font-semibold">Pet Match Quiz</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="rounded-full p-1 transition-colors hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5">
            {phase === "intro" && (
              <div className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <PawPrint className="h-7 w-7" strokeWidth={2.25} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Not sure who's right for you?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Answer {QUESTIONS.length} quick questions about your home,
                  lifestyle, and what you're looking for, and we'll match you
                  with the animal on our site who fits best.
                </p>
                <button
                  type="button"
                  onClick={startQuiz}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:to-amber-600"
                >
                  Start the Quiz
                </button>
              </div>
            )}

            {phase === "quiz" && (
              <div>
                <div className="mb-4 flex items-center gap-1.5">
                  {QUESTIONS.map((question, i) => (
                    <span
                      key={question.key}
                      className={`h-1.5 flex-1 rounded-full ${
                        i <= step ? "bg-amber-400" : "bg-slate-100"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <currentQuestion.icon className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                  <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                    Question {step + 1} of {QUESTIONS.length}
                  </p>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {currentQuestion.question}
                </h3>
                <div className="mt-4 flex flex-col gap-2">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => selectAnswer(currentQuestion.key, option.value)}
                      className="rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => (step > 0 ? setStep((s) => s - 1) : setPhase("intro"))}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-amber-600"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>
              </div>
            )}

            {phase === "result" && topMatch && (
              <div>
                <div className="text-center">
                  <p className="text-xs font-medium tracking-wide text-amber-600 uppercase">
                    Your best match is
                  </p>
                  <div className="mt-3 overflow-hidden rounded-2xl">
                    <img
                      src={topMatch.pet.images[0]}
                      alt={topMatch.pet.name}
                      className="h-40 w-full object-cover object-[50%_35%]"
                    />
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {topMatch.pet.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500">
                    {topMatch.pet.breed}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {topMatch.pet.shortDescription}
                  </p>
                </div>

                {topMatch.reasons.length > 0 && (
                  <ul className="mt-4 flex flex-col gap-1.5 rounded-xl bg-amber-50 p-3.5">
                    {topMatch.reasons.map((reason) => (
                      <li
                        key={reason}
                        className="flex items-start gap-2 text-xs font-medium text-amber-800"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  to={`/pet/${topMatch.pet.id}`}
                  onClick={() => setIsOpen(false)}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:to-amber-600"
                >
                  Meet {topMatch.pet.name}
                </Link>

                {runnersUp.length > 0 && (
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                      Other great matches
                    </p>
                    <div className="mt-2 flex flex-col gap-2">
                      {runnersUp.map(({ pet }) => (
                        <Link
                          key={pet.id}
                          to={`/pet/${pet.id}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 rounded-xl border border-slate-200 p-2 transition-colors hover:border-amber-300 hover:bg-amber-50"
                        >
                          <img
                            src={pet.images[0]}
                            alt={pet.name}
                            className="h-12 w-12 shrink-0 rounded-lg object-cover object-[50%_35%]"
                          />
                          <span>
                            <span className="block text-sm font-semibold text-slate-900">
                              {pet.name}
                            </span>
                            <span className="block text-xs text-slate-500">
                              {pet.breed}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={reset}
                  className="mt-4 w-full text-center text-sm font-medium text-slate-500 transition-colors hover:text-amber-600"
                >
                  Retake the quiz
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
