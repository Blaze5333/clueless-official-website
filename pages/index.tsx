import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import UpcomingEvents from './components/home/events/UpcomingEvents';
import WorldOfOpenSource from './components/home/WorldOfOpenSource/WorldOfOpenSource';
import Footer from './components/shared/Footer';
import { createTheme, ThemeProvider } from '@mui/material';
import HeroSection from './components/home/HeroSection/HeroSection';
import WhatIsClueless from './components/home/WhatIsClueless/WhatIsClueless';
import TutorialHell from './components/home/Tutorial Hell/tutorial_hell';
import ExploreProjects from './components/home/ExploreProjects/ExploreProjects';
import OpenSourcePrograms from './components/home/Open-Source Programs/mainOpenSource';
import LackingSkills from './components/home/lackingskills/lackingskills';
import OpenSourceProfile from './components/home/OpenSourceProfile/OpenSourceProfile';

const Home: NextPage = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['DM Sans', 'sans-serif'].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>ClueLess - Revamp</title>
      </Head>
      <HeroSection />
      <WhatIsClueless />
      <WorldOfOpenSource />
      <TutorialHell />
      <ExploreProjects />
      <OpenSourceProfile/>
      {/* <OpenSourcePrograms /> */}
      <LackingSkills />
      <UpcomingEvents />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
