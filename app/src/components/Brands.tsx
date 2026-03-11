import React, { useLayoutEffect, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── All Brands (Real + Generated) ──────────────────────────────────────────
const allBrands = [
  // Real Logos
  { name: "Hypermeat",       logo: "/brands/hypermeat.png" },
  { name: "Senhor Prego",    logo: "/brands/senhor-prego.jpg" },
  { name: "Truro Biltong",   logo: "/brands/truro.png" },
  { name: "Langebaan Meats", logo: "/brands/langebaan-meats.jpg" },
  // Generated Logos
  { name: "ApexTech",        logo: "/brands/apextech.png" },
  { name: "BrightBrand",     logo: "/brands/brightbrand.png" },
  { name: "PulsePoint",      logo: "/brands/pulsepoint.png" },
  { name: "NovaCraft",       logo: "/brands/novacraft.png" },
  { name: "CoreBlue",        logo: "/brands/coreblue.png" },
  { name: "ZenithSA",        logo: "/brands/zenithsa.png" },
  { name: "Prime Collective", logo: "/brands/prime.png" },
  { name: "UrbanEdge",       logo: "/brands/urbanedge.png" },
  { name: "RapidScale",      logo: "/brands/rapidscale.png" },
  { name: "VistaVentures",   logo: "/brands/vistaventures.png" },
  { name: "SummitBrands",    logo: "/brands/summit.png" },
  { name: "ForgeCraft",      logo: "/brands/forgecraft.png" },
  { name: "VertexSA",        logo: "/brands/vertex.png" },
  { name: "Pinnacle Media",  logo: "/brands/pinnacle.png" },
  { name: "HorizonTech",     logo: "/brands/horizon.png" },
  { name: "Stratos Group",   logo: "/brands/stratos.png" },
  { name: "ClearBridge",     logo: "/brands/clearbridge.png" },
];

// Duplicate for seamless infinite scroll
const marqueeItems = [...allBrands, ...allBrands];

const Brands = () => {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const tweenRef    = useRef<gsap.core.Tween | null>(null);

  // ── Infinite marquee with GSAP ──────────────────────────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Total width of one set (half the duplicated track)
    const halfWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x:        -halfWidth,
      duration: 45, // Slightly slower for better visibility
      ease:     "none",
      repeat:   -1,
      paused:   true,
    });
    tweenRef.current = tween;

    // Play when section enters viewport, pause when out
    ScrollTrigger.create({
      trigger:       sectionRef.current,
      start:         "top 90%",
      end:           "bottom 10%",
      onEnter:       () => tween.play(),
      onLeave:       () => tween.pause(),
      onEnterBack:   () => tween.play(),
      onLeaveBack:   () => tween.pause(),
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-black border-y border-white/5 overflow-hidden"
    >
      {/* ── Heading ─────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 mb-14 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-1 border border-cyan-500/30 rounded-full mb-5 bg-cyan-500/5"
        >
          <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            Market Authority
          </span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/50 text-sm font-semibold uppercase tracking-[0.4em] text-center"
        >
          Trusted By
        </motion.h3>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 w-16 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />
      </div>

      {/* ── Marquee track ───────────────────────────────────────────────── */}
      <div className="container mx-auto px-6">
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-black to-transparent" />

          <div
            ref={trackRef}
            className="flex items-center gap-10 md:gap-20 whitespace-nowrap will-change-transform py-4"
            style={{ width: "max-content" }}
          >
            {marqueeItems.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="group relative inline-flex items-center justify-center flex-shrink-0 cursor-pointer"
              >
                <div className="absolute -inset-8 bg-white/0 group-hover:bg-white/[0.04] blur-xl rounded-full transition-all duration-700" />
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 md:h-12 w-auto object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 drop-shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
