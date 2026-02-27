import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import conferenceImg from "@/assets/conference.jpg";

const ConferencePreview = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={conferenceImg} alt="Conference Centre" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
    </div>

    <div className="relative section-padding">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <p className="section-subheading mb-4">Conferences & Events</p>
          <h2 className="section-heading mb-6">
            State-of-the-Art<br />Conference Centre
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            Our world-class conference centre accommodates up to 400 guests, equipped with
            modern audio-visual technology and flexible seating arrangements for meetings,
            conferences, weddings, and special events.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {[
              { label: "Capacity", value: "400" },
              { label: "Meeting Rooms", value: "4+" },
              { label: "AV Equipment", value: "Modern" },
              { label: "Catering", value: "Full" },
            ].map((item) => (
              <div key={item.label} className="glass-card p-6">
                <p className="font-display text-2xl text-primary">{item.value}</p>
                <p className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <Link
            to="/conference"
            className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-3"
          >
            Explore Venue
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ConferencePreview;
