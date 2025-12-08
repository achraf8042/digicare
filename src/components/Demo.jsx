import React from 'react';

const Demo = () => {
    return (
        <section id="demo" className="demo" style={{ background: 'linear-gradient(135deg, var(--bg-card), var(--bg-dark))' }}>
            <div className="container">
                <h2 className="section-title text-center">Experience the Live Demo</h2>
                <p className="text-center text-muted mb-5 section-subtitle">See how DigiSpher EMR can transform your practice</p>

                <div className="demo-container glass-panel p-5 rounded-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-1 order-lg-0 mb-4 mb-lg-0">
                            <img src="/demo_mockup_1765031978916.png" alt="Live Demo" className="img-fluid demo-image rounded-4 shadow-lg border border-secondary" style={{ borderColor: 'var(--glass-border)' }} />
                        </div>
                        <div className="col-lg-6 order-0 order-lg-1">
                            <h3 className="mb-4 display-6 fw-bold">Try DigiSpher EMR Today</h3>
                            <p className="lead mb-4 text-muted">Experience the full functionality of DigiSpher EMR with our interactive demo. Explore patient management, seeking simplified workflows?</p>

                            <div className="mb-4">
                                <h5 className="text-white"><i className="fas fa-check-circle text-primary me-2"></i>Full Feature Access</h5>
                                <p className="text-muted small ms-4">Explore all modules and features</p>
                            </div>

                            <div className="mb-4">
                                <h5 className="text-white"><i className="fas fa-check-circle text-primary me-2"></i>Sample Data Included</h5>
                                <p className="text-muted small ms-4">Pre-loaded with demo patients and appointments</p>
                            </div>

                            <div className="mb-4">
                                <h5 className="text-white"><i className="fas fa-check-circle text-primary me-2"></i>No Installation Required</h5>
                                <p className="text-muted small ms-4">Try it right in your browser</p>
                            </div>

                            <a href="#pricing" className="btn btn-primary-custom btn-lg w-100">
                                <i className="fas fa-rocket me-2"></i>Get Full Access Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;
