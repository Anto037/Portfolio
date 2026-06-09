import { trackEvent } from "../analytics";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { t } from "../i18n/index.js";

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`nav-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* LOGO */}
        <div className="nav-logo">
          <a href="" className="logo-neon">AF</a>
        </div>

        {/* LINKS CENTRATI */}
        <div className="nav-links">
  <a 
    href="#home" 
    onClick={() => trackEvent("nav_click", { section: "home" })}
  >
    {t(lang, "nav.home")}
  </a>

  <a 
    href="#about" 
    onClick={() => trackEvent("nav_click", { section: "about" })}
  >
    {t(lang, "nav.about")}
  </a>

  <a 
    href="#skills" 
    onClick={() => trackEvent("nav_click", { section: "skills" })}
  >
    {t(lang, "nav.skills")}
  </a>

  <a 
    href="#projects" 
    onClick={() => trackEvent("nav_click", { section: "projects" })}
  >
    {t(lang, "nav.projects")}
  </a>

  <a 
    href="#certifications" 
    onClick={() => trackEvent("nav_click", { section: "certifications" })}
  >
    {t(lang, "nav.certifications")}
  </a>
</div>


        {/* CTA DESKTOP + TOGGLE LINGUA */}
        <div className="nav-right">
          <a href="#contact" className="cta-animated nav-cta">
            {t(lang, "nav.contact")}
          </a>

         
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.nav>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a 
  href="#home" 
  onClick={() => {
    trackEvent("nav_click", { section: "home" });
    setMenuOpen(false);
  }}
>
  {t(lang, "nav.home")}
</a>


        <a 
  href="#home" 
  onClick={() => {
    trackEvent("nav_click", { section: "home" });
    setMenuOpen(false);
  }}
>
  {t(lang, "nav.home")}
</a>


        <a 
  href="#home" 
  onClick={() => {
    trackEvent("nav_click", { section: "home" });
    setMenuOpen(false);
  }}
>
  {t(lang, "nav.home")}
</a>


      <a 
  href="#home" 
  onClick={() => {
    trackEvent("nav_click", { section: "home" });
    setMenuOpen(false);
  }}
>
  {t(lang, "nav.home")}
</a>


        <a 
  href="#home" 
  onClick={() => {
    trackEvent("nav_click", { section: "home" });
    setMenuOpen(false);
  }}
>
  {t(lang, "nav.home")}
</a>


      <a 
  href="#contact" 
  className="cta-animated nav-cta"
  onClick={() => trackEvent("nav_click", { section: "contact" })}
>
  {t(lang, "nav.contact")}
</a>


        <button
          className="lang-toggle mobile"
          onClick={() => setLang(lang === "it" ? "en" : "it")}
        >
          {lang === "it" ? "EN" : "IT"}
        </button>
      </div>
    </>
  );
}
