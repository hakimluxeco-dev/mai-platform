import { motion } from "framer-motion";
import { Cpu, MessageCircle, Users, Package, FileText, Phone, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import SEO from "./SEO";

export default function AISystems() {
    const aiProducts = [
        {
            id: "whatsapp-assistant",
            title: "WhatsApp Assistant",
            description: "24/7 automated sales assistant that engages leads instantly and accelerates closing.",
            icon: <MessageCircle className="w-6 h-6" />,
        },
        {
            id: "invoice-manager",
            title: "Invoice Manager",
            description: "Intelligently automate your invoicing workflows and smart document processing.",
            icon: <FileText className="w-6 h-6" />,
        },
        {
            id: "lead-machine",
            title: "Lead Machine",
            description: "Transform your sales pipeline with scalable, intelligent lead generation systems.",
            icon: <Users className="w-6 h-6" />,
        },
        {
            id: "stock-manager",
            title: "Stock Manager",
            description: "Implement predictive analytics and real-time stock monitoring to prevent stockouts.",
            icon: <Package className="w-6 h-6" />,
        },
        {
            id: "receptionist",
            title: "Virtual Receptionist",
            description: "Reliable 24/7 automated phone system for professional call answering and appointment booking.",
            icon: <Phone className="w-6 h-6" />,
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <SEO title="AI Systems & Business Automation South Africa | MAI Business Solutions" description="Intelligent AI-powered automation systems for South African businesses. WhatsApp assistants, automated invoicing, lead generation bots, virtual receptionists and custom AI workflows." keywords="AI systems South Africa, WhatsApp chatbot, business automation Johannesburg, AI receptionist, automated invoicing, lead generation bot, AI assistants South Africa, MAI AI" canonicalUrl="/ai-systems" />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-black border-b border-white/10">
                {/* Structural Architectural Grid Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-8">
                            Division 04
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white mb-8">
                            AUTONOMOUS<br />
                            <span className="text-white/60">INTELLIGENCE.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed font-light tracking-wide">
                            Automate core operations, scale efficiency, and enhance customer engagement with our suite of specialized, enterprise-grade AI tools.
                        </p>

                    </motion.div>
                </div>
            </section>

            {/* AI Products Grid - Brutalist */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
                        {aiProducts.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="group relative border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0 last:border-b-0 sm:[&:nth-child(even)]:border-r-0 lg:[&:nth-child(even)]:border-r lg:[&:nth-child(3n)]:border-r-0 sm:[&:nth-child(1)]:border-b sm:[&:nth-child(2)]:border-b lg:[&:nth-child(1)]:border-b lg:[&:nth-child(2)]:border-b lg:[&:nth-child(3)]:border-b bg-transparent hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden"
                            >
                                <Link to={`/${product.id}`} className="block h-full p-10 lg:p-12">
                                    <div className="absolute top-0 inset-x-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>

                                    <div className="w-12 h-12 flex items-center justify-center border border-white/20 mb-8 group-hover:bg-white transition-colors duration-500">
                                        <div className="text-white group-hover:text-black transition-colors duration-500">{product.icon}</div>
                                    </div>

                                    <h3 className="text-xl tracking-tight font-bold text-white mb-4 uppercase">{product.title}</h3>
                                    <p className="text-white/60 leading-relaxed font-light mb-8">
                                        {product.description}
                                    </p>

                                    <span className="text-white text-xs tracking-widest uppercase font-bold flex items-center group-hover:tracking-[0.2em] transition-all duration-300">
                                        EXPLORE <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
