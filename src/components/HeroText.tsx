import { HNC_URL } from "@/utils/constants";

export const HeroText = () => {
  return (
    <h1 className="select-none leading-normal mt-16 mb-4 text-4xl font-extrabold text-gray-500 dark:text-gray-400 text-[2rem] md:text-5xl md:font-bold md:leading-[4rem] lg:text-6xl lg:font-bold lg:leading-[4.5rem]">
      <p className="lg:inline">Hi 👋🏻,&nbsp;</p>
      I’m{" "}
      <span className="text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors ease-linear">
        Melih Çalışkan
      </span>
      , a{" "}
      <span className="text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors ease-linear">
        Software Developer
      </span>{" "}
      working at{" "}
      <a
        href={HNC_URL}
        target="_blank"
        className="text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors ease-linear underline underline-offset-8 decoration-dotted"
      >
        Hack and Craft
      </a>
    </h1>
  );
};
