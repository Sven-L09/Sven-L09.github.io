import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Trophy, Users, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

interface LolTrainersProps {
  onViewAll: () => void;
}

export function LolTrainers({ onViewAll }: LolTrainersProps) {
  const featuredTrainers = [
    {
      id: 1,
      name: 'Alex "ProMaster" Chen',
      role: 'Mid Lane Specialist',
      rank: 'Challenger',
      rating: 4.9,
      students: 450,
      image: 'https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMGNvYWNofGVufDF8fHx8MTc2MTE5Njg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialties: ['Assassins', 'Control Mages', 'Macro Strategy'],
    },
    {
      id: 2,
      name: 'Sarah "ADC Queen" Miller',
      role: 'ADC Coach',
      rank: 'Grandmaster',
      rating: 4.8,
      students: 380,
      image: 'https://images.unsplash.com/photo-1758410473598-ef957adbf57b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwcGxheWVyJTIwaGVhZHNldHxlbnwxfHx8fDE3NjExOTY4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialties: ['Positioning', 'Kiting', 'Team Fighting'],
    },
    {
      id: 3,
      name: 'Marcus "TopDominator" Kim',
      role: 'Top Lane Expert',
      rank: 'Challenger',
      rating: 4.9,
      students: 520,
      image: 'https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjExOTY4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialties: ['Split Pushing', 'Dueling', 'Wave Management'],
    },
  ];

  return (
    <section id="trainers" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <span className="text-amber-500">Level Up Your Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Train with the Best
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Learn from professional players and coaches. Book a 1-on-1 training session to improve your gameplay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 group cursor-pointer"
              onClick={onViewAll}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-500 text-slate-950">
                    {trainer.rank}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl text-white mb-2 group-hover:text-amber-500 transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-amber-500 mb-4">{trainer.role}</p>

                <div className="flex items-center gap-4 mb-4 text-slate-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span>{trainer.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{trainer.students}+ students</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-slate-400 border-slate-700">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onViewAll}
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg transition-all inline-flex items-center gap-2 group"
          >
            View All Trainers
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
