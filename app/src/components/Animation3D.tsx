import { ArrowLeft, Play, Layers, Box, Sparkles, Monitor, Camera, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Animation3D() {
    const navigate = useNavigate();
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                access_key: "5a02c114-65b3-41ad-b0de-a18048ad3dec",
                ...formData,
                service: "3D Animations",
                subject: `3D Quote Request from ${formData.name}`,
            }),
        });
        setSending(false);
        setSent(true);
    };

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-px bg-white/10" />

                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-white/40 hover:text-white text-sm tracking-widest uppercase mb-12 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back
                    </button>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left — copy */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-8">
                                Creative Technology // Active
                            </div>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1] mb-8">
                                3D ANIMATION<br />
                                <span className="text-white/60">&amp; MODELS.</span>
                            </h1>
                            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
                                We design, rig, texture, and animate high-fidelity 3D assets purpose-built for commercial campaigns,
                                product showcases, architectural visualizations, and interactive digital experiences.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    onClick={() => setIsContactOpen(true)}
                                    className="rounded-none h-14 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-10 font-bold transition-all"
                                >
                                    GET A QUOTE
                                </Button>
                            </div>
                        </motion.div>

                        {/* Right — 3D model viewer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-[400px] sm:h-[550px] lg:h-[650px] w-full relative"
                        >
                            {/* @ts-ignore */}
                            <model-viewer
                                src="/models/scene.glb"
                                alt="MAI 3D Robot Model"
                                autoplay
                                camera-controls
                                shadow-intensity="1"
                                exposure="0.85"
                                environment-image="neutral"
                                loading="eager"
                                reveal="auto"
                                style={{ width: "100%", height: "100%", background: "transparent" }}
                            >
                                <div slot="poster" style={{
                                    width: '100%', height: '100%',
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'center', justifyContent: 'center',
                                    background: 'transparent', gap: '16px'
                                }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%',
                                        border: '2px solid rgba(255,255,255,0.1)',
                                        borderTop: '2px solid rgba(255,255,255,0.6)',
                                        animation: 'spin 1s linear infinite'
                                    }} />
                                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                                        Loading Model...
                                    </p>
                                </div>
                            </model-viewer>
                            <p className="text-white/30 text-xs text-center tracking-widest uppercase mt-2">
                                Drag to rotate · Scroll to zoom
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 border-t border-white/10">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-6">
                            What We Deliver
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">
                            FULL-SPECTRUM<br />
                            <span className="text-white/60">3D SERVICES.</span>
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
                        {[
                            {
                                icon: <Box className="w-6 h-6" />,
                                title: "3D Modelling",
                                desc: "High-poly and low-poly asset creation for products, characters, environments, and architectural spaces.",
                                tags: ["Hard Surface", "Organic", "Architectural", "Product Vis"],
                            },
                            {
                                icon: <Play className="w-6 h-6" />,
                                title: "Character Animation",
                                desc: "Rigged and animated characters with fluid motion capture–quality movement for commercials and interactive media.",
                                tags: ["Walk Cycles", "Facial Rigs", "Physics Sims", "Motion Paths"],
                            },
                            {
                                icon: <Layers className="w-6 h-6" />,
                                title: "Texturing & Shading",
                                desc: "PBR-accurate materials, UV unwrapping, and photorealistic texturing for print, film, and real-time engines.",
                                tags: ["PBR Materials", "UV Mapping", "Substance Painter", "Blender Shader"],
                            },
                            {
                                icon: <Camera className="w-6 h-6" />,
                                title: "Cinematic Renders",
                                desc: "Studio-quality cinematic stills and turntable animations ready for advertising and social campaigns.",
                                tags: ["Product Renders", "360° Turntables", "Hero Shots", "Key Art"],
                            },
                            {
                                icon: <Monitor className="w-6 h-6" />,
                                title: "Real-Time 3D",
                                desc: "WebGL and Spline-powered interactive 3D elements embedded directly into websites and digital experiences.",
                                tags: ["WebGL", "Three.js", "Spline", "GLTF Optimization"],
                            },
                            {
                                icon: <Sparkles className="w-6 h-6" />,
                                title: "VFX & Motion Graphics",
                                desc: "Particle systems, simulations, and motion graphics layered onto live footage for high-impact commercial spots.",
                                tags: ["Particles", "Fluid Sim", "Compositing", "After Effects"],
                            },
                            {
                                icon: <Play className="w-6 h-6" />,
                                title: "Short Film Animations",
                                desc: "Fully animated short-form narratives — from concept and storyboarding to final render — crafted for festivals, brand storytelling, and digital campaigns.",
                                tags: ["Storyboarding", "Scene Layout", "Full Render", "Voice & Sound"],
                            },
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="group border-b border-r border-white/10 last:border-r-0 [&:nth-child(3n)]:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 p-10 hover:bg-white/[0.02] transition-colors"
                            >
                                <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors text-white/60">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold tracking-tight uppercase mb-3">{service.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed mb-6">{service.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((t, idx) => (
                                        <span key={idx} className="text-[10px] tracking-widest uppercase border border-white/15 text-white/40 px-2 py-1">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 border-t border-white/10">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4">
                            READY TO BRING<br />
                            <span className="text-white/60">YOUR VISION TO LIFE?</span>
                        </h2>
                        <p className="text-white/50 text-sm max-w-md">
                            Share your brief and we'll scope a 3D solution that fits your timeline and budget.
                        </p>
                    </div>
                    <Button
                        onClick={() => navigate("/")}
                        size="lg"
                        className="rounded-none h-16 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-16 font-bold transition-all shrink-0"
                    >
                        START A PROJECT →
                    </Button>
                </div>
            </section>

            <Footer />

            {/* Contact Modal */}
            {isContactOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => { setIsContactOpen(false); setSent(false); }} />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-10 bg-black border border-white/15 p-8 sm:p-12 w-full max-w-lg"
                    >
                        <button onClick={() => { setIsContactOpen(false); setSent(false); }} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>

                        {sent ? (
                            <div className="text-center py-8">
                                <h2 className="text-2xl font-bold tracking-tight mb-3">QUOTE REQUEST SENT</h2>
                                <p className="text-white/60 text-sm">We'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <>
                                <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-white pl-4 py-1 mb-6">3D Animations // Quote</div>
                                <h2 className="text-3xl font-bold tracking-tighter mb-8">GET A QUOTE</h2>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-[10px] tracking-widest uppercase text-white/50 mb-2">Name *</label>
                                            <input required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} placeholder="Your name" className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/30 text-sm px-3 h-11 outline-none focus:border-white transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] tracking-widest uppercase text-white/50 mb-2">Email *</label>
                                            <input required type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} placeholder="your@email.com" className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/30 text-sm px-3 h-11 outline-none focus:border-white transition-colors" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] tracking-widest uppercase text-white/50 mb-2">Company</label>
                                        <input value={formData.company} onChange={e => setFormData(p => ({ ...p, company: e.target.value }))} placeholder="Company name" className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/30 text-sm px-3 h-11 outline-none focus:border-white transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] tracking-widest uppercase text-white/50 mb-2">Project Brief *</label>
                                        <textarea required rows={4} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} placeholder="Describe your 3D project..." className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/30 text-sm px-3 py-3 outline-none focus:border-white transition-colors resize-none" />
                                    </div>
                                    <Button type="submit" disabled={sending} className="w-full rounded-none h-12 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] font-bold transition-all">
                                        {sending ? "SENDING..." : "SEND REQUEST →"}
                                    </Button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </div>
    );
}
