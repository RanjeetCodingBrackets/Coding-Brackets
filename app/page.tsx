import AboutCompanyPage from "@/components/HomePage/AboutCompany";
import HomePageHeroSection from "@/components/HomePage/HomePageHeroSection";
import ServicesPage from "@/components/HomePage/Services";

export default function Home() {
  return (
    <main>
      <HomePageHeroSection />

      <AboutCompanyPage />

      <ServicesPage />

      <div className="h-screen"></div>
    </main>
  );
}
