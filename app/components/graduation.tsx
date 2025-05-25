"use client";

import { motion } from "framer-motion";
import { DefaultProps } from "../page.d";

const Graduation: React.FC<DefaultProps> = ({ language }) => {
  const graduation = [
    {
      title: language.specializationDegree,
      description: language.specializationInstitution,
      period: "2016",
    },
    {
      title: language.computerScienceDegree,
      description: language.computerScienceInstitution,
      period: "2009 - 2012",
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
            {language.graduation}
          </h3>
        </div>
        <div className="space-y-6">
          {graduation.map((exp, index) => (
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
                  <span>{exp.description}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Graduation;
