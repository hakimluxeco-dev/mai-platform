import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Users, Package, Phone, MessageCircle, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Product {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
  gradient: string;
}

const products: Product[] = [
  {
    id: "whatsapp-assistant",
    title: "WhatsApp Assistant",
    description: "24/7 automated sales assistant that engages leads instantly, qualifies prospects, and manages your WhatsApp conversations.",
    icon: <MessageCircle className="w-8 h-8" />,
    features: ["24/7 Sales Automation", "Personalized Broadcasts", "Smart Segmentation", "Rich Media Messaging", "Voice Enabled"],
    color: "blue",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "invoice-manager",
    title: "Invoice Manager",
    description: "Automate your invoicing process with smart document processing and intelligent payment tracking.",
    icon: <FileText className="w-8 h-8" />,
    features: ["Automated Invoice Generation", "Smart Payment Tracking", "Multi-Currency Support", "Real-time Analytics"],
    color: "blue",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "lead-machine",
    title: "Lead Machine",
    description: "Transform your sales pipeline with intelligent lead generation, scoring, and nurturing capabilities.",
    icon: <Users className="w-8 h-8" />,
    features: ["Smart Lead Scoring", "Automated Outreach", "CRM Integration", "Conversion Analytics"],
    color: "cyan",
    gradient: "from-cyan-600 to-blue-500",
  },
  {
    id: "stock-manager",
    title: "Stock Manager",
    description: "Optimize inventory with predictive analytics, automated reordering, and real-time stock monitoring.",
    icon: <Package className="w-8 h-8" />,
    features: ["Predictive Inventory", "Auto-Reordering", "Multi-Warehouse Support", "Demand Forecasting"],
    color: "indigo",
    gradient: "from-indigo-600 to-cyan-500",
  },
  {
    id: "receptionist",
    title: "Virtual Receptionist",
    description: "24/7 automated phone system that answers calls, takes messages, and books appointments automatically.",
    icon: <Phone className="w-8 h-8" />,
    features: ["24/7 Call Answering", "Appointment Booking", "Message Taking", "Multi-Language Support"],
    color: "blue",
    gradient: "from-blue-600 to-cyan-500",
  },
];

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLearnMore = (productId: string) => {
    navigate(`/${productId}`);
  };

  return (
    <section id="products" className="relative py-12 sm:py-20 md:py-32 bg-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-3 sm:mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20 text-xs sm:text-sm">
            Our Solutions
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Business Solutions That Work
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Powerful automation tools designed to streamline your operations and drive growth
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group backdrop-blur-sm ${
                hoveredProduct === product.id ? "sm:scale-105 shadow-2xl shadow-blue-500/20" : ""
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardHeader>
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${product.gradient} p-2.5 sm:p-3 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">{product.icon}</div>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-white mb-2">{product.title}</CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2.5 sm:gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={() => handleLearnMore(product.id)}
                  className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white group/btn text-sm sm:text-base`}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 sm:mt-24 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="text-center px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Enterprise Security</h3>
            <p className="text-sm sm:text-base text-gray-400">Bank-level encryption and compliance standards</p>
          </div>
          <div className="text-center px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Proven Results</h3>
            <p className="text-sm sm:text-base text-gray-400">Average 40% efficiency improvement</p>
          </div>
          <div className="text-center px-4 sm:col-span-2 md:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
            <p className="text-sm sm:text-base text-gray-400">Get started in less than 48 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}