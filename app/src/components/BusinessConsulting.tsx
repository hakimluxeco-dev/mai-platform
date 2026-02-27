import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Target, BarChart3, Search, Shield, Zap, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import SEO from "./SEO";
import DemoModal from "./DemoModal";

const services = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "Market Intelligence",
        description: "Deep-dive analysis of your market landscape, identifying untapped opportunities and competitor blind spots.",
        items: ["Competitor mapping", "Market share analysis", "Trend forecasting", "Gap identification"],
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: "Competitive Analysis",
        description: "Systematic deconstruction of competitor strategies, positioning, and digital infrastructure.",
        items: ["SWOT deep dives", "Pricing strategy analysis", "Digital footprint audits", "Brand authority benchmarking"],
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Revenue Architecture",
        description: "Identifying and eliminating revenue bottlenecks to unlock compounding growth.",
        items: ["Revenue leak detection", "Conversion pathway audits", "Acquisition cost analysis", "LTV optimisation"],
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Growth Strategy",
        description: "Precision-engineered growth frameworks aligned to your market position and long-term objectives.",
        items: ["90-day growth sprints", "Market entry playbooks", "Expansion roadmaps", "KPI frameworks"],
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Operational Audit",
        description: "Full operational review to surface inefficiencies and automation opportunities within your business systems.",
        items: ["Process mapping", "Systems vulnerability review", "Automation opportunity reports", "Resource optimisation"],
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Rapid Intelligence Reports",
        description: "Fast-turnaround strategic intelligence documents on competitors, markets, and sector shifts.",
        items: ["48-hour competitor briefs", "Sector trend reports", "Launch readiness assessments", "Go-to-market validation"],
    },
];

const doctrine = [
    { num: "01", label: "Intelligence First", body: "Every engagement starts with data — not assumptions." },
    { num: "02", label: "Systemic Thinking", body: "We analyse interconnected systems, not isolated channels." },
    { num: "03", label: "Actionable Output", body: "Deliverables are built to be deployed, not filed away." },
    { num: "04", label: "Market Dominance", body: "The objective is not participation. It is control." },
];

export default function BusinessConsulting() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const handleContact = () => setModalOpen(true);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <SEO
                title="Business Consulting & Competitive Analysis | MAI Business Solutions"
                description="Strategic consulting and competitive intelligence services. We analyze markets, dismantle competitor advantages, and engineer precision growth systems for your business."
                keywords="business consulting South Africa, competitive analysis, market intelligence, growth strategy, strategic consulting Johannesburg"
            />
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-white/40 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors mb-12"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back
                    </button>

                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="mb-8"
                        >
                            <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1">
                                Strategic Intelligence // Active
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-[0.95]"
                        >
                            BUSINESS
                            <br />
                            <span className="text-white/60">CONSULTING</span>
                            <br />
                            <span className="text-white/40">& COMPETITIVE</span>
                            <br />
                            ANALYSIS.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-lg text-white/60 max-w-2xl leading-relaxed font-light tracking-wide mb-10"
                        >
                            We analyze. We architect. We deploy. Our mandate is to dissect competitive landscapes, identify structural weaknesses, and construct precision-built growth systems that compound revenue and establish market authority.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <Button
                                onClick={handleContact}
                                className="rounded-none h-14 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-10 font-bold transition-all group border border-white"
                            >
                                REQUEST INTELLIGENCE BRIEF
                                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-4">
                            Service Divisions
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter uppercase">
                            INTELLIGENCE<br />
                            <span className="text-white/60">CAPABILITIES.</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group relative p-10 border-b border-r border-white/10 hover:bg-white/[0.02] transition-colors duration-500 [&:nth-child(3n)]:border-r-0 [&:nth-child(4)]:border-b-0 [&:nth-child(5)]:border-b-0 [&:nth-child(6)]:border-b-0"
                            >
                                <div className="absolute top-0 inset-x-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-10" />
                                <div className="w-12 h-12 flex items-center justify-center border border-white/20 mb-8 text-white/60 group-hover:text-white group-hover:border-white/50 transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold tracking-tight uppercase text-white mb-3">{service.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.items.map((item, j) => (
                                        <li key={j} className="flex items-center gap-3 text-xs text-white/40 uppercase tracking-wide">
                                            <ChevronRight className="w-3 h-3 text-white/30" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 border-b border-white/10 bg-zinc-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-4">
                                Engagement Model
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter uppercase mb-4">
                                HOW WE<br />
                                <span className="text-white/60">OPERATE.</span>
                            </h2>
                            <div className="w-12 h-px bg-white" />
                        </div>
                        <div className="lg:col-span-8">
                            <div className="space-y-0 border border-white/10">
                                {[
                                    { step: "01", title: "Intelligence Intake", desc: "We begin with a deep brief — understanding your business, competitors, market position, and growth objectives." },
                                    { step: "02", title: "Landscape Mapping", desc: "Full competitive landscape analysis. We map competitor infrastructure, positioning, pricing, and digital authority." },
                                    { step: "03", title: "Structural Assessment", desc: "We audit your operational systems to surface revenue leaks, automation gaps, and acquisition inefficiencies." },
                                    { step: "04", title: "Strategy Deployment", desc: "We build a precision growth framework — structured action plans, KPIs, and 90-day execution roadmaps." },
                                ].map((p, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="group flex gap-8 p-8 border-b border-white/10 last:border-b-0 hover:bg-white/[0.02] transition-colors"
                                    >
                                        <div className="text-white/20 text-3xl font-bold tracking-tighter shrink-0 w-10">{p.step}</div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2">{p.title}</h4>
                                            <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctrine */}
            <section className="py-24 border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-4">Doctrine</div>
                        <h2 className="text-3xl font-bold tracking-tighter uppercase">OUR PRINCIPLES.</h2>
                        <div className="w-12 h-px bg-white mt-6" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
                        {doctrine.map((d, i) => (
                            <div key={i} className="group relative p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-white/10 hover:bg-white/[0.02] transition-colors last:border-r-0">
                                <div className="absolute top-0 inset-x-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                <div className="text-white/20 text-xs tracking-[0.25em] uppercase font-mono mb-4">{d.num}</div>
                                <h3 className="text-base font-bold tracking-tight uppercase text-white mb-3">{d.label}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{d.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_100%)]" />
                <div className="container mx-auto px-4 sm:px-8 relative z-10 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase mb-6">
                        READY TO GAIN THE<br />
                        <span className="text-white/60">INTELLIGENCE EDGE?</span>
                    </h2>
                    <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg font-light tracking-wide">
                        Book a strategic consultation. We'll audit your market position and deliver a structured intelligence brief within 48 hours.
                    </p>
                    <Button
                        onClick={handleContact}
                        size="lg"
                        className="rounded-none h-16 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-12 font-bold transition-all group border border-white"
                    >
                        INITIATE CONSULTATION
                        <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Button>
                </div>
            </section>
        </div>
        <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    );
}
