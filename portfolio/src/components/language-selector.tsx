"use client";
import i18n from "@/lib/i18n";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import React from "react";

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<string | null>(null);
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    setCurrentLang(i18n.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  const languages: Record<"es" | "en" | "ca", string> = {
    es: "Español",
    en: "English",
    ca: "Català",
  };

  if (!currentLang) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => {
          setOpen(!isOpen);
        }}
        className="w-fit px-3 py-1 min-h-9 border flex gap-2 items-center justify-center border-[#dadada] hover:bg-gray-100 transition rounded-lg cursor-pointer"
      >
        <div className="rounded-full w-5 h-5 relative overflow-hidden border border-[#B2B2B2]">
          <Image alt={currentLang} src={`/${currentLang}.png`} fill className="object-cover" />
        </div>
        <p className="hidden md:block">{languages[currentLang as keyof typeof languages]}</p>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-32 bg-background border border-[#dadada] rounded-lg shadow">
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              onClick={() => {
                i18n.changeLanguage(code);
                setCurrentLang(code);
                setOpen(false);
              }}
              className="w-full px-3 py-2 flex items-center gap-2 hover:bg-gray-100 transition text-left"
            >
              <div className="rounded-full w-5 h-5 relative overflow-hidden border border-[#B2B2B2]">
                <Image alt={code} src={`/${code}.png`} fill className="object-cover" />
              </div>
              <p>{name}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
