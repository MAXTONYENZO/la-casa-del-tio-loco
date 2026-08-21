import heroImg from "@/assets/portada.jpeg";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Fachada de La Casa del Tío Loco al atardecer"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover brightness-100 contrast-90 saturate-130"
      />

      <div className="absolute inset-0 bg-brown/5" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-up">
        {/* ✅ Text-shadow sin espacio después de los dos puntos */}
        <p className="mx-auto mt-60 max-w-2xl text-lg md:text-xl text-balance [text-shadow:0_2px_15px_rgba(0,0,0,0.3)]">
          <span className="text-brown font-medium">Elegancia en tu evento.</span>{" "}
          Fiestas inolvidables para{" "}
          <span className="text-terracotta font-semibold [text-shadow:0_2px_15px_rgba(0,0,0,0.2)]">
            extrovertidos como tú
          </span>.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#mansion"
            className="group relative inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream shadow-elegant transition-all hover:bg-terracotta/90 hover:scale-105"
          >
            Descubre nuestra casa
          </a>
          <a
            href="#apuntate"
            className="inline-flex items-center justify-center rounded-full border-2 border-cream/80 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream backdrop-blur-sm transition-all hover:bg-cream hover:text-brown"
          >
            Apúntate
          </a>
        </div>
      </div>

      <a
        href="#bienvenida"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/80 hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2 animate-float-down">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll down</span>
          <ChevronDown className="size-5" />
        </div>
      </a>
    </section>
  );
}