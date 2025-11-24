import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StorySection = () => {
  const milestones = [
  {
    year: "2020",
    title: "Foundation & Vision",
    description: "Marketverse was born from a vision to bridge the gap between marketing theory and measurable business results. Started with a core team of industry veterans.",
    icon: "Rocket"
  },
  {
    year: "2021",
    title: "Building Expertise",
    description: "Expanded service offerings and assembled a diverse team of marketing specialists. Completed first major brand transformation projects.",
    icon: "Building2"
  },
  {
    year: "2022",
    title: "Market Recognition",
    description: "Achieved significant milestones with Korean Super Store project. Established reputation for cultural market understanding and end-to-end capability.",
    icon: "Award"
  },
  {
    year: "2023",
    title: "International Expansion",
    description: "Launched import/export services and international partnership programs. Became the bridge between global trends and local resonance.",
    icon: "Globe"
  },
  {
    year: "2024-2025",
    title: "Industry Leadership",
    description: "Positioned as India's premier marketing powerhouse with 100+ man-years of compressed expertise. Leading market disruption and brand transformation.",
    icon: "TrendingUp"
  }];


  return (
    <section className="py-16 lg:py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/5 px-4 py-2 rounded-full mb-6">
              <Icon name="BookOpen" size={20} color="var(--color-primary)" />
              <span className="text-sm font-semibold text-[var(--color-primary)]">Our Story</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-6 leading-tight">
              5 Years of Transforming Brands into Market Leaders
            </h2>

            <p className="text-lg text-[var(--color-muted-foreground)] mb-6 leading-relaxed">
              Marketverse embodies the convergence of marketing intelligence and market disruption. We represent strategic boldness - confident enough to promise transformation, experienced enough to deliver it.
            </p>

            <p className="text-lg text-[var(--color-muted-foreground)] mb-6 leading-relaxed">
              Our brand personality balances professional authority with entrepreneurial energy. We speak to ambitious brands ready to break through market noise and international companies seeking authentic Indian market entry.
            </p>

            <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed">
              We are the bridge between global trends and local resonance, between marketing theory and measurable results. With 100+ man-years of expertise compressed into a 5-year journey, we make growth inevitable rather than hopeful.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd"
                alt="Diverse marketing team collaborating in modern office with laptops and strategy boards during brainstorming session"
                className="w-full h-full object-cover" />

            </div>
            <div className="absolute -bottom-6 -right-6 bg-[var(--color-accent)] text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold mb-1">100+</div>
              <div className="text-sm font-medium">Man-Years Expertise</div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-foreground)] text-center mb-12">
            Our Journey Timeline
          </h3>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-innovation)] to-[var(--color-accent)] hidden lg:block"></div>

            <div className="space-y-12">
              {milestones?.map((milestone, index) =>
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-[var(--color-accent)] font-bold text-xl mb-2">{milestone?.year}</div>
                      <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-3">{milestone?.title}</h4>
                      <p className="text-[var(--color-muted-foreground)] leading-relaxed">{milestone?.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-innovation)] flex items-center justify-center shadow-lg">
                      <Icon name={milestone?.icon} size={28} color="#FFFFFF" />
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default StorySection;