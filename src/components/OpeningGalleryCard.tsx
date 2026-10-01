import { useState, useEffect, useRef } from "react";
import { Camera, ChevronLeft, ChevronRight, X, Pause, Play, Maximize2 } from "lucide-react";

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
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto slide effect every 4.5 seconds
  useEffect(() => {
    if (modalOpen || isPaused) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev === OPENING_PHOTOS.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [modalOpen, isPaused]);

  const current = OPENING_PHOTOS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? OPENING_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === OPENING_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  // Touch Swipe Handlers for Mobile UX
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="card-soft overflow-hidden p-4 sm:p-6 md:p-8 bg-background border border-border/60 shadow-lg rounded-2xl sm:rounded-3xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header section optimized for mobile */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emergency/10 text-emergency text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-1">
            <Camera className="h-3 w-3" /> Opening Ceremony Gallery
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground">
            Olympus Lanka Hospital Grand Opening
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Historic moments from our official hospital opening event.
          </p>
        </div>

        {/* Mobile-friendly controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="h-8 sm:h-10 px-2.5 sm:px-3 rounded-full border border-border flex items-center gap-1 text-[11px] sm:text-xs font-medium hover:bg-secondary transition-colors text-muted-foreground"
            aria-label={isPaused ? "Resume auto slide" : "Pause auto slide"}
          >
            {isPaused ? <Play className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-health fill-current" /> : <Pause className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-muted-foreground" />}
            <span>{isPaused ? "Play" : "Pause"}</span>
          </button>
          <button
            onClick={handlePrev}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-border grid place-items-center hover:bg-secondary active:scale-95 transition-all"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <span className="text-[11px] sm:text-xs font-medium text-muted-foreground px-1">
            {activeIdx + 1}/{OPENING_PHOTOS.length}
          </span>
          <button
            onClick={handleNext}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-border grid place-items-center hover:bg-secondary active:scale-95 transition-all"
            aria-label="Next photo"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Main Display Area - Touch Swipeable & Responsive Height */}
      <div
        className="relative group rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 aspect-[4/3] sm:aspect-[16/9] shadow-md touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none z-20" />

        {/* Navigation arrows directly on photo for mobile convenience */}
        <button
          onClick={handlePrev}
          className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 z-30 h-9 w-9 rounded-full bg-black/40 text-white backdrop-blur-sm grid place-items-center active:scale-90"
          aria-label="Previous photo"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 z-30 h-9 w-9 rounded-full bg-black/40 text-white backdrop-blur-sm grid place-items-center active:scale-90"
          aria-label="Next photo"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Caption & Expand Button Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5 md:p-7 text-white flex items-end justify-between gap-3 z-30">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-emergency/90 px-2 py-0.5 rounded-full shadow-sm">
                {activeIdx + 1} of {OPENING_PHOTOS.length}
              </span>
              <span className="text-[10px] text-white/60 sm:hidden">Swipe left/right</span>
            </div>
            <h4 className="text-base sm:text-xl md:text-2xl font-bold truncate">{current.title}</h4>
            <p className="text-[11px] sm:text-xs md:text-sm text-white/85 mt-0.5 line-clamp-2 sm:line-clamp-none max-w-xl">
              {current.desc}
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="flex-shrink-0 inline-flex items-center gap-1 text-[11px] sm:text-xs bg-white/20 hover:bg-white/30 active:scale-95 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-lg font-medium transition-all text-white"
            aria-label="View Fullscreen"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Fullscreen</span>
          </button>
        </div>

        {/* Top Progress bar indicator */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-30">
          <div
            key={activeIdx + (isPaused ? "-paused" : "-active")}
            className={`h-full bg-emergency ${
              isPaused ? "w-full opacity-40" : "animate-[progress_4.5s_linear_infinite]"
            }`}
            style={{
              animation: isPaused ? "none" : "progress 4.5s linear infinite",
            }}
          />
        </div>
      </div>

      {/* Mobile Dot Indicators & Responsive Thumbnails */}
      <div className="mt-3 sm:mt-4">
        {/* Mobile Dot Indicators */}
        <div className="flex sm:hidden justify-center items-center gap-1.5 mb-2">
          {OPENING_PHOTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIdx ? "w-6 bg-emergency" : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Selector with Touch Scroll */}
        <div className="flex sm:grid sm:grid-cols-5 gap-2 sm:gap-3 overflow-x-auto pb-1 sm:pb-0 scrollbar-none touch-pan-x">
          {OPENING_PHOTOS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`relative flex-shrink-0 w-20 sm:w-auto rounded-lg sm:rounded-xl overflow-hidden aspect-[16/10] border-2 transition-all duration-300 ${
                idx === activeIdx
                  ? "border-emergency ring-2 ring-emergency/30 scale-[1.02] opacity-100"
                  : "border-transparent opacity-50 hover:opacity-100"
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
      </div>

      {/* Lightbox Modal for Fullscreen Mobile & Desktop */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6">
          <div className="flex justify-between items-center text-white z-10">
            <span className="text-xs font-semibold text-white/80">
              {activeIdx + 1} / {OPENING_PHOTOS.length}
            </span>
            <button
              onClick={() => setModalOpen(false)}
              className="text-white/80 hover:text-white p-2 rounded-full bg-white/10 active:scale-90 transition-transform"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Main Fullscreen Image Area with Touch Swipe */}
          <div
            className="relative flex-1 flex items-center justify-center my-auto touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={handlePrev}
              className="absolute left-1 sm:left-4 z-20 text-white p-2.5 sm:p-3 rounded-full bg-black/50 sm:bg-white/10 hover:bg-white/20 active:scale-90 transition-transform"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[72vh] sm:max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />

            <button
              onClick={handleNext}
              className="absolute right-1 sm:right-4 z-20 text-white p-2.5 sm:p-3 rounded-full bg-black/50 sm:bg-white/10 hover:bg-white/20 active:scale-90 transition-transform"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>
          </div>

          {/* Modal Caption */}
          <div className="text-center max-w-2xl mx-auto text-white pb-2 z-10">
            <h4 className="text-lg sm:text-xl font-bold">{current.title}</h4>
            <p className="text-xs sm:text-sm text-white/75 mt-1">{current.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
