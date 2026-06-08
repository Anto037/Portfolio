import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LanguageToggle({ lang, setLang }) {
  const [current, setCurrent] = useState(lang || "it");

  const toggleLang = () => {
    const newLang = current === "it" ? "en" : "it";
    setCurrent(newLang);
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <motion.button
      className="lang-toggle"
      onClick={toggleLang}
      whileTap={{ scale: 0.9 }}
    >
      {current.toUpperCase()}
    </motion.button>
  );
}
