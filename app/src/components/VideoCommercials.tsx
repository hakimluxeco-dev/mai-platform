import { motion } from "framer-motion";
import { Film, Video, Eye, ArrowRight, ChevronRight, Zap } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SEO from "./SEO";

export default function VideoCommercials() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            <SEO title="Video Production & Commercials South Africa | MAI Business Solutions" description="Cinematic, high-impact corporate videos and commercials engineered to captivate your audience. Corporate storytelling, social media ads, product showcases and event coverage." keywords="video production South Africa, corporate video Johannesburg, TV commercial production, product video, social media video ads, cinematic marketing South Africa, MAI Video" canonicalUrl="/video-commercials" />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-black border-b border-white/10">
                {/* Structural Architectural Grid Background */}
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
                            Division 02 // Production
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white mb-8 uppercase">
                            CINEMATIC<br />
                            <span className="text-white/60">ARCHITECTURE.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light tracking-wide">
                            High-impact corporate commercials and visual assets expertly engineered to command attention and definitively elevate your brand's market narrative.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cinematic Video Showcase Section */}
            <section className="py-24 bg-black relative border-b border-white/10">
                <div className="absolute inset-y-0 w-px left-8 md:left-12 lg:left-24 bg-white/10 hidden md:block"></div>
                <div className="absolute inset-y-0 w-px right-8 md:right-12 lg:right-24 bg-white/10 hidden md:block"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold tracking-tighter uppercase mb-4">SHOWREEL PROTOCOL</h2>
                        <div className="w-12 h-px bg-white mb-2"></div>
                    </div>

                    <div className="relative aspect-video w-full max-w-6xl mx-auto border border-white/20 bg-zinc-900 group overflow-hidden flex items-center justify-center">
                        {/* Auto-playing Cinematic Video */}
                        <video
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            poster="/cinematic_poster.png"
                        >
                            <source src="/cinematic_showreel.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Dark Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                        <div className="absolute bottom-6 left-6 text-white text-xs font-bold tracking-[0.2em] uppercase opacity-70 z-10 pointer-events-none">
                            REC. <span className="text-red-500 ml-1 animate-pulse">●</span>
                        </div>
                        <div className="absolute bottom-6 right-6 text-white text-xs font-bold tracking-[0.2em] uppercase opacity-70 z-10 pointer-events-none">
                            4K // 60FPS
                        </div>
                    </div>
                </div>
            </section>

            {/* Psychological Metrics Section */}
            <section className="py-24 bg-zinc-950 relative border-b border-white/10">
                <div className="absolute inset-y-0 w-px left-8 md:left-12 lg:left-24 bg-white/10 hidden md:block"></div>
                <div className="absolute inset-y-0 w-px right-8 md:right-12 lg:right-24 bg-white/10 hidden md:block"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            {/* CSS Metric Dashboard */}
                            <div className="bg-black border border-white/10 p-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_19px,#fff_1px)] bg-[size:100%_20px] opacity-[0.05]"></div>

                                <div className="space-y-8 relative z-10 pb-4">
                                    {[
                                        { label: "Audience Retention Time", val: "84%", color: "#3b82f6" },
                                        { label: "Visual Engagement Rate", val: "92%", color: "#10b981" },
                                        { label: "Conversion Lift (Video Embedded)", val: "67%", color: "#f97316" }
                                    ].map((stat, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between items-end mb-2 text-xs font-bold tracking-widest uppercase">
                                                <span className="text-white/70">{stat.label}</span>
                                                <span style={{ color: stat.color }}>{stat.val}</span>
                                            </div>
                                            <div className="h-[3px] w-full bg-white/10 relative overflow-hidden rounded-none">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: stat.val }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                                                    className="absolute top-0 left-0 h-full"
                                                    style={{ background: stat.color }}
                                                ></motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="absolute top-6 right-6 flex items-center gap-2">
                                    <Eye className="w-4 h-4 text-white/50" />
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl font-bold tracking-tighter uppercase mb-6">Visual Domination</h2>
                            <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">
                                Humans process visual abstractions drastically faster than text. We leverage high-end cinematic equipment, uncompromising color grading, and psychological pacing to hold viewer attention and systematically dictate brand perception.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Cinema-Grade Visual Fidelity",
                                    "Psychological Color Grading",
                                    "Dynamic Narrative Architecture",
                                    "Multi-Platform Format Optimization"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-sm tracking-[0.1em] uppercase text-white/80 font-semibold">
                                        <ChevronRight className="w-4 h-4 mr-3 text-white" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="py-24 bg-black relative">
                <div className="absolute inset-y-0 w-px left-8 md:left-12 lg:left-24 bg-white/10 hidden md:block z-0"></div>
                <div className="absolute inset-y-0 w-px right-8 md:right-12 lg:right-24 bg-white/10 hidden md:block z-0"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold tracking-tighter uppercase mb-4">PRODUCTION VECTORS</h2>
                        <div className="w-12 h-px bg-white mb-8"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-0 border border-white/10">
                        {[
                            { icon: Film, title: "Corporate Narratives", desc: "Build lasting authority with compelling, architected narratives about your core mission and enterprise scale.", delay: 0 },
                            { icon: Zap, title: "Short-Form Assets", desc: "Aggressive, high-energy cuts optimized specifically for algorithmic domination on social platforms.", delay: 0.1 },
                            { icon: Video, title: "Product Showcases", desc: "Isolate and magnify your product capabilities with extreme close-ups, dynamic lighting, and precise pacing.", delay: 0.2 }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: feature.delay }}
                                className={`bg-black p-10 lg:p-12 border-white/10 hover:bg-white/[0.02] transition-colors group relative overflow-hidden ${idx % 3 !== 2 ? "md:border-r" : ""
                                    }`}
                            >
                                <div className="absolute top-0 inset-x-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>

                                <div className="w-12 h-12 flex items-center justify-center border border-white/20 mb-8 group-hover:bg-white transition-colors duration-500">
                                    <feature.icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl tracking-tight font-bold text-white mb-4 uppercase">{feature.title}</h3>
                                <p className="text-white/60 leading-relaxed font-light">{feature.desc}</p>
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
                        DEPLOY CINEMATIC ASSETS
                    </h2>
                    <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg font-light tracking-wide">
                        Engage our production team to map out and execute visual assets that establish unshakeable market authority.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button
                            onClick={() => navigate("/get-started")}
                            size="lg"
                            className="w-full sm:w-auto rounded-none h-16 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-12 font-bold transition-all group border border-white"
                        >
                            INITIATE PRODUCTION
                            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
