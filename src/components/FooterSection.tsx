const FooterSection = () => {
  return (
    <footer className="py-8 bg-warm-dark text-center">
      <p className="text-primary-foreground/50 font-body text-sm">
        © {new Date().getFullYear()} Red de Orquestas Barriales de Córdoba. Con la música transformamos vidas.
      </p>
    </footer>
  );
};

export default FooterSection;
