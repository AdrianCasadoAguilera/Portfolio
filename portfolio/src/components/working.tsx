"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

export default function Working() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-9xl">:(</h3>
      <h5 className="text-xl lg:text-3xl font-semibold text-neutral-400">{t("working-title")}</h5>
      <p className="lg:text-lg">{t("working-text")}</p>
      <div className="flex gap-3">
        <a aria-label="GitHub" target="_blank" href="https://github.com/AdrianCasadoAguilera">
          <GitHubLogoIcon className="w-12 h-12 hover:text-[#C06EFF] transition cursor-pointer" />
        </a>
        <a
          aria-label="LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/in/adri%C3%A1n-casado-aguilera-133a38238/"
        >
          <LinkedInLogoIcon className="w-12 h-12 hover:text-[#0077B5] transition cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
