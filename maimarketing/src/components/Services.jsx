import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Globe, PenTool, Megaphone, Target, Smartphone, ArrowUpRight, X, CheckCircle2 } from 'lucide-react';

const services = [
    {
        icon: <Megaphone className="w-6 h-6 text-brand-blue" />,
        title: "Social Media",
        description: "Data-led organic and paid social campaigns that build community and drive engagement.",
        features: [
            "Community Management",
            "Influencer Partnerships",
            "Viral Content Creation",
            "Social Listening & Sentiment Analysis"
        ]
    },
    {
        icon: <BarChart className="w-6 h-6 text-brand-cyan" />,
        title: "SEO & Performance",
        description: "Technical SEO and performance marketing to ensure your brand is seen by the right people.",
        features: [
            "Technical Site Audits",
            "Keyword Strategy & Mapping",
            "Link Building Authority",
            "Core Web Vitals Optimization"
        ]
    },
    {
        icon: <PenTool className="w-6 h-6 text-purple-500" />,
        title: "Content Strategy",
        description: "Strategic storytelling and asset creation that aligns with your key business objectives.",
        features: [
            "Brand Voice Development",
            "Video Production & Editing",
            "Blog & Whitepaper Writing",
            "Email Marketing Flows"
        ]
    },
    {
        icon: <Target className="w-6 h-6 text-pink-500" />,
        title: "Paid Acquisition",
        description: "High-ROI PPC campaigns across Google, Meta, and LinkedIn designed for scale.",
        features: [
            "Multi-channel Media Buying",
            "A/B Testing Creatives",
            "Retargeting funnels",
            "Conversion Rate Optimization (CRO)"
        ]
    },
    {
        icon: <Globe className="w-6 h-6 text-green-400" />,
        title: "Digital Experience",
        description: "Web design and development focused on speed, accessibility, and conversion rates.",
        features: [
            "UX/UI Design Systems",
            "Headless CMS Integration",
            "E-commerce Development (Shopify/Woo)",
            "Web3 & Interactive Experiences"
        ]
    },
    {
        icon: <Smartphone className="w-6 h-6 text-yellow-400" />,
        title: "App Growth",
        description: "End-to-end mobile app marketing from user acquisition to retention strategies.",
        features: [
            "App Store Optimization (ASO)",
            "User Acquisition (UA) Campaigns",
            "In-app Event Tracking",
            "Push Notification Strategy"
        ]
    }
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id="services" className="py-24 bg-brand-dark relative">
            {/* Subtle Grid overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
                    >
                        Capabilities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg"
                    >
                        We leverage a full spectrum of digital disciplines to solve complex business challenges.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setSelectedService(service)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative p-8 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/5 overflow-hidden cursor-pointer"
                        >
                            {/* Hover Gradient Bloom */}
                            <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl group-hover:bg-brand-blue/20 transition-colors" />

                            <div className="relative z-10">
                                <div className="mb-6 p-3 rounded-lg bg-white/5 w-fit border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                                    {service.title}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-blue" />
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Detailed Modal */}
            <AnimatePresence>
                {selectedService && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        />
                        {/* Modal Card */}
                        <motion.div
                            layoutId={`service-${selectedService.title}`}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-0 m-auto w-[90%] max-w-2xl h-fit max-h-[90vh] bg-brand-card border border-white/10 rounded-3xl p-8 shadow-2xl z-[70] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-brand-dark border border-white/5">
                                    {selectedService.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold">{selectedService.title}</h3>
                            </div>

                            <p className="text-lg text-gray-300 mb-8 leading-relaxed border-b border-white/5 pb-8">
                                {selectedService.description}
                            </p>

                            <div>
                                <h4 className="text-sm font-semibold text-brand-cyan mb-4 uppercase tracking-wider">Core Capabilities</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {selectedService.features && selectedService.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                            <CheckCircle2 size={18} className="text-brand-blue mt-0.5" />
                                            <span className="text-gray-300 text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
                                <button className="flex-1 bg-brand-blue text-white font-semibold py-3 rounded-xl hover:bg-blue-600 transition-colors">
                                    Book Consultation
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
