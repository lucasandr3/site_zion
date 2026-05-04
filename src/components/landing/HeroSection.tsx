import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-6">
            Zion Tech
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
            Desenvolvimento de sites e automacao inteligente para{" "}
            <span className="text-gradient-gold">fazer seu negocio crescer todos os dias</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body">
            Criamos seu site profissional e estruturamos automacoes no WhatsApp para
            gerar mais contatos, responder mais rapido e manter seu atendimento organizado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="bg-gradient-gold text-primary-foreground font-heading font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 glow-gold flex items-center justify-center gap-2"
          >
            Quero meu site e atendimento profissional
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="https://wa.me/553499640818?text=Oi!%20Quero%20saber%20mais%20sobre%20desenvolvimento%20de%20sites%20e%20automacao%20de%20atendimento%20da%20Zion%20Tech."
            target="_blank"
            rel="noreferrer"
            className="border border-foreground/20 text-foreground font-heading font-medium px-8 py-4 rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Falar no WhatsApp
            <MessageCircle className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-foreground/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
