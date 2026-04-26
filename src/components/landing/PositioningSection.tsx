import { motion } from "framer-motion";

const PositioningSection = () => (
  <section className="section-padding bg-gradient-dark">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          Tecnologia não é despesa.{" "}
          <span className="text-gradient-gold">É vantagem competitiva.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed font-body">
          A Zion Tech constrói sistemas estruturados e inteligentes para eficiência de
          longo prazo e escalabilidade. Trabalhamos com empresas que enxergam tecnologia
          como investimento estratégico, e não como centro de custo, entregando uma
          infraestrutura que gera valor continuamente ao longo do tempo.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PositioningSection;
