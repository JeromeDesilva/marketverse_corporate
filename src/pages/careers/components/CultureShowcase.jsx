import React from 'react';
import { Heart, Users, Trophy, Zap } from 'lucide-react';

const CultureShowcase = () => {
  const values = [
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible schedules, remote work options, and unlimited PTO to ensure you thrive both professionally and personally.',
    alt: 'Team members collaborating in modern bright office space with natural lighting'
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    description: 'Open communication, cross-functional teams, and a culture where every voice is heard and valued.',
    alt: 'Diverse team brainstorming together around whiteboard with colorful sticky notes'
  },
  {
    icon: Trophy,
    title: 'Recognition & Growth',
    description: 'Regular performance reviews, promotion pathways, and celebration of achievements big and small.',
    alt: 'Team celebrating success with awards and recognition ceremony'
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Encouraged to experiment, take calculated risks, and push boundaries in marketing excellence.',
    alt: 'Innovation lab with team testing new marketing technologies and strategies'
  }];


  const testimonials = [
  {
    quote: "Joining Marketverse transformed my career. The mentorship, resources, and collaborative culture helped me grow from a specialist to a team lead in just two years.",
    author: "Sarah Chen",
    role: "Marketing Team Lead",
    years: "3 years at Marketverse",
    alt: "Professional headshot of Sarah Chen smiling in business casual attire"
  },
  {
    quote: "The best decision I made was joining this team. The work is challenging, the culture is supportive, and the opportunities for growth are endless.",
    author: "Marcus Johnson",
    role: "Senior Strategist",
    years: "4 years at Marketverse",
    alt: "Professional headshot of Marcus Johnson in modern office setting"
  },
  {
    quote: "I love the flexibility and trust here. We're empowered to make decisions, experiment with new ideas, and truly make an impact on client success.",
    author: "Emily Rodriguez",
    role: "Business Development Manager",
    years: "2 years at Marketverse",
    alt: "Professional headshot of Emily Rodriguez with confident smile"
  }];


  return (
    <section id="culture" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Culture & Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just a workplace - we're a community dedicated to excellence, innovation, and mutual growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values?.map((value, index) => {
            const IconComponent = value?.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">

                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value?.title}
                </h3>
                <p className="text-muted-foreground">
                  {value?.description}
                </p>
              </div>);

          })}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-background rounded-2xl p-8 md:p-12 hidden">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            What Our Team Says
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) =>
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6">

                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial?.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial?.author?.split(' ')?.map((n) => n?.[0])?.join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial?.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial?.role}</div>
                    <div className="text-xs text-muted-foreground mt-1">{testimonial?.years}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default CultureShowcase;