const Footer = () => (
  <footer className="border-t border-border/50 py-12 px-6">
    <div className="max-w-4xl mx-auto text-center space-y-4">
      <p className="font-heading text-lg font-semibold text-foreground">
        Zion Tech
      </p>
      <p className="text-sm text-muted-foreground font-body">
        Software inteligente e automação com IA
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground font-body">
        <span>contato@ziontech.com.br</span>
        <span className="hidden sm:inline text-border">|</span>
        <span>+55 (11) 9999-0000</span>
        <span className="hidden sm:inline text-border">|</span>
        <span>São Paulo, SP</span>
      </div>
      <p className="text-xs text-muted-foreground/60 pt-4">
        © {new Date().getFullYear()} Zion Tech. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
