import React from 'react';

const Mission = () => {
    return (
        <section className="mission-section position-relative overflow-hidden" style={{ padding: '150px 0 200px' }}>
            {/* Background Elements */}
            <div className="blob hero-bg-blob-1" style={{ top: '20%', left: '-10%', opacity: 0.2 }}></div>
            <div className="blob hero-bg-blob-2" style={{ bottom: '20%', right: '-10%', opacity: 0.2 }}></div>

            <div className="container position-relative z-2">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="text-center mb-5 animate-fade-in">
                            <h2 className="display-4 fw-bold mb-5">Why We Built <span className="text-gradient">DigiSpher EMR</span></h2>
                            <p className="lead text-muted mx-auto fs-3" style={{ maxWidth: '900px' }}>
                                Medicine should be about patients, not wrestling with complex software.
                            </p>
                        </div>

                        <div className="glass-panel p-5 rounded-5 mb-5">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6">
                                    <h3 className="display-6 fw-bold mb-4 text-white">The Problem</h3>
                                    <p className="text-muted mb-4">
                                        For years, solo practitioners have been forced to choose between expensive, bloated cloud-based systems or outdated, insecure legacy software.
                                    </p>
                                    <ul className="list-unstyled text-muted fs-5">
                                        <li className="mb-3 d-flex align-items-start">
                                            <i className="fas fa-times-circle text-danger mt-1 me-3"></i>
                                            <span><strong>Data Privacy Risks:</strong> Cloud breaches are rising. Who really owns your patient data?</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <i className="fas fa-times-circle text-danger mt-1 me-3"></i>
                                            <span><strong>Subscription Fatigue:</strong> Endless monthly fees for features you never use.</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <i className="fas fa-times-circle text-danger mt-1 me-3"></i>
                                            <span><strong>Internet Dependency:</strong> Can't access your records when the Wi-Fi goes down? That's unacceptable.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-4 rounded-4" style={{ background: 'rgba(8, 145, 178, 0.1)', border: '1px solid var(--primary-dark)' }}>
                                        <h3 className="display-6 fw-bold mb-4 text-white">Simplicity First</h3>
                                        <p className="text-muted mb-4">
                                            <strong>DigiSpher EMR</strong> cuts through the noise. We designed it to be as simple as pen and paper, but smarter.
                                        </p>
                                        <ul className="list-unstyled text-white fs-5">
                                            <li className="mb-3 d-flex align-items-center">
                                                <i className="fas fa-check-circle text-primary mt-1 me-3"></i>
                                                <span><strong>100% On-Premise:</strong> Your data lives on your device. Secure, private, and yours.</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-center">
                                                <i className="fas fa-check-circle text-primary mt-1 me-3"></i>
                                                <span><strong>One-Time Purchase:</strong> Pay once, own it forever. No hidden monthly costs.</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-center">
                                                <i className="fas fa-check-circle text-primary mt-1 me-3"></i>
                                                <span><strong>Offline First:</strong> Works perfectly without an internet connection. Fast and reliable.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="fs-3 text-muted fst-italic">
                                "We created DigiSpher EMR to give independent doctors the tools they need to focus on what matters most: caring for their patients."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
