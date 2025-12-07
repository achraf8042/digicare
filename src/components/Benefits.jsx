import React from 'react';

const Benefits = () => {
    return (
        <section className="benefits" style={{ background: 'transparent' }}>
            <div className="container">
                <h2 className="section-title text-center">Why Choose DigiCare EMR?</h2>
                <p className="text-center text-muted mb-5 section-subtitle">Built specifically for solo practitioners</p>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="benefit-item">
                            <div className="d-flex align-items-center">
                                <div className="benefit-icon me-3 d-flex align-items-center justify-content-center text-white">
                                    <i className="fas fa-server" style={{ fontSize: '1.5rem' }}></i>
                                </div>
                                <div className="benefit-content">
                                    <h4 className="mb-1">On-Premise Deployment</h4>
                                    <p className="mb-0 text-muted small">Your data stays on your computer. Complete control and privacy. No cloud dependencies or internet requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="benefit-item">
                            <div className="d-flex align-items-center">
                                <div className="benefit-icon me-3 d-flex align-items-center justify-content-center text-white">
                                    <i className="fas fa-user-md" style={{ fontSize: '1.5rem' }}></i>
                                </div>
                                <div className="benefit-content">
                                    <h4 className="mb-1">Solo Practitioner Focused</h4>
                                    <p className="mb-0 text-muted small">Designed specifically for independent healthcare providers. Not bloated with enterprise features you don't need.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="benefit-item">
                            <div className="d-flex align-items-center">
                                <div className="benefit-icon me-3 d-flex align-items-center justify-content-center text-white">
                                    <i className="fas fa-clipboard-check" style={{ fontSize: '1.5rem' }}></i>
                                </div>
                                <div className="benefit-content">
                                    <h4 className="mb-1">Complete Clinical Workflow</h4>
                                    <p className="mb-0 text-muted small">From patient registration to prescription - manage your entire clinical workflow in one integrated system.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="benefit-item">
                            <div className="d-flex align-items-center">
                                <div className="benefit-icon me-3 d-flex align-items-center justify-content-center text-white">
                                    <i className="fas fa-file-pdf" style={{ fontSize: '1.5rem' }}></i>
                                </div>
                                <div className="benefit-content">
                                    <h4 className="mb-1">Professional PDF Generation</h4>
                                    <p className="mb-0 text-muted small">Export clinical notes and prescriptions as professional PDF documents for printing or sharing.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="benefit-item">
                            <div className="d-flex align-items-center">
                                <div className="benefit-icon me-3 d-flex align-items-center justify-content-center text-white">
                                    <i className="fas fa-ban" style={{ fontSize: '1.5rem' }}></i>
                                </div>
                                <div className="benefit-content">
                                    <h4 className="mb-1">No Recurring Fees</h4>
                                    <p className="mb-0 text-muted small">One-time payment for lifetime access. No monthly subscriptions or hidden costs. Pay once, use forever.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="benefit-item">
                            <div className="d-flex align-items-center">
                                <div className="benefit-icon me-3 d-flex align-items-center justify-content-center text-white">
                                    <i className="fas fa-certificate" style={{ fontSize: '1.5rem' }}></i>
                                </div>
                                <div className="benefit-content">
                                    <h4 className="mb-1">Lifetime License</h4>
                                    <p className="mb-0 text-muted small">Your purchase includes lifetime access to the software with free updates and improvements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
