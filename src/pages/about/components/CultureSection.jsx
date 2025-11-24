import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CultureSection = () => {
  const cultureValues = [
  {
    icon: "Zap",
    title: "Fast-Paced Innovation",
    description: "We move quickly, experiment boldly, and iterate constantly. Startup energy meets corporate execution."
  },
  {
    icon: "Users",
    title: "Collaborative Excellence",
    description: "Cross-functional teams working together to solve complex challenges and deliver exceptional results."
  },
  {
    icon: "TrendingUp",
    title: "Growth Mindset",
    description: "Continuous learning, skill development, and career advancement opportunities for every team member."
  },
  {
    icon: "Heart",
    title: "Work-Life Harmony",
    description: "Flexible work arrangements, mental health support, and a culture that values personal well-being."
  }];


  const perks = [
  { icon: "Laptop", text: "Latest tech & tools" },
  { icon: "GraduationCap", text: "Learning budget" },
  { icon: "Coffee", text: "Unlimited coffee & snacks" },
  { icon: "Calendar", text: "Flexible schedules" },
  { icon: "Plane", text: "Team offsites" },
  { icon: "Trophy", text: "Performance bonuses" }];


  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/5 px-4 py-2 rounded-full mb-6">
            <Icon name="Sparkles" size={20} color="var(--color-primary)" />
            <span className="text-sm font-semibold text-[var(--color-primary)]">Our Culture</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Where Talent Thrives & Innovation Happens
          </h2>

          <p className="text-lg text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
            Join a dynamic team that combines the best of corporate professionalism with startup agility. We're building the future of marketing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1701674369013-e855eec245fc"
                alt="Marketing team collaborating on creative campaign with colorful sticky notes on glass wall in modern office"
                className="w-full h-full object-cover" />

            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mt-8">
              <Image
                src="https://images.unsplash.com/photo-1576267423048-15c0040fec78"
                alt="Diverse team members celebrating project success with high-fives in contemporary workspace"
                className="w-full h-full object-cover" />

            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl -mt-8">
              <Image
                src="https://images.unsplash.com/photo-1622675103136-e4b90c9a33d6"
                alt="Team brainstorming session with laptops and notebooks in bright collaborative space"
                className="w-full h-full object-cover" />

            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd"
                alt="Professional team meeting with diverse members discussing strategy around conference table"
                className="w-full h-full object-cover" />

            </div>
          </div>

          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-foreground)] mb-8">
              What Makes Marketverse Special
            </h3>

            <div className="space-y-6">
              {cultureValues?.map((value, index) =>
              <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-innovation)] flex items-center justify-center flex-shrink-0">
                    <Icon name={value?.icon} size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[var(--color-foreground)] mb-2">{value?.title}</h4>
                    <p className="text-[var(--color-muted-foreground)] leading-relaxed">{value?.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-innovation)] rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8">
            Perks & Benefits
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks?.map((perk, index) =>
            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={perk?.icon} size={20} color="#FFFFFF" />
                </div>
                <span className="text-white font-medium">{perk?.text}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default CultureSection;