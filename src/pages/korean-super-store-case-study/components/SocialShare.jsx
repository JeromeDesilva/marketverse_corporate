import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialShare = () => {
  const [copied, setCopied] = useState(false);

  const shareUrl = window.location?.href;
  const shareTitle = "Korean Super Store Case Study - 300% Revenue Growth in 18 Months | Marketverse";
  const shareDescription = "Discover how Marketverse transformed a Korean retail concept into India's fastest-growing specialty store chain with strategic marketing and cultural adaptation.";

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: "Linkedin",
      color: "#0A66C2",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: "Twitter",
      icon: "Twitter",
      color: "#1DA1F2",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
    },
    {
      name: "Facebook",
      icon: "Facebook",
      color: "#1877F2",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: "WhatsApp",
      icon: "MessageCircle",
      color: "#25D366",
      url: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`
    }
  ];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Share This Success Story</h3>
          <p className="text-muted-foreground">
            Help others discover how strategic marketing drives transformational business growth
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialPlatforms?.map((platform) => (
            <a
              key={platform?.name}
              href={platform?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <Icon name={platform?.icon} size={20} color={platform?.color} />
              <span className="font-medium text-foreground">{platform?.name}</span>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2">
            <div className="flex-1 bg-muted rounded-lg px-4 py-3 text-sm text-muted-foreground overflow-hidden">
              {shareUrl}
            </div>
            <Button
              variant={copied ? "default" : "outline"}
              iconName={copied ? "Check" : "Copy"}
              iconPosition="left"
              onClick={handleCopyLink}
            >
              {copied ? "Copied!" : "Copy Link"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialShare;