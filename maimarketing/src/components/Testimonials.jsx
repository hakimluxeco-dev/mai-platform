import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CMO @ TechFlow",
        text: "MAI Marketing transformed our lead gen pipeline. The AI-driven approach isn't just a buzzword here; it actually delivers 10x quality leads.",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        name: "David Chen",
        role: "Founder @ UrbanWear",
        text: "The creative team is unmatched. They perfectly captured our brand voice while using data to scale our ROAS to levels we didn't think possible.",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        name: "Elena Rodriguez",
        role: "Director @ EstatePrime",
        text: "Finally, an agency that understands ROI. We stopped wasting budget on vanity metrics and started seeing real revenue growth within month one.",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        name: "Marcus Johnson",
        role: "VP Sales @ SoftScale",
        text: "Their strategic insights helped us pivot our messaging and unlock a completely new enterprise market segment.",
        image: "https://randomuser.me/api/portraits/men/4.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-brand-dark overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">Industry Leaders</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Don't just take our word for it. Here's what our partners say.
                </p>
            </div>

            <div className="relative w-full mask-gradient-horizontal">
                <div className="flex overflow-hidden group">
                    <motion.div
                        className="flex gap-6 animate-scroll pl-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <div
                                key={index}
                                className="w-[400px] flex-shrink-0 p-8 bg-brand-card rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-colors"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full border-2 border-brand-blue/20"
                                    />
                                    <div>
                                        <h4 className="font-bold text-white">{item.name}</h4>
                                        <span className="text-sm text-gray-500">{item.role}</span>
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-relaxed italic">
                                    "{item.text}"
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
