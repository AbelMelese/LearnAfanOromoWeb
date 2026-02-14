import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '/#features' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3 group">
                    <img src="/logo.png" alt="Learn Afan Oromo" className="w-10 h-10 rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300" />
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-text-dark)] to-[var(--color-primary)]">
                        Learn Afan Oromo
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[var(--color-text-gray)] hover:text-[var(--color-primary)] font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#" // Placeholder for download link
                        className="px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-orange)] transition-all duration-300 shadow-lg shadow-green-100 hover:shadow-orange-100 transform hover:-translate-y-0.5"
                    >
                        Download App
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-[var(--color-text-dark)]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[var(--color-text-dark)] font-medium py-2 hover:bg-gray-50 px-2 rounded-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#"
                                className="w-full text-center py-3 rounded-xl bg-[var(--color-primary)] text-white font-bold shadow-md"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Download App
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
