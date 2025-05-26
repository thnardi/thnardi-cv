"use client";

import { FC, useEffect, useRef, useState } from "react";
import { LanguageSelectorProps } from "../page.d";

import { LanguageSlug, setLanguageLocalStorage } from "languages-module";

const LanguageSelector: FC<LanguageSelectorProps> = ({
  setLanguageSlug,
  languageSlug,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log("handleClickOutside", ref, event);
      if (
        event.target instanceof HTMLElement &&
        event.target.id.includes("language-selector")
      ) {
      } else {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const languages = [
    {
      language: "Português",
      title: "Português",
      slug: "pt_br",
      flag: "🇧🇷",
    },
    {
      language: "Español",
      title: "Español",
      slug: "es_es",
      flag: "🇪🇸",
    },
    {
      language: "English",
      title: "English",
      slug: "en_us",
      flag: "🇺🇸",
    },
  ];

  const languageSelected = languages.find((lang) => lang.slug === languageSlug);

  return (
    <div className="w-full py-6 pb-8">
      <div className="relative inline-block">
        <button
          className="px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
          onClick={toggleDropdown}
          id="language-selector"
        >
          {languageSelected?.language} {languageSelected?.flag}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {languages.map((lang) => {
                if (lang.slug === languageSlug) {
                  return null;
                }
                return (
                  <li key={lang.slug}>
                    <button
                      type="button"
                      id={`language-selector-item-${lang.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                      onClick={() => {
                        setLanguageLocalStorage(lang.slug as LanguageSlug);
                        closeDropdown();
                        setLanguageSlug(lang.slug as LanguageSlug);
                      }}
                    >
                      {lang.language} {lang.flag}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
