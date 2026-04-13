import { MessageCircle } from "lucide-react";

/** Tu WhatsApp: solo dígitos, código país + número (sin +). Ej.: 5493512345678 */
const BAROLANDS_WHATSAPP = "";

const barolandsWaDigits = BAROLANDS_WHATSAPP.replace(/\D/g, "");
const barolandsWaHref =
  barolandsWaDigits.length >= 10
    ? `https://wa.me/${barolandsWaDigits}?text=${encodeURIComponent(
        "Hola, me interesa una página como la de Red de Orquestas Barriales.",
      )}`
    : null;

const FooterSection = () => {
  return (
    <footer className="py-8 md:py-10 bg-warm-dark text-primary-foreground/90">
      <div className="container mx-auto px-4 max-w-6xl space-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <p className="font-body text-sm text-primary-foreground/60 text-center md:text-left md:max-w-md">
            Desde las sierras hecha con amor por Barolands.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-end sm:gap-4 md:text-right">
            <p className="font-body text-sm text-primary-foreground/80 text-center sm:text-left">
              ¿Querés una página como esta?
            </p>
            {barolandsWaHref ? (
              <a
                href={barolandsWaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp
              </a>
            ) : (
              <span
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-2.5 text-xs text-primary-foreground/50"
                title="Completá BAROLANDS_WHATSAPP en FooterSection.tsx con tu número"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Agregá tu número en el código
              </span>
            )}
          </div>
        </div>
        <p className="border-t border-primary-foreground/10 pt-6 text-center font-body text-sm text-primary-foreground/50 md:text-left">
          © {new Date().getFullYear()} Red de Orquestas Barriales de Córdoba. Con la música
          transformamos vidas.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
