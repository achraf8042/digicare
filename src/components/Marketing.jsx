import React from 'react';

const Marketing = () => {
    return (
        <section className="marketing-section py-5 position-relative">
            {/* Background enhancement */}
            <div className="blob" style={{ top: '20%', left: '10%', background: 'var(--primary)', opacity: 0.2, width: '400px', height: '400px' }}></div>

            <div className="container position-relative z-2">
                <div className="text-center mb-5 mx-auto animate-fade-in" style={{ maxWidth: '800px' }}>
                    <h2 className="display-5 fw-bold mb-4">Built for <span className="text-gradient">Simplicity</span></h2>
                    <p className="lead text-muted fs-4">
                        Existing EMR solutions have a steep learning curve and are packed with complex features that solo doctors simply don't need.
                    </p>
                    <p className="lead text-muted fs-4">
                        That's why we created DigiSpher EMR.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {/* Stat 1 */}
                    <div className="col-md-4">
                        <div className="glass-panel text-center p-4 rounded-4 h-100 hover-lift">
                            <div className="icon-wrapper mb-3 mx-auto d-flex align-items-center justify-content-center"
                                style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(34, 211, 238, 0.1)' }}>
                                <i className="fas fa-magic text-primary fs-2"></i>
                            </div>
                            <h3 className="display-5 fw-bold text-white mb-2">Zero</h3>
                            <h5 className="text-white mb-2">Learning Curve</h5>
                            <p className="text-muted small">Intuitive design. No training required. Start treating patients in minutes.</p>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="col-md-4">
                        <div className="glass-panel text-center p-4 rounded-4 h-100 hover-lift featured-marketing"
                            style={{ border: '1px solid var(--primary)' }}>
                            <div className="icon-wrapper mb-3 mx-auto d-flex align-items-center justify-content-center"
                                style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.1)' }}>
                                <i className="fas fa-feather-alt text-warning fs-2"></i>
                            </div>
                            <h3 className="display-5 fw-bold text-white mb-2">Simple</h3>
                            <h5 className="text-white mb-2">Streamlined Features</h5>
                            <p className="text-muted small">We removed the clutter. Only the capabilities you actually need, without the complex features you don't.</p>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="col-md-4">
                        <div className="glass-panel text-center p-4 rounded-4 h-100 hover-lift">
                            <div className="icon-wrapper mb-3 mx-auto d-flex align-items-center justify-content-center"
                                style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(79, 70, 229, 0.1)' }}>
                                <i className="fas fa-shield-alt text-secondary fs-2"></i>
                            </div>
                            <h3 className="display-5 fw-bold text-white mb-2">100%</h3>
                            <h5 className="text-white mb-2">Private & Secure</h5>
                            <p className="text-muted small">Your data, your rules. Stored locally on your machine. No cloud risks.</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Banner */}
                <div className="glass-panel p-5 mt-5 rounded-4 text-center position-relative overflow-hidden">
                    <div className="position-relative z-2">
                        <h2 className="display-6 fw-bold text-white mb-3">Ready for an EMR that keeps it simple?</h2>
                        <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                            Join hundreds of solo practitioners who have switched to DigiSpher EMR for a simpler, distraction-free workflow.
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
