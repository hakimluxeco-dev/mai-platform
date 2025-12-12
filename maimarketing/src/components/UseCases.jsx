import { motion } from 'framer-motion';
import { ShoppingBag, Building2, Smartphone, TrendingUp } from 'lucide-react';

const industries = [
    {
        icon: ShoppingBag,
        title: "E-Commerce",
        description: "Scale faster with AI-optimized ad creatives and personalized shopping experiences.",
        features: ["Dynamic Product Ads", "Cart Recovery AI", "LTV Optimization"]
    },
    {
        icon: Building2,
        title: "Real Estate",
        description: "Generate high-intent leads and automate follow-ups to close more deals.",
        features: ["Geo-fencing Ads", "Lead Scoring", "Automated Nurturing"]
    },
    {
        icon: Smartphone,
        title: "SaaS & App",
        description: "Reduce CAC and increase retention with data-driven user acquisition strategies.",
        features: ["Event-Based Targeting", "Onboarding Flows", "Churn Prediction"]
    },
    {
        icon: TrendingUp,
        title: "B2B Services",
        description: "Position your brand as an authority and fill your pipeline with qualified demos.",
        features: ["LinkedIn ABM", "Content Syndication", "Pipeline Analytics"]
    }
];

const UseCases = () => {
    return (
        <section className="py-24 bg-brand-card/20 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Tailored for <span className="text-brand-cyan">Your Growth</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Specialized strategies for high-impact industries.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-brand-dark p-6 rounded-2xl border border-white/5 hover:border-brand-cyan/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-cyan/5 group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20 transition-colors">
                                <item.icon className="text-white group-hover:text-brand-cyan transition-colors" size={24} />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {item.description}
                            </p>

                            <ul className="space-y-2">
                                {item.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-gray-500">
                                        <div className="w-1 h-1 bg-brand-cyan rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
