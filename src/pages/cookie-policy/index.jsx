import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../homepage/components/Footer';
import Icon from '../../components/AppIcon';

const CookiePolicy = () => {
  const lastUpdated = "November 26, 2025";

  const cookieCategories = [
    {
      title: "Essential Cookies",
      icon: "ShieldCheck",
      description: "Required for basic website functionality and security. These cannot be disabled.",
      duration: "Session/Persistent",
      cookies: [
        { name: "session_id", purpose: "Maintains user session and authentication", duration: "Session" },
        { name: "csrf_token", purpose: "Prevents cross-site request forgery attacks", duration: "Session" },
        { name: "cookie_consent", purpose: "Stores your cookie preferences", duration: "1 year" }
      ]
    },
    {
      title: "Functional Cookies",
      icon: "Settings",
      description: "Enhance website functionality and personalization features.",
      duration: "Up to 1 year",
      cookies: [
        { name: "user_preferences", purpose: "Remembers your language and region settings", duration: "1 year" },
        { name: "theme_mode", purpose: "Stores your dark/light mode preference", duration: "6 months" },
        { name: "form_data", purpose: "Saves partially completed form information", duration: "7 days" }
      ]
    },
    {
      title: "Analytics Cookies",
      icon: "BarChart3",
      description: "Help us understand how visitors interact with our website.",
      duration: "Up to 2 years",
      cookies: [
        { name: "_ga", purpose: "Google Analytics - distinguishes users", duration: "2 years" },
        { name: "_gid", purpose: "Google Analytics - distinguishes users", duration: "24 hours" },
        { name: "_gat", purpose: "Google Analytics - throttle request rate", duration: "1 minute" }
      ]
    },
    {
      title: "Marketing Cookies",
      icon: "Target",
      description: "Track visitors across websites to display relevant advertisements.",
      duration: "Up to 1 year",
      cookies: [
        { name: "hubspot_tracking", purpose: "HubSpot marketing automation tracking", duration: "13 months" },
        { name: "facebook_pixel", purpose: "Facebook advertising and conversion tracking", duration: "3 months" },
        { name: "linkedin_insight", purpose: "LinkedIn advertising and analytics", duration: "6 months" }
      ]
    }
  ];

  const thirdPartyServices = [
    {
      service: "Google Analytics",
      purpose: "Website traffic analysis and user behavior insights",
      dataCollected: "IP address, device information, pages visited, time on site",
      optOut: "https://tools.google.com/dlpage/gaoptout"
    },
    {
      service: "HubSpot",
      purpose: "Customer relationship management and marketing automation",
      dataCollected: "Contact information, interaction history, form submissions",
      optOut: "Contact privacy@marketverse.com"
    },
    {
      service: "Facebook Pixel",
      purpose: "Advertising effectiveness and audience targeting",
      dataCollected: "Page views, conversions, device information",
      optOut: "https://www.facebook.com/settings?tab=ads"
    }
  ];

  const browserInstructions = [
    {
      browser: "Google Chrome",
      steps: [
        "Click the three-dot menu in the top right",
        "Select 'Settings' > 'Privacy and security'",
        "Click \'Cookies and other site data'",
        "Choose your preferred cookie settings"
      ]
    },
    {
      browser: "Mozilla Firefox",
      steps: [
        "Click the menu button and select \'Settings'",
        "Select \'Privacy & Security\' panel",
        "Under Cookies and Site Data, choose your preferences",
        "Click 'Manage Permissions' for specific site controls"
      ]
    },
    {
      browser: "Safari",
      steps: [
        "Click \'Safari\' in the menu bar",
        "Select 'Preferences' > 'Privacy'",
        "Adjust \'Cookies and website data\' settings",
        "Click 'Manage Website Data' for specific controls"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Marketverse | Transparency & Privacy</title>
        <meta 
          name="description" 
          content="Learn about how Marketverse uses cookies to enhance your experience. Comprehensive cookie policy covering essential, functional, analytics, and marketing cookies with GDPR compliance." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-innovation/10 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Icon name="Cookie" size={20} />
                <span className="text-sm font-semibold">Cookie Policy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Cookie Policy
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding how Marketverse uses cookies to enhance your experience and respect your privacy
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
              <h2 className="text-3xl font-bold text-foreground mb-6">What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, understanding how you use our site, and improving our services. This Cookie Policy explains what cookies are, how we use them, and how you can control them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using Marketverse, you consent to the use of cookies in accordance with this policy. You can manage your cookie preferences at any time through your browser settings or our cookie preference center.
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Categories */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We categorize cookies based on their purpose and functionality to give you transparent control over your privacy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cookieCategories?.map((category, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={category?.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{category?.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{category?.description}</p>
                      <p className="text-xs text-muted-foreground">Duration: {category?.duration}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-4">
                    {category?.cookies?.map((cookie, idx) => (
                      <div key={idx} className="bg-muted/50 rounded-lg p-3 border border-border/50">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-mono text-sm text-foreground font-semibold">{cookie?.name}</span>
                          <span className="text-xs text-muted-foreground">{cookie?.duration}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{cookie?.purpose}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="py-16 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Third-Party Integrations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We work with trusted partners to enhance your experience. Here's how they use cookies on our platform
              </p>
            </div>

            <div className="grid gap-6">
              {thirdPartyServices?.map((service, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{service?.service}</h3>
                      <p className="text-muted-foreground mb-4">{service?.purpose}</p>
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-semibold text-foreground">Data Collected:</span>
                          <p className="text-sm text-muted-foreground">{service?.dataCollected}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <a 
                        href={service?.optOut}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold"
                      >
                        Opt Out
                        <Icon name="ExternalLink" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Managing Your Cookies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                You have full control over how cookies are used. Here's how to manage them in popular browsers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {browserInstructions?.map((browser, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Globe" size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{browser?.browser}</h3>
                  </div>
                  <ol className="space-y-2">
                    {browser?.steps?.map((step, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary font-semibold">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Important Note</h4>
                  <p className="text-muted-foreground">
                    Disabling certain cookies may impact your experience on our website. Essential cookies cannot be disabled as they are necessary for basic website functionality and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Compliance */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Legal Compliance & Your Rights</h2>
            
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">GDPR Compliance (EU Users)</h3>
                <p className="text-muted-foreground mb-3">
                  Under the General Data Protection Regulation, you have the right to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>Access and review what data is collected through cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>Withdraw consent for non-essential cookies at any time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>Request deletion of data collected through cookies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">CCPA Compliance (California Users)</h3>
                <p className="text-muted-foreground mb-3">
                  Under the California Consumer Privacy Act, you have the right to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>Know what personal information is being collected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>Opt-out of the sale of personal information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>Request deletion of personal information</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Indian Data Protection Laws</h3>
                <p className="text-muted-foreground">
                  We comply with the Information Technology Act, 2000 and upcoming Digital Personal Data Protection Act. Indian users have rights to data access, correction, and deletion. Contact our privacy team for assistance with your data rights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Updates */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-innovation/10 border border-primary/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Questions About Our Cookie Policy?</h2>
              <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
                We're committed to transparency and helping you understand how we use cookies. If you have questions or concerns about our cookie practices, our team is here to help.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <h3 className="font-bold text-foreground">Email Us</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">privacy@marketverse.com</p>
                  <p className="text-xs text-muted-foreground mt-2">We respond within 48 hours</p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Clock" size={24} className="text-primary" />
                    <h3 className="font-bold text-foreground">Response Time</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">24-48 hours for inquiries</p>
                  <p className="text-xs text-muted-foreground mt-2">Monday to Friday, 9 AM - 6 PM IST</p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-4">
                  <Icon name="Bell" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Policy Updates</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      We review and update this Cookie Policy regularly to reflect changes in our practices and legal requirements. When we make significant changes, we will notify you through:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Email notification to registered users</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Prominent banner on our website</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Updated "Last Modified" date at the top of this policy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Now that you understand how we protect your privacy, let's discuss how Marketverse can help transform your brand into a market leader.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Get Started
                <Icon name="ArrowRight" size={20} />
              </Link>
              <Link
                to="/privacy-policy"
                className="inline-flex items-center justify-center gap-2 bg-card border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/5 transition-colors font-semibold"
              >
                View Privacy Policy
                <Icon name="FileText" size={20} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;