import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Check, Phone, MapPin, Clock, ChevronLeft, ChevronRight, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const eventTypes = ["Boda", "15 Años", "Cumpleaños", "Corporativo", "Otro"];

export function Apuntate() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: 150,
    date: undefined as Date | undefined,
    message: "",
  });

  const steps = ["Datos personales", "Tu evento", "Mensaje"];

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

  return (
    <section id="apuntate" className="relative bg-linear-to-b from-cream to-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">
            Reserva tu fecha
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-brown md:text-6xl text-balance">
            Apúntate a la <em className="text-terracotta not-italic">Fiesta</em>
          </h2>
          <p className="mt-6 text-lg text-brown/70">
            Cuéntanos qué quieres celebrar y te ayudamos a hacerlo realidad.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Form card */}
          <div className="rounded-3xl bg-background border border-border shadow-elegant p-6 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto grid size-20 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                  <PartyPopper className="size-10" />
                </div>
                <h3 className="mt-6 font-serif text-3xl font-bold text-brown">
                  ¡Excelente, {submitted}!
                </h3>
                <p className="mt-4 text-brown/70 max-w-md mx-auto">
                  Un asesor de La Casa del Tío Loco revisará la disponibilidad de tu fecha y
                  te contactará en menos de 2 horas.{" "}
                  <span className="font-semibold text-terracotta">
                    ¡Prepárate para la fiesta de tu vida!
                  </span>
                </p>
              </div>
            ) : (
              <>
                {/* Stepper */}
                <div className="flex items-center justify-between mb-10">
                  {steps.map((label, i) => (
                    <div key={label} className="flex flex-1 items-center">
                      <div className="flex flex-col items-center gap-2 min-w-0">
                        <div
                          className={cn(
                            "grid size-10 place-items-center rounded-full font-serif font-bold transition-all",
                            i < step
                              ? "bg-olive text-cream"
                              : i === step
                                ? "bg-terracotta text-cream scale-110 shadow-soft"
                                : "bg-muted text-muted-foreground",
                          )}
                        >
                          {i < step ? <Check className="size-5" /> : i + 1}
                        </div>
                        <span className={cn("text-[10px] md:text-xs uppercase tracking-wider font-semibold hidden sm:block", i === step ? "text-terracotta" : "text-brown/60")}>
                          {label}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className={cn("flex-1 h-px mx-2 md:mx-4 transition-colors", i < step ? "bg-olive" : "bg-border")} />
                      )}
                    </div>
                  ))}
                </div>

                <div className="min-h-80">
                  {step === 0 && (
                    <div className="space-y-5 animate-fade-up">
                      <div>
                        <Label htmlFor="name">Nombre completo</Label>
                        <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2"  />
                      </div>
                      <div>
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2"  />
                      </div>
                      <div>
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2"  />
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-6 animate-fade-up">
                      <div>
                        <Label>Tipo de evento</Label>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {eventTypes.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setForm({ ...form, eventType: t })}
                              className={cn(
                                "px-4 py-2 rounded-full border text-sm font-medium transition-all",
                                form.eventType === t
                                  ? "bg-terracotta border-terracotta text-cream shadow-soft"
                                  : "border-brown/20 text-brown hover:border-terracotta",
                              )}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label>
                          Número de invitados: <span className="text-terracotta font-bold">{form.guests}{form.guests >= 300 ? "+" : ""}</span>
                        </Label>
                        <Slider
                          value={[form.guests]}
                          min={50}
                          max={300}
                          step={10}
                          onValueChange={([v]) => setForm({ ...form, guests: v })}
                          className="mt-4"
                        />
                        <div className="flex justify-between text-xs text-brown/60 mt-2">
                          <span>50</span>
                          <span>300+</span>
                        </div>
                      </div>
                      <div>
                        <Label>Fecha deseada</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn("mt-2 w-full justify-start text-left font-normal", !form.date && "text-muted-foreground")}
                            >
                              <CalendarIcon className="mr-2 size-4" />
                              {form.date ? format(form.date, "PPP", { locale: es }) : "Selecciona una fecha"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={form.date}
                              onSelect={(d) => setForm({ ...form, date: d })}
                              locale={es}
                              disabled={(d) => d < new Date()}
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-fade-up">
                      <Label htmlFor="message">Comentarios adicionales</Label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={7}
                        className="mt-2"
                        placeholder="Cuéntanos tu visión, referencias, requerimientos especiales..."
                      />
                    </div>
                  )}
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
                  <Button
                    variant="ghost"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="text-brown"
                  >
                    <ChevronLeft className="size-4 mr-1" /> Atrás
                  </Button>

                  {step < steps.length - 1 ? (
                    <Button
                      onClick={() => canNext() && setStep((s) => s + 1)}
                      disabled={!canNext()}
                      className="bg-terracotta hover:bg-terracotta/90 text-cream"
                    >
                      Siguiente <ChevronRight className="size-4 ml-1" />
                    </Button>
                  ) : (
                    <Button
                      onClick={submit}
                      className="bg-terracotta hover:bg-terracotta/90 text-cream font-semibold uppercase tracking-wider"
                    >
                      Enviar. ¡Quiero mi fecha!
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Info card */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-brown text-cream p-8 shadow-elegant">
              <h3 className="font-serif text-2xl font-bold text-gold">Contáctanos directo</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="size-5 shrink-0 text-gold mt-0.5" />
                  <div>
                    <div className="text-cream/60 text-xs uppercase tracking-wider">Teléfono</div>
                    <a href="tel:+51999888777" className="hover:text-gold transition-colors">+51 984 555 100</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="size-5 shrink-0 text-gold mt-0.5" />
                  <div>
                    <div className="text-cream/60 text-xs uppercase tracking-wider">Dirección</div>
                    <div>Jr. Santa Bárbara N°379 - Anexo de Aza - El Tambo - Huancayo</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="size-5 shrink-0 text-gold mt-0.5" />
                  <div>
                    <div className="text-cream/60 text-xs uppercase tracking-wider">Horario</div>
                    <div>Lun – Sáb · 9:00 a 19:00</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-soft h-64">
              <iframe
                title="Mapa"
               
                
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1763.7495593896924!2d-75.20701010403084!3d-12.035065293791988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjr.%20santa%20b%C3%A1rbara%20n%C2%B0379%20-%20anexo%20de%20aza!5e0!3m2!1ses!2spe!4v1787282085259!5m2!1ses!2spe" 

                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brown text-cream/70 py-12 border-t border-cream/10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif text-lg">
          La Casa del <span className="italic text-gold">Tío Loco</span>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} — Fiestas inolvidables desde 1928.</div>
      </div>
    </footer>
  );
}
