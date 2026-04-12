import { Heart } from "lucide-react";

const tiers = [
  { amount: "$15.000", desc: "Materiales didácticos para un mes", color: "from-warm-amber/20 to-warm-cream" },
  { amount: "$20.000", desc: "Meriendas para un grupo de ensayo", color: "from-primary/20 to-warm-cream" },
  { amount: "$30.000", desc: "Reparación de un instrumento", color: "from-warm-amber/20 to-warm-cream" },
  { amount: "$40.000", desc: "Una hora de ensayo completa", color: "from-primary/20 to-warm-cream" },
  { amount: "$50.000", desc: "Formación mensual de un joven", color: "from-warm-amber/20 to-warm-cream", highlight: true },
  { amount: "$150.000", desc: "Financiamiento integral mensual", color: "from-primary/20 to-warm-cream", highlight: true },
];

const DonationTiersSection = () => {
  return (
    <section id="montos-impacto" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl text-foreground text-center mb-4">
          Tu aporte genera impacto
        </h2>
        <p className="text-muted-foreground font-body text-center text-lg mb-14 max-w-2xl mx-auto">
          Elegí cómo querés ayudar. Cada peso se convierte en música, educación y futuro.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-warm-lg ${
                tier.highlight
                  ? "border-primary bg-gradient-to-br from-primary/10 to-warm-amber/10 shadow-warm"
                  : "border-border bg-background shadow-sm"
              }`}
            >
              <div className="text-3xl md:text-4xl font-display text-gradient-warm mb-3">
                {tier.amount}
              </div>
              <p className="text-foreground font-body text-base leading-relaxed">{tier.desc}</p>
              <a
                href="#donar"
                className="inline-flex items-center gap-2 mt-6 text-primary font-body font-semibold text-sm hover:underline"
              >
                <Heart className="w-4 h-4" />
                Donar este monto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationTiersSection;
