"use client";

import { useTranslation } from "react-i18next";
import LanguageSelector from "./language-selector";
import Button from "./button";
import { FileIcon } from "@radix-ui/react-icons";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="w-full min-h-20 flex shadow justify-between items-center px-10 dark:shadow-[rgba(255,255,255,0.2)]">
      <div className="flex md:flex-row flex-col md:items-end gap-1">
        <p className="text-2xl font-semibold hidden md:block">Adrián Casado</p>

        <p className="block md:hidden text-3xl font-bold">AC</p>
        <p className="text-xs mb-1  md:block">Web & Mobile Developer</p>
      </div>
      <div className="flex gap-2">
        <LanguageSelector />
        <Button
          onClick={() => {
            console.log("Button pressed");
          }}
          icon={<FileIcon className="w-5 h-5" />}
          text={t("download-cv")}
          mobileText="CV"
        />
      </div>
    </header>
  );
}
