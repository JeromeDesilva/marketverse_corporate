import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", path: "/about" },
      { label: "Our Services", path: "/services" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Investment Portal", path: "/investment-partnership-portal" }
    ],
    services: [
      { label: "Brand Strategy", path: "/services" },
      { label: "Performance Marketing", path: "/services" },
      { label: "Market Entry", path: "/services" },
      { label: "E-commerce Growth", path: "/services" }
    ],
    resources: [
      { label: "Contact Us", path: "/contact" },
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms of Service", path: "/terms-of-service" },
      { label: "Careers", path: "/careers" }
    ]
  };

  const socialLinks = [
    { icon: "Linkedin", url: "#", label: "LinkedIn" },
    { icon: "Twitter", url: "#", label: "Twitter" },
    { icon: "Instagram", url: "#", label: "Instagram" },
    { icon: "Facebook", url: "#", label: "Facebook" }
  ];

  const sitemapData = {
    pages: [
      { 
        label: "Home", 
        path: "/homepage",
        children: []
      },
      { 
        label: "About", 
        path: "/about",
        children: []
      },
      { 
        label: "Services", 
        path: "/services",
        children: []
      },
      { 
        label: "Case Studies", 
        path: "/case-studies",
        children: [
          { label: "Korean Super Store", path: "/korean-super-store-case-study" }
        ]
      },
      { 
        label: "Blog", 
        path: "/blog-hub",
        children: []
      },
      { 
        label: "Investment Portal", 
        path: "/investment-partnership-portal",
        children: []
      },
      { 
        label: "Careers", 
        path: "/careers",
        children: []
      },
      { 
        label: "Contact", 
        path: "/contact",
        children: []
      }
    ],
    legal: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms of Service", path: "/terms-of-service" },
      { label: "Cookie Policy", path: "/cookie-policy" }
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-10">
          <div className="lg:col-span-2">
            <Link to="/homepage" className="inline-flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-innovation rounded-xl flex items-center justify-center">
                <Icon name="TrendingUp" size={24} color="#FFFFFF" />
              </div>
              <span className="text-2xl font-bold text-foreground">Marketverse</span>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed max-w-md">
              India's premier marketing and brand-building powerhouse. Transforming ambitious brands into market leaders with 100+ man-years of expertise.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  aria-label={social?.label}
                >
                  <Icon name={social?.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks?.company?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks?.services?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks?.resources?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Optimized Sitemap Section */}
        <div className="border-t border-border pt-8 sm:pt-10 pb-6 sm:pb-8">
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <Icon name="Map" size={20} className="text-primary" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Site Map</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h4 className="text-foreground font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <Icon name="Layout" size={16} className="text-primary" />
                  Main Pages
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {sitemapData?.pages?.map((page, index) => (
                    <div key={index}>
                      <Link
                        to={page?.path}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium"
                      >
                        <Icon name="ChevronRight" size={14} />
                        {page?.label}
                      </Link>
                      {page?.children?.length > 0 && (
                        <div className="ml-5 mt-1.5 space-y-1.5">
                          {page?.children?.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              to={child?.path}
                              className="text-xs sm:text-sm text-muted-foreground/80 hover:text-primary transition-colors flex items-center gap-2"
                            >
                              <Icon name="CornerDownRight" size={12} />
                              {child?.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <Icon name="Shield" size={16} className="text-primary" />
                  Legal & Policies
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {sitemapData?.legal?.map((item, index) => (
                    <Link
                      key={index}
                      to={item?.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium"
                    >
                      <Icon name="ChevronRight" size={14} />
                      {item?.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-xs sm:text-sm text-center md:text-left">
              <p>&copy; {currentYear} Marketverse. All rights reserved.</p>
              <p className="mt-1">Making growth inevitable since 2020</p>
              <p className="mt-2 text-[10px] sm:text-xs">
                web Development and maintained by{' '}
                <a 
                  href="https://trinitycreativeservices.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline transition-colors"
                >
                  Trinity Creative Services
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;