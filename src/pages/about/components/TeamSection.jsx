import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamSection = () => {
  const [selectedExpertise, setSelectedExpertise] = useState('all');
  const [expandedMember, setExpandedMember] = useState(null);

  const expertiseFilters = [
  { id: 'all', label: 'All Team', icon: 'Users' },
  { id: 'strategy', label: 'Strategy', icon: 'Target' },
  { id: 'digital', label: 'Digital Marketing', icon: 'Globe' },
  { id: 'creative', label: 'Creative', icon: 'Palette' },
  { id: 'analytics', label: 'Analytics', icon: 'BarChart3' }];


  const teamMembers = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Founder & Chief Strategy Officer",
    expertise: "strategy",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19d0e6f0d-1763295389190.png",
    imageAlt: "Professional headshot of Indian man with short black hair wearing navy blue suit and confident smile",
    experience: "15+ years",
    specialization: "Brand Strategy, Market Entry, Business Development",
    achievements: [
    "Led 50+ successful brand transformations",
    "Expert in Indian market dynamics",
    "International partnership specialist"],

    bio: "Visionary leader with deep expertise in transforming brands into market leaders. Specializes in strategic market entry and cultural adaptation for international brands.",
    linkedin: "#",
    email: "rajesh@marketverse.in"
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Head of Digital Marketing",
    expertise: "digital",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c91c5de7-1763296268961.png",
    imageAlt: "Professional portrait of Indian woman with long dark hair in formal business attire with warm smile",
    experience: "12+ years",
    specialization: "SEO, SEM, Social Media Strategy, Performance Marketing",
    achievements: [
    "Managed ₹50Cr+ in digital ad spend",
    "Achieved 300% average ROI improvement",
    "Google & Meta certified expert"],

    bio: "Digital marketing powerhouse with proven track record in scaling online presence and driving measurable business results through data-driven campaigns.",
    linkedin: "#",
    email: "priya@marketverse.in"
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Creative Director",
    expertise: "creative",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17821a9ed-1763298932182.png",
    imageAlt: "Creative professional headshot of young Indian man with stylish hair and casual business attire",
    experience: "10+ years",
    specialization: "Brand Identity, Visual Design, Campaign Conceptualization",
    achievements: [
    "Award-winning campaign designer",
    "Created 100+ brand identities",
    "Expert in cultural storytelling"],

    bio: "Creative visionary who transforms brand stories into compelling visual narratives that resonate across cultures and drive emotional connections.",
    linkedin: "#",
    email: "arjun@marketverse.in"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Analytics & Insights Lead",
    expertise: "analytics",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a4b252d-1763301141742.png",
    imageAlt: "Professional photo of Indian woman with glasses wearing formal blazer with analytical expression",
    experience: "8+ years",
    specialization: "Data Analytics, Market Research, Consumer Insights",
    achievements: [
    "Built predictive models for 30+ brands",
    "Expert in consumer behavior analysis",
    "Published industry research papers"],

    bio: "Data scientist turned marketing analyst who uncovers actionable insights that drive strategic decisions and measurable business outcomes.",
    linkedin: "#",
    email: "sneha@marketverse.in"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Content Strategy Director",
    expertise: "digital",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a308f432-1763292053049.png",
    imageAlt: "Professional headshot of Indian man with beard wearing casual business shirt with friendly demeanor",
    experience: "11+ years",
    specialization: "Content Marketing, SEO Writing, Brand Storytelling",
    achievements: [
    "Generated 10M+ organic traffic",
    "Created viral content campaigns",
    "Expert in multilingual content"],

    bio: "Content strategist who crafts compelling narratives that engage audiences, build brand authority, and drive organic growth through strategic storytelling.",
    linkedin: "#",
    email: "vikram@marketverse.in"
  },
  {
    id: 6,
    name: "Ananya Iyer",
    role: "Client Success Manager",
    expertise: "strategy",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bde41111-1763296636815.png",
    imageAlt: "Professional portrait of South Indian woman with traditional jewelry wearing formal business attire",
    experience: "9+ years",
    specialization: "Client Relations, Project Management, Strategic Planning",
    achievements: [
    "98% client retention rate",
    "Managed 40+ concurrent projects",
    "Expert in stakeholder management"],

    bio: "Client-focused professional who ensures seamless project execution and builds long-term partnerships through exceptional service and strategic guidance.",
    linkedin: "#",
    email: "ananya@marketverse.in"
  }];


  const filteredMembers = selectedExpertise === 'all' ?
  teamMembers :
  teamMembers?.filter((member) => member?.expertise === selectedExpertise);

  const toggleMemberExpansion = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/5 px-4 py-2 rounded-full mb-6">
            <Icon name="Users" size={20} color="var(--color-primary)" />
            <span className="text-sm font-semibold text-[var(--color-primary)]">Our Team</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Meet the Experts Behind Your Success
          </h2>

          <p className="text-lg text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
            Our diverse team of marketing specialists brings together 100+ man-years of expertise across strategy, digital, creative, and analytics.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {expertiseFilters?.map((filter) =>
          <button
            key={filter?.id}
            onClick={() => setSelectedExpertise(filter?.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
            selectedExpertise === filter?.id ?
            'bg-[var(--color-primary)] text-white shadow-lg' :
            'bg-[var(--color-muted)] text-[var(--color-muted-foreground)] hover:bg-[var(--color-primary)]/10'}`
            }>

              <Icon name={filter?.icon} size={18} />
              <span>{filter?.label}</span>
            </button>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers?.map((member) =>
          <div key={member?.id} className="bg-[var(--color-background)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                src={member?.image}
                alt={member?.imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />

              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-1">{member?.name}</h3>
                <p className="text-[var(--color-accent)] font-semibold mb-3">{member?.role}</p>

                <div className="flex items-center gap-4 text-sm text-[var(--color-muted-foreground)] mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Briefcase" size={16} />
                    <span>{member?.experience}</span>
                  </div>
                </div>

                <p className="text-sm text-[var(--color-muted-foreground)] mb-4 line-clamp-2">
                  {member?.specialization}
                </p>

                <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName={expandedMember === member?.id ? "ChevronUp" : "ChevronDown"}
                iconPosition="right"
                onClick={() => toggleMemberExpansion(member?.id)}>

                  {expandedMember === member?.id ? "Show Less" : "View Profile"}
                </Button>

                {expandedMember === member?.id &&
              <div className="mt-4 pt-4 border-t border-[var(--color-border)] space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-foreground)] mb-2">About</h4>
                      <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{member?.bio}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-foreground)] mb-2">Key Achievements</h4>
                      <ul className="space-y-2">
                        {member?.achievements?.map((achievement, index) =>
                    <li key={index} className="flex items-start gap-2 text-sm text-[var(--color-muted-foreground)]">
                            <Icon name="CheckCircle2" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                    )}
                      </ul>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <a
                    href={member?.linkedin}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-colors"
                    aria-label={`${member?.name} LinkedIn profile`}>

                        <Icon name="Linkedin" size={18} />
                      </a>
                      <a
                    href={`mailto:${member?.email}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90 transition-colors"
                    aria-label={`Email ${member?.name}`}>

                        <Icon name="Mail" size={18} />
                      </a>
                    </div>
                  </div>
              }
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TeamSection;