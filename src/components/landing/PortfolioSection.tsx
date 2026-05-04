import { motion } from "framer-motion";
import { ExternalLink, FolderOpen } from "lucide-react";

type PortfolioProject = {
  slug: string;
  title: string;
  description: string;
  externalUrl?: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    slug: "site-construcao-alta-conversao",
    title: "Clean Sofa",
    description: "Landing de higienizacao profissional de estofados com foco em conversao.",
    externalUrl: "https://sistemas-cleansofa-shine.jbhyv4.easypanel.host/",
  },
  {
    slug: "landing-clinica-sorriso",
    title: "Landing Clinica Sorriso",
    description: "Pagina comercial para clinicas, com estrutura focada em agendamentos.",
    externalUrl: "https://sistemas-sorriso.jbhyv4.easypanel.host/",
  },
  {
    slug: "pagina-palestra-inteligencia-emocional",
    title: "Pagina Palestra Inteligencia Emocional",
    description: "Landing para eventos e palestras com foco em inscricoes e autoridade.",
    externalUrl: "https://vitorrodriguesmentor.com.br/",
  },
  {
    slug: "landing-gestgo-saude-digital",
    title: "Landing Gestgo Saude Digital",
    description: "Pagina de produto com blog e estrutura completa para captacao.",
    externalUrl: "https://gestgo.com.br/",
  },
];

const getPortfolioHref = (slug: string) => {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}portfolio/${slug}/`;
};

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-gradient-dark">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-4">
          Portfolio de sites
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Projetos prontos para acessar em um unico deploy
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-card rounded-xl p-6 border border-border/60 hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <FolderOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.description}</p>
            <a
              href={project.externalUrl ?? getPortfolioHref(project.slug)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Acessar projeto
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
