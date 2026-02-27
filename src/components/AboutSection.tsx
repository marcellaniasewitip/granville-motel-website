import AnimatedSection from "./AnimatedSection";
import roomImg from "@/assets/room-standard.jpg";

const AboutSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection direction="left">
          <div className="image-hover">
            <img
              src={roomImg}
              alt="Granville Motel Interior"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.2}>
          <p className="section-subheading mb-4">About Us</p>
          <h2 className="section-heading mb-6">
            Your Home Away<br />From Home
          </h2>
          <div className="gold-divider mx-0 mb-8" />
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
            Granville Motel is the perfect place for travelers and visitors who are on transit,
            conveniently located just 5 minutes' drive from Jacksons International Airport in
            the heart of Port Moresby's Six Mile district.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            We offer 130 modern rooms and 12 fully serviced apartments, each designed with
            comfort and contemporary style. Our conference centre caters for up to 400 people,
            making us the ideal choice for both leisure and business travelers.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { number: "130+", label: "Modern Rooms" },
              { number: "12", label: "Apartments" },
              { number: "400", label: "Conference Capacity" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="font-display text-3xl text-primary font-light">{stat.number}</p>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
