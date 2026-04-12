import heroMarca from "@/assets/hero-marca.png";
import { Heart, HandHeart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/20 pointer-events-none" />
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end shrink-0">
            <img
              src={heroMarca}
              alt="Red de Orquestas Barriales de Córdoba"
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain"
              width={960}
              height={540}
              fetchPriority="high"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left max-w-xl">
            <p className="text-muted-foreground font-body text-sm md:text-base uppercase tracking-[0.2em] mb-4 animate-fade-in">
              Red de Orquestas Barriales de Córdoba
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 animate-fade-up">
              Con la música transformamos vidas
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl lg:mx-0 mx-auto mb-10 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Más de 250 niños, niñas y jóvenes encuentran en la música una oportunidad para crecer, aprender y construir futuro.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#donar"
                className="inline-flex items-center justify-center gap-2 bg-gradient-warm text-primary-foreground font-body font-semibold px-8 py-4 rounded-full text-lg shadow-warm-lg hover:scale-105 transition-transform"
              >
                <Heart className="w-5 h-5" />
                Donar ahora
              </a>
              <a
                href="#colaborar"
                className="inline-flex items-center justify-center gap-2 border-2 border-foreground/25 text-foreground font-body font-semibold px-8 py-4 rounded-full text-lg hover:bg-muted/60 transition-colors"
              >
                <HandHeart className="w-5 h-5" />
                Quiero colaborar
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-6 h-10 border-2 border-foreground/25 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
