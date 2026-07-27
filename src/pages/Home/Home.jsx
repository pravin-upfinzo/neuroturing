import React from 'react';
import Header from '../../components/Header';
import HeroSection from './components/HeroSection';
import WhyExplainable from './components/WhyExplainable';
import ComplianceBaseline from './components/ComplianceBaseline';
import NeuroturingXAI from './components/NeuroturingXAI';
import Platform from './components/Platform';
import HowNeuroturingWorks from './components/HowNeuroturingWorks';
import MeasurableImpact from './components/MeasurableImpact';
import TrustOperatingSystem from './components/TrustOperatingSystem';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background ambient glows */}
      <div className="bg-glow top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="bg-glow top-1/3 right-0 translate-x-1/2"></div>
      <div className="bg-glow bottom-0 left-1/4"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>
        <HeroSection />
        <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-24 py-10 mt-10">
          <WhyExplainable />
          <ComplianceBaseline />
          <NeuroturingXAI />
          <Platform />
          <HowNeuroturingWorks />
          <MeasurableImpact />
          <TrustOperatingSystem />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
