import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-gradient-dark">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Operate at a{" "}
            <span className="text-gradient-gold">Higher Level?</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body mb-10 max-w-xl mx-auto">
            Schedule a strategic consultation and discover how intelligent systems can
            transform your business.
          </p>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-gradient-gold text-primary-foreground font-heading font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-all duration-300 glow-gold inline-flex items-center gap-2"
          >
            Book My Strategic Session
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
