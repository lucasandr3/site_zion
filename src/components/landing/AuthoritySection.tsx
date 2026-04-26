import { motion } from "framer-motion";
import { Heart, Sparkles, Building2, Car, ShoppingBag, Armchair } from "lucide-react";

const industries = [
  { icon: Heart, label: "Clínicas de saúde" },
  { icon: Sparkles, label: "Centros estéticos" },
  { icon: Building2, label: "Imobiliário" },
  { icon: Car, label: "Automotivo" },
  { icon: ShoppingBag, label: "Varejo" },
  { icon: Armchair, label: "Móveis planejados" },
];

const AuthoritySection = () => (
  <section className="section-padding bg-gradient-dark">
    <div className="max-w-4xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-lg md:text-xl text-secondary-foreground leading-relaxed mb-16 font-body"
      >
        Com mais de <span className="text-primary font-semibold">8 anos de experiência</span> em
        engenharia de software e tecnologia empresarial, a Zion Tech ajuda empresas a
        substituir gargalos operacionais por sistemas inteligentes desenhados para escalar.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {industries.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center gap-3 p-4"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground font-body">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AuthoritySection;
