import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../homepage/components/Footer';
import Icon from '../../components/AppIcon';

const PrivacyPolicy = () => {
  const lastUpdated = "November 26, 2025";

  const dataCollectionCategories = [
    {
      title: "Personal Information",
      icon: "User",
      items: [
        "Name, email address, phone number",
        "Company name and business details",
        "Job title and professional information",
        "Billing and payment information",
        "Communication preferences"
      ]
    },
    {
      title: "Business Communications",
      icon: "MessageSquare",
      items: [
        "Email correspondence and inquiries",
        "Meeting notes and consultation records",
        "Project requirements and specifications",
        "Feedback and testimonials",
        "Service requests and support tickets"
      ]
    },
    {
      title: "Website Analytics",
      icon: "BarChart3",
      items: [
        "IP address and device information",
        "Browser type and version",
        "Pages visited and time spent",
        "Referring websites and search terms",
        "Geographic location (city/country level)"
      ]
    },
    {
      title: "Marketing Data",
      icon: "Target",
      items: [
        "Campaign interaction data",
        "Content downloads and engagement",
        "Event registrations and attendance",
        "Social media interactions",
        "Newsletter subscriptions"
      ]
    }
  ];

  const userRights = [
    {
      title: "Right to Access",
      icon: "Eye",
      description: "Request a copy of all personal data we hold about you, delivered in a structured, commonly used format within 30 days."
    },
    {
      title: "Right to Correction",
      icon: "Edit",
      description: "Request correction of inaccurate or incomplete personal data we maintain about you without undue delay."
    },
    {
      title: "Right to Deletion",
      icon: "Trash2",
      description: "Request deletion of your personal data when it\'s no longer necessary for the purposes it was collected."
    },
    {
      title: "Right to Portability",
      icon: "Download",
      description: "Receive your personal data in a machine-readable format and transfer it to another service provider."
    },
    {
      title: "Right to Object",
      icon: "ShieldOff",
      description: "Object to processing of your personal data for direct marketing purposes or legitimate interests."
    },
    {
      title: "Right to Restrict",
      icon: "Lock",
      description: "Request restriction of processing your personal data in certain circumstances while we verify or investigate."
    }
  ];

  const securityMeasures = [
    {
      title: "Encryption Protocols",
      icon: "Shield",
      description: "All data transmitted to and from our servers is encrypted using industry-standard TLS/SSL encryption. Sensitive data at rest is encrypted using AES-256 encryption."
    },
    {
      title: "Access Controls",
      icon: "Key",
      description: "Role-based access control (RBAC) ensures only authorized personnel can access personal data. Multi-factor authentication is mandatory for all team members."
    },
    {
      title: "Data Breach Response",
      icon: "AlertTriangle",
      description: "We have a comprehensive incident response plan. In the event of a breach, affected users will be notified within 72 hours as required by GDPR."
    },
    {
      title: "Regular Audits",
      icon: "CheckCircle",
      description: "Our security practices undergo quarterly internal audits and annual third-party security assessments to ensure compliance with industry standards."
    }
  ];

  const thirdPartySharing = [
    {
      category: "CRM & Communication",
      partners: "HubSpot, Mailchimp",
      purpose: "Customer relationship management, email marketing, and communication tracking",
      dataShared: "Contact information, communication preferences, interaction history",
      optOut: "Unsubscribe links in emails or contact privacy@marketverse.co.in"
    },
    {
      category: "Analytics & Insights",
      partners: "Google Analytics, Hotjar",
      purpose: "Website performance analysis, user behavior insights, and experience optimization",
      dataShared: "Device information, browsing behavior, geographic location",
      optOut: "Browser privacy settings, ad blockers, or Google Analytics opt-out"
    },
    {
      category: "Payment Processing",
      partners: "Stripe, Razorpay",
      purpose: "Secure payment processing and transaction management",
      dataShared: "Billing information, transaction details (no credit card numbers stored)",
      optOut: "Not applicable - required for service delivery"
    }
  ];

  const retentionPolicies = [
    {
      dataType: "Active Customer Data",
      retention: "Duration of business relationship + 7 years",
      reason: "Legal compliance, tax records, contract fulfillment"
    },
    {
      dataType: "Prospective Client Data",
      retention: "3 years from last interaction",
      reason: "Business development, relationship building"
    },
    {
      dataType: "Marketing Analytics",
      retention: "26 months (aligned with GDPR)",
      reason: "Campaign performance analysis, optimization"
    },
    {
      dataType: "Financial Records",
      retention: "7 years",
      reason: "Tax compliance, audit requirements"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Marketverse | Data Protection & Privacy Rights</title>
        <meta 
          name="description" 
          content="Marketverse privacy policy outlines our commitment to protecting your personal data. Learn about data collection, user rights under GDPR, security measures, and how we handle your information." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-innovation/10 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Icon name="Shield" size={20} />
                <span className="text-sm font-semibold">Privacy Policy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Privacy Matters
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                At Marketverse, we're committed to protecting your personal data and respecting your privacy rights. This policy explains how we collect, use, and safeguard your information.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Commitment to Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Marketverse ("we," "our," or "us") is India's premier marketing and brand-building powerhouse. We understand that your privacy is paramount, and we take our responsibility to protect your personal data seriously.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Privacy Policy applies to all information collected through our website, services, and business interactions. By using our services, you consent to the data practices described in this policy. We comply with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and Indian data protection laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in transparency and have designed this policy to be clear and accessible. If you have any questions, our privacy team is always available to help.
              </p>
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We collect information to provide better services and improve your experience. Here's a comprehensive breakdown of the data we gather
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {dataCollectionCategories?.map((category, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={category?.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category?.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category?.items?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Rights */}
        <section className="py-16 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Privacy Rights</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Under GDPR, CCPA, and Indian privacy laws, you have comprehensive rights over your personal data
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userRights?.map((right, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={right?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{right?.title}</h3>
                  <p className="text-sm text-muted-foreground">{right?.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">How to Exercise Your Rights</h4>
                  <p className="text-muted-foreground mb-3">
                    To exercise any of these rights, contact our Data Protection Officer at privacy@marketverse.com. We will respond to your request within 30 days as required by law. You will need to verify your identity before we process your request.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    There is no fee for exercising your rights, unless your request is clearly unfounded or excessive, in which case we may charge a reasonable administrative fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Security Measures</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We implement industry-leading security measures to protect your personal data from unauthorized access, disclosure, or loss
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {securityMeasures?.map((measure, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={measure?.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{measure?.title}</h3>
                      <p className="text-muted-foreground text-sm">{measure?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Third-Party Sharing */}
        <section className="py-16 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Third-Party Data Sharing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We work with trusted partners to deliver our services. Here's complete transparency on who we share data with and why
              </p>
            </div>

            <div className="space-y-6">
              {thirdPartySharing?.map((sharing, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{sharing?.category}</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-semibold text-foreground">Partners:</span>
                          <p className="text-sm text-muted-foreground">{sharing?.partners}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-foreground">Purpose:</span>
                          <p className="text-sm text-muted-foreground">{sharing?.purpose}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-semibold text-foreground">Data Shared:</span>
                          <p className="text-sm text-muted-foreground">{sharing?.dataShared}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-foreground">How to Opt-Out:</span>
                          <p className="text-sm text-muted-foreground">{sharing?.optOut}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Icon name="Shield" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Data Processing Agreements</h4>
                  <p className="text-muted-foreground text-sm">
                    All third-party service providers sign comprehensive Data Processing Agreements (DPAs) ensuring GDPR compliance. We only share the minimum data necessary for service delivery and maintain strict contractual obligations for data protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Retention Policies */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Data Retention Policies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We retain your data only as long as necessary for the purposes outlined in this policy
              </p>
            </div>

            <div className="grid gap-6">
              {retentionPolicies?.map((policy, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{policy?.dataType}</h3>
                    <p className="text-sm text-muted-foreground">{policy?.reason}</p>
                  </div>
                  <div className="flex-shrink-0 bg-primary/10 px-6 py-3 rounded-lg">
                    <div className="text-center">
                      <Icon name="Clock" size={24} className="text-primary mx-auto mb-1" />
                      <p className="text-sm font-bold text-foreground">{policy?.retention}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-background border border-border rounded-xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-3">Automatic Deletion</h4>
              <p className="text-muted-foreground text-sm mb-4">
                We have implemented automated data deletion systems that remove data once retention periods expire. You can request early deletion at any time by contacting our privacy team.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <Icon name="Info" size={16} />
                <span>Certain legal obligations may require us to retain specific data longer than standard retention periods.</span>
              </div>
            </div>
          </div>
        </section>

        {/* International Transfers */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">International Data Transfers</h2>
            <p className="text-muted-foreground mb-6">
              As a global business, we may transfer your data internationally. We ensure appropriate safeguards are in place:
            </p>
            
            <div className="space-y-4">
              <div className="bg-background border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Globe" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">EU-India Transfers</h3>
                    <p className="text-muted-foreground text-sm">
                      For EU users, we use Standard Contractual Clauses (SCCs) approved by the European Commission. Data stored in India follows GDPR-equivalent protection standards with regular compliance audits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Shield" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Data Protection Standards</h3>
                    <p className="text-muted-foreground text-sm">
                      All international transfers comply with applicable data protection laws. We conduct Privacy Impact Assessments (PIAs) before any cross-border data transfer and maintain transfer records as required by regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Users" size={32} className="text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Children's Privacy Protection</h2>
                  <p className="text-muted-foreground mb-4">
                    Marketverse services are designed for business professionals and organizations. We do not knowingly collect personal information from children under 16 years of age.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    If we become aware that we have collected personal data from a child under 16 without parental consent, we will take immediate steps to delete that information from our systems.
                  </p>
                  <p className="text-muted-foreground">
                    Parents or guardians who believe we may have collected information from their child should contact us immediately at privacy@marketverse.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Updates */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-innovation/10 border border-primary/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Privacy Questions?</h2>
              <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
                Our dedicated privacy team is here to address your concerns and help you understand your rights.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card rounded-lg p-6 border border-border text-center">
                  <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm">privacy@marketverse.co.in</p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border text-center">
                  <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground text-sm">+91-XXX-XXXX-XXX</p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border text-center">
                  <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Office</h3>
                  <p className="text-muted-foreground text-sm">Chennai, India</p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-4">
                  <Icon name="Bell" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Policy Updates</h3>
                    <p className="text-muted-foreground text-sm">
                      We review this Privacy Policy annually and update it when our practices change. Significant changes will be communicated via email and website notification 30 days before taking effect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Brand?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Now that you understand how we protect your data, let's discuss how Marketverse can help you achieve market leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Start Your Journey
                <Icon name="ArrowRight" size={20} />
              </Link>
              <Link
                to="/cookie-policy"
                className="inline-flex items-center justify-center gap-2 bg-card border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/5 transition-colors font-semibold"
              >
                View Cookie Policy
                <Icon name="Cookie" size={20} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;