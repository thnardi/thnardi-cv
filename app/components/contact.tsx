"use client";

import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "thnardi@gmail.com",
      href: "mailto:thnardi@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+55 (45) 99914-4796",
      href: "tel:+5545999999999",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/thiago-nardi",
      href: "https://www.linkedin.com/in/thiago-nardi-a154a355/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/thnardi",
      href: "https://github.com/thnardi",
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
          <Mail className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">Contact</h3>
        </div>
        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <contact.icon className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
              <div>
                <p className="text-sm text-gray-500">{contact.label}</p>
                <p className="text-gray-700 group-hover:text-blue-600 transition-colors">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium">
            Download CV
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
