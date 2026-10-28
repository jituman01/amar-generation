import { LiquidNavbar } from '@/components/navbar/LiquidNavbar';
import { Hero } from '@/components/hero/Hero';
import { CreateSection } from '@/components/wizard/CreateSection';
import { BlogSection } from '@/components/blog/BlogSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <>
      <LiquidNavbar />
      <main className="min-h-screen flex flex-col bg-paper text-ink">
        <Hero />
        <CreateSection />
        <BlogSection />
        <AboutSection />
        <HowItWorks />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
