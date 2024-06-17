import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";

export default function WidgetNewsletter() {
  return (
    <div className="rounded-lg border border-slate-200 p-5 odd:rotate-1 even:-rotate-1 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
      <div className="mb-1 text-center">
        <div className="-ml-0.5 inline-flex -space-x-3">
          <Image
            className="box-content rounded-full border-2 border-white dark:border-slate-800"
            src={Avatar01}
            width={24}
            height={24}
            alt="Avatar 01"
          />
          <Image
            className="box-content rounded-full border-2 border-white dark:border-slate-800"
            src={Avatar02}
            width={24}
            height={24}
            alt="Avatar 02"
          />
          <Image
            className="box-content rounded-full border-2 border-white dark:border-slate-800"
            src={Avatar03}
            width={24}
            height={24}
            alt="Avatar 03"
          />
          <Image
            className="box-content rounded-full border-2 border-white dark:border-slate-800"
            src={Avatar04}
            width={24}
            height={24}
            alt="Avatar 04"
          />
          <Image
            className="box-content rounded-full border-2 border-white dark:border-slate-800"
            src={Avatar05}
            width={24}
            height={24}
            alt="Avatar 05"
          />
        </div>
      </div>
      <div className="mb-8 text-center">
        <div className="mb-1 font-aspekta font-[650]">
          Never miss an update!
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Subscribe and join 100K+ developers.
        </p>
      </div>
      <form>
        <div className="mb-2">
          <label className="sr-only" htmlFor="newsletter">
            Your email…
          </label>
          <input
            id="newsletter"
            type="email"
            className="form-input w-full py-1"
            placeholder="Your email…"
          />
        </div>
        <button
          className="btn-sm w-full bg-sky-500 text-slate-100 hover:bg-sky-600"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
