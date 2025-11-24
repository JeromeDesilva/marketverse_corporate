import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CaseStudyCard from './components/CaseStudyCard';
import FilterSection from './components/FilterSection';
import TestimonialCard from './components/TestimonialCard';
import ResultsVisualization from './components/ResultsVisualization';
import ComparisonTool from './components/ComparisonTool';
import DownloadSection from './components/DownloadSection';
import RelatedServices from './components/RelatedServices';
import StatsOverview from './components/StatsOverview';

const CaseStudies = () => {
  const [filters, setFilters] = useState({
    industry: '',
    service: '',
    result: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  const caseStudiesData = [
  {
    id: 1,
    title: "Korean Super Store: Complete Market Entry & Brand Building",
    description: "Comprehensive market entry strategy for Korean retail brand entering Indian market. From brand positioning to digital presence, we created a complete ecosystem that resulted in 300% revenue growth in first year.",
    image: "https://images.unsplash.com/photo-1652705334308-78bc1c9ab361",
    imageAlt: "Modern Korean retail store interior with bright lighting, organized product displays, and contemporary design featuring traditional Korean aesthetic elements",
    industry: "Retail",
    services: ["Brand Building", "Market Entry", "Digital Marketing", "Content Strategy"],
    metrics: [
    { label: "Revenue Growth", value: "300%" },
    { label: "Market Share", value: "15%" },
    { label: "Customer Base", value: "50K+" }],

    duration: "12 months",
    featured: true,
    route: "/korean-super-store-case-study"
  },
  {
    id: 3,
    title: "MyOppa E-commerce Brand: Digital Transformation",
    description: "Complete digital transformation of Korean beauty and lifestyle e-commerce platform. Strategic social media campaigns and influencer partnerships resulted in 400% sales growth and 2M+ engaged followers.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1df2d3dec-1764004137323.png",
    imageAlt: "Modern e-commerce platform interface showing Korean beauty products, sleek design, and shopping cart with engaged users browsing on mobile and desktop devices",
    industry: "E-commerce",
    services: ["Social Media", "Content Strategy", "Influencer Marketing", "Brand Building"],
    metrics: [
    { label: "Followers", value: "2M+" },
    { label: "Sales Growth", value: "400%" },
    { label: "Engagement", value: "8.5%" }],

    duration: "10 months",
    featured: false,
    route: null
  },
  {
    id: 5,
    title: "Brand Prodel delivery launch last mile connectivity quick commence",
    description: "Multi-city expansion strategy for food delivery platform. Created localized marketing campaigns that resulted in successful entry into 15 new cities with 180% order volume growth.",
    image: "https://images.unsplash.com/photo-1659353741121-15d88d99c64e",
    imageAlt: "Professional food delivery service showing delivery person in branded uniform holding insulated food bag, with modern restaurant kitchen in background",
    industry: "Delivery",
    services: ["Market Entry", "Digital Marketing", "Social Media", "Content Strategy"],
    metrics: [
    { label: "Cities Entered", value: "15" },
    { label: "Order Growth", value: "180%" },
    { label: "Partner Base", value: "500+" }],

    duration: "11 months",
    featured: false,
    route: null
  },
  {
    id: 6,
    title: "EdTech Platform: Student Acquisition Campaign",
    description: "Performance marketing campaign for online education platform targeting competitive exam preparation. Achieved 350% increase in student enrollments with 40% reduction in acquisition cost.",
    image: "https://images.unsplash.com/photo-1713998740833-f76168c04676",
    imageAlt: "Modern online learning environment showing diverse students using laptops and tablets for education, with interactive digital displays and collaborative study spaces",
    industry: "Education",
    services: ["Digital Marketing", "Content Strategy", "SEO & Analytics", "Social Media"],
    metrics: [
    { label: "Enrollments", value: "350%" },
    { label: "CAC Reduction", value: "40%" },
    { label: "Completion Rate", value: "75%" }],

    duration: "7 months",
    featured: false,
    route: null
  }];


  const testimonialsData = [
  {
    id: 1,
    clientName: "Priya Sharma",
    clientRole: "Founder & CEO",
    company: "MyOppa E-commerce",
    clientImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1bac64874-1763295443777.png",
    clientImageAlt: "Professional headshot of Indian woman with long black hair wearing navy blue business suit and warm smile",
    thumbnail: "https://images.unsplash.com/photo-1644507884976-43a96ede52d2",
    thumbnailAlt: "Professional business meeting room with modern furniture, large windows, and executive discussing strategy with confident posture",
    quote: "Marketverse transformed our e-commerce brand from a regional player to a national leader. Their strategic approach and execution excellence delivered results beyond our expectations. The 400% sales growth speaks for itself.",
    rating: 5
  },
  {
    id: 2,
    clientName: "Rajesh Kumar",
    clientRole: "Marketing Director",
    company: "Korean Super Store",
    clientImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18c23f11e-1763293073674.png",
    clientImageAlt: "Professional headshot of Indian man with short black hair wearing charcoal gray suit and confident expression",
    thumbnail: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
    thumbnailAlt: "Creative marketing team brainstorming session with diverse professionals around conference table, whiteboards filled with strategy diagrams",
    quote: "The market entry campaign created by Marketverse was nothing short of phenomenal. We went from zero to 50K customers in 12 months, and our revenue tripled. Their understanding of Korean retail dynamics is exceptional.",
    rating: 5
  }];


  const visualizationData = [
  { name: 'Revenue Growth', value: 285 },
  { name: 'Lead Generation', value: 420 },
  { name: 'Brand Awareness', value: 350 },
  { name: 'Market Share', value: 180 },
  { name: 'Customer Retention', value: 310 }];


  const statsData = [
  { label: "Total Projects", value: "150+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Average ROI", value: "320%" },
  { label: "Industries Served", value: "25+" }];


  const relatedServicesData = [
  {
    name: "Brand Building",
    description: "Complete brand identity creation and positioning strategies that establish market presence"
  },
  {
    name: "Digital Marketing",
    description: "Comprehensive digital campaigns across all channels for maximum reach and engagement"
  },
  {
    name: "Market Entry",
    description: "Strategic market entry planning and execution for new markets and territories"
  },
  {
    name: "Content Strategy",
    description: "Data-driven content creation and distribution strategies that drive engagement"
  }];


  const industryOptions = [
  { value: 'retail', label: 'Retail' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'delivery', label: 'Delivery' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'food', label: 'Food & Beverage' },
  { value: 'education', label: 'Education' }];


  const serviceOptions = [
  { value: 'market-research', label: 'Market Research & Analytics' },
  { value: 'competitive-intelligence', label: 'Competitive Intelligence & Industry Analysis' },
  { value: 'brand-strategy', label: 'Brand Strategy & Positioning' },
  { value: 'customer-sentiment', label: 'Customer Sentiment & Behavior Analysis' },
  { value: 'brand-evolution', label: 'Brand Evolution & Market Positioning' },
  { value: 'go-to-market', label: 'Go-to-Market Strategy & Launch Planning' },
  { value: 'import-global', label: 'Import & Product Sourcing - Global Excellence' },
  { value: 'import-premium', label: 'Import & Product Sourcing - Premium Selection' },
  { value: 'import-value', label: 'Import & Product Sourcing - Value Optimization' }];


  const resultOptions = [
  { value: 'high', label: 'High Growth (300%+)' },
  { value: 'medium', label: 'Medium Growth (150-300%)' },
  { value: 'steady', label: 'Steady Growth (100-150%)' }];


  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filteredCaseStudies = useMemo(() => {
    return caseStudiesData?.filter((study) => {
      const matchesSearch = searchQuery === '' ||
      study?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      study?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase());

      const matchesIndustry = !filters?.industry ||
      study?.industry?.toLowerCase() === filters?.industry;

      const matchesService = !filters?.service ||
      study?.services?.some((service) =>
      service?.toLowerCase()?.includes(filters?.service)
      );

      return matchesSearch && matchesIndustry && matchesService;
    });
  }, [searchQuery, filters]);

  const featuredStudy = filteredCaseStudies?.find((study) => study?.featured);
  const regularStudies = filteredCaseStudies?.filter((study) => !study?.featured);

  return (
    <>
      <Helmet>
        <title>Success Stories & Case Studies | Marketverse - Proven Marketing Results</title>
        <meta name="description" content="Explore Marketverse's portfolio of successful marketing campaigns and brand transformations. Real results, measurable ROI, and client success stories across industries." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="main-content">
          {/* Hero Section */}
          <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-innovation/5 geometric-pattern">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Icon name="Award" size={20} className="text-primary" />
                <span className="text-sm font-semibold text-primary">150+ Success Stories</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Proven Results That
                <span className="text-gradient"> Transform Businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Real case studies showcasing measurable growth, market dominance, and brand transformation across diverse industries. From startups to established brands, we deliver results that matter.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() => window.location.href = '/contact'}>

                  Discuss Your Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  onClick={() => alert('Download case study portfolio')}>

                  Download Portfolio
                </Button>
              </div>
            </div>
          </section>

          {/* Stats Overview */}
          <section className="py-12 px-4 bg-card border-y border-border">
            <div className="max-w-7xl mx-auto">
              <StatsOverview stats={statsData} />
            </div>
          </section>

          {/* Filter Section */}
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <FilterSection
                filters={filters}
                onFilterChange={handleFilterChange}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                industryOptions={industryOptions}
                serviceOptions={serviceOptions}
                resultOptions={resultOptions} />

            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Featured Case Studies</h2>
                  <p className="text-muted-foreground">
                    Showing {filteredCaseStudies?.length} of {caseStudiesData?.length} case studies
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {featuredStudy && <CaseStudyCard caseStudy={featuredStudy} featured />}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularStudies?.map((study) =>
                <CaseStudyCard key={study?.id} caseStudy={study} />
                )}
              </div>

              {filteredCaseStudies?.length === 0 &&
              <div className="text-center py-16">
                  <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No case studies found</h3>
                  <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
                  <Button
                  variant="outline"
                  onClick={() => {
                    setFilters({ industry: '', service: '', result: '' });
                    setSearchQuery('');
                  }}>

                    Clear Filters
                  </Button>
                </div>
              }
            </div>
          </section>

          {/* Results Visualization */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Average Results Across Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Data-driven insights showing average performance improvements across all our client engagements
                </p>
              </div>
              <ResultsVisualization
                data={visualizationData}
                title="Average Growth Metrics (%)" />

            </div>
          </section>

          {/* Comparison Tool */}
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <ComparisonTool caseStudies={caseStudiesData} />
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="py-12 px-4 bg-card">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
                  <Icon name="MessageSquare" size={20} className="text-secondary" />
                  <span className="text-sm font-semibold text-secondary">Client Testimonials</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Real feedback from real clients who experienced transformational growth with Marketverse
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonialsData?.map((testimonial) =>
                <TestimonialCard key={testimonial?.id} testimonial={testimonial} />
                )}
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <DownloadSection caseStudy={caseStudiesData?.[0]} />
            </div>
          </section>

          {/* Related Services */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <RelatedServices services={relatedServicesData} />
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-br from-primary to-innovation text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Join 150+ brands that have transformed their market presence with Marketverse. Let's discuss how we can drive measurable growth for your business.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() => window.location.href = '/contact'}>

                  Book Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => alert('Call: +91-XXXX-XXXXXX')}
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">

                  Call Us Now
                </Button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-card border-t border-border py-8 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-muted-foreground text-sm">
                © {new Date()?.getFullYear()} Marketverse. All rights reserved. | Transforming brands through strategic marketing excellence.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>);

};

export default CaseStudies;