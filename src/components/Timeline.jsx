import { motion } from "framer-motion";
import FadeSection from "./FadeSection";
import { LeftReveal, RightReveal } from "./RevealSection";
import { t } from "../i18n";

export default function About({ lang }) {
  return (
    <FadeSection>
      <section className="about-pro" id="about">

        {/* TITOLO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-pro-title"
        >
          {t(lang, "about.title")}
        </motion.h2>

        <div className="about-pro-grid">

          {/* COLONNA SINISTRA — PROFILO */}
          <LeftReveal>
            <div className="about-pro-card glass">
              <h3>{t(lang, "about.profile")}</h3>

              <div className="about-pro-image-wrapper avatar-antonio">
                <div className="avatar-antonio-circle">
                  <span className="avatar-antonio-letter">AF</span>
                </div>
              </div>

              <p className="about-pro-desc">
                {t(lang, "about.desc")}
              </p>
            </div>
          </LeftReveal>

          {/* COLONNA DESTRA — PANORAMICA */}
          <RightReveal>
            <div className="about-pro-card glass">
              <h3>{t(lang, "about.overview")}</h3>

              <p className="about-pro-text">
                {lang === "it"
                  ? "Sono uno sviluppatore frontend con competenze in UI/UX e design moderno. Cerco opportunità lavorative per crescere professionalmente e migliorare ogni giorno."
                  : "I am a frontend developer with skills in UI/UX and modern design. I am looking for job opportunities to grow professionally and improve every day."}
              </p>

              <div className="about-pro-info">
                <div>
                  <h4>{t(lang, "about.name")}</h4>
                  <p>Antonio Florea</p>
                </div>

                <div>
                  <h4>{t(lang, "about.position")}</h4>
                  <p>Verona, Italia</p>
                </div>

                <div>
                  <h4>{t(lang, "about.searching")}</h4>
                  <p>{lang === "it" ? "Esperienze lavorative" : "Job opportunities"}</p>
                </div>

                <div>
                  <h4>{t(lang, "about.email")}</h4>
                  <p>antonioflorea39@gmail.com</p>
                </div>
              </div>

              <motion.a
                href="/CURRICULUM-FLOREA-ANTONIO.pdf"
                download
                className="about-pro-btn"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                {t(lang, "about.download")}
              </motion.a>
            </div>
          </RightReveal>

        </div>

      </section>
    </FadeSection>
  );
}
