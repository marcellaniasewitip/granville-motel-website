import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Accommodation", path: "/accommodation" },
  { label: "Conference", path: "/conference" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex flex-col">
            <span className="font-display text-2xl md:text-3xl font-semibold tracking-wider text-foreground">
              GRANVILLE
            </span>
            <span className="font-serif text-xs tracking-[0.35em] uppercase text-primary -mt-1">
              Motel — Port Moresby
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm tracking-[0.15em] uppercase transition-colors duration-300 hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+6753257155"
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-body tracking-wider">(675) 325 7155</span>
            </a>
            <Link
              to="/contact"
              className="font-body text-sm tracking-[0.15em] uppercase px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border/50"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`font-display text-2xl tracking-wider ${
                      location.pathname === link.path ? "text-primary" : "text-foreground/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="font-body text-sm tracking-[0.15em] uppercase px-6 py-3 border border-primary text-primary text-center mt-4"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
