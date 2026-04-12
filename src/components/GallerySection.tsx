import galleryRehearsal from "@/assets/gallery-rehearsal.jpg";
import galleryConcert from "@/assets/gallery-concert.jpg";
import galleryClass from "@/assets/gallery-class.jpg";

const items = [
  {
    src: galleryRehearsal,
    title: "Ensayos",
    caption: "Cada semana, más de 250 jóvenes se reúnen a ensayar en sus barrios.",
  },
  {
    src: galleryConcert,
    title: "Conciertos",
    caption: "Más de 50 presentaciones al año en escenarios de toda la provincia.",
  },
  {
    src: galleryClass,
    title: "Clases",
    caption: "Formación personalizada con 25 profesionales de la música.",
  },
];

const GallerySection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl text-foreground text-center mb-4">
          Lo que hacemos
        </h2>
        <p className="text-muted-foreground font-body text-center text-lg mb-14 max-w-2xl mx-auto">
          Música, educación y comunidad se encuentran en cada ensayo, cada clase y cada concierto.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-warm transition-shadow duration-300">
              <div className="overflow-hidden bg-muted">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-6 bg-background">
                <h3 className="text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
