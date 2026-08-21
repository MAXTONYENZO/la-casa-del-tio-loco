import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#mansion", label: "Nuestra Casa" },
  { href: "#fiestas", label: "Las Fiestas" },
  { href: "#album", label: "El Álbum" },
  { href: "#apuntate", label: "Apúntate" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(92,61,46,0.3)]"
          : "bg-cream/80 backdrop-blur-sm shadow-[0_2px_20px_-10px_rgba(92,61,46,0.15)]",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo + Texto */}
        <a
          href="#inicio"
          className="flex items-center gap-3 font-serif text-xl font-bold tracking-tight text-brown transition-colors hover:text-terracotta"
        >
          <img
            src="/images/logo_ok.png"
            alt="La Casa del Tío Loco"
            className="h-10 w-auto object-contain brightness-0 contrast-150"
          />
         
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium tracking-wide uppercase text-brown/80 transition-colors hover:text-terracotta after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-terracotta after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-brown hover:text-terracotta transition-colors"
          aria-label="Abrir menú"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-brown/10 bg-cream/98 backdrop-blur-md animate-fade-in-slow">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-brown border-b border-brown/10 last:border-0 font-medium uppercase tracking-wide text-sm hover:text-terracotta transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}