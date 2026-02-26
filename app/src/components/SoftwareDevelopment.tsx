import { motion } from "framer-motion";
import { Code, Smartphone, Database, ArrowRight, Laptop } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import SEO from "./SEO";

export default function SoftwareDevelopment() {
    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <SEO title="Custom Software Development South Africa | MAI Business Solutions" description="Custom-built web applications, mobile apps, and CRMs engineered for performance, security, and scale. Enterprise software development in South Africa." keywords="custom software development South Africa, web app development Johannesburg, mobile app development, CRM development, custom API, enterprise software, MAI Software" canonicalUrl="/software-development" />
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
                            Division 03
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white mb-8">
                            SOFTWARE<br />
                            <span className="text-white/60">ARCHITECTURE.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed font-light tracking-wide">
                            Custom-built web applications, mobile apps, and CRMs engineered for performance, security, and enterprise scale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <a href="/#contact" className="inline-block">
                                <Button className="rounded-none h-16 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-10 font-bold transition-all group border border-white">
                                    INITIALIZE BUILD <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid - Brutalist */}
            <section className="py-24 bg-black relative">
                <div className="absolute inset-y-0 left-1/3 w-px bg-white/10 hidden md:block"></div>
                <div className="absolute inset-y-0 right-1/3 w-px bg-white/10 hidden md:block"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-3 gap-0 border border-white/10">
                        {[
                            { icon: Laptop, title: "Custom Web Apps", desc: "Scalable, high-performance web applications specifically tailored to your complex business workflows.", delay: 0 },
                            { icon: Smartphone, title: "Mobile Development", desc: "Native and cross-platform mobile experiences for iOS and Android, ensuring seamless user engagement.", delay: 0.1 },
                            { icon: Database, title: "Enterprise CRMs", desc: "Robust data management and customer relationship systems built to integrate and scale organically.", delay: 0.2 }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: feature.delay }}
                                className="bg-transparent p-10 lg:p-12 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 last:border-b-0 hover:bg-white/[0.02] transition-colors group relative overflow-hidden"
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

            <Footer />
        </div>
    );
}
