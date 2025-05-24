import { LanguageClass, createLanguageObject } from "./types/languages-class";
import { LanguageSlug } from "./types/languages";
import { LanguageObject } from "./types/languages";
import FlagIcon from "./components/FlagIcon";
import {
  getLanguageLocalStorage,
  setLanguageLocalStorage,
} from "./storages/language-storage";

export {
  createLanguageObject,
  FlagIcon,
  getLanguageLocalStorage,
  setLanguageLocalStorage,
};

export type { LanguageSlug, LanguageObject, LanguageClass };
