import { useState, useEffect, useCallback, useMemo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Sword, Shield, Wand2, Target, Zap, Heart, Search, Star, Loader2, X } from 'lucide-react';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface ChampionsPageProps {
  onBack: () => void;
}

interface Champion {
  name: string;
  title: string;
  role: string;
  difficulty: string;
  image: string;
  description: string;
  tags: string[];
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
}

interface RoleFilter {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ROLE_FILTERS: RoleFilter[] = [
  { name: 'All', icon: Star },
  { name: 'Assassin', icon: Sword },
  { name: 'Tank', icon: Shield },
  { name: 'Mage', icon: Wand2 },
  { name: 'Marksman', icon: Target },
  { name: 'Fighter', icon: Zap },
  { name: 'Support', icon: Heart },
];

const API_BASE_URL = 'https://ddragon.leagueoflegends.com';

const getDifficultyLevel = (difficultyScore: number): string => {
  if (difficultyScore <= 3) return 'Easy';
  if (difficultyScore >= 7) return 'Hard';
  return 'Moderate';
};

const getDifficultyColor = (difficulty: string): string => {
  const colorMap: Record<string, string> = {
    'Easy': 'text-green-500 border-green-500/30',
    'Moderate': 'text-amber-500 border-amber-500/30',
    'Hard': 'text-red-500 border-red-500/30',
  };
  return colorMap[difficulty] || 'text-slate-500 border-slate-500/30';
};

export function ChampionsPage({ onBack }: ChampionsPageProps) {
  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [champions, setChampions] = useState<Champion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedChampion, setSelectedChampion] = useState<Champion | null>(null);

  const fetchChampions = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const versionResponse = await fetch(`${API_BASE_URL}/api/versions.json`);
      const versions = await versionResponse.json();
      const latestVersion = versions[0];

      const championsResponse = await fetch(
        `${API_BASE_URL}/cdn/${latestVersion}/data/de_DE/champion.json`
      );
      const championsData = await championsResponse.json();

      const transformedChampions: Champion[] = Object.values(championsData.data).map((champ: any) => ({
        name: champ.name,
        title: champ.title,
        role: champ.tags[0],
        difficulty: getDifficultyLevel(champ.info.difficulty),
        image: `${API_BASE_URL}/cdn/${latestVersion}/img/champion/${champ.id}.png`,
        description: champ.blurb,
        tags: champ.tags,
        info: champ.info,
      }));

      setChampions(transformedChampions);
    } catch (err) {
      console.error('Error loading champions:', err);
      setError('Champions konnten nicht geladen werden. Bitte versuche es später erneut.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchChampions();
  }, [fetchChampions]);

  const filteredChampions = useMemo(() => {
    return champions.filter(champion => {
      const matchesRole = selectedRole === 'All' || champion.role === selectedRole;
      const matchesSearch = champion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           champion.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRole && matchesSearch;
    });
  }, [champions, selectedRole, searchQuery]);

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
              disabled={loading}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="w-16 h-16 text-amber-500 animate-spin mb-4" />
            <h3 className="text-2xl text-white mb-2">Loading Champions...</h3>
            <p className="text-slate-400">Fetching data from Riot Games API</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl text-red-400 mb-2">Error</h3>
            <p className="text-slate-300">{error}</p>
          </div>
        )}

        {/* Champions Content */}
        {!loading && !error && (
          <>
            {/* Role Filter */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">Filter by Role</h2>
              <div className="flex flex-wrap gap-4">
                {ROLE_FILTERS.map((role) => (
                  <button
                    key={role.name}
                    onClick={() => setSelectedRole(role.name)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${
                      selectedRole === role.name
                        ? 'bg-amber-500 border-amber-500 text-slate-950'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-amber-500/50'
                    }`}
                    aria-pressed={selectedRole === role.name}
                  >
                    <role.icon className="w-5 h-5" aria-hidden="true" />
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
                    onClick={() => setSelectedChampion(champion)}
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
                      <p className="text-slate-400 mb-4 text-sm line-clamp-3">{champion.description}</p>
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
          </>
        )}
      </div>
    </div>
  );
}
