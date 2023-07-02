import { ReactElement } from "react";

interface ITextProps {
  href: string;
  children: ReactElement | string;
}
export default function Text({ href, children }: ITextProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="block leading-normal text-4xl font-extrabold text-gray-500 dark:text-gray-400 md:text-5xl md:font-bold md:leading-[4rem] lg:text-6xl lg:font-bold lg:leading-[4.5rem]"
    >
      {children}
    </a>
  );
}
