import { MapPin } from "lucide-react";

const barrios = [
  "Chingolo", "Marqués Anexo", "Maldonado", "Campo de la Ribera", "Villa Bustos", "Yapeyú"
];

const BarriosSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-warm-subtle">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl text-foreground mb-4">
          En los barrios
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-14 max-w-2xl mx-auto">
          Llevamos la música a los lugares donde más se necesita, construyendo comunidad desde el corazón de los barrios.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {barrios.map((b, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
            >
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground font-body font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarriosSection;
