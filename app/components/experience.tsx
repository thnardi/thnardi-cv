"use client";

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor React Pleno",
      company: "RW3 Tecnologia",
      period: "2024 - 2025",
      description: [
        "Sustentação e desenvolvimento de novas funcionalidades de aplicações web com React e React Native.",
        "Experiência com publicação de Apps no Google Play e App Store.",
        "Participação de time de desenvolvimento agile na metodologia SCRUM.",
        "Utilização de Openshift e GCP para consulta de logs e deploy de aplicações.",
        "Utilização de Node.js para construção de endpoints e integração com APIs.",
      ],
    },
    {
      title: "Desenvolvedor React Pleno",
      company: "MTI - Empresa Mato-Grossense de Tecnologia da Informação",
      period: "2022 - 2024",
      description: [
        "Processo seletivo temporário (2 anos) para desenvolvedor React Pleno.",
        "Sustentação e desenvolvimento de novas funcionalidades de aplicações web com React e React Native.",
        "Experiência com publicação de Apps no Google Play e App Store.",
        "Participação de time de desenvolvimento agile na metodologia SCRUM.",
        "Utilização de Openshift e GCP para consulta de logs e deploy de aplicações.",
        "Utilização de Node.js para construção de endpoints e integração com APIs.",
      ],
    },
    {
      title: "Professor de Informática",
      company: "Instituto Federal do Paraná - IFPR.",
      period: "Jul 2018 - Dez 2018 - 6 meses",
      description: [
        "Professor substituto do Curso técnico em informática do IFPR.",
        "Aulas de Banco de dados, Redes, S. O. e Engenharia de Software.",
      ],
    },
    {
      title: "Autônomo",
      company: "Farol 360",
      period: "2015 - 2022",
      description: [
        "Apresentação e venda de projetos de sistemas web, mobile e desktop.",
        "Programador Full Stack.",
        "Suporte técnico aos clientes.",
        "Lider técnico de time envolvendo até 5 pessoas (a partir de 2018).",
        "Diversas stacks ao longo do tempo, como: PHP, Node.js, React, React Native, etc.",
      ],
    },
    {
      title: "Analista de Sistemas",
      company: "Inviolável",
      period: "2013 - 2015",
      description: [
        "Departamento de TI: manutenção básica de hardware e software incluindo suporte ao usuário presencialmente e via acesso remoto.",
        "Configuração de impressoras, redes, servidores linux, entre outras atividades.",
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
            Work Experience
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
