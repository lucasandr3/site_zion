import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    segment: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    alert("Thank you! We'll be in touch shortly.");
    setForm({ name: "", company: "", email: "", phone: "", segment: "", message: "" });
  };

  const inputClasses =
    "w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300";

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Start the Conversation
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card rounded-xl p-8 md:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className={inputClasses}
            />
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className={inputClasses}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className={inputClasses}
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className={inputClasses}
            />
          </div>
          <select
            name="segment"
            value={form.segment}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Business Segment</option>
            <option value="healthcare">Healthcare</option>
            <option value="aesthetics">Aesthetic Centers</option>
            <option value="realestate">Real Estate</option>
            <option value="automotive">Automotive</option>
            <option value="retail">Retail</option>
            <option value="furniture">Custom Furniture</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            className={inputClasses + " resize-none"}
          />
          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground font-heading font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 glow-gold"
          >
            Submit Request
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
