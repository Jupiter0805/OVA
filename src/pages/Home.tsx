import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { WhyThis } from '../components/WhyThis';
import { HowItWorks } from '../components/HowItWorks';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <WhyThis />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
