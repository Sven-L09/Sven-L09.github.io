import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Badge } from './ui/badge';

interface NewsPageProps {
  onBack: () => void;
  onNavigateToArticle: (articleId: number) => void;
}

export function NewsPage({ onBack, onNavigateToArticle }: NewsPageProps) {
  const newsArticles = [
    {
      id: 1,
      title: 'Patch 15.1 Notes: Major Balance Changes and New Features',
      date: 'October 15, 2025',
      category: 'Updates',
      image: 'https://images.unsplash.com/photo-1609167782178-1ba3aa1eb251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzYwNjg5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Explore the latest champion adjustments, item changes, and gameplay improvements in our newest patch.',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Worlds Championship 2025 Format Revealed',
      date: 'October 10, 2025',
      category: 'Esports',
      image: 'https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wZXRpdGl2ZSUyMGdhbWluZ3xlbnwxfHx8fDE3NjA2NzM4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'The biggest League of Legends tournament returns. Watch the best teams compete for glory.',
      readTime: '5 min read',
    },
    {
      id: 3,
      title: 'New Champion Spotlight: Ethereal Mage',
      date: 'October 5, 2025',
      category: 'Champions',
      image: 'https://images.unsplash.com/photo-1617507171089-6cb9aa5add36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMG5lb258ZW58MXx8fHwxNzYwNjgwNjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Meet the newest addition to the League roster with unique abilities and stunning visual effects.',
      readTime: '6 min read',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>

      {/* News Overview */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-white mb-4">Latest News</h1>
            <p className="text-xl text-slate-400">Stay updated with the latest from League of Legends</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onNavigateToArticle(article.id)}
                className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-500 text-slate-950">
                      {article.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl text-white mb-3 group-hover:text-amber-500 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-400 mb-4">
                    {article.excerpt}
                  </p>

                  <div className="text-amber-500 hover:text-amber-400 inline-flex items-center gap-2 group/btn">
                    Read Article
                    <ArrowLeft className="w-4 h-4 rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
