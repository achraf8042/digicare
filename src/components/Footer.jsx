import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <h5 className="text-white">
                            <i className="fas fa-heartbeat me-2 text-primary"></i>{t('footer.brand')}
                        </h5>
                        <p className="text-muted">{t('footer.brandDesc')}</p>
                        <div className="social-links mt-3">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="text-white">{t('footer.product')}</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/#features">{t('navbar.features')}</Link></li>
                            <li className="mb-2"><Link to="/#screenshots">{t('navbar.gallery')}</Link></li>
                            <li className="mb-2"><Link to="/#demo">{t('navbar.demo')}</Link></li>
                            <li className="mb-2"><Link to="/#pricing">{t('navbar.pricing')}</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="text-white">{t('footer.support')}</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/help-center">{t('footer.documentation')}</Link></li>
                            <li className="mb-2"><Link to="/help-center">{t('footer.helpCenter')}</Link></li>
                            <li className="mb-2"><a href="mailto:support@digicare-emr.com">{t('footer.contactUs')}</a></li>
                            <li className="mb-2"><Link to="/license">{t('footer.licenseAgreement')}</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="text-white">{t('footer.contact')}</h5>
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
                        <p className="text-muted mb-0">{t('footer.copyright')}</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <Link to="/privacy" className="me-3 text-muted">{t('footer.privacy')}</Link>
                        <Link to="/help-center" className="me-3 text-muted">{t('footer.helpCenter')}</Link>
                        <Link to="/license" className="text-muted">{t('footer.license')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
