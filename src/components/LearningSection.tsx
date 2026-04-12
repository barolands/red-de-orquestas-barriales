const instruments = [
  "🎻 Violín", "🎻 Viola", "🎻 Violoncello", "🎻 Contrabajo",
  "🎹 Piano", "🪗 Bandoneón", "🎺 Viento"
];

const LearningSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-foreground mb-4">
            Aprender música es mucho más
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            Cada instrumento abre una puerta. No solo aprenden a tocar: aprenden a escuchar, a esperar, a confiar en el otro. La música les enseña que juntos suenan mejor.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {instruments.map((inst, i) => (
              <span
                key={i}
                className="bg-card border border-border rounded-full px-5 py-2.5 font-body text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                {inst}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground font-body text-base italic">
            "La música no solo transforma a quien la toca, sino a toda la comunidad que la rodea."
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
