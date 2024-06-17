import { useMDXComponent } from "next-contentlayer/hooks";

const mdxComponents = {};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose max-w-none text-slate-600 prose-headings:text-slate-800 prose-p:leading-normal prose-a:font-medium prose-a:text-sky-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-slate-800 prose-pre:bg-slate-800 dark:text-slate-100 dark:prose-headings:text-white dark:prose-strong:text-white dark:prose-code:text-white">
      <Component components={{ ...mdxComponents }} />
    </div>
  );
}
