"use client";

import { useState } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration-02.svg";
import FeaturesImage from "@/public/images/features-image.png";

export default function Features02() {
  const [category, setCategory] = useState<string>("1");

  return (
    <section className="relative border-t border-slate-800">
      {/* Bg gradient: top */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 -z-10 h-[25rem] bg-gradient-to-b from-slate-800 to-transparent opacity-25"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 mt-40 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width={1440}
          height={453}
          alt="Features 02 Illustration"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="h2 font-hkgrotesk">
              Features to help you create your best designs
            </h2>
          </div>
          {/* Box */}
          <div className="overflow-hidden rounded bg-slate-800 bg-opacity-60">
            <div className="flex flex-col items-end md:flex-row md:items-start md:justify-between lg:space-x-20">
              <div className="p-6 md:min-w-[28rem] lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="-m-1.5 flex flex-wrap">
                    <button
                      className={`btn-sm m-1.5 rounded-full px-3 py-1 shadow-sm ${
                        category === "1"
                          ? "bg-indigo-500 text-white"
                          : "border-slate-600 bg-slate-700 text-slate-300 hover:bg-slate-600"
                      }`}
                      onClick={() => setCategory("1")}
                    >
                      Everyone
                    </button>
                    <button
                      className={`btn-sm m-1.5 rounded-full px-3 py-1 shadow-sm ${
                        category === "2"
                          ? "bg-indigo-500 text-white"
                          : "border-slate-600 bg-slate-700 text-slate-300 hover:bg-slate-600"
                      }`}
                      onClick={() => setCategory("2")}
                    >
                      Freelancers
                    </button>
                    <button
                      className={`btn-sm m-1.5 rounded-full px-3 py-1 shadow-sm ${
                        category === "3"
                          ? "bg-indigo-500 text-white"
                          : "border-slate-600 bg-slate-700 text-slate-300 hover:bg-slate-600"
                      }`}
                      onClick={() => setCategory("3")}
                    >
                      Organizations
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className={`${category !== "1" && "hidden"}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">
                      Kickstart your project with these tools
                    </h3>
                    <div className="text-lg text-slate-500">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur, excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt laborum.
                    </div>
                  </div>
                  <div className={`${category !== "2" && "hidden"}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">
                      Tech tools to kickstart freelance life
                    </h3>
                    <div className="text-lg text-slate-500">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur, excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt laborum.
                    </div>
                  </div>
                  <div className={`${category !== "3" && "hidden"}`}>
                    <h3 className="h3 font-hkgrotesk mb-2">
                      Share your plan and clarify project risk
                    </h3>
                    <div className="text-lg text-slate-500">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur, excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt laborum.
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={FeaturesImage}
                className="md:max-w-none"
                width={480}
                height={414}
                alt="Feature"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
