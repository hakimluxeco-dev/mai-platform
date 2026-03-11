import { motion } from "framer-motion";
import { ArrowRight, UserPlus, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";
import { Button } from "./ui/button";

export default function PackageSelection() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const selectionCards = [
        {
            title: "STRATEGIC CONSULTATION",
            subtitle: "General Inquiry",
            description: "Request a custom assessment, project quote, or general information regarding our architectural business solutions.",
            icon: <MessageSquare className="w-8 h-8" />,
            action: () => navigate("/#contact"),
            buttonLabel: "INITIATE INQUIRY",
            link: "/#contact",
            external: false,
            accent: "from-blue-600/20 to-transparent",
            iconColor: "text-blue-500"
        },
        {
            title: "CLIENT PORTAL ACCESS",
            subtitle: "Direct Infrastructure",
            description: "Deploy services immediately. Create your enterprise account to select packages, manage assets, and track performance metrics.",
            icon: <UserPlus className="w-8 h-8" />,
            action: () => window.location.href = "https://clientzone.maisolutions.co.za/signup",
            buttonLabel: "CREATE ACCOUNT",
            link: "https://clientzone.maisolutions.co.za/signup",
            external: true,
            accent: "from-cyan-500/20 to-transparent",
            iconColor: "text-cyan-400"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <SEO
                title="Get Started | MAI Business Solutions"
                description="Choose your path to enterprise growth. Initiate a consultation or deploy services directly via our Client Portal."
                keywords="business solutions, client portal, signup, consultation"
                canonicalUrl="/get-started"
            />
            <Navbar />

            <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
                {/* Visual Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl mb-20"
                    >
                        <div className="text-white/30 text-[10px] font-mono tracking-[0.35em] uppercase mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-white/20" /> Protocol // Selection
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[0.95] uppercase mb-8">
                            CHOOSE YOUR<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400">DEPLOYMENT PATH.</span>
                        </h1>
                        <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed font-light tracking-wide italic border-l border-white/10 pl-6">
                            Select the entry point that aligns with your operational objectives.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-24">
                        {selectionCards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 + idx * 0.2 }}
                                className="group relative p-12 lg:p-16 bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden rounded-none"
                            >
                                {/* Interactive Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600/0 via-blue-500 to-cyan-400/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                                <div className="flex flex-col h-full relative z-10">
                                    <div className={`mb-10 ${card.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                                        {card.icon}
                                    </div>

                                    <div className="mb-auto">
                                        <div className="text-white/30 text-[10px] font-mono tracking-[0.35em] uppercase mb-4 flex items-center gap-2">
                                            <span className="w-4 h-px bg-white/10" /> {card.subtitle}
                                        </div>
                                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter uppercase mb-6 group-hover:text-white transition-colors">
                                            {card.title}
                                        </h2>
                                        <p className="text-white/50 leading-relaxed mb-12 max-w-sm font-light">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="pt-8 border-t border-white/5">
                                        {card.external ? (
                                            <a
                                                href={card.link}
                                                className="inline-flex items-center gap-4 text-xs tracking-[0.3em] uppercase font-bold group/btn"
                                            >
                                                <span className="relative">
                                                    {card.buttonLabel}
                                                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/btn:w-full transition-all duration-500" />
                                                </span>
                                                <ArrowRight className={`w-4 h-4 group-hover/btn:translate-x-2 transition-transform ${card.iconColor}`} />
                                            </a>
                                        ) : (
                                            <Link
                                                to={card.link}
                                                className="inline-flex items-center gap-4 text-xs tracking-[0.3em] uppercase font-bold group/btn"
                                            >
                                                <span className="relative">
                                                    {card.buttonLabel}
                                                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/btn:w-full transition-all duration-500" />
                                                </span>
                                                <ArrowRight className={`w-4 h-4 group-hover/btn:translate-x-2 transition-transform ${card.iconColor}`} />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Security Trust Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-12 py-12 border-t border-white/10 opacity-40">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-4 h-4 text-white" />
                            <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Enterprise Security Standard</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-white" />
                            <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Instant Deployment Logic</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
