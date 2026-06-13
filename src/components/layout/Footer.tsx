import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground mt-20">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Olympus Lanka Hospital" className="h-10 w-10 bg-white rounded-lg p-1" width={40} height={40} />
            <div>
              <div className="font-bold">Olympus Lanka Hospital</div>
              <div className="text-xs opacity-80">Caring for Life · Since 2022</div>
            </div>
          </div>
          <p className="text-sm opacity-85 leading-relaxed">
            A trusted private hospital in Tissamaharama delivering 24/7 emergency, OPD and specialist care backed by modern medical technology.
          </p>
        </div>

        <div>
          <h4 className="text-brand-foreground font-semibold mb-4">Address</h4>
          <p className="text-sm opacity-90 not-italic flex gap-2">
            <MapPin className="h-4 w-4 mt-1 shrink-0" />
            <span>
              {SITE.address.line1}<br />
              {SITE.address.line2}<br />
              {SITE.address.city} {SITE.address.postal}<br />
              {SITE.address.country}
            </span>
          </p>
        </div>

        <div>
          <h4 className="text-brand-foreground font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {SITE.phones.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:underline">{p}</a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:underline break-all">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" /> 24×7 Online Support
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-foreground font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/consultants" className="hover:underline">Consultants</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs opacity-80 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Olympus Lanka Hospital (Pvt) Ltd. All rights reserved.</span>
          <span>Tissamaharama, Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
