import ProjectCard from "../project-card";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";

import Icon01 from "@/public/images/project-icon-01.svg";
import Icon02 from "@/public/images/project-icon-02.svg";
import Icon03 from "@/public/images/project-icon-03.svg";
import Icon04 from "@/public/images/project-icon-04.svg";
import Icon05 from "@/public/images/project-icon-05.svg";
import Icon06 from "@/public/images/project-icon-06.svg";
import Icon07 from "@/public/images/project-icon-07.svg";
import Icon08 from "@/public/images/project-icon-08.svg";

export const metadata = {
  title: "Projects - DevSpace",
  description: "Page description",
};

export default function Projects() {
  const items01 = [
    {
      id: 0,
      icon: Icon01,
      slug: "#0",
      title: "Container Tinkering",
      excerpt: "Solutions for running containers locally and remotely.",
      openSource: true,
    },
    {
      id: 0,
      icon: Icon02,
      slug: "#0",
      title: "Engine Prototypes",
      excerpt: "Solutions for running containers locally and remotely.",
      openSource: false,
    },
  ];

  const items02 = [
    {
      id: 0,
      icon: Icon03,
      slug: "#0",
      title: "PixelOkay",
      excerpt: "Code assets and services for people, with people.",
      openSource: false,
    },
    {
      id: 1,
      icon: Icon04,
      slug: "#0",
      title: "Storybook",
      excerpt: "Storybook helps you develop, test, and document UIs.",
      openSource: false,
    },
    {
      id: 2,
      icon: Icon05,
      slug: "#0",
      title: "Knowledge AI",
      excerpt:
        "Instantly answers all questions based on your internal knowledge bases.",
      openSource: false,
    },
    {
      id: 3,
      icon: Icon06,
      slug: "#0",
      title: "Security Frame",
      excerpt: "Automated security compliance for your business.",
      openSource: false,
    },
    {
      id: 4,
      icon: Icon07,
      slug: "#0",
      title: "KanbanOK",
      excerpt: "The most powerful kanban board ever invented.",
      openSource: false,
    },
    {
      id: 5,
      icon: Icon08,
      slug: "#0",
      title: "T Analytics",
      excerpt: "Make your Twitter analytics pretty and easy to share.",
      openSource: false,
    },
  ];

  return (
    <div className="grow space-y-8 pb-16 pt-12 md:flex md:space-x-8 md:space-y-0 md:pb-20 md:pt-16">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 mb-12 font-aspekta">Nice stuff I've built</h1>
            {/* Page content */}
            <div className="space-y-10">
              {/* Side Hustles cards */}
              <section>
                <h2 className="mb-6 font-aspekta text-xl font-[650]">
                  Side Hustles
                </h2>
                {/* Cards */}
                <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {items01.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
              {/* Client Projects cards */}
              <section>
                <h2 className="mb-6 font-aspekta text-xl font-[650]">
                  Client Projects
                </h2>
                {/* Cards */}
                <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {items02.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
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
