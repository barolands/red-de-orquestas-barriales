import { Mail, MessageCircle, CreditCard } from "lucide-react";

const InstagramGlyph = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zm12.406-5.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
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
