import React, { useLayoutEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Chief Operating Officer",
    image: "/testimonials/1.png",
    quote: "The digital infrastructure developed by MAI Business Solutions has completely automated our pipeline. We've seen a 40% reduction in operational friction and a massive boost in client acquisition. Their precision is unmatched.",
  },
  {
    id: 2,
    name: "Pieter de Villiers",
    role: "Digital Marketing Lead",
    image: "/testimonials/2.png",
    quote: "MAI didn't just manage our social media; they built a fully animated brand ecosystem. Our new animated website is a conversion powerhouse, and their social strategy has increased our engagement by over 300%.",
  },
  {
    id: 3,
    name: "Thabo Mokoena",
    role: "Executive Producer",
    image: "/testimonials/5.png",
    quote: "The video commercial MAI produced for us was cinematic gold. They captured our brand's essence with elite production value, delivering a high-impact spot that has defined our visual identity for the year.",
  },
  {
    id: 4,
    name: "Christo Louw",
    role: "Creative Director",
    image: "/testimonials/4.png",
    quote: "The 3D assets MAI produced for our international campaign were breathtaking. Their attention to detail in rigging and texture work brought our products to life in a way we never thought possible. A total game changer.",
  },
  {
    id: 5,
    name: "Stefan Marais",
    role: "Chief Executive Officer",
    image: "/testimonials/3.png",
    quote: "The video production team at MAI is in a league of their own. The quality of the commercials they produced for our hero products has set a new benchmark for our brand's visual storytelling, driving massive engagement across all channels.",
  },
  {
    id: 6,
    name: "Gareth van Zyl",
    role: "Series Tech Entrepreneur",
    image: "/testimonials/6.png",
    quote: "From initial concept architecture to the final 3D animation, the team's ability to visualize complex tech is world-class. They didn't just build a model; they built a vision for our company's future.",
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            y: 60,
            opacity: 0,
            scale: 0.98,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=5%",
              toggleActions: "play none none reverse",
            },
            delay: (index % 3) * 0.05, // Snappier stagger
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-cyan-500" />
            <span className="text-cyan-500 font-bold tracking-[0.2em] text-xs uppercase">Proof of Performance</span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-none">
              Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Yields</span>
            </h2>
            <p className="text-white/40 max-w-md text-sm sm:text-base leading-relaxed">
              Quantifiable results from enterprise deployments. Read how our elite digital infrastructure has accelerated growth for our partners.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group relative p-8 sm:p-10 bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={80} className="text-white" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-cyan-500 text-cyan-500" />
                ))}
              </div>

              <p className="text-white/80 text-lg leading-relaxed mb-10 italic relative z-10 font-light">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-colors shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1 truncate">{testimonial.name}</h4>
                  <p className="text-cyan-500/80 text-[10px] uppercase tracking-[0.15em] font-medium truncate">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
