import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCard from './components/ServiceCard';
import ServiceDetailModal from './components/ServiceDetailModal';
import ServiceComparison from './components/ServiceComparison';
import ROICalculator from './components/ROICalculator';
import CaseStudyPreview from './components/CaseStudyPreview';
import ProcessTimeline from './components/ProcessTimeline';
import CTASection from './components/CTASection';
import Icon from '../../components/AppIcon';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 'brand-strategy',
      title: "Brand Strategy & Positioning",
      icon: "Target",
      tagline: "Build a brand that resonates and dominates",
      description: "Comprehensive brand development from positioning to identity, creating a foundation for long-term market success.",
      fullDescription: "Our brand strategy service goes beyond logos and colors. We dive deep into your business DNA, market landscape, and customer psychology to craft a positioning that sets you apart. Through extensive research and strategic workshops, we develop a brand architecture that guides every touchpoint and ensures consistent, powerful messaging across all channels.",
      keyFeatures: [
        "Market research and competitive analysis",
        "Brand positioning and messaging framework",
        "Visual identity and brand guidelines",
        "Brand voice and communication strategy"
      ],
      benefits: [
        "Clear market differentiation",
        "Consistent brand experience",
        "Stronger customer connection",
        "Premium pricing capability",
        "Scalable brand architecture",
        "Internal alignment and clarity"
      ],
      idealFor: [
        "Startups launching new brands",
        "Companies rebranding",
        "Businesses entering new markets",
        "Organizations seeking clarity"
      ],
      methodology: [
        {
          phase: "Discovery & Research",
          description: "Deep dive into your business, market, competitors, and target audience through interviews, surveys, and data analysis.",
          duration: "1 week"
        },
        {
          phase: "Strategy Development",
          description: "Craft positioning, messaging, and brand architecture through collaborative workshops and strategic frameworks.",
          duration: "1 week"
        },
        {
          phase: "Identity Creation",
          description: "Design visual identity, brand guidelines, and communication templates that bring strategy to life.",
          duration: "2 weeks"
        },
        {
          phase: "Implementation Support",
          description: "Guide rollout across touchpoints with training, templates, and ongoing consultation.",
          duration: "Ongoing"
        }
      ],
      deliverables: [
        { title: "Brand Strategy Document", description: "Comprehensive positioning, messaging, and strategic framework" },
        { title: "Visual Identity System", description: "Logo, color palette, typography, and design elements" },
        { title: "Brand Guidelines", description: "Complete usage guide for consistent application" },
        { title: "Messaging Framework", description: "Key messages, value propositions, and communication templates" },
        { title: "Brand Toolkit", description: "Templates, assets, and resources for implementation" },
        { title: "Implementation Roadmap", description: "Phased plan for brand rollout and activation" }
      ],
      pricingTiers: [
        {
          name: "Essentials",
          price: 200000,
          period: "/project",
          features: [
            "Brand positioning workshop",
            "Basic visual identity",
            "Brand guidelines document",
            "2 revision rounds",
            "1 month support"
          ]
        },
        {
          name: "Professional",
          price: 350000,
          period: "/project",
          recommended: true,
          features: [
            "Complete brand strategy",
            "Full visual identity system",
            "Comprehensive guidelines",
            "Messaging framework",
            "Brand toolkit",
            "3 months support"
          ]
        },
        {
          name: "Enterprise",
          price: 500000,
          period: "/project",
          features: [
            "Everything in Professional",
            "Multi-brand architecture",
            "International adaptation",
            "Team training program",
            "6 months support",
            "Quarterly strategy reviews"
          ]
        }
      ],
      deliveryTime: "3-4 weeks",
      caseStudyCount: 12,
      isPopular: false,
      category: "strategy"
    },
    {
      id: 'digital-marketing',
      title: "Digital Marketing & Performance",
      icon: "TrendingUp",
      tagline: "Data-driven campaigns that deliver measurable ROI",
      description: "End-to-end digital marketing from strategy to execution, optimized for maximum performance and growth.",
      fullDescription: "Our digital marketing service combines strategic thinking with tactical execution. We don't just run campaigns; we build growth engines. Through continuous testing, optimization, and data analysis, we identify what works and scale it aggressively. From paid advertising to SEO, email marketing to conversion optimization, we orchestrate multi-channel campaigns that drive real business results.",
      keyFeatures: [
        "Multi-channel campaign management",
        "Performance tracking and analytics",
        "Conversion rate optimization",
        "ROI-focused budget allocation"
      ],
      benefits: [
        "Measurable revenue growth",
        "Lower customer acquisition costs",
        "Higher conversion rates",
        "Better marketing efficiency",
        "Scalable growth systems",
        "Data-driven decision making"
      ],
      idealFor: [
        "E-commerce businesses",
        "SaaS companies",
        "Lead generation businesses",
        "Growth-stage startups"
      ],
      methodology: [
        {
          phase: "Audit & Strategy",
          description: "Analyze current performance, identify opportunities, and develop comprehensive digital strategy.",
          duration: "1 week"
        },
        {
          phase: "Campaign Setup",
          description: "Build campaigns across channels with proper tracking, targeting, and creative assets.",
          duration: "1 week"
        },
        {
          phase: "Launch & Optimize",
          description: "Deploy campaigns and continuously optimize based on performance data and insights.",
          duration: "2-4 weeks"
        },
        {
          phase: "Scale & Expand",
          description: "Scale winning campaigns and expand to new channels and audiences for growth.",
          duration: "Ongoing"
        }
      ],
      deliverables: [
        { title: "Digital Strategy Document", description: "Channel strategy, targeting, and growth roadmap" },
        { title: "Campaign Assets", description: "Ad creatives, landing pages, and marketing materials" },
        { title: "Analytics Dashboard", description: "Real-time performance tracking and reporting" },
        { title: "Monthly Reports", description: "Detailed analysis of results and recommendations" },
        { title: "Optimization Playbook", description: "Testing frameworks and improvement strategies" },
        { title: "Growth Recommendations", description: "Strategic insights for scaling campaigns" }
      ],
      pricingTiers: [
        {
          name: "Starter",
          price: 300000,
          period: "/month",
          features: [
            "2 marketing channels",
            "Basic campaign management",
            "Monthly reporting",
            "Email support",
            "₹50K ad spend included"
          ]
        },
        {
          name: "Growth",
          price: 500000,
          period: "/month",
          recommended: true,
          features: [
            "4+ marketing channels",
            "Advanced optimization",
            "Weekly reporting",
            "Dedicated manager",
            "₹1L ad spend included",
            "Conversion optimization"
          ]
        },
        {
          name: "Scale",
          price: 800000,
          period: "/month",
          features: [
            "Everything in Growth",
            "Full-funnel strategy",
            "Daily optimization",
            "Senior strategist",
            "₹2L+ ad spend included",
            "Custom integrations"
          ]
        }
      ],
      deliveryTime: "4-6 weeks",
      caseStudyCount: 25,
      isPopular: true,
      category: "digital"
    },
    {
      id: 'content-creation',
      title: "Content Creation & Management",
      icon: "FileText",
      tagline: "Compelling content that engages and converts",
      description: "Professional content production across formats, from strategy to distribution, ensuring consistent brand storytelling.",
      fullDescription: "Content is the fuel of modern marketing, and we're experts at creating content that works. Our team of writers, designers, and strategists collaborate to produce content that not only looks great but drives real business outcomes. From blog posts to videos, infographics to podcasts, we handle the entire content lifecycle while maintaining your brand voice and strategic objectives.",
      keyFeatures: [
        "Multi-format content production",
        "Content strategy and planning",
        "SEO-optimized writing",
        "Content distribution and promotion"
      ],
      benefits: [
        "Consistent content output",
        "Improved search rankings",
        "Higher engagement rates",
        "Stronger brand authority",
        "Better lead generation",
        "Reduced content costs"
      ],
      idealFor: [
        "B2B companies",
        "Thought leaders",
        "Content-driven brands",
        "Educational platforms"
      ],
      methodology: [
        {
          phase: "Content Strategy",
          description: "Develop content pillars, topics, and calendar aligned with business goals and audience needs.",
          duration: "1 week"
        },
        {
          phase: "Production Planning",
          description: "Plan content formats, assign resources, and establish production workflows and timelines.",
          duration: "1 week"
        },
        {
          phase: "Content Creation",
          description: "Produce high-quality content across formats with proper optimization and brand alignment.",
          duration: "2-3 weeks"
        },
        {
          phase: "Distribution & Analysis",
          description: "Publish content across channels, promote strategically, and analyze performance metrics.",
          duration: "Ongoing"
        }
      ],
      deliverables: [
        { title: "Content Strategy", description: "Comprehensive plan with topics, formats, and calendar" },
        { title: "Blog Articles", description: "SEO-optimized long-form content pieces" },
        { title: "Visual Content", description: "Infographics, images, and design assets" },
        { title: "Video Content", description: "Scripted and produced video materials" },
        { title: "Social Media Content", description: "Platform-specific posts and graphics" },
        { title: "Performance Reports", description: "Content analytics and optimization insights" }
      ],
      pricingTiers: [
        {
          name: "Basic",
          price: 150000,
          period: "/month",
          features: [
            "8 blog posts/month",
            "16 social posts/month",
            "Basic graphics",
            "Content calendar",
            "Monthly reporting"
          ]
        },
        {
          name: "Professional",
          price: 250000,
          period: "/month",
          recommended: true,
          features: [
            "12 blog posts/month",
            "30 social posts/month",
            "Custom graphics",
            "2 videos/month",
            "SEO optimization",
            "Weekly reporting"
          ]
        },
        {
          name: "Premium",
          price: 400000,
          period: "/month",
          features: [
            "Everything in Professional",
            "20+ blog posts/month",
            "50+ social posts/month",
            "4 videos/month",
            "Podcast production",
            "Content distribution"
          ]
        }
      ],
      deliveryTime: "2-4 weeks",
      caseStudyCount: 18,
      isPopular: false,
      category: "content"
    },
    {
      id: 'social-media',
      title: "Social Media Marketing",
      icon: "Share2",
      tagline: "Build communities and drive engagement",
      description: "Strategic social media management that builds brand presence, engages audiences, and drives business results.",
      fullDescription: "Social media is where conversations happen, and we ensure your brand is part of them. Our social media service goes beyond posting content; we build communities, spark conversations, and turn followers into customers. Through strategic content, community management, and paid social advertising, we create social presence that drives real business value.",
      keyFeatures: [
        "Multi-platform management",
        "Community engagement",
        "Paid social advertising",
        "Influencer partnerships"
      ],
      benefits: [
        "Increased brand awareness",
        "Higher engagement rates",
        "Better customer relationships",
        "More website traffic",
        "Improved brand sentiment",
        "Direct sales opportunities"
      ],
      idealFor: [
        "Consumer brands",
        "D2C businesses",
        "Lifestyle companies",
        "Service providers"
      ],
      methodology: [
        {
          phase: "Social Audit",
          description: "Analyze current presence, audience insights, and competitive landscape across platforms.",
          duration: "1 week"
        },
        {
          phase: "Strategy Development",
          description: "Create platform-specific strategies, content themes, and engagement frameworks.",
          duration: "1 week"
        },
        {
          phase: "Content Production",
          description: "Produce and schedule engaging content optimized for each platform and audience.",
          duration: "2 weeks"
        },
        {
          phase: "Community Management",
          description: "Engage with audience, respond to comments, and build active community presence.",
          duration: "Ongoing"
        }
      ],
      deliverables: [
        { title: "Social Media Strategy", description: "Platform-specific plans and content frameworks" },
        { title: "Content Calendar", description: "Monthly posting schedule with themes and topics" },
        { title: "Visual Assets", description: "Custom graphics, videos, and creative content" },
        { title: "Community Reports", description: "Engagement metrics and audience insights" },
        { title: "Campaign Results", description: "Paid social performance and ROI analysis" },
        { title: "Growth Recommendations", description: "Strategic insights for audience expansion" }
      ],
      pricingTiers: [
        {
          name: "Starter",
          price: 200000,
          period: "/month",
          features: [
            "2 platforms",
            "20 posts/month",
            "Basic engagement",
            "Monthly reporting",
            "Content creation"
          ]
        },
        {
          name: "Growth",
          price: 350000,
          period: "/month",
          recommended: true,
          features: [
            "4 platforms",
            "40 posts/month",
            "Active engagement",
            "Paid social ads",
            "Weekly reporting",
            "Community management"
          ]
        },
        {
          name: "Enterprise",
          price: 600000,
          period: "/month",
          features: [
            "Everything in Growth",
            "6+ platforms",
            "60+ posts/month",
            "Influencer campaigns",
            "Crisis management",
            "Dedicated team"
          ]
        }
      ],
      deliveryTime: "3-5 weeks",
      caseStudyCount: 22,
      isPopular: true,
      category: "social"
    },
    {
      id: 'import-sourcing',
      title: "Import & Product Sourcing",
      icon: "Package",
      tagline: "Connect with global suppliers and scale your business",
      description: "End-to-end import solutions from supplier identification to logistics, enabling businesses to source quality products globally.",
      fullDescription: "Our import and sourcing service removes the complexity of international trade. With deep relationships in key manufacturing hubs and expertise in import regulations, we help businesses source quality products at competitive prices. From initial supplier vetting to final delivery, we manage the entire process, ensuring quality, compliance, and cost-effectiveness.",
      keyFeatures: [
        "Global supplier network",
        "Quality assurance processes",
        "Import compliance management",
        "Logistics coordination"
      ],
      benefits: [
        "Access to quality suppliers",
        "Cost-effective sourcing",
        "Reduced import risks",
        "Faster time to market",
        "Quality consistency",
        "Regulatory compliance"
      ],
      idealFor: [
        "Retail businesses",
        "E-commerce brands",
        "Distributors",
        "Product companies"
      ],
      methodology: [
        {
          phase: "Requirements Analysis",
          description: "Understand product specifications, quality standards, budget, and timeline requirements.",
          duration: "1 week"
        },
        {
          phase: "Supplier Identification",
          description: "Research and shortlist qualified suppliers based on capabilities and track record.",
          duration: "2 weeks"
        },
        {
          phase: "Negotiation & Sampling",
          description: "Negotiate terms, arrange samples, conduct quality checks, and finalize agreements.",
          duration: "2-3 weeks"
        },
        {
          phase: "Order & Logistics",
          description: "Manage production, quality control, shipping, customs, and final delivery.",
          duration: "4-8 weeks"
        }
      ],
      deliverables: [
        { title: "Supplier Database", description: "Vetted supplier contacts with capabilities and pricing" },
        { title: "Product Samples", description: "Physical samples for quality evaluation" },
        { title: "Cost Analysis", description: "Detailed breakdown of all costs and margins" },
        { title: "Import Documentation", description: "All required paperwork and compliance documents" },
        { title: "Quality Reports", description: "Inspection reports and quality certifications" },
        { title: "Logistics Tracking", description: "Real-time shipment tracking and updates" }
      ],
      pricingTiers: [
        {
          name: "Basic",
          price: 500000,
          period: "/project",
          features: [
            "Supplier identification",
            "Basic negotiation",
            "Sample coordination",
            "Import guidance",
            "1 product category"
          ]
        },
        {
          name: "Professional",
          price: 800000,
          period: "/project",
          recommended: true,
          features: [
            "Everything in Basic",
            "Quality assurance",
            "Full logistics support",
            "Customs clearance",
            "3 product categories",
            "6 months support"
          ]
        },
        {
          name: "Enterprise",
          price: 1500000,
          period: "/project",
          features: [
            "Everything in Professional",
            "Dedicated sourcing team",
            "Factory audits",
            "Ongoing supplier management",
            "Unlimited categories",
            "12 months support"
          ]
        }
      ],
      deliveryTime: "6-8 weeks",
      caseStudyCount: 8,
      isPopular: false,
      category: "sourcing"
    },
    {
      id: 'market-research',
      title: "Market Research & Analytics",
      icon: "BarChart3",
      tagline: "Data-driven insights for strategic decisions",
      description: "Comprehensive market intelligence and analytics that inform strategy, reduce risks, and identify opportunities.",
      fullDescription: "In today's data-rich environment, the challenge isn't finding information but extracting actionable insights. Our research service combines quantitative analysis with qualitative insights to provide a complete picture of your market, customers, and opportunities. We don't just deliver reports; we provide strategic recommendations that drive business decisions.",
      keyFeatures: [
        "Market sizing and segmentation",
        "Competitive intelligence",
        "Customer research",
        "Trend analysis and forecasting"
      ],
      benefits: [
        "Reduced market risks",
        "Better strategic decisions",
        "Identified opportunities",
        "Customer understanding",
        "Competitive advantage",
        "Data-backed planning"
      ],
      idealFor: [
        "New market entrants",
        "Product launches",
        "Strategic planning",
        "Investment decisions"
      ],
      methodology: [
        {
          phase: "Research Design",
          description: "Define objectives, methodology, sample size, and research instruments for the study.",
          duration: "1 week"
        },
        {
          phase: "Data Collection",
          description: "Conduct surveys, interviews, focus groups, and gather secondary data from sources.",
          duration: "2 weeks"
        },
        {
          phase: "Analysis & Insights",
          description: "Analyze data using statistical methods and extract meaningful patterns and insights.",
          duration: "1 week"
        },
        {
          phase: "Recommendations",
          description: "Develop strategic recommendations and present findings with actionable next steps.",
          duration: "1 week"
        }
      ],
      deliverables: [
        { title: "Research Report", description: "Comprehensive findings with data and analysis" },
        { title: "Market Sizing", description: "TAM, SAM, SOM calculations and projections" },
        { title: "Competitive Analysis", description: "Detailed competitor profiles and positioning" },
        { title: "Customer Personas", description: "Detailed buyer profiles and journey maps" },
        { title: "Opportunity Matrix", description: "Prioritized opportunities with feasibility" },
        { title: "Strategic Recommendations", description: "Actionable insights for business decisions" }
      ],
      pricingTiers: [
        {
          name: "Essential",
          price: 200000,
          period: "/project",
          features: [
            "Secondary research",
            "Market overview",
            "Competitor analysis",
            "Basic recommendations",
            "1 revision round"
          ]
        },
        {
          name: "Comprehensive",
          price: 350000,
          period: "/project",
          recommended: true,
          features: [
            "Everything in Essential",
            "Primary research",
            "Customer surveys",
            "Detailed analysis",
            "Strategic workshop",
            "2 revision rounds"
          ]
        },
        {
          name: "Advanced",
          price: 500000,
          period: "/project",
          features: [
            "Everything in Comprehensive",
            "Focus groups",
            "Advanced analytics",
            "Trend forecasting",
            "Ongoing monitoring",
            "Quarterly updates"
          ]
        }
      ],
      deliveryTime: "3-4 weeks",
      caseStudyCount: 15,
      isPopular: false,
      category: "research"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services', icon: 'Grid' },
    { id: 'strategy', label: 'Strategy', icon: 'Target' },
    { id: 'digital', label: 'Digital', icon: 'TrendingUp' },
    { id: 'content', label: 'Content', icon: 'FileText' },
    { id: 'social', label: 'Social', icon: 'Share2' },
    { id: 'sourcing', label: 'Sourcing', icon: 'Package' },
    { id: 'research', label: 'Research', icon: 'BarChart3' }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services?.filter(service => service?.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Services - Complete Marketing Solutions | Marketverse</title>
        <meta name="description" content="Explore Marketverse's comprehensive marketing services: Brand Strategy, Digital Marketing, Content Creation, Social Media, Import Sourcing, and Market Research. 100+ man-years of expertise delivering measurable results." />
      </Helmet>
      <div className="min-h-screen bg-[#FAFBFC]">
        <Header />
        
        <main className="main-content">
          <ServiceHero />

          <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                {categories?.map((category) => (
                  <button
                    key={category?.id}
                    onClick={() => setActiveFilter(category?.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      activeFilter === category?.id
                        ? 'bg-[#1B365D] text-white shadow-lg'
                        : 'bg-[#F3F4F6] text-[#4A5568] hover:bg-[#E5E7EB]'
                    }`}
                  >
                    <Icon name={category?.icon} size={18} />
                    <span>{category?.label}</span>
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices?.map((service) => (
                  <ServiceCard
                    key={service?.id}
                    service={service}
                    onExpand={setSelectedService}
                  />
                ))}
              </div>
            </div>
          </section>

          <ServiceComparison />
          <ROICalculator />
          <ProcessTimeline />
          <CaseStudyPreview />
          <CTASection />
        </main>

        {selectedService && (
          <ServiceDetailModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}

        <footer className="bg-[#1A1A1A] text-white py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <p className="text-white/60">
              &copy; {new Date()?.getFullYear()} Marketverse. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Services;