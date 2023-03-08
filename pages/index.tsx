import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import UpcomingEvents from './components/home/events/UpcomingEvents';
import WorldOfOpenSource from './components/home/WorldOfOpenSource/WorldOfOpenSource';
import Footer from './components/shared/Footer';
import WhatIsClueless from './components/home/WhatIsClueless/WhatIsClueless';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ClueLess</title>
      </Head>
      {/* <Copilot /> */}
      <WhatIsClueless />
      <WorldOfOpenSource />
      {/* <UpcomingEvents /> */}
      <Footer />
    </>
  );
};

export default Home;
