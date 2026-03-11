// Deployment trigger: Public reposition nudge
import { motion } from "framer-motion";
import SEO from "./SEO";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Brands from "./Brands";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
});

function Home() {
  return (
    <motion.div
      className="w-full min-h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="MAI Business Solutions | Engineered for Dominance — South Africa"
        description="MAI Business Solutions builds elite digital infrastructure for ambitious South African enterprises — precision marketing, cinematic video production, 3D animation, custom software, and intelligent automation."
        canonicalUrl="/"
      />

      <motion.div {...fadeIn(0)}>
        <Navbar />
      </motion.div>

      <motion.div {...fadeIn(0.1)}>
        <Hero />
      </motion.div>

      <motion.div {...fadeIn(0.3)}>
        <Products />
      </motion.div>

      <motion.div {...fadeIn(0.4)}>
        <Testimonials />
      </motion.div>

      <motion.div {...fadeIn(0.45)}>
        <Brands />
      </motion.div>

      <motion.div {...fadeIn(0.5)}>
        <Contact />
      </motion.div>

      <motion.div {...fadeIn(0.65)}>
        <Footer />
      </motion.div>
    </motion.div>
  );
}

export default Home;