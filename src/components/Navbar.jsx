import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="/logo.svg" alt="DigiSpher Logo" height="40" className="me-2 rounded-3" />
                    {t('navbar.brand')}
                </Link>
                <div className="navbar-mobile-controls">
                    <LanguageSwitcher />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        {isHome ? (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="#features">{t('navbar.features')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#screenshots">{t('navbar.gallery')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#demo">{t('navbar.demo')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#pricing">{t('navbar.pricing')}</a>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{t('navbar.backToHome')}</Link>
                            </li>
                        )}
                        <li className="nav-item ms-3">
                            <Link to="/#pricing" className="btn btn-primary-custom">{t('navbar.getStarted')}</Link>
                        </li>
                        <li className="nav-item navbar-lang-switcher">
                            <LanguageSwitcher />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
