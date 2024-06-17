"use client";

import { useState } from "react";
import Image from "next/image";
import Illustration from "@/public/images/pricing-illustration.svg";

export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(true);

  return (
    <section className="relative">
      {/* Illustration */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          alt="Pricing Illustration"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-10 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4">
              Let's find the right plan for you business
            </h2>
            <p className="text-xl text-slate-500">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est.
            </p>
          </div>
          {/* Pricing tables */}
          <div className="grid md:grid-cols-6">
            {/* Pricing toggle */}
            <div className="flex flex-col justify-center bg-slate-800 p-4 md:col-span-3 md:px-6">
              <div className="flex items-center justify-center space-x-4 md:justify-start">
                <div className="min-w-[6rem] text-right text-sm font-medium text-slate-500 md:min-w-0">
                  Monthly
                </div>
                <div className="form-switch shrink-0">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="sr-only"
                    checked={annual}
                    onChange={() => setAnnual(!annual)}
                  />
                  <label className="bg-slate-900" htmlFor="toggle">
                    <span className="bg-slate-200" aria-hidden="true" />
                    <span className="sr-only">Pay annually</span>
                  </label>
                </div>
                <div className="min-w-[6rem] text-sm font-medium text-slate-500">
                  Yearly <span className="text-emerald-500">(-20%)</span>
                </div>
              </div>
            </div>
            {/* Starter price */}
            <div className="order-1 mt-6 flex flex-col justify-center border-slate-700 bg-slate-800 p-4 md:order-none md:mt-0 md:border-l md:px-6 md:text-center">
              <div className="font-hkgrotesk mb-0.5 text-lg font-bold text-indigo-500">
                Starter
              </div>
              <div>
                <span className="text-xl font-semibold">$</span>
                <span className="text-2xl font-semibold">
                  {annual ? "29" : "35"}
                </span>
                <span className="text-sm font-medium text-slate-500">/mo</span>
              </div>
            </div>
            {/* Agency price */}
            <div className="order-2 mt-6 flex flex-col justify-center border-slate-700 bg-slate-800 p-4 md:order-none md:mt-0 md:border-l md:px-6 md:text-center">
              <div className="font-hkgrotesk mb-0.5 text-lg font-bold text-indigo-500">
                Agency
              </div>
              <div>
                <span className="text-xl font-semibold">$</span>
                <span className="text-2xl font-semibold">
                  {annual ? "49" : "55"}
                </span>
                <span className="text-sm font-medium text-slate-500">/mo</span>
              </div>
            </div>
            {/* Team price */}
            <div className="order-3 mt-6 flex flex-col justify-center border-slate-700 bg-slate-800 p-4 md:order-none md:mt-0 md:border-l md:px-6 md:text-center">
              <div className="font-hkgrotesk mb-0.5 text-lg font-bold text-indigo-500">
                Team
              </div>
              <div>
                <span className="text-xl font-semibold">$</span>
                <span className="text-2xl font-semibold">
                  {annual ? "79" : "85"}
                </span>
                <span className="text-sm font-medium text-slate-500">/mo</span>
              </div>
            </div>
            {/* Usage label */}
            <div className="hidden flex-col justify-center bg-slate-700 bg-opacity-25 px-4 py-2 md:col-span-3 md:flex md:px-6">
              <span className="text-xs font-semibold uppercase text-slate-500">
                Usage
              </span>
            </div>
            <div className="order-1 flex flex-col justify-center border-slate-700 bg-slate-700 bg-opacity-25 px-4 py-2 md:order-none md:border-l md:px-6">
              <span className="text-xs font-semibold uppercase text-slate-500 md:hidden">
                Usage
              </span>
            </div>
            <div className="order-2 flex flex-col justify-center border-slate-700 bg-slate-700 bg-opacity-25 px-4 py-2 md:order-none md:border-l md:px-6">
              <span className="text-xs font-semibold uppercase text-slate-500 md:hidden">
                Usage
              </span>
            </div>
            <div className="order-3 flex flex-col justify-center border-slate-700 bg-slate-700 bg-opacity-25 px-4 py-2 md:order-none md:border-l md:px-6">
              <span className="text-xs font-semibold uppercase text-slate-500 md:hidden">
                Usage
              </span>
            </div>
            {/* Admins & Members */}
            <div className="hidden flex-col justify-center bg-slate-800 p-4 md:col-span-3 md:flex md:px-6">
              <div className="text-slate-200">Admins &amp; Members</div>
            </div>
            <div className="order-1 flex justify-between border-slate-700 bg-slate-800 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">
                Admins &amp; Members
              </div>
              <div className="text-center text-sm font-medium text-slate-200">
                4
              </div>
            </div>
            <div className="order-2 flex justify-between border-slate-700 bg-slate-800 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">
                Admins &amp; Members
              </div>
              <div className="text-center text-sm font-medium text-slate-200">
                12
              </div>
            </div>
            <div className="order-3 flex justify-between border-slate-700 bg-slate-800 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">
                Admins &amp; Members
              </div>
              <div className="text-center text-sm font-medium text-slate-200">
                Unlimited
              </div>
            </div>
            {/* File Storage */}
            <div className="hidden flex-col justify-center bg-slate-800 bg-opacity-70 p-4 md:col-span-3 md:flex md:px-6">
              <div className="text-slate-200">File Storage</div>
            </div>
            <div className="order-1 flex justify-between border-slate-700 bg-slate-800 bg-opacity-70 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">File Storage</div>
              <div className="text-center text-sm font-medium text-slate-200">
                10GB
              </div>
            </div>
            <div className="order-2 flex justify-between border-slate-700 bg-slate-800 bg-opacity-70 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">File Storage</div>
              <div className="text-center text-sm font-medium text-slate-200">
                50GB
              </div>
            </div>
            <div className="order-3 flex justify-between border-slate-700 bg-slate-800 bg-opacity-70 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">File Storage</div>
              <div className="text-center text-sm font-medium text-slate-200">
                Unlimited
              </div>
            </div>
            {/* Active Users */}
            <div className="hidden flex-col justify-center bg-slate-800 p-4 md:col-span-3 md:flex md:px-6">
              <div className="text-slate-200">Active Users</div>
            </div>
            <div className="order-1 flex justify-between border-slate-700 bg-slate-800 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">Active Users</div>
              <div className="text-center text-sm font-medium text-slate-200">
                500
              </div>
            </div>
            <div className="order-2 flex justify-between border-slate-700 bg-slate-800 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">Active Users</div>
              <div className="text-center text-sm font-medium text-slate-200">
                1500
              </div>
            </div>
            <div className="order-3 flex justify-between border-slate-700 bg-slate-800 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">Active Users</div>
              <div className="text-center text-sm font-medium text-slate-200">
                Unlimited
              </div>
            </div>
            {/* Features label */}
            <div className="hidden flex-col justify-center bg-slate-700 bg-opacity-25 px-4 py-2 md:col-span-3 md:flex md:px-6">
              <span className="text-xs font-semibold uppercase text-slate-500">
                Features
              </span>
            </div>
            <div className="order-1 flex flex-col justify-center border-slate-700 bg-slate-700 bg-opacity-25 px-4 py-2 md:order-none md:border-l md:px-6">
              <span className="text-xs font-semibold uppercase text-slate-500 md:hidden">
                Features
              </span>
            </div>
            <div className="order-2 flex flex-col justify-center border-slate-700 bg-slate-700 bg-opacity-25 px-4 py-2 md:order-none md:border-l md:px-6">
              <span className="text-xs font-semibold uppercase text-slate-500 md:hidden">
                Features
              </span>
            </div>
            <div className="order-3 flex flex-col justify-center border-slate-700 bg-slate-700 bg-opacity-25 px-4 py-2 md:order-none md:border-l md:px-6">
              <span className="text-xs font-semibold uppercase text-slate-500 md:hidden">
                Features
              </span>
            </div>
            {/* Unlimited Activities */}
            <div className="hidden flex-col justify-center bg-slate-800 p-4 md:col-span-3 md:flex md:px-6">
              <div className="text-slate-200">Unlimited Activities</div>
            </div>
            <div className="order-1 flex justify-between border-slate-700 bg-slate-800 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">
                Unlimited Activities
              </div>
              <div className="text-center text-sm font-medium text-slate-200">
                <svg
                  className="inline-flex fill-emerald-400"
                  width="12"
                  height="9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                    fill="#34D399"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            <div className="order-2 flex justify-between border-slate-700 bg-slate-800 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">
                Unlimited Activities
              </div>
              <div className="text-center text-sm font-medium text-slate-200">
                <svg
                  className="inline-flex fill-emerald-400"
                  width="12"
                  height="9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                    fill="#34D399"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            <div className="order-3 flex justify-between border-slate-700 bg-slate-800 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">
                Unlimited Activities
              </div>
              <div className="text-center text-sm font-medium text-slate-200">
                <svg
                  className="inline-flex fill-emerald-400"
                  width="12"
                  height="9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                    fill="#34D399"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            {/* Data Export */}
            <div className="hidden flex-col justify-center bg-slate-800 bg-opacity-70 p-4 md:col-span-3 md:flex md:px-6">
              <div className="text-slate-200">Data Export</div>
            </div>
            <div className="order-1 flex justify-between border-slate-700 bg-slate-800 bg-opacity-70 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">Data Export</div>
              <div className="text-center text-sm font-medium text-slate-200">
                <svg
                  className="inline-flex fill-slate-500"
                  width="14"
                  height="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 0v2H0V0z" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="order-2 flex justify-between border-slate-700 bg-slate-800 bg-opacity-70 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">Data Export</div>
              <div className="text-center text-sm font-medium text-slate-200">
                <svg
                  className="inline-flex fill-emerald-400"
                  width="12"
                  height="9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                    fill="#34D399"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            <div className="order-3 flex justify-between border-slate-700 bg-slate-800 bg-opacity-70 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">Data Export</div>
              <div className="text-center text-sm font-medium text-slate-200">
                <svg
                  className="inline-flex fill-emerald-400"
                  width="12"
                  height="9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                    fill="#34D399"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            {/* Adjust Group Sizes */}
            <div className="hidden flex-col justify-center bg-slate-800 p-4 md:col-span-3 md:flex md:px-6">
              <div className="text-slate-200">Adjust Group Sizes</div>
            </div>
            <div className="order-1 flex justify-between border-slate-700 bg-slate-800 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">Adjust Group Sizes</div>
              <div className="text-center text-sm font-medium text-slate-200">
                <svg
                  className="inline-flex fill-slate-500"
                  width="14"
                  height="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 0v2H0V0z" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="order-2 flex justify-between border-slate-700 bg-slate-800 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">Adjust Group Sizes</div>
              <div className="text-center text-sm font-medium text-slate-200">
                <svg
                  className="inline-flex fill-emerald-400"
                  width="12"
                  height="9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                    fill="#34D399"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            <div className="order-3 flex justify-between border-slate-700 bg-slate-800 p-4 md:order-none md:flex-col md:justify-center md:border-l md:px-6">
              <div className="text-slate-200 md:hidden">Adjust Group Sizes</div>
              <div className="text-center text-sm font-medium text-slate-200">
                <svg
                  className="inline-flex fill-emerald-400"
                  width="12"
                  height="9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                    fill="#34D399"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
            {/* CTA row */}
            <div className="hidden flex-col justify-center bg-slate-700 bg-opacity-25 px-4 py-2 md:col-span-3 md:flex md:px-6" />
            <div className="order-1 flex flex-col justify-center border-slate-700 bg-slate-700 bg-opacity-25 p-4 md:order-none md:border-l">
              <a
                className="btn-sm group w-full whitespace-nowrap bg-indigo-500 text-white shadow-sm hover:bg-indigo-600"
                href="#0"
              >
                Free Trial{" "}
                <span className="ml-1 hidden tracking-normal text-sky-300 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5 lg:block">
                  -&gt;
                </span>
              </a>
            </div>
            <div className="order-2 flex flex-col justify-center border-slate-700 bg-slate-700 bg-opacity-25 p-4 md:order-none md:border-l">
              <a
                className="btn-sm group w-full whitespace-nowrap bg-indigo-500 text-white shadow-sm hover:bg-indigo-600"
                href="#0"
              >
                Free Trial{" "}
                <span className="ml-1 hidden tracking-normal text-sky-300 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5 lg:block">
                  -&gt;
                </span>
              </a>
            </div>
            <div className="order-3 flex flex-col justify-center border-slate-700 bg-slate-700 bg-opacity-25 p-4 md:order-none md:border-l">
              <a
                className="btn-sm group w-full whitespace-nowrap bg-indigo-500 text-white shadow-sm hover:bg-indigo-600"
                href="#0"
              >
                Free Trial{" "}
                <span className="ml-1 hidden tracking-normal text-sky-300 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5 lg:block">
                  -&gt;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
