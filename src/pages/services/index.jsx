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
    },
    {
      id: 'competitive-intelligence',
      title: "Competitive Intelligence & Industry Analysis",
      icon: "BarChart3",
      tagline: "Stay ahead with comprehensive competitor insights",
      description: "Deep-dive competitive analysis and industry monitoring to understand market dynamics, competitor strategies, and emerging opportunities.",
      fullDescription: "Knowledge is power in competitive markets. Our competitive intelligence service provides continuous monitoring and analysis of your competitors, industry trends, and market shifts. We help you anticipate competitor moves, identify market gaps, and make proactive strategic decisions. Through systematic data collection and expert analysis, we deliver actionable intelligence that keeps you ahead of the curve.",
      keyFeatures: [
        "Competitor strategy analysis",
        "Market share tracking",
        "Pricing and positioning intelligence",
        "Industry trend monitoring"
      ],
      benefits: [
        "Anticipate market changes",
        "Identify competitive gaps",
        "Strategic positioning clarity",
        "Proactive decision-making",
        "Reduced competitive risks",
        "Market opportunity identification"
      ],
      idealFor: [
        "Established businesses",
        "Market leaders",
        "Growth-stage companies",
        "Strategic planning teams"
      ],
      methodology: [
        {
          phase: "Intelligence Framework",
          description: "Establish monitoring systems, data sources, and analysis frameworks tailored to your competitive landscape.",
          duration: "1 week"
        },
        {
          phase: "Data Gathering",
          description: "Collect competitor data through multiple sources including digital monitoring, market research, and industry analysis.",
          duration: "2 weeks"
        },
        {
          phase: "Strategic Analysis",
          description: "Analyze competitor strategies, market positioning, strengths, weaknesses, and strategic intentions.",
          duration: "1 week"
        },
        {
          phase: "Intelligence Delivery",
          description: "Present findings with strategic recommendations and ongoing monitoring dashboard setup.",
          duration: "1 week"
        }
      ],
      deliverables: [
        { title: "Competitor Profiles", description: "Detailed analysis of key competitors and their strategies" },
        { title: "Market Position Map", description: "Visual representation of competitive landscape" },
        { title: "SWOT Analysis", description: "Comprehensive strengths, weaknesses, opportunities, threats" },
        { title: "Intelligence Dashboard", description: "Real-time competitor monitoring system" },
        { title: "Opportunity Report", description: "Market gaps and strategic opportunities identified" },
        { title: "Strategic Recommendations", description: "Actionable plans based on competitive insights" }
      ],
      pricingTiers: [
        {
          name: "Snapshot",
          price: 180000,
          period: "/project",
          features: [
            "Competitor analysis",
            "Market positioning",
            "Basic SWOT",
            "One-time report",
            "1 revision round"
          ]
        },
        {
          name: "Continuous Intelligence",
          price: 320000,
          period: "/project",
          recommended: true,
          features: [
            "Everything in Snapshot",
            "Ongoing monitoring",
            "Monthly updates",
            "Intelligence dashboard",
            "Strategic workshops",
            "3 months coverage"
          ]
        },
        {
          name: "Strategic Intelligence",
          price: 480000,
          period: "/project",
          features: [
            "Everything in Continuous",
            "Advanced analytics",
            "Predictive insights",
            "Quarterly strategy reviews",
            "Competitive war gaming",
            "6 months coverage"
          ]
        }
      ],
      deliveryTime: "3-5 weeks",
      caseStudyCount: 11,
      isPopular: true,
      category: "research"
    },
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
      id: 'customer-sentiment',
      title: "Customer Sentiment & Behavior Analysis",
      icon: "Target",
      tagline: "Unlock deep customer insights for strategic advantage",
      description: "Advanced sentiment analysis and behavioral intelligence that transforms customer feedback into actionable business strategies.",
      fullDescription: "Understanding what customers think, feel, and do is the foundation of market success. Our customer sentiment and behavior analysis service combines advanced analytics, AI-powered sentiment tracking, and behavioral psychology to decode customer motivations. We analyze social media, reviews, support interactions, and behavioral data to reveal patterns that drive purchase decisions, loyalty, and advocacy.",
      keyFeatures: [
        "Multi-channel sentiment monitoring",
        "Behavioral pattern recognition",
        "Customer journey analytics",
        "Predictive churn analysis"
      ],
      benefits: [
        "Enhanced customer retention",
        "Improved product development",
        "Targeted marketing strategies",
        "Proactive issue resolution",
        "Increased customer lifetime value",
        "Data-driven personalization"
      ],
      idealFor: [
        "E-commerce platforms",
        "SaaS companies",
        "Consumer brands",
        "Service businesses"
      ],
      methodology: [
        {
          phase: "Data Integration",
          description: "Connect all customer touchpoints, feedback channels, and behavioral data sources for comprehensive analysis.",
          duration: "1 week"
        },
        {
          phase: "Sentiment Analysis",
          description: "Deploy AI-powered tools to analyze customer sentiment across reviews, social media, support tickets, and surveys.",
          duration: "2 weeks"
        },
        {
          phase: "Behavioral Mapping",
          description: "Identify patterns in customer actions, preferences, and decision-making processes through advanced analytics.",
          duration: "1 week"
        },
        {
          phase: "Strategic Recommendations",
          description: "Translate insights into actionable strategies for product, marketing, and customer experience improvements.",
          duration: "1 week"
        }
      ],
      deliverables: [
        { title: "Sentiment Dashboard", description: "Real-time customer sentiment tracking and alerts" },
        { title: "Behavior Patterns Report", description: "Comprehensive analysis of customer actions and trends" },
        { title: "Customer Journey Map", description: "Visual representation of touchpoints and pain points" },
        { title: "Churn Risk Analysis", description: "Predictive model identifying at-risk customers" },
        { title: "Persona Refinement", description: "Enhanced customer profiles based on actual behavior" },
        { title: "Action Plan", description: "Prioritized recommendations for immediate implementation" }
      ],
      pricingTiers: [
        {
          name: "Basic Insights",
          price: 180000,
          period: "/project",
          features: [
            "Sentiment analysis",
            "Basic behavior tracking",
            "Monthly reports",
            "1 data source integration",
            "3 months monitoring"
          ]
        },
        {
          name: "Advanced Analytics",
          price: 350000,
          period: "/project",
          recommended: true,
          features: [
            "Everything in Basic",
            "Multi-channel analysis",
            "Predictive modeling",
            "Journey mapping",
            "5 data source integrations",
            "6 months monitoring"
          ]
        },
        {
          name: "Enterprise Intelligence",
          price: 580000,
          period: "/project",
          features: [
            "Everything in Advanced",
            "Custom AI models",
            "Real-time alerts",
            "Competitive sentiment",
            "Unlimited integrations",
            "12 months monitoring"
          ]
        }
      ],
      deliveryTime: "3-5 weeks",
      caseStudyCount: 14,
      isPopular: true,
      category: "research"
    },
    {
      id: 'brand-evolution',
      title: "Brand Evolution & Market Positioning",
      icon: "Target",
      tagline: "Strategic brand growth for evolving markets",
      description: "Systematic brand development and market repositioning for businesses ready to scale, expand, or pivot into new opportunities.",
      fullDescription: "Markets evolve, and your brand must evolve with them. Our brand evolution service is designed for businesses that have outgrown their current positioning or need to adapt to changing market dynamics. Unlike complete rebranding, we focus on strategic evolution—maintaining brand equity while updating positioning, messaging, and visual expression to capture new opportunities and audiences.",
      keyFeatures: [
        "Market dynamics assessment",
        "Strategic positioning evolution",
        "Visual identity modernization",
        "Audience expansion strategy"
      ],
      benefits: [
        "Maintained brand equity",
        "Expanded market reach",
        "Enhanced relevance",
        "Future-proof positioning",
        "Aligned stakeholder vision",
        "Gradual transition management"
      ],
      idealFor: [
        "Growing businesses",
        "Market expanders",
        "Portfolio diversifiers",
        "Legacy brand modernizers"
      ],
      methodology: [
        {
          phase: "Evolution Assessment",
          description: "Evaluate current brand strength, market position, and growth opportunities to define evolution scope.",
          duration: "1 week"
        },
        {
          phase: "Strategic Repositioning",
          description: "Develop updated positioning that bridges current brand equity with future market opportunities.",
          duration: "2 weeks"
        },
        {
          phase: "Identity Modernization",
          description: "Refresh visual and verbal identity elements while maintaining recognizable brand essence.",
          duration: "2 weeks"
        },
        {
          phase: "Phased Implementation",
          description: "Roll out evolved brand gradually with stakeholder alignment and market communication strategy.",
          duration: "Ongoing"
        }
      ],
      deliverables: [
        { title: "Evolution Strategy", description: "Comprehensive roadmap for brand development and growth" },
        { title: "Updated Positioning", description: "Refreshed brand positioning and value propositions" },
        { title: "Modernized Identity", description: "Updated visual and verbal brand expression system" },
        { title: "Audience Strategy", description: "Plans for reaching new segments while retaining core customers" },
        { title: "Implementation Timeline", description: "Phased rollout plan with risk mitigation strategies" },
        { title: "Stakeholder Kit", description: "Communication materials for internal and external alignment" }
      ],
      pricingTiers: [
        {
          name: "Identity Refresh",
          price: 220000,
          period: "/project",
          features: [
            "Visual identity update",
            "Positioning refinement",
            "Brand guidelines",
            "Basic rollout plan",
            "2 months support"
          ]
        },
        {
          name: "Strategic Evolution",
          price: 420000,
          period: "/project",
          recommended: true,
          features: [
            "Everything in Refresh",
            "Market analysis",
            "Audience expansion strategy",
            "Comprehensive guidelines",
            "Change management",
            "6 months support"
          ]
        },
        {
          name: "Complete Transformation",
          price: 680000,
          period: "/project",
          features: [
            "Everything in Strategic",
            "Multi-market positioning",
            "Portfolio architecture",
            "Executive workshops",
            "Ongoing optimization",
            "12 months support"
          ]
        }
      ],
      deliveryTime: "4-6 weeks",
      caseStudyCount: 9,
      isPopular: false,
      category: "strategy"
    },
    {
      id: 'go-to-market-strategy',
      title: "Go-to-Market Strategy & Launch Planning",
      icon: "Target",
      tagline: "Strategic market entry for maximum impact",
      description: "Comprehensive go-to-market strategies for new products, services, or market entries—from positioning to launch execution.",
      fullDescription: "Launching something new requires more than a great product—it demands a strategic approach to market entry. Our go-to-market service combines market intelligence, competitive analysis, and launch expertise to ensure your new offering captures attention and gains traction. We develop complete launch strategies covering positioning, pricing, channels, messaging, and activation tactics that drive early adoption and sustainable growth.",
      keyFeatures: [
        "Market entry strategy",
        "Launch positioning and messaging",
        "Channel and partnership strategy",
        "Launch execution planning"
      ],
      benefits: [
        "Reduced launch risks",
        "Faster time to traction",
        "Optimized market fit",
        "Clear differentiation",
        "Coordinated execution",
        "Measurable launch metrics"
      ],
      idealFor: [
        "Product launches",
        "Market expansions",
        "New business units",
        "Service line additions"
      ],
      methodology: [
        {
          phase: "Market Analysis",
          description: "Research target market, competitors, customer needs, and optimal entry strategies for success.",
          duration: "1 week"
        },
        {
          phase: "Strategy Development",
          description: "Define positioning, pricing, channels, partnerships, and messaging for market entry.",
          duration: "2 weeks"
        },
        {
          phase: "Launch Planning",
          description: "Create detailed execution plan with timelines, budgets, resources, and success metrics.",
          duration: "1 week"
        },
        {
          phase: "Launch Support",
          description: "Provide hands-on guidance during execution phase with real-time optimization and troubleshooting.",
          duration: "4-8 weeks"
        }
      ],
      deliverables: [
        { title: "GTM Strategy Document", description: "Complete go-to-market strategy and rationale" },
        { title: "Launch Positioning", description: "Product/service positioning and messaging framework" },
        { title: "Channel Strategy", description: "Optimal distribution and partnership approach" },
        { title: "Launch Plan", description: "Detailed execution roadmap with timelines and responsibilities" },
        { title: "Marketing Assets", description: "Core messaging, content, and campaign frameworks" },
        { title: "Success Metrics", description: "KPIs and measurement framework for launch tracking" }
      ],
      pricingTiers: [
        {
          name: "Launch Essentials",
          price: 250000,
          period: "/project",
          features: [
            "Market analysis",
            "Basic positioning",
            "Channel recommendation",
            "Launch checklist",
            "1 month support"
          ]
        },
        {
          name: "Complete Launch",
          price: 450000,
          period: "/project",
          recommended: true,
          features: [
            "Everything in Essentials",
            "Comprehensive strategy",
            "Detailed launch plan",
            "Marketing frameworks",
            "Campaign guidance",
            "3 months support"
          ]
        },
        {
          name: "Managed Launch",
          price: 750000,
          period: "/project",
          features: [
            "Everything in Complete",
            "Hands-on execution support",
            "Real-time optimization",
            "Crisis management",
            "Post-launch analysis",
            "6 months support"
          ]
        }
      ],
      deliveryTime: "3-5 weeks (strategy), 4-8 weeks (execution support)",
      caseStudyCount: 16,
      isPopular: true,
      category: "strategy"
    },
    {
      id: 'import-sourcing-global',
      title: "Import & Product Sourcing - Global Excellence",
      icon: "Package",
      tagline: "Connect to world-class suppliers and products",
      description: "End-to-end import and sourcing solutions connecting you with verified global suppliers, ensuring quality products at competitive prices.",
      fullDescription: "Navigate the complexities of international trade with confidence. Our import and product sourcing service provides comprehensive support from supplier identification to logistics coordination. With our extensive network of verified manufacturers and deep understanding of import regulations, we streamline the entire process, reducing risks and maximizing value.",
      keyFeatures: [
        "Global supplier network access",
        "Quality assurance and verification",
        "Competitive pricing negotiation",
        "Import compliance and documentation"
      ],
      benefits: [
        "Cost reduction through direct sourcing",
        "Access to quality verified suppliers",
        "Reduced import risks and delays",
        "Streamlined logistics coordination",
        "Regulatory compliance assurance",
        "Time savings on vendor management"
      ],
      idealFor: [
        "Retailers seeking new products",
        "Businesses expanding product lines",
        "Companies entering new markets",
        "Startups launching physical products"
      ],
      methodology: [
        {
          phase: "Requirements Analysis",
          description: "Define product specifications, quantity requirements, quality standards, and budget parameters.",
          duration: "3-5 days"
        },
        {
          phase: "Supplier Identification",
          description: "Research and shortlist potential suppliers based on capabilities, certifications, and track record.",
          duration: "1 week"
        },
        {
          phase: "Verification & Negotiation",
          description: "Verify supplier credentials, conduct factory audits, and negotiate terms and pricing.",
          duration: "2 weeks"
        },
        {
          phase: "Order & Logistics",
          description: "Place orders, coordinate shipping, handle documentation, and manage customs clearance.",
          duration: "4-8 weeks"
        }
      ],
      deliverables: [
        { title: "Supplier Database", description: "Verified supplier contacts with detailed profiles" },
        { title: "Cost Analysis", description: "Comprehensive breakdown of landed costs" },
        { title: "Quality Reports", description: "Inspection reports and quality certifications" },
        { title: "Import Documentation", description: "Complete customs and regulatory paperwork" },
        { title: "Logistics Coordination", description: "Shipping and delivery management support" },
        { title: "Supplier Contracts", description: "Negotiated agreements and terms" }
      ],
      pricingTiers: [
        {
          name: "Single Product",
          price: 150000,
          period: "/product",
          features: [
            "Supplier sourcing",
            "Basic verification",
            "Price negotiation",
            "Import documentation",
            "1 product sourcing"
          ]
        },
        {
          name: "Product Line",
          price: 400000,
          period: "/project",
          recommended: true,
          features: [
            "Everything in Single Product",
            "Factory audits",
            "Quality inspections",
            "Logistics coordination",
            "Up to 5 products",
            "3 months support"
          ]
        },
        {
          name: "Strategic Partnership",
          price: 800000,
          period: "/project",
          features: [
            "Everything in Product Line",
            "Long-term supplier relationships",
            "Ongoing quality management",
            "Supply chain optimization",
            "Unlimited products",
            "12 months support"
          ]
        }
      ],
      deliveryTime: "6-10 weeks",
      caseStudyCount: 18,
      isPopular: true,
      category: "sourcing"
    },
    {
      id: 'import-sourcing-premium',
      title: "Import & Product Sourcing - Premium Selection",
      icon: "Package",
      tagline: "Curated premium products from verified manufacturers",
      description: "Specialized sourcing for high-quality, premium products with rigorous quality control and supplier vetting processes.",
      fullDescription: "For businesses that prioritize quality and brand reputation, our premium sourcing service offers access to top-tier manufacturers and artisans worldwide. We focus on product excellence, ethical sourcing practices, and building long-term partnerships with suppliers who share your commitment to quality. Every supplier undergoes extensive verification, and every product meets stringent quality benchmarks.",
      keyFeatures: [
        "Premium supplier network",
        "Multi-stage quality verification",
        "Ethical sourcing certification",
        "Brand protection support"
      ],
      benefits: [
        "Superior product quality",
        "Enhanced brand reputation",
        "Reduced quality-related returns",
        "Ethical supply chain confidence",
        "Exclusive supplier partnerships",
        "White-glove service experience"
      ],
      idealFor: [
        "Premium brands",
        "Luxury retailers",
        "Quality-focused businesses",
        "Sustainable product companies"
      ],
      methodology: [
        {
          phase: "Premium Supplier Curation",
          description: "Identify and vet premium manufacturers with proven quality records and certifications.",
          duration: "1 week"
        },
        {
          phase: "In-depth Quality Assessment",
          description: "Conduct comprehensive factory audits, product testing, and certification verification.",
          duration: "2 weeks"
        },
        {
          phase: "Strategic Partnership Building",
          description: "Establish long-term relationships, negotiate favorable terms, and secure exclusive agreements.",
          duration: "1 week"
        },
        {
          phase: "Quality-Assured Fulfillment",
          description: "Implement stringent quality controls, coordinate premium logistics, and ensure perfect delivery.",
          duration: "6-10 weeks"
        }
      ],
      deliverables: [
        { title: "Premium Supplier Portfolio", description: "Curated selection of top-tier verified suppliers" },
        { title: "Quality Certification Package", description: "Complete quality and compliance documentation" },
        { title: "Ethical Sourcing Report", description: "Sustainability and ethical practice verification" },
        { title: "Product Sample Collection", description: "Physical samples for quality assessment" },
        { title: "Exclusive Partnership Agreements", description: "Negotiated terms and protection clauses" },
        { title: "Premium Logistics Management", description: "White-glove shipping and handling coordination" }
      ],
      pricingTiers: [
        {
          name: "Premium Start",
          price: 250000,
          period: "/product",
          features: [
            "Premium supplier sourcing",
            "Factory audits",
            "Quality certifications",
            "Sample procurement",
            "1 premium product"
          ]
        },
        {
          name: "Premium Collection",
          price: 600000,
          period: "/project",
          recommended: true,
          features: [
            "Everything in Premium Start",
            "Ethical sourcing verification",
            "Exclusive partnerships",
            "Brand protection support",
            "Up to 5 premium products",
            "6 months support"
          ]
        },
        {
          name: "Luxury Partnership",
          price: 1200000,
          period: "/project",
          features: [
            "Everything in Premium Collection",
            "White-glove service",
            "Custom product development",
            "Ongoing quality assurance",
            "Unlimited premium products",
            "24/7 support access"
          ]
        }
      ],
      deliveryTime: "8-12 weeks",
      caseStudyCount: 10,
      isPopular: false,
      category: "sourcing"
    },
    {
      id: 'import-sourcing-value',
      title: "Import & Product Sourcing - Value Optimization",
      icon: "Package",
      tagline: "Maximum value through smart sourcing strategies",
      description: "Cost-effective sourcing solutions that don't compromise on quality, perfect for businesses seeking competitive advantage through procurement optimization.",
      fullDescription: "Smart businesses know that cost optimization doesn't mean sacrificing quality. Our value-focused sourcing service leverages bulk purchasing power, strategic supplier relationships, and efficient logistics to deliver exceptional value. We help you source products that meet your quality standards while maximizing your margins, giving you a competitive edge in your market.",
      keyFeatures: [
        "Cost optimization strategies",
        "Bulk purchasing leverage",
        "Efficient logistics planning",
        "Value engineering support"
      ],
      benefits: [
        "Reduced procurement costs",
        "Improved profit margins",
        "Competitive pricing advantage",
        "Optimized inventory management",
        "Faster time to market",
        "Scalable sourcing solutions"
      ],
      idealFor: [
        "Cost-conscious retailers",
        "High-volume distributors",
        "Startup businesses",
        "E-commerce sellers"
      ],
      methodology: [
        {
          phase: "Cost Analysis & Strategy",
          description: "Analyze current costs, identify optimization opportunities, and develop value-focused sourcing strategy.",
          duration: "3-5 days"
        },
        {
          phase: "Value Supplier Matching",
          description: "Identify suppliers offering optimal price-quality balance through extensive market research.",
          duration: "1 week"
        },
        {
          phase: "Negotiation & Optimization",
          description: "Leverage bulk purchasing and long-term commitments to secure best pricing and terms.",
          duration: "1 week"
        },
        {
          phase: "Efficient Fulfillment",
          description: "Coordinate streamlined logistics and documentation for cost-effective delivery.",
          duration: "3-6 weeks"
        }
      ],
      deliverables: [
        { title: "Cost Optimization Report", description: "Detailed analysis of savings opportunities" },
        { title: "Value Supplier Network", description: "Database of cost-effective quality suppliers" },
        { title: "Pricing Comparison Matrix", description: "Comprehensive market price benchmarking" },
        { title: "Logistics Optimization Plan", description: "Streamlined shipping and handling strategy" },
        { title: "Volume Purchase Agreements", description: "Negotiated bulk pricing contracts" },
        { title: "Margin Analysis", description: "Projected profitability and ROI calculations" }
      ],
      pricingTiers: [
        {
          name: "Value Starter",
          price: 100000,
          period: "/product",
          features: [
            "Cost-effective sourcing",
            "Basic supplier verification",
            "Price negotiation",
            "Standard documentation",
            "1 product sourcing"
          ]
        },
        {
          name: "Value Optimization",
          price: 280000,
          period: "/project",
          recommended: true,
          features: [
            "Everything in Value Starter",
            "Bulk pricing negotiation",
            "Quality spot checks",
            "Logistics optimization",
            "Up to 5 products",
            "3 months support"
          ]
        },
        {
          name: "Value Enterprise",
          price: 550000,
          period: "/project",
          features: [
            "Everything in Value Optimization",
            "Strategic supplier partnerships",
            "Continuous cost optimization",
            "Supply chain management",
            "Unlimited products",
            "12 months support"
          ]
        }
      ],
      deliveryTime: "4-8 weeks",
      caseStudyCount: 22,
      isPopular: true,
      category: "sourcing"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services', icon: 'Grid' },
    { id: 'strategy', label: 'Strategy', icon: 'Target' },
    { id: 'research', label: 'Research', icon: 'BarChart3' },
    { id: 'sourcing', label: 'Import & Sourcing', icon: 'Package' }
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