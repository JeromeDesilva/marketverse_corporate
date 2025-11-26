import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../homepage/components/Footer';
import Icon from '../../components/AppIcon';

const TermsOfService = () => {
  const lastUpdated = "November 26, 2025";
  const effectiveDate = "January 1, 2020";

  const serviceScope = [
    {
      title: "Website Usage",
      icon: "Globe",
      description: "Access to and use of Marketverse website, including all content, features, and functionality.",
      terms: [
        "Right to access and browse website content",
        "Permission to contact our team for business inquiries",
        "Use of interactive features (forms, calculators, downloads)",
        "Access to publicly available case studies and resources"
      ]
    },
    {
      title: "Consultation Services",
      icon: "Users",
      description: "Professional marketing consultation and strategic advisory services provided by Marketverse.",
      terms: [
        "Initial consultation and business assessment",
        "Strategic marketing planning and recommendations",
        "Campaign development and execution support",
        "Performance monitoring and optimization guidance"
      ]
    },
    {
      title: "Business Communications",
      icon: "MessageSquare",
      description: "Email correspondence, meetings, and professional communications with Marketverse team.",
      terms: [
        "Email exchanges regarding services and projects",
        "Scheduled consultation meetings (virtual or in-person)",
        "Project status updates and progress reports",
        "Marketing materials and resource sharing"
      ]
    }
  ];

  const userObligations = [
    {
      title: "Accurate Information",
      icon: "CheckCircle",
      description: "You must provide accurate, complete, and current information when using our services or communicating with us."
    },
    {
      title: "Lawful Use",
      icon: "Scale",
      description: "You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations."
    },
    {
      title: "Confidentiality",
      icon: "Lock",
      description: "You must maintain confidentiality of any proprietary information shared during consultations or business interactions."
    },
    {
      title: "Intellectual Property",
      icon: "Copyright",
      description: "You agree not to copy, reproduce, or distribute our proprietary content without explicit written permission."
    }
  ];

  const prohibitedActivities = [
    "Attempting to gain unauthorized access to our systems or networks",
    "Using our services to transmit viruses, malware, or harmful code",
    "Engaging in any activity that disrupts or interferes with our services",
    "Impersonating Marketverse or our team members in communications",
    "Using our content or branding without proper authorization",
    "Sharing confidential information with unauthorized third parties",
    "Reverse engineering or attempting to extract source code from our website",
    "Using automated systems to scrape or harvest data from our website"
  ];

  const intellectualProperty = [
    {
      category: "Marketverse Content",
      description: "All content on our website, including text, graphics, logos, images, and software, is owned by Marketverse and protected by copyright and trademark laws.",
      rights: [
        "Copyright in original website content and materials",
        "Trademark rights in Marketverse name and logo",
        "Trade secrets in proprietary methodologies and processes",
        "Database rights in compiled information and case studies"
      ]
    },
    {
      category: "Client Materials",
      description: "Materials provided by clients during engagements remain the property of the client, subject to usage rights granted to Marketverse.",
      rights: [
        "Clients retain ownership of provided brand materials",
        "Limited usage rights granted to Marketverse for project delivery",
        "Confidential client information protected under NDA terms",
        "Final deliverables ownership transferred upon full payment"
      ]
    },
    {
      category: "Case Studies",
      description: "Published case studies contain aggregated insights and anonymized data, used with client permission where applicable.",
      rights: [
        "Right to publish anonymized performance metrics",
        "Permission obtained before client identification in case studies",
        "Proprietary analysis methods remain Marketverse property",
        "Clients may request removal of case studies upon written notice"
      ]
    }
  ];

  const liabilityLimitations = [
    {
      title: "Service Availability",
      icon: "AlertCircle",
      limitation: "We do not guarantee uninterrupted access to our website or services. Technical issues, maintenance, or unforeseen circumstances may cause temporary disruptions."
    },
    {
      title: "Performance Results",
      icon: "TrendingUp",
      limitation: "While we strive for excellence, we cannot guarantee specific business outcomes or performance results. Marketing success depends on multiple factors beyond our control."
    },
    {
      title: "Third-Party Content",
      icon: "ExternalLink",
      limitation: "We are not responsible for content, accuracy, or reliability of third-party websites linked from our platform or referenced in our communications."
    },
    {
      title: "Financial Liability Cap",
      icon: "DollarSign",
      limitation: "Our maximum liability for any claim arising from services provided shall not exceed the total fees paid by the client for the specific engagement in question."
    }
  ];

  const disputeResolution = [
    {
      step: 1,
      title: "Informal Negotiation",
      description: "Parties agree to first attempt to resolve disputes through good faith negotiations for a period of 30 days.",
      duration: "30 days"
    },
    {
      step: 2,
      title: "Mediation",
      description: "If negotiation fails, disputes shall be referred to mediation with a mutually agreed mediator in Mumbai, India.",
      duration: "60 days"
    },
    {
      step: 3,
      title: "Arbitration",
      description: "Unresolved disputes after mediation shall be settled through binding arbitration under the Arbitration and Conciliation Act, 1996.",
      duration: "As per arbitration proceedings"
    },
    {
      step: 4,
      title: "Legal Jurisdiction",
      description: "Courts of Mumbai, Maharashtra shall have exclusive jurisdiction for any legal proceedings arising from these terms.",
      duration: "N/A"
    }
  ];

  const paymentTerms = [
    {
      title: "Consultation Fees",
      icon: "CreditCard",
      terms: [
        "Initial consultation may be complimentary or subject to agreed fees",
        "Professional services billed according to engagement agreements",
        "Payment due within 30 days of invoice date unless otherwise specified",
        "Late payments subject to 1.5% monthly interest charge"
      ]
    },
    {
      title: "Cancellation Policy",
      icon: "XCircle",
      terms: [
        "Consultation meetings may be rescheduled with 48 hours notice",
        "Service contracts subject to cancellation terms in specific agreements",
        "Work completed prior to cancellation remains billable",
        "Refunds processed within 14 business days where applicable"
      ]
    },
    {
      title: "Refund Procedures",
      icon: "RefreshCw",
      terms: [
        "Refund eligibility determined based on engagement agreement terms",
        "Requests must be submitted in writing within specified timeframes",
        "Refunds processed to original payment method when possible",
        "Administrative fees may apply to refund processing"
      ]
    }
  ];

  const terminationPolicies = [
    {
      party: "Marketverse Termination Rights",
      icon: "UserX",
      conditions: [
        "Violation of these Terms of Service by the client",
        "Provision of false or misleading information",
        "Engagement in prohibited activities or unlawful conduct",
        "Non-payment of fees after 60 days past due",
        "Behavior threatening to our team members or reputation"
      ]
    },
    {
      party: "Client Termination Rights",
      icon: "LogOut",
      conditions: [
        "Dissatisfaction with service quality (subject to engagement terms)",
        "Business circumstances requiring project cancellation",
        "Breach of service agreement terms by Marketverse",
        "Changes in business strategy or priorities"
      ]
    },
    {
      party: "Post-Termination",
      icon: "Archive",
      conditions: [
        "Outstanding fees remain due and payable",
        "Confidential information obligations continue indefinitely",
        "Access to client portal and resources may be revoked",
        "Completed work deliverables transferred upon full payment",
        "Data retention follows our standard privacy policy procedures"
      ]
    }
  ];

  const modifications = [
    {
      type: "Notice Period",
      icon: "Bell",
      description: "We will provide at least 30 days notice before significant changes to these terms take effect. Notice will be provided via email to registered users and prominent website banner."
    },
    {
      type: "Effective Date",
      icon: "Calendar",
      description: "Modified terms become effective on the date specified in the notice. Continued use of our services after the effective date constitutes acceptance of the revised terms."
    },
    {
      type: "Version History",
      icon: "FileText",
      description: "Previous versions of these terms are archived and available upon request. We maintain a complete version history for transparency and reference purposes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Marketverse | Legal Framework & User Rights</title>
        <meta 
          name="description" 
          content="Marketverse Terms of Service outline the legal framework governing our services, user obligations, intellectual property rights, liability limitations, and dispute resolution procedures under Indian law." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-innovation/10 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Icon name="FileText" size={20} />
                <span className="text-sm font-semibold">Terms of Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Clear terms governing your use of Marketverse services. Please read these terms carefully before engaging with our platform or services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  <span>Last Updated: {lastUpdated}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Effective: {effectiveDate}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and Marketverse ("Company," "we," "our," or "us"), governing your access to and use of our website, services, and business communications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing our website, engaging our services, or communicating with our team, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of India and comply with the Information Technology Act, 2000, Indian Contract Act, 1872, and other applicable Indian regulations. Our services are primarily directed at businesses and professionals in India and internationally.
              </p>
            </div>
          </div>
        </section>

        {/* Service Scope */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Scope of Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our terms cover the following service categories and interactions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {serviceScope?.map((service, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service?.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service?.description}</p>
                  <ul className="space-y-2">
                    {service?.terms?.map((term, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Obligations */}
        <section className="py-16 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Obligations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                By using our services, you agree to fulfill the following obligations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {userObligations?.map((obligation, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={obligation?.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{obligation?.title}</h3>
                      <p className="text-muted-foreground text-sm">{obligation?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="AlertTriangle" size={24} className="text-destructive" />
                Prohibited Activities
              </h3>
              <p className="text-muted-foreground mb-4">
                The following activities are strictly prohibited when using Marketverse services:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {prohibitedActivities?.map((activity, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <Icon name="X" size={16} className="text-destructive mt-1 flex-shrink-0" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Clear definitions of ownership rights for content, materials, and deliverables
              </p>
            </div>

            <div className="space-y-6">
              {intellectualProperty?.map((property, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{property?.category}</h3>
                  <p className="text-muted-foreground mb-4">{property?.description}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {property?.rights?.map((right, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <Icon name="Shield" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>{right}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Liability Limitations */}
        <section className="py-16 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the scope and limits of our liability under this agreement
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {liabilityLimitations?.map((limit, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={limit?.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{limit?.title}</h3>
                      <p className="text-muted-foreground text-sm">{limit?.limitation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Maximum Liability</h4>
                  <p className="text-muted-foreground text-sm">
                    Under no circumstances shall Marketverse be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of our services. Our total liability for all claims arising from or related to these Terms shall not exceed the amount paid by you for services in the twelve (12) months preceding the claim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Dispute Resolution Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Structured approach to resolving disagreements in accordance with Indian law
              </p>
            </div>

            <div className="grid gap-6">
              {disputeResolution?.map((stage, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">{stage?.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{stage?.title}</h3>
                        <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                          <Icon name="Clock" size={14} />
                          {stage?.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{stage?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-background border border-border rounded-xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-3">Governing Law & Jurisdiction</h4>
              <p className="text-muted-foreground text-sm mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.
              </p>
              <div className="flex items-start gap-2 text-sm text-primary">
                <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <span>Venue: Courts of Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="py-16 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Payment Terms & Policies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transparent payment terms, cancellation policies, and refund procedures
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {paymentTerms?.map((payment, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={payment?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">{payment?.title}</h3>
                  <ul className="space-y-3">
                    {payment?.terms?.map((term, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Termination Policies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Circumstances and procedures for terminating service agreements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {terminationPolicies?.map((policy, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={policy?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">{policy?.party}</h3>
                  <ul className="space-y-3">
                    {policy?.conditions?.map((condition, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <Icon name="Minus" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modifications */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Modifications to Terms</h2>
            
            <div className="space-y-6">
              {modifications?.map((mod, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={mod?.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{mod?.type}</h3>
                      <p className="text-muted-foreground text-sm">{mod?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Icon name="AlertCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Acceptance of Changes</h4>
                  <p className="text-muted-foreground text-sm">
                    Your continued use of our services following the posting of revised Terms means that you accept and agree to the changes. If you do not agree to the revised Terms, you must stop using our services immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-innovation/10 border border-primary/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Questions About Terms?</h2>
              <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
                If you have any questions about these Terms of Service, please contact our legal team
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card rounded-lg p-6 border border-border text-center">
                  <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">legal@marketverse.com</p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border text-center">
                  <Icon name="FileText" size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Written Notices</h3>
                  <p className="text-muted-foreground text-sm">Mumbai, India</p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border text-center">
                  <Icon name="Clock" size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Response Time</h3>
                  <p className="text-muted-foreground text-sm">Within 5 business days</p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h4 className="font-bold text-foreground mb-2">Legal Notice Address</h4>
                <p className="text-muted-foreground text-sm">
                  For formal legal notices, correspondence should be sent to: Marketverse Legal Department, [Complete Address], Mumbai, Maharashtra, India, or via email to legal@marketverse.com with "Legal Notice" in the subject line.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Now that you understand our terms, let's begin your journey to market leadership with Marketverse
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Contact Us
                <Icon name="ArrowRight" size={20} />
              </Link>
              <Link
                to="/privacy-policy"
                className="inline-flex items-center justify-center gap-2 bg-card border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/5 transition-colors font-semibold"
              >
                Privacy Policy
                <Icon name="Shield" size={20} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;