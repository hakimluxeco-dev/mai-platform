import { motion } from 'framer-motion';
import Button from './Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Let's Create Something <br /> <span className="text-brand-cyan">Extraordinary</span></h2>
                        <p className="text-gray-400 mb-10 text-lg">
                            Ready to take your marketing to the next level? Contact us today for a free consultation.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-blue">
                                    <Mail />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Email Us</div>
                                    <div className="font-medium">contact@maimarketing.co.za</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-cyan">
                                    <Phone />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Call Us</div>
                                    <div className="font-medium">+27 12 345 6789</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-brand-dark border border-white/10 focus:border-brand-blue focus:outline-none transition-colors text-white placeholder-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-brand-dark border border-white/10 focus:border-brand-blue focus:outline-none transition-colors text-white placeholder-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-brand-dark border border-white/10 focus:border-brand-blue focus:outline-none transition-colors text-white placeholder-gray-600"
                                    placeholder="Tell us about your project..."
                                />
                            </div>
                            <Button className="w-full">Send Message</Button>
                        </div>
                    </motion.form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
