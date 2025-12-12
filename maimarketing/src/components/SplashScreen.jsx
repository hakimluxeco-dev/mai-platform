import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SplashScreen = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800); // Wait for exit animation
        }, 3000); // Total display time

        return () => clearTimeout(timer);
    }, [onComplete]);

    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: 0
            }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-brand-dark flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={isExiting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="relative w-full max-w-lg px-6">
                <svg viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <defs>
                        <linearGradient id="splash-gradient" x1="0" y1="0" x2="100" y2="60" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2563eb" />
                            <stop offset="1" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>

                    {/* M */}
                    <motion.path
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                        d="M10 50V10L30 35L50 10V50"
                        stroke="white"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* A (Arrow) */}
                    <motion.path
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                        d="M65 50L85 10L105 50"
                        stroke="url(#splash-gradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <motion.path
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1, duration: 1.0, ease: "easeInOut" }}
                        d="M72 35H98"
                        stroke="url(#splash-gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />

                    {/* I */}
                    <motion.path
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2, duration: 1.0, ease: "easeInOut" }}
                        d="M120 10V50"
                        stroke="white"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />

                    {/* TEXT */}
                    <motion.g
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                    >
                        <text x="145" y="28" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="16" fill="white" letterSpacing="1">
                            MARKETING
                        </text>
                        <text x="145" y="48" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="14" fill="#94a3b8" letterSpacing="3">
                            SOLUTIONS
                        </text>
                    </motion.g>
                </svg>

                {/* Loading Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    className="absolute -bottom-8 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan origin-left rounded-full mx-6"
                />
            </div>
        </motion.div>
    );
};

export default SplashScreen;
