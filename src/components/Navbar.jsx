import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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
                    <img src="/logo.svg" alt="DigiCare Logo" height="40" className="me-2 rounded-3" />
                    DigiCare EMR
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        {isHome ? (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="#features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#screenshots">Screenshots</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#demo">Demo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#pricing">Pricing</a>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Back to Home</Link>
                            </li>
                        )}
                        <li className="nav-item ms-3">
                            <Link to="/#pricing" className="btn btn-primary-custom">Get Started</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
