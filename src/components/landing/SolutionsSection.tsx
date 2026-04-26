import { motion } from "framer-motion";
import { Bot, BarChart3, CalendarCheck, Settings2 } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Sistema de qualificação comercial com IA",
    features: [
      "Atendimento de leads 24/7",
      "Fluxos inteligentes de qualificação",
      "Entrega organizada no pipeline",
      "Só oportunidades prontas para venda chegam ao seu time",
    ],
  },
  {
    icon: BarChart3,
    title: "Inteligência financeira com IA",
    features: [
      "Gestão estruturada do fluxo de caixa",
      "Lembretes automatizados",
      "Visibilidade em tempo real dos relatórios",
      "Clareza financeira para decisões estratégicas",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Automação de agendamentos com IA",
    features: [
      "Fluxos inteligentes de agendamento",
      "Confirmações automatizadas",
      "Redução de faltas",
      "Integração fluida com calendário",
    ],
  },
  {
    icon: Settings2,
    title: "Consultoria em tecnologia e processos",
    features: [
      "Automação de processos de negócio",
      "Estratégia de otimização de custos",
      "Redesenho operacional",
      "Infraestrutura digital escalável",
    ],
  },
];

const SolutionsSection = () => (
  <section id="solutions" className="section-padding bg-gradient-dark">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-4">
          Nossas soluções
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Sistemas inteligentes para escalar
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              {s.title}
            </h3>
            <ul className="space-y-2.5">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-muted-foreground text-sm font-body">
                  <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
