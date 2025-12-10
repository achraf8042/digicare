import React from 'react';
import { useTranslation } from 'react-i18next';

const Screenshots = () => {
    const { t } = useTranslation();

    const screenshots = [
        {
            src: '/dashboard_screenshot_1765031910109.png',
            alt: t('screenshots.dashboard'),
            title: t('screenshots.dashboard'),
            desc: t('screenshots.dashboardDesc')
        },
        {
            src: '/patients_screenshot_1765031926836.png',
            alt: t('screenshots.patients'),
            title: t('screenshots.patients'),
            desc: t('screenshots.patientsDesc')
        },
        {
            src: '/clinical_notes_screenshot_1765031943898.png',
            alt: t('screenshots.clinicalDocs'),
            title: t('screenshots.clinicalDocs'),
            desc: t('screenshots.clinicalDocsDesc')
        },
        {
            src: '/prescription_screenshot_1765031961798.png',
            alt: t('screenshots.ePrescription'),
            title: t('screenshots.ePrescription'),
            desc: t('screenshots.ePrescriptionDesc')
        },
        {
            src: '/demo_mockup_1765031978916.png',
            alt: t('screenshots.fullSystem'),
            title: t('screenshots.fullSystem'),
            desc: t('screenshots.fullSystemDesc')
        }
    ];

    return (
        <section id="screenshots" className="screenshots" style={{ background: 'transparent' }}>
            <div className="container">
                <h2 className="section-title text-center">{t('screenshots.title')}</h2>
                <p className="text-center text-muted mb-5 section-subtitle">{t('screenshots.subtitle')}</p>

                <div id="screenshotsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#screenshotsCarousel" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#screenshotsCarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#screenshotsCarousel" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#screenshotsCarousel" data-bs-slide-to="3"></button>
                        <button type="button" data-bs-target="#screenshotsCarousel" data-bs-slide-to="4"></button>
                    </div>
                    <div className="carousel-inner rounded-4 shadow-lg border border-secondary" style={{ borderColor: 'var(--glass-border)' }}>
                        {screenshots.map((screenshot, index) => (
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                <img src={screenshot.src} className="d-block w-100" alt={screenshot.alt} />
                                <div className="carousel-caption glass-panel mb-4 mx-auto rounded-3" style={{ maxWidth: '80%', bottom: '2rem' }}>
                                    <h5 className="fw-bold">{screenshot.title}</h5>
                                    <p className="mb-0">{screenshot.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#screenshotsCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#screenshotsCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Screenshots;
