import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Olympus Lanka Hospital, Tissamaharama" },
      { name: "description", content: "Visit, call or WhatsApp Olympus Lanka Hospital in Debarawewa, Tissamaharama. 24/7 emergency support available." },
      { property: "og:title", content: "Contact Olympus Lanka Hospital" },
      { property: "og:description", content: "Address, phone numbers, email and map for Olympus Lanka Hospital." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    {
      Icon: MapPin, title: "Address",
      body: (
        <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {SITE.address.line1}<br />{SITE.address.line2}<br />{SITE.address.city} {SITE.address.postal}
        </a>
      ),
    },
    {
      Icon: Phone, title: "Phone",
      body: (
        <div className="space-y-1">
          {SITE.phones.map((p) => (
            <div key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className="hover:underline">{p}</a></div>
          ))}
        </div>
      ),
    },
    { Icon: Mail, title: "Email", body: <a href={`mailto:${SITE.email}`} className="hover:underline break-all">{SITE.email}</a> },
    { Icon: Clock, title: "Hours", body: <>Emergency: 24/7<br />OPD: 8:00 AM – 10:00 PM</> },
  ];

  return (
    <>
      <section className="bg-brand text-brand-foreground">
        <div className="container-x py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/85">We're here to help — 24 hours a day, 7 days a week.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ Icon, title, body }) => (
            <div key={title} className="card-soft card-soft-hover p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-emergency/10 text-emergency">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold">{title}</h3>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 card-soft overflow-hidden">
            <iframe
              title="Olympus Lanka Hospital location"
              src={SITE.mapsEmbed}
              width="100%"
              height="460"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="card-soft p-6">
            <h3 className="text-xl font-bold">Need help right now?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              For emergencies, call our hotline. For appointments and inquiries, chat with us on WhatsApp.
            </p>
            <div className="mt-5 space-y-3">
              <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`} className="block">
                <Button className="w-full bg-emergency hover:bg-emergency/90 text-emergency-foreground gap-2">
                  <Phone className="h-4 w-4" /> Call {SITE.phones[0]}
                </Button>
              </a>
              <a href={waLink("Hello Olympus Lanka Hospital, I'd like to inquire.")} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-whatsapp hover:opacity-90 text-white gap-2">
                  <MessageCircle className="h-4 w-4" /> WhatsApp {SITE.whatsappDisplay}
                </Button>
              </a>
              <a href={`mailto:${SITE.email}`} className="block">
                <Button variant="outline" className="w-full gap-2"><Mail className="h-4 w-4" /> Email Us</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
