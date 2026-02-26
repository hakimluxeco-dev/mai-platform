import { Crosshair, Target, Shield, Zap, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import SEO from "./SEO";

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Crosshair className="w-5 h-5" />,
      title: "PRECISION ENGINEERING",
      description: "We deploy highly targeted solutions without bloat or excess. Every system is architected for maximum impact."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "TACTICAL EXECUTION",
      description: "Strategies remain theories until executed. We enforce strict protocols to ensure reliable, high-performance deployment."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "SECURE INFRASTRUCTURE",
      description: "Data integrity and infrastructural security are the non-negotiable foundations of every solution we build."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "RAPID DEPLOYMENT",
      description: "Speed is a weapon. Our standardized frameworks allow us to rapidly scale and iterate without compromising quality."
    }
  ];

  const handleContactNavigate = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>
        <div className="absolute inset-y-0 left-0 w-px bg-white/10 hidden md:block md:ml-12 lg:ml-24"></div>
        <div className="absolute inset-y-0 right-0 w-px bg-white/10 hidden md:block md:mr-12 lg:mr-24"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-8 overflow-hidden"
            >
              <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1">
                Sys.Profile // MAI
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase mb-6"
            >
              ARCHITECTING<br />
              <span className="text-white/60">THE APEX.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg text-white/60 max-w-2xl leading-relaxed font-light tracking-wide mb-10"
            >
              MAI Business Solutions engineers elite digital architecture. We bridge the gap between complex operational demands and high-performance digital solutions, providing organizations with the infrastructure required to dominate their markets.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Story / Directive */}
      <section className="py-24 relative border-b border-white/10">
        <div className="absolute inset-y-0 left-0 w-px bg-white/10 hidden md:block md:ml-12 lg:ml-24"></div>
        <div className="absolute inset-y-0 right-0 w-px bg-white/10 hidden md:block md:mr-12 lg:mr-24"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-bold tracking-tighter uppercase mb-4">THE DIRECTIVE</h2>
              <div className="w-12 h-px bg-white mb-8"></div>
            </div>
            <div className="lg:col-span-8">
              <div className="prose prose-invert max-w-none text-white/70 text-lg font-light leading-relaxed space-y-8">
                <p>
                  MAI Business Solutions was established to dismantle the inefficiency plaguing modern enterprises. Through our extensive tenure in operations and systems design, we identified a critical vulnerability: organizations possessing immense potential, paralyzed by fractured digital infrastructures and outdated methodologies.
                </p>
                <p>
                  We deployed a new paradigm. We do not merely offer "services"—we engineer systematic dominance. From cinematic video production that commands authority, to precision software architectures that ruthlessly automate operations, all the way to targeted marketing and autonomous AI agents.
                </p>
                <p className="border-l-2 border-white pl-6 text-white text-xl uppercase tracking-wider font-semibold my-12">
                  "Our operation is built on four core pillars: Precision Marketing, Cinematic Production, Software Architecture, and Autonomous Intelligence. We build the apex."
                </p>
                <p>
                  Today, we architect digital solutions for leading enterprises, optimizing their infrastructure to not just compete, but completely outclass the opposition. Our commitment is singular: to build systems that scale infinitely and perform flawlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 relative border-b border-white/10 bg-zinc-950">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>
        <div className="absolute inset-y-0 left-0 w-px bg-white/10 hidden md:block md:ml-12 lg:ml-24"></div>
        <div className="absolute inset-y-0 right-0 w-px bg-white/10 hidden md:block md:mr-12 lg:mr-24"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-4">OPERATIONAL PILLARS</h2>
            <div className="w-12 h-px bg-white mb-8"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {values.map((value, index) => (
              <div key={index} className="group relative p-8 md:p-12 bg-black border-b sm:border-b-0 sm:border-r border-white/10 hover:bg-white/[0.02] transition-colors duration-500 last:border-r-0">
                <div className="absolute top-0 inset-x-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 mb-8 bg-zinc-950 text-white/80 group-hover:border-white/30 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-4 uppercase text-white">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_100%)]"></div>
        <div className="container mx-auto px-4 sm:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase mb-6 text-white">
            READY TO DEPLOY?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg font-light tracking-wide">
            Integrate our enterprise-grade solutions into your operation and establish total market dominance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              onClick={handleContactNavigate}
              size="lg"
              className="w-full sm:w-auto rounded-none h-16 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-12 font-bold transition-all group border border-white"
            >
              START YOUR PROJECT
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Link to="/">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-none h-16 bg-transparent border-white/20 text-white hover:bg-white/5 hover:border-white text-sm tracking-[0.15em] px-12 font-bold transition-all"
              >
                RETURN TO BASE
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}