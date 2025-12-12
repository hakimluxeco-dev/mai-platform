import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { MessageCircle, Clock, Brain, Users, Send, Image, Mic, Tag, CheckCircle, Zap, Shield, TrendingUp, Globe, X } from "lucide-react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import TrialModal from "./TrialModal";
import DemoModal from "./DemoModal";

export default function WhatsappAssistant() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Smart Automation Sales Agent",
      description: "Never miss a lead. Your automated assistant works around the clock, engaging customers instantly and qualifying prospects automatically.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Intelligent Conversations",
      description: "Trained on your business info to answer questions, qualify leads, and provide product details with human-like understanding.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Seamless Human Escalation",
      description: "AI detects when customers need human support and smoothly hands over the conversation to your team.",
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Personalized Broadcasts",
      description: "Send custom messages to your entire contact list with personalization tags like [first_name] for maximum engagement.",
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Rich Media Messaging",
      description: "Send text, images, voice notes, and product info directly through the dashboard for engaging conversations.",
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Smart Segmentation",
      description: "Group contacts with tags like 'New Lead', 'Past Customer', 'VIP' and send targeted campaigns to specific segments.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Centralized Dashboard",
      description: "Manage all WhatsApp conversations, contacts, and campaigns from one simple web portal.",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Messages Feed",
      description: "Watch your AI handle conversations in real-time or jump in to take over when needed.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Contact Verification",
      description: "Clean your list and save money by verifying WhatsApp numbers before sending messages.",
    },
  ];

  const benefits = [
    "Save 10+ hours per week on repetitive tasks",
    "7x more likely to convert leads with instant engagement",
    "Handle 1,000 conversations as easily as 10",
    "Build better relationships with personalized messages",
    "Reduce response time from hours to seconds",
    "Scale your sales without hiring more staff",
    "Increase customer satisfaction with 24/7 availability",
    "Boost engagement rates with rich media content"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Helmet>
        <title>WhatsApp Assistant - Smart Automation Sales Agent | MAI Business Solutions</title>
        <meta name="description" content="24/7 automated WhatsApp assistant that handles conversations, qualifies leads, and sends personalized broadcasts. Save 10+ hours a week and convert more leads with intelligent automation." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maisolutions.co.za/whatsapp-assistant" />
        <meta property="og:site_name" content="MAI Business Solutions" />
        <meta property="og:title" content="WhatsApp Assistant - Smart Automation Sales Agent" />
        <meta property="og:description" content="24/7 automated WhatsApp assistant that handles conversations, qualifies leads, and sends personalized broadcasts. Save 10+ hours a week and convert more leads." />
        <meta property="og:image" content="https://www.maisolutions.co.za/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="MAI Business Solutions Logo" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.maisolutions.co.za/whatsapp-assistant" />
        <meta property="twitter:title" content="WhatsApp Assistant - Smart Automation Sales Agent" />
        <meta property="twitter:description" content="24/7 automated WhatsApp assistant that handles conversations, qualifies leads, and sends personalized broadcasts. Save 10+ hours a week and convert more leads." />
        <meta property="twitter:image" content="https://www.maisolutions.co.za/logo.svg" />
      </Helmet>

      <Navbar />

      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
        productName="WhatsApp Assistant"
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
              <MessageCircle className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                WhatsApp Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Your 24/7 automated sales agent that engages leads instantly, qualifies prospects, and scales your WhatsApp conversations effortlessly
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

      {/* Key Value Proposition */}
      <section className="py-16 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border-y border-blue-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Transform Your WhatsApp Sales
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <p className="text-gray-300">Hours Saved Weekly</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                  7x
                </div>
                <p className="text-gray-300">Higher Conversion Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                  1,000+
                </div>
                <p className="text-gray-300">Conversations Handled</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="text-gray-300">Always Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">
                See It In Action
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Watch How It Works
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See the WhatsApp Assistant in action and discover how it can transform your customer conversations
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/20">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/AmrMxlfCiA0"
                  title="WhatsApp Assistant Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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
              Everything You Need to Scale WhatsApp Sales
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive WhatsApp automation tools designed for modern businesses
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
              Measurable Business Impact
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
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