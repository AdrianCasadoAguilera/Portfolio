"use client";

import { experiences } from "@/data/experiences";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t, i18n } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (!i18n.isInitialized) return null;

  return (
    <ul className="flex flex-col gap-4">
      {experiences.map((experience, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <li
            key={index}
            className="flex flex-col gap-1 xl:cursor-auto cursor-pointer"
            onClick={() => setExpandedIndex(isExpanded ? null : index)}
          >
            <div className="flex gap-2 items-center">
              <ChevronRight
                className={`w-[1rem] h-[1rem] ${isExpanded && "rotate-90"} transition xl:hidden`}
              />
              <div className="w-[0.6rem] h-[0.6rem] bg-foreground rounded-full hidden xl:block mr-[0.4rem]" />
              <div className="flex gap-1 items-end">
                <h3 className="font-bold text-xl lg:text-2xl">{experience.title}</h3>
                <h5 className="text-xs lg:text-sm mb-[0.2rem] lg:mb-[0.1rem]">
                  {experience.where}
                </h5>
              </div>
            </div>
            <p className="ml-6 text-neutral-400 text-sm">
              {experience.startDate} - {experience.finishDate}
            </p>
            <div
              className={`ml-6 flex-col flex gap-2 xl:max-h-fit transition-all duration-300 ease-in-out overflow-hidden ${
                isExpanded ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="flex gap-1 flex-wrap">
                {experience.stack.map((el, i) => {
                  return (
                    <div
                      key={i}
                      className="rounded-full bg-amber-400 text-white font-semibold text-xs gap-1 w-[5rem] py-0.5 flex items-center justify-center"
                    >
                      {el}
                    </div>
                  );
                })}
              </div>
              <p className="text-sm lg:text-base lg:text-justify">{t(experience.description)}</p>
              {experience.buttons && (
                <div className="flex gap-1 flex-wrap" onClick={(e) => e.stopPropagation()}>
                  {experience.buttons.map((button, i) => {
                    const Icon = button.icon;
                    return (
                      <a
                        key={i}
                        href={button.href}
                        target="_blank"
                        className="w-fit px-3 py-1 border flex gap-2 items-center justify-center border-[#dadada] hover:bg-gray-100 transition rounded-lg cursor-pointer"
                      >
                        <Icon className="h-5 w-5" />
                        <div className="lg:text-base text-sm">{t(button.title)}</div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
