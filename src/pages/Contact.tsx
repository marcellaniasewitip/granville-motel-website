import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroImg from "@/assets/hero-motel.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main>
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
          src={heroImg}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="section-subheading mb-4">
            Get In Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="section-heading">
            Contact Us
          </motion.h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedSection direction="left">
              <p className="section-subheading mb-4">Reach Us</p>
              <h2 className="font-display text-3xl font-light mb-6">We'd Love to Hear From You</h2>
              <div className="gold-divider mx-0 mb-8" />

              <div className="flex flex-col gap-6 mb-10">
                <a href="tel:+6753257155" className="flex items-start gap-4 group">
                  <div className="glass-card p-3">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1">Phone</p>
                    <p className="font-body text-foreground group-hover:text-primary transition-colors">(675) 325 7155</p>
                  </div>
                </a>
                <a href="mailto:reservations@granvillemotelpom.com" className="flex items-start gap-4 group">
                  <div className="glass-card p-3">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1">Email</p>
                    <p className="font-body text-foreground group-hover:text-primary transition-colors">reservations@granvillemotelpom.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="glass-card p-3">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1">Address</p>
                    <p className="font-body text-foreground">Morea Tobo Road, Six Mile<br />Port Moresby, NCD<br />Papua New Guinea</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="glass-card p-3">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1">Front Desk</p>
                    <p className="font-body text-foreground">24 Hours / 7 Days</p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="aspect-[16/9] bg-muted overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.8!2d147.0!3d-9.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjUnNDguMCJTIDE0N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2spg!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Granville Motel Location"
                />
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="glass-card p-8 md:p-10">
                <h3 className="font-display text-2xl mb-2">Send an Enquiry</h3>
                <p className="font-body text-sm text-muted-foreground mb-8">Fill in the form below and our team will get back to you shortly.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-primary" />
                    </div>
                    <p className="font-display text-xl mb-2">Thank You!</p>
                    <p className="font-body text-sm text-muted-foreground">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background/50 border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background/50 border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background/50 border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-background/50 border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select Subject</option>
                        <option value="reservation">Room Reservation</option>
                        <option value="conference">Conference Booking</option>
                        <option value="apartment">Apartment Enquiry</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/50 border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                    <button
                      type="submit"
                      className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
