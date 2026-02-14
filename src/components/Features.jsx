import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Headphones, Clock, BarChart } from 'lucide-react';

const features = [
    {
        icon: <Trophy className="w-8 h-8 text-[var(--color-primary)]" />,
        title: 'Gamified Learning',
        description: 'Earn points, unlock badges, and maintain your streak. Learning feels like a game!',
        gradient: 'from-green-50 to-emerald-100',
    },
    {
        icon: <Headphones className="w-8 h-8 text-[var(--color-orange)]" />,
        title: 'Interactive Audio',
        description: 'Listen to native speakers and perfect your pronunciation with our voice recognition exercises.',
        gradient: 'from-orange-50 to-amber-100',
    },
    {
        icon: <Clock className="w-8 h-8 text-[var(--color-primary)]" />,
        title: 'Micro-Lessons',
        description: 'Busy schedule? No problem. Our lessons take just 5 minutes to complete.',
        gradient: 'from-blue-50 to-cyan-100', // Just for variety, though primary/orange are main
    },
    {
        icon: <BarChart className="w-8 h-8 text-[var(--color-orange)]" />,
        title: 'Track Progress',
        description: 'Visual dashboards show exactly how much you\'ve learned and where you need practice.',
        gradient: 'from-purple-50 to-fuchsia-100',
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-[var(--color-background)] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-[var(--color-text-dark)] mb-6">
                        Why Learn with Us?
                    </h2>
                    <p className="text-lg text-[var(--color-text-gray)]">
                        We've combined the science of learning with the fun of gaming to help you master Afan Oromo faster than ever.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-3xl border border-gray-100 bg-gradient-to-br ${feature.gradient} hover:shadow-xl transition-all duration-300 relative group`}
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-[var(--color-text-gray)] leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
