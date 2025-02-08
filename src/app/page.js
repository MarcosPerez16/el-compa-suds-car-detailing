// src/app/page.js
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  GallerySection,
  CTASection,
  FooterSection,
} from '@/components/sections';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen font-[var(--font-geist-sans)]'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
