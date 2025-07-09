"use client";

import HeroPage from './pages/hero';
import RoadMap from './pages/roadmap';
import SponsorsSection from './pages/sponsor';
import PartnerSection from './pages/partner';
import PrizePoolSection from './pages/prizePool';
import TournamentDetails from './pages/details';
import VisitorSection from './pages/visitor';
import OrganizersSection from './pages/organizers';
import Regi from './pages/regi';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('./layout/_layout'));

export default function Home() {
  return (
    <>
      <Layout>
        <HeroPage />
        <OrganizersSection />
        <SponsorsSection />
        <PartnerSection />
        <PrizePoolSection />
        <TournamentDetails />
        <VisitorSection />
        <Regi />
        <RoadMap />
      </Layout>
    </>
  );
}