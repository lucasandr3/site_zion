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
          Technology Is Not an Expense.{" "}
          <span className="text-gradient-gold">It Is a Competitive Advantage.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed font-body">
          Zion Tech builds structured, intelligent systems designed for long-term efficiency
          and scalability. We partner with businesses that understand technology as a
          strategic investment — not a cost center — and deliver infrastructure that
          compounds value over time.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PositioningSection;
