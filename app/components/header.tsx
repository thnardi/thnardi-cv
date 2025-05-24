"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { DefaultProps } from "../page.d";
import LanguageSelector from "./language-selector";

const Header: FC<DefaultProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/profile-pic.jpeg"
            alt="Thiago"
            width={150}
            height={150}
            className="rounded-full"
          />

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Thiago A. Nardi
            </h1>
            <h2 className="text-xl text-gray-600 mt-2">
              Front-End Web & Mobile Developer
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>Toledo, PR - Brasil</span>
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Possui +5 anos de experiência em desenvolvimento de aplicações web
              e mobile com foco em React e React-Native. Atualmente faz parte do
              time de desenvolvimento do app MTCIDADÃO, onde atua como
              desenvolvedor React Pleno, tanto no front-end desktop quanto no
              mobile.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-4">
          <LanguageSelector
          // languageSlug={languageSlug}
          // setLanguageSlug={setLanguageSlug}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
