import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:vatsalvajani2911@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="section-padding bg-section-alt">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">Contact</p>
          <h2 className="heading-md">Get in Touch</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
          <a href="mailto:vatsalvajani2911@gmail.com" className="flex items-center gap-3 text-body-light hover:text-primary transition-colors">
            <Mail size={18} className="text-primary" />
            <span className="text-sm">vatsalvajani2911@gmail.com</span>
          </a>
          <a href="tel:+917622868722" className="flex items-center gap-3 text-body-light hover:text-primary transition-colors">
            <Phone size={18} className="text-primary" />
            <span className="text-sm">+91 7622868722</span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
          <Button type="submit" size="lg" className="w-full rounded-lg">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
