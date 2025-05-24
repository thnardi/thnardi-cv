import { createLanguageObject, LanguageObject } from "languages-module";

export interface CVLanguage extends LanguageObject {
  title: string;
  description: string;
  skills: string;
  experience: string;
  projects: string;
  contact: string;
}

export const language = {
  pt_br: {
    title: "Thiago Nardi",
    description: "Desenvolvedor Full Stack",
    skills: "Habilidades",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contato",
  } as CVLanguage,
  es_es: {
    title: "Thiago Nardi",
    description: "Desarrollador Full Stack",
    skills: "Habilidades",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
  } as CVLanguage,
  en_us: {
    title: "Thiago Nardi",
    description: "Full Stack Developer",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  } as CVLanguage,
};

export const languageObject = createLanguageObject(
  language.pt_br,
  language.es_es,
  language.en_us
);
