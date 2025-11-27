  import React from 'react';
import Icon from '../../../components/AppIcon';


const ComplianceSection = () => {
  const certifications = [
    {
      icon: 'Shield',
      title: 'ISO 9001:2015 Certified',
      description: 'Quality management systems certification ensuring consistent service delivery and operational excellence',
      issuer: 'International Organization for Standardization'
    },
    {
      icon: 'Award',
      title: 'MSME Registered',
      description: 'Officially registered with Ministry of Micro, Small and Medium Enterprises, Government of India',
      issuer: 'Government of India'
    },
    {
      icon: 'FileCheck',
      title: 'GST Compliant',
      description: 'Fully compliant with Goods and Services Tax regulations with transparent financial reporting',
      issuer: 'GST Council, India'
    },
    {
      icon: 'Building',
      title: 'Company Registration',
      description: 'Registered under Companies Act 2013 with complete legal compliance and corporate governance',
      issuer: 'Ministry of Corporate Affairs'
    },
    {
      icon: 'Globe',
      title: 'Import Export Code',
      description: 'Authorized for international trade operations with valid IEC from DGFT',
      issuer: 'Directorate General of Foreign Trade'
    },
    {
      icon: 'Lock',
      title: 'Data Protection Compliance',
      description: 'Adherence to data privacy regulations and secure handling of sensitive business information',
      issuer: 'IT Act 2000 & GDPR Guidelines'
    }
  ];

  const legalDocuments = [
    {
      name: 'Certificate of Incorporation',
      type: 'PDF',
      size: '2.4 MB',
      icon: 'FileText'
    },
    {
      name: 'GST Registration Certificate',
      type: 'PDF',
      size: '1.8 MB',
      icon: 'FileText'
    },
    {
      name: 'ISO 9001:2015 Certificate',
      type: 'PDF',
      size: '3.2 MB',
      icon: 'Award'
    },
    {
      name: 'MSME Registration',
      type: 'PDF',
      size: '1.5 MB',
      icon: 'FileCheck'
    },
    {
      name: 'Import Export Code',
      type: 'PDF',
      size: '2.1 MB',
      icon: 'Globe'
    },
    {
      name: 'Audited Financial Statements',
      type: 'PDF',
      size: '5.6 MB',
      icon: 'BarChart3'
    }
  ];

  const trustIndicators = [
    { label: 'Years in Operation', value: '5+', icon: 'Calendar' },
    { label: 'Successful Partnerships', value: '50+', icon: 'Handshake' },
    { label: 'Client Retention Rate', value: '92%', icon: 'TrendingUp' },
    { label: 'Regulatory Compliance', value: '100%', icon: 'Shield' }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-6">
            <Icon name="ShieldCheck" size={20} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">Trust & Transparency</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Compliance & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fully compliant with Indian regulations and international standards, ensuring secure and transparent partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications?.map((cert, index) => (
            <div key={index} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <Icon name={cert?.icon} size={24} color="var(--color-success)" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{cert?.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cert?.description}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Issued by:</strong> {cert?.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="FolderOpen" size={24} color="var(--color-primary)" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Legal Documentation</h3>
            </div>

            <p className="text-muted-foreground mb-6">
              Access all our legal documents, certifications, and compliance reports for complete transparency
            </p>

            <div className="space-y-3">
              {legalDocuments?.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name={doc?.icon} size={20} color="var(--color-primary)" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{doc?.name}</p>
                      <p className="text-xs text-muted-foreground">{doc?.type} • {doc?.size}</p>
                    </div>
                  </div>
                  <Icon name="Download" size={20} color="var(--color-primary)" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            <button className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
              <Icon name="Download" size={20} color="#FFFFFF" />
              Download All Documents
            </button>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} color="var(--color-success)" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Trust Indicators</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {trustIndicators?.map((indicator, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg text-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon name={indicator?.icon} size={20} color="var(--color-primary)" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{indicator?.value}</div>
                    <div className="text-xs text-muted-foreground">{indicator?.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-innovation rounded-2xl p-8 text-white">
              <Icon name="Lock" size={40} color="#FFFFFF" className="mb-4" />
              <h3 className="text-xl font-bold mb-3">Secure Investment Environment</h3>
              <p className="text-white/90 text-sm mb-6">
                All investments are processed through secure escrow accounts with complete regulatory compliance and investor protection
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} color="#FFFFFF" />
                  <span className="text-sm">Bank-grade security protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} color="#FFFFFF" />
                  <span className="text-sm">Legal agreement protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} color="#FFFFFF" />
                  <span className="text-sm">Transparent fund tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-8 lg:p-12 text-center">
          <Icon name="FileQuestion" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-foreground mb-4">Need More Information?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our legal and compliance team is available to answer any questions about our certifications, regulatory compliance, or documentation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
              <Icon name="Mail" size={20} color="#FFFFFF" />
              Email Compliance Team
            </button>
            <button className="px-6 py-3 bg-card border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
              <Icon name="Phone" size={20} color="var(--color-primary)" />
              Schedule Legal Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;