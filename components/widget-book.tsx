import Image from "next/image";
import Book from "@/public/images/book.png";

export default function WidgetBook() {
  return (
    <div className="rounded-lg border border-slate-200 p-5 odd:rotate-1 even:-rotate-1 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
      <div className="mb-3 text-center font-aspekta font-[650]">
        Free E-Book
      </div>
      <div className="text-center">
        <Image
          className="inline-flex rotate-3 rounded-lg shadow-lg"
          src={Book}
          width={148}
          height={190}
          alt="Book"
        />
      </div>
    </div>
  );
}
