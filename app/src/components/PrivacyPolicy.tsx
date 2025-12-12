import { ArrowLeft, Shield, Lock, Eye, FileText, AlertCircle, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Business contact information including name email and company details",
        "Usage data and analytics about how you interact with our services",
        "Technical information such as IP address browser type and device information",
        "Payment and billing information processed through secure third-party providers",
        "Communications and correspondence with our support team"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our smart automation business solutions",
        "To process transactions and send service-related communications",
        "To improve and optimize our products and services",
        "To provide customer support and respond to inquiries",
        "To send marketing communications with your consent",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security",
      content: [
        "We implement industry-standard encryption for data transmission and storage",
        "Regular security audits and vulnerability assessments",
        "Restricted access to personal data on a need-to-know basis",
        "Secure data centers with physical and digital protection measures",
        "Regular backups and disaster recovery procedures",
        "Compliance with GDPR CCPA and other data protection regulations"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Data Sharing and Disclosure",
      content: [
        "We do not sell rent or trade your personal information to third parties",
        "Data may be shared with trusted service providers who assist in operations",
        "Information may be disclosed when required by law or legal process",
        "Business transfers may include customer data in case of merger or acquisition",
        "Aggregated anonymous data may be used for research and analytics"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Access and review your personal information",
        "Request correction of inaccurate or incomplete data",
        "Request deletion of your personal information",
        "Opt-out of marketing communications at any time",
        "Data portability to transfer your information",
        "Object to processing of your personal data"
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Cookies and Tracking",
      content: [
        "We use cookies to enhance user experience and analyze usage patterns",
        "Essential cookies required for basic functionality",
        "Analytics cookies to understand how visitors use our services",
        "Marketing cookies for targeted advertising with your consent",
        "You can control cookie preferences through your browser settings"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white mb-6 sm:mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 bg-blue-500/10 text-blue-300 border-blue-500/20 text-xs sm:text-sm">
              Legal
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed">
              Your privacy and data security are our top priorities
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border-y border-blue-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4">
              MAI Business Solutions ("we" "us" or "our") is committed to protecting your privacy This Privacy Policy explains how we collect use disclose and safeguard your information when you use our smart automation business solutions and services
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              By using our services you agree to the collection and use of information in accordance with this policy If you do not agree with our policies and practices please do not use our services
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-2 sm:p-2.5 text-white flex-shrink-0">
                      {section.icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-white">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2 sm:space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-12 sm:py-16 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Data Retention</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              When we no longer need your information we will securely delete or anonymize it in accordance with our data retention policies and applicable legal requirements
            </p>
          </div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Changes to This Privacy Policy</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal regulatory or operational reasons We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 border-0 text-white">
            <CardContent className="p-6 sm:p-8 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Questions About Our Privacy Policy?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8">
                If you have any questions concerns or requests regarding this Privacy Policy or our data practices please contact us
              </p>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-blue-100">
                <p>Email: info@maisolutions.qzz.io</p>
                <p>MAI Business Solutions</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}