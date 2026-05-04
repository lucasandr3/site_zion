import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import PositioningSection from "@/components/landing/PositioningSection";
import InvestmentSection from "@/components/landing/InvestmentSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <HeroSection />
    <AuthoritySection />
    <ProblemSection />
    <SolutionsSection />
    <BenefitsSection />
    <PositioningSection />
    <PortfolioSection />
    <InvestmentSection />
    <FinalCTASection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
