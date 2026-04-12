const stats = [
  { number: "+250", label: "niños y jóvenes" },
  { number: "25", label: "profesionales" },
  { number: "+50", label: "conciertos al año" },
  { number: "15", label: "jóvenes profesionalizándose" },
];

const ImpactSection = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm opacity-10" />
      <div className="relative container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl text-primary-foreground mb-4">
          Nuestro impacto
        </h2>
        <p className="text-primary-foreground/70 font-body text-lg mb-14 max-w-2xl mx-auto">
          Cada número representa una historia de transformación, esperanza y futuro.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="group">
              <div className="text-5xl md:text-6xl lg:text-7xl font-display text-gradient-warm mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <p className="text-primary-foreground/70 font-body text-base md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
