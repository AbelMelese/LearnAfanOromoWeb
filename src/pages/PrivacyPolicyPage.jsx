import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
    return (
        <div className="font-sans">
            <Navbar />
            <div className="pt-32 pb-20 bg-[var(--color-background)]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-[var(--color-text-dark)] mb-2">Privacy Policy</h1>
                    <p className="text-[var(--color-text-gray)] mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-lg text-[var(--color-text-dark)] max-w-none">
                        <p className="mb-6">
                            Thank you for choosing <strong>Learn Afan Oromo</strong> ("we," "us," or "our"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App"). We are committed to protecting your privacy and ensuring you have a positive experience on our app.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">1. Information We Collect</h2>
                        <p className="mb-4">We collect information to provide better services to all our users. The types of information we collect include:</p>

                        <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-6 mb-2">a. Personal Information (Voluntarily Provided)</h3>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--color-text-gray)]">
                            <li><strong>Account Information:</strong> When you sign up using Google Sign-In or email, we collect your name, email address, and profile picture to create and manage your account.</li>
                            <li><strong>User Content:</strong> We may collect images you upload (e.g., for your profile picture) if you grant us access to your device's photo gallery.</li>
                            <li><strong>Communication:</strong> If you contact us for support, we may collect your name, email address, and the content of your message.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-6 mb-2">b. Automatically Collected Information</h3>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--color-text-gray)]">
                            <li><strong>Device Information:</strong> We collect information about the device you use to access the App, including the hardware model, operating system and version, unique device identifiers, and mobile network information.</li>
                            <li><strong>Usage Data:</strong> We collect information about your activity within the App, such as the lessons you complete, quizzes you take, your progress, and the time and duration of your sessions.</li>
                            <li><strong>Advertising Data:</strong> We use Google AdMob to display advertisements. AdMob may collect and use your device's advertising ID (e.g., GAID) to show you personalized ads based on your interests.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">We use the information we collect for the following purposes:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--color-text-gray)]">
                            <li>To provide, maintain, and improve our App and educational content.</li>
                            <li>To personalize your learning experience and track your progress.</li>
                            <li>To authenticate your identity and secure your account.</li>
                            <li>To serve relevant advertisements through Google AdMob.</li>
                            <li>To communicate with you, including sending service updates and responding to support requests.</li>
                            <li>To analyze usage trends and optimize App performance.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">3. Third-Party Services</h2>
                        <p className="mb-4">We may share your information with the following third-party service providers who assist us in operating our App:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--color-text-gray)]">
                            <li><strong>Supabase:</strong> For backend services, database management, and user authentication.</li>
                            <li><strong>Google Sign-In:</strong> For secure user authentication.</li>
                            <li><strong>Google AdMob:</strong> For displaying advertisements. Learn more about how Google uses data here: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">Google Privacy & Terms</a>.</li>
                            <li><strong>Google Gemini AI:</strong> We use Google's generative AI to power certain interactive features. Anonymized text inputs may be processed to generate responses.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">4. Permissions We Request</h2>
                        <p className="mb-4">To provide specific features, we may request access to:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-[var(--color-text-gray)]">
                            <li><strong>Storage (Read/Write):</strong> To upload profile pictures and save your learning progress locally.</li>
                            <li><strong>Notifications:</strong> To send you study reminders and updates (you can disable this in your device settings).</li>
                            <li><strong>Internet:</strong> To sync data with our servers and load content.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">5. Data Retention and Deletion</h2>
                        <p className="mb-4">
                            We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
                        </p>
                        <p className="mb-4">
                            <strong>Your Rights:</strong> You have the right to delete your account and all associated data at any time. You can do this directly within the App settings by selecting "Delete Account." Upon deletion, your data will be permanently removed from our active databases.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">6. Children's Privacy</h2>
                        <p className="mb-4">
                            Our App is intended for general audiences. We do not knowingly collect personal information from children under the age of 13. If we discover we have collected information from a child under 13, we will delete it immediately.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">7. Changes to This Policy</h2>
                        <p className="mb-4">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mt-8 mb-4">8. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions or concerns about this Privacy Policy, please contact us at:
                        </p>
                        <p className="font-semibold text-[var(--color-text-dark)]">
                            Email: <a href="mailto:afaanoromolearn@gmail.com" className="text-[var(--color-primary)] hover:underline">afaanoromolearn@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
