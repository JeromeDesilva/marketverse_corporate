import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import InvestmentPartnershipPortal from './pages/investment-partnership-portal';
import Services from './pages/services';
import Contact from './pages/contact';
import KoreanSuperStoreCaseStudy from './pages/korean-super-store-case-study';
import About from './pages/about';
import CaseStudies from 'pages/case-studies';
import BlogHub from 'pages/blog-hub';
import MarketingStrategistJobDetails from 'pages/marketing-strategist-job-details';
import Homepage from './pages/homepage';
import Careers from './pages/careers';
import CookiePolicy from './pages/cookie-policy';
import PrivacyPolicy from './pages/privacy-policy';
import TermsOfService from './pages/terms-of-service';
import BookConsultation from './pages/book-consultation';
import OutreachSponsorRelationsManagerJobDetails from './pages/outreach-sponsor-relations-manager-job-details';
import BusinessDevelopmentSpecialistJobDetails from './pages/business-development-specialist-job-details';
import AdminJobDetails from './pages/admin-job-details';
import AdministrativeSpecialistJobDetails from './pages/administrative-specialist-job-details';
import OperationsManagerJobDetails from './pages/operations-manager-job-details';
import PublicRelationsSpecialistJobDetails from './pages/public-relations-specialist-job-details';
import PaymentGateway from './pages/payment-gateway';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<Homepage />} />
          <Route path="/investment-partnership-portal" element={<InvestmentPartnershipPortal />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/korean-super-store-case-study" element={<KoreanSuperStoreCaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog-hub" element={<BlogHub />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="/outreach-sponsor-relations-manager-job-details" element={<OutreachSponsorRelationsManagerJobDetails />} />
          <Route path="/business-development-specialist-job-details" element={<BusinessDevelopmentSpecialistJobDetails />} />
          <Route path="/admin-job-details" element={<AdminJobDetails />} />
          <Route path="/marketing-strategist-job-details" element={<MarketingStrategistJobDetails />} />
          <Route path="/administrative-specialist-job-details" element={<AdministrativeSpecialistJobDetails />} />
          <Route path="/operations-manager-job-details" element={<OperationsManagerJobDetails />} />
          <Route path="/public-relations-specialist-job-details" element={<PublicRelationsSpecialistJobDetails />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default AppRoutes;