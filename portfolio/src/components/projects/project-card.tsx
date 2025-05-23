"use client";

import { Code, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

type ProjectCardProps = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  prodUrl?: string;
  repoUrl?: string;
  dev?: boolean; // Whether it is under development or not
};

export default function ProjectCard({
  title,
  type,
  description,
  stack,
  prodUrl,
  repoUrl,
  dev,
}: ProjectCardProps) {
  const { t } = useTranslation();
  return (
    <div className="relative w-60 sm:w-64 h-80 sm:h-[19rem] flex flex-col rounded-lg border-neutral-300 border p-3.5 gap-2">
      <div>
        <h3 className="font-semibold text-xl">{title}</h3>
        <h5 className="text-neutral-400 text-sm">{type}</h5>
      </div>

      <div className="flex flex-wrap gap-2">
        {stack.map((element, index) => {
          return (
            <div
              key={index}
              className="rounded-full bg-amber-400 text-white font-semibold text-xs gap-1 w-16 py-0.5 flex items-center justify-center"
            >
              {element}
            </div>
          );
        })}
      </div>
      <p className="text-sm">{t(description)}</p>
      <div className="flex gap-3 mt-auto">
        {prodUrl && (
          <a target="_blank" href={prodUrl}>
            <Globe className="hover:text-blue-400 transition" />
          </a>
        )}
        {repoUrl && (
          <a target="_blank" href={repoUrl}>
            <Code className="hover:text-orange-400 transition" />
          </a>
        )}
      </div>
      {dev && (
        <div className="absolute -top-1 right-2 w-7 h-10 rounded-t bg-blue-400 flex  justify-center overflow-hidden">
          <div className="relative bookmark"></div>
          <p className="font-bold text-white text-xs mt-1">dev</p>
        </div>
      )}
    </div>
  );
}
