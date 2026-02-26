import { motion } from "framer-motion";
import { Megaphone, Target, BarChart, Activity, TrendingUp, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SEO from "./SEO";

export default function Marketing() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            <SEO title="Digital Marketing Services South Africa | MAI Business Solutions" description="Data-driven digital marketing strategies to elevate your brand, acquire high-value leads, and maximize ROI. Social media management, SEO, performance marketing and brand identity in South Africa." keywords="digital marketing South Africa, social media management Johannesburg, SEO South Africa, performance marketing, brand identity, lead generation marketing, MAI Marketing" canonicalUrl="/marketing" />
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
                            Division 01 // Operations
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white mb-8 uppercase">
                            PRECISION<br />
                            <span className="text-white/60">MARKETING.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light tracking-wide">
                            Elevate your brand, acquire high-value leads, and maximize your ROI with our high-performance marketing architecture. We construct systems that convert.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Analytics & Performance Graph Section */}
            <section className="py-24 bg-zinc-950 relative border-b border-white/10">
                <div className="absolute inset-x-0 h-px top-0 bg-white/10"></div>
                <div className="absolute inset-y-0 w-px left-8 md:left-12 lg:left-24 bg-white/10 hidden md:block"></div>
                <div className="absolute inset-y-0 w-px right-8 md:right-12 lg:right-24 bg-white/10 hidden md:block"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter uppercase mb-6">Data-Driven Domination</h2>
                            <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">
                                We don't guess. We deploy tracking pixels, analytics protocols, and comprehensive funnels to measure every interaction. By standardizing the flow of data, we optimize your ad spend for maximum conversion efficiency.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Algorithmic Lead Scoring",
                                    "A/B Tested Creative Vectors",
                                    "Omni-Channel Retargeting",
                                    "Real-Time ROI Dashboards"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-sm tracking-[0.1em] uppercase text-white/80 font-semibold">
                                        <ChevronRight className="w-4 h-4 mr-3 text-white" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CSS Graph Container */}
                        <div className="bg-black border border-white/10 p-8 relative overflow-hidden group">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_19px,#fff_1px)] bg-[size:100%_20px] opacity-[0.05]"></div>

                            <div className="flex justify-between items-end h-64 relative z-10 space-x-2 sm:space-x-4 mb-4">
                                {/* Bar Chart Simulation */}
                                {[
                                    { height: "h-[30%]", val: "2.4x" },
                                    { height: "h-[45%]", val: "3.1x" },
                                    { height: "h-[35%]", val: "2.8x" },
                                    { height: "h-[60%]", val: "4.5x" },
                                    { height: "h-[85%]", val: "6.2x" },
                                    { height: "h-[100%]", val: "8.5x" }
                                ].map((bar, idx) => (
                                    <div key={idx} className="w-full flex flex-col items-center justify-end h-full group/bar">
                                        <div className="opacity-0 group-hover/bar:opacity-100 transition-opacity text-xs font-bold mb-2 text-white">{bar.val}</div>
                                        <div className={`w-full ${bar.height} bg-white/20 group-hover/bar:bg-white transition-colors duration-500 border-t border-white`}></div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center relative z-10 pt-4 border-t border-white/20 text-xs font-bold tracking-widest text-white/50">
                                <span>Q1</span>
                                <span>Q2</span>
                                <span>Q3</span>
                                <span>Q4</span>
                                <span>Q5</span>
                                <span>Q6</span>
                            </div>

                            <div className="absolute top-6 left-6 flex items-center gap-2">
                                <Activity className="w-4 h-4 text-white" />
                                <span className="text-xs font-bold tracking-widest uppercase text-white">Conversion Velocity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid - Brutalist */}
            <section className="py-24 bg-black relative">
                <div className="absolute inset-y-0 w-px left-8 md:left-12 lg:left-24 bg-white/10 hidden md:block z-0"></div>
                <div className="absolute inset-y-0 w-px right-8 md:right-12 lg:right-24 bg-white/10 hidden md:block z-0"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold tracking-tighter uppercase mb-4">MARKETING PROTOCOLS</h2>
                        <div className="w-12 h-px bg-white mb-8"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-0 border border-white/10">
                        {[
                            { icon: Target, title: "Targeted Campaigns", desc: "Reach your ideal customers with precision audience targeting and segmentation profiles.", delay: 0 },
                            { icon: BarChart, title: "Performance Tracking", desc: "Real-time, actionable analytics to monitor and optimize your campaign ROI continuously.", delay: 0.1 },
                            { icon: Megaphone, title: "Brand Awareness", desc: "Build a strong, recognizable, and trusted brand presence across all digital platforms.", delay: 0.2 },
                            { icon: TrendingUp, title: "Growth Scaling", desc: "Capitalize on winning formulas to systematically increase market share and revenue.", delay: 0.3 },
                            { icon: Activity, title: "Conversion Optimization", desc: "Frictionless landing pages designed exclusively to capture and convert targeted traffic.", delay: 0.4 }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: feature.delay }}
                                className={`bg-black p-10 lg:p-12 border-white/10 hover:bg-white/[0.02] transition-colors group relative overflow-hidden ${idx % 3 !== 2 ? "md:border-r" : ""
                                    } ${idx < 3 ? "border-b" : ""}`}
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
                        DEPLOY MARKETING PROTOCOLS
                    </h2>
                    <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg font-light tracking-wide">
                        Connect with our engineering team to architect a custom marketing funnel designed for unbridled growth.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button
                            onClick={handleContactNavigate}
                            size="lg"
                            className="w-full sm:w-auto rounded-none h-16 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-12 font-bold transition-all group border border-white"
                        >
                            START YOUR CAMPAIGN
                            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
