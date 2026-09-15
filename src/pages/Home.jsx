import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import Departments from '../components/home/Departments';
import HowItWorks from '../components/home/HowItWorks';
import TrustAndFaq from '../components/home/TrustAndFaq';

const Home = () => {
  useEffect(() => {
    document.documentElement.classList.add('scrollbar-hide');
    document.body.classList.add('scrollbar-hide');

    return () => {
      document.documentElement.classList.remove('scrollbar-hide');
      document.body.classList.remove('scrollbar-hide');
    };
  }, []);

  return (
    <div className="flex flex-col scrollbar-hide">
      <Hero />
      <Benefits />
      <Departments />
      <HowItWorks />
      {/* <Technology /> */}
      <TrustAndFaq />
    </div>
  );
};

export default Home;
