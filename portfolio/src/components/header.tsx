"use client";

import { useTranslation } from "react-i18next";
import LanguageSelector from "./language-selector";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="w-full h-20 flex shadow justify-between items-center">
      <div>
        <p>Adrián Casado</p>
      </div>
      <div className="flex gap-2">
        <LanguageSelector />
        <button>{t("download-cv")}</button>
      </div>
    </header>
  );
}
