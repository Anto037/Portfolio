import { useState } from "react";
import { motion } from "framer-motion";
import FadeSection from "./FadeSection";
import { LeftReveal } from "./RevealSection";
import { t } from "../i18n";

/* IMPORT IMMAGINI */
import jsCert from "../assets/javascript.png";
import responsiveCert from "../assets/responsive.png";
import icdlCert from "../assets/icdl.png";
import copywritingCert from "../assets/copywriting.png";
import canvaCert from "../assets/canva.png";

/* ARRAY CERTIFICAZIONI */
const certifications = (lang) => [
  {
    title: "JavaScript",
    issuer: "FreeCodeCamp - 2025",
    img: jsCert,
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp - 2025",
    img: responsiveCert,
  },
  {
    title: "ICDL",
    issuer: "AICA - 2023",
    img: icdlCert,
  },
  {
    title: "Copywriting",
    issuer: "Learnn - 2025",
    img: copywritingCert,
  },
  {
    title: "Graphic Design",
    issuer: "Learnn - 2025",
    img: canvaCert,
  },
  {
    title: t(lang, "certs.incoming"),
    issuer: "2026",
  },
];

export default function Certifications({ lang }) {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <FadeSection>
      <LeftReveal>
        <section className="certifications" id="certifications">

          {/* TITOLO */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t(lang, "certs.title")}
          </motion.h2>

          {/* GRIGLIA */}
          <div className="cert-grid">
            {certifications(lang).map((cert, i) => (
              <motion.div
                className="cert-card"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>

                {/* BOTTONE PER APRIRE IL CERTIFICATO */}
                {cert.img && (
                  <button
                    className="cert-view-btn"
                    onClick={() => setSelectedCert(cert)}
                  >
                    {t(lang, "certs.view")}
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* POPUP */}
          {selectedCert && (
            <div className="cert-popup" onClick={() => setSelectedCert(null)}>
              <div
                className="cert-popup-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={selectedCert.img} alt={selectedCert.title} />
                <button
                  className="close-popup"
                  onClick={() => setSelectedCert(null)}
                >
                  {t(lang, "certs.close")}
                </button>
              </div>
            </div>
          )}

        </section>
      </LeftReveal>
    </FadeSection>
  );
}
