import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import "./ContactSection.css";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
    if (!accessKey?.trim()) {
      toast.error("Contact form is not configured", {
        description: "Add VITE_WEB3FORMS_ACCESS_KEY in Vercel (and .env locally). Get a free key at web3forms.com.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey.trim(),
          subject: form.subject || `Portfolio contact from ${form.name}`,
          name: form.name,
          email: form.email,
          replyto: form.email,
          message: `Phone: ${form.phone}\n\n${form.message}`,
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Request failed");
      }

      toast.success("Thank you for contacting me!", {
        description: "I've received your message and will get back to you soon.",
      });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast.error("Could not send your message", {
        description: "Please try again in a moment or email vatsal.vajani2911@gmail.com directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section common-bg common-section-spacing">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get in touch</h2>
          {/* <p className="contact-subtitle">
            I'm always excited to take on new projects and collaborate with innovative minds. If you
            have a project in mind or just want to chat about design, feel free to reach out!
          </p> */}
        </div>

        <div className="contact-layout">
          <div className="contact-details">
            <a href="tel:+917622868722" className="contact-link group">
              <div className="contact-icon-wrapper">
                <span className="contact-icon-span">
                  <Phone size={20} className="text-primary" />
                </span>
              </div>
              <div className="contact-info">
                <p className="contact-label">Phone Number</p>
                <p className="contact-value-link">+91 7622868722</p>
              </div>
            </a>

            <a href="mailto:vatsal.vajani2911@gmail.com" className="contact-link group">
              <div className="contact-icon-wrapper">
                <span className="contact-icon-span">
                  <Mail size={20} className="text-primary" />
                </span>
              </div>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value-link">vatsal.vajani2911@gmail.com</p>
              </div>
            </a>

            <div className="contact-link group">
              <div className="contact-icon-wrapper">
                <span className="contact-icon-span">
                  <MapPin size={20} className="text-primary" />
                </span>
              </div>
              <div>
                <p className="contact-label">Address</p>
                <p className="contact-value">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-grid">
                <div>
                  <label className="contact-form-label">
                    Your name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="contact-form-input"
                  />
                </div>
                <div>
                  <label className="contact-form-label">
                    Email address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="contact-form-input"
                  />
                </div>
              </div>
              <div className="contact-form-grid">
                <div>
                  <label className="contact-form-label">
                    Your phone <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 234 567 89"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="contact-form-input"
                  />
                </div>
                <div>
                  <label className="contact-form-label">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="I want to contact for..."
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="contact-form-input"
                  />
                </div>
              </div>
              <div>
                <label className="contact-form-label">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  placeholder="Your message here..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="contact-form-textarea"
                />
              </div>
              <Button type="submit" size="lg" className="rounded-lg gap-2" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : (
                  <>
                    Send Message <ArrowUpRight size={16} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

