import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Badge } from './ui/badge';

interface NewsPageProps {
  onBack: () => void;
}

export function NewsPage({ onBack }: NewsPageProps) {
  const featuredArticle = {
    title: 'Patch 15.1 Notes: Major Balance Changes and New Features',
    date: 'October 15, 2025',
    author: 'Riot Games',
    category: 'Updates',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1609167782178-1ba3aa1eb251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzYwNjg5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: `
      <p>The latest patch brings significant changes to the League of Legends meta, with a focus on balancing champion power levels and introducing exciting new features that will reshape how you play the game.</p>
      
      <h2>Champion Balance Changes</h2>
      <p>This patch includes adjustments to over 30 champions across all roles. We've focused on bringing overperforming champions in line while giving underutilized picks the tools they need to succeed.</p>
      
      <h3>Major Nerfs</h3>
      <ul>
        <li><strong>Ahri:</strong> Base damage reduced on Charm (E). Her ability to single-handedly dominate mid lane was too strong.</li>
        <li><strong>Jinx:</strong> Attack speed growth decreased. She was scaling too well into late game.</li>
        <li><strong>Thresh:</strong> Hook cooldown increased early game. Giving opponents more room to breathe in lane.</li>
      </ul>
      
      <h3>Major Buffs</h3>
      <ul>
        <li><strong>Viktor:</strong> Movement speed increased. Should help with his early game mobility issues.</li>
        <li><strong>Garen:</strong> Base health regeneration buffed. Making him more sustainable in lane.</li>
        <li><strong>Lux:</strong> Ultimate cooldown reduced at all ranks. More impactful in team fights.</li>
      </ul>
      
      <h2>New Features</h2>
      <p>We're introducing several quality of life improvements and new systems:</p>
      
      <h3>Enhanced Ping System</h3>
      <p>The ping system has been completely overhauled with new contextual options and better visual clarity. Players can now communicate more effectively without voice chat.</p>
      
      <h3>Champion Mastery Updates</h3>
      <p>Earn new mastery milestones and exclusive rewards for your dedication to specific champions. The new system tracks more detailed statistics and offers better progression feedback.</p>
      
      <h2>Item Changes</h2>
      <p>Several mythic items have been adjusted to promote build diversity:</p>
      <ul>
        <li>Infinity Edge: Critical strike damage increased from 210% to 220%</li>
        <li>Liandry's Anguish: Burn damage scaling adjusted for better late game</li>
        <li>Black Cleaver: Now provides additional movement speed on ability hits</li>
      </ul>
      
      <h2>Ranked Updates</h2>
      <p>The ranked system receives improvements to matchmaking algorithms and LP gains/losses. The goal is to create fairer matches and more rewarding progression.</p>
      
      <p>These changes represent our commitment to keeping League of Legends fresh, balanced, and exciting. We'll continue monitoring the meta and making adjustments as needed throughout the season.</p>
    `,
  };

  const relatedArticles = [
    {
      title: 'Worlds Championship 2025 Format Revealed',
      date: 'October 10, 2025',
      category: 'Esports',
      image: 'https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wZXRpdGl2ZSUyMGdhbWluZ3xlbnwxfHx8fDE3NjA2NzM4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '5 min read',
    },
    {
      title: 'New Champion Spotlight: Ethereal Mage',
      date: 'October 5, 2025',
      category: 'Champions',
      image: 'https://images.unsplash.com/photo-1617507171089-6cb9aa5add36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMG5lb258ZW58MXx8fHwxNzYwNjgwNjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '6 min read',
    },
    {
      title: 'Pro Player Interview: Mid Lane Strategies',
      date: 'October 1, 2025',
      category: 'Esports',
      image: 'https://images.unsplash.com/photo-1753281209675-e8a73608e5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0b3VybmFtZW50JTIwc3RhZ2V8ZW58MXx8fHwxNzYwNjkwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '7 min read',
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-invert prose-amber max-w-none
                prose-headings:text-white 
                prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-amber-500
                prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
                prose-p:text-white prose-p:mb-6
                prose-ul:text-slate-300 prose-ul:mb-6
                prose-li:mb-2
                prose-strong:text-amber-500"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <div
                  key={index}
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
