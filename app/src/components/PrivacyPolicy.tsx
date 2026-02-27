import { ArrowLeft, Shield, Lock, Eye, FileText, AlertCircle, Database, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const sections = [
  {
    index: "01",
    icon: <Database className="w-5 h-5" />,
    title: "Information We Collect",
    content: [
      "Business contact information including name, email and company details",
      "Usage data and analytics about how you interact with our services",
      "Technical information such as IP address, browser type and device information",
      "Payment and billing information processed through secure third-party providers",
      "Communications and correspondence with our support team",
    ],
  },
  {
    index: "02",
    icon: <Lock className="w-5 h-5" />,
    title: "How We Use Your Information",
    content: [
      "To provide and maintain our smart automation business solutions",
      "To process transactions and send service-related communications",
      "To improve and optimize our products and services",
      "To provide customer support and respond to inquiries",
      "To send marketing communications with your consent",
      "To comply with legal obligations and protect our rights",
    ],
  },
  {
    index: "03",
    icon: <Shield className="w-5 h-5" />,
    title: "Data Security",
    content: [
      "Industry-standard encryption for all data transmission and storage",
      "Regular security audits and vulnerability assessments",
      "Restricted access to personal data on a need-to-know basis",
      "Secure data centers with physical and digital protection measures",
      "Regular backups and disaster recovery procedures",
      "Compliance with GDPR, POPIA and applicable data protection regulations",
    ],
  },
  {
    index: "04",
    icon: <Eye className="w-5 h-5" />,
    title: "Data Sharing and Disclosure",
    content: [
      "We do not sell, rent or trade your personal information to third parties",
      "Data may be shared with trusted service providers who assist in operations",
      "Information may be disclosed when required by law or legal process",
      "Business transfers may include customer data in case of merger or acquisition",
      "Aggregated anonymous data may be used for research and analytics",
    ],
  },
  {
    index: "05",
    icon: <FileText className="w-5 h-5" />,
    title: "Your Rights",
    content: [
      "Access and review your personal information at any time",
      "Request correction of inaccurate or incomplete data",
      "Request deletion of your personal information",
      "Opt-out of marketing communications at any time",
      "Data portability to transfer your information",
      "Object to processing of your personal data",
    ],
  },
  {
    index: "06",
    icon: <AlertCircle className="w-5 h-5" />,
    title: "Cookies and Tracking",
    content: [
      "We use cookies to enhance user experience and analyze usage patterns",
      "Essential cookies required for basic site functionality",
      "Analytics cookies to understand how visitors use our services",
      "Marketing cookies for targeted advertising with your explicit consent",
      "You can control cookie preferences through your browser settings",
    ],
  },
];

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="text-white/30 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">
              Legal // Data Protection
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.95] mb-6">
              PRIVACY<br />
              <span className="text-white/55">POLICY.</span>
            </h1>
            <p className="text-white/50 text-sm uppercase tracking-widest font-medium">
              Last Updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 border-b border-white/10 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-white/70 leading-relaxed mb-6">
              MAI Business Solutions ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our business solutions and services.
            </p>
            <p className="text-white/50 leading-relaxed">
              By using our services you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-0 border border-white/10">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative p-10 border-b border-r border-white/10 hover:bg-white/[0.02] transition-colors [&:nth-child(even)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="absolute top-0 inset-x-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-white/20 text-xs font-mono tracking-widest pt-1">{section.index}</div>
                  <div className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 group-hover:text-white group-hover:border-white/50 transition-colors shrink-0">
                    {section.icon}
                  </div>
                  <h2 className="text-base font-bold uppercase tracking-tight text-white pt-2">{section.title}</h2>
                </div>
                <ul className="space-y-3 pl-14">
                  {section.content.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/50 leading-relaxed">
                      <ChevronRight className="w-3 h-3 text-white/25 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-20 border-b border-white/10 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-white/30 text-[10px] font-mono tracking-[0.35em] uppercase mb-4">Retention</div>
              <h2 className="text-2xl font-bold tracking-tighter uppercase">DATA<br /><span className="text-white/55">RETENTION.</span></h2>
              <div className="w-8 h-px bg-white mt-6" />
            </div>
            <div className="lg:col-span-8 space-y-4 text-white/60 leading-relaxed">
              <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
              <p>When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies and applicable legal requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-white/30 text-[10px] font-mono tracking-[0.35em] uppercase mb-4">Updates</div>
              <h2 className="text-2xl font-bold tracking-tighter uppercase">POLICY<br /><span className="text-white/55">CHANGES.</span></h2>
              <div className="w-8 h-px bg-white mt-6" />
            </div>
            <div className="lg:col-span-8 space-y-4 text-white/60 leading-relaxed">
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory or operational reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
              <p>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0,transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="border border-white/10 p-12 sm:p-16 max-w-4xl mx-auto text-center relative">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-white" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter uppercase mb-4">
              QUESTIONS ABOUT<br /><span className="text-white/55">OUR PRIVACY POLICY?</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto leading-relaxed">
              If you have any questions, concerns or requests regarding this Privacy Policy or our data practices, reach out directly.
            </p>
            <div className="space-y-2 text-sm text-white/60 uppercase tracking-widest">
              <p>info@maisolutions.co.za</p>
              <p>215 Beauval Ave, Mondeor</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}