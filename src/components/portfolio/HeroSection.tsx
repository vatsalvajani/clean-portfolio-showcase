import heroAvatar from "@/assets/hero-avatar.png";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="section-padding pt-28 md:pt-32 lg:pt-40 min-h-[90vh] flex items-center">
    <div className="container">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in-up">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Hello, I'm</p>
          <h1 className="heading-lg !leading-tight">
            Vatsal Vajani
          </h1>
          <p className="text-lg md:text-xl font-medium text-body-light">
            Sr. Frontend Designer — 7+ Years of Experience
          </p>
          <p className="text-body-light max-w-lg mx-auto md:mx-0 leading-relaxed">
            Building responsive, performance-optimized websites across industries like finance, infrastructure, architecture, and company branding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="#work">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-accent" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-accent overflow-hidden border-4 border-primary/20">
            <img src={heroAvatar} alt="Vatsal Vajani" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 md:mt-16">
        <a href="#services" className="animate-bounce text-primary">
          <ArrowDown size={28} />
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
