import Image from "next/image";
import Talk01 from "@/public/images/popular-post-01.jpg";
import Talk02 from "@/public/images/popular-post-02.jpg";

export default function Talks() {
  return (
    <section>
      <h2 className="mb-5 font-aspekta text-xl font-[650]">Popular Talks</h2>

      {/* Cards */}
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        <a
          className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-tr from-slate-800 to-slate-700 shadow-xl transition-transform duration-700 ease-in-out odd:rotate-1 even:-rotate-1 hover:rotate-0 hover:duration-100"
          href="#0"
        >
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            src={Talk01}
            width={336}
            height={189}
            alt="Popular post 01"
          />
          <div className="relative flex h-full flex-col items-start justify-between p-5 before:mt-auto before:flex-1">
            <div className="flex flex-1 items-center font-aspekta text-lg font-[650] text-white">
              The Third Age of JavaScript
            </div>
            <div className="flex w-full flex-1 items-end justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41">
                <circle
                  className="fill-white"
                  cx="20"
                  cy="20"
                  r="20"
                  fillOpacity=".88"
                />
                <path
                  className="fill-sky-500"
                  d="m24.765 19.5-6.263-4.375a.626.626 0 0 0-1.002.5v8.75c0 .5.564.812 1.002.5l6.263-4.375a.65.65 0 0 0 0-1Z"
                />
              </svg>
            </div>
          </div>
        </a>
        <a
          className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-tr from-slate-800 to-slate-700 shadow-xl transition-transform duration-700 ease-in-out odd:rotate-1 even:-rotate-1 hover:rotate-0 hover:duration-100"
          href="#0"
        >
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            src={Talk02}
            width={336}
            height={189}
            alt="Popular post 02"
          />
          <div className="relative flex h-full flex-col items-start justify-between p-5 before:mt-auto before:flex-1">
            <div className="flex flex-1 items-center font-aspekta text-lg font-[650] text-white">
              Building in Public Strategy
            </div>
            <div className="flex w-full flex-1 items-end justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41">
                <circle
                  className="fill-white"
                  cx="20"
                  cy="20"
                  r="20"
                  fillOpacity=".88"
                />
                <path
                  className="fill-sky-500"
                  d="m24.765 19.5-6.263-4.375a.626.626 0 0 0-1.002.5v8.75c0 .5.564.812 1.002.5l6.263-4.375a.65.65 0 0 0 0-1Z"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
