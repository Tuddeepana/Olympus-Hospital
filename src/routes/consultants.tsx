import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Languages, MessageCircle, Search, Stethoscope } from "lucide-react";
import { BookingDialog } from "@/components/BookingDialog";
import { Button } from "@/components/ui/button";
import { SITE, waLink } from "@/lib/site";

type SpecialistGroup = {
  title: string;
  doctors: Array<{ name: string; specialty: string; note?: string }>;
};

const specialistGroups: SpecialistGroup[] = [
  {
    title: "Visiting Specialists from Karapitiya Hospital",
    doctors: [
      { name: "Dr. Thilina Munasinghe", specialty: "Consultant Paediatric Neurologist" },
      { name: "Dr. Geeth Sooriyasena", specialty: "Consultant Paediatric Cardiologist / Paediatric Heart Disease Specialist" },
      { name: "Dr. Sajeevani Dissanayake", specialty: "Consultant Rheumatologist" },
    ],
  },
  {
    title: "Specialists from Hambantota General Hospital",
    doctors: [
      { name: "Dr. Vajira Samarakrikwama", specialty: "Consultant Gastroenterologist" },
      { name: "Dr. Kitsiri Niwunhella", specialty: "Consultant Physician" },
      { name: "Dr. Chaminda Kottage", specialty: "Consultant Physician" },
      { name: "Dr. Chanaka Vithanage", specialty: "Consultant Sports & Exercise Medicine Physician (Act.)", note: "Specialist in Sports, Exercise, Joint & Musculoskeletal Conditions" },
      { name: "Dr. Ayasmanta Peiris", specialty: "Consultant Ophthalmologist / Eye Surgeon" },
      { name: "Dr. Inoka Munasinghe", specialty: "Consultant Venereologist" },
      { name: "Dr. Malika Udagadara", specialty: "Consultant Nutrition Physician" },
      { name: "Dr. Navodhra Harischandra", specialty: "Consultant Psychiatrist" },
      { name: "Dr. Shivashankar", specialty: "Consultant Genitourinary Surgeon", note: "Specialist in Kidney, Urinary Tract & Urinary Stone Conditions" },
      { name: "Dr. Chinthana Dematapitiya", specialty: "Consultant Endocrinologist", note: "Specialist in Thyroid Disorders, Diabetes & Hormonal Conditions" },
      { name: "Dr. Chandana Dahanayake", specialty: "Consultant Respiratory Physician / Pulmonologist" },
      { name: "Dr. M.M.I. Chathurani", specialty: "Consultant Nephrologist" },
    ],
  },
  {
    title: "Specialists from Debarawewa Base Hospital",
    doctors: [
      { name: "Dr. K.K.G. Niranga", specialty: "Consultant Obstetrician & Gynaecologist (VOG)" },
      { name: "Dr. Sameera Udayanga", specialty: "Consultant Obstetrician & Gynaecologist (VOG)" },
      { name: "Dr. Supun S. Sooriyaarachchi", specialty: "Consultant Surgeon" },
      { name: "Dr. Subhanthan", specialty: "Consultant Radiologist" },
      { name: "Dr. Thilina Kulasiri", specialty: "Consultant Psychiatrist" },
    ],
  },
  {
    title: "Additional Support Services",
    doctors: [
      { name: "Mr. V.P. Susantha", specialty: "Physiotherapist", note: "Physiotherapy & Exercise Therapy" },
      { name: "Ms. Dilhani Nayakratne", specialty: "Speech & Language Therapist", note: "Available weekly" },
      { name: "Mr. W.M. Chamika Anuruddha", specialty: "Counsellor" },
      { name: "Mr. Prabath Athukorala", specialty: "Counsellor" },
    ],
  },
];

const consultancyOptions = Array.from(new Set(specialistGroups.flatMap((group) => group.doctors.map((doctor) => doctor.specialty)))).sort();

export const Route = createFileRoute("/consultants")({
  head: () => ({
    meta: [
      { title: "Consultants & Doctors — Olympus Lanka Hospital" },
      { name: "description", content: "Consultant listings and specialist appointments at Olympus Lanka Hospital, Debarawewa, Tissamaharama." },
      { property: "og:title", content: "Doctors & Consultants — Olympus Lanka Hospital" },
      { property: "og:description", content: "Consultant listings and specialist appointments at Olympus Lanka Hospital, Debarawewa, Tissamaharama." },
      { property: "og:url", content: "/consultants" },
    ],
    links: [{ rel: "canonical", href: "/consultants" }],
  }),
  component: ConsultantsPage,
});

function ConsultantsPage() {
  const [isSinhala, setIsSinhala] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [consultancy, setConsultancy] = useState("All consultancies");

  const filteredGroups = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return specialistGroups
      .map((group) => ({
        ...group,
        doctors: group.doctors.filter((doctor) => {
          const matchesSearch =
            !normalizedSearch ||
            doctor.name.toLowerCase().includes(normalizedSearch) ||
            doctor.specialty.toLowerCase().includes(normalizedSearch);
          const matchesConsultancy =
            consultancy === "All consultancies" || doctor.specialty === consultancy;

          return matchesSearch && matchesConsultancy;
        }),
      }))
      .filter((group) => group.doctors.length > 0);
  }, [consultancy, search]);

  return (
    <>
      <section className="bg-brand text-brand-foreground">
        <div className="container-x relative py-14 text-center sm:py-16 md:py-20">
          <button
            type="button"
            onClick={() => setIsSinhala((value) => !value)}
            className="absolute left-0 right-0 top-3 mx-auto inline-flex w-fit items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10 sm:left-auto sm:right-0 sm:mx-0 sm:top-5"
            aria-label={isSinhala ? "Switch to English" : "Switch to Sinhala"}
          >
            <Languages className="h-4 w-4" /> {isSinhala ? "English" : "සිංහල"}
          </button>
          <h1 className="pt-10 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            {isSinhala ? "අපගේ විශේෂඥ වෛද්‍යවරු" : "Our Consultants"}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/85 sm:text-base">
            {isSinhala
              ? "උපදේශන, වෛද්‍ය ප්‍රතිකාර සහ මූලික සෞඛ්‍ය සත්කාර සඳහා විවිධ විශේෂඥ වෛද්‍යවරුන්ගෙන් සම්බන්ධ වන්න."
              : "Access trusted specialists across paediatrics, medicine, surgery, women’s health, rehabilitation and counselling services."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-brand sm:text-2xl">Book via WhatsApp</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {isSinhala
                  ? "වෛද්‍ය ප්‍රතිකාර සඳහා, කරුණාකර රෝගියාගේ නම, වයස සහ සම්බන්ධතා අංකය අයදුම් කරගන්න."
                  : "When booking via WhatsApp, please share the patient name, age, and contact numbers."}
              </p>
            </div>
            <a href={waLink("Hello Olympus Lanka Hospital, I would like to book an appointment.")} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <Button className="w-full gap-2 bg-whatsapp text-white hover:opacity-90 md:w-auto">
                <MessageCircle className="h-4 w-4" /> WhatsApp {SITE.whatsappDisplay}
              </Button>
            </a>
          </div>

          <div className="mb-8 grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-5 md:grid-cols-[1.2fr_0.8fr]">
            <label className="relative block">
              <span className="mb-2 block text-sm font-medium text-muted-foreground">Search doctor name</span>
              <Search className="pointer-events-none absolute left-3 top-[2.7rem] h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type doctor name or consultation"
                className="w-full rounded-xl border border-border bg-background px-10 py-2.5 text-sm outline-none transition focus:border-brand"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-muted-foreground">Filter by consultancy</span>
              <select
                value={consultancy}
                onChange={(e) => setConsultancy(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-brand"
              >
                <option value="All consultancies">All consultancies</option>
                {consultancyOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group) => (
                <div key={group.title} className="card-soft p-4 sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                      <Stethoscope className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-brand sm:text-lg">{group.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {group.doctors.map((doctor) => (
                      <li key={doctor.name} className="rounded-2xl border border-border bg-background/60 p-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-foreground">{doctor.name}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{doctor.specialty}</p>
                            {doctor.note ? <p className="mt-2 text-xs text-brand/80">{doctor.note}</p> : null}
                          </div>
                          <Button
                            type="button"
                            size="sm"
                            className="w-full gap-2 bg-emergency text-emergency-foreground hover:bg-emergency/90 sm:w-auto"
                            onClick={() => setSelectedDoctor(`${doctor.name} (${doctor.specialty})`)}
                          >
                            <MessageCircle className="h-4 w-4" /> Book Now
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="card-soft p-8 text-center lg:col-span-2">
                <h3 className="text-xl font-bold text-brand">No doctors found</h3>
                <p className="mt-2 text-muted-foreground">Try a different doctor name or consultancy filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <BookingDialog
        open={Boolean(selectedDoctor)}
        onOpenChange={(open) => {
          if (!open) setSelectedDoctor(null);
        }}
        defaultDoctor={selectedDoctor ?? undefined}
      />
    </>
  );
}
