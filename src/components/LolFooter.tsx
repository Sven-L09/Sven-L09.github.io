import { Trophy, Twitter, Youtube, Twitch, Instagram } from 'lucide-react';

interface LolFooterProps {
  onNavigate: (page: 'champions' | 'news' | 'trainers' | 'impressum') => void;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    page: 'champions' | 'news' | 'trainers' | 'impressum';
  }>;
}

const SOCIAL_LINKS: SocialLink[] = [
  { icon: Twitter, href: 'https://twitter.com/leagueoflegends', label: 'Twitter' },
  { icon: Youtube, href: 'https://www.youtube.com/leagueoflegends', label: 'YouTube' },
  { icon: Twitch, href: 'https://www.twitch.tv/riotgames', label: 'Twitch' },
  { icon: Instagram, href: 'https://www.instagram.com/leagueoflegends', label: 'Instagram' },
];

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Game',
    links: [{ label: 'Champions', page: 'champions' }],
  },
  {
    title: 'Esports',
    links: [{ label: 'Patch Notes', page: 'news' }],
  },
  {
    title: 'Community',
    links: [{ label: 'Trainers', page: 'trainers' }],
  },
  {
    title: 'Company',
    links: [{ label: 'Impressum', page: 'impressum' }],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function LolFooter({ onNavigate }: LolFooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <section className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-8 h-8 text-amber-500" aria-hidden="true" />
              <span className="text-xl text-amber-500">League of Legends</span>
            </div>
            <p className="text-slate-400 mb-6">
              The world's premier competitive gaming experience.
            </p>
            
            {/* Social Links */}
            <nav aria-label="Social media links">
              <ul className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-900 rounded-lg hover:bg-amber-500/20 hover:text-amber-500 text-slate-400 transition-all inline-block"
                      aria-label={`Visit our ${social.label} page`}
                    >
                      <social.icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Footer Navigation Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <nav key={section.title} aria-label={`${section.title} navigation`}>
              <h4 className="text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-slate-400 hover:text-amber-500 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500">
            © {CURRENT_YEAR} League of Legends Fan Page. This is an unofficial fan-made website.
          </p>
        </div>

        <p className="text-center text-slate-600 mt-8">
          League of Legends and all related content are trademarks and copyrights of Riot Games.
        </p>
      </div>
    </footer>
  );
}
