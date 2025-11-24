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
      { label: "Privacy Policy", path: "/contact" },
      { label: "Terms of Service", path: "/contact" },
      { label: "Careers", path: "/contact" }
    ]
  };

  const socialLinks = [
    { icon: "Linkedin", url: "#", label: "LinkedIn" },
    { icon: "Twitter", url: "#", label: "Twitter" },
    { icon: "Instagram", url: "#", label: "Instagram" },
    { icon: "Facebook", url: "#", label: "Facebook" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/homepage" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-innovation rounded-xl flex items-center justify-center">
                <Icon name="TrendingUp" size={24} color="#FFFFFF" />
              </div>
              <span className="text-2xl font-bold text-foreground">Marketverse</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              India's premier marketing and brand-building powerhouse. Transforming ambitious brands into market leaders with 100+ man-years of expertise.
            </p>
            <div className="flex gap-4">
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
            <h3 className="text-foreground font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks?.company?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks?.services?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks?.resources?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm text-center md:text-left">
              <p>&copy; {currentYear} Marketverse. All rights reserved.</p>
              <p className="mt-1">Making growth inevitable since 2020</p>
              <p className="mt-2 text-xs">
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
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
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