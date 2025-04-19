import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MemoriesSection from "@/components/MemoriesSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveLetterSection from "@/components/LoveLetterSection";
import Footer from "@/components/Footer";

const LovePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <MemoriesSection />
      <PhotoGallery />
      <LoveLetterSection />
      <Footer />
    </div>
  );
};

export default LovePage;