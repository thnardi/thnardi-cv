"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { LanguageSelectorProps } from "../page.d";
import LanguageSelector from "./language-selector";

const Header: FC<LanguageSelectorProps> = ({
  language,
  languageSlug,
  setLanguageSlug,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <div className="absolute top-0 right-0 pr-4">
          <LanguageSelector
            language={language}
            languageSlug={languageSlug}
            setLanguageSlug={setLanguageSlug}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/profile-pic.jpeg"
            alt="Thiago"
            width={150}
            height={150}
            className="rounded-full mt-6 sm:mt-0"
          />

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {language.title}
            </h1>
            <h2 className="text-xl text-gray-600 mt-2">
              {language.description}
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>{language.location}</span>
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl">
              {language.experienceDescription}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
