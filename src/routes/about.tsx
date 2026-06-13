import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Eye, Target, Sparkles, ShieldCheck, Lightbulb, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Olympus Lanka Hospital, Tissamaharama" },
      { name: "description", content: "Learn about Olympus Lanka Hospital — mission, vision and values driving modern healthcare in Tissamaharama, Sri Lanka." },
      { property: "og:title", content: "About Olympus Lanka Hospital" },
      { property: "og:description", content: "World-class healthcare in Southern Sri Lanka — our story, mission and values." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { Icon: HeartHandshake, title: "Care", desc: "Genuine compassion in every interaction." },
  { Icon: ShieldCheck, title: "Trust", desc: "Transparent, ethical and safe medicine." },
  { Icon: Lightbulb, title: "Innovation", desc: "Modern technology, modern care." },
  { Icon: Award, title: "Excellence", desc: "Continuous quality and improvement." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-brand text-brand-foreground">
        <div className="container-x py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">About Olympus Lanka Hospital</h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/85">
            Established in 2022 to bring world-class healthcare close to home for families across the Southern Province of Sri Lanka.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-center">
          <img src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80" alt="Modern hospital ward" className="rounded-2xl shadow-soft w-full h-[420px] object-cover" loading="lazy" width={1200} height={840} />
          <div>
            <h2 className="text-3xl font-bold">Excellence in healthcare, every day.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Olympus Lanka Hospital combines experienced clinicians, modern diagnostic equipment and patient-first processes to deliver high-quality medical care 24 hours a day. From emergency response and OPD consultations to specialist clinics, X-ray imaging, laboratory testing and a full pharmacy — we're built for the needs of our community.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our team is committed to dignity, safety and clinical excellence. Whether you visit us for a routine check-up or in an emergency, you can expect prompt, professional and compassionate care.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <div className="card-soft p-8">
            <Target className="h-9 w-9 text-emergency" />
            <h3 className="mt-4 text-2xl font-bold">Our Mission</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Provide access to affordable world-class healthcare services and enrich lives.
            </p>
          </div>
          <div className="card-soft p-8">
            <Eye className="h-9 w-9 text-brand" />
            <h3 className="mt-4 text-2xl font-bold">Our Vision</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              To be the most respected healthcare provider in the Southern Province of Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-xl mx-auto">
            <Sparkles className="mx-auto h-8 w-8 text-emergency" />
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Our Values</h2>
            <p className="mt-3 text-muted-foreground">The principles that guide everything we do.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ Icon, title, desc }) => (
              <div key={title} className="card-soft card-soft-hover p-6 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
