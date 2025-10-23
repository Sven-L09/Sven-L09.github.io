import { useState } from 'react';
import { Menu, X, Sword, Newspaper, Trophy, GraduationCap } from 'lucide-react';

interface LolHeaderProps {
  onNavigate?: (page: 'home' | 'champions' | 'news' | 'trainers') => void;
  currentPage?: string;
}

export function LolHeader({ onNavigate, currentPage = 'home' }: LolHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' as const, icon: Trophy },
    { name: 'Champions', page: 'champions' as const, icon: Sword },
    { name: 'News', page: 'news' as const, icon: Newspaper },
    { name: 'Trainers', page: 'trainers' as const, icon: GraduationCap },
  ];

  const handleClick = (page: 'home' | 'champions' | 'news' | 'trainers') => {
    if (onNavigate) {
      onNavigate(page);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-amber-500/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleClick('home')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Trophy className="w-8 h-8 text-amber-500" />
            <span className="text-2xl text-amber-500">League of Legends</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.page)}
                className={`text-slate-300 hover:text-amber-500 transition-colors flex items-center gap-2 ${
                  currentPage === item.page ? 'text-amber-500' : ''
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-amber-500/20 pt-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.page)}
                className={`flex items-center gap-2 py-2 text-slate-300 hover:text-amber-500 transition-colors w-full ${
                  currentPage === item.page ? 'text-amber-500' : ''
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
