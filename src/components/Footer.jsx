import React from 'react';
import { Twitter, Instagram, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-[var(--color-card-border)] py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-6 md:mb-0">
                        <img src="/logo.png" alt="Learn Afan Oromo" className="w-8 h-8 rounded-lg shadow-sm" />
                        <span className="text-xl font-bold text-[var(--color-text-dark)]">Learn Afan Oromo</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="p-3 rounded-full bg-gray-50 text-[var(--color-text-gray)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-gray-50 text-[var(--color-text-gray)] hover:bg-[var(--color-orange)] hover:text-white transition-all duration-300">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-gray-50 text-[var(--color-text-gray)] hover:bg-[var(--color-text-dark)] hover:text-white transition-all duration-300">
                            <Globe size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-text-gray)]">
                    <p className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Learn Afan Oromo. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link to="/privacy-policy" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</Link>
                        <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
