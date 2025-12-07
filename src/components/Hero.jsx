import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="blob hero-bg-blob-1"></div>
            <div className="blob hero-bg-blob-2"></div>

            <div className="container position-relative z-index-1">
                <div className="row align-items-center">
                    <div className="col-lg-6 animate-fade-in">
                        <h1>
                            Complete <span className="text-gradient">EMR Solution</span> for Solo Practitioners
                        </h1>
                        <p className="lead">
                            Streamline your practice with DigiCare EMR - the all-in-one electronic medical records system designed for independent healthcare providers. Secure, professional, and on-premise.
                        </p>
                        <div className="d-flex gap-3 flex-wrap">
                            <a href="#pricing" className="btn btn-primary-custom btn-lg">
                                <i className="fas fa-rocket me-2"></i>Get Started Now
                            </a>
                            <a href="#demo" className="btn btn-outline-custom btn-lg">
                                <i className="fas fa-play-circle me-2"></i>View Live Demo
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0 text-center">
                        <div className="hero-image-wrapper">
                            <img src="/hero_image_1765031891862.png" alt="DigiCare EMR Dashboard" className="img-fluid hero-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
