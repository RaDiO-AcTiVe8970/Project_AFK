import HeroPage from './pages/hero';
import RoadMap from './pages/roadmap';
import SponsorsSection from './pages/sponsor';
import PartnerSection from './pages/partner';
import PrizePoolSection from './pages/prizePool';
import TournamentDetails from './pages/details';
import Regi from './pages/regi';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('./layout/_layout'));

export default function Home() {
  return (
    <>
      <Layout>
        <HeroPage />
        <SponsorsSection />
        <PartnerSection />
        <PrizePoolSection />
        <TournamentDetails />
        <RoadMap />
        <Regi />
      </Layout>
    </>
  );
}
