import { Phone, Clock, Calendar, MessageSquare, CheckCircle, Zap, Globe, BarChart3, Brain, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import TrialModal from "./TrialModal";
import DemoModal from "./DemoModal";

export default function Receptionist() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Never miss a call again with round-the-clock automated receptionist service that answers instantly"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Intelligent Conversations",
      description: "Natural language processing enables human-like conversations that understand context and intent"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Detailed Message Taking",
      description: "Captures comprehensive caller information, inquiries, and requests with perfect accuracy"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Appointment Booking",
      description: "Seamlessly schedules appointments by checking availability and confirming with callers"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Communicate with customers in 50+ languages with native-level fluency"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Call Analytics",
      description: "Comprehensive insights into call volume, peak times, and customer inquiries"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "CRM Integration",
      description: "Automatically logs all interactions and updates customer records in real-time"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Professional Greeting",
      description: "Customizable greetings and responses that match your brand voice and standards"
    }
  ];

  const benefits = [
    "Capture 100% of incoming phone leads",
    "Save thousands in lost business from missed calls",
    "Professional receptionist for a fraction of the cost",
    "Reduce wait times to zero seconds",
    "Scale customer service without hiring",
    "Instant call routing to the right department"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Helmet>
        <title>Virtual Receptionist - 24/7 Phone Answering Service | MAI Business Solutions</title>
        <meta name="description" content="A 24/7 automated phone system that answers every call, takes messages, and books appointments - ensuring you never miss an opportunity. Professional phone answering with natural conversations, multi-language support, and CRM integration. Capture 100% of incoming leads." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maisolutions.co.za/receptionist" />
        <meta property="og:site_name" content="MAI Business Solutions" />
        <meta property="og:title" content="Virtual Receptionist - 24/7 Phone Answering Service" />
        <meta property="og:description" content="A 24/7 automated phone system that answers every call, takes messages, and books appointments. Never miss an opportunity with professional phone answering, natural conversations, and multi-language support. Capture 100% of incoming leads." />
        <meta property="og:image" content="https://www.maisolutions.co.za/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="MAI Business Solutions Logo" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.maisolutions.co.za/receptionist" />
        <meta property="twitter:title" content="Virtual Receptionist - 24/7 Phone Answering Service" />
        <meta property="twitter:description" content="A 24/7 automated phone system that answers every call, takes messages, and books appointments. Never miss an opportunity with professional phone answering and multi-language support." />
        <meta property="twitter:image" content="https://www.maisolutions.co.za/logo.svg" />
      </Helmet>

      <Navbar />

      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
        productName="Receptionist"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-4 mx-auto mb-6 shadow-2xl shadow-blue-500/30">
              <Phone className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Virtual Receptionist
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              A 24/7 automated phone system that answers every call, takes messages, and books appointments - ensuring you never miss an opportunity
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
                <Phone className="w-full h-full text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Never Miss a Call Again</h2>
                <p className="text-blue-300">Your smart phone answering solution</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Our Virtual Receptionist answers your phone 24/7 with a professional, human-like voice. It can handle basic customer inquiries, take detailed messages with caller information, and even book appointments directly into your calendar system. The system understands natural conversation, asks clarifying questions when needed, and ensures every caller receives immediate, professional attention.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Call Capture Rate</div>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">R0</div>
                <div className="text-gray-300">Missed Opportunities</div>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
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
              Everything You Need in a Receptionist
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional phone answering powered by advanced AI voice technology
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

      {/* ROI Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Your Return on Investment
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Perfect For Every Business
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Small Businesses</CardTitle>
                  <CardDescription className="text-gray-400">
                    Get enterprise-level phone support without the enterprise cost. Perfect for solo entrepreneurs and small teams who can't afford to miss calls.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Medical Practices</CardTitle>
                  <CardDescription className="text-gray-400">
                    Handle appointment scheduling, patient inquiries, and emergency routing with HIPAA-compliant AI that never takes a break.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Service Businesses</CardTitle>
                  <CardDescription className="text-gray-400">
                    Capture service requests 24/7, schedule appointments, and provide instant quotes while your team focuses on the work.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">E-commerce</CardTitle>
                  <CardDescription className="text-gray-400">
                    Answer product questions, track orders, and handle customer support calls without expanding your team.
                  </CardDescription>
                </CardHeader>
              </Card>
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
                Ready to Answer Every Call?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join businesses that never miss an opportunity with 24/7 AI phone answering
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