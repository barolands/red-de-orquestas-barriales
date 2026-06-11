import galleryRehearsal from "@/assets/gallery-rehearsal.jpg";
import galleryConcert from "@/assets/gallery-concert.jpg";
import geico from "@/assets/geico.jpg";
import galleryClassAlt from "@/assets/gallery-class.jpg";
import aboutOrquesta from "@/assets/about-orquesta-escenario.png";
import galleryFirst from "@/assets/gallery-first.jpg";

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

/** Agregá más fotos importando la imagen y sumando un objeto a este array. */
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: galleryFirst,
    alt: "Orquesta juvenil en escenario",
    caption: "Música en vivo en los barrios",
  },
  {
    src: galleryRehearsal,
    alt: "Jóvenes ensayando en el barrio",
    caption: "Ensayos semanales",
  },
  {
    src: galleryConcert,
    alt: "Concierto de la orquesta",
    caption: "Presentaciones en escenario",
  },
  {
    src: geico,
    alt: "Clase de música con un profesor",
    caption: "Formación musical",
  },
  {
    src: aboutOrquesta,
    alt: "Orquesta con violines, violonchelos y contrabajo",
    caption: "Nuestra orquesta",
  },
  {
    src: galleryClassAlt,
    alt: "Jóvenes en clase de música grupal",
    caption: "Aprendizaje en comunidad",
  },
];
