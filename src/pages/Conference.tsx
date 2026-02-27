import { motion } from "framer-motion";
import { Users, Monitor, Utensils, Music } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import conferenceImg from "@/assets/conference.jpg";
import diningImg from "@/assets/dining.jpg";

const venues = [
  {
    title: "Grand Ballroom",
    capacity: "400",
    description: "Our flagship venue for large-scale conferences, gala dinners, and corporate events.",
    image: conferenceImg,
  },
  {
    title: "Boardroom",
    capacity: "30",
    description: "An intimate setting for executive meetings and corporate discussions.",
    image: diningImg,
  },
];

const Conference = () => (
  <main>
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        src={conferenceImg}
        alt="Conference Centre"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="section-subheading mb-4">
          Events & Meetings
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="section-heading">
          Conference Centre
        </motion.h1>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="font-body text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate boardroom meetings to grand conferences and celebrations,
            our state-of-the-art facilities provide the perfect setting for every occasion.
            Our dedicated events team ensures every detail is flawlessly executed.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Users, label: "Up to 400 Guests", desc: "Flexible seating" },
            { icon: Monitor, label: "Modern AV", desc: "Full tech support" },
            { icon: Utensils, label: "Full Catering", desc: "Custom menus" },
            { icon: Music, label: "Entertainment", desc: "Event coordination" },
          ].map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div className="glass-card p-6 text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-display text-sm mb-1">{item.label}</p>
                <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="flex flex-col gap-16">
          {venues.map((venue, i) => (
            <AnimatedSection key={venue.title}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                <div className={`image-hover aspect-[16/10] ${i % 2 ? "lg:order-2" : ""}`}>
                  <img src={venue.image} alt={venue.title} className="w-full h-full object-cover" />
                </div>
                <div className={i % 2 ? "lg:order-1" : ""}>
                  <p className="section-subheading mb-2">Capacity: {venue.capacity}</p>
                  <h2 className="font-display text-3xl font-light mb-4">{venue.title}</h2>
                  <div className="gold-divider mx-0 mb-6" />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{venue.description}</p>
                  <a
                    href="mailto:reservations@granvillemotelpom.com"
                    className="font-body text-sm tracking-[0.2em] uppercase px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-block"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Conference;
