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
      <div class="intro-highlight">
        <p>Das prestigeträchtigste League of Legends Turnier des Jahres ist zurück! Wir freuen uns, das Format für die World Championship 2025 anzukündigen. Dieses Jahr verspricht das größte und kompetitivste Turnier aller Zeiten zu werden.</p>
      </div>
      
      <h2>🏆 Turnier-Struktur</h2>
      <p>Die Worlds 2025 werden 24 Teams aus 11 verschiedenen Regionen umfassen, die über fünf Wochen um den Summoner's Cup und einen Preispool von 2,5 Millionen Dollar kämpfen.</p>
      
      <div class="tournament-phase">
        <h3>🎯 Play-In Stage (Woche 1)</h3>
        <p>Das Turnier startet mit der Play-In Stage, wo 12 Teams um die letzten vier Plätze in der Gruppenphase kämpfen werden. Die Teams werden in zwei Gruppen zu je sechs aufgeteilt. Die Top 2 jeder Gruppe qualifizieren sich direkt, während die Teams auf Platz 3 und 4 in einem Knockout-Bracket antreten.</p>
        <div class="phase-details">
          <p><strong>📊 Format:</strong> 2 Gruppen mit je 6 Teams<br>
          <strong>✅ Qualifikation:</strong> Top 2 direkt + Knockout für Platz 3-4</p>
        </div>
      </div>
      
      <div class="tournament-phase">
        <h3>🌍 Gruppenphase (Woche 2-3)</h3>
        <p>16 Teams werden in vier Gruppen zu je vier Teams aufgeteilt. Jedes Team spielt gegen jedes andere Team in seiner Gruppe zweimal im Doppel-Round-Robin-Format. Die Top 2 Teams jeder Gruppe erreichen die Knockout-Stage.</p>
        <div class="phase-details">
          <p><strong>📊 Format:</strong> 4 Gruppen mit je 4 Teams (Doppel-Round-Robin)<br>
          <strong>✅ Qualifikation:</strong> Top 2 pro Gruppe</p>
        </div>
      </div>
      
      <div class="tournament-phase">
        <h3>⚔️ Knockout-Stage (Woche 4-5)</h3>
        <p>Die finalen acht Teams treten in einem Single-Elimination-Bracket an. Alle Matches sind Best-of-Five-Serien, die im großen Finale gipfeln.</p>
        <div class="phase-details">
          <p><strong>📊 Format:</strong> Single-Elimination Bracket<br>
          <strong>🎮 Match-Format:</strong> Best-of-Five (Bo5)</p>
        </div>
      </div>
      
      <div class="section-divider"></div>
      
      <h2>✨ Neue Features für 2025</h2>
      
      <div class="feature-highlight highlight-fearless">
        <h3>🎲 Fearless Draft</h3>
        <p>Zum ersten Mal bei Worlds implementieren wir Fearless Draft in Best-of-Five-Serien. Champions, die in einem Spiel gepickt oder gebannt wurden, können in nachfolgenden Spielen derselben Serie nicht erneut gewählt werden.</p>
        <p class="feature-note">⚡ <em>Dies wird Team-Tiefe und strategische Flexibilität wie nie zuvor testen!</em></p>
      </div>
      
      <div class="feature-highlight">
        <h3>📺 Erweiterte Broadcast</h3>
        <p>Wir erweitern unseren Broadcast mit mehr Pre-Game-Analysen, Spielerinterviews und Behind-the-Scenes-Content. Fans können bis zu 10 Stunden tägliche Coverage während der Gruppenphase genießen.</p>
      </div>
      
      <div class="feature-highlight">
        <h3>🎥 Interaktives Seherlebnis</h3>
        <p>Neue Viewing-Features umfassen Live-Stats-Overlays, mehrere Kameraperspektiven und die Möglichkeit, individuelle Spielerperspektiven während Schlüsselmomenten zu verfolgen.</p>
      </div>
      
      <div class="section-divider"></div>
      
      <h2>🌆 Austragungsorte</h2>
      <p>Das Turnier findet an drei ikonischen Veranstaltungsorten statt:</p>
      
      <div class="venue-list">
        <div class="venue-item">
          <strong>🇰🇷 Seoul, Südkorea</strong> - Play-In & Gruppenphase
          <p class="venue-desc">Die Geburtsstätte des Esports</p>
        </div>
        <div class="venue-item">
          <strong>🇨🇳 Shanghai, China</strong> - Viertelfinale & Halbfinale
          <p class="venue-desc">Heimat von Millionen League-Fans</p>
        </div>
        <div class="venue-item">
          <strong>🇫🇷 Paris, Frankreich</strong> - Finale
          <p class="venue-desc">Ein passendes Finale in der Stadt der Lichter</p>
        </div>
      </div>
      
      <div class="section-divider"></div>
      
      <h2>🎫 Regionale Qualifikation</h2>
      <p>Der Qualifikationsprozess für jede Region wurde finalisiert:</p>
      
      <div class="qualification-grid">
        <ul>
          <li><strong>🇨🇳 LPL (China):</strong> 4 Seeds</li>
          <li><strong>🇰🇷 LCK (Korea):</strong> 4 Seeds</li>
          <li><strong>🇪🇺 LEC (Europa):</strong> 3 Seeds</li>
          <li><strong>🇺🇸 LCS (Nordamerika):</strong> 3 Seeds</li>
          <li><strong>🌏 PCS (Pazifik):</strong> 2 Seeds</li>
          <li><strong>🇻🇳 VCS (Vietnam):</strong> 2 Seeds</li>
          <li><strong>🌍 Andere Regionen:</strong> 6 Seeds kombiniert</li>
        </ul>
      </div>
      
      <div class="section-divider"></div>
      
      <h2>📅 Zeitplan</h2>
      <div class="schedule-box">
        <p class="schedule-main"><strong>🗓️ Turnierdauer:</strong> 1. November - 5. Dezember 2025</p>
        <p class="schedule-highlight"><strong>🏆 Großes Finale:</strong> 5. Dezember 2025 in der Accor Arena, Paris</p>
      </div>
      
      <div class="closing-statement">
        <p>Dies verspricht eine unvergessliche Championship zu werden. Möge das beste Team gewinnen! 🎮✨</p>
      </div>
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
                article-content text-slate-300 max-w-none
                [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-6 [&_h2]:mt-12 [&_h2]:text-white [&_h2]:border-b [&_h2]:border-amber-500/30 [&_h2]:pb-4
                [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:text-amber-400
                [&_p]:text-slate-300 [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:text-lg
                [&_ul]:text-slate-300 [&_ul]:mb-6 [&_ul]:space-y-2 [&_ul]:list-none
                [&_li]:mb-3 [&_li]:text-slate-300 [&_li]:leading-relaxed [&_li]:pl-6 [&_li]:relative
                [&_li]:before:content-['•'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-purple-400 [&_li]:before:font-bold
                [&_strong]:text-amber-400 [&_strong]:font-semibold
                [&_em]:text-purple-400 [&_em]:not-italic
                [&_a]:text-amber-500 [&_a]:underline hover:[&_a]:text-amber-400
                [&>*:first-child]:mt-0
                [&_.intro-highlight]:bg-gradient-to-r [&_.intro-highlight]:from-purple-500/10 [&_.intro-highlight]:to-transparent 
                [&_.intro-highlight]:border-l-4 [&_.intro-highlight]:border-purple-500 [&_.intro-highlight]:pl-6 [&_.intro-highlight]:py-4 [&_.intro-highlight]:my-8 [&_.intro-highlight]:rounded-r
                [&_.intro-highlight_p]:text-xl [&_.intro-highlight_p]:text-slate-200 [&_.intro-highlight_p]:mb-0
                [&_.tournament-phase]:bg-slate-800/30 [&_.tournament-phase]:rounded-lg [&_.tournament-phase]:p-6 [&_.tournament-phase]:my-6
                [&_.tournament-phase]:border [&_.tournament-phase]:border-slate-700/50
                [&_.tournament-phase_h3]:mt-0 [&_.tournament-phase_h3]:text-2xl [&_.tournament-phase_h3]:font-bold [&_.tournament-phase_h3]:text-amber-400
                [&_.tournament-phase_p]:mb-4
                [&_.phase-details]:bg-slate-900/50 [&_.phase-details]:rounded [&_.phase-details]:p-4 [&_.phase-details]:mt-4
                [&_.phase-details]:border [&_.phase-details]:border-slate-700/30
                [&_.phase-details_p]:text-base [&_.phase-details_p]:mb-0 [&_.phase-details_p]:leading-relaxed
                [&_.section-divider]:h-px [&_.section-divider]:bg-gradient-to-r [&_.section-divider]:from-transparent 
                [&_.section-divider]:via-amber-500/30 [&_.section-divider]:to-transparent [&_.section-divider]:my-12
                [&_.feature-highlight]:bg-slate-800/30 [&_.feature-highlight]:rounded-lg [&_.feature-highlight]:p-6 [&_.feature-highlight]:my-6
                [&_.feature-highlight]:border [&_.feature-highlight]:border-slate-700/50
                [&_.feature-highlight_h3]:mt-0 [&_.feature-highlight_h3]:text-2xl [&_.feature-highlight_h3]:font-bold [&_.feature-highlight_h3]:text-amber-400
                [&_.feature-highlight_p]:mb-4
                [&_.highlight-fearless]:border-l-4 [&_.highlight-fearless]:border-purple-500 [&_.highlight-fearless]:bg-purple-500/5
                [&_.feature-note]:text-base [&_.feature-note]:text-amber-400/90 [&_.feature-note]:italic [&_.feature-note]:mt-4
                [&_.venue-list]:grid [&_.venue-list]:gap-4 [&_.venue-list]:my-6
                [&_.venue-item]:bg-slate-800/30 [&_.venue-item]:rounded-lg [&_.venue-item]:p-5 [&_.venue-item]:border [&_.venue-item]:border-slate-700/50
                [&_.venue-item_strong]:text-amber-400 [&_.venue-item_strong]:text-lg [&_.venue-item_strong]:block [&_.venue-item_strong]:mb-2
                [&_.venue-desc]:text-slate-400 [&_.venue-desc]:text-base [&_.venue-desc]:mb-0 [&_.venue-desc]:mt-1
                [&_.qualification-grid]:bg-slate-800/20 [&_.qualification-grid]:rounded-lg [&_.qualification-grid]:p-6 
                [&_.qualification-grid]:border [&_.qualification-grid]:border-slate-700/30
                [&_.qualification-grid_ul]:grid [&_.qualification-grid_ul]:md:grid-cols-2 [&_.qualification-grid_ul]:gap-x-8 [&_.qualification-grid_ul]:mb-0
                [&_.schedule-box]:bg-gradient-to-r [&_.schedule-box]:from-amber-500/10 [&_.schedule-box]:to-purple-500/10 
                [&_.schedule-box]:border [&_.schedule-box]:border-amber-500/30 [&_.schedule-box]:rounded-lg [&_.schedule-box]:p-6
                [&_.schedule-box_p]:mb-0
                [&_.schedule-main]:text-lg [&_.schedule-main]:mb-3
                [&_.schedule-highlight]:text-xl [&_.schedule-highlight]:text-amber-400 [&_.schedule-highlight]:mb-0
                [&_.closing-statement]:bg-gradient-to-r [&_.closing-statement]:from-purple-500/10 [&_.closing-statement]:to-transparent 
                [&_.closing-statement]:border-l-4 [&_.closing-statement]:border-purple-500 [&_.closing-statement]:pl-6 [&_.closing-statement]:py-4 [&_.closing-statement]:mt-12 [&_.closing-statement]:rounded-r
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
