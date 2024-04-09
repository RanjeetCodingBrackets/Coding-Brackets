import AboutCompanyPage from "@/components/HomePage/AboutCompany";
import HomePageHeroSection from "@/components/HomePage/HomePageHeroSection";
import ServiceFeaturesPage from "@/components/HomePage/ServiceFeatures";
import ServicesPage from "@/components/HomePage/Services";

export default function Home() {
  return (
    <main>
      <HomePageHeroSection />

      <AboutCompanyPage />

      <ServicesPage />

      <ServiceFeaturesPage />

      <div className="h-screen"></div>
    </main>
  );
}
