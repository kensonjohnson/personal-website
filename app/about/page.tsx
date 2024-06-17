import Image from "next/image";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";
import AboutImg from "@/public/images/about.png";
import Experience from "@/components/experience";

export const metadata = {
  title: "About - DevSpace",
  description: "Page description",
};

export default function About() {
  return (
    <div className="grow space-y-8 pb-16 pt-12 md:flex md:space-x-8 md:space-y-0 md:pb-20 md:pt-16">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 mb-5 font-aspekta">
              Hi. I'm Mark{" "}
              <span className="relative inline-flex text-sky-500 before:absolute before:inset-0 before:-z-10 before:translate-y-1/4 before:-rotate-2 before:bg-sky-200 before:opacity-30 dark:before:bg-sky-500">
                @mrk27
              </span>{" "}
              Ivings 🤟
            </h1>
            <Image
              className="w-full"
              src={AboutImg}
              width={692}
              height={390}
              alt="About"
            />
            {/* Page content */}
            <div className="space-y-8 text-slate-500 dark:text-slate-400">
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Short Bio
                </h2>
                <p>
                  I'm a software engineer with more than 10 years of experience
                  in a variety of domains. For the past few years, I've focused
                  on highload server-side projects, distributed systems, and
                  platform development - tinkering with infrastructure, all
                  things containers and Cloud Native.
                </p>
                <p>
                  While there isn't a Wikipedia page about me (sorry folks!), a
                  media bio is available below.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Career
                </h2>
                <p>
                  In my role as a Senior Software Engineer for Google Chrome, I
                  am responsible for developing and maintaining the{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="#0"
                  >
                    Chrome Web Browser
                  </a>
                  .
                </p>
                <p>
                  My work involves developing and testing new features,
                  optimizing performance and security, and ensuring the browser
                  works for users around the world. I also work closely with
                  other Google teams ensure Chrome is well-integrated with other{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="#0"
                  >
                    Google
                  </a>{" "}
                  products and services.
                </p>
                <p>
                  As CTO of AppForYou,{" "}
                  <strong className="font-medium text-slate-800 dark:text-slate-100">
                    I am responsible for leading
                  </strong>{" "}
                  the technical teamand developing the company's technology
                  strategy. I work closely with the engineering team to ensure
                  that the products and services we provide are secure.
                </p>
              </div>

              <Experience />

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Let's Connect
                </h2>
                <p>
                  I'm excited to connect with others via{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="#0"
                  >
                    email
                  </a>{" "}
                  and{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="#0"
                  >
                    Twitter
                  </a>{" "}
                  to chat about projects and ideas. Currently, I'm not taking on
                  freelance projects, but I am open to hearing about potential
                  opportunities, discussing them with you and then potentially
                  collaborating if it's a good fit.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="shrink-0 md:w-[240px] lg:w-[300px]">
        <div className="space-y-6">
          <WidgetNewsletter />
          <WidgetSponsor />
        </div>
      </aside>
    </div>
  );
}
