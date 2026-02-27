import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark-overlay border-t border-border/30">
    <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-wider text-foreground mb-2">
            GRANVILLE
          </h3>
          <p className="font-serif text-xs tracking-[0.35em] uppercase text-primary mb-6">
            Motel — Port Moresby
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            The perfect place for travelers and visitors, located just 5 minutes from
            Jacksons International Airport.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-primary mb-6">
            Explore
          </h4>
          <div className="flex flex-col gap-3">
            {["Home", "Accommodation", "Conference", "Gallery", "Contact"].map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-primary mb-6">
            Contact
          </h4>
          <div className="flex flex-col gap-4">
            <a href="tel:+6753257155" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mt-0.5 text-primary" />
              (675) 325 7155
            </a>
            <a href="mailto:reservations@granvillemotelpom.com" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4 mt-0.5 text-primary" />
              reservations@granvillemotelpom.com
            </a>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <span>Morea Tobo Road, Six Mile,<br />Port Moresby, NCD,<br />Papua New Guinea</span>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-primary mb-6">
            Front Desk
          </h4>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            24 Hours / 7 Days a Week
          </p>
          <div className="gold-divider mt-6 mx-0" />
          <p className="font-body text-xs text-muted-foreground mt-4">
            130 Modern Rooms • 12 Apartments
            <br />
            Conference Centre for up to 400 guests
          </p>
        </div>
      </div>

      <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Granville Motel. All rights reserved.
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Morea Tobo Road, Six Mile, Port Moresby, Papua New Guinea
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
