import React from 'react';
import { useTranslation } from 'react-i18next';

const Mission = () => {
    const { t } = useTranslation();

    return (
        <section className="mission-section position-relative overflow-hidden" style={{ padding: '150px 0 200px' }}>
            {/* Background Elements */}
            <div className="blob hero-bg-blob-1" style={{ top: '20%', left: '-10%', opacity: 0.2 }}></div>
            <div className="blob hero-bg-blob-2" style={{ bottom: '20%', right: '-10%', opacity: 0.2 }}></div>

            <div className="container position-relative z-2">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="text-center mb-5 animate-fade-in">
                            <h2 className="display-4 fw-bold mb-5">{t('mission.title')} <span className="text-gradient">DigiSpher EMR</span></h2>
                            <p className="lead text-muted mx-auto fs-3" style={{ maxWidth: '900px' }}>
                                {t('mission.subtitle')}
                            </p>
                        </div>

                        <div className="glass-panel p-5 rounded-5 mb-5">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6">
                                    <h3 className="display-6 fw-bold mb-4 text-white">{t('mission.problemTitle')}</h3>
                                    <p className="text-muted mb-4">
                                        {t('mission.problemDesc')}
                                    </p>
                                    <ul className="list-unstyled text-muted fs-5">
                                        <li className="mb-3 d-flex align-items-start">
                                            <i className="fas fa-times-circle text-danger mt-1 me-3"></i>
                                            <span><strong>{t('mission.privacyRisk')}</strong></span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <i className="fas fa-times-circle text-danger mt-1 me-3"></i>
                                            <span><strong>{t('mission.subscriptionFatigue')}</strong></span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <i className="fas fa-times-circle text-danger mt-1 me-3"></i>
                                            <span><strong>{t('mission.internetDependency')}</strong></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-4 rounded-4" style={{ background: 'rgba(8, 145, 178, 0.1)', border: '1px solid var(--primary-dark)' }}>
                                        <h3 className="display-6 fw-bold mb-4 text-white">{t('mission.simplicityTitle')}</h3>
                                        <p className="text-muted mb-4">
                                            {t('mission.simplicityDesc')}
                                        </p>
                                        <ul className="list-unstyled text-white fs-5">
                                            <li className="mb-3 d-flex align-items-center">
                                                <i className="fas fa-check-circle text-primary mt-1 me-3"></i>
                                                <span><strong>{t('mission.onPremise')}</strong></span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-center">
                                                <i className="fas fa-check-circle text-primary mt-1 me-3"></i>
                                                <span><strong>{t('mission.oneTimePurchase')}</strong></span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-center">
                                                <i className="fas fa-check-circle text-primary mt-1 me-3"></i>
                                                <span><strong>{t('mission.offlineFirst')}</strong></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="fs-3 text-muted fst-italic">
                                "{t('mission.quote')}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
