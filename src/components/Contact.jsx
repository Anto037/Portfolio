import { motion } from "framer-motion";
import FadeSection from "./FadeSection";
import { LeftReveal, RightReveal } from "./RevealSection";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { t } from "../i18n";

export default function Contact({ lang }) {
  return (
    <FadeSection>
      <section className="contact" id="contact">

        <div className="contact-grid">

          {/* COLONNA SINISTRA */}
          <LeftReveal>
            <div className="contact-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {t(lang, "contact.title")}
              </motion.h2>

              <motion.p
                className="contact-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {t(lang, "contact.subtitle")}
              </motion.p>

              <motion.a
                href="#contact-form"
                className="contact-cta"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                {t(lang, "contact.cta")}
              </motion.a>
            </div>
          </LeftReveal>

          {/* COLONNA DESTRA — BOX CONTATTI */}
          <RightReveal>
            <div className="contact-box glass">

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>{t(lang, "contact.email")}</h4>
                  <p>antonioflorea39@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>{t(lang, "contact.phone")}</h4>
                  <p>+39 389 536 9900</p>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>{t(lang, "contact.location")}</h4>
                  <p>Verona, Italia</p>
                </div>
              </div>

              <div className="contact-social">
                <h4>{t(lang, "contact.follow")}</h4>
                <div className="social-icons">
          <a href="https://www.linkedin.com/in/antonio-florea-b2b611292" target="_blank">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/Anto037" target="_blank">
                    <FaGithub />
                  </a>
                </div>
              </div>

            </div>
          </RightReveal>

        </div>

        {/* FORM */}
        <form
          id="contact-form"
          className="contact-form glass"
          action="https://formsubmit.co/3ee9180fa918224ec8b18d0f4a409fa2"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder={t(lang, "contact.placeholder.name")}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t(lang, "contact.placeholder.email")}
            required
          />

          <textarea
            name="message"
            placeholder={t(lang, "contact.placeholder.message")}
            rows="5"
            required
          ></textarea>

          <motion.button
            type="submit"
            className="contact-btn"
            whileHover={{ scale: 1.05, y: -3 }}
          >
            {t(lang, "contact.send")}
          </motion.button>
        </form>

      </section>
    </FadeSection>
  );
}
