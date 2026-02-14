import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfServicePage = () => {
    return (
        <div className="font-sans">
            <Navbar />
            <div className="pt-32 pb-20 bg-[var(--color-background)]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-[var(--color-text-dark)] mb-2">Terms of Service</h1>
                    <p className="text-[var(--color-text-gray)] mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-lg text-[var(--color-text-dark)] max-w-none">
                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By downloading, installing, or using the <strong>Learn Afan Oromo</strong> branding and mobile application (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">2. License to Use</h2>
                        <p className="mb-4">
                            Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download and use the App for your personal, non-commercial use on a mobile device owned or controlled by you.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">3. User Accounts</h2>
                        <p className="mb-4">
                            To access certain features, you may be required to create an account using Google Sign-In or email. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">4. Content and Intellectual Property</h2>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--color-text-gray)]">
                            <li><strong>Our Content:</strong> All content provided in the App, including lessons, audio, quizzes, text, graphics, and logos, is the property of Learn Afan Oromo or its licensors and is protected by copyright and other intellectual property laws.</li>
                            <li><strong>User Content:</strong> By submitting any feedback or suggestions, you grant us the right to use such feedback without any restriction or compensation to you.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">5. Prohibited Conduct</h2>
                        <p className="mb-4">You agree not to:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--color-text-gray)]">
                            <li>Use the App for any illegal purpose or in violation of any local, state, national, or international law.</li>
                            <li>Reverse engineer, decompile, or attempt to extract the source code of the App.</li>
                            <li>Interfere with or disrupt the operation of the App or servers.</li>
                            <li>Transmit any viruses, malware, or other malicious code.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">6. AI-Generated Content</h2>
                        <p className="mb-4">
                            Some features of the App are powered by artificial intelligence (AI). While we strive for accuracy, AI-generated content may occasionally be incorrect or inappropriate. You access and use such content at your own risk.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">7. Disclaimer of Warranties</h2>
                        <p className="mb-4">
                            The App is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or availability of the App or its content.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">8. Limitation of Liability</h2>
                        <p className="mb-4">
                            To the fullest extent permitted by law, Learn Afan Oromo nor its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the App.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">9. Changes to Terms</h2>
                        <p className="mb-4">
                            We reserve the right to modify these Terms at any time. We will notify you of any material changes within the App or by updating the "Last Updated" date. Continued use of the App constitutes acceptance of the modified Terms.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">10. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about these Terms, please contact us at <a href="mailto:support@learnafanoromo.com" className="text-[var(--color-primary)] hover:underline">support@learnafanoromo.com</a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfServicePage;
