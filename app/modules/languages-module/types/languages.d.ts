export type LanguageObject = {
  [key: string]: string;
};

export type LanguageSlug = "pt_br" | "es_es" | "en_us";

export interface LanguageState {
  value: LanguageSlug;
}
