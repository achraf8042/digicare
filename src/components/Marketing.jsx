import React from 'react';

const Marketing = () => {
    return (
        <section className="marketing-section py-5 position-relative">
            {/* Background enhancement */}
            <div className="blob" style={{ top: '20%', left: '10%', background: 'var(--primary)', opacity: 0.2, width: '400px', height: '400px' }}></div>

            <div className="container position-relative z-2">
                <div className="row g-4 justify-content-center">
                    {/* Stat 1 */}
                    <div className="col-md-4">
                        <div className="glass-panel text-center p-4 rounded-4 h-100 hover-lift">
                            <div className="icon-wrapper mb-3 mx-auto d-flex align-items-center justify-content-center"
                                style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(34, 211, 238, 0.1)' }}>
                                <i className="fas fa-shield-alt text-primary fs-2"></i>
                            </div>
                            <h3 className="display-5 fw-bold text-white mb-2">100%</h3>
                            <h5 className="text-white mb-2">Data Privacy</h5>
                            <p className="text-muted small">Your data stays on your machine. Zero cloud storage risks.</p>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="col-md-4">
                        <div className="glass-panel text-center p-4 rounded-4 h-100 hover-lift featured-marketing"
                            style={{ border: '1px solid var(--primary)' }}>
                            <div className="icon-wrapper mb-3 mx-auto d-flex align-items-center justify-content-center"
                                style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.1)' }}>
                                <i className="fas fa-infinity text-warning fs-2"></i>
                            </div>
                            <h3 className="display-5 fw-bold text-white mb-2">Lifetime</h3>
                            <h5 className="text-white mb-2">Access License</h5>
                            <p className="text-muted small">One-time payment. No monthly subscriptions or hidden fees.</p>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="col-md-4">
                        <div className="glass-panel text-center p-4 rounded-4 h-100 hover-lift">
                            <div className="icon-wrapper mb-3 mx-auto d-flex align-items-center justify-content-center"
                                style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(79, 70, 229, 0.1)' }}>
                                <i className="fas fa-headset text-secondary fs-2"></i>
                            </div>
                            <h3 className="display-5 fw-bold text-white mb-2">24/7</h3>
                            <h5 className="text-white mb-2">Expert Support</h5>
                            <p className="text-muted small">Dedicated team ready to assist you anytime, anywhere.</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Banner */}
                <div className="glass-panel p-5 mt-5 rounded-4 text-center position-relative overflow-hidden">
                    <div className="position-relative z-2">
                        <h2 className="display-6 fw-bold text-white mb-3">Ready to modernize your practice?</h2>
                        <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                            Join hundreds of solo practitioners who have switched to DigiCare EMR for a simpler, secure, and more efficient workflow.
                        </p>
                        <a href="#pricing" className="btn btn-primary-custom btn-lg">
                            <i className="fas fa-arrow-right me-2"></i>Get Started Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marketing;
