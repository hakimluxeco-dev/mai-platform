import { Lightbulb, Target, Zap, Users, Award, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description: "We push the boundaries of technology to deliver solutions that transform businesses"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results Driven",
      description: "Every solution is designed to deliver measurable ROI and tangible business outcomes"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Partnership",
      description: "We work alongside our clients as trusted partners in their digital transformation journey"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Security",
      description: "Enterprise-grade security and data protection are built into everything we create"
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Transformed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "10M+", label: "Processes Automated" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/10 text-blue-300 border-blue-500/20">
              About MAI Business Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Smart Solutions for Modern Business
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              At MAI Business Solutions we're redefining how businesses operate with intelligent automation tools that make enterprise-grade solutions accessible to businesses of all sizes
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border-y border-blue-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-3 shadow-lg">
                <Lightbulb className="w-full h-full text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                <p className="text-blue-300">Empowering businesses through intelligent systems</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We believe every business deserves access to cutting-edge technology. Our goal is to bridge the gap between complex automation systems and real-world business needs, delivering solutions that are powerful yet intuitive, sophisticated yet accessible.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We're not just building software—we're creating intelligent systems that adapt and evolve with your business. From automating repetitive tasks to uncovering hidden insights, we help you work smarter, faster, and more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Impact by the Numbers
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">
              Our Values
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our core values guide every decision we make and every solution we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-2.5 mb-4 text-white">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-3 shadow-lg">
                <TrendingUp className="w-full h-full text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
                <p className="text-blue-300">From vision to reality</p>
              </div>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                MAI Business Solutions was founded with a simple yet powerful vision: to make intelligent automation work for businesses, not the other way around. We saw too many companies struggling with complex, expensive systems that promised the world but delivered little.
              </p>
              <p className="text-lg">
                Our founders, with decades of combined experience in technology and business operations, set out to create something different—intelligent systems that are practical, affordable, and genuinely transformative. We started with our flagship products: Invoice Manager, Lead Machine, and Stock Manager, each designed to solve real business pain points with elegant, smart solutions.
              </p>
              <p className="text-lg">
                Today, we're proud to serve hundreds of businesses across industries, helping them automate processes, reduce costs, and unlock new growth opportunities. But we're just getting started. Our commitment to innovation means we're constantly evolving our solutions and finding new ways to deliver value to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-3 shadow-lg">
                <Award className="w-full h-full text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Our Expertise</h2>
                <p className="text-blue-300">Technology meets business acumen</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">Intelligent Automation</h3>
                <p className="text-gray-400">
                  Smart systems that learn from your business patterns to automate repetitive tasks and workflows
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">Business Process Automation</h3>
                <p className="text-gray-400">
                  Intelligent workflow optimization, document processing, and end-to-end automation solutions
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">Data Analytics</h3>
                <p className="text-gray-400">
                  Real-time dashboards, predictive modeling, and actionable business intelligence
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
                <p className="text-gray-400">
                  Tailored systems designed specifically for your unique business challenges and goals
                </p>
              </div>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of forward-thinking businesses leveraging AI to gain a competitive edge
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Explore Our Solutions
                  </Button>
                </Link>
                <Link to="/#products">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Products
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}