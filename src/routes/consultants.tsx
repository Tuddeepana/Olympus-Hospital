import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Languages, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/consultants")({
  head: () => ({
    meta: [
      { title: "Consultants & Doctors — Olympus Lanka Hospital" },
      { name: "description", content: "Consultant listings and channeling appointments at Olympus Lanka Hospital are coming soon." },
      { property: "og:title", content: "Doctors & Consultants — Olympus Lanka Hospital" },
      { property: "og:description", content: "Consultant listings and channeling appointments at Olympus Lanka Hospital are coming soon." },
      { property: "og:url", content: "/consultants" },
    ],
    links: [{ rel: "canonical", href: "/consultants" }],
  }),
  component: ConsultantsPage,
});

function ConsultantsPage() {
  const [isSinhala, setIsSinhala] = useState(false);

  return (
    <>
      <section className="bg-brand text-brand-foreground">
        <div className="container-x py-16 md:py-20 text-center relative">
          <button
            type="button"
            onClick={() => setIsSinhala((value) => !value)}
            className="absolute right-0 top-5 inline-flex items-center gap-2 rounded-lg border border-white/30 px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
            aria-label={isSinhala ? "Switch to English" : "Switch to Sinhala"}
          >
            <Languages className="h-4 w-4" /> {isSinhala ? "English" : "සිංහල"}
          </button>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            {isSinhala ? "අපගේ විශේෂඥ වෛද්‍යවරු" : "Our Consultants"}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/85">
            {isSinhala ? "අපගේ විශේෂඥ වෛද්‍ය සේවාවන් සහ චැනලින් තොරතුරු ළඟදීම." : "Consultant services and channeling information will be available soon."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x flex justify-center">
          <div className="max-w-xl text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand/10 text-brand">
              <Stethoscope className="h-8 w-8" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-brand">
              {isSinhala ? "ළඟදීම පැමිණේ" : "Coming Soon"}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {isSinhala
                ? "අපගේ විශේෂඥ වෛද්‍යවරුන්ගේ ලැයිස්තුව සහ චැනලින් වේලාවන් ළඟදීම මෙහි පළ කෙරේ."
                : "Our consultant list and channeling schedules will be available here soon."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
