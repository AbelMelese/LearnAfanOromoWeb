import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DeleteAccountPage = () => {
    return (
        <div className="font-sans flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow pt-32 pb-20 bg-[var(--color-background)]">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h1 className="text-3xl font-bold text-[var(--color-text-dark)] mb-6">Request Account Deletion</h1>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-card-border)]">
                        <p className="mb-6 text-[var(--color-text-dark)]">
                            If you wish to delete your <strong>Learn Afan Oromo</strong> account and all associated data, you have two options:
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold text-[var(--color-text-dark)] mb-2">Option 1: In-App Deletion (Instant)</h2>
                                <p className="text-[var(--color-text-gray)]">
                                    1. Open the <strong>Learn Afan Oromo</strong> app.<br />
                                    2. Go to <strong>Settings</strong>.<br />
                                    3. Tap <strong>Delete Account</strong>.<br />
                                    4. Confirm your choice. Your data will be deleted immediately.
                                </p>
                            </div>

                            <div className="border-t border-gray-100 pt-6">
                                <h2 className="text-xl font-semibold text-[var(--color-text-dark)] mb-2">Option 2: Email Request</h2>
                                <p className="text-[var(--color-text-gray)] mb-4">
                                    If you cannot access the app, you may request deletion by email. We will process your request within 30 days.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="font-medium text-[var(--color-text-dark)]">
                                        Email: <a href="mailto:afanoromolearn@gmail.com" className="text-[var(--color-primary)] hover:underline">afanoromolearn@gmail.com</a>
                                    </p>
                                    <p className="text-sm text-[var(--color-text-gray)] mt-2">
                                        Subject: <strong>Delete Account Request</strong><br />
                                        Please include your registered email address in the message.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-6">
                                <h2 className="text-xl font-semibold text-[var(--color-text-dark)] mb-2">Data Deletion Details</h2>
                                <p className="text-[var(--color-text-gray)] mb-2">
                                    <strong>What is deleted:</strong><br />
                                    - Personal profile information (name, email, profile picture)<br />
                                    - Learning progress, history, and streaks<br />
                                    - Quiz results and saved settings
                                </p>
                                <p className="text-[var(--color-text-gray)]">
                                    <strong>Retention:</strong><br />
                                    Data is permanently removed from our active databases upon processing. Backups may retain encrypted data for up to 30 days.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DeleteAccountPage;
