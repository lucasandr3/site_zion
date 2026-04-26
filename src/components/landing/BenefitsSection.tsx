import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Clareza operacional",
  "Menor dependência de processos manuais",
  "Taxas de conversão mais altas",
  "Visibilidade financeira estruturada",
  "Sistemas de crescimento previsível",
  "Experiência do cliente aprimorada",
];

const BenefitsSection = () => (
  <section className="section-padding">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          O que muda <span className="text-gradient-gold">após a implementação</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 text-left">
        {benefits.map((b, i) => (
          <motion.div
            key={b}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-3 py-3"
          >
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-secondary-foreground font-body">{b}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
