import React from 'react';
import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import Departments from '../components/home/Departments';
import HowItWorks from '../components/home/HowItWorks';
import Technology from '../components/home/Technology';
import TrustAndFaq from '../components/home/TrustAndFaq';

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Departments />
      <HowItWorks />
      <Technology />
      <TrustAndFaq />
    </>
  );
};

export default Home;
