import { Music, Users, Heart, Shield } from "lucide-react";

const missions = [
  { icon: Music, title: "Acercar la música", text: "A niños y jóvenes de barrios populares, sin costo alguno." },
  { icon: Users, title: "Promover valores", text: "Trabajo en equipo, compromiso, constancia y disciplina." },
  { icon: Heart, title: "Generar contención", text: "Espacios seguros de pertenencia y desarrollo emocional." },
  { icon: Shield, title: "Fortalecer el tejido social", text: "Construir comunidad a través del arte y la cultura." },
];

const MissionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-warm-subtle">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl text-foreground text-center mb-4">
          Nuestra misión
        </h2>
        <p className="text-muted-foreground font-body text-center text-lg mb-14 max-w-2xl mx-auto">
          Transformar vidas a través de la música, creando oportunidades donde más se necesitan.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((m, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-warm transition-shadow duration-300 text-center group"
            >
              <div className="w-14 h-14 bg-gradient-warm rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <m.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl text-foreground mb-2">{m.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
