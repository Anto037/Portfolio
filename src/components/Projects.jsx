import { motion } from "framer-motion";
import FadeSection from "./FadeSection";
import { RightReveal } from "./RevealSection";
import { t } from "../i18n";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCube, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

/* ICONS */
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCloud } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

/* PARTICLES */
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const techIcons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  React: <FaReact />,
  PHP: <SiPhp />,
  API: <FaCloud />
};

/* ============================
   PROGETTI
============================ */
const projects = (lang) => [
  {
    title: "To-Do List App",
    img: "src/assets/To-Do-List.PNG",
    desc: t(lang, "projects.todo.desc"),
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Anto037/To-Do-List-App"
  },
  {
    title: "Notes App",
    img: "src/assets/Notes.PNG",
    desc: t(lang, "projects.notes.desc"),
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Anto037/Notes-App"
  },
  {
    title: "Climafy",
    img: "src/assets/Meteo.PNG",
    desc: t(lang, "projects.climafy.desc"),
    tech: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://github.com/Anto037/Climafy"
  },
   {
    title: "Web-Agency-Website",
    img: "src/assets/Web-Agency.PNG",
    desc: t(lang, "projects.web-agency.desc"),
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Anto037/Web-Agency-Website"
  },
  {
    title: "In arrivo...",
    desc: "2026",
    comingSoon: true
  }
];

export default function Projects({ lang }) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <FadeSection>
      <RightReveal>
        <section className="projects" id="projects">

          {/* SFONDO ANIMATO */}
          <div className="projects-bg"></div>

          {/* PARTICELLE */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: { color: "transparent" },
              fpsLimit: 60,
              particles: {
                number: { value: 40 },
                size: { value: 2 },
                move: { speed: 0.6 },
                opacity: { value: 0.3 },
                links: { enable: true, color: "#00aaff", opacity: 0.3 }
              }
            }}
          />

          {/* TITOLO */}
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="projects-title"
          >
            {t(lang, "projects.title")}
          </motion.h2>

          {/* SOTTOTITOLO */}
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="projects-desc"
          >
            {t(lang, "projects.subtitle")}
          </motion.h3>

          {/* CAROUSEL */}
          <Swiper
            modules={[Navigation, Pagination, EffectCube, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            effect="cube"
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 30,
              shadowScale: 0.9
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false
            }}
            spaceBetween={40}
            slidesPerView={1}
            className="projects-carousel"
          >
            {projects(lang).map((p, i) => (
              <SwiperSlide key={i}>

                {/* CARD SPECIALE "IN ARRIVO" */}
                {p.comingSoon ? (
                  <motion.div
                    className="project-card-pro coming-soon"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="coming-title">{p.title}</h3>
                    <p className="coming-year">{p.desc}</p>
                  </motion.div>
                ) : (
                  /* CARD NORMALE */
                  <motion.div
                    className="project-card-pro"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                      e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
                    }}
                  >
                    {/* NUMERO GIGANTE */}
                    <span className="project-number-bg">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* IMMAGINE */}
                    <motion.div className="project-image-pro" whileHover={{ scale: 1.04 }}>
                      <motion.img
                        src={p.img}
                        alt={p.title}
                        className="parallax-img"
                        whileHover={{
                          y: -15,
                          transition: { duration: 0.6, ease: "easeOut" }
                        }}
                      />
                      <div className="image-glow"></div>
                    </motion.div>

                    {/* TITOLO */}
                    <motion.h3 className="project-title" whileHover={{ y: -4 }}>
                      {p.title}
                    </motion.h3>

                    {/* DESCRIZIONE */}
                    <motion.p className="project-desc" whileHover={{ y: -3 }}>
                      {p.desc}
                    </motion.p>

                    {/* TECNOLOGIE */}
                    <div className="tech-list">
                      {p.tech.map((t, index) => (
                        <span key={index} className="tech-icon">
                          {techIcons[t]} <p>{t}</p>
                        </span>
                      ))}
                    </div>

                    {/* BOTTONE */}
                    <a href={p.link} target="_blank" className="github-btn">
                      {t(lang, "projects.open")}
                    </a>
                  </motion.div>
                )}

              </SwiperSlide>
            ))}
          </Swiper>

        </section>
      </RightReveal>
    </FadeSection>
  );
}
