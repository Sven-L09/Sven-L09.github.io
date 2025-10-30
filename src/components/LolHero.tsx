import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Play } from 'lucide-react';

interface LolHeroProps {
  onExploreChampions: () => void;
}

interface StatItem {
  value: string;
  label: string;
}

const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1633545491399-54a16aa6a871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFndWUlMjBvZiUyMGxlZ2VuZHMlMjBnYW1pbmd8ZW58MXx8fHwxNzYwNjg5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

const STATS: StatItem[] = [
  { value: '165+', label: 'Champions' },
  { value: '180M+', label: 'Players' },
  { value: '15', label: 'Seasons' },
  { value: '24/7', label: 'Global Servers' },
];

export function LolHero({ onExploreChampions }: LolHeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ImageWithFallback
          src={HERO_IMAGE_URL}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <article className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <span className="text-amber-500">Season 2025 • Patch 15.1</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            Welcome to the
            <span className="block text-amber-500 mt-2">League of Legends</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join millions of players worldwide in the ultimate competitive gaming experience. 
            Master your champion, dominate the Rift, and claim victory.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.leagueoflegends.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg transition-all flex items-center justify-center gap-2 group font-semibold"
            >
              Play Now
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <button
              onClick={onExploreChampions}
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-amber-500 border border-amber-500/30 rounded-lg transition-all flex items-center justify-center gap-2 group font-semibold"
            >
              Explore Champions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </div>

          {/* Statistics Grid */}
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl text-amber-500 mb-2 font-bold">{stat.value}</dd>
                <dt className="text-slate-400">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </article>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-5" aria-hidden="true"></div>
    </section>
  );
}
