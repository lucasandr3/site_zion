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
          Seu site pode vender mais.{" "}
          <span className="text-gradient-gold">E seu atendimento pode escalar com automacao.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed font-body">
          A Zion Tech desenvolve sites profissionais e cria automacoes praticas para WhatsApp,
          ajudando voce a captar mais leads, responder com rapidez e manter um atendimento
          de alto nivel com consistencia.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PositioningSection;
