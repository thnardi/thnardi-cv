import { CVLanguage } from "./page.language";

export interface DefaultProps {
  language: CVLanguage;
}

export interface LanguageSelectorProps extends DefaultProps {
  languageSlug: LanguageSlug;
  setLanguageSlug: (languageSlug: LanguageSlug) => void;
}

export interface ContactProps extends DefaultProps {
  languageSlug: LanguageSlug;
}
