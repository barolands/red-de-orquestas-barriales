import { UserPlus, Guitar, Baby, Building2, CalendarHeart } from "lucide-react";

const ways = [
  { icon: UserPlus, title: "Socio mensual", desc: "Acompañá el proyecto con un aporte fijo cada mes." },
  { icon: Guitar, title: "Madrina/Padrino de instrumento", desc: "Adoptá un instrumento y hacé que suene para siempre." },
  { icon: Baby, title: "Madrina/Padrino de niño/a", desc: "Acompañá la formación de un joven músico." },
  { icon: Building2, title: "Aliado cultural (empresas)", desc: "Sumá tu empresa a una causa que transforma." },
  { icon: CalendarHeart, title: "Patrocinador de eventos", desc: "Hacé posible un concierto, un encuentro, una fiesta." },
];

const CollaborateSection = () => {
  return (
    <section id="colaborar" className="py-20 md:py-28 bg-gradient-warm-subtle">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-5xl text-foreground text-center mb-14">
          Formas de colaborar
        </h2>
        <div className="space-y-4">
          {ways.map((w, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-6 md:p-8 flex items-start gap-5 shadow-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center flex-shrink-0">
                <w.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-display text-foreground mb-1">{w.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
