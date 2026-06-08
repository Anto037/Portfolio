import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeSection from "./FadeSection";
import Me from "../assets/Me.png";
import LanguageToggle from "./LanguageToggle";
import { t } from "../i18n";

export default function Hero({ lang, setLang }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FadeSection>
      <section className="hero" id="home">

        {/* Toggle lingua */}
        <div className="hero-lang">
          <LanguageToggle lang={lang} setLang={setLang} />
        </div>

        {/* Sfondo parallax */}
        <motion.div
          className="hero-bg"
          style={{ transform: `translateY(${offset}px)` }}
        />

        <div className="hero-content">

          {/* COLONNA SINISTRA */}
          <div className="hero-left">

            <div className="hero-title-wrapper">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                {t(lang, "hero.name")}
              </motion.h1>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            >
              {t(lang, "hero.role")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              {t(lang, "hero.desc")}
            </motion.p>

            <motion.a
              href="#projects"
              className="cta-animated"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
            >
              {t(lang, "hero.cta")}
            </motion.a>

          </div>

          <motion.img
            src={Me}
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          />

        </div>
      </section>
    </FadeSection>
  );
}
