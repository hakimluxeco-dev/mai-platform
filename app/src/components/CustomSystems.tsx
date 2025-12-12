import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Sparkles, Workflow, BarChart3, FileText, Wrench, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export default function CustomSystems() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Custom Automation Agents",
      description: "Create bespoke automated assistants to handle specific tasks, like analyzing customer support tickets, qualifying new leads with custom criteria, or monitoring industry news for you.",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Intelligent Automation Workflows",
      description: "Connect all your existing apps (like your CRM, email, and accounting software) into a single, seamless, automated system that runs 24/7.",
      gradient: "from-cyan-600 to-blue-500"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Bespoke Data Dashboards",
      description: "Go beyond simple sales charts. We can build live dashboards that track any metric, from employee productivity to customer sentiment, giving you a real-time pulse on your entire operation.",
      gradient: "from-indigo-600 to-cyan-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Automated Data Processing",
      description: "Stop wasting time on manual data entry. We can build systems that read any document (like PDFs, scans, or supplier lists) and automatically extract and save the information you need.",
      gradient: "from-blue-600 to-indigo-500"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Internal Tools & CRMs",
      description: "Need a project management tool that actually works the way your team does? Or a CRM that only has the fields you actually use? We build them from the ground up.",
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Blueprint",
      description: "We start with a free consultation to understand your unique challenge, your goals, and your existing processes. We'll map out a complete blueprint for your custom system."
    },
    {
      number: "02",
      title: "Build & Review",
      description: "Our team gets to work. We build your system in agile 'sprints,' giving you regular demos to ensure what we're building is exactly what you envisioned."
    },
    {
      number: "03",
      title: "Deploy & Support",
      description: "We handle the full deployment. We provide full training and on-demand support to ensure your new system becomes a seamless part of your business."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Helmet>
        <title>Custom Systems - MAI Business Solutions</title>
        <meta name="description" content="Bespoke automation solutions built specifically for your business needs" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/10 text-blue-300 border-blue-500/20">
              Bespoke Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-400 text-2xl sm:text-3xl lg:text-4xl font-normal mb-4">
                Your Business Isn't Off-the-Shelf
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Your Software Shouldn't Be Either
              </span>
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Introducing MAI Custom Systems: Bespoke Automation Solutions, Built For You.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600/5 to-cyan-500/5 border-y border-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                You've seen the power of our Lead Machine and our Invoice Manager. These are complex, focused tools we built to solve specific, universal business problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                But what about the problems that are unique to your company?
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Off-the-shelf software forces you to change your processes to fit its limitations. We believe software should do the opposite: it should be molded to fit your exact needs, enhancing the processes that already make you successful.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our Custom Systems service applies the same <span className="text-blue-400 font-semibold">"Intelligence. Growth. Efficiency."</span> philosophy from our core products to build a solution that is 100% tailored to your business. If you can describe a manual task, a data bottleneck, or an inefficient workflow, we can design and build an smart automation system to solve it.
              </p>
              <p className="text-xl text-white font-semibold">
                Don't let your business be constrained by generic software. Let us build the exact tool you need to operate at full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We Can Build For You
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our expertise is in intelligent automation. We can build anything you need, including:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{capability.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-white">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Simple 3-Step Process
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business Operations?
              </h2>
              <p className="text-gray-300 text-lg">
                Stop forcing your business to fit someone else's software. Let's build the tool you've always wished you had.
              </p>
            </div>

            <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">
                  Book Your Free Custom System Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-blue-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-300">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-blue-500"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Tell us about your challenge *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 min-h-32"
                      placeholder="Describe the problem you're trying to solve or the system you need..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg py-6"
                  >
                    Request Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}