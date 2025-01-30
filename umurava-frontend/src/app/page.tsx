import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import KeyPointsSection from '../components/KeyPointsSection';
import StatisticsSection from '../components/StatisticsSection';
import ChallengesSection from '../components/ChallengesSection';
import Footer from '../components/Footer';
import FeatureHighlights from '@/components/FeatureHighlights';
import CallToAction from '@/components/CallToAction';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <KeyPointsSection />
      <StatisticsSection />
      <ChallengesSection />
      <FeatureHighlights />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
