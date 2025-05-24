"use client";

// import { useState } from "react";

import About from "./components/abaut";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  // const [languageSlug, setLanguageSlug] = useState<"pt_br" | "en">("pt_br");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header />
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-1 space-y-6">
            <About />
            <Skills />
            <Contact />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <Experience />
            <Projects />
          </div>
        </div>
      </div>

      <div className="w-full h-16 bg-white shadow-lg">
        <div className="flex items-center justify-center p-5">
          <p className="text-sm text-gray-500">
            Desenvolvido por Thiago Nardi.
          </p>
        </div>
      </div>
    </div>
  );
}
