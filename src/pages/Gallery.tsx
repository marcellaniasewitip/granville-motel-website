import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import heroImg from "@/assets/hero-motel.jpg";
import roomStandard from "@/assets/room-standard.jpg";
import roomApartment from "@/assets/room-apartment.jpg";
import conferenceImg from "@/assets/conference.jpg";
import poolArea from "@/assets/pool-area.jpg";
import diningImg from "@/assets/dining.jpg";
import locationImg from "@/assets/location-pom.jpg";

const allImages = [
  { src: heroImg, alt: "Granville Motel Exterior", category: "Exterior" },
  { src: roomStandard, alt: "Standard Room", category: "Rooms" },
  { src: roomApartment, alt: "Apartment Suite", category: "Rooms" },
  { src: conferenceImg, alt: "Conference Centre", category: "Events" },
  { src: poolArea, alt: "Pool Area", category: "Facilities" },
  { src: diningImg, alt: "Restaurant", category: "Dining" },
  { src: locationImg, alt: "Port Moresby", category: "Exterior" },
];

const categories = ["All", ...new Set(allImages.map((i) => i.category))];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = activeCategory === "All" ? allImages : allImages.filter((i) => i.category === activeCategory);

  return (
    <main>
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
          src={poolArea}
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="section-subheading mb-4">
            Explore
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="section-heading">
            Our Gallery
          </motion.h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs tracking-[0.15em] uppercase px-6 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img) => (
                <motion.div
                  key={img.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="image-hover aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
