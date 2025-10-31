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
      <div class="intro-highlight">
        <p>Wir präsentieren: Lyria, die Ätherische Magierin – ein mystischer Champion, der die Realität selbst manipuliert. Mit ihrer einzigartigen Fähigkeit, zwischen Dimensionen zu wechseln, bringt Lyria einen völlig neuen Spielstil auf die Mid Lane.</p>
      </div>
      
      <h2>🎮 Champion-Übersicht</h2>
      <p>Lyria ist eine Magierin mit hoher Skill-Schwelle, designed für Spieler, die komplexe Mechaniken und strategische Tiefe genießen. Ihr Kit dreht sich um Positionierung, Timing und die Beherrschung des Gleichgewichts zwischen zwei verschiedenen dimensionalen Zuständen.</p>
      
      <div class="role-box">
        <p><strong>🎯 Primäre Rolle:</strong> Mid Lane<br>
        <strong>🎯 Sekundäre Rolle:</strong> Support</p>
      </div>
      
      <div class="section-divider"></div>
      
      <h2>✨ Fähigkeiten</h2>
      
      <div class="ability-box passive">
        <h3>⚡ Passiv - Dimensionsfluss</h3>
        <p>Lyria existiert zwischen zwei Dimensionen. Jeder dritte Fähigkeitstreffer lässt Gegner <em>Phasiert</em> werden, wodurch ihre Magieresistenz 4 Sekunden lang um 20% reduziert wird. Phasierte Gegner erleiden Bonusschaden von Lyrias nächster Fähigkeit.</p>
      </div>
      
      <div class="ability-box q-ability">
        <h3>Q - Leerenblitz</h3>
        <p>Lyria feuert einen Blitz ätherischer Energie in eine Zielrichtung ab und fügt dem ersten getroffenen Gegner magischen Schaden zu. Wenn das Ziel <em>Phasiert</em> ist, teilt sich der Blitz und trifft weiter, wodurch Gegner hinter dem Ziel getroffen werden.</p>
        <div class="ability-stats">
          <p>
            <strong>⏱️ Abklingzeit:</strong> 6 / 5.5 / 5 / 4.5 / 4 Sek.<br>
            <strong>💥 Schaden:</strong> 70 / 110 / 150 / 190 / 230 (+0.7 AP)<br>
            <strong>💧 Manakosten:</strong> 50 / 55 / 60 / 65 / 70
          </p>
        </div>
      </div>
      
      <div class="ability-box w-ability">
        <h3>W - Realitätsverschiebung</h3>
        <p>Lyria kreiert eine Zone an der Zielposition, die 5 Sekunden lang bestehen bleibt. Gegner innerhalb der Zone haben reduzierte Bewegungsgeschwindigkeit. Lyria kann diese Fähigkeit reaktivieren, um sich zum Zentrum der Zone zu teleportieren.</p>
        <div class="ability-stats">
          <p>
            <strong>⏱️ Abklingzeit:</strong> 14 / 13 / 12 / 11 / 10 Sek.<br>
            <strong>🐌 Verlangsamung:</strong> 25 / 30 / 35 / 40 / 45%<br>
            <strong>💧 Manakosten:</strong> 70 / 80 / 90 / 100 / 110
          </p>
        </div>
      </div>
      
      <div class="ability-box e-ability">
        <h3>E - Ätherischer Schritt</h3>
        <p>Lyria springt in eine Zielrichtung und hinterlässt ein Nachbild. In den nächsten 3 Sekunden kann sie reaktivieren, um die Position mit ihrem Nachbild zu tauschen. Während dieser Zeit erhält Lyria Bewegungsgeschwindigkeit.</p>
        <div class="ability-stats">
          <p>
            <strong>⏱️ Abklingzeit:</strong> 18 / 16.5 / 15 / 13.5 / 12 Sek.<br>
            <strong>⚡ Bewegungsgeschw.:</strong> 20 / 25 / 30 / 35 / 40%<br>
            <strong>💧 Manakosten:</strong> 60 / 65 / 70 / 75 / 80
          </p>
        </div>
      </div>
      
      <div class="ability-box r-ability">
        <h3>R - Dimensionskollaps</h3>
        <p>Lyria kanalisiert 1,5 Sekunden lang und erschafft dann einen massiven Riss an der Zielposition. Nach kurzer Verzögerung kollabiert der Riss, fügt massiven magischen Schaden zu und zieht alle Gegner zur Mitte. <em>Phasierte</em> Gegner werden zusätzlich betäubt.</p>
        <div class="ability-stats ultimate-stats">
          <p>
            <strong>⏱️ Abklingzeit:</strong> 120 / 100 / 80 Sek.<br>
            <strong>💥 Schaden:</strong> 250 / 400 / 550 (+1.0 AP)<br>
            <strong>😵 Betäubungsdauer:</strong> 1.5 / 1.75 / 2 Sek.<br>
            <strong>💧 Manakosten:</strong> 100 / 125 / 150
          </p>
        </div>
      </div>
      
      <div class="section-divider"></div>
      
      <h2>🎯 Spielweise & Strategie</h2>
      
      <div class="strategy-phase">
        <h3>🌅 Early Game</h3>
        <p>Konzentriere dich auf sicheres Farmen und Poken mit <em>Leerenblitz</em>. Nutze <em>Realitätsverschiebung</em>, um die Wave zu kontrollieren und deinen Gegner zu zonen. Spare <em>Ätherischer Schritt</em> für Fluchten oder All-Ins, wenn dein Jungler gankt.</p>
      </div>
      
      <div class="strategy-phase">
        <h3>⚔️ Mid Game</h3>
        <p>Lyria glänzt in Scharmützeln und beim Ausschalten isolierter Gegner. Nutze deine Mobilität zum Roamen und schaffe Vorteile für dein Team. Dein <em>Dimensionsfluss</em>-Passiv wird entscheidend, um Prioritätsziele zu bursten.</p>
      </div>
      
      <div class="strategy-phase">
        <h3>🏆 Late Game</h3>
        <p>Positioniere dich vorsichtig in Teamkämpfen. Dein Ultimate kann die Schlacht wenden, aber du bist während der Kanalisierung verwundbar. Koordiniere mit deinem Team, um deiner Crowd Control zu folgen.</p>
      </div>
      
      <div class="section-divider"></div>
      
      <h2>🛡️ Empfohlener Build</h2>
      
      <div class="build-section">
        <h3>⭐ Kern-Items</h3>
        <div class="item-grid">
          <div class="item-card">
            <strong>🔮 Ludens Sturm</strong>
            <p>Bietet Burst-Schaden und Waveclear</p>
          </div>
          <div class="item-card">
            <strong>👢 Zauberer-Stiefel</strong>
            <p>Magiepenetration für maximalen Schaden</p>
          </div>
          <div class="item-card">
            <strong>🔥 Schattenflamme</strong>
            <p>Zusätzliche Magiepenetration und AP</p>
          </div>
        </div>
      </div>
      
      <div class="build-section">
        <h3>🔄 Situative Items</h3>
        <ul>
          <li><strong>⏰ Zhonyas Stundenglas:</strong> Für Überlebensfähigkeit und Outplay-Potential</li>
          <li><strong>🛡️ Banshees Schleier:</strong> Gegen Teams mit viel Crowd Control</li>
          <li><strong>⚫ Leerenstab:</strong> Wenn Gegner Magieresistenz stapeln</li>
        </ul>
      </div>
      
      <div class="section-divider"></div>
      
      <h2>⚖️ Counter & Synergien</h2>
      
      <div class="matchup-grid">
        <div class="matchup-box strong">
          <h3>💪 Stark gegen</h3>
          <p>Lyria dominiert gegen unbewegliche Magier und Scaling-Champions. Ihre Mobilität und Burst-Schaden erlauben ihr, Matchups gegen Champions wie <strong>Xerath</strong>, <strong>Vel'Koz</strong> und <strong>Veigar</strong> zu beherrschen.</p>
        </div>
        
        <div class="matchup-box weak">
          <h3>⚠️ Schwach gegen</h3>
          <p>Assassinen und Gap-Closer können herausfordernd sein. Champions wie <strong>Zed</strong>, <strong>Yasuo</strong> und <strong>Fizz</strong> können Lyrias Mangel an defensiven Stats bestrafen. Spiele sicher und baue <em>Zhonyas</em> früh in diesen Matchups.</p>
        </div>
        
        <div class="matchup-box synergy">
          <h3>🤝 Team-Synergien</h3>
          <p>Lyria passt gut zu Engage-Tanks wie <strong>Malphite</strong> und <strong>Leona</strong>. Ihr Ultimate verstärkt deren Engage und kreiert verheerende Teamkampf-Kombinationen.</p>
        </div>
      </div>
      
      <div class="section-divider"></div>
      
      <h2>📅 Release-Datum</h2>
      <div class="release-box">
        <p>Lyria wird mit <strong>Patch 15.2</strong> auf den Live-Servern verfügbar sein und am <strong>1. November 2025</strong> launchen.</p>
        <p class="release-cta">Bereite dich darauf vor, die Dimensionen zu meistern! ✨🌌</p>
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
                article-content text-slate-300 max-w-none
                [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-6 [&_h2]:mt-12 [&_h2]:text-white [&_h2]:border-b [&_h2]:border-amber-500/30 [&_h2]:pb-4
                [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:text-amber-400
                [&_p]:text-slate-300 [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:text-lg
                [&_ul]:text-slate-300 [&_ul]:mb-6 [&_ul]:space-y-2 [&_ul]:list-none
                [&_li]:mb-3 [&_li]:text-slate-300 [&_li]:leading-relaxed [&_li]:pl-6 [&_li]:relative
                [&_li]:before:content-['•'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-cyan-400 [&_li]:before:font-bold
                [&_strong]:text-amber-400 [&_strong]:font-semibold
                [&_em]:text-cyan-400 [&_em]:not-italic [&_em]:font-semibold
                [&_a]:text-amber-500 [&_a]:underline hover:[&_a]:text-amber-400
                [&_br]:block [&_br]:mb-2
                [&>*:first-child]:mt-0
                [&_.intro-highlight]:bg-gradient-to-r [&_.intro-highlight]:from-cyan-500/10 [&_.intro-highlight]:to-transparent 
                [&_.intro-highlight]:border-l-4 [&_.intro-highlight]:border-cyan-500 [&_.intro-highlight]:pl-6 [&_.intro-highlight]:py-4 [&_.intro-highlight]:my-8 [&_.intro-highlight]:rounded-r
                [&_.intro-highlight_p]:text-xl [&_.intro-highlight_p]:text-slate-200 [&_.intro-highlight_p]:mb-0
                [&_.role-box]:bg-slate-800/30 [&_.role-box]:rounded-lg [&_.role-box]:p-5 [&_.role-box]:border [&_.role-box]:border-cyan-500/30
                [&_.role-box_p]:mb-0 [&_.role-box_p]:text-base
                [&_.ability-box]:bg-slate-800/40 [&_.ability-box]:rounded-lg [&_.ability-box]:p-6 [&_.ability-box]:my-5
                [&_.ability-box]:border-l-4 [&_.ability-box]:border [&_.ability-box]:border-slate-700/50
                [&_.ability-box_p]:mb-4
                [&_.passive]:border-l-amber-400 [&_.passive]:bg-amber-500/5
                [&_.q-ability]:border-l-blue-400 [&_.q-ability]:bg-blue-500/5
                [&_.w-ability]:border-l-green-400 [&_.w-ability]:bg-green-500/5
                [&_.e-ability]:border-l-purple-400 [&_.e-ability]:bg-purple-500/5
                [&_.r-ability]:border-l-red-400 [&_.r-ability]:bg-red-500/5
                [&_.ability-box_h3]:mt-0 [&_.ability-box_h3]:mb-3 [&_.ability-box_h3]:text-2xl [&_.ability-box_h3]:font-bold [&_.ability-box_h3]:text-amber-400
                [&_.ability-stats]:bg-slate-900/50 [&_.ability-stats]:rounded [&_.ability-stats]:p-4 [&_.ability-stats]:mt-4
                [&_.ability-stats]:border [&_.ability-stats]:border-slate-700/30
                [&_.ability-stats_p]:text-sm [&_.ability-stats_p]:mb-0 [&_.ability-stats_p]:leading-relaxed
                [&_.ultimate-stats]:border-amber-500/30 [&_.ultimate-stats]:bg-amber-500/5
                [&_.section-divider]:h-px [&_.section-divider]:bg-gradient-to-r [&_.section-divider]:from-transparent 
                [&_.section-divider]:via-cyan-500/30 [&_.section-divider]:to-transparent [&_.section-divider]:my-12
                [&_.strategy-phase]:bg-slate-800/30 [&_.strategy-phase]:rounded-lg [&_.strategy-phase]:p-6 [&_.strategy-phase]:my-5
                [&_.strategy-phase]:border [&_.strategy-phase]:border-slate-700/50
                [&_.strategy-phase_h3]:mt-0 [&_.strategy-phase_h3]:text-2xl [&_.strategy-phase_h3]:font-bold [&_.strategy-phase_h3]:text-amber-400
                [&_.strategy-phase_p]:mb-4
                [&_.build-section]:my-8
                [&_.build-section_h3]:text-2xl [&_.build-section_h3]:font-bold [&_.build-section_h3]:text-amber-400
                [&_.item-grid]:grid [&_.item-grid]:md:grid-cols-3 [&_.item-grid]:gap-4 [&_.item-grid]:mt-5
                [&_.item-card]:bg-slate-900/50 [&_.item-card]:rounded-lg [&_.item-card]:p-4 [&_.item-card]:border [&_.item-card]:border-cyan-500/30
                [&_.item-card_strong]:text-cyan-400 [&_.item-card_strong]:block [&_.item-card_strong]:mb-2
                [&_.item-card_p]:text-sm [&_.item-card_p]:text-slate-400 [&_.item-card_p]:mb-0
                [&_.matchup-grid]:grid [&_.matchup-grid]:md:grid-cols-3 [&_.matchup-grid]:gap-5 [&_.matchup-grid]:my-8
                [&_.matchup-box]:rounded-lg [&_.matchup-box]:p-6 [&_.matchup-box]:border-l-4
                [&_.matchup-box_h3]:mt-0 [&_.matchup-box_h3]:mb-4 [&_.matchup-box_h3]:text-2xl [&_.matchup-box_h3]:font-bold [&_.matchup-box_h3]:text-amber-400
                [&_.matchup-box_p]:mb-4
                [&_.strong]:bg-green-500/5 [&_.strong]:border-green-500
                [&_.weak]:bg-red-500/5 [&_.weak]:border-red-500
                [&_.synergy]:bg-blue-500/5 [&_.synergy]:border-blue-500
                [&_.release-box]:bg-gradient-to-r [&_.release-box]:from-cyan-500/10 [&_.release-box]:to-purple-500/10 
                [&_.release-box]:border [&_.release-box]:border-cyan-500/30 [&_.release-box]:rounded-lg [&_.release-box]:p-6
                [&_.release-box_p]:mb-3
                [&_.release-cta]:text-xl [&_.release-cta]:text-cyan-400 [&_.release-cta]:mb-0 [&_.release-cta]:font-medium
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
