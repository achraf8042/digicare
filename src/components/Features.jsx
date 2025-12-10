import React from 'react';
import { useTranslation } from 'react-i18next';

const Features = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: 'fas fa-users',
            titleKey: 'features.patientManagement.title',
            descKey: 'features.patientManagement.desc'
        },
        {
            icon: 'fas fa-calendar-alt',
            titleKey: 'features.appointmentScheduling.title',
            descKey: 'features.appointmentScheduling.desc'
        },
        {
            icon: 'fas fa-file-medical',
            titleKey: 'features.clinicalNotes.title',
            descKey: 'features.clinicalNotes.desc'
        },
        {
            icon: 'fas fa-prescription',
            titleKey: 'features.ePrescription.title',
            descKey: 'features.ePrescription.desc'
        },
        {
            icon: 'fas fa-exclamation-triangle',
            titleKey: 'features.allergyTracking.title',
            descKey: 'features.allergyTracking.desc'
        },
        {
            icon: 'fas fa-heartbeat',
            titleKey: 'features.vitalSigns.title',
            descKey: 'features.vitalSigns.desc'
        },
        {
            icon: 'fas fa-shield-alt',
            titleKey: 'features.security.title',
            descKey: 'features.security.desc'
        },
        {
            icon: 'fas fa-chart-line',
            titleKey: 'features.analytics.title',
            descKey: 'features.analytics.desc'
        },
        {
            icon: 'fas fa-question-circle',
            titleKey: 'features.help.title',
            descKey: 'features.help.desc'
        }
    ];

    return (
        <section id="features" className="features">
            <div className="container">
                <h2 className="section-title">{t('features.title')}</h2>
                <p className="text-center text-muted mb-5" style={{ fontSize: '1.2rem' }}>{t('features.subtitle')}</p>

                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className={feature.icon}></i>
                                </div>
                                <h3>{t(feature.titleKey)}</h3>
                                <p>{t(feature.descKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
