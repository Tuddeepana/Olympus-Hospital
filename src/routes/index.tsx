import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Clock, ShieldCheck, Stethoscope, Wrench, MapPin, HeartHandshake, CheckCircle2, ArrowRight, Phone, MessageCircle, CalendarCheck,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import { SERVICES } from "@/lib/services";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olympus Lanka Hospital — 24/7 Hospital in Tissamaharama" },
      { name: "description", content: "24/7 emergency, OPD, specialist consultations, X-ray, laboratory and pharmacy at Olympus Lanka Hospital in Debarawewa, Tissamaharama." },
      { property: "og:title", content: "Olympus Lanka Hospital — 24/7 Hospital in Tissamaharama" },
      { property: "og:description", content: "Caring for life with modern medical technology and compassionate care in Southern Sri Lanka." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const HIGHLIGHTS = [
  { Icon: Clock, title: "24/7 Open Service", desc: "Always open, every day of the year." },
  { Icon: ShieldCheck, title: "Emergency Care", desc: "Rapid response with trained staff." },
  { Icon: Stethoscope, title: "Experienced Doctors", desc: "Qualified physicians & specialists." },
  { Icon: Wrench, title: "Modern Equipment", desc: "Up-to-date diagnostic technology." },
  { Icon: MapPin, title: "Located in Tissamaharama", desc: "Central to the Hambantota district." },
];

const WHY = [
  "Trusted medical experts",
  "24/7 emergency support",
  "Modern, up-to-date equipment",
  "Friendly & compassionate care team",
  "Affordable, transparent treatment",
];

function HomePage() {
  const [bookOpen, setBookOpen] = useState(false);
  return (
    <>
      <Hero />

      {/* Highlights */}
      <section className="section bg-background">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {HIGHLIGHTS.map(({ Icon, title, desc }) => (
            <div key={title} className="card-soft card-soft-hover p-5 text-center">
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About short */}
      <section className="section bg-secondary">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-emergency">About Us</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Compassionate care, modern medicine.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Established in 2022, Olympus Lanka Hospital is committed to delivering world-class healthcare with advanced medical technology and compassionate care for families across the Southern Province of Sri Lanka.
            </p>
            <ul className="mt-5 grid gap-2">
              {WHY.slice(0, 3).map((w) => (
                <li key={w} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-health" /> {w}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-6 inline-block">
              <Button variant="outline" className="gap-2">Read More <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </div>
          <div className="card-soft p-2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80" alt="Hospital interior" className="rounded-xl w-full h-[360px] object-cover" loading="lazy" width={1200} height={720} />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-emergency">Our Services</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Comprehensive medical care</h2>
            <p className="mt-3 text-muted-foreground">From everyday consultations to round-the-clock emergency care.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map(({ slug, title, desc, Icon }) => (
              <div key={slug} className="card-soft card-soft-hover p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emergency/10 text-emergency">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services"><Button className="bg-brand text-brand-foreground hover:bg-brand-soft gap-2">View All Services <ArrowRight className="h-4 w-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-brand text-brand-foreground">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-white/70">Why Choose Us</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">A hospital your family can trust</h2>
            <p className="mt-4 text-white/85">Putting patients first with safety, dignity and clinical excellence at every step.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {WHY.map((w) => (
              <li key={w} className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <HeartHandshake className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <span className="text-white/95">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="section">
        <div className="container-x card-soft p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Make Your Appointment Today</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Book a consultation in seconds — we'll confirm via WhatsApp.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-emergency hover:bg-emergency/90 text-emergency-foreground gap-2" onClick={() => setBookOpen(true)}>
              <CalendarCheck className="h-5 w-5" /> Book Now
            </Button>
            <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}>
              <Button size="lg" variant="outline" className="gap-2"><Phone className="h-5 w-5" /> {SITE.phones[0]}</Button>
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-whatsapp hover:opacity-90 text-white gap-2"><MessageCircle className="h-5 w-5" /> WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>

      <BookingDialog open={bookOpen} onOpenChange={setBookOpen} />
    </>
  );
}
