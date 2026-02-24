import { motion } from "framer-motion";

const problems = [
  "Delayed responses and lost opportunities",
  "Overloaded teams",
  "Manual and fragmented processes",
  "Financial inefficiencies",
  "Lack of scalable structure",
];

const ProblemSection = () => (
  <section className="section-padding">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Operational Complexity Is{" "}
          <span className="text-gradient-gold">Limiting Your Growth</span>
        </h2>
      </motion.div>

      <div className="space-y-4 mb-12">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-4 py-3 border-b border-border/50"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span className="text-muted-foreground font-body">{p}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center text-foreground font-heading text-lg font-medium"
      >
        Growth requires systems — not more manual effort.
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;
