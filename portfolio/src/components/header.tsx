"use client";

import { useTranslation } from "react-i18next";
import LanguageSelector from "./language-selector";
import Button from "./button";
import { FileIcon } from "@radix-ui/react-icons";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed w-full h-20 flex shadow justify-between items-center px-10">
      <div className="flex items-end gap-1">
        <p className="text-2xl font-semibold">Adrián Casado</p>
        <p className="text-xs mb-1">Web & Mobile Developer</p>
      </div>
      <div className="flex gap-2">
        <LanguageSelector />
        <Button
          onClick={() => {
            console.log("Button pressed");
          }}
          icon={<FileIcon className="w-5 h-5" />}
          text={t("download-cv")}
        />
      </div>
    </header>
  );
}
