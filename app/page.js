import { Hero } from '@/components/hero/Hero';
import { MemoryPreview } from '@/components/landing/MemoryPreview';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Footer } from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-paper text-ink">
      <Hero />
      <MemoryPreview />
      <HowItWorks />
      <Footer />
    </main>
  );
}
