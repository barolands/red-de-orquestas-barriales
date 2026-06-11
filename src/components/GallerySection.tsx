import galleryRehearsal from "@/assets/gallery-rehearsal.jpg";
import galleryConcert from "@/assets/gallery-concert.jpg";
import galleryClass from "@/assets/gallery-class.jpeg";

/** URL, ID de video o canal de YouTube. Vacío = se muestra la imagen de la tarjeta. */
const ENSAYOS_YOUTUBE_URL_OR_ID =
  "https://www.youtube.com/@Reddeorquestas-s5z/videos";
const CONCIERTOS_YOUTUBE_URL_OR_ID =
  "https://www.youtube.com/shorts/lUm7GY5Ccug";

/** Video destacado en @Reddeorquestas-s5z/videos */
const RED_ORQUESTAS_FEATURED_VIDEO = "vExMEXcYXOA";
/** Playlist de subidas del canal @Reddeorquestas-s5z (UC → UU). */
const RED_ORQUESTAS_UPLOADS_PLAYLIST = "UUDe37a7QhIrmv9z4YQvIDSw";

type YoutubeEmbed =
  | { type: "video"; id: string }
  | { type: "playlist"; id: string };

function parseYoutubeVideoId(raw: string): string | undefined {
  const s = raw.trim();
  if (!s) return undefined;
  if (/^[\w-]{11}$/.test(s)) return s;
  const m = s.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  return m?.[1];
}

function parseYoutubeEmbed(raw: string): YoutubeEmbed | undefined {
  const s = raw.trim();
  if (!s) return undefined;

  const channelMatch = s.match(/youtube\.com\/channel\/(UC[\w-]+)/);
  if (channelMatch) {
    return { type: "playlist", id: `UU${channelMatch[1].slice(2)}` };
  }

  if (/youtube\.com\/@Reddeorquestas-s5z\/videos/i.test(s)) {
    return { type: "video", id: RED_ORQUESTAS_FEATURED_VIDEO };
  }

  if (/youtube\.com\/@Reddeorquestas-s5z/i.test(s)) {
    return { type: "playlist", id: RED_ORQUESTAS_UPLOADS_PLAYLIST };
  }

  const videoId = parseYoutubeVideoId(s);
  if (videoId) return { type: "video", id: videoId };

  return undefined;
}

function youtubeEmbedSrc(embed: YoutubeEmbed): string {
  if (embed.type === "playlist") {
    return `https://www.youtube.com/embed/videoseries?list=${embed.id}&rel=0`;
  }
  return `https://www.youtube.com/embed/${embed.id}?rel=0`;
}

type GalleryItem =
  | {
      kind: "youtube";
      embed: YoutubeEmbed;
      title: string;
      caption: string;
    }
  | {
      kind: "image";
      src: string;
      title: string;
      caption: string;
    };

const ensayosYoutubeEmbed =
  parseYoutubeEmbed(ENSAYOS_YOUTUBE_URL_OR_ID) ??
  parseYoutubeEmbed(
    (import.meta.env.VITE_ENSAYOS_YOUTUBE_URL_OR_ID as string | undefined) ?? ""
  );

const conciertosYoutubeEmbed =
  parseYoutubeEmbed(CONCIERTOS_YOUTUBE_URL_OR_ID) ??
  parseYoutubeEmbed(
    (import.meta.env.VITE_CONCIERTOS_YOUTUBE_URL_OR_ID as string | undefined) ??
      ""
  );

const items: GalleryItem[] = [
  ensayosYoutubeEmbed
    ? {
        kind: "youtube",
        embed: ensayosYoutubeEmbed,
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
  conciertosYoutubeEmbed
    ? {
        kind: "youtube",
        embed: conciertosYoutubeEmbed,
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
                      src={youtubeEmbedSrc(item.embed)}
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
