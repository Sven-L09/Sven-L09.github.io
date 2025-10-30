import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Badge } from './ui/badge';

interface NewsArticle3Props {
  onBack: () => void;
  onNavigateToArticle: (articleId: number) => void;
}

export function NewsArticle3({ onBack, onNavigateToArticle }: NewsArticle3Props) {
  const featuredArticle = {
    title: 'New Champion Spotlight: Ethereal Mage',
    date: 'October 5, 2025',
    author: 'Champion Design Team',
    category: 'Champions',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1617507171089-6cb9aa5add36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMG5lb258ZW58MXx8fHwxNzYwNjgwNjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: `
      <p>Introducing Lyria, the Ethereal Mage - a mystical champion who manipulates the fabric of reality itself. With her unique ability to phase between dimensions, Lyria brings an entirely new playstyle to the mid lane.</p>
      
      <h2>Champion Overview</h2>
      <p>Lyria is a high-skill ceiling mage designed for players who enjoy complex mechanics and strategic depth. Her kit revolves around positioning, timing, and mastering the balance between two different dimensional states.</p>
      
      <h3>Role and Position</h3>
      <p>Primary: Mid Lane<br>Secondary: Support</p>
      
      <h2>Abilities</h2>
      
      <h3>Passive - Dimensional Flux</h3>
      <p>Lyria exists between two dimensions. Every 3rd ability hit causes enemies to become Phased, reducing their magic resistance by 20% for 4 seconds. Phased enemies take bonus damage from Lyria's next ability.</p>
      
      <h3>Q - Void Bolt</h3>
      <p>Lyria fires a bolt of ethereal energy in a target direction, dealing magic damage to the first enemy hit. If the target is Phased, the bolt splits and continues, hitting enemies behind them.</p>
      <ul>
        <li>Cooldown: 6 / 5.5 / 5 / 4.5 / 4 seconds</li>
        <li>Damage: 70 / 110 / 150 / 190 / 230 (+0.7 AP)</li>
        <li>Mana Cost: 50 / 55 / 60 / 65 / 70</li>
      </ul>
      
      <h3>W - Reality Shift</h3>
      <p>Lyria creates a zone at target location that lasts for 5 seconds. Enemies inside the zone have their movement speed reduced. Lyria can reactivate this ability to teleport to the zone's center.</p>
      <ul>
        <li>Cooldown: 14 / 13 / 12 / 11 / 10 seconds</li>
        <li>Slow: 25 / 30 / 35 / 40 / 45%</li>
        <li>Mana Cost: 70 / 80 / 90 / 100 / 110</li>
      </ul>
      
      <h3>E - Ethereal Step</h3>
      <p>Lyria dashes in a target direction, leaving behind an afterimage. For the next 3 seconds, she can reactivate to swap positions with her afterimage. During this time, Lyria gains movement speed.</p>
      <ul>
        <li>Cooldown: 18 / 16.5 / 15 / 13.5 / 12 seconds</li>
        <li>Movement Speed: 20 / 25 / 30 / 35 / 40%</li>
        <li>Mana Cost: 60 / 65 / 70 / 75 / 80</li>
      </ul>
      
      <h3>R - Dimensional Collapse</h3>
      <p>Lyria channels for 1.5 seconds, then creates a massive rift at target location. After a brief delay, the rift collapses, dealing massive magic damage and pulling all enemies toward the center. Phased enemies are also stunned.</p>
      <ul>
        <li>Cooldown: 120 / 100 / 80 seconds</li>
        <li>Damage: 250 / 400 / 550 (+1.0 AP)</li>
        <li>Stun Duration: 1.5 / 1.75 / 2 seconds</li>
        <li>Mana Cost: 100 / 125 / 150</li>
      </ul>
      
      <h2>Playstyle and Strategy</h2>
      
      <h3>Early Game</h3>
      <p>Focus on farming safely and poking with Void Bolt. Use Reality Shift to control the wave and zone your opponent. Save Ethereal Step for escapes or all-ins when your jungler ganks.</p>
      
      <h3>Mid Game</h3>
      <p>Lyria excels at skirmishes and picking off isolated enemies. Use your mobility to roam and create advantages for your team. Your Dimensional Flux passive becomes crucial for bursting down priority targets.</p>
      
      <h3>Late Game</h3>
      <p>Position carefully in team fights. Your ultimate can turn the tide of battle, but you're vulnerable during the channel. Coordinate with your team to follow up on your crowd control.</p>
      
      <h2>Recommended Build</h2>
      
      <h3>Core Items</h3>
      <ul>
        <li><strong>Luden's Tempest:</strong> Provides burst damage and waveclear</li>
        <li><strong>Sorcerer's Shoes:</strong> Magic penetration to maximize damage</li>
        <li><strong>Shadowflame:</strong> Additional magic penetration and AP</li>
      </ul>
      
      <h3>Situational Items</h3>
      <ul>
        <li><strong>Zhonya's Hourglass:</strong> For survivability and outplay potential</li>
        <li><strong>Banshee's Veil:</strong> Against heavy crowd control teams</li>
        <li><strong>Void Staff:</strong> When enemies stack magic resistance</li>
      </ul>
      
      <h2>Counters and Synergies</h2>
      
      <h3>Strong Against</h3>
      <p>Lyria excels against immobile mages and scaling champions. Her mobility and burst damage allow her to dominate matchups against champions like Xerath, Vel'Koz, and Veigar.</p>
      
      <h3>Weak Against</h3>
      <p>Assassins and gap-closers can be challenging. Champions like Zed, Yasuo, and Fizz can punish Lyria's lack of defensive stats. Play safe and build Zhonya's early in these matchups.</p>
      
      <h3>Team Synergies</h3>
      <p>Lyria pairs well with engage tanks like Malphite and Leona. Her ultimate amplifies their engage, creating devastating team fight combinations.</p>
      
      <h2>Release Date</h2>
      <p>Lyria will be available on the live servers with Patch 15.2, launching on November 1st, 2025. Prepare to master the dimensions!</p>
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
      id: 2,
      title: 'Worlds Championship 2025 Format Revealed',
      date: 'October 10, 2025',
      category: 'Esports',
      image: 'https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wZXRpdGl2ZSUyMGdhbWluZ3xlbnwxfHx8fDE3NjA2NzM4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '5 min read',
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
                Lyria, the Ethereal Mage, brings mind-bending mechanics and stunning visual effects to the Rift. Master the dimensions and dominate your opponents with this complex new champion.
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
