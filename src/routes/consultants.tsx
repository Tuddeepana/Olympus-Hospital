import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Stethoscope, CalendarCheck, Clock, Languages } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingDialog } from "@/components/BookingDialog";
import { DOCTORS, SPECIALIZATIONS } from "@/lib/doctors";

const SPECIALIZATION_SINHALA: Record<string, string> = {
  All: "සියලුම",
  Physician: "වෛද්‍යවරයා",
  Neurologist: "ස්නායු රෝග විශේෂඥ",
  Surgeon: "ශල්‍ය වෛද්‍ය",
  Cardiologist: "හෘද රෝග විශේෂඥ",
  Pediatrician: "ළමා රෝග විශේෂඥ",
  Gynecologist: "කාන්තා රෝග විශේෂඥ",
  Orthopedic: "අස්ථි හා සන්ධි විශේෂඥ",
  Dermatologist: "චර්ම රෝග විශේෂඥ",
  ENT: "කණ, නාසය සහ උගුර",
};

export const Route = createFileRoute("/consultants")({
  head: () => ({
    meta: [
      { title: "Consultants & Doctors — Olympus Lanka Hospital" },
      { name: "description", content: "Browse and book appointments with our visiting consultants and resident doctors at Olympus Lanka Hospital, Tissamaharama." },
      { property: "og:title", content: "Doctors & Consultants — Olympus Lanka Hospital" },
      { property: "og:description", content: "Find a doctor by specialization and book an appointment in seconds." },
      { property: "og:url", content: "/consultants" },
    ],
    links: [{ rel: "canonical", href: "/consultants" }],
  }),
  component: ConsultantsPage,
});

function ConsultantsPage() {
  const [q, setQ] = useState("");
  const [spec, setSpec] = useState<string>("All");
  const [selected, setSelected] = useState<string | undefined>();
  const [open, setOpen] = useState(false);
  const [isSinhala, setIsSinhala] = useState(false);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return DOCTORS.filter((d) => {
      const matchesSpec = spec === "All" || d.specialization === spec;
      const matchesQ = !term || d.name.toLowerCase().includes(term) || d.specialization.toLowerCase().includes(term);
      return matchesSpec && matchesQ;
    });
  }, [q, spec]);

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
            {isSinhala ? "නම හෝ විශේෂඥතාව අනුව සොයා තත්පර කිහිපයකින් වේලාවක් වෙන් කරවා ගන්න." : "Search by name or specialization and book an appointment in seconds."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="card-soft p-4 md:p-5 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder={isSinhala ? "නම හෝ විශේෂඥතාව අනුව සොයන්න…" : "Search by name or specialization…"} value={q} onChange={(e) => setQ(e.target.value)} className="pl-9" maxLength={80} />
            </div>
            <div className="flex flex-wrap gap-2">
              {SPECIALIZATIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSpec(s)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${spec === s ? "bg-brand text-brand-foreground border-brand" : "bg-background hover:bg-accent border-border"}`}
                >
                  {isSinhala ? SPECIALIZATION_SINHALA[s] : s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((d) => (
              <div key={d.id} className="card-soft card-soft-hover p-6">
                <div className="flex items-start gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg truncate">{d.name}</h3>
                    <Badge variant="secondary" className="mt-1">{isSinhala ? SPECIALIZATION_SINHALA[d.specialization] : d.specialization}</Badge>
                  </div>
                </div>
                <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mt-0.5 shrink-0 text-health" /> {d.availability}
                </p>
                <Button
                  className="mt-5 w-full bg-emergency hover:bg-emergency/90 text-emergency-foreground gap-2"
                  onClick={() => { setSelected(`${d.name} (${d.specialization})`); setOpen(true); }}
                >
                  <CalendarCheck className="h-4 w-4" /> {isSinhala ? "දැන් වෙන් කරවා ගන්න" : "Book Now"}
                </Button>
              </div>
            ))}
            {list.length === 0 && (
              <div className="col-span-full text-center text-muted-foreground py-12">
                {isSinhala ? "ඔබගේ සෙවීමට ගැළපෙන වෛද්‍යවරුන් නොමැත." : "No doctors match your search."}
              </div>
            )}
          </div>
        </div>
      </section>

      <BookingDialog open={open} onOpenChange={setOpen} defaultDoctor={selected} />
    </>
  );
}
