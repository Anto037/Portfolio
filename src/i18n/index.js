import it from "./it.json";
import en from "./en.json";

const translations = { it, en };

export function t(lang, key) {
  return translations[lang]?.[key] || key;
}
