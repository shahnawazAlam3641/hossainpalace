import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider';
import FloatingPriceBadge from '@/components/FloatingPriceBadge';
import CountdownTimer from '@/components/CountdownTimer';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <ScrollAnimationProvider>
      <main className="relative">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CountdownTimer targetDate="2023-12-31T23:59:59" />
        <ContactSection />
        <Footer />
        <FloatingPriceBadge />
      </main>
    </ScrollAnimationProvider>
  );
}