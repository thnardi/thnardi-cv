import { LanguageSlug } from "../types/languages";

const ISSERVER = typeof window === "undefined";

export const getLanguageLocalStorage = (): LanguageSlug => {
  if (!ISSERVER) return localStorage.getItem("language") as LanguageSlug;
  return "pt_br";
};

export const setLanguageLocalStorage = (language: LanguageSlug) => {
  if (!ISSERVER) return localStorage.setItem("language", language);
  return "pt_br";
};
