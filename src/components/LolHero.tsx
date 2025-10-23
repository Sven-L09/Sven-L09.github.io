import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Play } from 'lucide-react';

interface LolHeroProps {
  onExploreChampions: () => void;
}

export function LolHero({ onExploreChampions }: LolHeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1633545491399-54a16aa6a871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFndWUlMjBvZiUyMGxlZ2VuZHMlMjBnYW1pbmd8ZW58MXx8fHwxNzYwNjg5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="League of Legends"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.leagueoflegends.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg transition-all flex items-center justify-center gap-2 group"
            >
              Play Now
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={onExploreChampions}
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-amber-500 border border-amber-500/30 rounded-lg transition-all flex items-center justify-center gap-2 group"
            >
              Explore Champions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl text-amber-500 mb-2">165+</div>
              <div className="text-slate-400">Champions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-amber-500 mb-2">180M+</div>
              <div className="text-slate-400">Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-amber-500 mb-2">15</div>
              <div className="text-slate-400">Seasons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-amber-500 mb-2">24/7</div>
              <div className="text-slate-400">Global Servers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-5"></div>
    </section>
  );
}
