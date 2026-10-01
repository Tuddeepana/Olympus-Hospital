import { useState, useEffect } from "react";
import { Camera, ChevronLeft, ChevronRight, X, Pause, Play } from "lucide-react";

export const OPENING_PHOTOS = [
  {
    id: 1,
    src: "/oly1.jpeg",
    title: "Grand Opening Ribbon Cutting",
    alt: "Olympus Lanka Hospital grand opening ribbon cutting ceremony in Tissamaharama",
    desc: "Official grand opening ribbon cutting by leadership and medical team at Olympus Lanka Hospital.",
  },
  {
    id: 2,
    src: "/oly2.jpeg",
    title: "Hospital Opening Reception",
    alt: "Olympus Lanka Hospital inauguration reception celebrating healthcare launch in Southern Sri Lanka",
    desc: "Guests, community members, and medical personnel gathered for the official hospital opening.",
  },
  {
    id: 3,
    src: "/oly3.jpeg",
    title: "Traditional Oil Lamp Lighting",
    alt: "Traditional Sri Lankan oil lamp lighting ceremony at Olympus Lanka Hospital opening event",
    desc: "A solemn oil lamp lighting ceremony marking a blessed beginning for compassionate care.",
  },
  {
    id: 4,
    src: "/oly4.jpeg",
    title: "Medical Facility & Suite Tour",
    alt: "Doctors showing state of the art medical equipment and wards at Olympus Lanka Hospital",
    desc: "Specialists and staff showcasing modern diagnostic and surgical facilities during opening day.",
  },
  {
    id: 5,
    src: "/ol2.png",
    title: "Olympus Healthcare Team Celebration",
    alt: "Olympus Lanka Hospital doctor and nurse team celebrating grand inauguration in Tissamaharama",
    desc: "Our dedicated healthcare team celebrating the grand opening of Olympus Lanka Hospital.",
  },
];

export function OpeningGalleryCard() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide effect every 4 seconds
  useEffect(() => {
    if (modalOpen || isPaused) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev === OPENING_PHOTOS.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [modalOpen, isPaused]);

  const current = OPENING_PHOTOS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? OPENING_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === OPENING_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="card-soft overflow-hidden p-6 md:p-8 bg-background border border-border/60 shadow-lg rounded-3xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emergency/10 text-emergency text-xs font-semibold uppercase tracking-wider mb-2">
            <Camera className="h-3.5 w-3.5" /> Opening Ceremony Gallery
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
            Olympus Lanka Hospital Grand Opening
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Highlights and historic moments from our official hospital opening in Tissamaharama.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="h-10 px-3 rounded-full border border-border flex items-center gap-1.5 text-xs font-medium hover:bg-secondary transition-colors text-muted-foreground"
            title={isPaused ? "Resume auto slide" : "Pause auto slide"}
            aria-label={isPaused ? "Resume auto slide" : "Pause auto slide"}
          >
            {isPaused ? <Play className="h-3.5 w-3.5 text-health fill-current" /> : <Pause className="h-3.5 w-3.5 text-muted-foreground" />}
            <span className="hidden sm:inline">{isPaused ? "Play" : "Pause"}</span>
          </button>
          <button
            onClick={handlePrev}
            className="h-10 w-10 rounded-full border border-border grid place-items-center hover:bg-secondary transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-xs font-medium text-muted-foreground px-2">
            {activeIdx + 1} / {OPENING_PHOTOS.length}
          </span>
          <button
            onClick={handleNext}
            className="h-10 w-10 rounded-full border border-border grid place-items-center hover:bg-secondary transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Display Card with Smooth Crossfade Animation */}
      <div className="relative group rounded-2xl overflow-hidden bg-slate-950 aspect-[16/9] shadow-md">
        {OPENING_PHOTOS.map((item, idx) => (
          <img
            key={item.id}
            src={item.src}
            alt={item.alt}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out cursor-pointer ${
              idx === activeIdx ? "opacity-100 scale-100 z-10" : "opacity-0 pointer-events-none z-0"
            }`}
            onClick={() => setModalOpen(true)}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none z-20" />
        
        {/* Caption & Controls overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-white flex justify-between items-end z-30">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-white bg-emergency/90 px-2.5 py-0.5 rounded-full inline-block mb-1.5 shadow-sm">
              Photo {activeIdx + 1} of {OPENING_PHOTOS.length}
            </span>
            <h4 className="text-xl md:text-2xl font-bold transition-all duration-300">{current.title}</h4>
            <p className="text-xs md:text-sm text-white/85 mt-1 max-w-xl transition-all duration-300">
              {current.desc}
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-lg font-medium transition-all"
          >
            View Fullscreen
          </button>
        </div>

        {/* Top Progress bar indicator for Auto Slide */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30">
          <div
            key={activeIdx + (isPaused ? "-paused" : "-active")}
            className={`h-full bg-emergency transition-all ${
              isPaused ? "w-full opacity-40" : "animate-[progress_4s_linear_infinite]"
            }`}
            style={{
              animation: isPaused ? "none" : "progress 4s linear infinite",
            }}
          />
        </div>
      </div>

      {/* 5 Thumbnails selector with active indicator */}
      <div className="grid grid-cols-5 gap-2 sm:gap-3 mt-4">
        {OPENING_PHOTOS.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveIdx(idx)}
            className={`relative rounded-xl overflow-hidden aspect-[16/10] border-2 transition-all duration-300 ${
              idx === activeIdx
                ? "border-emergency ring-2 ring-emergency/30 scale-[1.03] opacity-100"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] text-center">
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[70vh] mx-auto rounded-xl object-contain shadow-2xl"
            />
            <h4 className="text-xl font-bold text-white mt-4">{current.title}</h4>
            <p className="text-sm text-white/70 mt-1">{current.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
