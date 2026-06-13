export const SITE = {
  name: "Olympus Lanka Hospital",
  shortName: "Olympus Hospital",
  tagline: "Caring for Life — 24/7 Healthcare in Tissamaharama",
  address: {
    line1: 'Olympus Lanka Hospital, "Olympus"',
    line2: "Hambantota Road, Debarawewa",
    city: "Tissamaharama",
    postal: "82600",
    country: "Sri Lanka",
  },
  phones: ["07777 88080", "071 44 00000", "047 2259 0000", "047 32 00000"],
  whatsapp: "+94777788080",
  whatsappDisplay: "+94 77 778 8080",
  email: "contact@olympuslankahospital.com",
  mapsEmbed:
    "https://www.google.com/maps?q=Olympus+Lanka+Hospital+Debarawewa+Tissamaharama&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Olympus+Lanka+Hospital+Debarawewa+Tissamaharama",
};

export const waLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
