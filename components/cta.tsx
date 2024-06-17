import Image from "next/image";
import Link from "next/link";
import Illustration from "@/public/images/cta-illustration.svg";

export default function Cta() {
  return (
    <section className="relative border-t border-slate-800">
      {/* Bg gradient: top */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 -z-10 h-[25rem] bg-gradient-to-b from-slate-800 to-transparent opacity-25"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-8 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          alt="Features 01 Illustration"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div
            className="mx-auto max-w-3xl pb-12 text-center md:pb-20"
            data-aos="fade-up"
          >
            <h2 className="h2 font-hkgrotesk">
              Join the most flexible user-centric platform for teams
            </h2>
          </div>
          {/* Buttons */}
          <div className="text-center">
            <div className="mx-auto max-w-xs space-y-4 sm:inline-flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0">
              <div data-aos="fade-up" data-aos-delay="100">
                <Link
                  className="btn group w-full bg-indigo-500 text-white shadow-sm hover:bg-indigo-600"
                  href="/signup"
                >
                  Get Started Free{" "}
                  <span className="ml-1 tracking-normal text-sky-300 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <a
                  className="btn w-full border-slate-600 bg-slate-700 text-slate-300 shadow-sm hover:bg-slate-600"
                  href="#0"
                >
                  Read Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
