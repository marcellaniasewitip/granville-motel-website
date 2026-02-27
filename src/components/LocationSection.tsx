import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import locationImg from "@/assets/location-pom.jpg";

const LocationSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={locationImg} alt="Port Moresby" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/80" />
    </div>

    <div className="relative section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <p className="section-subheading mb-4">Our Location</p>
            <h2 className="section-heading mb-6">Discover<br />Port Moresby</h2>
            <div className="gold-divider mx-0 mb-8" />
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Situated in the Six Mile area of Port Moresby, National Capital District,
              Granville Motel is just a 5-minute drive from Jacksons International Airport —
              making it the perfect stopover for transit travelers and visitors to Papua New Guinea.
            </p>
            <div className="flex items-start gap-3 mb-8">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="font-body text-sm text-foreground/70">
                Morea Tobo Road, Six Mile,<br />
                Port Moresby, National Capital District,<br />
                Papua New Guinea
              </p>
            </div>
            <Link
              to="/contact"
              className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-3"
            >
              Get Directions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="glass-card p-8">
              <h3 className="font-display text-xl mb-6">Nearby Attractions</h3>
              <div className="flex flex-col gap-4">
                {[
                  { name: "Jacksons International Airport", dist: "5 min" },
                  { name: "Port Moresby CBD", dist: "15 min" },
                  { name: "National Parliament House", dist: "20 min" },
                  { name: "Port Moresby Nature Park", dist: "10 min" },
                  { name: "Ela Beach", dist: "25 min" },
                ].map((place) => (
                  <div key={place.name} className="flex justify-between items-center border-b border-border/30 pb-3">
                    <span className="font-body text-sm text-foreground/80">{place.name}</span>
                    <span className="font-body text-xs text-primary tracking-wider">{place.dist}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
