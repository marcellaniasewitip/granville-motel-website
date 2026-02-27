import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import poolImg from "@/assets/pool-area.jpg";
import diningImg from "@/assets/dining.jpg";
import locationImg from "@/assets/location-pom.jpg";

const images = [
  { src: poolImg, alt: "Pool Area" },
  { src: diningImg, alt: "Restaurant" },
  { src: locationImg, alt: "Port Moresby" },
];

const GalleryPreview = () => (
  <section className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-12">
        <p className="section-subheading mb-4">Gallery</p>
        <h2 className="section-heading mb-6">Discover Our Spaces</h2>
        <div className="gold-divider" />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <AnimatedSection key={img.alt} delay={i * 0.15}>
            <div className="image-hover aspect-[4/3]">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-12">
        <Link
          to="/gallery"
          className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-3"
        >
          View Full Gallery
          <ArrowRight className="w-4 h-4" />
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default GalleryPreview;
