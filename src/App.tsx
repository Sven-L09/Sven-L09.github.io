import { useState } from 'react';
import { LolHeader } from './components/LolHeader';
import { LolHero } from './components/LolHero';
import { LolChampions } from './components/LolChampions';
import { LolNews } from './components/LolNews';
import { LolTrainers } from './components/LolTrainers';
import { LolFooter } from './components/LolFooter';
import { ChampionsPage } from './components/ChampionsPage';
import { NewsPage } from './components/NewsPage';
import { TrainersPage } from './components/TrainersPage';
import { Impressum } from './components/Impressum';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'champions' | 'news' | 'trainers' | 'impressum'>('home');

  const handleNavigate = (page: 'home' | 'champions' | 'news' | 'trainers' | 'impressum') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'champions') {
    return (
      <div className="min-h-screen bg-slate-950">
        <LolHeader onNavigate={handleNavigate} currentPage="champions" />
        <ChampionsPage onBack={() => handleNavigate('home')} />
        <LolFooter onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPage === 'news') {
    return (
      <div className="min-h-screen bg-slate-950">
        <LolHeader onNavigate={handleNavigate} currentPage="news" />
        <NewsPage onBack={() => handleNavigate('home')} />
        <LolFooter onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPage === 'trainers') {
    return (
      <div className="min-h-screen bg-slate-950">
        <LolHeader onNavigate={handleNavigate} currentPage="trainers" />
        <TrainersPage onBack={() => handleNavigate('home')} />
        <LolFooter onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPage === 'impressum') {
    return (
      <div className="min-h-screen bg-slate-950">
        <LolHeader onNavigate={handleNavigate} currentPage="impressum" />
        <Impressum onBack={() => handleNavigate('home')} />
        <LolFooter onNavigate={handleNavigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <LolHeader onNavigate={handleNavigate} currentPage="home" />
      <main>
        <LolHero onExploreChampions={() => handleNavigate('champions')} />
        <LolChampions onViewAll={() => handleNavigate('champions')} />
        <LolNews
          onReadMore={() => handleNavigate('news')}
          onViewAll={() => handleNavigate('news')}
        />
        <LolTrainers onViewAll={() => handleNavigate('trainers')} />
      </main>
      <LolFooter onNavigate={handleNavigate} />
    </div>
  );
}
