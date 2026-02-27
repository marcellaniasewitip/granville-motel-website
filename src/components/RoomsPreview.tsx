import { Link } from "react-router-dom";
import { ArrowRight, Bed, Maximize, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import roomStandard from "@/assets/room-standard.jpg";
import roomApartment from "@/assets/room-apartment.jpg";

const rooms = [
  {
    title: "Standard Room",
    description: "Contemporary comfort with modern amenities, perfect for business or leisure stays.",
    image: roomStandard,
    beds: "1 King / 2 Twin",
    area: "28 sqm",
    guests: "2 Adults",
  },
  {
    title: "Deluxe Room",
    description: "Spacious rooms with enhanced amenities, offering a premium stay experience.",
    image: roomApartment,
    beds: "1 King",
    area: "35 sqm",
    guests: "2 Adults",
  },
];

const RoomsPreview = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="section-subheading mb-4">Accommodation</p>
        <h2 className="section-heading mb-6">Our Rooms & Suites</h2>
        <div className="gold-divider mb-6" />
        <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
          130 modern rooms and 12 apartments designed for your comfort and convenience.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rooms.map((room, i) => (
          <AnimatedSection key={room.title} delay={i * 0.2}>
            <div className="glass-card overflow-hidden group">
              <div className="image-hover aspect-[16/10]">
                <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl mb-3">{room.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-6">{room.description}</p>
                <div className="flex gap-6 mb-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Bed className="w-4 h-4 text-primary" />
                    {room.beds}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Maximize className="w-4 h-4 text-primary" />
                    {room.area}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    {room.guests}
                  </div>
                </div>
                <Link
                  to="/accommodation"
                  className="font-body text-xs tracking-[0.15em] uppercase text-primary flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  View Details <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-12">
        <Link
          to="/accommodation"
          className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-3"
        >
          View All Rooms
          <ArrowRight className="w-4 h-4" />
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default RoomsPreview;
