import React from 'react';
import { useTranslation } from 'react-i18next';

const Benefits = () => {
    const { t } = useTranslation();

    const benefits = [
        {
            icon: 'fas fa-server',
            titleKey: 'benefits.onPremiseDeployment',
            descKey: 'benefits.onPremiseDesc'
        },
        {
            icon: 'fas fa-user-md',
            titleKey: 'benefits.soloPractitioner',
            descKey: 'benefits.soloPractitionerDesc'
        },
        {
            icon: 'fas fa-clipboard-check',
            titleKey: 'benefits.clinicalWorkflow',
            descKey: 'benefits.clinicalWorkflowDesc'
        },
        {
            icon: 'fas fa-file-pdf',
            titleKey: 'benefits.pdfGeneration',
            descKey: 'benefits.pdfGenerationDesc'
        },
        {
            icon: 'fas fa-ban',
            titleKey: 'benefits.noFees',
            descKey: 'benefits.noFeesDesc'
        },
        {
            icon: 'fas fa-certificate',
            titleKey: 'benefits.lifetimeLicense',
            descKey: 'benefits.lifetimeLicenseDesc'
        }
    ];

    return (
        <section className="benefits" style={{ background: 'transparent' }}>
            <div className="container">
                <h2 className="section-title text-center">{t('benefits.title')}</h2>
                <p className="text-center text-muted mb-5 section-subtitle">{t('benefits.subtitle')}</p>

                <div className="row">
                    {benefits.map((benefit, index) => (
                        <div className="col-lg-6" key={index}>
                            <div className="benefit-item">
                                <div className="d-flex align-items-center">
                                    <div className="benefit-icon me-3 d-flex align-items-center justify-content-center text-white">
                                        <i className={benefit.icon} style={{ fontSize: '1.5rem' }}></i>
                                    </div>
                                    <div className="benefit-content">
                                        <h4 className="mb-1">{t(benefit.titleKey)}</h4>
                                        <p className="mb-0 text-muted small">{t(benefit.descKey)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
