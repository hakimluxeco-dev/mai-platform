const Footer = () => {
    return (
        <footer className="py-8 bg-black/20 border-t border-white/5 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} MAI MARKETING SOLUTIONS. All rights reserved.</p>
            <p className="mt-2">Sister company of <a href="https://www.maisolutions.co.za" className="text-brand-blue hover:text-brand-cyan transition-colors">MAI Business Solutions</a></p>
        </footer>
    );
};

export default Footer;
