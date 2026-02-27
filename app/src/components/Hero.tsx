import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import DemoModal from "./DemoModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToSolutions = () => {
    const element = document.getElementById("solutions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const images = [1, 2, 3, 4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2800); // 2.8 seconds per slide (faster)
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-black text-white"
    >
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        productName="MAI Business Solutions"
      />

      {/* Background Cinematic Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none select-none">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 3.5, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={`/hero/${images[currentImageIndex]}.png`}
              alt="Premium Corporate Background"
              className="object-cover w-full h-full opacity-100 mix-blend-screen"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Vignette Overlays to blend edges but allow center brightness  */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,black_90%)] z-20"></div>
      </div>

      {/* Removed structural grid lines and decorative nodes */}

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-8 relative z-30 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[100rem]">

        {/* Left Column - Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Meta Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-8 overflow-hidden"
          >
            <div className="text-white/80 drop-shadow-lg text-xs sm:text-sm tracking-[0.4em] uppercase font-bold border-l-2 border-white pl-4 py-1">
              Strategic Intelligence // Active
            </div>
          </motion.div>

          {/* Brutalist Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mb-8"
          >
            <h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[6rem] xl:text-[7rem] font-bold tracking-tighter leading-[1] text-white drop-shadow-2xl"
              style={{ fontFamily: "'Delluza', sans-serif" }}
            >
              ENGINEERED<br />
              <span className="text-white/80 drop-shadow-2xl">FOR DOMINANCE.</span>
            </h1>
          </motion.div>

          {/* Stark Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-xl mb-12 max-w-2xl leading-relaxed font-light tracking-wide lg:mx-0 mx-auto"
          >
            We design, build, and deploy high-performance infrastructure for modern enterprises. From precision marketing to autonomous AI systems, our solutions are resilient, sophisticated, and engineered to command markets.
          </motion.p>

          {/* Brutalist Action Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4"
          >
            <Button
              onClick={scrollToSolutions}
              size="lg"
              className="rounded-none h-16 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-12 font-bold transition-all group border border-white"
            >
              VIEW CAPABILITIES
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              onClick={() => setIsDemoModalOpen(true)}
              size="lg"
              variant="outline"
              className="rounded-none h-16 bg-transparent border-white text-white hover:bg-white/10 hover:backdrop-blur-sm text-sm tracking-[0.15em] px-12 font-bold transition-all"
            >
              INITIATE CONTACT
            </Button>
          </motion.div>
        </div>

        {/* Right Column - Google model-viewer 3D Robot */}
        <div className="h-[350px] sm:h-[450px] lg:h-[700px] w-full relative z-40">
          {/* @ts-ignore - model-viewer is a web component loaded via CDN */}
          <model-viewer
            src="/models/scene.glb"
            alt="MAI Business Solutions AI Robot"
            autoplay
            camera-controls
            shadow-intensity="1"
            exposure="0.8"
            environment-image="neutral"
            loading="eager"
            style={{ width: '100%', height: '100%', background: 'transparent' }}
          >
            <div slot="poster" style={{
              width: '100%', height: '100%',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              background: 'transparent', gap: '16px'
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.1)',
                borderTop: '2px solid rgba(255,255,255,0.6)',
                animation: 'spin 1s linear infinite'
              }} />
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                Loading Model...
              </p>
            </div>
          </model-viewer>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" /></svg>
              Drag to rotate · Scroll to zoom
            </span>
          </div>
        </div>
        {/* Background Technical Metrics Overlay Removed */}

      </div>
    </section>
  );
}