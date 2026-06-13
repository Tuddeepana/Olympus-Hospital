import { MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hello Olympus Lanka Hospital, I'd like to inquire about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp ${SITE.whatsappDisplay}`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-white shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">Chat on WhatsApp</span>
    </a>
  );
}
