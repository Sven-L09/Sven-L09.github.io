import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Star, Trophy, Users, Calendar, Clock, Award } from 'lucide-react';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Button } from './ui/button';

interface TrainersPageProps {
  onBack: () => void;
}

interface Trainer {
  id: number;
  name: string;
  role: string;
  rank: string;
  rating: number;
  students: number;
  image: string;
  specialties: string[];
  bio: string;
  achievements: string[];
  hourlyRate: string;
  availability: string;
}

export function TrainersPage({ onBack }: TrainersPageProps) {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const allTrainers: Trainer[] = [
    {
      id: 1,
      name: 'Alex "ProMaster" Chen',
      role: 'Mid Lane Specialist',
      rank: 'Challenger',
      rating: 4.9,
      students: 450,
      image: 'https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMGNvYWNofGVufDF8fHx8MTc2MTE5Njg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialties: ['Assassins', 'Control Mages', 'Macro Strategy'],
      bio: 'Former professional player with 5 years of competitive experience. Specialized in mid lane champions and macro gameplay. Helped over 450 students climb to Diamond and above.',
      achievements: ['World Championship Qualifier', 'Multiple Regional Titles', 'Top 10 Challenger EUW'],
      hourlyRate: '$50/hour',
      availability: 'Mon-Fri: 2PM-10PM EST',
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
      bio: 'Professional ADC player turned coach. Expert in positioning, kiting mechanics, and team fight execution. Known for developing personalized training programs.',
      achievements: ['Grandmaster for 3 Seasons', 'LCS Academy Player', 'Bootcamp Coach'],
      hourlyRate: '$45/hour',
      availability: 'Tue-Sat: 4PM-11PM EST',
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
      bio: 'Top lane specialist with deep understanding of wave management and split pushing. Former coach for several semi-professional teams.',
      achievements: ['Challenger 800+ LP', 'Team Coach 2023', 'Educational Content Creator'],
      hourlyRate: '$55/hour',
      availability: 'Mon-Sun: 12PM-8PM EST',
    },
    {
      id: 4,
      name: 'Emma "JungleQueen" Rodriguez',
      role: 'Jungle Coach',
      rank: 'Challenger',
      rating: 4.9,
      students: 410,
      image: 'https://images.unsplash.com/photo-1759701546869-90ef47657641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wZXRpdGl2ZSUyMGdhbWVyJTIwZm9jdXNlZHxlbnwxfHx8fDE3NjExOTY4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialties: ['Pathing', 'Ganking', 'Objective Control'],
      bio: 'Master jungle coach specializing in efficient pathing and objective control. Known for helping players understand jungle dynamics and improve their map awareness.',
      achievements: ['Multiple Accounts in Challenger', 'Pro Team Analyst', 'Strategy Developer'],
      hourlyRate: '$50/hour',
      availability: 'Wed-Sun: 1PM-9PM EST',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedTrainer(null);
      setFormData({ name: '', email: '', date: '', time: '', message: '' });
    }, 3000);
  };

  if (selectedTrainer) {
    return (
      <div className="min-h-screen bg-slate-950 pt-20">
        {/* Header */}
        <div className="bg-slate-900 border-b border-slate-800">
          <div className="container mx-auto px-4 py-6">
            <button
              onClick={() => setSelectedTrainer(null)}
              className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Trainers
            </button>
          </div>
        </div>

        {/* Trainer Detail */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Trainer Info */}
              <div>
                <div className="relative h-96 rounded-xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src={selectedTrainer.image}
                    alt={selectedTrainer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-500 text-slate-950">
                      {selectedTrainer.rank}
                    </Badge>
                  </div>
                </div>

                <h1 className="text-4xl text-white mb-2">{selectedTrainer.name}</h1>
                <p className="text-2xl text-amber-500 mb-6">{selectedTrainer.role}</p>

                <div className="flex items-center gap-6 mb-6 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                    <span className="text-white">{selectedTrainer.rating}</span>
                    <span>rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="text-white">{selectedTrainer.students}+</span>
                    <span>students</span>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
                  <h3 className="text-xl text-white mb-3">About</h3>
                  <p className="text-slate-300 leading-relaxed">{selectedTrainer.bio}</p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
                  <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    Achievements
                  </h3>
                  <ul className="space-y-2">
                    {selectedTrainer.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-300">
                        <Award className="w-4 h-4 text-amber-500" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
                  <h3 className="text-xl text-white mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTrainer.specialties.map((specialty, index) => (
                      <Badge key={index} className="bg-amber-500/10 text-amber-500 border border-amber-500/30">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-500/10 to-blue-500/10 border border-amber-500/20 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-slate-400 mb-1">Hourly Rate</p>
                      <p className="text-2xl text-amber-500">{selectedTrainer.hourlyRate}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-1">Availability</p>
                      <p className="text-white">{selectedTrainer.availability}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Form */}
              <div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 sticky top-24">
                  <h2 className="text-3xl text-white mb-6">Book a Training Session</h2>
                  
                  {submitted ? (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl text-white mb-2">Booking Request Sent!</h3>
                      <p className="text-slate-300">
                        {selectedTrainer.name.split('"')[0]} will contact you soon to confirm your session.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-white">Your Name</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-slate-950 border-slate-700 text-white mt-2"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-white">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-slate-950 border-slate-700 text-white mt-2"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date" className="text-white flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Preferred Date
                          </Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            required
                            className="bg-slate-950 border-slate-700 text-white mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="time" className="text-white flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Preferred Time
                          </Label>
                          <Input
                            id="time"
                            type="time"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            required
                            className="bg-slate-950 border-slate-700 text-white mt-2"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-white">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-slate-950 border-slate-700 text-white mt-2 min-h-32"
                          placeholder="Tell us about your current rank, goals, and what you'd like to focus on..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950"
                      >
                        Book Training Session
                      </Button>

                      <p className="text-sm text-slate-400 text-center">
                        You'll receive a confirmation email within 24 hours
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

      {/* Page Header */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <span className="text-amber-500">Professional Coaching</span>
          </div>
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Choose Your Trainer
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Learn from the best players and coaches in the game. Book a personalized 1-on-1 session today.
          </p>
        </div>
      </div>

      {/* Trainers Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTrainers.map((trainer) => (
            <div
              key={trainer.id}
              onClick={() => setSelectedTrainer(trainer)}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 group cursor-pointer"
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
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Clock className="w-4 h-4" />
                    <span>{trainer.hourlyRate}</span>
                  </div>
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

                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.specialties.slice(0, 2).map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-slate-400 border-slate-700">
                      {specialty}
                    </Badge>
                  ))}
                  {trainer.specialties.length > 2 && (
                    <Badge variant="outline" className="text-slate-400 border-slate-700">
                      +{trainer.specialties.length - 2} more
                    </Badge>
                  )}
                </div>

                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950">
                  View Profile & Book
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
