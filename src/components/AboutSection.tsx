import aboutOrquestaEscenario from "@/assets/about-orquesta-escenario.png";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-warm">
            <img
              src={aboutOrquestaEscenario}
              alt="Orquesta juvenil con violines, violonchelos y contrabajo en escenario"
              className="w-full h-80 md:h-[450px] object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl text-foreground mb-6">
              ¿Quiénes somos?
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
              Somos una iniciativa social y cultural que brinda acceso gratuito a formación musical a niños, niñas y jóvenes de barrios populares de Córdoba.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Creemos que la música es una herramienta poderosa de transformación social. A través de ella, generamos espacios de encuentro, aprendizaje y contención, donde cada joven descubre su potencial y construye un camino de oportunidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
