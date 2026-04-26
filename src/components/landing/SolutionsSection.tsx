import { motion } from "framer-motion";
import { Bot, Globe, MapPin, MessageCircle } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Atendimento inteligente 24 horas pelo WhatsApp",
    features: [
      "Responde clientes mesmo fora do horario comercial",
      "Qualifica e organiza contatos para seu time atender melhor",
      "Atende com rapidez e melhora a experiencia do cliente",
      "Seu cliente se sente bem atendido em qualquer hora do dia",
    ],
  },
  {
    icon: MessageCircle,
    title: "Atendimento Inteligente Express pelo WhatsApp - 67,00 mensais",
    features: [
      "Plano de entrada para comecar rapido e atender melhor",
      "Configuracao express para colocar seu atendimento no ar",
      "Ideal para quem quer resultado com baixo investimento mensal",
      "Mensalidade fixa de 67,00",
    ],
  },
  {
    icon: MapPin,
    title: "Configuracao profissional do Google Meu Negocio",
    features: [
      "Perfil otimizado para aparecer melhor nas buscas locais",
      "Informacoes organizadas para gerar mais confianca",
      "Mais visibilidade para quem procura seu servico na regiao",
      "Posicionamento digital para atrair novos contatos no WhatsApp",
    ],
  },
  {
    icon: Globe,
    title: "Desenvolvimento de sites por 300,00 + 29,00 mensais",
    features: [
      "Criacao do seu site profissional por 300,00",
      "Mensalidade de 29,00 com manutencao inclusa",
      "Site pensado para facilitar contato e atendimento",
      "Sua marca com presenca forte e atendimento mais profissional",
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
          Servicos de atendimento inteligente
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Solucoes prontas para atender melhor no WhatsApp
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
