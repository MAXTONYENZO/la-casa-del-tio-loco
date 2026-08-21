import { useMemo, useState } from "react";
import weddingImg from "@/assets/event-wedding.jpg";
import quinceImg from "@/assets/event-quince.jpg";
import birthdayImg from "@/assets/event-birthday.jpg";
import corporateImg from "@/assets/event-corporate.jpg";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type EventKind = "Bodas" | "15 Años" | "Cumpleaños" | "Corporativos";

const events: {
  img: string;
  kind: EventKind;
  name: string;
  date: string;
  description: string;
}[] = [
  { img: weddingImg, kind: "Bodas", name: "Boda de Ana y Carlos", date: "Marzo 2025", description: "300 invitados, ceremonia en la capilla y recepción en los jardines bajo las estrellas." },
  { img: quinceImg, kind: "15 Años", name: "Los XV de Valeria", date: "Julio 2025", description: "Vals en el salón principal, DJ hasta el amanecer y un pastel de tres pisos inolvidable." },
  { img: birthdayImg, kind: "Cumpleaños", name: "50 años de Roberto", date: "Enero 2025", description: "Una noche mágica con luces de colores, banda en vivo y sorpresas para todos los invitados." },
  { img: corporateImg, kind: "Corporativos", name: "Gala Empresa XYZ", date: "Diciembre 2024", description: "Cóctel de fin de año en las terrazas con más de 200 ejecutivos y networking premium." },
  { img: weddingImg, kind: "Bodas", name: "Boda de Sofía y Luis", date: "Noviembre 2024", description: "Ceremonia íntima con vista al atardecer y cena bajo un cielo lleno de faroles." },
  { img: quinceImg, kind: "15 Años", name: "Los XV de Camila", date: "Septiembre 2024", description: "Temática vintage, decoración en dorado y una entrada triunfal con carruaje." },
];

const filters: (EventKind | "Todas")[] = ["Todas", "Bodas", "15 Años", "Cumpleaños", "Corporativos"];

const testimonials = [
  { text: "El Tío Loco fue testigo de nuestra boda única. Nuestros invitados aún hablan de la fiesta.", author: "Luisa y Carlos" },
  { text: "Mi fiesta de 15 años fue un sueño hecho realidad. La casa del tío Loco es espectacular y el equipo humano, un lujo.", author: "Valeria" },
  { text: "Nuestro evento corporativo fue todo un éxito.", author: "Bennu Productora" },
];

export function Fiestas() {
  const [active, setActive] = useState<(EventKind | "Todas")>("Todas");

  const filtered = useMemo(
    () => (active === "Todas" ? events : events.filter((e) => e.kind === active)),
    [active],
  );

  return (
    <section id="fiestas" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">
            Las celebraciones
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-brown md:text-6xl text-balance">
            Las Fiestas del <em className="text-terracotta not-italic">Tío Loco</em>
          </h2>
          <p className="mt-6 text-lg text-brown/70">
            En "La Casa del Tío Loco" no hacemos eventos aburridos. Hacemos fiestas que se
            recuerdan por siempre. Bodas, 15 años, cumpleaños, celebraciones corporativas...
            cualquier excusa es buena para celebrar.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all border",
                active === f
                  ? "bg-terracotta text-cream border-terracotta shadow-soft"
                  : "border-brown/20 text-brown hover:border-terracotta hover:text-terracotta",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid (masonry-ish) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e, i) => (
            <article
              key={`${e.name}-${i}`}
              className="group overflow-hidden rounded-2xl bg-background shadow-soft transition-all hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-4/3">
                <img
                  src={e.img}
                  alt={e.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream">
                  {e.kind}
                </span>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-olive font-semibold">
                  {e.date}
                </div>
                <h3 className="mt-2 font-serif text-xl font-bold text-brown">{e.name}</h3>
                <p className="mt-2 text-sm text-brown/70 leading-relaxed line-clamp-2">
                  {e.description}
                </p>
                <button className="mt-4 text-sm font-semibold text-terracotta hover:text-brown transition-colors uppercase tracking-wider">
                  Ver historia →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Testimonials */}
        <Testimonials />
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <div className="mt-24 rounded-3xl bg-brown text-cream p-8 md:p-16 shadow-elegant relative overflow-hidden">
      <Quote className="absolute top-6 left-6 size-16 text-gold/20" />
      <div className="relative text-center max-w-3xl mx-auto min-h-40">
        <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-balance">
          "{t.text}"
        </p>
        <div className="mt-6 text-gold uppercase tracking-[0.3em] text-sm font-semibold">
          — {t.author}
        </div>
      </div>
      <div className="relative mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)}
          className="grid size-10 place-items-center rounded-full border border-cream/30 hover:bg-cream/10 transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={cn(
                "h-2 rounded-full transition-all",
                idx === i ? "w-8 bg-gold" : "w-2 bg-cream/30",
              )}
              aria-label={`Testimonio ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setI((i + 1) % testimonials.length)}
          className="grid size-10 place-items-center rounded-full border border-cream/30 hover:bg-cream/10 transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
