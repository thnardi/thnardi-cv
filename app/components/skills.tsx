"use client";

import { ChevronDown, ChevronUp, Code2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DefaultProps } from "../page.d";

const Skills: React.FC<DefaultProps> = ({ language }) => {
  const [skillsDesc, setSkillsDesc] = useState(false);
  const [changeOrientation, setChangeOrientation] = useState(false);

  useEffect(() => {
    if (changeOrientation) {
      setSkillsDesc(!skillsDesc);
      setChangeOrientation(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeOrientation]);

  const skills = [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "React Native", level: 95, color: "bg-cyan-500" },
    { name: "Redux/Redux Toolkit", level: 95, color: "bg-purple-700" },
    { name: "CSS/Bootstrap", level: 95, color: "bg-purple-400" },
    { name: "JavaScript/TypeScript", level: 90, color: "bg-yellow-500" },
    { name: "Git/GitHub", level: 75, color: "bg-gray-600" },
    { name: "Apache/Nginx", level: 60, color: "bg-gray-900" },
    { name: "Docker/Docker-compose", level: 60, color: "bg-blue-600" },
    { name: "Node.js", level: 50, color: "bg-green-500" },
    { name: "PHP/Slim Framework", level: 75, color: "bg-green-500" },
    { name: "PHP/Twig", level: 95, color: "bg-green-300" },
    { name: "Java", level: 40, color: "bg-red-300" },
    { name: "CSS/Tailwind", level: 40, color: "bg-purple-500" },
    { name: "CSS/Material-UI", level: 60, color: "bg-gray-500" },
  ];

  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Code2
            className="w-5 h-5 text-blue-600"
            onClick={() => setChangeOrientation(true)}
          />
          <h3
            className="text-xl font-semibold text-gray-800"
            onClick={() => setChangeOrientation(true)}
          >
            {language.skills}
          </h3>
          {skillsDesc ? (
            <ChevronUp
              className="w-5 h-5 text-gray-600"
              onClick={() => setChangeOrientation(true)}
            />
          ) : (
            <ChevronDown
              className="w-5 h-5 text-gray-600"
              onClick={() => setChangeOrientation(true)}
            />
          )}
        </div>

        <div className="space-y-4" style={{ minHeight: "500px" }}>
          {skills
            .sort((a, b) =>
              skillsDesc ? a.level - b.level : b.level - a.level
            )
            .map((skill, index) => (
              <div key={index}>
                {/* <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                > */}
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                {/* </motion.div> */}
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
