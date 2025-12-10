import React from 'react';
import { useTranslation } from 'react-i18next';

const Demo = () => {
    const { t } = useTranslation();

    return (
        <section id="demo" className="demo" style={{ background: 'linear-gradient(135deg, var(--bg-card), var(--bg-dark))' }}>
            <div className="container">
                <h2 className="section-title text-center">{t('demo.title')}</h2>
                <p className="text-center text-muted mb-5 section-subtitle">{t('demo.subtitle')}</p>

                <div className="demo-container glass-panel p-5 rounded-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-1 order-lg-0 mb-4 mb-lg-0">
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '1rem', border: '2px solid var(--glass-border)' }}>
                                <iframe
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 'none'
                                    }}
                                    src="https://www.youtube.com/embed/jzjOhXOxeQQ?si=FT4TQLttw_nsXk9O"
                                    title="DigiSpher EMR Live Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 order-0 order-lg-1">
                            <h3 className="mb-4 display-6 fw-bold">{t('demo.demoTitle')}</h3>
                            <p className="lead mb-4 text-muted">{t('demo.demoDes')}</p>

                            <div className="mb-4">
                                <h5 className="text-white"><i className="fas fa-check-circle text-primary me-2"></i>{t('demo.fullAccess')}</h5>
                                <p className="text-muted small ms-4">{t('demo.fullAccessDesc')}</p>
                            </div>

                            <div className="mb-4">
                                <h5 className="text-white"><i className="fas fa-check-circle text-primary me-2"></i>{t('demo.sampleData')}</h5>
                                <p className="text-muted small ms-4">{t('demo.sampleDataDesc')}</p>
                            </div>

                            <div className="mb-4">
                                <h5 className="text-white"><i className="fas fa-check-circle text-primary me-2"></i>{t('demo.noInstall')}</h5>
                                <p className="text-muted small ms-4">{t('demo.noInstallDesc')}</p>
                            </div>

                            <a href="#pricing" className="btn btn-primary-custom btn-lg w-100">
                                <i className="fas fa-rocket me-2"></i>{t('demo.getAccessBtn')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;
