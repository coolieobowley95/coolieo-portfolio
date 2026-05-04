import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioHero from "@/components/PortfolioHero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceAwardsSection from "@/components/ExperienceAwardsSection";
import ContactFooter from "@/components/ContactFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header with Navigation */}
      <PortfolioHeader />

      {/* Hero Section - Landing with name, title, and contact info */}
      <PortfolioHero />

      {/* About Me Section */}
      <AboutSection />

      {/* Technical Skills Section */}
      <SkillsSection />

      {/* Education Section with University, CSEC, and CAPE */}
      <EducationSection />

      {/* Experience, Awards & Hobbies Section */}
      <ExperienceAwardsSection />

      {/* Contact & Footer Section */}
      <ContactFooter />
    </div>
  );
}
