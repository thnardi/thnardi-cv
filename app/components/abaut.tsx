"use client";

import { User } from "lucide-react";
import { motion } from "framer-motion";

import React, { FC } from "react";
import { DefaultProps } from "../page.d";

const About: FC<DefaultProps> = ({ language }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <User className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">
            {language.aboutMe}
          </h3>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          {language.aboutMeDescriptionP1}
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          {language.aboutMeDescriptionP2}
        </p>

        <p className="text-gray-600 leading-relaxed">
          {language.aboutMeDescriptionP3}
        </p>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">{language.experience}</span>
            <span className="font-medium">10 {language.years}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">
              {language.reactAndReactNative}
            </span>
            <span className="font-medium">+4 {language.years}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{language.languageEn}</span>
            <span className="font-medium">{language.languageIntermediary}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{language.languageEs}</span>
            <span className="font-medium">{language.languageBasic}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
