"use client";

import { useEffect } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration.svg";
import FeaturesIcon01 from "@/public/images/features-icon-01.svg";
import FeaturesIcon02 from "@/public/images/features-icon-02.svg";
import FeaturesIcon03 from "@/public/images/features-icon-03.svg";
import FeaturesIcon04 from "@/public/images/features-icon-04.svg";

export default function Features() {
  return (
    <section className="relative">
      {/* Bg illustration */}
      <div
        className="pointer-events-none absolute left-1/2 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width={1440}
          height={440}
          alt="Illustration"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4">
              Many tools to express your creativity
            </h2>
            <div className="mx-auto max-w-2xl">
              <p className="text-xl text-slate-500">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              <div className="swiper-slide flex h-auto flex-col rounded bg-slate-800 p-6">
                <Image
                  className="mb-3"
                  src={FeaturesIcon01}
                  width={56}
                  height={56}
                  alt="Icon 01"
                />
                <div className="grow">
                  <div className="font-hkgrotesk text-xl font-bold">
                    Collaboration
                  </div>
                  <div className="mb-3 text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </div>
                </div>
                <div className="text-right">
                  <a
                    className="group inline-flex items-center font-medium text-indigo-500 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Learn More{" "}
                    <span className="ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
              <div className="swiper-slide flex h-auto flex-col rounded bg-slate-800 p-6">
                <Image
                  className="mb-3"
                  src={FeaturesIcon02}
                  width={56}
                  height={56}
                  alt="Icon 02"
                />
                <div className="grow">
                  <div className="font-hkgrotesk text-xl font-bold">
                    Experiences
                  </div>
                  <div className="mb-3 text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </div>
                </div>
                <div className="text-right">
                  <a
                    className="group inline-flex items-center font-medium text-indigo-500 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Learn More{" "}
                    <span className="ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
              <div className="swiper-slide flex h-auto flex-col rounded bg-slate-800 p-6">
                <Image
                  className="mb-3"
                  src={FeaturesIcon03}
                  width={56}
                  height={56}
                  alt="Icon 03"
                />
                <div className="grow">
                  <div className="font-hkgrotesk text-xl font-bold">
                    Animation
                  </div>
                  <div className="mb-3 text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </div>
                </div>
                <div className="text-right">
                  <a
                    className="group inline-flex items-center font-medium text-indigo-500 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Learn More{" "}
                    <span className="ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
              <div className="swiper-slide flex h-auto flex-col rounded bg-slate-800 p-6">
                <Image
                  className="mb-3"
                  src={FeaturesIcon04}
                  width={56}
                  height={56}
                  alt="Icon 04"
                />
                <div className="grow">
                  <div className="font-hkgrotesk text-xl font-bold">
                    Modeling
                  </div>
                  <div className="mb-3 text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </div>
                </div>
                <div className="text-right">
                  <a
                    className="group inline-flex items-center font-medium text-indigo-500 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Learn More{" "}
                    <span className="ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Arrows */}
          <div className="mt-12 flex justify-end space-x-4">
            <button className="carousel-prev group relative z-20 flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800 transition duration-150 ease-in-out hover:bg-slate-700">
              <span className="sr-only">Previous</span>
              <svg
                className="h-4 w-4 fill-slate-400 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next group relative z-20 flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800 transition duration-150 ease-in-out hover:bg-slate-700">
              <span className="sr-only">Next</span>
              <svg
                className="h-4 w-4 fill-slate-400 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
