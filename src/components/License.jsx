import React from 'react';
import { useTranslation } from 'react-i18next';

const License = () => {
    const { t } = useTranslation();

    return (
        <section className="license pt-5 mt-5">
            <div className="container pt-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3"><i className="fas fa-file-contract text-primary me-3"></i>{t('license.title')} <span className="text-gradient">Agreement</span> (EULA)</h1>
                    <p className="lead text-muted">{t('license.subtitle')}</p>
                </div>

                <div className="glass-panel p-5 rounded-4 mb-5 mx-auto" style={{ maxWidth: '900px' }}>

                    <div className="p-4 rounded-3 mb-5" style={{ background: 'rgba(245, 158, 11, 0.2)', borderLeft: '4px solid #f59e0b' }}>
                        <h4 className="text-white mb-2"><i className="fas fa-exclamation-triangle me-2"></i>{t('license.important')}</h4>
                        <p className="mb-0 text-white-50">{t('license.importantText')}</p>
                    </div>

                    <h2 className="text-white mb-4">{t('license.licenseGrant')}</h2>
                    <p className="text-muted mb-4">{t('license.licenseGrantText')}</p>

                    <h2 className="text-white mb-4">{t('license.restrictions')}</h2>
                    <div className="bg-dark bg-opacity-50 p-4 rounded-3 mb-5">
                        <ul className="text-muted mb-0 list-unstyled">
                            <li className="mb-2"><i className="fas fa-times text-danger me-2"></i>{t('license.restrict1')}</li>
                            <li className="mb-2"><i className="fas fa-times text-danger me-2"></i>{t('license.restrict2')}</li>
                            <li className="mb-2"><i className="fas fa-times text-danger me-2"></i>{t('license.restrict3')}</li>
                        </ul>
                    </div>

                    <h2 className="text-white mb-4">{t('license.ownership')}</h2>
                    <p className="text-muted mb-5">{t('license.ownershipText')}</p>

                    <h2 className="text-white mb-4">{t('license.disclaimer')}</h2>
                    <div className="p-4 rounded-3 mb-5" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444' }}>
                        <p className="mb-0 text-white-50 text-uppercase small">{t('license.disclaimerText')}</p>
                    </div>

                    <div className="p-4 rounded-3 text-center" style={{ background: 'rgba(8, 145, 178, 0.1)', border: '2px solid var(--primary)' }}>
                        <h4 className="text-white mb-2"><i className="fas fa-check-circle me-2"></i>{t('license.acknowledgment')}</h4>
                        <p className="mb-0 text-white-50">{t('license.acknowledgmentText')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default License;
