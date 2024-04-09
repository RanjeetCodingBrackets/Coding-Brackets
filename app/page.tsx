import AboutCompanyPage from "@/components/HomePage/AboutCompany";
import HomePageHeroSection from "@/components/HomePage/HomePageHeroSection";

export default function Home() {
  return (
    <main>
      <HomePageHeroSection />

      <AboutCompanyPage />
      <div className="h-screen"></div>
    </main>
  );
}
