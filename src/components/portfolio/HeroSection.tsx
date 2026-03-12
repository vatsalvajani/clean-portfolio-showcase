import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="section-padding pt-28 md:pt-32 lg:pt-40 min-h-[90vh] flex items-center overflow-hidden">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 text-center md:text-left space-y-6">
          <p className="text-base text-body-light">👋 Hi there, I'm Vatsal</p>
          <h1 className="heading-lg !leading-tight !text-4xl md:!text-5xl lg:!text-6xl">
            <span className="text-foreground" style={{ color: 'hsl(var(--foreground))' }}>Crafting Intuitive</span>
            <br />
            <span className="text-primary">Digital Experiences</span>
          </h1>
          <p className="text-body-light max-w-lg mx-auto md:mx-0 leading-relaxed text-base">
            I assist individuals and brands in achieving their objectives by creating and developing user-focused digital products and interactive experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Button size="lg" className="rounded-full px-8 gap-2" asChild>
              <a href="#contact">
                Download CV <Download size={18} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-border text-foreground hover:bg-accent gap-2" asChild>
              <a href="#contact">
                Hire me <ArrowRight size={18} />
              </a>
            </Button>
          </div>
          <div className="pt-4 space-y-3">
            <p className="text-sm text-body-light">+ 7 years with professional design software</p>
            <div className="flex gap-3 justify-center md:justify-start">
              {["Figma", "Ps", "Ai", "Xd", "VS", "WP"].map((tool) => (
                <div
                  key={tool}
                  className="w-10 h-10 rounded-lg bg-accent border border-border flex items-center justify-center text-xs font-semibold text-primary"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 relative">
          <svg
            width="420"
            height="420"
            viewBox="0 0 420 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]"
          >
            <path
              d="M210 30 C230 120, 300 120, 390 210 C300 300, 230 300, 210 390 C190 300, 120 300, 30 210 C120 120, 190 120, 210 30Z"
              fill="hsl(var(--primary))"
              opacity="0.85"
            />
            <path
              d="M210 80 C220 100, 310 170, 340 210 C310 250, 220 320, 210 340 C200 320, 110 250, 80 210 C110 170, 200 100, 210 80Z"
              fill="hsl(var(--primary))"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
