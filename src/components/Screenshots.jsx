import React from 'react';

const Screenshots = () => {
    return (
        <section id="screenshots" className="screenshots" style={{ background: 'transparent' }}>
            <div className="container">
                <h2 className="section-title text-center">See DigiCare EMR in Action</h2>
                <p className="text-center text-muted mb-5 section-subtitle">Full-screen screenshots from the actual system</p>

                <div id="screenshotsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#screenshotsCarousel" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#screenshotsCarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#screenshotsCarousel" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#screenshotsCarousel" data-bs-slide-to="3"></button>
                        <button type="button" data-bs-target="#screenshotsCarousel" data-bs-slide-to="4"></button>
                    </div>
                    <div className="carousel-inner rounded-4 shadow-lg border border-secondary" style={{ borderColor: 'var(--glass-border)' }}>
                        <div className="carousel-item active">
                            <img src="/dashboard_screenshot_1765031910109.png" className="d-block w-100" alt="Dashboard View" />
                            <div className="carousel-caption glass-panel mb-4 mx-auto rounded-3" style={{ maxWidth: '80%', bottom: '2rem' }}>
                                <h5 className="fw-bold">Dashboard Overview</h5>
                                <p className="mb-0">Real-time statistics and upcoming appointments at a glance</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/patients_screenshot_1765031926836.png" className="d-block w-100" alt="Patient Management" />
                            <div className="carousel-caption glass-panel mb-4 mx-auto rounded-3" style={{ maxWidth: '80%', bottom: '2rem' }}>
                                <h5 className="fw-bold">Patient Management</h5>
                                <p className="mb-0">Complete patient database with quick search and detailed profiles</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/clinical_notes_screenshot_1765031943898.png" className="d-block w-100" alt="Clinical Notes" />
                            <div className="carousel-caption glass-panel mb-4 mx-auto rounded-3" style={{ maxWidth: '80%', bottom: '2rem' }}>
                                <h5 className="fw-bold">Clinical Documentation</h5>
                                <p className="mb-0">Professional clinical notes with PDF export capability</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/prescription_screenshot_1765031961798.png" className="d-block w-100" alt="E-Prescription" />
                            <div className="carousel-caption glass-panel mb-4 mx-auto rounded-3" style={{ maxWidth: '80%', bottom: '2rem' }}>
                                <h5 className="fw-bold">E-Prescription Module</h5>
                                <p className="mb-0">Generate professional prescriptions with complete medication details</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/demo_mockup_1765031978916.png" className="d-block w-100" alt="Full System View" />
                            <div className="carousel-caption glass-panel mb-4 mx-auto rounded-3" style={{ maxWidth: '80%', bottom: '2rem' }}>
                                <h5 className="fw-bold">Complete System Interface</h5>
                                <p className="mb-0">Modern, intuitive design with easy navigation</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#screenshotsCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#screenshotsCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Screenshots;
