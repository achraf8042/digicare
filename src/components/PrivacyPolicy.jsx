import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <section className="privacy-policy pt-5 mt-5">
            <div className="container pt-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3"><i className="fas fa-shield-alt text-primary me-3"></i>{t('privacy.title')} <span className="text-gradient">Policy</span></h1>
                    <p className="lead text-muted">{t('privacy.subtitle')}</p>
                    <div className="badge bg-dark border border-secondary p-2 mt-3">{t('privacy.lastUpdated')}</div>
                </div>

                <div className="glass-panel p-5 rounded-4 mb-5 mx-auto" style={{ maxWidth: '900px' }}>
                    <h2 className="text-white mb-4">{t('privacy.overview')}</h2>
                    <p className="text-muted mb-4">{t('privacy.overviewText')}</p>

                    <div className="p-4 rounded-3 mb-5" style={{ background: 'rgba(8, 145, 178, 0.15)', borderLeft: '4px solid var(--primary)' }}>
                        <h4 className="text-white mb-2"><i className="fas fa-lock me-2"></i>{t('privacy.keyPrinciple')}</h4>
                        <p className="mb-0 text-white-50"><strong>{t('privacy.keyPrincipleText')}</strong></p>
                    </div>

                    <h2 className="text-white mb-4">{t('privacy.onPremiseStorage')}</h2>
                    <ul className="text-muted mb-5">
                        <li className="mb-3"><strong className="text-white">{t('privacy.localStorage')}</strong></li>
                        <li className="mb-3"><strong className="text-white">{t('privacy.noCloudTransmission')}</strong></li>
                        <li className="mb-3"><strong className="text-white">{t('privacy.noRemoteAccess')}</strong></li>
                    </ul>

                    <h2 className="text-white mb-4">{t('privacy.dataBackup')}</h2>
                    <p className="text-muted mb-3">{t('privacy.backupRecommend')}</p>
                    <ul className="text-muted mb-5">
                        <li className="mb-2">{t('privacy.backup1')}</li>
                        <li className="mb-2">{t('privacy.backup2')}</li>
                        <li className="mb-2">{t('privacy.backup3')}</li>
                    </ul>

                    <h2 className="text-white mb-4">{t('privacy.contactUs')}</h2>
                    <p className="text-muted mb-3">{t('privacy.contactUsText')}</p>
                    <div className="p-4 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                        <p className="mb-2 text-white"><i className="fas fa-envelope me-2 text-primary"></i>privacy@digicare-emr.com</p>
                        <p className="mb-0 text-white"><i className="fas fa-globe me-2 text-primary"></i>www.digicare-emr.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
