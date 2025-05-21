"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const sections = ["who-am-i", "experience", "projects", "skills"];

  return (
    <section className="snap-start h-[calc(100svh-5rem)] px-7 max-w-3xl mx-auto pt-10 pb-10 lg:pt-20 flex flex-col gap-7">
      <h1 className="font-semibold text-6xl">{t("hi")}</h1>
      <h2 className="text-base md:text-xl xl:text-3xl text-neutral-400">{t("welcome")}</h2>
      <p className="max-w-prose text-justify lg:text-lg">{t("presentation")}</p>
      <div className="relative flex w-fit">
        {/* Metro line */}
        <div className="absolute bottom-1.5 ml-1 w-[75%] h-2 bg-amber-400 z-0" />

        {/* Stops (sections) */}
        {sections.map((section, index) => {
          return (
            <div key={index} className="mt-15 w-[90px]">
              <p className="transform -rotate-45 origin-top-left text-start">{t(section)}</p>
              <div className="rounded-full w-5 h-5 relative bg-white z-10 border-3 border-amber-400" />
            </div>
          );
        })}
      </div>
      <div className="flex-1 flex items-end justify-center">
        <span className="animate-bounce flex items-center flex-col text-neutral-400 text-sm lg:text-base">
          {t("scroll-down")}
          <ChevronDownIcon />
        </span>
      </div>
    </section>
  );
}
