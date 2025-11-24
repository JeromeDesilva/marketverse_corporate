import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/homepage', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/homepage" className="header-logo">
            <div className="header-logo-icon">
              <Icon name="TrendingUp" size={24} color="#FFFFFF" />
            </div>
            <span className="header-logo-text">Marketverse</span>
          </Link>

          <nav className="header-nav">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`header-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <div className="header-cta">
              <Button
                variant="default"
                size="default"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.location.href = '/contact'}
              >
                Book Consultation
              </Button>
            </div>

            <button
              className="header-mobile-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <>
          <div
            className="header-mobile-overlay"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div className="header-mobile-menu">
            <div className="header-mobile-menu-header">
              <Link to="/homepage" className="header-logo" onClick={closeMobileMenu}>
                <div className="header-logo-icon">
                  <Icon name="TrendingUp" size={24} color="#FFFFFF" />
                </div>
                <span className="header-logo-text">Marketverse</span>
              </Link>
              <button
                onClick={closeMobileMenu}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors"
                aria-label="Close mobile menu"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            <nav className="header-mobile-menu-nav">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`header-mobile-menu-link ${isActivePath(item?.path) ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item?.label}
                </Link>
              ))}
            </nav>

            <div className="header-mobile-menu-cta">
              <Button
                variant="default"
                size="default"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                onClick={() => {
                  closeMobileMenu();
                  window.location.href = '/contact';
                }}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;