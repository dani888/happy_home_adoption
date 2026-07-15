import { useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function toISODate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function VisitDateCalendar({
  value,
  onChange,
}: {
  value: string;
  onChange: (iso: string) => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const year = today.getFullYear();

  const minSelectable = new Date(today);
  minSelectable.setDate(today.getDate() + 7);
  const minMonth =
    minSelectable.getFullYear() === year ? minSelectable.getMonth() : today.getMonth();

  const [viewedMonth, setViewedMonth] = useState(minMonth);

  const firstOfMonth = new Date(year, viewedMonth, 1);
  const daysInMonth = new Date(year, viewedMonth + 1, 0).getDate();
  const leadingBlanks = firstOfMonth.getDay();

  const canGoPrev = viewedMonth > minMonth;
  const canGoNext = viewedMonth < 11;

  const cells: (number | null)[] = [
    ...Array(leadingBlanks).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <button
          type="button"
          disabled={!canGoPrev}
          onClick={() => setViewedMonth((m) => m - 1)}
          className="rounded-full p-1.5 text-slate-500 transition-colors hover:bg-amber-50 hover:text-amber-700 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-slate-500"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900">
          <CalendarDays className="h-4 w-4 text-amber-500" strokeWidth={2.25} />
          {MONTH_NAMES[viewedMonth]} {year}
        </span>
        <button
          type="button"
          disabled={!canGoNext}
          onClick={() => setViewedMonth((m) => m + 1)}
          className="rounded-full p-1.5 text-slate-500 transition-colors hover:bg-amber-50 hover:text-amber-700 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-slate-500"
          aria-label="Next month"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 border-b border-slate-100 pb-2 text-center text-xs font-semibold tracking-wide text-slate-400 uppercase">
        {WEEKDAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="mt-2 grid flex-1 grid-cols-7 content-start gap-y-1.5">
        {cells.map((day, index) => {
          if (day === null) {
            return <span key={`blank-${index}`} />;
          }

          const date = new Date(year, viewedMonth, day);
          const iso = toISODate(date);
          const isDisabled = date < minSelectable;
          const isSelected = value === iso;
          const isToday = toISODate(today) === iso;

          return (
            <div key={iso} className="flex items-center justify-center">
              <button
                type="button"
                disabled={isDisabled}
                onClick={() => onChange(iso)}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-all duration-150 ${
                  isSelected
                    ? "bg-gradient-to-b from-amber-400 to-amber-500 text-white shadow-md shadow-amber-500/30 ring-1 ring-inset ring-white/25"
                    : isDisabled
                      ? "cursor-not-allowed text-slate-300"
                      : "text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                } ${isToday && !isSelected ? "ring-1 ring-inset ring-amber-300" : ""}`}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
