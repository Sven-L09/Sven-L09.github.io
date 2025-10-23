import { Sword, Shield, Wand2, Target, Zap, Heart } from 'lucide-react';

interface LolChampionsProps {
  onViewAll: () => void;
}

export function LolChampions({ onViewAll }: LolChampionsProps) {
  const championRoles = [
    {
      name: 'Assassin',
      icon: Sword,
      description: 'High burst damage, eliminate key targets',
      champions: ['Zed', 'Akali', 'Talon', 'Katarina'],
      color: 'from-red-500 to-red-700',
    },
    {
      name: 'Tank',
      icon: Shield,
      description: 'High durability, protect your team',
      champions: ['Malphite', 'Ornn', 'Shen', 'Maokai'],
      color: 'from-slate-500 to-slate-700',
    },
    {
      name: 'Mage',
      icon: Wand2,
      description: 'Magic damage, area control',
      champions: ['Lux', 'Syndra', 'Ahri', 'Viktor'],
      color: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Marksman',
      icon: Target,
      description: 'Sustained physical damage',
      champions: ['Jinx', 'Caitlyn', 'Ezreal', 'Vayne'],
      color: 'from-amber-500 to-amber-700',
    },
    {
      name: 'Fighter',
      icon: Zap,
      description: 'Balanced offense and defense',
      champions: ['Darius', 'Fiora', 'Jax', 'Aatrox'],
      color: 'from-orange-500 to-orange-700',
    },
    {
      name: 'Support',
      icon: Heart,
      description: 'Assist allies, crowd control',
      champions: ['Thresh', 'Lulu', 'Nami', 'Leona'],
      color: 'from-green-500 to-green-700',
    },
  ];

  return (
    <section id="champions" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(251, 191, 36, 0.1) 35px, rgba(251, 191, 36, 0.1) 70px)',
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <span className="text-amber-500">Choose Your Champion</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Champion Roles
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Each role brings unique strengths to the battlefield. Find your playstyle and master your champions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {championRoles.map((role) => (
            <div
              key={role.name}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <role.icon className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-2xl text-white">{role.name}</h3>
                </div>

                <p className="text-slate-400 mb-6">{role.description}</p>

                <div className="space-y-2">
                  <div className="text-sm text-slate-500">Popular Champions:</div>
                  <div className="flex flex-wrap gap-2">
                    {role.champions.map((champion) => (
                      <span
                        key={champion}
                        className="px-3 py-1 bg-slate-800/80 text-slate-300 rounded-full border border-slate-700 group-hover:border-amber-500/30 transition-colors"
                      >
                        {champion}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onViewAll}
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg transition-all inline-flex items-center gap-2"
          >
            <Sword className="w-5 h-5" />
            View All Champions
          </button>
        </div>
      </div>
    </section>
  );
}
