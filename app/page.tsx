"use client";

// import { useState } from "react";

import About from "./components/abaut";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Graduation from "./components/graduation";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { languageObject } from "./page.language";
import { getLanguageLocalStorage, LanguageSlug } from "languages-module";
import { useState } from "react";

export default function Home() {
  const language = languageObject.getCurrentLanguage();

  const queryParams = new URLSearchParams(window.location.search);
  const l = queryParams.get("l");
  const paramLang =
    l === "en" ? "en_us" : l === "pt" ? "pt_br" : l === "es" ? "es_es" : false;

  const [languageSlug, setLanguageSlug] = useState<LanguageSlug>(
    paramLang || getLanguageLocalStorage() || "pt_br"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header
          language={language}
          languageSlug={languageSlug}
          setLanguageSlug={setLanguageSlug}
        />
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-1 space-y-6">
            <About language={language} />
            <Skills language={language} />
            <Contact language={language} languageSlug={languageSlug} />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <Experience language={language} />
            <Graduation language={language} />
            <Projects language={language} />
          </div>
        </div>
      </div>

      <div className="w-full h-16 bg-white shadow-lg">
        <div className="flex items-center justify-center p-5">
          <p className="text-sm text-gray-500">{language.developedBy}</p>
        </div>
      </div>
    </div>
  );
}
