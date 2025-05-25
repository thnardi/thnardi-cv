"use client";

import { ExternalLink, Folder } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { DefaultProps } from "../page.d";

const Projects: React.FC<DefaultProps> = ({ language }) => {
  const projects = [
    {
      title: language.mtcidadao,
      tech: "React, React Native, Node.js, MongoDB",
      description: language.mtcidadaoDescription,
      features: [language.biometry, language.notifications, language.keycloack],
      link: "https://www.mtcidadao.mt.gov.br/",
    },
    {
      title: language.sisgesp,
      tech: "React, React Native, PHP, MySQL, Slim Framework, Docker",
      description: language.sisgespDescription,
      features: ["Sync on/offline"],
      link: "https://play.google.com/store/apps/details?id=br.com.sisgesp.sisgespuserapp&pcampaignid=web_share",
    },
    {
      title: language.fialBarbantes,
      tech: "PHP 8, REST API",
      description: language.fialBarbantesDescription,
      features: [language.restApi, language.serverSideRendering, language.php8],
      link: "https://fial.com.br/",
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
          <Folder className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">
            Projetos Destacados
          </h3>
        </div>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h4>
                <div className="flex gap-2">
                  <a href={project.link} target="_blank">
                    <ExternalLink className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer" />
                  </a>
                </div>
              </div>
              <p className="text-blue-600 text-sm font-medium mb-2">
                {project.tech}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
