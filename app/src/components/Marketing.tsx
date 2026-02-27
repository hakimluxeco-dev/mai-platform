import { motion } from "framer-motion";
import { useState } from "react";
import { Megaphone, Target, BarChart, Activity, TrendingUp, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SEO from "./SEO";
import DemoModal from "./DemoModal";

const stats = [
    { value: "400%", label: "Average ROI Increase", color: "#3b82f6" },
    { value: "12k+", label: "Leads Generated", color: "#8b5cf6" },
    { value: "94%", label: "Client Retention Rate", color: "#10b981" },
    { value: "380+", label: "Campaigns Deployed", color: "#f97316" },
];

const channels = [
    { name: "Social Media Ads", pct: 92, color: "#3b82f6", sub: "Meta · LinkedIn · TikTok · YouTube" },
    { name: "SEO & Content", pct: 78, color: "#10b981", sub: "Organic growth engine" },
    { name: "Google PPC", pct: 85, color: "#f97316", sub: "Search & Display network" },
    { name: "Email Marketing", pct: 70, color: "#8b5cf6", sub: "Nurture & conversion flows" },
    { name: "Influencer & PR", pct: 62, color: "#ec4899", sub: "Brand authority amplification" },
];

const barData = [
    { month: "Jan", organic: 35, paid: 32, email: 15 },
    { month: "Feb", organic: 42, paid: 40, email: 18 },
    { month: "Mar", organic: 55, paid: 48, email: 22 },
    { month: "Apr", organic: 48, paid: 58, email: 28 },
    { month: "May", organic: 72, paid: 70, email: 32 },
    { month: "Jun", organic: 85, paid: 82, email: 40 },
];

const results = [
    { label: "Lead Volume", before: 28, after: 91, color: "#3b82f6" },
    { label: "Conversion Rate", before: 15, after: 68, color: "#10b981" },
    { label: "Brand Reach", before: 22, after: 88, color: "#8b5cf6" },
    { label: "Revenue Growth", before: 32, after: 95, color: "#f97316" },
];

export default function Marketing() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            <SEO
                title="Digital Marketing Services South Africa | MAI Business Solutions"
                description="Data-driven digital marketing strategies to elevate your brand, acquire high-value leads, and maximize ROI."
                keywords="digital marketing South Africa, social media management, SEO, performance marketing, brand identity"
                canonicalUrl="/marketing"
            />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-black border-b border-white/10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl pt-16">
                        <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-8">
                            Division 01 // Operations
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white mb-8 uppercase">
                            PRECISION<br />
                            <span className="text-white/60">MARKETING.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light tracking-wide mb-10">
                            Elevate your brand, acquire high-value leads, and maximize your ROI with high-performance marketing architecture engineered to convert.
                        </p>
                        <Button
                            onClick={() => setModalOpen(true)}
                            className="rounded-none h-14 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-10 font-bold transition-all group border border-white"
                        >
                            START YOUR CAMPAIGN
                            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Performance Data Manifest */}
            <section className="border-b border-white/10 bg-zinc-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-stretch border-x border-white/10">
                        {/* Left label column */}
                        <div className="flex items-center justify-between md:justify-start md:flex-col md:justify-center gap-2 px-8 py-6 md:py-10 border-b md:border-b-0 md:border-r border-white/10 md:w-56 shrink-0">
                            <span className="text-white/30 text-[10px] tracking-[0.35em] uppercase font-mono block">Performance</span>
                            <span className="text-white/30 text-[10px] tracking-[0.35em] uppercase font-mono block">Data Index</span>
                        </div>

                        {/* Stats */}
                        {[
                            { value: "400%", label: "Average ROI Increase", index: "01" },
                            { value: "12,000+", label: "Leads Generated", index: "02" },
                            { value: "94%", label: "Client Retention Rate", index: "03" },
                            { value: "380+", label: "Campaigns Deployed", index: "04" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group flex-1 px-8 py-10 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 hover:bg-white/[0.02] transition-colors duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                <div className="text-white/20 text-[10px] font-mono tracking-widest mb-4">/{stat.index}</div>
                                <div className="text-3xl sm:text-4xl font-bold tracking-tighter text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-white/40 text-xs uppercase tracking-[0.2em] font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Colorful Bar Chart Section */}
            <section className="py-24 bg-zinc-950 border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-6">Performance Analytics</div>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter uppercase mb-6">
                                DATA-DRIVEN<br /><span className="text-white/60">DOMINATION.</span>
                            </h2>
                            <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">
                                We deploy tracking pixels, analytics protocols, and comprehensive funnels to measure every interaction — optimizing ad spend for maximum conversion.
                            </p>
                            <ul className="space-y-4">
                                {["Algorithmic Lead Scoring", "A/B Tested Creative Vectors", "Omni-Channel Retargeting", "Real-Time ROI Dashboards"].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm tracking-[0.1em] uppercase text-white/80 font-semibold">
                                        <ChevronRight className="w-4 h-4 mr-3" style={{ color: ["#3b82f6", "#10b981", "#f97316", "#8b5cf6"][i] }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Multi-colour Grouped Bar Chart */}
                        <div className="bg-black border border-white/10 p-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_19px,rgba(255,255,255,0.03)_1px)] bg-[size:100%_20px]" />
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <Activity className="w-4 h-4 text-white/60" />
                                <span className="text-xs font-bold tracking-widest uppercase text-white/60">Monthly Channel Performance</span>
                            </div>
                            {/* Legend */}
                            <div className="flex gap-6 mb-6 relative z-10">
                                {[{ label: "Organic", color: "#10b981" }, { label: "Paid", color: "#3b82f6" }, { label: "Email", color: "#8b5cf6" }].map((l, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-sm" style={{ background: l.color }} />
                                        <span className="text-xs text-white/50 uppercase tracking-wide">{l.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between items-end h-52 relative z-10 gap-3">
                                {barData.map((bar, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                        <div className="w-full flex items-end gap-[2px] h-44">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${bar.organic}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                                className="flex-1 rounded-t-sm"
                                                style={{ background: "#10b981" }}
                                            />
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${bar.paid}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: i * 0.1 + 0.1 }}
                                                className="flex-1 rounded-t-sm"
                                                style={{ background: "#3b82f6" }}
                                            />
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${bar.email}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
                                                className="flex-1 rounded-t-sm"
                                                style={{ background: "#8b5cf6" }}
                                            />
                                        </div>
                                        <span className="text-xs text-white/40 uppercase tracking-wide">{bar.month}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Channel Performance Bars */}
            <section className="py-24 bg-black border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4">
                            <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-6">Channel Mix</div>
                            <h2 className="text-3xl font-bold tracking-tighter uppercase mb-4">
                                MULTI-CHANNEL<br /><span className="text-white/60">DOMINANCE.</span>
                            </h2>
                            <p className="text-white/50 text-sm leading-relaxed">
                                We deploy across every high-impact channel simultaneously — each optimised independently, all working in unison toward a single goal: market control.
                            </p>
                        </div>
                        <div className="lg:col-span-8 space-y-6">
                            {channels.map((ch, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="space-y-2"
                                >
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-sm font-bold uppercase tracking-wide text-white">{ch.name}</span>
                                            <span className="text-xs text-white/40 ml-3 uppercase tracking-wider">{ch.sub}</span>
                                        </div>
                                        <span className="text-sm font-bold tabular-nums" style={{ color: ch.color }}>{ch.pct}%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${ch.pct}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                            className="h-full rounded-full"
                                            style={{ background: `linear-gradient(90deg, ${ch.color}99, ${ch.color})` }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Before / After Results */}
            <section className="py-24 bg-zinc-950 border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-4">Client Results</div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter uppercase">
                            BEFORE vs<br /><span className="text-white/60">AFTER MAI.</span>
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-0 border border-white/10">
                        {results.map((r, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="p-10 border-b border-r border-white/10 last:border-b-0 last:border-r-0 [&:nth-child(even)]:border-r-0 [&:nth-child(3)]:border-b-0 hover:bg-white/[0.02] transition-colors"
                            >
                                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">{r.label}</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-xs text-white/40 uppercase tracking-wide mb-2">
                                            <span>Before</span><span>{r.before}%</span>
                                        </div>
                                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-white/20 rounded-full" style={{ width: `${r.before}%` }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs uppercase tracking-wide mb-2" style={{ color: r.color }}>
                                            <span className="font-bold">After MAI</span><span className="font-bold">{r.after}%</span>
                                        </div>
                                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${r.after}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                                                className="h-full rounded-full"
                                                style={{ background: `linear-gradient(90deg, ${r.color}88, ${r.color})` }}
                                            />
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <span className="text-2xl font-bold" style={{ color: r.color }}>+{r.after - r.before}%</span>
                                        <span className="text-white/40 text-xs ml-2 uppercase tracking-wide">improvement</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Marketing Protocols Grid */}
            <section className="py-24 bg-black border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-4">Service Stack</div>
                        <h2 className="text-3xl font-bold tracking-tighter uppercase">MARKETING PROTOCOLS.</h2>
                        <div className="w-12 h-px bg-white mt-6" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-0 border border-white/10">
                        {[
                            { icon: Target, title: "Targeted Campaigns", desc: "Precision audience targeting and segmentation profiles to reach your ideal customers.", color: "#3b82f6" },
                            { icon: BarChart, title: "Performance Tracking", desc: "Real-time actionable analytics to monitor and optimize campaign ROI continuously.", color: "#10b981" },
                            { icon: Megaphone, title: "Brand Awareness", desc: "Build a recognizable brand presence across all digital platforms and channels.", color: "#f97316" },
                            { icon: TrendingUp, title: "Growth Scaling", desc: "Capitalize on winning formulas to systematically increase market share and revenue.", color: "#8b5cf6" },
                            { icon: Activity, title: "Conversion Optimization", desc: "Frictionless landing pages designed exclusively to capture and convert targeted traffic.", color: "#ec4899" },
                            { icon: ChevronRight, title: "Retention Systems", desc: "Automated nurture sequences that maintain engagement and maximize customer lifetime value.", color: "#06b6d4" },
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="group relative p-10 border-b border-r border-white/10 hover:bg-white/[0.02] transition-colors [&:nth-child(3n)]:border-r-0 [&:nth-child(4)]:border-b-0 [&:nth-child(5)]:border-b-0 [&:nth-child(6)]:border-b-0"
                            >
                                <div className="absolute top-0 inset-x-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20" style={{ background: feature.color }} />
                                <div className="w-12 h-12 flex items-center justify-center border border-white/20 mb-8 transition-all duration-500 group-hover:border-transparent" style={{ ['--hover-bg' as string]: feature.color }} >
                                    <feature.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg tracking-tight font-bold text-white mb-3 uppercase">{feature.title}</h3>
                                <p className="text-white/50 leading-relaxed text-sm">{feature.desc}</p>
                                <div className="mt-4 h-[1px] w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: feature.color }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 relative overflow-hidden bg-zinc-950 border-t border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0,transparent_60%)]" />
                <div className="container mx-auto px-4 sm:px-8 relative z-10 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase mb-6">
                        DEPLOY MARKETING<br /><span className="text-white/60">PROTOCOLS.</span>
                    </h2>
                    <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg font-light tracking-wide">
                        Connect with our engineering team to architect a custom marketing funnel designed for unbridled growth.
                    </p>
                    <Button
                        onClick={() => setModalOpen(true)}
                        size="lg"
                        className="rounded-none h-16 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-12 font-bold transition-all group border border-white"
                    >
                        START YOUR CAMPAIGN
                        <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Button>
                </div>
            </section>

            <Footer />
            <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
}
