import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, waLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
      <picture className="absolute inset-0 block h-full w-full">
        <source
          media="(max-width: 768px)"
          srcSet="/olympus-hospital-mobile-hero.webp"
        />
        <img
          src="/Welcoming Tropical Hospital Facade.webp"
          alt="Olympus Lanka Hospital facade — modern healthcare in Tissamaharama"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </picture>
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
      </div>
    </section>
  );
}
