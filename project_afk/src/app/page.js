import HeroPage from './pages/hero';
import RoadMap from './pages/roadmap';
import Regi from './pages/regi';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <HeroPage ></HeroPage>
      <RoadMap></RoadMap>
      <Regi></Regi>
    </div>
  );
}
