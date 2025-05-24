"use client";

import { ExternalLink, Folder } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "MTCIDADAO",
      tech: "React, React Native, Node.js, MongoDB",
      description:
        "Aplicativo para o cidadão do estado do Mato Grosso. O app possui integrações com diversos órgãos como Detran e Sesp. Oferece serviços como RG Digital, CRLV, pagamento de IPVA, transferência de veículos, carteira do autista, entre outros.",
      features: ["Biometria", "Envio de notificações", "Login com Keycloack"],
      link: "https://www.mtcidadao.mt.gov.br/",
    },
    {
      title: "SISGESP - Sistema de Gestão de Serviços Públicos",
      tech: "React, React Native, PHP, MySQL, Slim Framework, Docker",
      description:
        "Sistema de Gestão de Serviços Públicos para prefeituras. Módulos de carta de Serviços, Controlde de Equipamentos e Controle de Endemias, incluíndo interface web e App. App RN com modo offline para agentes de endemia atuarem no campo (com sistema de sincronização de dados).",
      features: ["Sync on/offline"],
      link: "https://play.google.com/store/apps/details?id=br.com.sisgesp.sisgespuserapp&pcampaignid=web_share",
    },
    {
      title: "Fial Barbantes - Industria de Fios",
      tech: "React, Weather API",
      description:
        "Site institucional com sistema de gerenciamento de conteúdo e integração com sistema de gestão da indústria. Através do site lojistas e representante podem solicitar pedidos direto no sistema da indústria, bem como outras funcionalidades direto do seu painel de usuário.",
      features: [
        "Location Services",
        "Interactive Charts",
        "Weather Alerts",
        "Dark Mode",
      ],
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
