import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, ArrowRight } from 'lucide-react';

interface LolNewsProps {
  onReadMore: () => void;
  onViewAll: () => void;
}

export function LolNews({ onReadMore, onViewAll }: LolNewsProps) {
  const newsItems = [
    {
      title: 'Patch 15.1 Notes: Major Balance Changes',
      date: 'October 15, 2025',
      category: 'Updates',
      image: 'https://images.unsplash.com/photo-1609167782178-1ba3aa1eb251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzYwNjg5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Explore the latest champion adjustments, item changes, and gameplay improvements in our newest patch.',
    },
    {
      title: 'Worlds Championship 2025 Announced',
      date: 'October 10, 2025',
      category: 'Esports',
      image: 'https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wZXRpdGl2ZSUyMGdhbWluZ3xlbnwxfHx8fDE3NjA2NzM4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'The biggest League of Legends tournament returns. Watch the best teams compete for glory.',
    },
    {
      title: 'New Champion Spotlight: Ethereal Mage',
      date: 'October 5, 2025',
      category: 'Champions',
      image: 'https://images.unsplash.com/photo-1617507171089-6cb9aa5add36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMG5lb258ZW58MXx8fHwxNzYwNjgwNjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Meet the newest addition to the League roster with unique abilities and stunning visual effects.',
    },
  ];

  return (
    <section id="news" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <span className="text-amber-500">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            News & Updates
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Stay up to date with the latest patches, champion releases, and esports events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-500 text-slate-950 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl text-white mb-3 group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 mb-4">
                  {item.excerpt}
                </p>

                <button
                  onClick={onReadMore}
                  className="text-amber-500 hover:text-amber-400 inline-flex items-center gap-2 group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onViewAll}
            className="px-8 py-4 border border-amber-500/30 hover:bg-amber-500/10 text-amber-500 rounded-lg transition-all"
          >
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
