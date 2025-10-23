import { Trophy, Twitter, Youtube, Twitch, Instagram } from 'lucide-react';

interface LolFooterProps {
  onNavigate: (page: 'champions' | 'news' | 'trainers' | 'impressum') => void;
}

export function LolFooter({ onNavigate }: LolFooterProps) {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitch, href: '#', label: 'Twitch' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-8 h-8 text-amber-500" />
              <span className="text-xl text-amber-500">League of Legends</span>
            </div>
            <p className="text-slate-400 mb-6">
              The world's premier competitive gaming experience.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-slate-900 rounded-lg hover:bg-amber-500/20 hover:text-amber-500 text-slate-400 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Game */}
          <div>
            <h4 className="text-white mb-4">Game</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('champions')}
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Champions
                </button>
              </li>
            </ul>
          </div>

          {/* Esports */}
          <div>
            <h4 className="text-white mb-4">Esports</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Patch Notes
                </button>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('trainers')}
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Trainers
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('impressum')}
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Impressum
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500">
            © 2025 League of Legends Fan Page. This is an unofficial fan-made website.
          </p>
        </div>

        <p className="text-center text-slate-600 mt-8">
          League of Legends and all related content are trademarks and copyrights of Riot Games.
        </p>
      </div>
    </footer>
  );
}
