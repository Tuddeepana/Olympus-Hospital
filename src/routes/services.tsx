import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Olympus Lanka Hospital, Tissamaharama" },
      { name: "description", content: "Explore our medical services: 24/7 emergency, OPD, specialist consultations, X-ray, laboratory, pharmacy and more at Olympus Lanka Hospital." },
      { property: "og:title", content: "Hospital Services in Tissamaharama" },
      { property: "og:description", content: "Comprehensive medical care under one roof at Olympus Lanka Hospital." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-brand text-brand-foreground">
        <div className="container-x py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/85">Comprehensive, patient-first medical services — available around the clock.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ slug, title, desc, Icon }) => (
            <article key={slug} className="card-soft card-soft-hover p-6 flex flex-col">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emergency/10 text-emergency">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-bold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{desc}</p>
              <div className="mt-5 pt-4 border-t border-border">
                <Link to="/consultants">
                  <Button variant="ghost" className="gap-2 px-0 text-brand hover:bg-transparent hover:text-emergency">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
