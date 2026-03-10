import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import WorkSection from "@/components/portfolio/WorkSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
