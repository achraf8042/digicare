import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="pricing" style={{ background: 'transparent' }}>
            <div className="container">
                <h2 className="section-title text-center">Special End of Year Offer</h2>
                <p className="text-center text-muted mb-5" style={{ fontSize: '1.2rem' }}>Limited time discount - Don't miss out!</p>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="pricing-card featured">
                            <div className="pricing-badge">40% OFF</div>

                            <div className="text-center mb-4">
                                <h3 className="mb-3 text-white">DigiSpher EMR - Solo Practitioner License</h3>
                                <p className="original-price mb-2" style={{ opacity: 0.5 }}>$1,499</p>
                                <div className="final-price">$899.40</div>
                                <div className="discount-label" style={{ background: 'var(--accent)', color: 'black' }}>
                                    <i className="fas fa-tag me-2"></i>Save $599.60 - End of Year Special!
                                </div>
                            </div>

                            <ul className="pricing-features">
                                <li><i className="fas fa-check-circle"></i> Complete EMR System - Lifetime License</li>
                                <li><i className="fas fa-check-circle"></i> Patient Management Module</li>
                                <li><i className="fas fa-check-circle"></i> Appointment Scheduling System</li>
                                <li><i className="fas fa-check-circle"></i> Clinical Notes with PDF Export</li>
                                <li><i className="fas fa-check-circle"></i> E-Prescription Management</li>
                                <li><i className="fas fa-check-circle"></i> Allergy Tracking & Vital Signs</li>
                                <li><i className="fas fa-check-circle"></i> On-Premise Deployment (Your Data, Your Control)</li>
                                <li><i className="fas fa-check-circle"></i> No Recurring Fees or Subscriptions</li>
                                <li><i className="fas fa-check-circle"></i> Free Software Updates</li>
                                <li><i className="fas fa-check-circle"></i> Comprehensive Documentation</li>
                                <li><i className="fas fa-check-circle"></i> Email Support</li>
                            </ul>

                            <div className="text-center mt-4">
                                <a href="https://digispher.lemonsqueezy.com/checkout" className="btn btn-primary-custom btn-lg w-100 shadow-lg" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-shopping-cart me-2"></i>Get It Now - $899.40
                                </a>
                                <p className="mt-3 text-muted">
                                    <i className="fas fa-calendar-alt me-2"></i>Offer valid until December 31, 2025
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
