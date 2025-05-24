import { getLanguageLocalStorage } from '../storages/language-storage'
import { LanguageObject, LanguageSlug } from './languages'
import { ELanguageSlug } from './languages-enums'

export class LanguageClass<T = LanguageObject> {
  private pt_br: T
  private es_es: T
  private en_us: T

  constructor(pt_br: T, es_es: T, en_us: T) {
    this.pt_br = pt_br
    this.es_es = es_es
    this.en_us = en_us
  }

  /**
   * If currentLanguageString is not set, will get current language from storage
   * @param currentLanguageString
   * @returns
   */
  getCurrentLanguage(currentLanguageString: LanguageSlug = getLanguageLocalStorage()): T {
    if (currentLanguageString === ELanguageSlug.PT_BR) return this.pt_br
    if (currentLanguageString === ELanguageSlug.ES_ES) return this.es_es
    if (currentLanguageString === ELanguageSlug.EN_US) return this.en_us

    return this.pt_br
  }
}

export function createLanguageObject<T>(pt_br: T, es_es: T, en_us: T) {
  return new LanguageClass(pt_br, es_es, en_us)
}
