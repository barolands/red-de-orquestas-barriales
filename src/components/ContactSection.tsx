import { Mail, MessageCircle, CreditCard } from "lucide-react";

/** Contorno tipo glifo de Instagram (rect + lente + punto), coherente con iconos en trazo. */
const InstagramGlyph = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4.25" />
    <circle cx="17.5" cy="6.5" r="1.25" />
  </svg>
);

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-gradient-warm-subtle">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl text-foreground text-center mb-14">
          Datos para donar
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div id="donar" className="scroll-mt-6 bg-background rounded-2xl p-8 border border-border shadow-sm">
            <CreditCard className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-display text-foreground mb-3">Transferencia bancaria</h3>
            <div className="space-y-2 font-body text-sm">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">CBU:</span> 19105013-55050100451750
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Alias:</span> Tocar2026
              </p>
            </div>
          </div>
          <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-display text-foreground mb-3">Contacto</h3>
            <div className="space-y-2 font-body text-sm">
              <a href="mailto:ftocarparavivir@gmail.com" className="text-primary hover:underline block">
                ftocarparavivir@gmail.com
              </a>
              <a
                href="https://wa.me/5493515582258"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://instagram.com/redeorquestasbarriales"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram: redeorquestasbarriales"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-sm transition-colors"
          >
            <InstagramGlyph className="w-5 h-5 shrink-0" />
            redeorquestasbarriales
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
