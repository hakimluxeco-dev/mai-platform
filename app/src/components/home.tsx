import SEO from "./SEO";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-950">
      <SEO
        title="Mai Business Solutions | AI Systems South Africa"
        description="Transform your business with intelligent automation, custom software, and AI-powered systems. The leading business efficiency partner in South Africa."
        canonicalUrl=""
      />

      <Navbar />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;