import { Package, TrendingUp, Warehouse, AlertTriangle, BarChart3, CheckCircle, Zap, RefreshCw, Globe, ShoppingCart, Clock, LineChart, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import TrialModal from "./TrialModal";
import DemoModal from "./DemoModal";

export default function StockManager() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Predictive Inventory Analytics",
      description: "Smart forecasting predicts demand patterns using historical data, seasonality, trends, and market signals to optimize stock levels"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Automated Reordering",
      description: "Smart auto-replenishment triggers purchase orders at optimal times based on lead times, demand forecasts, and safety stock"
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Multi-Warehouse Management",
      description: "Centralized control across unlimited locations with real-time visibility, transfers, and intelligent stock allocation"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Demand Forecasting",
      description: "Smart algorithms predict future demand with 95% accuracy using sales history, market trends, and external factors"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Smart Alerts & Notifications",
      description: "Proactive alerts for low stock, overstock, expiring items, and anomalies with customizable thresholds"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Analytics",
      description: "Live dashboards showing inventory turnover, carrying costs, stock-out rates, and profitability by SKU"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Supplier Management",
      description: "Track supplier performance, lead times, pricing, and automatically select optimal vendors for each order"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Order Optimization",
      description: "Calculate economic order quantities and reorder points to minimize costs while maintaining service levels"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "ABC Analysis",
      description: "Automatically categorize inventory by value and velocity to focus resources on high-impact items"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Expiry Management",
      description: "Track batch numbers, expiration dates, and FIFO/LIFO with automated alerts for perishable goods"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Barcode & RFID Integration",
      description: "Seamless scanning and tracking with support for barcodes, QR codes, and RFID technology"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Cycle Counting",
      description: "Automated cycle count scheduling and variance analysis to maintain inventory accuracy without full shutdowns"
    }
  ];

  const benefits = [
    "Reduce inventory costs by 30-40%",
    "Eliminate stockouts and lost sales",
    "Improve inventory accuracy to 99%+",
    "Decrease carrying costs by 25%",
    "Optimize warehouse space utilization",
    "Reduce manual counting time by 80%",
    "Improve supplier relationships",
    "Increase inventory turnover by 35%"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Helmet>
        <title>Stock Manager - Smart Automation Inventory Optimization | MAI Business Solutions</title>
        <meta name="description" content="Intelligent inventory optimization with predictive analytics and automated replenishment. Reduce inventory costs by 30-40%, improve accuracy to 99%+, and eliminate stockouts. Smart forecasting predicts demand with 95% accuracy." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maisolutions.co.za/stock-manager" />
        <meta property="og:site_name" content="MAI Business Solutions" />
        <meta property="og:title" content="Stock Manager - Smart Automation Inventory Optimization" />
        <meta property="og:description" content="Intelligent inventory optimization with predictive analytics and automated replenishment. Reduce inventory costs by 30-40%, improve accuracy to 99%+, and eliminate stockouts. Smart forecasting predicts demand with 95% accuracy." />
        <meta property="og:image" content="https://www.maisolutions.co.za/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="MAI Business Solutions Logo" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.maisolutions.co.za/stock-manager" />
        <meta property="twitter:title" content="Stock Manager - Smart Automation Inventory Optimization" />
        <meta property="twitter:description" content="Reduce inventory costs by 30-40%, improve accuracy to 99%+, and eliminate stockouts. Smart forecasting predicts demand with 95% accuracy using intelligent analytics." />
        <meta property="twitter:image" content="https://www.maisolutions.co.za/logo.svg" />
      </Helmet>

      <Navbar />

      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
        productName="Stock Manager"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 p-4 mx-auto mb-6 shadow-2xl shadow-indigo-500/30">
              <Package className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                Stock Manager
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              AI-powered inventory optimization with predictive analytics and automated replenishment
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white shadow-lg shadow-indigo-500/30"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Proposition */}
      <section className="py-16 bg-gradient-to-r from-indigo-600/10 to-cyan-500/10 border-y border-indigo-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Never Run Out, Never Overstock
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <p className="text-gray-300">Forecast Accuracy</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                  30%
                </div>
                <p className="text-gray-300">Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                  99%
                </div>
                <p className="text-gray-300">Inventory Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-500/10 text-indigo-300 border-indigo-500/20">
              Intelligent Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Complete Inventory Control at Your Fingertips
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced AI-driven inventory management for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 p-2.5 mb-4 text-white">
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
              Optimize Your Inventory Operations
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
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-600 to-cyan-500 border-0 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Optimize Your Inventory?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join leading businesses using AI to eliminate waste and maximize profitability
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-white text-indigo-600 hover:bg-gray-100"
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