import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfServicePage = () => {
    return (
        <div className="font-sans">
            <Navbar />
            <div className="pt-32 pb-20 bg-[var(--color-background)]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-[var(--color-text-dark)] mb-8">Terms of Service</h1>
                    <div className="prose prose-lg text-[var(--color-text-gray)]">
                        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">1. Agreement to Terms</h2>
                        <p className="mb-4">
                            By accessing or using the Learn Afan Oromo website or mobile application, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must not use our services.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">2. Intellectual Property Rights</h2>
                        <p className="mb-4">
                            Our services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Learn Afan Oromo, its licensors, or other providers of such material and are protected by international copyright, trademark, and other intellectual property or proprietary rights laws.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">3. User Conduct</h2>
                        <p className="mb-4">
                            You agree to use our services only for lawful purposes. You agree not to use the services in any way that violates any applicable local, national, or international law or regulation.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">4. Limitation of Liability</h2>
                        <p className="mb-4">
                            In no event will Learn Afan Oromo, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, our services.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">5. Changes to Terms</h2>
                        <p className="mb-4">
                            We may revise and update these Terms of Service from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the services following the posting of revised Terms of Service means that you accept and agree to the changes.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">6. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about these Terms of Service, please contact us at support@learnafanoromo.com.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfServicePage;
