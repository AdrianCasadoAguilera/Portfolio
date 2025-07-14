"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { HeartIcon, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="h-52 snap-end bg-black text-white">
      <div className="flex flex-col max-w-3xl mx-auto h-full w-full items-center justify-center md:gap-10 gap-4">
        <div className="flex md:flex-row flex-col items-center md:items-start justify-between w-full md:gap-10 gap-2">
          <div className="flex-1 flex flex-col md:items-start items-center">
            <p className="text-2xl font-semibold ">Adrián Casado</p>
            <p className="text-xs md:text-sm">Web & Mobile Developer</p>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-1 md:items-start items-center">
              <p className="font-semibold">GET IN TOUCH</p>
              <div className="flex gap-2">
                <a
                  aria-label="GitHub"
                  target="_blank"
                  href="https://github.com/AdrianCasadoAguilera"
                >
                  <GitHubLogoIcon className="w-6 h-6 hover:text-[#C06EFF] transition cursor-pointer" />
                </a>
                <a
                  aria-label="LinkedIn"
                  target="_blank"
                  href="https://www.linkedin.com/in/adri%C3%A1n-casado-aguilera-133a38238/"
                >
                  <LinkedInLogoIcon className="w-6 h-6 hover:text-[#0077B5] transition cursor-pointer" />
                </a>
                <a aria-label="LinkedIn" target="_blank" href="mailto:acasadoag2@gmail.com">
                  <Mail className="w-6 h-6 hover:text-[#197c6f] transition cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center md:items-start justify-between w-full md:gap-10 gap-2">
          <p className="text-xs md:text-sm flex-1">
            © 2025 Adrián Casado Aguilera. {t("copyright")}
          </p>
          <div className="flex-1">
            <div className="flex flex-row gap-1 text-xs md:text-sm items-center">
              <p className="text-nowrap">{t("made-with-1")}</p>
              <HeartIcon className="text-white hover:text-red-600 transition" />
              <p className="text-nowrap">{t("made-with-2")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
