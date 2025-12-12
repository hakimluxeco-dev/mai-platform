const Footer = () => {
    return (
        <footer className="py-8 bg-black/20 border-t border-white/5 text-center text-gray-500 text-sm">
            <p>
                &copy; {new Date().getFullYear()} <a href="/marketing" className="hover:text-white transition-colors">Mai Marketing Solutions</a> & <a href="/" className="hover:text-white transition-colors">Mai Business Solutions</a>, All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
