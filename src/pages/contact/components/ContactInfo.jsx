import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'Mail',
      title: 'Email Us',
      primary: 'hello@marketverse.co.in',
      secondary: 'support@marketverse.co.in',
      description: 'For general inquiries and support'
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      primary: '+91 98765 43210',
      secondary: '+91 98765 43211',
      description: 'Mon-Sat, 10:00 AM - 7:00 PM IST'
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      primary: 'Mumbai Office',
      secondary: 'Andheri East, Mumbai 400069',
      description: 'By appointment only'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          {contactDetails?.map((detail, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={detail?.icon} size={24} color="var(--color-primary)" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">{detail?.title}</h4>
                <p className="text-foreground font-medium">{detail?.primary}</p>
                <p className="text-muted-foreground text-sm">{detail?.secondary}</p>
                <p className="text-muted-foreground text-sm mt-1">{detail?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-primary to-innovation rounded-2xl shadow-xl p-8 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Icon name="Clock" size={24} color="#E8B931" />
          <h3 className="text-2xl font-bold">Office Hours</h3>
        </div>
        
        <div className="space-y-3">
          {officeHours?.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-white/20 last:border-0">
              <span className="font-medium">{schedule?.day}</span>
              <span className="text-white/90">{schedule?.hours}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-white/20">
          <p className="text-sm text-white/80">
            Need urgent assistance? Our emergency support line is available 24/7 for existing clients.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Icon name="Users" size={24} color="var(--color-primary)" />
          <h3 className="text-2xl font-bold text-foreground">Connect With Us</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
          >
            <Icon name="Linkedin" size={20} color="var(--color-primary)" />
            <span className="font-medium text-foreground">LinkedIn</span>
          </a>
          
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
          >
            <Icon name="Twitter" size={20} color="var(--color-primary)" />
            <span className="font-medium text-foreground">Twitter</span>
          </a>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
          >
            <Icon name="Instagram" size={20} color="var(--color-primary)" />
            <span className="font-medium text-foreground">Instagram</span>
          </a>
          
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
          >
            <Icon name="Facebook" size={20} color="var(--color-primary)" />
            <span className="font-medium text-foreground">Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;