import { Heart } from "lucide-react";

const WhyDonateSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-warm-subtle">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <Heart className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse-soft" />
        <h2 className="text-3xl md:text-5xl text-foreground mb-6">
          La música te necesita
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
          Este proyecto vive gracias al compromiso de personas como vos. Cada aporte, por pequeño que sea, permite que un niño o niña siga tocando, soñando y creciendo.
        </p>
        <p className="text-muted-foreground font-body text-lg leading-relaxed">
          Sin tu ayuda, muchos de estos chicos no tendrían acceso a un instrumento, a un profesor, ni a un espacio donde sentirse parte de algo más grande.
        </p>
      </div>
    </section>
  );
};

export default WhyDonateSection;
