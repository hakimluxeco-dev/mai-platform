import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-950">
      <Helmet>
        <title>MAI Business Solutions - Smart Business Automation</title>
        <meta name="description" content="Transform your business with intelligent automation solutions. Invoice Manager, Lead Machine, Stock Manager, and Virtual Receptionist - empowering businesses with smart technology." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maisolutions.co.za" />
        <meta property="og:site_name" content="MAI Business Solutions" />
        <meta property="og:title" content="MAI Business Solutions - Smart Business Automation" />
        <meta property="og:description" content="Transform your business with intelligent automation solutions. Invoice Manager, Lead Machine, Stock Manager, and Virtual Receptionist - empowering businesses with smart technology." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.maisolutions.co.za" />
        <meta property="twitter:title" content="MAI Business Solutions - Smart Business Automation" />
        <meta property="twitter:description" content="Transform your business with intelligent automation solutions. Invoice Manager, Lead Machine, Stock Manager, and Virtual Receptionist - empowering businesses with smart technology." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80" />
      </Helmet>

      <Navbar />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;