import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <h5 className="text-white">
                            <i className="fas fa-heartbeat me-2 text-primary"></i>DigiSpher EMR
                        </h5>
                        <p className="text-muted">Complete Electronic Medical Records solution for solo practitioners. Secure, professional, and on-premise.</p>
                        <div className="social-links mt-3">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="text-white">Product</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/#features">Features</Link></li>
                            <li className="mb-2"><Link to="/#screenshots">Screenshots</Link></li>
                            <li className="mb-2"><Link to="/#demo">Demo</Link></li>
                            <li className="mb-2"><Link to="/#pricing">Pricing</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="text-white">Support</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/help-center">Documentation</Link></li>
                            <li className="mb-2"><Link to="/help-center">Help Center</Link></li>
                            <li className="mb-2"><a href="mailto:support@digicare-emr.com">Contact Us</a></li>
                            <li className="mb-2"><Link to="/license">License Agreement</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="text-white">Contact</h5>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-2">
                                <a href="mailto:info@digispher.online" className="text-muted text-decoration-none hover-text-primary">
                                    <i className="fas fa-envelope me-2"></i>info@digispher.online
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://wa.me/21623400174" target="_blank" rel="noopener noreferrer" className="text-muted text-decoration-none hover-text-primary">
                                    <i className="fab fa-whatsapp me-2"></i>+21623400174
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="text-muted mb-0">&copy; 2025 DigiSpher EMR Systems. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <Link to="/privacy" className="me-3 text-muted">Privacy Policy</Link>
                        <Link to="/help-center" className="me-3 text-muted">Help Center</Link>
                        <Link to="/license" className="text-muted">License Agreement</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
