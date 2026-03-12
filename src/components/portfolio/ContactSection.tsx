import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:vatsalvajani2911@gmail.com?subject=${encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`)}&body=${encodeURIComponent(form.message)}`;
  };

  return (
    <section id="contact" className="section-padding bg-section-alt">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold italic text-primary mb-4">Get in touch</h2>
          <p className="text-body-light max-w-2xl text-sm leading-relaxed">
            I'm always excited to take on new projects and collaborate with innovative minds. If you
            have a project in mind or just want to chat about design, feel free to reach out!
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* Left - Contact Details */}
          <div className="flex flex-col gap-6">
            <a href="tel:+917622868722" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-body-light">Phone Number</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">+91 7622868722</p>
              </div>
            </a>

            <a href="mailto:vatsalvajani2911@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-body-light">Email</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">vatsalvajani2911@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-body-light">Address</p>
                <p className="text-sm font-semibold text-foreground">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Leave a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-foreground mb-1 block">Your name <span className="text-primary">*</span></label>
                  <input
                    type="text" placeholder="John Doe" required
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground mb-1 block">Email address <span className="text-primary">*</span></label>
                  <input
                    type="email" placeholder="your@email.com" required
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-foreground mb-1 block">Your phone <span className="text-primary">*</span></label>
                  <input
                    type="tel" placeholder="+91 234 567 89" required
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground mb-1 block">Subject <span className="text-primary">*</span></label>
                  <input
                    type="text" placeholder="I want to contact for..." required
                    value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1 block">Message <span className="text-primary">*</span></label>
                <textarea
                  placeholder="Your message here..." required rows={5}
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="rounded-lg gap-2">
                Send Message <ArrowUpRight size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
