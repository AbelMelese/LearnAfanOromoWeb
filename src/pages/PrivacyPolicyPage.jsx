import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
    return (
        <div className="font-sans">
            <Navbar />
            <div className="pt-32 pb-20 bg-[var(--color-background)]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-[var(--color-text-dark)] mb-8">Privacy Policy</h1>
                    <div className="prose prose-lg text-[var(--color-text-gray)]">
                        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">1. Introduction</h2>
                        <p className="mb-4">
                            Welcome to Learn Afan Oromo. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            or use our mobile application and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">2. The Data We Collect</h2>
                        <p className="mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">3. How We Use Your Data</h2>
                        <p className="mb-4">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">4. Data Security</h2>
                        <p className="mb-4">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">5. Contact Details</h2>
                        <p className="mb-4">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@learnafanoromo.com.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
