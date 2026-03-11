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

      {/* The Directive */}
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
                  At MAI Business Solutions, we operate as a strategic consulting and business intelligence firm engineered for one objective: market dominance.
                </p>
                <p className="text-white font-semibold text-xl tracking-wide">
                  We analyze. We architect. We deploy.
                </p>
                <p>
                  Our mandate is to dissect competitive landscapes, identify structural weaknesses within industries, and construct precision-built growth systems that elevate revenue, brand authority, and operational leverage. Where others offer fragmented services, we deliver unified strategic frameworks.
                </p>
                <p className="border-l-2 border-white pl-6 text-white text-xl uppercase tracking-wider font-semibold my-12">
                  "MAI Business Solutions is not a service provider. We are a strategic growth partner."
                </p>
                <p>
                  We engineer businesses for authority, scalability, and sustained market superiority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Intelligence */}
      <section className="py-24 relative border-b border-white/10 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-4">Intelligence Layer</div>
              <h2 className="text-2xl font-bold tracking-tighter uppercase mb-4">STRATEGIC INTELLIGENCE &amp; COMPETITIVE ANALYSIS</h2>
              <div className="w-12 h-px bg-white mb-8"></div>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <p className="text-white/70 text-lg font-light leading-relaxed">
                Every engagement begins with deep operational and competitive analysis. We evaluate:
              </p>
              <div className="space-y-4">
                {[
                  "Market positioning and competitor infrastructure",
                  "Revenue bottlenecks and acquisition inefficiencies",
                  "Brand authority gaps and digital performance metrics",
                  "Automation and systems vulnerabilities",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 border-l border-white/20 pl-6 py-2">
                    <div className="w-1.5 h-1.5 bg-white mt-2 shrink-0"></div>
                    <p className="text-white/70 text-sm leading-relaxed tracking-wide">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-base font-light leading-relaxed pt-4">
                From this intelligence, we engineer structured growth packs — tailored frameworks designed to outperform competitors and compound revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineered Growth Systems */}
      <section className="py-24 relative border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-4">Execution Divisions</div>
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-2">ENGINEERED GROWTH SYSTEMS</h2>
            <p className="text-white/50 text-sm">Our execution capabilities span four high-impact divisions:</p>
            <div className="w-12 h-px bg-white mt-6"></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-0 border border-white/10">
            {[
              {
                num: "01",
                title: "3D Animation & Visual Authority",
                body: "High-end 3D animation and cinematic production assets that command attention and elevate brand perception to enterprise level."
              },
              {
                num: "02",
                title: "Precision Digital Marketing",
                body: "Data-driven acquisition systems built to scale traffic, optimize conversion pathways, and dominate targeted market segments."
              },
              {
                num: "03",
                title: "Brand Architecture",
                body: "Strategic brand positioning, identity engineering, and authority frameworks designed to control perception within competitive markets."
              },
              {
                num: "04",
                title: "AI Systems Engineering",
                body: "Custom-built AI infrastructures and automation frameworks that reduce operational friction, enhance decision velocity, and create scalable digital ecosystems."
              },
            ].map((div, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-10 border-b sm:border-r border-white/10 hover:bg-white/[0.02] transition-colors duration-500 last:border-b-0 last:border-r-0 [&:nth-child(even)]:border-r-0 [&:nth-child(3)]:border-b-0"
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                <div className="text-white/20 text-5xl font-bold tracking-tighter mb-6">{div.num}</div>
                <h3 className="text-lg font-bold tracking-tight uppercase text-white mb-3">{div.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{div.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Doctrine */}
      <section className="py-24 relative border-b border-white/10 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-4">Doctrine</div>
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-2">OUR OPERATING DOCTRINE</h2>
            <div className="w-12 h-px bg-white mt-6"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {[
              { label: "Intelligence First", body: "Every decision is data-validated and competitor-aware." },
              { label: "Systemic Execution", body: "We build interconnected infrastructures, not isolated campaigns." },
              { label: "Scalable Architecture", body: "Solutions are engineered for long-term expansion." },
              { label: "Market Control", body: "The objective is not participation. It is dominance." },
            ].map((doc, i) => (
              <div key={i} className="group p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-white/10 hover:bg-white/[0.02] transition-colors duration-500 last:border-r-0">
                <div className="absolute top-0 inset-x-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                <div className="text-white/20 text-xs tracking-[0.25em] uppercase font-mono mb-4">0{i + 1}</div>
                <h3 className="text-base font-bold tracking-tight uppercase text-white mb-3">{doc.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{doc.body}</p>
              </div>
            ))}
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
              onClick={() => navigate("/get-started")}
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