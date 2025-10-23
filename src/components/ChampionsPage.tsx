import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Sword, Shield, Wand2, Target, Zap, Heart, Search, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface ChampionsPageProps {
  onBack: () => void;
}

export function ChampionsPage({ onBack }: ChampionsPageProps) {
  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const roles = [
    { name: 'All', icon: Star },
    { name: 'Assassin', icon: Sword },
    { name: 'Tank', icon: Shield },
    { name: 'Mage', icon: Wand2 },
    { name: 'Marksman', icon: Target },
    { name: 'Fighter', icon: Zap },
    { name: 'Support', icon: Heart },
  ];

  const champions = [
    {
      name: 'Ahri',
      title: 'The Nine-Tailed Fox',
      role: 'Mage',
      difficulty: 'Moderate',
      image: 'https://images.unsplash.com/photo-1510897345173-4d938815feb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnZSUyMG1hZ2ljfGVufDF8fHx8MTc2MDY5MDA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'A master of magic and deception',
    },
    {
      name: 'Zed',
      title: 'The Master of Shadows',
      role: 'Assassin',
      difficulty: 'Hard',
      image: 'https://images.unsplash.com/photo-1734122373993-36745ac6b688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwa25pZ2h0JTIwYXJtb3J8ZW58MXx8fHwxNzYwNjkwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Deadly strikes from the shadows',
    },
    {
      name: 'Garen',
      title: 'The Might of Demacia',
      role: 'Fighter',
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1598669266459-eef1467c15be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwd2FycmlvciUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NjA2MDc3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'A noble warrior with tremendous strength',
    },
    {
      name: 'Lux',
      title: 'The Lady of Luminosity',
      role: 'Mage',
      difficulty: 'Moderate',
      image: 'https://images.unsplash.com/photo-1510897345173-4d938815feb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnZSUyMG1hZ2ljfGVufDF8fHx8MTc2MDY5MDA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Harnesses the power of light',
    },
    {
      name: 'Darius',
      title: 'The Hand of Noxus',
      role: 'Fighter',
      difficulty: 'Moderate',
      image: 'https://images.unsplash.com/photo-1598669266459-eef1467c15be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwd2FycmlvciUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NjA2MDc3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Brutal executioner with unstoppable power',
    },
    {
      name: 'Jinx',
      title: 'The Loose Cannon',
      role: 'Marksman',
      difficulty: 'Moderate',
      image: 'https://images.unsplash.com/photo-1734122373993-36745ac6b688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwa25pZ2h0JTIwYXJtb3J8ZW58MXx8fHwxNzYwNjkwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Chaos and destruction incarnate',
    },
    {
      name: 'Thresh',
      title: 'The Chain Warden',
      role: 'Support',
      difficulty: 'Hard',
      image: 'https://images.unsplash.com/photo-1734122373993-36745ac6b688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwa25pZ2h0JTIwYXJtb3J8ZW58MXx8fHwxNzYwNjkwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Master of crowd control and saves',
    },
    {
      name: 'Malphite',
      title: 'Shard of the Monolith',
      role: 'Tank',
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1598669266459-eef1467c15be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwd2FycmlvciUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NjA2MDc3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Living mountain of stone and fury',
    },
    {
      name: 'Akali',
      title: 'The Rogue Assassin',
      role: 'Assassin',
      difficulty: 'Hard',
      image: 'https://images.unsplash.com/photo-1734122373993-36745ac6b688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwa25pZ2h0JTIwYXJtb3J8ZW58MXx8fHwxNzYwNjkwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Swift and deadly ninja assassin',
    },
    {
      name: 'Caitlyn',
      title: "Piltover's Sheriff",
      role: 'Marksman',
      difficulty: 'Moderate',
      image: 'https://images.unsplash.com/photo-1734122373993-36745ac6b688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwa25pZ2h0JTIwYXJtb3J8ZW58MXx8fHwxNzYwNjkwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Precision sniper with long range',
    },
    {
      name: 'Leona',
      title: 'The Radiant Dawn',
      role: 'Support',
      difficulty: 'Moderate',
      image: 'https://images.unsplash.com/photo-1598669266459-eef1467c15be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwd2FycmlvciUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NjA2MDc3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Tanky support with powerful engage',
    },
    {
      name: 'Viktor',
      title: 'The Machine Herald',
      role: 'Mage',
      difficulty: 'Hard',
      image: 'https://images.unsplash.com/photo-1510897345173-4d938815feb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnZSUyMG1hZ2ljfGVufDF8fHx8MTc2MDY5MDA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Technology and evolution combined',
    },
  ];

  const filteredChampions = champions.filter(champion => {
    const matchesRole = selectedRole === 'All' || champion.role === selectedRole;
    const matchesSearch = champion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         champion.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-500 border-green-500/30';
      case 'Moderate':
        return 'text-amber-500 border-amber-500/30';
      case 'Hard':
        return 'text-red-500 border-red-500/30';
      default:
        return 'text-slate-500 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <div className="flex items-center gap-4 mb-6">
            <Sword className="w-12 h-12 text-amber-500" />
            <div>
              <h1 className="text-4xl text-white mb-2">Champions</h1>
              <p className="text-slate-400">Master your champion and dominate the Rift</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search champions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Role Filter */}
        <div className="mb-12">
          <h2 className="text-2xl text-white mb-6">Filter by Role</h2>
          <div className="flex flex-wrap gap-4">
            {roles.map((role) => (
              <button
                key={role.name}
                onClick={() => setSelectedRole(role.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${
                  selectedRole === role.name
                    ? 'bg-amber-500 border-amber-500 text-slate-950'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-amber-500/50'
                }`}
              >
                <role.icon className="w-5 h-5" />
                {role.name}
              </button>
            ))}
          </div>
        </div>

        {/* Champions Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-white">
              {filteredChampions.length} Champions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredChampions.map((champion) => (
              <div
                key={champion.name}
                className="group bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={champion.image}
                    alt={champion.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                  
                  {/* Role Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-slate-950/80 text-amber-500 border-amber-500/30">
                      {champion.role}
                    </Badge>
                  </div>

                  {/* Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl text-white mb-1 group-hover:text-amber-500 transition-colors">
                      {champion.name}
                    </h3>
                    <p className="text-slate-400">{champion.title}</p>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-slate-400 mb-4">{champion.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Difficulty:</span>
                    <Badge variant="outline" className={getDifficultyColor(champion.difficulty)}>
                      {champion.difficulty}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredChampions.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-slate-700 mx-auto mb-4" />
              <h3 className="text-2xl text-slate-400 mb-2">No champions found</h3>
              <p className="text-slate-500">Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
