import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import "./styles.css";

export default function App() {
  const [lang, setLang] = useState("it");

  return (
    <main>
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} setLang={setLang} />
      <Timeline lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Certifications lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
