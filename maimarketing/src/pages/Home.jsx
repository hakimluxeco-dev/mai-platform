import Hero from '../components/Hero';
import Work from '../components/Work';
import Services from '../components/Services';
import UseCases from '../components/UseCases';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO />
            <Hero />
            <Work />
            <Services />
            <UseCases />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Home;
