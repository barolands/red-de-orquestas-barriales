import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const StickyDonateButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#donar"
      className="fixed bottom-6 right-6 z-50 bg-gradient-warm text-primary-foreground font-body font-semibold px-6 py-3 rounded-full shadow-warm-lg hover:scale-105 transition-transform flex items-center gap-2 animate-fade-in"
    >
      <Heart className="w-5 h-5" />
      <span className="hidden sm:inline">Donar</span>
    </a>
  );
};

export default StickyDonateButton;
