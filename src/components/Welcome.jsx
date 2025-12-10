import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const [isValid, setIsValid] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [copiedField, setCopiedField] = useState(null);

    // Extract Parameters
    const orderId = searchParams.get('order_id') || searchParams.get('order');
    const licenseKey = searchParams.get('license_key') || searchParams.get('license');
    const name = searchParams.get('name') || 'Doctor';
    const email = searchParams.get('email');
    const total = searchParams.get('total');

    useEffect(() => {
        // Validation Logic: Require Order ID AND (License Key OR Email)
        const valid = orderId && (licenseKey || email);
        setIsValid(!!valid);

        if (!valid) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);

            const redirect = setTimeout(() => {
                navigate('/');
            }, 5000);

            return () => {
                clearInterval(timer);
                clearTimeout(redirect);
            };
        }
    }, [orderId, licenseKey, email, navigate]);

    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    if (!isValid) {
        return (
            <section className="welcome-section pt-5 mt-5 d-flex align-items-center" style={{ minHeight: '80vh' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="glass-panel p-5 rounded-4">
                                <div className="mb-4">
                                    <i className="fas fa-exclamation-circle text-danger display-1"></i>
                                </div>
                                <h2 className="text-white mb-3">License Not Found</h2>
                                <p className="text-muted mb-4 lead">
                                    We couldn't verify your order details. You will be redirected to the homepage in <strong>{countdown}</strong> seconds.
                                </p>
                                <button onClick={() => navigate('/')} className="btn btn-primary rounded-pill px-4 py-2">
                                    Go Home Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="welcome-section pt-5 mt-5">
            <div className="container pt-5">
                <div className="text-center mb-5 animate-fade-in">
                    <div className="d-inline-block p-3 rounded-circle bg-success bg-opacity-25 mb-4 border border-success border-opacity-50">
                        <i className="fas fa-check text-success display-4"></i>
                    </div>
                    <h1 className="display-4 fw-bold mb-3 text-white">Thank You, <span className="text-gradient">{name}!</span></h1>
                    <p className="lead text-muted">Your order has been successfully processed.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* Order Details Card */}
                        <div className="glass-panel p-5 rounded-4 mb-5 border border-primary border-opacity-25 shadow-lg">
                            <div className="row align-items-center mb-4">
                                <div className="col-md-6">
                                    <h4 className="text-white mb-1"><i className="fas fa-receipt text-primary me-2"></i>Order Details</h4>
                                    <p className="text-muted small mb-0">Keep this information safe for your records</p>
                                </div>
                                <div className="col-md-6 text-md-end mt-3 mt-md-0 d-flex gap-2 justify-content-md-end flex-wrap">
                                    <a href="https://mega.nz/file/v4RTBKSC#yme49HLguhBn7KhlRM683NUfQUHuXKYRtXr6yOuqlsI" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-3 hover-lift">
                                        <i className="fas fa-download me-2"></i>Download EN
                                    </a>
                                    <a href="https://mega.nz/file/v4RTBKSC#yme49HLguhBn7KhlRM683NUfQUHuXKYRtXr6yOuqlsI" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-pill px-3 hover-lift">
                                        <i className="fas fa-download me-2"></i>Download FR
                                    </a>
                                </div>
                            </div>

                            <hr className="border-secondary opacity-25" />

                            <div className="row g-4 mt-2">
                                {/* Order ID */}
                                <div className="col-md-6">
                                    <div className="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25 h-100">
                                        <label className="text-muted small text-uppercase fw-bold mb-2">Order ID</label>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <code className="text-white fs-5">{orderId}</code>
                                            <button
                                                onClick={() => handleCopy(orderId, 'order')}
                                                className={`btn btn-sm ${copiedField === 'order' ? 'btn-success' : 'btn-outline-secondary'} rounded-circle`}
                                                title="Copy Order ID"
                                            >
                                                <i className={`fas ${copiedField === 'order' ? 'fa-check' : 'fa-copy'}`}></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* License Key */}
                                <div className="col-md-6">
                                    <div className="p-3 rounded-3 bg-dark bg-opacity-50 border border-primary border-opacity-50 h-100 position-relative overflow-hidden">
                                        <label className="text-primary small text-uppercase fw-bold mb-2">License Key</label>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <code className="text-white fs-5 fw-bold" style={{ textShadow: '0 0 2px rgba(0,0,0,0.5)' }}>{licenseKey || "Check your email"}</code>
                                            {licenseKey && (
                                                <button
                                                    onClick={() => handleCopy(licenseKey, 'license')}
                                                    className={`btn btn-sm ${copiedField === 'license' ? 'btn-success' : 'btn-outline-primary'} rounded-circle z-1`}
                                                    title="Copy License Key"
                                                >
                                                    <i className={`fas ${copiedField === 'license' ? 'fa-check' : 'fa-copy'}`}></i>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Credentials Info */}
                            <div className="mt-4 p-3 rounded-3 bg-info bg-opacity-10 border border-info border-opacity-25">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="fas fa-info-circle text-info fs-4"></i>
                                    </div>
                                    <div>
                                        <h6 className="text-white mb-1">First Time Login</h6>
                                        <p className="text-muted small mb-2">Use these default credentials. You will be asked to verify your License Key upon activation.</p>
                                        <div className="d-flex gap-3 flex-wrap">
                                            <span className="text-muted small">Username: <code className="text-white">doctor</code></span>
                                            <span className="text-muted small">Password: <code className="text-white">doctor123</code></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Start Guide */}
                        <div className="glass-panel p-5 rounded-4 mb-5">
                            <h3 className="text-white mb-4"><i className="fas fa-rocket text-primary me-2"></i>Quick Start Guide</h3>

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <ul className="list-unstyled text-muted mb-0">
                                        <li className="d-flex mb-3">
                                            <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                                            <span><strong>Download & Install</strong> the application using the button above.</span>
                                        </li>
                                        <li className="d-flex mb-3">
                                            <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                                            <span><strong>Log In</strong> with the default credentials provided.</span>
                                        </li>
                                        <li className="d-flex">
                                            <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                                            <span><strong>Activate</strong> with your unique License Key.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-unstyled text-muted mb-0">
                                        <li className="d-flex mb-3">
                                            <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                                            <span><strong>Change Password</strong> immediately for security.</span>
                                        </li>
                                        <li className="d-flex mb-3">
                                            <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                                            <span><strong>Setup Clinic Info</strong> in the Settings menu.</span>
                                        </li>
                                        <li className="d-flex">
                                            <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                                            <span><strong>Start Managing</strong> your patients efficiently!</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4 text-center">
                                <p className="text-muted mb-0">Need help? Visit our <a href="/help-center" className="text-primary text-decoration-none">Help Center</a> or contact support.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
