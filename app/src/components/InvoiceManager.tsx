import { Camera, Zap, Clock, Globe, BarChart3, CheckCircle, FileText, Upload, Lightbulb, Database, Shield, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import TrialModal from "./TrialModal";
import DemoModal from "./DemoModal";

export default function InvoiceManager() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Smart Image Capture",
      description: "Simply snap a photo of any invoice and our system instantly extracts all information with 99.9% accuracy"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Intelligent Data Extraction",
      description: "Advanced OCR and smart algorithms automatically identify vendor details, line items, totals, and dates"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Processing",
      description: "Eliminate manual data entry with instant invoice processing and validation"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Smart Payment Tracking",
      description: "Real-time payment status monitoring with automated reminders and follow-ups"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Currency Support",
      description: "Handle invoices in 150+ currencies with automatic conversion and exchange rate tracking"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards showing cash flow, payment trends, and vendor insights"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Cloud Storage",
      description: "Secure cloud-based storage with instant search and retrieval of all invoice history"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Ready",
      description: "Automatic tax compliance, audit trails, and regulatory reporting built-in"
    }
  ];

  const benefits = [
    "Reduce invoice processing time by 90%",
    "Eliminate data entry errors",
    "Improve cash flow visibility",
    "Accelerate payment cycles",
    "Reduce operational costs by 60%",
    "Seamless accounting software integration"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Helmet>
        <title>Invoice Manager - Smart Automation Invoice Processing | MAI Business Solutions</title>
        <meta name="description" content="Transform invoice processing with AI-powered image capture and intelligent data extraction. Simply snap a photo of any invoice and our system instantly extracts all information with 99.9% accuracy. Reduce processing time by 90%." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maisolutions.co.za/invoice-manager" />
        <meta property="og:site_name" content="MAI Business Solutions" />
        <meta property="og:title" content="Invoice Manager - Smart Automation Invoice Processing" />
        <meta property="og:description" content="Transform invoice processing with AI-powered image capture and intelligent data extraction. Simply snap a photo of any invoice and our system instantly extracts all information with 99.9% accuracy. Reduce processing time by 90%." />
        <meta property="og:image" content="https://www.maisolutions.co.za/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="MAI Business Solutions Logo" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.maisolutions.co.za/invoice-manager" />
        <meta property="twitter:title" content="Invoice Manager - Smart Automation Invoice Processing" />
        <meta property="twitter:description" content="Transform invoice processing with AI-powered image capture and intelligent data extraction. Simply snap a photo of any invoice and our system instantly extracts all information with 99.9% accuracy." />
        <meta property="twitter:image" content="https://www.maisolutions.co.za/logo.svg" />
      </Helmet>

      <Navbar />

      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
        productName="Invoice Manager"
      />

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={zoomedImage} 
            alt="Zoomed dashboard view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-4 mx-auto mb-6 shadow-2xl shadow-blue-500/30">
              <FileText className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Invoice Manager
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform invoice processing with AI-powered image capture and intelligent data extraction
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Feature Highlight */}
      <section className="py-16 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border-y border-blue-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-3 shadow-lg">
                <Upload className="w-full h-full text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Capture Invoices by Image</h2>
                <p className="text-blue-300">Revolutionary AI-powered invoice processing</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Simply take a photo of any invoice using your phone or upload a scanned document. Our advanced AI instantly recognizes and extracts all critical information including vendor details, invoice numbers, line items, amounts, dates, and payment terms. No manual typing required - the system automatically populates all fields with 99.9% accuracy, even handling handwritten invoices and complex multi-page documents.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">
              Live Dashboard
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful Analytics at Your Fingertips
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get real-time insights into your invoice performance with our comprehensive dashboard
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div 
              className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-blue-500/10 cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setZoomedImage("https://storage.googleapis.com/tempo-image-previews/user_34NSCeaX7cUfcqgytX4YHlnjfLI-1761822248496-Screenshot%202025-10-29%20125332.png")}
            >
              <img 
                src="https://storage.googleapis.com/tempo-image-previews/user_34NSCeaX7cUfcqgytX4YHlnjfLI-1761822248496-Screenshot%202025-10-29%20125332.png" 
                alt="Invoice Manager Dashboard Demo showing sales analytics, recent activity, and key metrics"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">
              Powerful Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything You Need to Manage Invoices
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive invoice management powered by cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-2.5 mb-4 text-white">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Transform Your Invoice Workflow
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 border-0 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Transform Your WhatsApp Sales?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of businesses automating their customer conversations
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}