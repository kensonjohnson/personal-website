export default function WidgetSkills() {
  return (
    <div className="rounded-lg border border-slate-200 p-5 odd:rotate-1 even:-rotate-1 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
      <div className="mb-3 font-aspekta font-[650]">Technical Skills</div>
      <ul className="space-y-3">
        <li className="flex items-center justify-between">
          <div className="mr-1 inline-flex grow truncate">
            <span className="mr-2 text-sky-500">—</span>{" "}
            <a className="truncate font-aspekta text-sm font-[650]">React</a>
          </div>
          <div
            className="relative h-1.5 w-20 shrink-0 bg-slate-200 before:absolute before:inset-0 before:w-[90%] before:bg-sky-500 dark:bg-slate-700"
            role="progressbar"
            aria-valuenow={90}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="mr-1 inline-flex grow truncate">
            <span className="mr-2 text-sky-500">—</span>{" "}
            <a className="truncate font-aspekta text-sm font-[650]">
              TypeScript
            </a>
          </div>
          <div
            className="relative h-1.5 w-20 shrink-0 bg-slate-200 before:absolute before:inset-0 before:w-[80%] before:bg-sky-500 dark:bg-slate-700"
            role="progressbar"
            aria-valuenow={80}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="mr-1 inline-flex grow truncate">
            <span className="mr-2 text-sky-500">—</span>{" "}
            <a className="truncate font-aspekta text-sm font-[650]">Next.js</a>
          </div>
          <div
            className="relative h-1.5 w-20 shrink-0 bg-slate-200 before:absolute before:inset-0 before:w-[60%] before:bg-sky-500 dark:bg-slate-700"
            role="progressbar"
            aria-valuenow={60}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="mr-1 inline-flex grow truncate">
            <span className="mr-2 text-sky-500">—</span>{" "}
            <a className="truncate font-aspekta text-sm font-[650]">
              Tailwind CSS
            </a>
          </div>
          <div
            className="relative h-1.5 w-20 shrink-0 bg-slate-200 before:absolute before:inset-0 before:w-[40%] before:bg-sky-500 dark:bg-slate-700"
            role="progressbar"
            aria-valuenow={40}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="mr-1 inline-flex grow truncate">
            <span className="mr-2 text-sky-500">—</span>{" "}
            <a className="truncate font-aspekta text-sm font-[650]">Laravel</a>
          </div>
          <div
            className="relative h-1.5 w-20 shrink-0 bg-slate-200 before:absolute before:inset-0 before:w-[25%] before:bg-sky-500 dark:bg-slate-700"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </li>
      </ul>
    </div>
  );
}
