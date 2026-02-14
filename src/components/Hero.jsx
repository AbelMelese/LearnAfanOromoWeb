import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, Users, CheckCircle } from 'lucide-react';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('home');

    // 4 tabs matching the real app bottom nav: Home | Lessons | Profile | Settings
    const tabs = {
        home: '/app-mockup.png',
        lessons: '/lessonsTab.png',
        profile: '/ProfileTab.png',
        settings: '/SettingsTab.png',
    };

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-[var(--color-blob-light)] pt-32 pb-20">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-blob-light)] rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-orange-100 rounded-full blur-[100px] opacity-40 -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-100 mb-6 mx-auto lg:mx-0">
                            <Star className="w-4 h-4 text-[var(--color-primary)] fill-current" />
                            <span className="text-sm font-semibold text-[var(--color-primary)]">#1 App for Learning Afan Oromo</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold text-[var(--color-text-dark)] leading-tight mb-6">
                            Learn <span className="text-[var(--color-orange)]">Afan Oromo</span> the Fun Way.
                        </h1>

                        <p className="text-xl text-[var(--color-text-gray)] mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Master the language with bite-sized lessons, interactive quizzes, and real-world conversations. 100% free, forever.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
                            <button className="w-full sm:w-auto px-8 py-4 bg-[var(--color-orange)] hover:bg-[var(--color-orange-dark)] text-white text-lg font-bold rounded-2xl shadow-lg shadow-orange-200 hover:shadow-orange-300 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                                Download App <Play size={20} fill="currentColor" />
                            </button>
                        </div>

                        <div className="flex items-center gap-8 justify-center lg:justify-start text-sm font-medium text-[var(--color-text-gray)]">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-[var(--color-primary)]" />
                                <span>Free Forever</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-[var(--color-primary)]" />
                                <span>Offline Mode</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-[var(--color-primary)]" />
                                <span>Active Community</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Phone Mockup with Interactive Bottom Bar */}
                <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex flex-col items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10"
                    >
                        {/* Phone Frame */}
                        <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

                            {/* Screen Content */}
                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeTab}
                                        src={tabs[activeTab]}
                                        alt={`${activeTab} Screenshot`}
                                        className="w-full h-full object-cover absolute inset-0 pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </AnimatePresence>

                                {/* 
                                  Interactive hotspots over the real bottom tab bar.
                                  The tab bar in the screenshots is ~42px tall in a ~572px content area,
                                  which is about 7.3% of the screen height. We use bottom:0, height:7%.
                                  4 equal-width columns: Home | Lessons | Profile | Settings
                                */}
                                <div
                                    className="absolute left-0 w-full flex z-20"
                                    style={{ bottom: '1%', height: '6.5%' }}
                                >
                                    <button
                                        onClick={() => setActiveTab('home')}
                                        className="cursor-pointer bg-transparent border-none outline-none"
                                        style={{ width: '25%', height: '100%' }}
                                        title="Home"
                                    />
                                    <button
                                        onClick={() => setActiveTab('lessons')}
                                        className="cursor-pointer bg-transparent border-none outline-none"
                                        style={{ width: '25%', height: '100%' }}
                                        title="Lessons"
                                    />
                                    <button
                                        onClick={() => setActiveTab('profile')}
                                        className="cursor-pointer bg-transparent border-none outline-none"
                                        style={{ width: '25%', height: '100%' }}
                                        title="Profile"
                                    />
                                    <button
                                        onClick={() => setActiveTab('settings')}
                                        className="cursor-pointer bg-transparent border-none outline-none"
                                        style={{ width: '25%', height: '100%' }}
                                        title="Settings"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Background decoration behind phone */}
                    <div className="absolute inset-0 top-20 bg-gradient-to-tr from-green-200 to-orange-200 rounded-full blur-3xl opacity-30 scale-150 -z-10" />
                </div>

            </div>
        </section>
    );
};

export default Hero;
