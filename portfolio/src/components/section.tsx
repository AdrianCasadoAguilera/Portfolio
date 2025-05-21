"use client";
import { useTranslation } from "react-i18next";

type SectionProps = {
  children: React.ReactNode;
  title: string;
};

export default function Section({ children, title }: SectionProps) {
  const { t } = useTranslation();

  return (
    <section className="relative snap-start h-[calc(100svh-5rem)] px-7 pt-10 pb-10 lg:pt-20 flex flex-col gap-7">
      <div className="absolute w-4 lg:w-6 h-3 lg:h-5 bg-amber-400" />
      <div className="ml-6 lg:ml-9">
        <h3 className="-translate-y-2 lg:-translate-y-3 font-bold text-xl lg:text-4xl">
          {t(title)}
        </h3>
        <div className="ml-1 lg:ml-2">{children}</div>
      </div>
    </section>
  );
}
