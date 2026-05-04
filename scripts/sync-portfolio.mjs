import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const portfolioRoot = path.resolve(rootDir, "..", "portifolio");
const outputRoot = path.resolve(rootDir, "public", "portfolio");

const projects = [
  { source: "zion-structure", slug: "site-institucional-premium" },
  { source: "zion-tech-landing", slug: "landing-comercial-zion-tech" },
  { source: "v-rtice-construction-hub", slug: "site-construcao-alta-conversao" },
  { source: "smile-page-builder", slug: "landing-clinica-sorriso" },
];
const staticProjects = [
  { source: "vitor-palestra", slug: "pagina-palestra-inteligencia-emocional" },
  { source: "gestgo-landing", slug: "landing-gestgo-saude-digital" },
];

const run = (command, cwd) => {
  execSync(command, {
    cwd,
    stdio: "inherit",
    shell: true,
  });
};

const walkFiles = (dir, extensions, files = []) => {
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      walkFiles(fullPath, extensions, files);
      continue;
    }

    if (extensions.includes(path.extname(fullPath).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
};

const normalizeStaticLinks = (projectOut, slug) => {
  const files = walkFiles(projectOut, [".html", ".js", ".css"]);
  const base = `/portfolio/${slug}`;
  const routeTargets = [
    "/assets/",
    "/blog/",
    "/comece/",
    "/privacidade/",
    "/termos-de-uso/",
    "/l/",
    "/favicon-96x96.png",
    "/favicon.svg",
    "/favicon.ico",
    "/apple-touch-icon.png",
    "/site.webmanifest",
  ];

  for (const filePath of files) {
    const content = readFileSync(filePath, "utf8");
    let nextContent = content;

    for (const route of routeTargets) {
      nextContent = nextContent.replaceAll(`"${route}`, `"${base}${route}`);
      nextContent = nextContent.replaceAll(`'${route}`, `'${base}${route}`);
      nextContent = nextContent.replaceAll(`(${route}`, `(${base}${route}`);
    }

    // Home relativo do site estatico
    nextContent = nextContent.replaceAll('href="/"', `href="${base}/"`);
    nextContent = nextContent.replaceAll("href='/'", `href='${base}/'`);

    if (nextContent !== content) {
      writeFileSync(filePath, nextContent, "utf8");
    }
  }
};

// Limpa tudo antes de sincronizar para evitar pastas antigas/duplicadas.
rmSync(outputRoot, { recursive: true, force: true });
mkdirSync(outputRoot, { recursive: true });

for (const project of projects) {
  const projectDir = path.join(portfolioRoot, project.source);
  const projectOut = path.join(outputRoot, project.slug);

  if (!existsSync(projectDir)) {
    console.warn(`[portfolio] Projeto nao encontrado: ${projectDir}`);
    continue;
  }

  const distDir = path.join(projectDir, "dist");
  const basePath = `/portfolio/${project.slug}/`;

  console.log(`\n[portfolio] Buildando ${project.source} com base ${basePath}`);
  run("npm install", projectDir);
  run(`npm run build -- --base=${basePath}`, projectDir);

  if (!existsSync(distDir)) {
    throw new Error(`[portfolio] Build sem pasta dist: ${project.source}`);
  }

  rmSync(projectOut, { recursive: true, force: true });
  cpSync(distDir, projectOut, { recursive: true });
  console.log(`[portfolio] Copiado para ${projectOut}`);
}

for (const project of staticProjects) {
  const projectDir = path.join(portfolioRoot, project.source);
  const projectOut = path.join(outputRoot, project.slug);

  if (!existsSync(projectDir)) {
    console.warn(`[portfolio] Projeto estatico nao encontrado: ${projectDir}`);
    continue;
  }

  console.log(`\n[portfolio] Copiando estatico ${project.source}`);
  rmSync(projectOut, { recursive: true, force: true });
  cpSync(projectDir, projectOut, {
    recursive: true,
    filter: (source) => !source.includes(`${path.sep}.git${path.sep}`) && !source.endsWith(`${path.sep}.git`),
  });
  normalizeStaticLinks(projectOut, project.slug);
  console.log(`[portfolio] Copiado para ${projectOut}`);
}

console.log("\n[portfolio] Sincronizacao concluida.");
