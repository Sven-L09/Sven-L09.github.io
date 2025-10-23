import { useState } from 'react';
import { ArrowLeft, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';

interface ImpressumProps {
  onBack: () => void;
}

export function Impressum({ onBack }: ImpressumProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
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
          <h1 className="text-4xl text-white mb-2">Impressum</h1>
          <p className="text-slate-400">Legal Information</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-8">
            {/* Website Information */}
            <section>
              <h2 className="text-2xl text-white mb-4">Website Information</h2>
              <div className="space-y-2 text-slate-300">
                <p>This is an unofficial League of Legends fan page created for entertainment purposes.</p>
                <p className="text-slate-400">
                  League of Legends and all related content, characters, and trademarks are property of Riot Games, Inc.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl text-white mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <div className="text-slate-400">Email</div>
                    <div className="text-slate-300">contact@lolfanpage.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <div className="text-slate-400">Address</div>
                    <div className="text-slate-300">
                      League of Legends Fan Community<br />
                      Online Platform<br />
                      Worldwide
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl text-white mb-4">Disclaimer</h2>
              <div className="space-y-3 text-slate-300">
                <p>
                  This website is not affiliated with, endorsed by, or in any way officially connected with Riot Games, Inc., or any of its subsidiaries or affiliates.
                </p>
                <p>
                  All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only.
                </p>
                <p>
                  The information provided on this website is for general informational and entertainment purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness or accuracy.
                </p>
              </div>
            </section>

            {/* Copyright */}
            <section>
              <h2 className="text-2xl text-white mb-4">Copyright Notice</h2>
              <div className="space-y-3 text-slate-300">
                <p>
                  League of Legends © 2009-2025 Riot Games, Inc. All rights reserved.
                </p>
                <p>
                  Fan page content © 2025. Original content on this fan page may be shared with proper attribution.
                </p>
              </div>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-2xl text-white mb-4">Privacy</h2>
              <div className="text-slate-300">
                <p>
                  This is a static fan page and does not collect personal data. We do not use cookies for tracking purposes. Any images used are sourced from Unsplash or are publicly available assets.
                </p>
              </div>
            </section>

            {/* Liability */}
            <section>
              <h2 className="text-2xl text-white mb-4">Limitation of Liability</h2>
              <div className="text-slate-300">
                <p>
                  In no event shall the operators of this fan page be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of this website.
                </p>
              </div>
            </section>

            {/* Last Updated */}
            <section className="pt-6 border-t border-slate-800">
              <p className="text-slate-500">
                Last Updated: October 17, 2025
              </p>
            </section>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 mt-8">
            <h2 className="text-2xl text-white mb-6">Contact Form</h2>
            <p className="text-slate-400 mb-6">
              Have a question or feedback? Send us a message and we'll get back to you as soon as possible.
            </p>

            {isSubmitted ? (
              <div className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-lg text-center">
                <p className="text-amber-500 mb-2">Thank you for your message!</p>
                <p className="text-slate-400">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-300">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-slate-300">Subject *</Label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What is your message about?"
                    className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-300">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    rows={6}
                    className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
