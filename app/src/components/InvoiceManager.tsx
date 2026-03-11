import { motion } from "framer-motion";
import { Camera, Zap, Clock, Database, BarChart3, Shield, ArrowRight, X, Scan, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function InvoiceManager() {
  const navigate = useNavigate();
  const handleContactNavigate = () => navigate("/get-started");
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Camera,
      title: "Optical Capture",
      description: "Instantly process physical documents with 99.9% accuracy using our high-fidelity OCR engine."
    },
    {
      icon: Scan,
      title: "Data Extraction",
      description: "Algorithms identify vendor vectors, line items, and payment schedules automatically."
    },
    {
      icon: Zap,
      title: "Autonomous Processing",
      description: "Eliminate manual input latency with real-time digital invoice validation."
    },
    {
      icon: Clock,
      title: "Payment Tracking",
      description: "Strict monitoring of payment lifecycles with programmatic follow-up sequences."
    },
    {
      icon: Database,
      title: "Cloud Cryptography",
      description: "Secure, decentralized storage with instant database querying of all historical invoices."
    },
    {
      icon: Shield,
      title: "Audit Compliance",
      description: "Automatic tax compliance mapping, unalterable audit trails, and financial reporting."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Helmet>
        <title>Invoice Manager // AI Systems | MAI</title>
      </Helmet>

      <Navbar />

      {/* Image Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={zoomedImage}
            alt="Expanded interface"
            className="max-w-full max-h-full object-contain border border-white/20"
          />
        </div>
      )}

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
              System 05 // Financial Architecture
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white mb-8 uppercase">
              INVOICE<br />
              <span className="text-white/60">MANAGER.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light tracking-wide mb-12">
              Transform the chaotic friction of financial administration. Use AI-powered ocular extraction to process invoices instantaneously with flawless accuracy.
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

      {/* Interface Preview Section */}
      <section className="py-24 bg-zinc-950 relative border-b border-white/10">
        <div className="absolute inset-y-0 w-px left-8 md:left-12 lg:left-24 bg-white/10 hidden md:block"></div>
        <div className="absolute inset-y-0 w-px right-8 md:right-12 lg:right-24 bg-white/10 hidden md:block"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter uppercase mb-2">SYSTEM INTERFACE</h2>
              <div className="w-12 h-px bg-white"></div>
            </div>
            <div className="hidden sm:flex text-xs font-bold tracking-widest text-white/40 uppercase items-center gap-2">
              <FileText className="w-4 h-4" /> Live Dashboard
            </div>
          </div>

          <div
            className="w-full max-w-6xl mx-auto border border-white/20 bg-black cursor-zoom-in group overflow-hidden relative"
            onClick={() => setZoomedImage("https://storage.googleapis.com/tempo-image-previews/user_34NSCeaX7cUfcqgytX4YHlnjfLI-1761822248496-Screenshot%202025-10-29%20125332.png")}
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
            <img
              src="https://storage.googleapis.com/tempo-image-previews/user_34NSCeaX7cUfcqgytX4YHlnjfLI-1761822248496-Screenshot%202025-10-29%20125332.png"
              alt="Dashboard interface"
              className="w-full h-auto grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-white/10 pt-16">
            {[
              { label: "Processing Speed", val: "-90%" },
              { label: "Accuracy Rate", val: "99.9%" },
              { label: "Operational Overhead", val: "-60%" }
            ].map((stat, idx) => (
              <div key={idx} className="flex border-l-2 border-white pl-6">
                <div>
                  <div className="text-4xl font-bold tracking-tighter text-white mb-1">{stat.val}</div>
                  <div className="text-xs tracking-[0.2em] font-semibold text-white/50 uppercase">{stat.label}</div>
                </div>
              </div>
            ))}
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
            INITIALIZE DATA EXTRACTION
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg font-light tracking-wide">
            Automate invoice handling and protect your enterprise structure from human error.
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