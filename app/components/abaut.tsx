"use client";

import { User } from "lucide-react";
import { motion } from "framer-motion";

import React from "react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <User className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">About Me</h3>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Comecei em 2015 como freelancer em projetos de website para pequenas
          empresas da minha cidade. Gradativamente os projetos foram se tornando
          mais complexos e a minha experiência foi se expandindo.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Durante este processo tive a oportunidade de atuar em todas as etapas,
          desde a concepção, venda desenvolvimento, implantação e manutenção,
          lidando diretamente com clientes e usuários.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Faço parte atualmente como desenvolvedor pleno de um time focado no
          produto MTCIDADAO, destinado ao cidadão do estado do Mato Grosso, com
          +250k usuários.
        </p>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Experiência</span>
            <span className="font-medium">10 anos</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">React e RN</span>
            <span className="font-medium">+4 anos</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
