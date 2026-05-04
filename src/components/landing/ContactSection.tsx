import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

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
    alert("Obrigado! Entraremos em contato em breve.");
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
            Fale conosco
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Inicie a conversa sobre seu site e seu atendimento
          </h2>
          <p className="mt-3 text-muted-foreground font-body">
            Uberlandia - Minas Gerais | WhatsApp: (34) 99640-818
          </p>
          <a
            href="https://wa.me/553499640818?text=Oi!%20Sou%20de%20Uberlandia%20e%20quero%20um%20site%20profissional%20com%20atendimento%20automatizado%20da%20Zion%20Tech."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 border border-primary/40 text-primary font-heading font-semibold px-6 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            Falar sobre meu projeto no WhatsApp
            <MessageCircle className="w-4 h-4" />
          </a>
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
              placeholder="Nome completo"
              required
              className={inputClasses}
            />
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Nome da empresa"
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
              placeholder="Telefone"
              className={inputClasses}
            />
          </div>
          <select
            name="segment"
            value={form.segment}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Segmento da empresa</option>
            <option value="healthcare">Saúde</option>
            <option value="aesthetics">Centros estéticos</option>
            <option value="realestate">Imobiliário</option>
            <option value="automotive">Automotivo</option>
            <option value="retail">Varejo</option>
            <option value="furniture">Móveis planejados</option>
            <option value="other">Outro</option>
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Mensagem"
            rows={4}
            className={inputClasses + " resize-none"}
          />
          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground font-heading font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 glow-gold"
          >
            Enviar solicitação
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
