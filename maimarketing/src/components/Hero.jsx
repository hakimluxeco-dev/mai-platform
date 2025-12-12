import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Hero Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                            <span className="text-sm font-medium text-gray-300">The Future of Digital Marketing</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                            Scale Your Brand <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                                With Intelligence
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
                            We combine data-driven strategies with premium creativity to deliver measurable growth for forward-thinking businesses.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button className="flex items-center justify-center gap-2 px-8">
                                Start Growing <ArrowRight size={20} />
                            </Button>
                            <Link to="/portfolio" className="px-8 flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white font-medium rounded-xl transition-colors h-12">
                                View Our Work
                            </Link>
                        </div>

                        <div className="flex items-center gap-8 text-sm text-gray-400 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-brand-blue" />
                                <span>ROI Focused</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-brand-cyan" />
                                <span>AI-Powered</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-purple-500" />
                                <span>Premium Quality</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* NEW: Abstract Visual / Graphic Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Main Dashboard Card */}
                        <div className="relative z-10 bg-brand-card/90 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl w-full max-w-lg mx-auto overflow-hidden">
                            {/* Card Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -z-10" />

                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Campaign Performance</h3>
                                    <p className="text-gray-400 text-sm">Real-time Analytics</p>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-cyan font-medium flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                                    Live
                                </div>
                            </div>

                            {/* Main Split Layout */}
                            <div className="flex gap-4 mb-8">
                                {/* Left Col - Big Metric */}
                                <div className="flex-1 bg-brand-dark/50 rounded-xl p-4 border border-white/5">
                                    <div className="text-gray-400 text-xs mb-1">Total Revenue (ZAR)</div>
                                    <div className="text-2xl font-bold text-white mb-2">R 689,200</div>
                                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-[70%] bg-brand-blue rounded-full" />
                                    </div>
                                    <div className="mt-2 text-xs text-emerald-400">+12.5% vs last month</div>
                                </div>
                                {/* Right Col - Mini Sparkline */}
                                <div className="w-1/3 bg-brand-dark/50 rounded-xl p-4 border border-white/5 flex flex-col justify-between">
                                    <div className="text-gray-400 text-xs">Ad Spend</div>
                                    <div className="text-white font-bold">R 124.5k</div>
                                    <div className="flex gap-1 items-end h-8">
                                        <div className="w-full bg-brand-cyan/20 h-[40%] rounded-sm" />
                                        <div className="w-full bg-brand-cyan/40 h-[70%] rounded-sm" />
                                        <div className="w-full bg-brand-cyan/60 h-[50%] rounded-sm" />
                                        <div className="w-full bg-brand-cyan h-[90%] rounded-sm" />
                                    </div>
                                </div>
                            </div>

                            {/* Main Chart Area - Combo Line/Bar */}
                            <div className="mb-6">
                                <div className="flex justify-between items-end mb-4">
                                    <div className="text-sm font-medium text-gray-300">Traffic vs Conversion</div>
                                </div>
                                <div className="h-48 w-full relative">
                                    {/* Grid Lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between z-0">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="h-px bg-white/5 w-full" />
                                        ))}
                                    </div>

                                    <div className="absolute inset-0 z-10 flex items-end justify-between px-2">
                                        {/* Mock Bars */}
                                        {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                                            <div key={i} className="w-3 bg-brand-blue/20 rounded-t-sm hover:bg-brand-blue/40 transition-colors" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>

                                    {/* Line Chart Overlay */}
                                    <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" preserveAspectRatio="none">
                                        <path
                                            d="M10 120 C 50 100, 100 80, 150 50 S 250 80, 300 40 S 400 20, 480 10"
                                            stroke="#06b6d4"
                                            strokeWidth="3"
                                            fill="none"
                                            filter="drop-shadow(0 4px 6px rgba(6,182,212,0.3))"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Footer Stats */}
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold text-xs">
                                        +24%
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        Growth vs <br /> last month
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xs">
                                        98%
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        Client <br /> Satisfaction
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element - AI Insight */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-12 bottom-32 bg-brand-card border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md z-20 max-w-[200px]"
                        >
                            <div className="flex gap-3 mb-2">
                                <div className="w-2 h-2 rounded-full bg-brand-cyan mt-1.5" />
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    <span className="font-bold text-white">AI Insight:</span> Reduce CPA by 15% by shifting budget to mobile video ads.
                                </p>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <div className="px-2 py-1 rounded bg-brand-blue/20 text-[10px] text-brand-blue font-medium">Apply Fix</div>
                                <div className="px-2 py-1 rounded bg-white/5 text-[10px] text-gray-400">Dismiss</div>
                            </div>
                        </motion.div>

                        {/* Decorative Elements around card */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-cyan/20 rounded-full blur-xl animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-blue/20 rounded-full blur-xl animate-pulse delay-700" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
