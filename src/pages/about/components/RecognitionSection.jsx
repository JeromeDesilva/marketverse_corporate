import React from 'react';
import Icon from '../../../components/AppIcon';

const RecognitionSection = () => {
  const recognitions = [
  {
    icon: "Award",
    title: "Industry Excellence Awards",
    items: [
    "Best Marketing Agency 2024 - Indian Marketing Summit",
    "Innovation in Brand Strategy - Marketing Excellence Awards",
    "Digital Campaign of the Year - AdTech India"]

  },
  {
    icon: "Users",
    title: "Speaking Engagements",
    items: [
    "Keynote Speaker - National Marketing Conference 2024",
    "Panel Expert - Digital Marketing Summit Mumbai",
    "Workshop Leader - Brand Building Masterclass Series"]

  },
  {
    icon: "BookOpen",
    title: "Thought Leadership",
    items: [
    "Published 50+ industry insights articles",
    "Featured in Economic Times, Business Standard",
    "Regular contributor to Marketing Week India"]

  },
  {
    icon: "Shield",
    title: "Certifications & Partnerships",
    items: [
    "Google Premier Partner Status",
    "Meta Business Partner Certification",
    "ISO 9001:2015 Quality Management Certified"]

  }];


  const stats = [
  { value: "100+", label: "Man-Years Expertise", icon: "Users" },
  { value: "50+", label: "Brands Transformed", icon: "TrendingUp" },
  { value: "₹100Cr+", label: "Revenue Generated", icon: "IndianRupee" },
  { value: "98%", label: "Client Retention", icon: "Heart" }];


  return (
    <section className="py-16 lg:py-24 bg-[var(--color-background)] hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/5 px-4 py-2 rounded-full mb-6">
            <Icon name="Trophy" size={20} color="var(--color-primary)" />
            <span className="text-sm font-semibold text-[var(--color-primary)]">Recognition & Impact</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Industry Recognition & Achievements
          </h2>

          <p className="text-lg text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
            Our commitment to excellence has earned us recognition from industry leaders and the trust of ambitious brands across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) =>
          <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-innovation)] flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} color="#FFFFFF" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] mb-2">{stat?.value}</div>
              <div className="text-sm text-[var(--color-muted-foreground)] font-medium">{stat?.label}</div>
            </div>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {recognitions?.map((recognition, index) =>
          <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-innovation)] flex items-center justify-center flex-shrink-0">
                  <Icon name={recognition?.icon} size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-foreground)]">{recognition?.title}</h3>
              </div>

              <ul className="space-y-3">
                {recognition?.items?.map((item, itemIndex) =>
              <li key={itemIndex} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--color-muted-foreground)] leading-relaxed">{item}</span>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default RecognitionSection;