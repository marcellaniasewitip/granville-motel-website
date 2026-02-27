import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-motel.jpg";

const HeroSection = () => (
  <section className="relative h-screen min-h-[700px] overflow-hidden">
    <motion.div
      initial={{ scale: 1.15 }}
      animate={{ scale: 1 }}
      transition={{ duration: 8, ease: "easeOut" }}
      className="absolute inset-0"
    >
      <img src={heroImg} alt="Granville Motel Port Moresby" className="w-full h-full object-cover" />
    </motion.div>
    <div className="hero-overlay" />

    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="section-subheading mb-4"
      >
        Welcome to
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wider text-foreground mb-6"
      >
        GRANVILLE MOTEL
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="gold-divider mb-6"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="font-serif text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 italic"
      >
        Your gateway to comfort in Port Moresby — just 5 minutes from the International Airport
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/accommodation"
          className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 flex items-center gap-3"
        >
          Explore Rooms
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/contact"
          className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 border border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-all duration-300"
        >
          Make a Reservation
        </Link>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-px h-16 bg-gradient-to-b from-primary/0 via-primary to-primary/0"
      />
    </motion.div>
  </section>
);

export default HeroSection;
