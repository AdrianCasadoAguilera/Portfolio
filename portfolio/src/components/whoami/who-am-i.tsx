"use client";

import { useTranslation } from "react-i18next";
import ImageScroller from "./image-scroller";

export default function WhoAmI() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 lg:text-base text-sm text-justify">
      <p>{t("whoami-text-1")}</p>
      <p>{t("whoami-text-2")}</p>
      <ImageScroller />
    </div>
  );
}
