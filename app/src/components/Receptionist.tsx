import { motion } from "framer-motion";
import { Phone, Clock, Calendar, MessageSquare, CheckCircle, Brain, Shield, Users, BarChart3, Globe, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function Receptionist() {
  const navigate = useNavigate();
  const handleContactNavigate = () => navigate("/get-started");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Automated receptionist service that answers instantly and ensures you never miss a call."
    },
    {
      icon: Brain,
      title: "Intelligent Conversations",
      description: "Natural language processing enables human-like conversations that perfectly understand context."
    },
    {
      icon: MessageSquare,
      title: "Detailed Message Taking",
      description: "Captures comprehensive caller information, inquiries, and requests with perfect accuracy."
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Seamlessly schedules appointments by checking availability and confirming with callers."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Communicate with customers in 50+ languages with native-level fluency."
    },
    {
      icon: BarChart3,
      title: "Call Analytics",
      description: "Comprehensive insights into call volume, peak times, and customer inquiries."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Helmet>
        <title>Virtual Receptionist // AI Systems | MAI</title>
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
              System 01 // Voice Architecture
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white mb-8 uppercase">
              VIRTUAL<br />
              <span className="text-white/60">RECEPTIONIST.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light tracking-wide mb-12">
              A 24/7 automated telephonic architecture that answers every call, secures messages, and books appointments—engineered to capture 100% of incoming leads.
            </p>
            <Button
              onClick={handleContactNavigate}
              className="rounded-none h-16 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-10 font-bold transition-all group border border-white"
            >
              DEPLOY SYSTEM <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-zinc-950 relative border-b border-white/10">
        <div className="absolute inset-x-0 h-px top-0 bg-white/10"></div>
        <div className="absolute inset-y-0 w-px left-8 md:left-12 lg:left-24 bg-white/10 hidden md:block"></div>
        <div className="absolute inset-y-0 w-px right-8 md:right-12 lg:right-24 bg-white/10 hidden md:block"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter uppercase mb-6">Zero Missed Opportunities</h2>
              <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">
                Our Virtual Receptionist acts as a seamless extension of your workforce. It filters basic inquiries, extracts critical caller data, and schedules appointments directly into your infrastructure without human delay.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 p-px">
              {[
                { val: "100%", label: "Call Capture Rate" },
                { val: "R0", label: "Missed Opportunities" },
                { val: "90%", label: "Cost Savings" },
                { val: "24/7", label: "Uptime" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-black p-8 text-center flex flex-col justify-center items-center hover:bg-zinc-900 transition-colors">
                  <div className="text-4xl font-bold tracking-tighter text-white mb-2">{stat.val}</div>
                  <div className="text-xs tracking-[0.2em] font-semibold text-white/50 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
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
            INITIALIZE VIRTUAL AGENT
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg font-light tracking-wide">
            Integrate 24/7 intelligent voice routing into your enterprise architecture.
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