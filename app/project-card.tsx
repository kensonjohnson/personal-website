import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Item {
  id: number;
  icon: StaticImageData;
  slug: string;
  title: string;
  excerpt: string;
  openSource?: boolean;
}

interface ItemProps {
  item: Item;
}

export default function ProjectCard({ item }: ItemProps) {
  return (
    <Link
      className="transition-color group rounded-lg border border-slate-200 p-5 ease-in-out hover:border-slate-300 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 dark:hover:border-slate-700"
      href={item.slug}
    >
      <div className="flex h-full flex-col">
        <div className="grow">
          <div className="flex items-center justify-between space-x-2">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700">
              <Image src={item.icon} width={18} alt={item.title} />
            </div>
            {item.openSource && (
              <div className="inline-flex h-5 items-center rounded-full bg-green-100 px-2 text-center text-xs font-medium text-green-600">
                Open-Source
              </div>
            )}
          </div>
          <div className="mb-1 font-aspekta text-lg font-[650]">
            {item.title}
          </div>
          <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
            {item.excerpt}
          </p>
        </div>
        <div className="flex justify-end text-sky-500">
          <svg
            className="-rotate-45 fill-current transition-transform ease-out group-hover:rotate-0"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="12"
          >
            <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
