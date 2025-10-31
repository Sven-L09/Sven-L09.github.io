import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Badge } from './ui/badge';

interface NewsArticle1Props {
  onBack: () => void;
  onNavigateToArticle: (articleId: number) => void;
}

export function NewsArticle1({ onBack, onNavigateToArticle }: NewsArticle1Props) {
  const featuredArticle = {
    title: 'Patch 15.1 Notes: Major Balance Changes and New Features',
    date: 'October 15, 2025',
    author: 'Riot Games',
    category: 'Updates',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1609167782178-1ba3aa1eb251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzYwNjg5MjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: `
      <div class="intro-highlight">
        <p>Der neueste Patch bringt bedeutende Änderungen in die League of Legends Meta. Wir konzentrieren uns auf die Balance der Champion-Stärken und führen spannende neue Features ein, die Ihr Spielerlebnis grundlegend verändern werden.</p>
      </div>
      
      <h2>⚔️ Champion Balance-Änderungen</h2>
      <p>Dieser Patch beinhaltet Anpassungen an über 30 Champions in allen Rollen. Unser Fokus liegt darauf, übermächtige Champions auszugleichen und unterschätzten Picks die Werkzeuge zu geben, die sie zum Erfolg brauchen.</p>
      
      <div class="info-box nerf-box">
        <h3>🔻 Wichtige Nerfs</h3>
        <ul>
          <li><strong>Ahri:</strong> Basis-Schaden von Bezauberung (E) reduziert. Ihre Fähigkeit, die Mid Lane allein zu dominieren, war zu stark.</li>
          <li><strong>Jinx:</strong> Angriffstempo-Skalierung verringert. Sie wurde im Late Game zu mächtig.</li>
          <li><strong>Thresh:</strong> Hook-Abklingzeit im Early Game erhöht. Dies gibt Gegnern mehr Raum zum Atmen in der Lane.</li>
        </ul>
      </div>
      
      <div class="info-box buff-box">
        <h3>🔺 Wichtige Buffs</h3>
        <ul>
          <li><strong>Viktor:</strong> Bewegungsgeschwindigkeit erhöht. Dies sollte seine Early-Game-Mobilität verbessern.</li>
          <li><strong>Garen:</strong> Basis-Lebensregeneration gebufft. Macht ihn nachhaltiger in der Lane.</li>
          <li><strong>Lux:</strong> Ultimate-Abklingzeit auf allen Stufen reduziert. Mehr Impact in Teamkämpfen.</li>
        </ul>
      </div>
      
      <div class="section-divider"></div>
      
      <h2>✨ Neue Features</h2>
      <p>Wir führen mehrere Quality-of-Life-Verbesserungen und neue Systeme ein:</p>
      
      <div class="feature-highlight">
        <h3>📍 Verbessertes Ping-System</h3>
        <p>Das Ping-System wurde komplett überarbeitet mit neuen kontextuellen Optionen und besserer visueller Klarheit. Spieler können jetzt effektiver kommunizieren, ohne Voice-Chat nutzen zu müssen.</p>
        
        <p class="feature-note">💡 <em>Tipp: Probiert die neuen Ping-Wheels aus, um schneller strategische Informationen zu teilen!</em></p>
      </div>
      
      <div class="feature-highlight">
        <h3>🏆 Champion-Meisterschafts-Updates</h3>
        <p>Verdient neue Meisterschafts-Meilensteine und exklusive Belohnungen für eure Hingabe zu bestimmten Champions. Das neue System trackt detailliertere Statistiken und bietet besseres Progressions-Feedback.</p>
        
        <p class="feature-note">💡 <em>Neu: Meisterschafts-Stufe 11-15 mit einzigartigen Belohnungen!</em></p>
      </div>
      
      <div class="section-divider"></div>
      
      <h2>🛡️ Item-Änderungen</h2>
      <p>Mehrere mythische Items wurden angepasst, um Build-Vielfalt zu fördern:</p>
      
      <div class="item-changes">
        <ul>
          <li><strong>Infinity Edge:</strong> Kritischer Schaden erhöht von 210% auf 220%</li>
          <li><strong>Liandry's Anguish:</strong> Brandschaden-Skalierung für besseres Late Game angepasst</li>
          <li><strong>Black Cleaver:</strong> Gewährt jetzt zusätzliche Bewegungsgeschwindigkeit bei Fähigkeitstreffern</li>
        </ul>
      </div>
      
      <div class="section-divider"></div>
      
      <h2>🎮 Ranked-Updates</h2>
      <p>Das Ranked-System erhält Verbesserungen bei Matchmaking-Algorithmen und LP-Gewinnen/-Verlusten. Das Ziel ist es, fairere Matches und lohnendere Progression zu schaffen.</p>
      
      <div class="closing-statement">
        <p>Diese Änderungen repräsentieren unser Engagement, League of Legends frisch, ausgewogen und spannend zu halten. Wir werden die Meta weiterhin überwachen und bei Bedarf Anpassungen während der gesamten Saison vornehmen.</p>
      </div>
    `,
  };

  const relatedArticles = [
    {
      id: 2,
      title: 'Worlds Championship 2025 Format Revealed',
      date: 'October 10, 2025',
      category: 'Esports',
      image: 'https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wZXRpdGl2ZSUyMGdhbWluZ3xlbnwxfHx8fDE3NjA2NzM4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '5 min read',
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
                Patch 15.1 introduces sweeping changes to champion balance, bringing fresh dynamics to Summoner's Rift. 
                This update focuses on creating a more diverse meta while addressing long-standing balance concerns. 
                With adjustments to over 30 champions and significant item changes, players can expect a refreshed competitive landscape.
              </p>
            </div>

            {/* Article Content */}
            <div
              className="
                article-content text-slate-300 max-w-none
                [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-6 [&_h2]:mt-12 [&_h2]:text-white [&_h2]:border-b [&_h2]:border-amber-500/30 [&_h2]:pb-4
                [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:text-amber-400
                [&_p]:text-slate-300 [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:text-lg
                [&_ul]:text-slate-300 [&_ul]:mb-6 [&_ul]:space-y-2 [&_ul]:list-none
                [&_li]:mb-3 [&_li]:text-slate-300 [&_li]:leading-relaxed [&_li]:pl-6 [&_li]:relative
                [&_li]:before:content-['•'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-amber-500 [&_li]:before:font-bold
                [&_strong]:text-amber-400 [&_strong]:font-semibold
                [&_em]:text-cyan-400 [&_em]:not-italic
                [&_a]:text-amber-500 [&_a]:underline hover:[&_a]:text-amber-400
                [&>*:first-child]:mt-0
                [&_.intro-highlight]:bg-gradient-to-r [&_.intro-highlight]:from-amber-500/10 [&_.intro-highlight]:to-transparent 
                [&_.intro-highlight]:border-l-4 [&_.intro-highlight]:border-amber-500 [&_.intro-highlight]:pl-6 [&_.intro-highlight]:py-4 [&_.intro-highlight]:my-8 [&_.intro-highlight]:rounded-r
                [&_.intro-highlight_p]:text-xl [&_.intro-highlight_p]:text-slate-200 [&_.intro-highlight_p]:mb-0
                [&_.info-box]:rounded-lg [&_.info-box]:p-6 [&_.info-box]:my-8 [&_.info-box]:border-l-4
                [&_.nerf-box]:bg-red-500/5 [&_.nerf-box]:border-red-500
                [&_.buff-box]:bg-green-500/5 [&_.buff-box]:border-green-500
                [&_.info-box_h3]:mt-0 [&_.info-box_h3]:mb-4 [&_.info-box_h3]:text-2xl [&_.info-box_h3]:font-bold
                [&_.info-box_ul]:mb-0
                [&_.section-divider]:h-px [&_.section-divider]:bg-gradient-to-r [&_.section-divider]:from-transparent 
                [&_.section-divider]:via-amber-500/30 [&_.section-divider]:to-transparent [&_.section-divider]:my-12
                [&_.feature-highlight]:bg-slate-800/30 [&_.feature-highlight]:rounded-lg [&_.feature-highlight]:p-6 [&_.feature-highlight]:my-6
                [&_.feature-highlight]:border [&_.feature-highlight]:border-slate-700/50
                [&_.feature-highlight_h3]:mt-0 [&_.feature-highlight_h3]:text-2xl [&_.feature-highlight_h3]:font-bold [&_.feature-highlight_h3]:text-amber-400
                [&_.feature-note]:text-base [&_.feature-note]:text-amber-400/90 [&_.feature-note]:italic [&_.feature-note]:mt-4
                [&_.item-changes]:bg-slate-800/20 [&_.item-changes]:rounded-lg [&_.item-changes]:p-6 [&_.item-changes]:border [&_.item-changes]:border-slate-700/30
                [&_.closing-statement]:bg-gradient-to-r [&_.closing-statement]:from-amber-500/10 [&_.closing-statement]:to-transparent 
                [&_.closing-statement]:border-l-4 [&_.closing-statement]:border-amber-500 [&_.closing-statement]:pl-6 [&_.closing-statement]:py-4 [&_.closing-statement]:mt-12 [&_.closing-statement]:rounded-r
                [&_.closing-statement_p]:text-lg [&_.closing-statement_p]:text-slate-200 [&_.closing-statement_p]:mb-0 [&_.closing-statement_p]:font-medium
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
