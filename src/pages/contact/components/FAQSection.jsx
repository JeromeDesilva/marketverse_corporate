import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is your typical response time for new inquiries?',
      answer: 'We respond to all inquiries within 24 hours during business days. For urgent matters, you can call our direct line and speak with a team member immediately. Our consultation booking system also allows you to schedule a call at your convenience.'
    },
    {
      question: 'What information should I prepare before our consultation?',
      answer: 'Please prepare details about your business goals, target audience, current marketing efforts, budget range, and timeline. Having your brand guidelines, competitor information, and any specific challenges you\'re facing will help us provide more targeted recommendations during our consultation.'
    },
    {
      question: 'Do you work with international clients entering the Indian market?',
      answer: 'Yes! We specialize in helping international brands enter and succeed in the Indian market. Our team has extensive experience with market entry strategies, cultural adaptation, regulatory compliance, and local partnership development. We also offer import and sourcing solutions for product-based businesses.'
    },
    {
      question: 'What is your minimum project engagement?',
      answer: 'Our minimum engagement varies by service type. Brand building projects typically start at ₹5 lakhs, while digital marketing campaigns can begin at ₹2 lakhs per month. We also offer project-based work and retainer arrangements. During our consultation, we\'ll discuss options that fit your budget and goals.'
    },
    {
      question: 'How do you measure marketing success and ROI?',
      answer: 'We establish clear KPIs at the project start, including metrics like brand awareness, lead generation, conversion rates, customer acquisition cost, and revenue impact. You\'ll receive detailed monthly reports with actionable insights. Our approach focuses on measurable business outcomes, not just marketing metrics.'
    },
    {
      question: 'Can I visit your office for an in-person meeting?',
      answer: 'Absolutely! We welcome office visits at both our Mumbai and Delhi locations. Please schedule an appointment through our booking system or contact us directly. We also offer virtual consultations for clients who prefer remote meetings or are located outside these cities.'
    },
    {
      question: 'What makes Marketverse different from other marketing agencies?',
      answer: 'We combine 100+ man-years of marketing expertise with deep understanding of the Indian market. Unlike traditional agencies, we offer end-to-end solutions from brand strategy to execution, including unique services like import sourcing and market entry support. Our track record includes successful launches like the Korean Super Store case study.'
    },
    {
      question: 'Do you offer payment plans or flexible pricing?',
      answer: 'Yes, we understand that different businesses have different cash flow situations. We offer milestone-based payments for project work and monthly retainers for ongoing services. For larger engagements, we can discuss customized payment structures. Investment partnership opportunities are also available for qualifying projects.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="HelpCircle" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Got Questions? We've Got Answers</h2>
          <p className="text-lg text-muted-foreground">
            Find quick answers to common questions about our services, process, and partnerships.
          </p>
        </div>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-xl overflow-hidden transition-all hover:border-primary/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-muted/50"
              >
                <span className="font-semibold text-foreground pr-4">{faq?.question}</span>
                <Icon
                  name={openIndex === index ? 'ChevronUp' : 'ChevronDown'}
                  size={24}
                  color="var(--color-primary)"
                  className="flex-shrink-0"
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{faq?.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="mailto:hello@marketverse.in"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            <span>Email us directly</span>
            <Icon name="ArrowRight" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;