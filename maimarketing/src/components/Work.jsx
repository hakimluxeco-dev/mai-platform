import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
    {
        title: "Neon Growth Scale",
        category: "SaaS Marketing",
        stat: "+300% ARR",
        description: "Scaled a B2B SaaS platform from seed to Series A through targeted content and paid acquisition.",
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Velvet E-com",
        category: "E-commerce",
        stat: "12x ROAS",
        description: "Revamped ad creatives and landing pages to unlock massive growth for a luxury fashion brand.",
        color: "from-purple-500 to-pink-400"
    },
    {
        title: "Ironclad Security",
        category: "Lead Gen",
        stat: "+150% Leads",
        description: "Optimized sales funnels and automated nurturing to double qualified lead volume in 90 days.",
        color: "from-emerald-500 to-teal-400"
    }
];

const Work = () => {
    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 md:flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Success Stories</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl text-lg">
                            Real results for real businesses. See how we drive growth through intelligent marketing.
                        </p>
                    </div>
                    <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-brand-cyan font-medium hover:text-brand-blue transition-colors">
                        View Full Portfolio <ArrowUpRight size={20} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-brand-card/50 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/30 transition-all duration-300"
                        >
                            <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                            <div className="p-8">
                                <div className="mb-6">
                                    <span className="text-sm font-medium text-gray-400 mb-2 block">{item.category}</span>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-blue transition-colors">{item.title}</h3>
                                </div>

                                <div className="mb-6">
                                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                        {item.stat}
                                    </div>
                                    <span className="text-sm text-gray-500">Growth Metric</span>
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {item.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-medium text-brand-cyan opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    Read Case Study <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/portfolio" className="inline-flex items-center gap-2 text-brand-cyan font-medium hover:text-brand-blue transition-colors">
                        View Full Portfolio <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Work;
