import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Clock, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useState } from "react";
import { useEffect } from "react";
import SEO from "./SEO";
import DemoModal from "./DemoModal";

const openings = [
    {
        index: "01",
        title: "Digital Marketing Strategist",
        type: "Full-Time",
        location: "Johannesburg, South Africa",
        division: "Marketing Division",
        description: "Design and execute high-impact digital marketing campaigns across Social, SEO, PPC and email channels for our clients.",
        requirements: [
            "3+ years in performance marketing",
            "Proven track record with Meta Ads, Google Ads",
            "Strong data analytics and reporting skills",
            "Experience with marketing automation tools",
        ],
    },
    {
        index: "02",
        title: "Video Production Specialist",
        type: "Full-Time",
        location: "Johannesburg, South Africa",
        division: "Cinematic Division",
        description: "Produce cinematic-grade corporate commercials, product videos, and brand content for high-profile clients.",
        requirements: [
            "Proficiency in Adobe Premiere Pro & After Effects",
            "Experience with 4K filming and colour grading",
            "Strong sense of visual storytelling",
            "Portfolio of past commercial work required",
        ],
    },
    {
        index: "03",
        title: "3D Animation Artist",
        type: "Contract / Full-Time",
        location: "Remote / Johannesburg",
        division: "3D & Motion Division",
        description: "Create stunning 3D product visualizations, architectural renders, and motion graphics for our client portfolio.",
        requirements: [
            "Proficiency in Blender, Cinema 4D or 3ds Max",
            "Experience with product and architectural visualization",
            "Knowledge of real-time rendering (Unreal Engine advantageous)",
            "Strong portfolio of 3D work",
        ],
    },
    {
        index: "04",
        title: "Full-Stack Developer",
        type: "Full-Time",
        location: "Johannesburg / Remote",
        division: "Software Division",
        description: "Build robust, scalable web applications and AI-integrated business systems for our enterprise clients.",
        requirements: [
            "3+ years with React, TypeScript, Node.js",
            "Experience with RESTful APIs and cloud platforms",
            "Understanding of AI/ML integration (advantageous)",
            "Strong problem-solving and system design skills",
        ],
    },
    {
        index: "05",
        title: "Business Development Consultant",
        type: "Full-Time",
        location: "Johannesburg, South Africa",
        division: "Consulting Division",
        description: "Drive revenue growth by identifying and developing strategic partnerships and new business opportunities for our clients.",
        requirements: [
            "3+ years in B2B sales or consulting",
            "Strong network in the South African business landscape",
            "Excellent communication and negotiation skills",
            "Analytical mindset and data-driven approach",
        ],
    },
];

const values = [
    { index: "01", title: "Excellence Over Average", desc: "We do not settle for mediocrity. Every output is precision-engineered." },
    { index: "02", title: "Ownership Mindset", desc: "We treat every project as if it is our own business on the line." },
    { index: "03", title: "Intelligence-Led", desc: "Data and analysis drive every decision we make, not gut feel." },
    { index: "04", title: "Compounding Growth", desc: "We invest in people who invest in themselves — continuous learning is non-negotiable." },
];

export default function Careers() {
    const [expanded, setExpanded] = useState<number | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <SEO
                title="Careers | MAI Business Solutions — Join the Dominance Engine"
                description="Join MAI Business Solutions. We're building an elite team across marketing, video production, 3D animation, software development, and business consulting."
                keywords="careers South Africa, marketing jobs Johannesburg, video production jobs, software developer jobs South Africa, AI jobs, MAI Business Solutions careers"
                canonicalUrl="/careers"
            />
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-24 border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02] pointer-events-none" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl pt-12"
                    >
                        <div className="text-white/30 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">
                            Human Capital // Recruitment
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.0] uppercase mb-8">
                            BUILD THE<br />
                            <span className="text-white/55">DOMINANCE ENGINE</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-10">
                            We hire operators, not spectators. If you are driven by excellence, fluent in your craft, and ready to build at an elite level — we want to talk.
                        </p>
                        <button
                            onClick={() => {
                                const el = document.getElementById("openings");
                                el?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="inline-flex items-center gap-3 bg-white text-black px-10 h-14 text-sm tracking-[0.15em] uppercase font-bold hover:bg-neutral-200 transition-colors group"
                        >
                            View Open Roles
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 border-b border-white/10 bg-zinc-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-14">
                        <div className="text-white/30 text-[10px] font-mono tracking-[0.35em] uppercase mb-4">Culture</div>
                        <h2 className="text-3xl font-bold tracking-tighter uppercase">
                            WHO WE<br /><span className="text-white/55">ARE.</span>
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative p-10 border-r border-white/10 last:border-r-0 hover:bg-white/[0.02] transition-colors"
                            >
                                <div className="absolute top-0 inset-x-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                <div className="text-white/20 text-[10px] font-mono tracking-widest mb-6">{v.index}</div>
                                <h3 className="font-bold text-sm uppercase tracking-tight mb-3">{v.title}</h3>
                                <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section id="openings" className="py-24 border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-14">
                        <div className="text-white/30 text-[10px] font-mono tracking-[0.35em] uppercase mb-4">Open Positions</div>
                        <h2 className="text-3xl font-bold tracking-tighter uppercase">
                            CURRENT<br /><span className="text-white/55">OPENINGS.</span>
                        </h2>
                    </div>

                    <div className="border-t border-white/10">
                        {openings.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="border-b border-white/10"
                            >
                                <button
                                    onClick={() => setExpanded(expanded === i ? null : i)}
                                    className="w-full text-left group"
                                >
                                    <div className="flex items-start sm:items-center justify-between gap-4 py-8 px-2 hover:bg-white/[0.02] transition-colors px-4 sm:px-6">
                                        <div className="flex items-start sm:items-center gap-6 sm:gap-8 flex-1 min-w-0">
                                            <span className="text-white/20 text-[10px] font-mono tracking-widest shrink-0 mt-1 sm:mt-0">{job.index}</span>
                                            <div className="min-w-0">
                                                <div className="font-bold text-base sm:text-lg tracking-tight uppercase truncate">{job.title}</div>
                                                <div className="flex flex-wrap items-center gap-3 mt-2">
                                                    <span className="flex items-center gap-1.5 text-white/40 text-xs">
                                                        <Briefcase className="w-3 h-3" />{job.division}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 text-white/40 text-xs">
                                                        <MapPin className="w-3 h-3" />{job.location}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 text-white/40 text-xs">
                                                        <Clock className="w-3 h-3" />{job.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRight
                                            className={`w-5 h-5 text-white/40 shrink-0 transition-transform duration-300 ${expanded === i ? "rotate-90" : ""}`}
                                        />
                                    </div>
                                </button>

                                {expanded === i && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-4 sm:px-6 pb-10 pl-16 sm:pl-20"
                                    >
                                        <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-2xl">{job.description}</p>
                                        <div className="mb-8">
                                            <div className="text-white/30 text-[10px] font-mono tracking-widest uppercase mb-4">Requirements</div>
                                            <ul className="space-y-2">
                                                {job.requirements.map((req, j) => (
                                                    <li key={j} className="flex items-start gap-3 text-sm text-white/60">
                                                        <ChevronRight className="w-3 h-3 text-white/25 mt-0.5 shrink-0" />
                                                        {req}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Button
                                            onClick={() => setModalOpen(true)}
                                            className="rounded-none h-12 bg-white text-black hover:bg-neutral-200 text-xs tracking-[0.15em] px-8 font-bold transition-all group border border-white"
                                        >
                                            APPLY FOR THIS ROLE
                                            <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Spontaneous application CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0,transparent_70%)]" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="border border-white/10 p-12 sm:p-20 max-w-4xl mx-auto text-center relative">
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-white" />
                        <div className="text-white/30 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">Spontaneous Applications</div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter uppercase mb-4">
                            DON'T SEE YOUR<br />
                            <span className="text-white/55">ROLE LISTED?</span>
                        </h2>
                        <p className="text-white/50 max-w-md mx-auto mb-10 leading-relaxed">
                            If you are elite at what you do, reach out anyway. We are always looking for exceptional operators.
                        </p>
                        <Button
                            onClick={() => setModalOpen(true)}
                            className="rounded-none h-14 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-12 font-bold transition-all group border border-white"
                        >
                            SEND YOUR PORTFOLIO
                            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />

            <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
}
