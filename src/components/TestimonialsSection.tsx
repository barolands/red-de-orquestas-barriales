import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "La orquesta me dio un lugar donde siento que pertenezco. Antes no sabía qué hacer con mi tiempo, ahora tengo un sueño.",
    name: "Lucas, 16 años",
    role: "Alumno de violoncello",
  },
  {
    quote: "Ver cómo mi hija se transforma con cada ensayo, cómo gana confianza y amigos... no tiene precio.",
    name: "María, mamá de alumna",
    role: "Barrio Chingolo",
  },
  {
    quote: "Enseñar acá me recuerda por qué elegí la música. Estos chicos tienen una pasión increíble.",
    name: "Prof. Carolina",
    role: "Docente de violín",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl text-foreground text-center mb-14">
          Voces que inspiran
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-warm transition-shadow duration-300 relative"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground font-body text-base leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-foreground font-body font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground font-body text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
