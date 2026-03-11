import { motion } from "framer-motion";
import { MessageCircle, Clock, Brain, Users, Send, Image, Tag, ArrowRight, BarChart3, Activity } from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function WhatsappAssistant() {
  const navigate = useNavigate();
  const handleContactNavigate = () => navigate("/get-started");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Clock,
      title: "24/7 Smart Agent",
      description: "Your automated assistant works continuously, engaging customers instantly."
    },
    {
      icon: Brain,
      title: "Intelligent Chat",
      description: "Trained on your business info to answer questions and qualify leads accurately."
    },
    {
      icon: Users,
      title: "Human Escalation",
      description: "AI detects when customers need complex human support and hands over seamlessly."
    },
    {
      icon: Send,
      title: "Personalized Broadcasts",
      description: "Deploy custom messages to your active contacts for maximum retention."
    },
    {
      icon: Image,
      title: "Rich Media Protocol",
      description: "Transmit text, images, and product data securely over encrypted channels."
    },
    {
      icon: Tag,
      title: "Smart Segmentation",
      description: "Divide contacts with programmatic tags for precision-targeted campaigns."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Helmet>
        <title>WhatsApp Assistant // AI Systems | MAI</title>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-black border-b border-white/10">
        <div className="absolute inset-x-0 h-px top-0 bg-white/10"></div>
        <div className="absolute inset-y-0 w-px left-8 md:left-12 lg:left-24 bg-white/10 hidden md:block"></div>
        <div className="absolute inset-y-0 w-px right-8 md:right-12 lg:right-24 bg-white/10 hidden md:block"></div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl pt-16"
          >
            <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-8">
              System 03 // Messaging Architecture
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white mb-8 uppercase">
              WHATSAPP<br />
              <span className="text-white/60">ASSISTANT.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light tracking-wide mb-12">
              Your autonomous sales agent that engages leads synchronously, qualifies prospects securely, and scales client communications over an active encrypted network.
            </p>
            <Button
              onClick={() => navigate("/get-started")}
              className="rounded-none h-16 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-10 font-bold transition-all group border border-white"
            >
              DEPLOY SYSTEM <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-24 bg-zinc-950 relative border-b border-white/10">
        <div className="absolute inset-y-0 w-px left-8 md:left-12 lg:left-24 bg-white/10 hidden md:block"></div>
        <div className="absolute inset-y-0 w-px right-8 md:right-12 lg:right-24 bg-white/10 hidden md:block"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter uppercase mb-2">OPERATIONAL DEMO</h2>
              <div className="w-12 h-px bg-white"></div>
            </div>
            <div className="hidden sm:flex text-xs font-bold tracking-widest text-white/40 uppercase items-center gap-2">
              <Activity className="w-4 h-4" /> Live Execution
            </div>
          </div>

          <div className="relative aspect-video w-full max-w-5xl mx-auto border border-white/20 bg-black overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
            <iframe
              className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://www.youtube.com/embed/AmrMxlfCiA0"
              title="WhatsApp Assistant Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-white/60 font-light leading-relaxed">
              Execute instantaneous conversations. The AI handles inbound queries and funnels targeted prospects automatically—processing volume unmatched by human operators.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-y-0 w-px left-8 md:left-12 lg:left-24 bg-white/10 hidden md:block z-0"></div>
        <div className="absolute inset-y-0 w-px right-8 md:right-12 lg:right-24 bg-white/10 hidden md:block z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-4">SYSTEM CAPABILITIES</h2>
            <div className="w-12 h-px bg-white mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-white/10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`bg-black p-10 lg:p-12 border-white/10 hover:bg-white/[0.02] transition-colors group relative overflow-hidden ${idx % 3 !== 2 ? "md:border-r" : ""
                  } ${idx < 3 ? "border-b" : ""}`}
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>

                <div className="w-12 h-12 flex items-center justify-center border border-white/20 mb-8 group-hover:bg-white transition-colors duration-500">
                  <feature.icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-500" />
                </div>
                <h3 className="text-xl tracking-tight font-bold text-white mb-4 uppercase">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed font-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-zinc-950 border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_100%)]"></div>
        <div className="container mx-auto px-4 sm:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase mb-6 text-white">
            INITIALIZE MESSAGING PROTOCOL
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg font-light tracking-wide">
            Automate customer discussions seamlessly without exposing operational friction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              onClick={handleContactNavigate}
              size="lg"
              className="w-full sm:w-auto rounded-none h-16 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-12 font-bold transition-all group border border-white"
            >
              START INTEGRATION
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}