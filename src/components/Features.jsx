import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Features = () => {
    return (
        <section id="contact" className="py-12 bg-[var(--color-background)] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-[var(--color-text-dark)] mb-8 text-center">Get in Touch</h1>
                    <p className="text-[var(--color-text-gray)] text-center mb-12 max-w-2xl mx-auto">
                        Have questions about the app? Need help with your account? Or just want to say hi? We'd love to hear from you.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[var(--color-text-dark)] mb-1">Email Us</h3>
                                    <p className="text-[var(--color-text-gray)] mb-2">For general inquiries and support.</p>
                                    <a href="mailto:support@learnafanoromo.com" className="text-[var(--color-primary)] font-semibold hover:underline">
                                        support@learnafanoromo.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-[var(--color-orange)] shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[var(--color-text-dark)] mb-1">Call Us</h3>
                                    <p className="text-[var(--color-text-gray)] mb-2">Available Mon-Fri, 9am - 5pm.</p>
                                    <a href="tel:+251911000000" className="text-[var(--color-primary)] font-semibold hover:underline">
                                        +251 911 000 000
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[var(--color-text-dark)] mb-1">Visit Us</h3>
                                    <p className="text-[var(--color-text-gray)]">
                                        Addis Ababa, Ethiopia<br />
                                        Bole Medhanialem
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                            <button type="button" className="w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-[var(--color-orange)] transition-colors shadow-lg shadow-green-100 flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
