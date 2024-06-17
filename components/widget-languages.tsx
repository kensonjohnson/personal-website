export default function WidgetLanguages() {
  return (
    <div className="rounded-lg border border-slate-200 p-5 odd:rotate-1 even:-rotate-1 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
      <div className="mb-3 font-aspekta font-[650]">Languages</div>
      <ul className="space-y-3">
        <li className="flex items-center justify-between">
          <div className="mr-1.5 inline-flex grow truncate">
            <span className="mr-1.5 text-base">🇬🇧</span>{" "}
            <span className="truncate font-aspekta text-sm font-[650]">
              English
            </span>
          </div>
          <div
            className="relative h-5 w-5 shrink-0 rounded-full bg-[conic-gradient(theme(colors.sky.500)_100%,0,theme(colors.slate.200)_0)] after:absolute after:inset-0 after:m-auto after:h-3 after:w-3 after:rounded-full after:bg-white dark:bg-[conic-gradient(theme(colors.sky.500)_100%,0,theme(colors.slate.700)_0)] dark:after:bg-slate-800"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="mr-1.5 inline-flex grow truncate">
            <span className="mr-1.5 text-base">🇮🇹</span>{" "}
            <span className="truncate font-aspekta text-sm font-[650]">
              Italian
            </span>
          </div>
          <div
            className="relative h-5 w-5 shrink-0 rounded-full bg-[conic-gradient(theme(colors.sky.500)_100%,0,theme(colors.slate.200)_0)] after:absolute after:inset-0 after:m-auto after:h-3 after:w-3 after:rounded-full after:bg-white dark:bg-[conic-gradient(theme(colors.sky.500)_100%,0,theme(colors.slate.700)_0)] dark:after:bg-slate-800"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="mr-1.5 inline-flex grow truncate">
            <span className="mr-1.5 text-base">🇪🇸</span>{" "}
            <span className="truncate font-aspekta text-sm font-[650]">
              Spanish
            </span>
          </div>
          <div
            className="relative h-5 w-5 shrink-0 rounded-full bg-[conic-gradient(theme(colors.sky.500)_50%,0,theme(colors.slate.200)_0)] after:absolute after:inset-0 after:m-auto after:h-3 after:w-3 after:rounded-full after:bg-white dark:bg-[conic-gradient(theme(colors.sky.500)_50%,0,theme(colors.slate.700)_0)] dark:after:bg-slate-800"
            role="progressbar"
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </li>
      </ul>
    </div>
  );
}
