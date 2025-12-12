import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
    const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95";

    const variants = {
        primary: "bg-brand-gradient text-white shadow-lg shadow-brand-blue/30 hover:shadow-brand-cyan/40 hover:-translate-y-0.5",
        outline: "border-2 border-brand-blue text-white hover:bg-brand-blue/10",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default Button;
