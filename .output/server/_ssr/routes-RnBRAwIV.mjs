import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as z } from "../_libs/next-themes.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { C as Camera, S as Car, T as Bus, _ as Church, a as Target, b as ChevronDown, c as Play, d as Palette, f as Music, g as Clock, h as MapPin, i as Trees, l as Phone, m as Menu, n as Utensils, o as Sunset, p as Music2, r as Users, s as Quote, t as X, u as PartyPopper, v as ChevronRight, w as Calendar$1, x as Check, y as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as es, u as format } from "../_libs/date-fns.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/@radix-ui/react-popover+[...].mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { t as DayPicker } from "../_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-RnBRAwIV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	const { theme = "system" } = z();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		theme,
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var links = [
	{
		href: "#inicio",
		label: "Inicio"
	},
	{
		href: "#mansion",
		label: "Nuestra Casa"
	},
	{
		href: "#fiestas",
		label: "Las Fiestas"
	},
	{
		href: "#album",
		label: "El Álbum"
	},
	{
		href: "#apuntate",
		label: "Apúntate"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "bg-background/85 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(92,61,46,0.3)]" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#inicio",
					className: cn("font-serif text-xl font-bold tracking-tight transition-colors", scrolled ? "text-brown" : "text-cream drop-shadow-md"),
					children: ["La Casa del ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-terracotta",
						children: "Tío Loco"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: cn("relative text-sm font-medium tracking-wide uppercase transition-colors", "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-terracotta after:transition-all hover:after:w-full", scrolled ? "text-brown hover:text-terracotta" : "text-cream hover:text-gold"),
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen((s) => !s),
					className: cn("md:hidden p-2 rounded-md transition-colors", scrolled ? "text-brown" : "text-cream"),
					"aria-label": "Abrir menú",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-fade-in-slow",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col px-6 py-4",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "py-3 text-brown border-b border-border/50 last:border-0 font-medium uppercase tracking-wide text-sm hover:text-terracotta",
					children: l.label
				}, l.href))
			})
		})]
	});
}
var hero_mansion_default = "/assets/hero-mansion-DmkpcTo0.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative flex min-h-screen w-full items-center justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_mansion_default,
				alt: "Fachada de La Casa del Tío Loco al atardecer",
				width: 1920,
				height: 1280,
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-b from-brown/50 via-brown/40 to-brown/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-4xl px-6 text-center text-cream animate-fade-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center justify-center gap-3 text-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.3em] font-medium",
								children: "Mansión de eventos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-gold" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-serif text-5xl font-bold leading-[1.05] text-balance md:text-7xl lg:text-8xl",
						children: [
							"La Casa del ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "Tío Loco"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-6 max-w-2xl text-lg text-cream/90 md:text-xl text-balance",
						children: [
							"Elegancia sin aburrimiento. Fiestas inolvidables para",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold font-semibold",
								children: "300 locos como tú"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#mansion",
							className: "group relative inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream shadow-elegant transition-all hover:bg-terracotta/90 hover:scale-105",
							children: "Descubre la Mansión"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#apuntate",
							className: "inline-flex items-center justify-center rounded-full border-2 border-cream/80 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream backdrop-blur-sm transition-all hover:bg-cream hover:text-brown",
							children: "Apúntate"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#bienvenida",
				className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/80 hover:text-gold transition-colors",
				"aria-label": "Scroll down",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2 animate-float-down",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] uppercase tracking-[0.3em]",
						children: "Scroll down"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5" })]
				})
			})
		]
	});
}
var mansion_interior_default = "/assets/mansion-interior-BNQI6Nw2.jpg";
var mansion_gardens_default = "/assets/mansion-gardens-0QM4Z6Q6.jpg";
var mansion_chapel_default = "/assets/mansion-chapel-BbmHBErF.jpg";
function Welcome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "bienvenida",
		className: "relative bg-cream py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-2 md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.3em] text-terracotta font-semibold",
						children: "Bienvenidos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-serif text-4xl font-bold leading-tight text-brown md:text-5xl text-balance",
						children: ["Bienvenidos a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-terracotta not-italic",
							children: "La Casa del Tío Loco"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-lg leading-relaxed text-brown/80",
						children: [
							"Un espacio único donde la elegancia y la naturaleza se encuentran para crear eventos inolvidables. Aquí no hay protocolo rígido, solo",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-olive",
								children: "buena energía"
							}),
							",",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-olive",
								children: "lujo con alma"
							}),
							" y la mejor fiesta de tu vida."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-2xl border-2 border-gold/40 -rotate-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: mansion_interior_default,
						alt: "Salón principal de la mansión",
						width: 1400,
						height: 1e3,
						loading: "lazy",
						className: "relative rounded-xl shadow-elegant object-cover aspect-4/3 w-full"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6",
				children: [
					{
						icon: "🏰",
						label: "La Mansión",
						href: "#mansion"
					},
					{
						icon: "🎉",
						label: "Las Fiestas",
						href: "#fiestas"
					},
					{
						icon: "📸",
						label: "El Álbum",
						href: "#album"
					},
					{
						icon: "📝",
						label: "Apúntate",
						href: "#apuntate"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: c.href,
					className: "group relative overflow-hidden rounded-xl border border-border bg-background p-6 text-center transition-all hover:shadow-elegant hover:-translate-y-1 hover:border-terracotta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-4xl",
						children: c.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 font-serif text-lg font-semibold text-brown group-hover:text-terracotta transition-colors",
						children: c.label
					})]
				}, c.href))
			})]
		})
	});
}
function Mansion() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "mansion",
		className: "relative bg-background py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.3em] text-terracotta font-semibold",
							children: "El lugar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-serif text-4xl font-bold text-brown md:text-6xl text-balance",
							children: ["La Mansión del ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-terracotta not-italic",
								children: "Tío Loco"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg text-brown/70 leading-relaxed",
							children: "No es una hacienda cualquiera. Es la mansión de ese tío excéntrico y genial que todos quisiéramos tener. Construida en 1928, ha sido testigo de las mejores fiestas de la región."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-4 md:grid-cols-3 md:grid-rows-2 md:h-150",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: mansion_gardens_default,
							alt: "Jardines de la mansión",
							width: 1400,
							height: 1e3,
							loading: "lazy",
							className: "md:col-span-2 md:row-span-2 h-64 md:h-full w-full object-cover rounded-xl shadow-soft"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: mansion_chapel_default,
							alt: "Capilla de la mansión",
							width: 1200,
							height: 900,
							loading: "lazy",
							className: "h-48 md:h-full w-full object-cover rounded-xl shadow-soft"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: mansion_interior_default,
							alt: "Interior de la mansión",
							width: 1400,
							height: 1e3,
							loading: "lazy",
							className: "h-48 md:h-full w-full object-cover rounded-xl shadow-soft"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						{
							icon: Users,
							label: "Aforo",
							detail: "Hasta 300 invitados sentados"
						},
						{
							icon: Trees,
							label: "Área verde",
							detail: "2,500 m² de jardines"
						},
						{
							icon: Church,
							label: "Capilla",
							detail: "Capilla propia para 100 personas"
						},
						{
							icon: Car,
							label: "Estacionamiento",
							detail: "Privado para 150 vehículos"
						},
						{
							icon: Music,
							label: "Sonido",
							detail: "Sistema profesional incluido"
						},
						{
							icon: Sunset,
							label: "Atardecer",
							detail: "Vista privilegiada al ocaso"
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex gap-4 items-start rounded-xl border border-border bg-cream/50 p-6 transition-all hover:border-terracotta hover:shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-12 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta group-hover:bg-terracotta group-hover:text-cream transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "size-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-lg font-semibold text-brown",
								children: f.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-brown/70 mt-1",
								children: f.detail
							})]
						})]
					}, f.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 overflow-hidden rounded-2xl border border-border shadow-elegant",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Ubicación de La Casa del Tío Loco",
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15606.084!2d-77.0428!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzQ3LjAiUyA3N8KwMDInMzQuMSJX!5e0!3m2!1ses!2spe!4v1600000000000",
						width: "100%",
						height: "400",
						style: { border: 0 },
						allowFullScreen: true,
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})
			]
		})
	});
}
var event_wedding_default = "/assets/event-wedding-CeUXj1hd.jpg";
var event_quince_default = "/assets/event-quince-BsF44rhr.jpg";
var events = [
	{
		img: event_wedding_default,
		kind: "Bodas",
		name: "Boda de Ana y Carlos",
		date: "Marzo 2025",
		description: "300 invitados, ceremonia en la capilla y recepción en los jardines bajo las estrellas."
	},
	{
		img: event_quince_default,
		kind: "15 Años",
		name: "Los XV de Valeria",
		date: "Julio 2025",
		description: "Vals en el salón principal, DJ hasta el amanecer y un pastel de tres pisos inolvidable."
	},
	{
		img: "/assets/event-birthday-DVbcd1mK.jpg",
		kind: "Cumpleaños",
		name: "50 años de Roberto",
		date: "Enero 2025",
		description: "Una noche mágica con luces de colores, banda en vivo y sorpresas para todos los invitados."
	},
	{
		img: "/assets/event-corporate-BssYwjko.jpg",
		kind: "Corporativos",
		name: "Gala Empresa XYZ",
		date: "Diciembre 2024",
		description: "Cóctel de fin de año en las terrazas con más de 200 ejecutivos y networking premium."
	},
	{
		img: event_wedding_default,
		kind: "Bodas",
		name: "Boda de Sofía y Luis",
		date: "Noviembre 2024",
		description: "Ceremonia íntima con vista al atardecer y cena bajo un cielo lleno de faroles."
	},
	{
		img: event_quince_default,
		kind: "15 Años",
		name: "Los XV de Camila",
		date: "Septiembre 2024",
		description: "Temática vintage, decoración en dorado y una entrada triunfal con carruaje."
	}
];
var filters = [
	"Todas",
	"Bodas",
	"15 Años",
	"Cumpleaños",
	"Corporativos"
];
var testimonials = [
	{
		text: "El Tío Loco hizo de nuestra boda algo único. Nuestros invitados aún hablan de la fiesta.",
		author: "Ana y Carlos"
	},
	{
		text: "Mi fiesta de 15 años fue un sueño. La mansión es espectacular y el equipo, un lujo.",
		author: "Valeria"
	},
	{
		text: "Nuestro evento corporativo fue un éxito. Los jardines son impresionantes.",
		author: "Empresa XYZ"
	}
];
function Fiestas() {
	const [active, setActive] = (0, import_react.useState)("Todas");
	const filtered = (0, import_react.useMemo)(() => active === "Todas" ? events : events.filter((e) => e.kind === active), [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "fiestas",
		className: "relative bg-cream py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.3em] text-terracotta font-semibold",
							children: "Las celebraciones"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-serif text-4xl font-bold text-brown md:text-6xl text-balance",
							children: ["Las Fiestas del ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-terracotta not-italic",
								children: "Tío Loco"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg text-brown/70",
							children: "En La Casa del Tío Loco no hacemos eventos aburridos. Hacemos fiestas que se recuerdan por siempre. Bodas, 15 años, cumpleaños, celebraciones corporativas... cualquier excusa es buena para celebrar."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex flex-wrap justify-center gap-2",
					children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(f),
						className: cn("px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all border", active === f ? "bg-terracotta text-cream border-terracotta shadow-soft" : "border-brown/20 text-brown hover:border-terracotta hover:text-terracotta"),
						children: f
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group overflow-hidden rounded-2xl bg-background shadow-soft transition-all hover:shadow-elegant hover:-translate-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden aspect-4/3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: e.img,
								alt: e.name,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-4 left-4 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream",
								children: e.kind
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-olive font-semibold",
									children: e.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-serif text-xl font-bold text-brown",
									children: e.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-brown/70 leading-relaxed line-clamp-2",
									children: e.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "mt-4 text-sm font-semibold text-terracotta hover:text-brown transition-colors uppercase tracking-wider",
									children: "Ver historia →"
								})
							]
						})]
					}, `${e.name}-${i}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
			]
		})
	});
}
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	const t = testimonials[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-24 rounded-3xl bg-brown text-cream p-8 md:p-16 shadow-elegant relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute top-6 left-6 size-16 text-gold/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative text-center max-w-3xl mx-auto min-h-40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-serif text-2xl md:text-3xl italic leading-relaxed text-balance",
					children: [
						"\"",
						t.text,
						"\""
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 text-gold uppercase tracking-[0.3em] text-sm font-semibold",
					children: ["— ", t.author]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-8 flex items-center justify-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setI((i - 1 + testimonials.length) % testimonials.length),
						className: "grid size-10 place-items-center rounded-full border border-cream/30 hover:bg-cream/10 transition-colors",
						"aria-label": "Anterior",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: testimonials.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setI(idx),
							className: cn("h-2 rounded-full transition-all", idx === i ? "w-8 bg-gold" : "w-2 bg-cream/30"),
							"aria-label": `Testimonio ${idx + 1}`
						}, idx))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setI((i + 1) % testimonials.length),
						className: "grid size-10 place-items-center rounded-full border border-cream/30 hover:bg-cream/10 transition-colors",
						"aria-label": "Siguiente",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			})
		]
	});
}
var videos = [
	{
		thumb: mansion_gardens_default,
		title: "Bienvenidos a la Mansión",
		youtubeId: "dQw4w9WgXcQ"
	},
	{
		thumb: event_wedding_default,
		title: "Boda de Ana y Carlos",
		youtubeId: "dQw4w9WgXcQ"
	},
	{
		thumb: event_quince_default,
		title: "XV de Valeria",
		youtubeId: "dQw4w9WgXcQ"
	}
];
var services = [
	{
		icon: Target,
		name: "Wedding Planning",
		desc: "Planificamos tu boda al detalle. Decoración, cronograma, proveedores."
	},
	{
		icon: Utensils,
		name: "Catering",
		desc: "Menús personalizados con los mejores sabores."
	},
	{
		icon: Camera,
		name: "Fotografía y Video",
		desc: "Profesionales que capturan cada emoción."
	},
	{
		icon: Palette,
		name: "Decoración",
		desc: "Ambientes únicos que reflejan tu personalidad."
	},
	{
		icon: Music2,
		name: "Música y Animación",
		desc: "DJs, bandas en vivo, shows que encienden la fiesta."
	},
	{
		icon: Bus,
		name: "Transporte",
		desc: "Traslado para tus invitados desde la ciudad."
	}
];
function Album() {
	const [openVideo, setOpenVideo] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "album",
		className: "relative bg-background py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.3em] text-terracotta font-semibold",
							children: "Recuerdos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-serif text-4xl font-bold text-brown md:text-6xl text-balance",
							children: ["El Álbum del ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-terracotta not-italic",
								children: "Tío Loco"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg text-brown/70",
							children: "Fotos y videos de las mejores fiestas en la mansión."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 md:grid-cols-3",
					children: videos.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpenVideo(v.youtubeId),
						className: "group relative overflow-hidden rounded-2xl aspect-video shadow-soft hover:shadow-elegant transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: v.thumb,
								alt: v.title,
								loading: "lazy",
								className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-brown/90 via-brown/30 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-16 place-items-center rounded-full bg-terracotta/90 text-cream shadow-elegant transition-transform group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										className: "size-6 ml-1",
										fill: "currentColor"
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 right-0 p-5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-cream font-serif text-lg font-semibold",
									children: v.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-cream/70 text-xs uppercase tracking-wider mt-1",
									children: "Ver video →"
								})]
							})
						]
					}, v.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-2xl mx-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.3em] text-olive font-semibold",
							children: "Todo incluido"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-serif text-3xl font-bold text-brown md:text-4xl",
							children: "Nuestros Servicios"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative overflow-hidden rounded-2xl border border-border bg-cream/40 p-8 transition-all hover:border-terracotta hover:shadow-elegant hover:-translate-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-14 place-items-center rounded-2xl bg-linear-to-br from-terracotta to-brown text-cream mb-5 shadow-soft group-hover:scale-110 transition-transform",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-serif text-xl font-bold text-brown",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-brown/70 leading-relaxed",
									children: s.desc
								})
							]
						}, s.name))
					})]
				})
			]
		}), openVideo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: () => setOpenVideo(null),
			className: cn("fixed inset-0 z-100 grid place-items-center bg-brown/90 backdrop-blur-md p-4 animate-fade-in-slow"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setOpenVideo(null),
				className: "absolute top-6 right-6 grid size-12 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors",
				"aria-label": "Cerrar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full max-w-4xl aspect-video",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: `https://www.youtube.com/embed/${openVideo}?autoplay=1`,
					title: "Video",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: true,
					className: "h-full w-full rounded-xl shadow-elegant"
				})
			})]
		})]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 rounded-md px-3",
			lg: "h-11 rounded-md px-8",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("p-3", className),
		classNames: {
			months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
			month: "space-y-4",
			caption: "flex justify-center pt-1 relative items-center",
			caption_label: "text-sm font-medium",
			nav: "space-x-1 flex items-center",
			nav_button: cn(buttonVariants({ variant: "outline" }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
			nav_button_previous: "absolute left-1",
			nav_button_next: "absolute right-1",
			table: "w-full border-collapse space-y-1",
			head_row: "flex",
			head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
			row: "flex w-full mt-2",
			cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
			day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
			day_range_end: "day-range-end",
			day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
			day_today: "bg-accent text-accent-foreground",
			day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
			day_disabled: "text-muted-foreground opacity-50",
			day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
			day_hidden: "invisible",
			...classNames
		},
		components: {
			IconLeft: ({ ..._props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }),
			IconRight: ({ ..._props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
		},
		...props
	});
}
Calendar.displayName = "Calendar";
var eventTypes = [
	"Boda",
	"15 Años",
	"Cumpleaños",
	"Corporativo",
	"Otro"
];
function Apuntate() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		eventType: "",
		guests: 150,
		date: void 0,
		message: ""
	});
	const steps = [
		"Datos personales",
		"Tu evento",
		"Mensaje"
	];
	const canNext = () => {
		if (step === 0) return form.name && form.email && form.phone;
		if (step === 1) return form.eventType && form.date;
		return true;
	};
	const submit = () => {
		if (!form.name) return;
		setSubmitted(form.name);
		toast.success("¡Solicitud enviada!", { description: "Te contactaremos en menos de 2 horas." });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "apuntate",
		className: "relative bg-linear-to-b from-cream to-background py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.3em] text-terracotta font-semibold",
						children: "Reserva tu fecha"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-serif text-4xl font-bold text-brown md:text-6xl text-balance",
						children: ["Apúntate a la ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-terracotta not-italic",
							children: "Fiesta"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-brown/70",
						children: "Cuéntanos qué quieres celebrar y te ayudamos a hacerlo realidad."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl bg-background border border-border shadow-elegant p-6 md:p-10",
					children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center py-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto grid size-20 place-items-center rounded-full bg-terracotta/10 text-terracotta",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyPopper, { className: "size-10" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mt-6 font-serif text-3xl font-bold text-brown",
								children: [
									"¡Excelente, ",
									submitted,
									"!"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-brown/70 max-w-md mx-auto",
								children: [
									"Un asesor de La Casa del Tío Loco revisará la disponibilidad de tu fecha y te contactará en menos de 2 horas.",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-terracotta",
										children: "¡Prepárate para la fiesta de tu vida!"
									})
								]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-between mb-10",
							children: steps.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center gap-2 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: cn("grid size-10 place-items-center rounded-full font-serif font-bold transition-all", i < step ? "bg-olive text-cream" : i === step ? "bg-terracotta text-cream scale-110 shadow-soft" : "bg-muted text-muted-foreground"),
										children: i < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" }) : i + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("text-[10px] md:text-xs uppercase tracking-wider font-semibold hidden sm:block", i === step ? "text-terracotta" : "text-brown/60"),
										children: label
									})]
								}), i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("flex-1 h-px mx-2 md:mx-4 transition-colors", i < step ? "bg-olive" : "bg-border") })]
							}, label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-h-80",
							children: [
								step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-5 animate-fade-up",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "name",
											children: "Nombre completo"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "name",
											value: form.name,
											onChange: (e) => setForm({
												...form,
												name: e.target.value
											}),
											className: "mt-2",
											placeholder: "Ej. María Fernández"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "email",
											children: "Correo electrónico"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "email",
											type: "email",
											value: form.email,
											onChange: (e) => setForm({
												...form,
												email: e.target.value
											}),
											className: "mt-2",
											placeholder: "tu@correo.com"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "phone",
											children: "Teléfono"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "phone",
											type: "tel",
											value: form.phone,
											onChange: (e) => setForm({
												...form,
												phone: e.target.value
											}),
											className: "mt-2",
											placeholder: "+51 999 999 999"
										})] })
									]
								}),
								step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-6 animate-fade-up",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Tipo de evento" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 flex flex-wrap gap-2",
											children: eventTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setForm({
													...form,
													eventType: t
												}),
												className: cn("px-4 py-2 rounded-full border text-sm font-medium transition-all", form.eventType === t ? "bg-terracotta border-terracotta text-cream shadow-soft" : "border-brown/20 text-brown hover:border-terracotta"),
												children: t
											}, t))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Número de invitados: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-terracotta font-bold",
												children: [form.guests, form.guests >= 300 ? "+" : ""]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
												value: [form.guests],
												min: 50,
												max: 300,
												step: 10,
												onValueChange: ([v]) => setForm({
													...form,
													guests: v
												}),
												className: "mt-4"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between text-xs text-brown/60 mt-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "300+" })]
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Fecha deseada" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "outline",
												className: cn("mt-2 w-full justify-start text-left font-normal", !form.date && "text-muted-foreground"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, { className: "mr-2 size-4" }), form.date ? format(form.date, "PPP", { locale: es }) : "Selecciona una fecha"]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
											className: "w-auto p-0",
											align: "start",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
												mode: "single",
												selected: form.date,
												onSelect: (d) => setForm({
													...form,
													date: d
												}),
												locale: es,
												disabled: (d) => d < /* @__PURE__ */ new Date(),
												className: cn("p-3 pointer-events-auto")
											})
										})] })] })
									]
								}),
								step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "animate-fade-up",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "message",
										children: "Comentarios adicionales"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "message",
										value: form.message,
										onChange: (e) => setForm({
											...form,
											message: e.target.value
										}),
										rows: 7,
										className: "mt-2",
										placeholder: "Cuéntanos tu visión, referencias, requerimientos especiales..."
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-between gap-4 border-t border-border pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								onClick: () => setStep((s) => Math.max(0, s - 1)),
								disabled: step === 0,
								className: "text-brown",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4 mr-1" }), " Atrás"]
							}), step < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => canNext() && setStep((s) => s + 1),
								disabled: !canNext(),
								className: "bg-terracotta hover:bg-terracotta/90 text-cream",
								children: ["Siguiente ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 ml-1" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: submit,
								className: "bg-terracotta hover:bg-terracotta/90 text-cream font-semibold uppercase tracking-wider",
								children: "Enviar. ¡Quiero mi fecha!"
							})]
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-brown text-cream p-8 shadow-elegant",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-2xl font-bold text-gold",
							children: "Contáctanos directo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 shrink-0 text-gold mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-cream/60 text-xs uppercase tracking-wider",
										children: "Teléfono"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+51999888777",
										className: "hover:text-gold transition-colors",
										children: "+51 999 888 777"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 shrink-0 text-gold mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-cream/60 text-xs uppercase tracking-wider",
										children: "Dirección"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Av. La Mansión 123, Cieneguilla, Lima" })] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5 shrink-0 text-gold mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-cream/60 text-xs uppercase tracking-wider",
										children: "Horario"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Lun – Sáb · 9:00 a 19:00" })] })]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl border border-border shadow-soft h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Mapa",
							src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15606.084!2d-77.0428!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzQ3LjAiUyA3N8KwMDInMzQuMSJX!5e0!3m2!1ses!2spe!4v1600000000000",
							width: "100%",
							height: "100%",
							style: { border: 0 },
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})]
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-brown text-cream/70 py-12 border-t border-cream/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-serif text-lg",
				children: ["La Casa del ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic text-gold",
					children: "Tío Loco"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" — Fiestas inolvidables desde 1928."
				]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Welcome, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mansion, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fiestas, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Album, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apuntate, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				position: "top-center",
				richColors: true
			})
		]
	});
}
//#endregion
export { Index as component };
