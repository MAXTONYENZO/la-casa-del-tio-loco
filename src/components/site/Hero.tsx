import heroImg from "@/assets/portada.jpeg";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 h-full w-full">
        <img
          src={heroImg}
          alt="Fachada de La Casa del Tío Loco al atardecer"
          className="h-full w-full object-cover brightness-75 contrast-90 saturate-130"
          loading="eager"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown/30 via-transparent to-brown/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center animate-fade-up">
        {/* Aumentamos el margen superior para bajar el texto */}
        <div className="mt-24 sm:mt-44 md:mt-64 lg:mt-72">
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-balance [text-shadow:0_2px_15px_rgba(0,0,0,0.4)] text-cream/90">
            <span className="font-medium text-cream">Nuestra esencia.</span>{" "}
            Celebrar la locura más bonita de todas:{" "}
            <span className="font-semibold text-gold [text-shadow:0_2px_15px_rgba(0,0,0,0.3)]">
              ESTAR JUNTOS
            </span>.
          </p>

          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#mansion"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-5 sm:px-8 py-2.5 sm:py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-cream shadow-elegant transition-all hover:bg-terracotta/90 hover:scale-105 whitespace-nowrap"
            >
              Descubre nuestra casa
            </a>
            <a
              href="#apuntate"
              className="inline-flex items-center justify-center rounded-full border-2 border-cream/80 px-5 sm:px-8 py-2.5 sm:py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-cream backdrop-blur-sm transition-all hover:bg-cream hover:text-brown whitespace-nowrap"
            >
              Apúntate
            </a>
          </div>
        </div>
      </div>

      <a
        href="#bienvenida"
        className="absolute bottom-4 sm:bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70 hover:text-gold transition-colors hidden xs:flex"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2 animate-float-down">
          <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="size-4 sm:size-5" />
        </div>
      </a>
    </section>
  );
}