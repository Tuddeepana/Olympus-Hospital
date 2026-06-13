import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, waLink } from "@/lib/site";
import hero1 from "@/assets/hero-hospital.jpg";
import hero2 from "@/assets/hero-doctors.jpg";
import hero3 from "@/assets/hero-emergency.jpg";

const slides = [hero1, hero2, hero3];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
      {slides.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="Olympus Lanka Hospital — modern healthcare in Tissamaharama"
          width={1920}
          height={1080}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          loading={idx === 0 ? "eager" : "lazy"}
          fetchPriority={idx === 0 ? "high" : "auto"}
        />
      ))}
      <div className="absolute inset-0 glass-overlay" />
      <div className="relative z-10 container-x flex h-full flex-col justify-center text-white">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emergency px-3 py-1 text-xs font-semibold uppercase tracking-wider animate-fade-up">
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" /> 24/7 Emergency & Healthcare
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-extrabold text-white animate-fade-up">
          Olympus Lanka Hospital
          <span className="block text-white/90 text-2xl md:text-3xl font-semibold mt-2">
            Caring for Life in Tissamaharama
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-white/90 animate-fade-up">
          Round-the-clock emergency care, experienced doctors and modern medical equipment — close to home in the Southern Province.
        </p>
        <div className="mt-7 flex flex-wrap gap-3 animate-fade-up">
          <Link to="/consultants">
            <Button size="lg" className="bg-emergency hover:bg-emergency/90 text-emergency-foreground gap-2">
              <CalendarCheck className="h-5 w-5" /> Book Appointment
            </Button>
          </Link>
          <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white hover:text-brand gap-2 backdrop-blur">
              <Phone className="h-5 w-5" /> Call Now
            </Button>
          </a>
          <a href={waLink("Hello Olympus Hospital, I'd like to make an inquiry.")} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-whatsapp hover:opacity-90 text-white gap-2">
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </Button>
          </a>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
