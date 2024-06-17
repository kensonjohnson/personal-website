import Link from "next/link";
import Image from "next/image";
import PostDate from "@/components/post-date";

export default function PostItem({ ...props }) {
  return (
    <article className="border-b border-slate-100 py-5 dark:border-slate-800">
      <div className="flex items-start">
        <Image
          className="mr-6 h-16 w-16 rounded object-cover sm:h-[88px] sm:w-[88px]"
          src={props.image}
          width={88}
          height={88}
          alt={props.title}
        />
        <div>
          <div className="mb-1 text-xs uppercase text-slate-500">
            <span className="text-sky-500">—</span>{" "}
            <PostDate dateString={props.publishedAt} />
          </div>
          <h3 className="mb-1 font-aspekta text-lg font-[650]">
            <Link
              className="relative inline-flex duration-150 ease-out before:absolute before:inset-0 before:-z-10 before:origin-center before:translate-y-1/4 before:-rotate-2 before:scale-x-0 before:bg-sky-200 before:opacity-30 before:duration-150 before:ease-in-out hover:text-sky-500 hover:before:scale-100 dark:before:bg-sky-500"
              href={`/posts/${props.slug}`}
            >
              {props.title}
            </Link>
          </h3>
          <div className="flex">
            <div className="grow text-sm text-slate-500 dark:text-slate-400">
              {props.summary}
            </div>
            <Link
              className="group hidden w-12 shrink-0 items-center justify-center text-sky-500 lg:flex"
              href={`/posts/${props.slug}`}
              tabIndex={-1}
            >
              <svg
                className="fill-current duration-150 ease-in-out group-hover:translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
              >
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
