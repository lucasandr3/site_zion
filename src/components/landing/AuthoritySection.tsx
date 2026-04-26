import { motion } from "framer-motion";

const segments = [
  "Saude",
  "Estetica",
  "Imobiliario",
  "Automotivo",
  "Varejo",
  "Servicos locais",
  "Infoprodutos",
  "Educacao",
  "E muitos outros",
];

const AuthoritySection = () => (
  <section className="section-padding bg-gradient-dark">
    <div className="max-w-4xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-lg md:text-xl text-secondary-foreground leading-relaxed mb-8 font-body"
      >
        Com mais de <span className="text-primary font-semibold">8 anos de experiência</span> em
        engenharia de software e automacao, a Zion Tech ajuda voce a substituir
        atendimento manual por sistemas inteligentes focados em qualidade e agilidade.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-muted-foreground font-body mb-8"
      >
        Atendemos diversos nichos e adaptamos cada agente inteligente ao seu processo.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-3">
        {segments.map((segment, i) => (
          <motion.div
            key={segment}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="px-4 py-2 rounded-full border border-border/60 bg-secondary/50 text-sm text-muted-foreground font-body"
          >
            {segment}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AuthoritySection;
