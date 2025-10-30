import { useState, useCallback } from 'react';
import { LolHeader } from './components/LolHeader';
import { LolHero } from './components/LolHero';
import { LolChampions } from './components/LolChampions';
import { LolNews } from './components/LolNews';
import { LolTrainers } from './components/LolTrainers';
import { LolFooter } from './components/LolFooter';
import { ChampionsPage } from './components/ChampionsPage';
import { NewsPage } from './components/NewsPage';
import { NewsArticle1 } from './components/NewsArticle1';
import { NewsArticle2 } from './components/NewsArticle2';
import { NewsArticle3 } from './components/NewsArticle3';
import { TrainersPage } from './components/TrainersPage';
import { Impressum } from './components/Impressum';
import { DisclaimerModal } from './components/DisclaimerModal';
import { useDisclaimer } from './hooks/useDisclaimer';

type PageType = 'home' | 'champions' | 'news' | 'article1' | 'article2' | 'article3' | 'trainers' | 'impressum';

const ARTICLE_MAP: Record<number, PageType> = {
  1: 'article1',
  2: 'article2',
  3: 'article3',
} as const;

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const { showDisclaimer, handleAcceptDisclaimer } = useDisclaimer();

  const handleNavigate = useCallback((page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateToArticle = useCallback((articleId: number) => {
    const page = ARTICLE_MAP[articleId];
    if (page) {
      handleNavigate(page);
    }
  }, [handleNavigate]);

  const renderPage = () => {
    const pageConfig = {
      champions: <ChampionsPage onBack={() => handleNavigate('home')} />,
      news: <NewsPage onBack={() => handleNavigate('home')} onNavigateToArticle={handleNavigateToArticle} />,
      article1: <NewsArticle1 onBack={() => handleNavigate('home')} onNavigateToArticle={handleNavigateToArticle} />,
      article2: <NewsArticle2 onBack={() => handleNavigate('home')} onNavigateToArticle={handleNavigateToArticle} />,
      article3: <NewsArticle3 onBack={() => handleNavigate('home')} onNavigateToArticle={handleNavigateToArticle} />,
      trainers: <TrainersPage onBack={() => handleNavigate('home')} />,
      impressum: <Impressum onBack={() => handleNavigate('home')} />,
    };

    if (currentPage !== 'home' && currentPage in pageConfig) {
      return (
        <>
          <LolHeader onNavigate={handleNavigate} currentPage={currentPage} />
          <main>
            {pageConfig[currentPage as keyof typeof pageConfig]}
          </main>
          <LolFooter onNavigate={handleNavigate} />
        </>
      );
    }

    return (
      <>
        <DisclaimerModal show={showDisclaimer} onAccept={handleAcceptDisclaimer} />
        <LolHeader onNavigate={handleNavigate} currentPage="home" />
        <main>
          <LolHero onExploreChampions={() => handleNavigate('champions')} />
          <LolChampions onViewAll={() => handleNavigate('champions')} />
          <LolNews
            onReadMore={handleNavigateToArticle}
            onViewAll={() => handleNavigate('news')}
          />
          <LolTrainers onViewAll={() => handleNavigate('trainers')} />
        </main>
        <LolFooter onNavigate={handleNavigate} />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {renderPage()}
    </div>
  );
}
