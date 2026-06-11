import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryPhotos } from "@/data/galleryPhotos";

const PhotoGallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const open = selectedIndex !== null;
  const selected =
    selectedIndex !== null ? galleryPhotos[selectedIndex] : null;

  const goPrev = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current - 1 + galleryPhotos.length) % galleryPhotos.length;
    });
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + 1) % galleryPhotos.length;
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, goPrev, goNext]);

  return (
    <section
      id="galeria"
      className="scroll-mt-6 py-20 md:py-28 bg-gradient-warm-subtle"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl text-foreground text-center mb-4">
          Galería
        </h2>
        <p className="text-muted-foreground font-body text-center text-lg mb-14 max-w-2xl mx-auto">
          Momentos de ensayos, clases, conciertos y encuentros en los barrios de
          Córdoba.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryPhotos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm hover:shadow-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-shadow duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-300" />
              {photo.caption ? (
                <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent px-3 py-3 text-left text-xs font-body text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:text-sm">
                  {photo.caption}
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </div>

      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedIndex(null);
        }}
      >
        <DialogContent className="max-w-5xl w-[95vw] border-0 bg-transparent p-0 shadow-none overflow-visible [&>button]:text-primary-foreground [&>button]:hover:text-primary-foreground/80 [&>button]:right-2 [&>button]:top-2 md:[&>button]:right-0 md:[&>button]:-top-10">
          {selected ? (
            <>
              <DialogTitle className="sr-only">{selected.alt}</DialogTitle>
              {selected.caption ? (
                <DialogDescription className="sr-only">
                  {selected.caption}
                </DialogDescription>
              ) : null}

              <div className="relative flex items-center justify-center">
                {galleryPhotos.length > 1 ? (
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-0 z-10 -translate-x-2 md:-translate-x-14 rounded-full bg-background/90 p-2 text-foreground shadow-md hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                ) : null}

                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="max-h-[80vh] w-full rounded-2xl object-contain"
                />

                {galleryPhotos.length > 1 ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-0 z-10 translate-x-2 md:translate-x-14 rounded-full bg-background/90 p-2 text-foreground shadow-md hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label="Foto siguiente"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                ) : null}
              </div>

              {selected.caption ? (
                <p className="mt-4 text-center font-body text-sm text-primary-foreground md:text-base">
                  {selected.caption}
                </p>
              ) : null}
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotoGallerySection;
