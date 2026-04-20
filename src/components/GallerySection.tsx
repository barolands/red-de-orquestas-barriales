import galleryRehearsal from "@/assets/gallery-rehearsal.jpg";
import galleryConcert from "@/assets/gallery-concert.jpg";
import galleryClass from "@/assets/gallery-class.jpeg";

/** URL o ID de YouTube. Vacío = se muestra la imagen de la tarjeta. */
const ENSAYOS_YOUTUBE_URL_OR_ID = "https://youtu.be/dfT-AAWomTQ";
const CONCIERTOS_YOUTUBE_URL_OR_ID =
  "https://youtube.com/shorts/bJQTI6pbFxc";

function parseYoutubeVideoId(raw: string): string | undefined {
  const s = raw.trim();
  if (!s) return undefined;
  if (/^[\w-]{11}$/.test(s)) return s;
  const m = s.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  return m?.[1];
}

type GalleryItem =
  | {
      kind: "youtube";
      videoId: string;
      title: string;
      caption: string;
    }
  | {
      kind: "image";
      src: string;
      title: string;
      caption: string;
    };

const ensayosYoutubeId =
  parseYoutubeVideoId(ENSAYOS_YOUTUBE_URL_OR_ID) ??
  parseYoutubeVideoId(
    (import.meta.env.VITE_ENSAYOS_YOUTUBE_URL_OR_ID as string | undefined) ?? ""
  );

const conciertosYoutubeId =
  parseYoutubeVideoId(CONCIERTOS_YOUTUBE_URL_OR_ID) ??
  parseYoutubeVideoId(
    (import.meta.env.VITE_CONCIERTOS_YOUTUBE_URL_OR_ID as string | undefined) ??
      ""
  );

const items: GalleryItem[] = [
  ensayosYoutubeId
    ? {
        kind: "youtube",
        videoId: ensayosYoutubeId,
        title: "Ensayos",
        caption:
          "Cada semana, más de 250 jóvenes se reúnen a ensayar en sus barrios.",
      }
    : {
        kind: "image",
        src: galleryRehearsal,
        title: "Ensayos",
        caption:
          "Cada semana, más de 250 jóvenes se reúnen a ensayar en sus barrios.",
      },
  conciertosYoutubeId
    ? {
        kind: "youtube",
        videoId: conciertosYoutubeId,
        title: "Conciertos",
        caption:
          "Más de 50 presentaciones al año en escenarios de toda la provincia.",
      }
    : {
        kind: "image",
        src: galleryConcert,
        title: "Conciertos",
        caption:
          "Más de 50 presentaciones al año en escenarios de toda la provincia.",
      },
  {
    kind: "image",
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
                {item.kind === "youtube" ? (
                  <div className="relative w-full h-64 overflow-hidden">
                    <iframe
                      title={`Video: ${item.title}`}
                      src={`https://www.youtube.com/embed/${item.videoId}?rel=0`}
                      className="absolute left-0 -top-14 w-full h-[calc(100%+3.5rem)] border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                )}
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
