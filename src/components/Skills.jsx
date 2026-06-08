import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaFigma, FaVuejs } from "react-icons/fa";
import { SiGithub, SiDocker, SiPhp } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import { t } from "../i18n";

export default function Skills({ lang }) {
  const categories = [
    {
      title: t(lang, "skills.frontend"),
      items: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "WordPress" },
        { name: "Vue.js" },
        { name: "PHP" },
      ],
    },
    {
      title: t(lang, "skills.design"),
      items: [
        { name: "UX/UI Design" },
        { name: "Figma" },
      ],
    },
    {
      title: t(lang, "skills.tools"),
      items: [
        { name: "Docker", },
        { name: "GitHub" },
        { name: "Responsive UI"},
        { name: "VS Code" },
      ],
    },
    {
      title: t(lang, "skills.soft"),
      items: [
        { name: lang === "it" ? "Teamwork" : "Teamwork" },
        { name: lang === "it" ? "Comunicazione" : "Communication"},
        { name: lang === "it" ? "Problem Solving" : "Problem Solving" },
        { name: lang === "it" ? "Autonomia" : "Autonomy"},
      ],
    },
    {
      title: t(lang, "skills.incoming"),
      items: [
        { name: t(lang, "skills.incomingItems") },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t(lang, "skills.title")}
      </motion.h2>

      <div className="skills-categories">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="skill-category"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{cat.title}</h3>

            <div className="skills-grid">
              {cat.items.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
