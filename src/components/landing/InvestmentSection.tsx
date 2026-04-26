import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const InvestmentSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-4">
            Planos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            Escolha o melhor para comecar hoje
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-xl p-8 md:p-10 mb-8"
        >
          <div className="space-y-6 mb-8">
            <div className="flex justify-between items-center border-b border-border/50 pb-4">
              <span className="text-secondary-foreground font-body">Atendimento Inteligente Express pelo WhatsApp</span>
              <span className="font-heading text-foreground font-semibold">67,00 mensais</span>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-4">
              <span className="text-secondary-foreground font-body">Desenvolvimento de site profissional</span>
              <span className="font-heading text-foreground font-semibold">300,00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary-foreground font-body">Manutencao mensal do site</span>
              <span className="font-heading text-foreground font-semibold">29,00 mensais</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm font-body mb-8">
            Entre agora e tenha atendimento inteligente, presenca online profissional e suporte mensal para continuar crescendo.
          </p>

          <button
            onClick={() => scrollTo("contact")}
            className="bg-gradient-gold text-primary-foreground font-heading font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 glow-gold flex items-center justify-center gap-2 w-full"
          >
            Quero comecar meu projeto
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;
