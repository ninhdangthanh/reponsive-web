import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import IntroductionSection from './sections/Introduction';
import HowItWork from './sections/HowItWork';
import SubnetTechnology from './sections/SubnetTechnology';
import Statistic from './sections/Statistic';
import TransformSection from './sections/TransformSection';
import Footer from './components/Footer'
import FAQsSection from './sections/FAQs'
import DownloadSection from './sections/Download'
import GuideSection from './sections/Guide'
import ReferralSection from './sections/Referral';

function App() {
  // useEffect(() => {
  //   const hash = window.location.hash.slice(1); // Remove the '#' character from the hash
  //   if (hash) {
  //     const element = document.getElementById(hash);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, [window.location.hash]);

  return (
    <div className="bg-[#120E21] text-[#FFFFFF] laptop:pt-[72px]">
      <Header />
      <IntroductionSection />
      <Statistic />
      <HowItWork />
      <SubnetTechnology />
      <TransformSection />
      <ReferralSection />
      <GuideSection />
      <DownloadSection />
      <FAQsSection />
      <Footer />
    </div>
  );
}

export default App;
