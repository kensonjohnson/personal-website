import { useMDXComponent } from "next-contentlayer/hooks";

const mdxComponents = {};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose max-w-none text-slate-500 prose-headings:text-slate-800 prose-p:leading-normal prose-a:font-medium prose-a:text-sky-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-slate-800 prose-pre:bg-slate-800 dark:text-slate-400 dark:prose-headings:text-slate-200 dark:prose-strong:text-slate-100 dark:prose-code:text-slate-200">
      <Component components={{ ...mdxComponents }} />
    </div>
  );
}
