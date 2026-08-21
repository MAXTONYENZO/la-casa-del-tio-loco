import { useState, useEffect } from "react"; // ✅ Agregar useState y useEffect
import { Play, X } from "lucide-react"; // ✅ Agregar Play y X
import interiorImg from "@/assets/mansion-interior.jpeg";
import gardensImg from "@/assets/mansion-gardens.jpeg";
import chapelImg from "@/assets/mansion-chapel.jpeg";
import { Church, Users, Trees, Car, Music, Sunset } from "lucide-react";

export function Welcome() {
  // ✅ Agregar estado para el video
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // ✅ Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ✅ Bloquear scroll cuando el video está abierto
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen]);

  const cards = [
    { icon: "🏰", label: "Nuestra Casa", href: "#mansion" },
    { icon: "🎉", label: "Las Fiestas", href: "#fiestas" },
    { icon: "📸", label: "El Álbum", href: "#album" },
    { icon: "📝", label: "Apúntate", href: "#apuntate" },
  ];

  return (
    <>
      <section id="bienvenida" className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">
                Saludos
              </span>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-brown md:text-5xl text-balance">
                Bienvenidos a <em className="text-terracotta not-italic">La Casa del Tío Loco</em>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-brown/80">
                Un espacio único donde la elegancia y la naturaleza se encuentran para crear
                eventos inolvidables. Aquí no hay protocolo rígido, solo{" "}
                <span className="font-semibold text-olive">buena energía</span>,{" "}
                <span className="font-semibold text-olive">lujo con alma</span> y la mejor
                fiesta de tu vida.
              </p>

              {/* ✅ BOTÓN VER VIDEO */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="mt-6 group inline-flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream shadow-elegant transition-all hover:bg-terracotta/90 hover:scale-105"
              >
                <Play className="size-5 transition-transform group-hover:scale-110" fill="currentColor" />
                Ver video promocional
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl border-2 border-gold/40 -rotate-2" />
              <img
                src={gardensImg}
                alt="Salón principal de la mansión"
                width={1400}
                height={1000}
                loading="lazy"
                className="relative rounded-xl shadow-elegant object-cover aspect-4/3 w-full"
              />
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {cards.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 text-center transition-all hover:shadow-elegant hover:-translate-y-1 hover:border-terracotta"
              >
                <div className="text-4xl">{c.icon}</div>
                <div className="mt-3 font-serif text-lg font-semibold text-brown group-hover:text-terracotta transition-colors">
                  {c.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ MODAL DE VIDEO EN PANTALLA COMPLETA */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-14 right-0 text-cream/80 hover:text-cream transition-colors p-2"
              aria-label="Cerrar video"
            >
              <X className="size-8" />
            </button>

            {/* Video */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                className="h-full w-full object-contain"
                controls
                autoPlay
                playsInline
              >
                <source src="/videos/promocional.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>

            {/* Indicador táctil */}
            <p className="mt-4 text-center text-xs text-cream/40">
              Toca fuera del video para cerrar
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export function Mansion() {
  const features = [
    { icon: Users, label: "Aforo", detail: "Hasta 300 invitados sentados" },
    { icon: Trees, label: "Área", detail: "2,500 m²" },
    { icon: Church, label: "Capilla", detail: "Capilla propia para 100 personas" },
    { icon: Car, label: "Estacionamiento", detail: "Privado para 150 vehículos" },
    { icon: Music, label: "Sonido", detail: "Sistema profesional incluido" },
    { icon: Sunset, label: "Atardecer", detail: "Vista privilegiada al ocaso" },
  ];

  return (
    <section id="mansion" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">
            El lugar
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-brown md:text-6xl text-balance">
            La Casa del <em className="text-terracotta not-italic">Tío Loco</em>
          </h2>
          <p className="mt-6 text-lg text-brown/70 leading-relaxed">
            No es un lugar cualquiera. Es la casa de ese tío excéntrico y genial
            que todos quisiéramos tener. Construida en este año 2026, será testigo de las
            mejores fiestas de la región.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-16 grid gap-4 md:grid-cols-3 md:grid-rows-2 md:h-150">
          <img
            src={gardensImg}
            alt="Jardines de la mansión"
            width={1400}
            height={1000}
            loading="lazy"
            className="md:col-span-2 md:row-span-2 h-64 md:h-full w-full object-cover rounded-xl shadow-soft"
          />
          <img
            src={chapelImg}
            alt="Capilla de la mansión"
            width={1200}
            height={900}
            loading="lazy"
            className="h-48 md:h-full w-full object-cover rounded-xl shadow-soft"
          />
          <img
            src={interiorImg}
            alt="Interior de la mansión"
            width={1400}
            height={1000}
            loading="lazy"
            className="h-48 md:h-full w-full object-cover rounded-xl shadow-soft"
          />
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.label}
              className="group flex gap-4 items-start rounded-xl border border-border bg-cream/50 p-6 transition-all hover:border-terracotta hover:shadow-soft"
            >
              <div className="grid size-12 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta group-hover:bg-terracotta group-hover:text-cream transition-colors">
                <f.icon className="size-6" />
              </div>
              <div className="min-w-0">
                <div className="font-serif text-lg font-semibold text-brown">{f.label}</div>
                <div className="text-sm text-brown/70 mt-1">{f.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
<div className="mt-16 overflow-hidden rounded-2xl border border-border shadow-elegant">
  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
    <iframe
      title="Ubicación de La Casa del Tío Loco"
            
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1763.7495593896924!2d-75.20701010403084!3d-12.035065293791988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjr.%20santa%20b%C3%A1rbara%20n%C2%B0379%20-%20anexo%20de%20aza!5e0!3m2!1ses!2spe!4v1787282085259!5m2!1ses!2spe" 
      
      
      className="absolute top-0 left-0 w-full h-full"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
</div>
      </div>
    </section>
  );
}
