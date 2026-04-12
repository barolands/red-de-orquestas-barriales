import heroImage from "@/assets/hero-orchestra.jpg";
import { Heart, HandHeart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Niños y jóvenes tocando instrumentos en una orquesta barrial"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <p className="text-primary-foreground/80 font-body text-sm md:text-base uppercase tracking-[0.2em] mb-4 animate-fade-in">
          Red de Orquestas Barriales de Córdoba
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up">
          Con la música transformamos vidas
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 font-body max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Más de 250 niños, niñas y jóvenes encuentran en la música una oportunidad para crecer, aprender y construir futuro.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#donar"
            className="inline-flex items-center gap-2 bg-gradient-warm text-primary-foreground font-body font-semibold px-8 py-4 rounded-full text-lg shadow-warm-lg hover:scale-105 transition-transform"
          >
            <Heart className="w-5 h-5" />
            Donar ahora
          </a>
          <a
            href="#colaborar"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold px-8 py-4 rounded-full text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            <HandHeart className="w-5 h-5" />
            Quiero colaborar
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
