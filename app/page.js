import { Hero } from '@/components/hero/Hero';
import { CreateSection } from '@/components/wizard/CreateSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Footer } from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-paper text-ink">
      <Hero />
      <CreateSection />
      <HowItWorks />
      <Footer />
    </main>
  );
}
