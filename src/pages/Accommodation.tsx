import { motion } from "framer-motion";
import { Bed, Maximize, Users, Wifi, Car, Coffee, Utensils, Dumbbell, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import roomStandard from "@/assets/room-standard.jpg";
import roomApartment from "@/assets/room-apartment.jpg";
import poolArea from "@/assets/pool-area.jpg";
import diningImg from "@/assets/dining.jpg";

const rooms = [
  {
    title: "Standard Room",
    description: "Contemporary comfort with modern amenities including air-conditioning, flat-screen TV, ensuite bathroom, and complimentary Wi-Fi.",
    image: roomStandard,
    beds: "1 King / 2 Twin",
    area: "28 sqm",
    guests: "2 Adults",
  },
  {
    title: "Deluxe Room",
    description: "Spacious and elegantly appointed rooms with premium furnishings, work desk, minibar, and panoramic views of the surrounding gardens.",
    image: roomApartment,
    beds: "1 King",
    area: "35 sqm",
    guests: "2 Adults",
  },
  {
    title: "Executive Suite",
    description: "Separate living and sleeping areas with premium amenities, ideal for extended stays and business travelers seeking extra space.",
    image: poolArea,
    beds: "1 King",
    area: "55 sqm",
    guests: "3 Adults",
  },
  {
    title: "Serviced Apartment",
    description: "Fully equipped apartments featuring kitchen, laundry facilities, and spacious living areas — perfect for long-term stays and families.",
    image: diningImg,
    beds: "1-2 King",
    area: "75 sqm",
    guests: "4 Adults",
  },
];

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Free Parking" },
  { icon: Coffee, label: "Room Service" },
  { icon: Utensils, label: "Restaurant" },
  { icon: Dumbbell, label: "Fitness Centre" },
  { icon: ShieldCheck, label: "24hr Security" },
];

const Accommodation = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        src={roomStandard}
        alt="Accommodation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="section-subheading mb-4">
          Stay With Us
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="section-heading">
          Accommodation
        </motion.h1>
      </div>
    </section>

    {/* Rooms */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col gap-20">
          {rooms.map((room, i) => (
            <AnimatedSection key={room.title} delay={0.1}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:direction-rtl" : ""}`}>
                <div className={`image-hover aspect-[16/10] ${i % 2 ? "lg:order-2" : ""}`}>
                  <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
                </div>
                <div className={i % 2 ? "lg:order-1" : ""}>
                  <p className="section-subheading mb-2">0{i + 1}</p>
                  <h2 className="font-display text-3xl md:text-4xl font-light mb-4">{room.title}</h2>
                  <div className="gold-divider mx-0 mb-6" />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{room.description}</p>
                  <div className="flex gap-8 mb-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Bed className="w-4 h-4 text-primary" /> {room.beds}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Maximize className="w-4 h-4 text-primary" /> {room.area}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" /> {room.guests}
                    </div>
                  </div>
                  <a
                    href="mailto:reservations@granvillemotelpom.com"
                    className="font-body text-sm tracking-[0.2em] uppercase px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-block"
                  >
                    Book This Room
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Amenities */}
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <p className="section-subheading mb-4">What We Offer</p>
          <h2 className="section-heading mb-6">Hotel Amenities</h2>
          <div className="gold-divider mb-12" />
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((a, i) => (
            <AnimatedSection key={a.label} delay={i * 0.1}>
              <div className="glass-card p-6 flex flex-col items-center gap-3">
                <a.icon className="w-8 h-8 text-primary" />
                <span className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground">{a.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Accommodation;
