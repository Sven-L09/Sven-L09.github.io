import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Badge } from './ui/badge';

interface NewsArticle2Props {
  onBack: () => void;
  onNavigateToArticle: (articleId: number) => void;
}

export function NewsArticle2({ onBack, onNavigateToArticle }: NewsArticle2Props) {
  const featuredArticle = {
    title: 'Worlds Championship 2025 Format Revealed',
    date: 'October 10, 2025',
    author: 'Esports Team',
    category: 'Esports',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wZXRpdGl2ZSUyMGdhbWluZ3xlbnwxfHx8fDE3NjA2NzM4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: `
      <p>The most prestigious League of Legends tournament of the year is back, and we're excited to announce the format for the 2025 World Championship. This year's tournament promises to be the biggest and most competitive yet.</p>
      
      <h2>Tournament Structure</h2>
      <p>The 2025 Worlds will feature 24 teams from 11 different regions, competing over the course of five weeks for the Summoner's Cup and a prize pool of $2.5 million.</p>
      
      <h3>Play-In Stage (Week 1)</h3>
      <p>The tournament kicks off with the Play-In Stage, where 12 teams will battle for the final four spots in the Group Stage. Teams will be divided into two groups of six, with the top two from each group advancing directly, and teams ranked 3rd and 4th competing in a knockout bracket.</p>
      
      <h3>Group Stage (Week 2-3)</h3>
      <p>16 teams will be split into four groups of four. Each team plays every other team in their group twice in a double round-robin format. The top two teams from each group advance to the Knockout Stage.</p>
      
      <h3>Knockout Stage (Week 4-5)</h3>
      <p>The final eight teams compete in a single-elimination bracket. All matches are best-of-five series, culminating in the Grand Finals.</p>
      
      <h2>New Features for 2025</h2>
      
      <h3>Fearless Draft</h3>
      <p>For the first time at Worlds, we're implementing Fearless Draft in best-of-five series. Champions picked or banned in one game cannot be selected again in subsequent games of the same series. This will test team depth and strategic flexibility like never before.</p>
      
      <h3>Extended Broadcast</h3>
      <p>We're expanding our broadcast with more pre-game analysis, player interviews, and behind-the-scenes content. Fans can enjoy up to 10 hours of daily coverage during the Group Stage.</p>
      
      <h3>Interactive Viewing Experience</h3>
      <p>New viewing features include live stats overlays, multiple camera angles, and the ability to watch individual player perspectives during key moments.</p>
      
      <h2>Host Cities</h2>
      <p>The tournament will take place across three iconic venues:</p>
      <ul>
        <li><strong>Play-In & Group Stage:</strong> Seoul, South Korea - The birthplace of esports</li>
        <li><strong>Quarterfinals & Semifinals:</strong> Shanghai, China - Home to millions of League fans</li>
        <li><strong>Finals:</strong> Paris, France - A fitting finale in the City of Lights</li>
      </ul>
      
      <h2>Regional Qualification</h2>
      <p>Each region's qualification process has been finalized:</p>
      <ul>
        <li>LPL (China): 4 seeds</li>
        <li>LCK (Korea): 4 seeds</li>
        <li>LEC (Europe): 3 seeds</li>
        <li>LCS (North America): 3 seeds</li>
        <li>PCS (Pacific): 2 seeds</li>
        <li>VCS (Vietnam): 2 seeds</li>
        <li>Other regions: 6 seeds combined</li>
      </ul>
      
      <h2>Schedule</h2>
      <p>Mark your calendars! The tournament runs from November 1st to December 5th, 2025. The Grand Finals will take place on December 5th at the Accor Arena in Paris.</p>
      
      <p>This promises to be an unforgettable championship. May the best team win!</p>
    `,
  };

  const relatedArticles = [
    {
      id: 1,
      title: 'Patch 15.1 Notes: Major Balance Changes and New Features',
      date: 'October 15, 2025',
      category: 'Updates',
      image: 'https://images.unsplash.com/photo-1609167782178-1ba3aa1eb251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzYwNjg5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'New Champion Spotlight: Ethereal Mage',
      date: 'October 5, 2025',
      category: 'Champions',
      image: 'https://images.unsplash.com/photo-1617507171089-6cb9aa5add36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMG5lb258ZW58MXx8fHwxNzYwNjgwNjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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

      {/* Featured Article */}
      <article className="bg-slate-900">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <Badge className="bg-amber-500 text-slate-950 hover:bg-amber-600">
                {featuredArticle.category}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl text-white mb-6">
              {featuredArticle.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-12">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{featuredArticle.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{featuredArticle.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{featuredArticle.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-xl overflow-hidden mb-8">
              <ImageWithFallback
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Caption */}
            <div className="mb-12 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="text-slate-400">
                The stage is set for the most epic League of Legends tournament of the year. Teams from around the world will compete for glory and the Summoner's Cup.
              </p>
            </div>

            {/* Article Content */}
            <div
              className="
                prose prose-lg max-w-none text-slate-300
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:text-white prose-h2:border-b prose-h2:border-amber-500/30 prose-h2:pb-4
                prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-amber-400
                prose-p:text-slate-300 prose-p:mb-6 prose-p:leading-relaxed prose-p:text-lg
                prose-ul:text-slate-300 prose-ul:mb-6 prose-ul:space-y-2
                prose-li:mb-3 prose-li:text-slate-300 prose-li:leading-relaxed
                prose-strong:text-amber-400 prose-strong:font-semibold
                prose-a:text-amber-500 prose-a:underline prose-a:hover:text-amber-400
                [&>h2]:first-of-type:mt-0
              "
              dangerouslySetInnerHTML={{ __html: featuredArticle.content }}
            />
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => onNavigateToArticle(article.id)}
                  className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-amber-500/50 transition-all cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-slate-950/80 text-amber-500 border-amber-500/30">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg text-white mb-3 group-hover:text-amber-500 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
