import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

const allProjects = [
    {
        id: 1,
        title: "Neon Growth Scale",
        category: "SaaS",
        stat: "+300% ARR",
        description: "Scaled a B2B SaaS platform from seed to Series A through targeted content and paid acquisition.",
        color: "from-blue-500 to-cyan-400",
        tags: ["SEO", "PPC", "Content Strategy"],
        challenge: "Stagnant user growth despite product-market fit.",
        solution: "Full-funnel demand generation strategy focused on high-intent keywords."
    },
    {
        id: 2,
        title: "Velvet E-com",
        category: "E-commerce",
        stat: "12x ROAS",
        description: "Revamped ad creatives and landing pages to unlock massive growth for a luxury fashion brand.",
        color: "from-purple-500 to-pink-400",
        tags: ["Social Ads", "CRO", "Email Marketing"],
        challenge: "High cart abandonment and low ad relevance.",
        solution: "AI-personalized ad creatives and dynamic retargeting flows."
    },
    {
        id: 3,
        title: "Ironclad Security",
        category: "Lead Gen",
        stat: "+150% Leads",
        description: "Optimized sales funnels and automated nurturing to double qualified lead volume in 90 days.",
        color: "from-emerald-500 to-teal-400",
        tags: ["Automation", "CRM", "LinkedIn Ads"],
        challenge: "Sales team overwhelmed with unqualified leads.",
        solution: "Automated lead scoring and nurturing system."
    },
    {
        id: 4,
        title: "FinTech Prime",
        category: "SaaS",
        stat: "-40% CAC",
        description: "Lowered acquisition costs while increasing enterprise deal size.",
        color: "from-indigo-500 to-violet-500",
        tags: ["ABM", "Content", "Web Design"],
        challenge: "Rising ad costs and low conversion from enterprise demos.",
        solution: "Account-Based Marketing (ABM) targeting Fortune 500 prospects."
    },
    {
        id: 5,
        title: "Urban Spaces",
        category: "Real Estate",
        stat: "Sold Out",
        description: "Launched a luxury development campaign resulting in 100% occupancy pre-launch.",
        color: "from-orange-500 to-red-400",
        tags: ["Geo-fencing", "Video Ads", "Lead Gen"],
        challenge: "Need for rapid sales velocity in a competitive market.",
        solution: "Hyper-local video campaigns and virtual tour experiences."
    },
    {
        id: 6,
        title: "HealthCore App",
        category: "App Growth",
        stat: "1M+ Users",
        description: "User acquisition campaign for a health & wellness app.",
        color: "from-cyan-400 to-teal-300",
        tags: ["ASO", "Influencer", "Paid Social"],
        challenge: "Low retention and high install costs.",
        solution: "Influencer partnerships and gamified onboarding optimization."
    }
];

const categories = ["All", "SaaS", "E-commerce", "Lead Gen", "Real Estate", "App Growth"];

const Portfolio = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? allProjects
        : allProjects.filter(p => p.category === filter || p.category.includes(filter));



    return (
        <div className="pt-24 min-h-screen bg-brand-dark">
            <SEO
                title="Our Work | Mai Marketing Solutions"
                description="Explore our portfolio of data-driven success stories. See how we've helped businesses achieve over 300% growth through AI marketing."
                canonicalUrl="/marketing/portfolio"
            />
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Work</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A collection of data-driven success stories. We don't just promise growth; we engineer it.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${filter === cat
                                ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/25'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-brand-blue/50 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-brand-card border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/30 transition-all hover:shadow-2xl hover:shadow-brand-blue/5 group"
                        >
                            <div className={`h-3 bg-gradient-to-r ${project.color}`} />
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="text-sm font-medium text-brand-cyan mb-2">{project.category}</div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-brand-blue transition-colors">{project.title}</h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                                        <ArrowUpRight className="text-white" size={20} />
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <div className="text-4xl font-bold text-white mb-2">{project.stat}</div>
                                    <p className="text-gray-400">{project.description}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8 bg-black/20 p-4 rounded-xl border border-white/5">
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">Challenge</div>
                                        <p className="text-sm text-gray-300 leading-tight">{project.challenge}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">Solution</div>
                                        <p className="text-sm text-gray-300 leading-tight">{project.solution}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center bg-gradient-to-br from-brand-card to-brand-dark p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
                    <h2 className="text-3xl font-bold mb-6 relative z-10">Ready to write your success story?</h2>
                    <Button className="relative z-10">Get a Proposal</Button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
