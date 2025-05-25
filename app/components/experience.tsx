"use client";

import React from "react";
import { motion } from "framer-motion";
import { DefaultProps } from "../page.d";

const Experience: React.FC<DefaultProps> = ({ language }) => {
  const experiences = [
    {
      title: language.developerReactPleno,
      company: language.rw3Tecnologia,
      period: "2024 - 2025",
      description: [language.developerReactPlenoDescriptionP1],
    },
    {
      title: language.developerReactPleno,
      company: language.mti,
      period: "2022 - 2024",
      description: [
        language.developerReactPlenoDescriptionMTIP1,
        language.developerReactPlenoDescriptionMTIP2,
        language.developerReactPlenoDescriptionMTIP3,
        language.developerReactPlenoDescriptionMTIP4,
        language.developerReactPlenoDescriptionMTIP5,
        language.developerReactPlenoDescriptionMTIP6,
      ],
    },
    {
      title: language.computerScienceProfessor,
      company: language.ifpr,
      period: "Jul 2018 - Dez 2018 - 6 " + language.months,
      description: [
        language.computerScienceProfessorDescriptionP1,
        language.computerScienceProfessorDescriptionP2,
      ],
    },
    {
      title: language.freelancer,
      company: "Farol 360",
      period: "2015 - 2022",
      description: [
        language.freelancerDescriptionP1,
        language.freelancerDescriptionP2,
        language.freelancerDescriptionP3,
        language.freelancerDescriptionP4,
        language.freelancerDescriptionP5,
      ],
    },
    {
      title: language.systemAnalyst,
      company: "Inviolável",
      period: "2013 - 2015",
      description: [
        language.systemAnalystDescriptionP1,
        language.systemAnalystDescriptionP2,
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          {/* <Briefcase className="w-5 h-5 text-blue-600" /> */}
          <h3 className="text-xl font-semibold text-gray-800">
            {language.workExperience}
          </h3>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 border-l-2 border-blue-100 last:border-l-0"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="pb-6">
                <h4 className="text-lg font-semibold text-gray-800">
                  {exp.title}
                </h4>
                <div className="flex items-center gap-2 text-blue-600 font-medium mt-1">
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                  {/* <Calendar className="w-4 h-4" /> */}
                  <span>{exp.period}</span>
                </div>
                <ul className="mt-3 space-y-1">
                  {exp.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 text-sm flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
