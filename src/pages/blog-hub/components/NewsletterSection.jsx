import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (email?.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-innovation/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Mail" size={32} className="text-primary" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Never Miss an Insight
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join 5,000+ marketing professionals receiving weekly insights, exclusive case studies, 
          and actionable strategies directly to your inbox.
        </p>

        {subscribed ?
        <div className="bg-success/10 border border-success/30 rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 text-success mb-2">
              <Icon name="CheckCircle" size={24} />
              <span className="font-semibold">Successfully Subscribed!</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Check your inbox for a confirmation email.
            </p>
          </div> :

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e?.target?.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />

              <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap">

                Subscribe
                <Icon name="Send" size={18} />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
            </p>
          </form>
        }

        <div className="grid-cols-3 gap-8 mt-12 pt-12 border-t border-border hidden">
          <div>
            <div className="text-3xl font-bold text-primary mb-1">5K+</div>
            <div className="text-sm text-muted-foreground">Subscribers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-innovation mb-1">200+</div>
            <div className="text-sm text-muted-foreground">Articles</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-1">Weekly</div>
            <div className="text-sm text-muted-foreground">Updates</div>
          </div>
        </div>
      </div>
    </section>);

};

export default NewsletterSection;