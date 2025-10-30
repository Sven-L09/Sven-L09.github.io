import { useState, useCallback } from 'react';
import { Menu, X, Sword, Newspaper, Trophy, GraduationCap } from 'lucide-react';

interface LolHeaderProps {
  onNavigate?: (page: 'home' | 'champions' | 'news' | 'trainers') => void;
  currentPage?: string;
}

interface NavItem {
  name: string;
  page: 'home' | 'champions' | 'news' | 'trainers';
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', page: 'home', icon: Trophy },
  { name: 'Champions', page: 'champions', icon: Sword },
  { name: 'News', page: 'news', icon: Newspaper },
  { name: 'Trainers', page: 'trainers', icon: GraduationCap },
];

export function LolHeader({ onNavigate, currentPage = 'home' }: LolHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = useCallback((page: 'home' | 'champions' | 'news' | 'trainers') => {
    if (onNavigate) {
      onNavigate(page);
      setIsMenuOpen(false);
    }
  }, [onNavigate]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-amber-500/20">
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigation('home')}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Navigate to home"
          >
            <Trophy className="w-8 h-8 text-amber-500" aria-hidden="true" />
            <span className="text-2xl text-amber-500">League of Legends</span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item.page)}
                  className={`text-slate-300 hover:text-amber-500 transition-colors flex items-center gap-2 ${
                    currentPage === item.page ? 'text-amber-500' : ''
                  }`}
                  aria-current={currentPage === item.page ? 'page' : undefined}
                >
                  <item.icon className="w-4 h-4" aria-hidden="true" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-500"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 border-t border-amber-500/20 pt-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item.page)}
                  className={`flex items-center gap-2 py-2 text-slate-300 hover:text-amber-500 transition-colors w-full ${
                    currentPage === item.page ? 'text-amber-500' : ''
                  }`}
                  aria-current={currentPage === item.page ? 'page' : undefined}
                >
                  <item.icon className="w-4 h-4" aria-hidden="true" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
