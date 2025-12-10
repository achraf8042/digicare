import React from 'react';
import { useTranslation } from 'react-i18next';

const Marketing = () => {
    const { t } = useTranslation();

    return (
        <section className="marketing-section py-5 position-relative">
            {/* Background enhancement */}
            <div className="blob" style={{ top: '20%', left: '10%', background: 'var(--primary)', opacity: 0.2, width: '400px', height: '400px' }}></div>

            <div className="container position-relative z-2">
                <div className="text-center mb-5 mx-auto animate-fade-in" style={{ maxWidth: '800px' }}>
                    <h2 className="display-5 fw-bold mb-4">{t('marketing.title')} <span className="text-gradient">Simplicity</span></h2>
                    <p className="lead text-muted fs-4">
                        {t('marketing.subtitle')}
                    </p>
                    <p className="lead text-muted fs-4">
                        {t('marketing.subtitle2')}
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {/* Stat 1 */}
                    <div className="col-md-4">
                        <div className="glass-panel text-center p-4 rounded-4 h-100 hover-lift">
                            <div className="icon-wrapper mb-3 mx-auto d-flex align-items-center justify-content-center"
                                style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(34, 211, 238, 0.1)' }}>
                                <i className="fas fa-magic text-primary fs-2"></i>
                            </div>
                            <h3 className="display-5 fw-bold text-white mb-2">Zero</h3>
                            <h5 className="text-white mb-2">{t('marketing.zeroLearning')}</h5>
                            <p className="text-muted small">{t('marketing.zeroLearningDesc')}</p>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="col-md-4">
                        <div className="glass-panel text-center p-4 rounded-4 h-100 hover-lift featured-marketing"
                            style={{ border: '1px solid var(--primary)' }}>
                            <div className="icon-wrapper mb-3 mx-auto d-flex align-items-center justify-content-center"
                                style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.1)' }}>
                                <i className="fas fa-feather-alt text-warning fs-2"></i>
                            </div>
                            <h3 className="display-5 fw-bold text-white mb-2">{t('marketing.simpleFeatures')}</h3>
                            <h5 className="text-white mb-2"></h5>
                            <p className="text-muted small">{t('marketing.simpleFeaturesDesc')}</p>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="col-md-4">
                        <div className="glass-panel text-center p-4 rounded-4 h-100 hover-lift">
                            <div className="icon-wrapper mb-3 mx-auto d-flex align-items-center justify-content-center"
                                style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(79, 70, 229, 0.1)' }}>
                                <i className="fas fa-shield-alt text-secondary fs-2"></i>
                            </div>
                            <h3 className="display-5 fw-bold text-white mb-2">100%</h3>
                            <h5 className="text-white mb-2">{t('marketing.privateSecure')}</h5>
                            <p className="text-muted small">{t('marketing.privateSecureDesc')}</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Banner */}
                <div className="glass-panel p-5 mt-5 rounded-4 text-center position-relative overflow-hidden">
                    <div className="position-relative z-2">
                        <h2 className="display-6 fw-bold text-white mb-3">{t('marketing.readyQuestion')}</h2>
                        <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                            {t('marketing.readyDesc')}
                        </p>
                        <a href="#pricing" className="btn btn-primary-custom btn-lg">
                            <i className="fas fa-arrow-right me-2"></i>{t('hero.getStartedBtn')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marketing;
