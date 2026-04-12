import { Heart, MessageCircle } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm opacity-10" />
      <div className="relative container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl text-primary-foreground mb-4">
          Sumate, no te quedes afuera
        </h2>
        <p className="text-primary-foreground/70 font-body text-lg mb-10">
          Tu aporte es transformador. Cada gesto cuenta, cada peso suma, cada persona que se involucra hace la diferencia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#donar"
            className="inline-flex items-center gap-2 bg-gradient-warm text-primary-foreground font-body font-semibold px-8 py-4 rounded-full text-lg shadow-warm-lg hover:scale-105 transition-transform"
          >
            <Heart className="w-5 h-5" />
            Donar ahora
          </a>
          <a
            href="https://wa.me/5493511234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold px-8 py-4 rounded-full text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
