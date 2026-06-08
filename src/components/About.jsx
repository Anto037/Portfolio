import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Chi sono
      </motion.h2>

      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Sono Antonio Florea, un Web Developer con passione per il design pulito,
        le interfacce moderne e lo sviluppo front-end.  
        Mi piace creare esperienze digitali semplici, funzionali e curate nei dettagli.
      </motion.p>
    </section>
  );
}
