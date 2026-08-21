import { useState } from "react";
import { Play, X, Target, Utensils, Camera, Palette, Music2, Bus } from "lucide-react";
import weddingImg from "@/assets/event-wedding.jpg";
import gardensImg from "@/assets/mansion-gardens.jpeg";
import quinceImg from "@/assets/event-quince.jpg";
import { cn } from "@/lib/utils";

const videos = [
  { thumb: gardensImg, title: "Bienvenidos a la Mansión", youtubeId: "dQw4w9WgXcQ" },
  { thumb: weddingImg, title: "Boda de Ana y Carlos", youtubeId: "dQw4w9WgXcQ" },
  { thumb: quinceImg, title: "XV de Valeria", youtubeId: "dQw4w9WgXcQ" },
];

const services = [
  { icon: Target, name: "Wedding Planning", desc: "Planificamos tu boda al detalle. Decoración, cronograma, proveedores." },
  { icon: Utensils, name: "Catering", desc: "Menús personalizados con los mejores sabores." },
  { icon: Camera, name: "Fotografía y Video", desc: "Profesionales que capturan cada emoción." },
  { icon: Palette, name: "Decoración", desc: "Ambientes únicos que reflejan tu personalidad." },
  { icon: Music2, name: "Música y Animación", desc: "DJs, bandas en vivo, shows que encienden la fiesta." },
  { icon: Bus, name: "Transporte", desc: "Traslado para tus invitados desde la ciudad." },
];

export function Album() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <section id="album" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">
            Recuerdos
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-brown md:text-6xl text-balance">
            El Álbum del <em className="text-terracotta not-italic">Tío Loco</em>
          </h2>
          <p className="mt-6 text-lg text-brown/70">
            Fotos y videos de las mejores fiestas en la mansión.
          </p>
        </div>

        {/* Videos */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <button
              key={v.title}
              onClick={() => setOpenVideo(v.youtubeId)}
              className="group relative overflow-hidden rounded-2xl aspect-video shadow-soft hover:shadow-elegant transition-all"
            >
              <img src={v.thumb} alt={v.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-brown/90 via-brown/30 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid size-16 place-items-center rounded-full bg-terracotta/90 text-cream shadow-elegant transition-transform group-hover:scale-110">
                  <Play className="size-6 ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <div className="text-cream font-serif text-lg font-semibold">{v.title}</div>
                <div className="text-cream/70 text-xs uppercase tracking-wider mt-1">Ver video →</div>
              </div>
            </button>
          ))}
        </div>

        {/* Services */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-olive font-semibold">
              Todo incluido
            </span>
            <h3 className="mt-3 font-serif text-3xl font-bold text-brown md:text-4xl">
              Nuestros Servicios
            </h3>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-cream/40 p-8 transition-all hover:border-terracotta hover:shadow-elegant hover:-translate-y-1"
              >
                <div className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-terracotta to-brown text-cream mb-5 shadow-soft group-hover:scale-110 transition-transform">
                  <s.icon className="size-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-brown">{s.name}</h4>
                <p className="mt-2 text-sm text-brown/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video lightbox */}
      {openVideo && (
        <div
          onClick={() => setOpenVideo(null)}
          className={cn(
            "fixed inset-0 z-100 grid place-items-center bg-brown/90 backdrop-blur-md p-4 animate-fade-in-slow",
          )}
        >
          <button
            onClick={() => setOpenVideo(null)}
            className="absolute top-6 right-6 grid size-12 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
            aria-label="Cerrar"
          >
            <X className="size-6" />
          </button>
          <div className="w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${openVideo}?autoplay=1`}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-xl shadow-elegant"
            />
          </div>
        </div>
      )}
    </section>
  );
}
