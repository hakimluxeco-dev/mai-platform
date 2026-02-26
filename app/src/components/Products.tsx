import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Code, Video, Megaphone, Cpu, ArrowRight, Zap, Shield, TrendingUp, Box } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

interface Product {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
  gradient: string;
  link: string;
}

const products: Product[] = [
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to elevate your brand, acquire high-value leads, and maximize your ROI.",
    icon: <Megaphone className="w-8 h-8" />,
    features: ["Social Media Management", "SEO & Content Strategy", "Performance Marketing", "Brand Identity"],
    color: "blue",
    gradient: "from-blue-600 to-cyan-500",
    link: "/marketing",
  },
  {
    id: "3d-animation",
    title: "3D Animation & Models",
    description: "High-fidelity 3D assets, character animation, and real-time interactive models for commercial and digital use.",
    icon: <Box className="w-8 h-8" />,
    features: ["3D Modelling", "Character Animation", "Cinematic Renders", "Real-Time WebGL"],
    color: "orange",
    gradient: "from-orange-500 to-yellow-400",
    link: "/3d-animation",
  },
  {
    id: "video-commercials",
    title: "Video Commercials",
    description: "Cinematic, high-impact corporate videos and commercials designed to captivate your audience and tell your story.",
    icon: <Video className="w-8 h-8" />,
    features: ["Corporate Storytelling", "Social Media Ads", "Product Showcases", "Event Coverage"],
    color: "purple",
    gradient: "from-purple-600 to-pink-500",
    link: "/video-commercials",
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Custom-built web applications, mobile apps, and CRMs engineered for performance, security, and scale.",
    icon: <Code className="w-8 h-8" />,
    features: ["Custom Web Apps", "Mobile Development", "Enterprise CRMs", "API Integrations"],
    color: "indigo",
    gradient: "from-indigo-600 to-blue-500",
    link: "/software-development",
  },
  {
    id: "ai-systems",
    title: "AI Systems",
    description: "Intelligent automation and AI-powered assistants to streamline operations and enhance customer engagement.",
    icon: <Cpu className="w-8 h-8" />,
    features: ["WhatsApp Assistants", "Automated Invoicing", "Lead Generation Bots", "Virtual Receptionists"],
    color: "cyan",
    gradient: "from-cyan-500 to-emerald-400",
    link: "/ai-systems",
  },
];

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLearnMore = (link: string) => {
    navigate(link);
  };

  return (
    <section id="solutions" className="relative py-24 md:py-32 bg-black overflow-hidden text-white">
      {/* Structural Architectural Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-6">
              Core Capabilities
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white">
              TRANSFORMATIVE<br />
              <span className="text-white/60">INFRASTRUCTURE.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/60 max-w-sm text-sm leading-relaxed"
          >
            We provide the strategic framework, tools, and systems your enterprise needs to scale operations and lead your market.
          </motion.p>
        </div>

        {/* Products Grid - Architectural Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0 border border-white/10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0 last:border-b-0 sm:[&:nth-child(even)]:border-r-0 lg:[&:nth-child(even)]:border-r lg:[&:nth-child(4n)]:border-r-0 sm:[&:nth-child(1)]:border-b sm:[&:nth-child(2)]:border-b lg:[&:nth-child(1)]:border-b-0 lg:[&:nth-child(2)]:border-b-0 bg-transparent hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Hover effect bar */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>

              <div className="p-10 h-full flex flex-col">
                <div className={`w-12 h-12 flex items-center justify-center border border-white/20 mb-8 group-hover:bg-white group-hover:text-black transition-colors duration-500`}>
                  <div className="text-white group-hover:text-black transition-colors duration-500 scale-75">{product.icon}</div>
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">{product.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-10 flex-grow">
                  {product.description}
                </p>

                <div className="space-y-3 mb-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-1 h-1 bg-white`}></div>
                      <span className="text-xs tracking-wide uppercase text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleLearnMore(product.link)}
                  className={`w-full py-6 rounded-none bg-transparent hover:bg-white text-white hover:text-black border border-white/20 hover:border-white group/btn text-xs tracking-[0.15em] font-bold transition-all duration-300 mt-auto`}
                >
                  EXPLORE
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-all" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Benefits Section - Brutalist */}
        <div className="mt-24 grid sm:grid-cols-3 gap-0 border-y border-white/10 relative">
          <div className="absolute inset-y-0 left-1/3 w-px bg-white/10 hidden sm:block"></div>
          <div className="absolute inset-y-0 right-1/3 w-px bg-white/10 hidden sm:block"></div>

          <div className="p-8 sm:p-12 relative flex items-start gap-6 border-b sm:border-b-0 border-white/10 last:border-0 hover:bg-white/[0.02] transition-colors">
            <Shield className="w-6 h-6 text-white/40 shrink-0 mt-1" />
            <div>
              <h3 className="text-sm tracking-[0.2em] font-bold text-white mb-2 uppercase">Enterprise Security</h3>
              <p className="text-xs text-white/50 leading-relaxed font-mono">ENCRYPTED AT REST & IN TRANSIT. ZERO-TRUST ARCHITECTURE COMPLIANT.</p>
            </div>
          </div>
          <div className="p-8 sm:p-12 relative flex items-start gap-6 border-b sm:border-b-0 border-white/10 last:border-0 hover:bg-white/[0.02] transition-colors">
            <TrendingUp className="w-6 h-6 text-white/40 shrink-0 mt-1" />
            <div>
              <h3 className="text-sm tracking-[0.2em] font-bold text-white mb-2 uppercase">Performance Yield</h3>
              <p className="text-xs text-white/50 leading-relaxed font-mono">AVERAGED 40% EFFICIENCY IMPROVEMENT ACROSS ACTIVE DEPLOYMENTS.</p>
            </div>
          </div>
          <div className="p-8 sm:p-12 relative flex items-start gap-6 hover:bg-white/[0.02] transition-colors">
            <Zap className="w-6 h-6 text-white/40 shrink-0 mt-1" />
            <div>
              <h3 className="text-sm tracking-[0.2em] font-bold text-white mb-2 uppercase">Rapid Deployment</h3>
              <p className="text-xs text-white/50 leading-relaxed font-mono">STREAMLINED INTEGRATION PIPELINE. OPERATIONAL IN &lt;48 HOURS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}