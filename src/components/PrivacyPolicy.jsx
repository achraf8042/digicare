import React from 'react';

const PrivacyPolicy = () => {
    return (
        <section className="privacy-policy pt-5 mt-5">
            <div className="container pt-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3"><i className="fas fa-shield-alt text-primary me-3"></i>Privacy <span className="text-gradient">Policy</span></h1>
                    <p className="lead text-muted">Your Data, Your Control - Complete Privacy with On-Premise Storage</p>
                    <div className="badge bg-dark border border-secondary p-2 mt-3">Last Updated: December 6, 2025</div>
                </div>

                <div className="glass-panel p-5 rounded-4 mb-5 mx-auto" style={{ maxWidth: '900px' }}>
                    <h2 className="text-white mb-4">Overview</h2>
                    <p className="text-muted mb-4">DigiCare EMR is fundamentally different from cloud-based EMR systems. We prioritize your privacy and data ownership by providing an <strong>on-premise solution</strong> where all patient data remains exclusively on your local computer.</p>

                    <div className="p-4 rounded-3 mb-5" style={{ background: 'rgba(8, 145, 178, 0.15)', borderLeft: '4px solid var(--primary)' }}>
                        <h4 className="text-white mb-2"><i className="fas fa-lock me-2"></i>Key Privacy Principle</h4>
                        <p className="mb-0 text-white-50"><strong>Your data never leaves your computer.</strong> DigiCare EMR does not collect, store, transmit, or have access to any patient health information (PHI) or personal data you enter into the system.</p>
                    </div>

                    <h2 className="text-white mb-4">On-Premise Data Storage</h2>
                    <ul className="text-muted mb-5">
                        <li className="mb-3"><strong className="text-white">Local Storage Only:</strong> All patient records, clinical notes, prescriptions, and appointments are stored in a local database on your device.</li>
                        <li className="mb-3"><strong className="text-white">No Cloud Transmission:</strong> No patient data is transmitted to our servers or any third-party services.</li>
                        <li className="mb-3"><strong className="text-white">No Remote Access:</strong> We cannot access, view, or retrieve any data you store in DigiCare EMR.</li>
                    </ul>

                    <h2 className="text-white mb-4">Data Backup and Recovery</h2>
                    <p className="text-muted mb-3">We strongly recommend:</p>
                    <ul className="text-muted mb-5">
                        <li className="mb-2">Daily backups of your DigiCare EMR data directory</li>
                        <li className="mb-2">Storing backups on secure external media or encrypted cloud storage</li>
                        <li className="mb-2">Maintaining multiple backup versions</li>
                    </ul>

                    <h2 className="text-white mb-4">Contact Us</h2>
                    <p className="text-muted mb-3">If you have questions about this Privacy Policy, please contact us:</p>
                    <div className="p-4 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                        <p className="mb-2 text-white"><i className="fas fa-envelope me-2 text-primary"></i>privacy@digicare-emr.com</p>
                        <p className="mb-0 text-white"><i className="fas fa-globe me-2 text-primary"></i>www.digicare-emr.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
