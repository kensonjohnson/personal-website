import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default async function WidgetPosts() {
  return (
    <div className="dark:bg-gradient-href-t dark:href-slate-800/30 rounded-lg border border-slate-200 p-5 odd:rotate-1 even:-rotate-1 dark:border-slate-800 dark:from-slate-800">
      <div className="mb-3 font-aspekta font-[650]">Popular Posts</div>
      <ul className="space-y-3">
        {allPosts.slice(0, 5).map((post, postIndex) => (
          <li key={postIndex} className="inline-flex">
            <span className="mr-2 text-sky-500">—</span>{" "}
            <Link
              key={postIndex}
              className="relative inline-flex font-aspekta text-sm font-[650] duration-150 ease-out before:absolute before:inset-0 before:-z-10 before:origin-center before:translate-y-1/4 before:-rotate-2 before:scale-x-0 before:bg-sky-200 before:opacity-30 before:duration-150 before:ease-in-out hover:text-sky-500 hover:before:scale-100 dark:before:bg-sky-500"
              href={`/posts/${post.slug}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
