import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ComparisonFAQ = () => {
    const { t } = useTranslation();
    const [expandedFAQ, setExpandedFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    const comparisonData = [
        { feature: 'comparison.deployment', onPremise: 'comparison.deployOnPremise', cloud: 'comparison.deployCloud' },
        { feature: 'comparison.internet', onPremise: 'comparison.internetOnPremise', cloud: 'comparison.internetCloud' },
        { feature: 'comparison.cost', onPremise: 'comparison.costOnPremise', cloud: 'comparison.costCloud' },
        { feature: 'comparison.privacy', onPremise: 'comparison.privacyOnPremise', cloud: 'comparison.privacyCloud' },
        { feature: 'comparison.ease', onPremise: 'comparison.easeOnPremise', cloud: 'comparison.easeCloud' },
        { feature: 'comparison.updates', onPremise: 'comparison.updatesOnPremise', cloud: 'comparison.updatesCloud' },
        { feature: 'comparison.audience', onPremise: 'comparison.audienceOnPremise', cloud: 'comparison.audienceCloud' },
    ];

    const faqItems = [
        { q: 'comparison.faq1q', a: 'comparison.faq1a' },
        { q: 'comparison.faq2q', a: 'comparison.faq2a' },
        { q: 'comparison.faq3q', a: 'comparison.faq3a' },
        { q: 'comparison.faq4q', a: 'comparison.faq4a' },
        { q: 'comparison.faq5q', a: 'comparison.faq5a' },
        { q: 'comparison.faq6q', a: 'comparison.faq6a' },
        { q: 'comparison.faq7q', a: 'comparison.faq7a' },
    ];

    return (
        <section className="comparison-faq py-5">
            <div className="container">
                {/* Comparison Section */}
                <div className="mb-5">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">
                            <i className="fas fa-chart-bar text-primary me-3"></i>
                            {t('comparison.title')}
                        </h2>
                        <p className="lead text-muted">{t('comparison.subtitle')}</p>
                    </div>

                    <div className="table-responsive glass-panel p-4 rounded-4" style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)' }}>
                        <table className="table mb-0" style={{ borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.4), rgba(8, 145, 178, 0.2))', borderBottom: '3px solid var(--primary)' }}>
                                    <th style={{ color: '#000000', padding: '1rem', textAlign: 'left', fontWeight: '700', border: 'none' }}>{t('comparison.feature')}</th>
                                    <th style={{ color: '#000000', padding: '1rem', textAlign: 'left', fontWeight: '700', border: 'none' }}>{t('comparison.digiSpher')}</th>
                                    <th style={{ color: '#000000', padding: '1rem', textAlign: 'left', fontWeight: '700', border: 'none' }}>{t('comparison.cloudEmr')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, idx) => (
                                    <tr key={idx} style={{ 
                                        background: idx % 2 === 0 ? 'rgba(8, 145, 178, 0.12)' : 'rgba(8, 145, 178, 0.05)',
                                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                        transition: 'all 0.3s ease'
                                    }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(8, 145, 178, 0.2)'} onMouseLeave={(e) => e.currentTarget.style.background = idx % 2 === 0 ? 'rgba(8, 145, 178, 0.12)' : 'rgba(8, 145, 178, 0.05)'}>
                                        <td style={{ color: '#000000', padding: '1rem', fontWeight: '700', border: 'none' }}>{t(row.feature)}</td>
                                        <td style={{ color: '#10b981', padding: '1rem', border: 'none' }}><i className="fas fa-check-circle me-2"></i>{t(row.onPremise)}</td>
                                        <td style={{ color: '#000000', padding: '1rem', border: 'none' }}>{t(row.cloud)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-5">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">
                            <i className="fas fa-question-circle text-primary me-3"></i>
                            {t('comparison.faqTitle')}
                        </h2>
                        <p className="lead text-muted">{t('comparison.faqSubtitle')}</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {faqItems.map((item, index) => (
                                <div key={index} className="mb-3">
                                    <button
                                        className="btn btn-light w-100 text-start d-flex justify-content-between align-items-center p-4 rounded-3 glass-panel-light"
                                        onClick={() => toggleFAQ(index)}
                                        style={{
                                            background: expandedFAQ === index ? 'rgba(8, 145, 178, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                                            border: expandedFAQ === index ? '2px solid var(--primary)' : '1px solid rgba(255, 255, 255, 0.1)'
                                        }}
                                    >
                                        <span className="fw-bold text-white">{t(item.q)}</span>
                                        <i className={`fas fa-chevron-down text-primary transition-all ${expandedFAQ === index ? 'rotate-180' : ''}`}></i>
                                    </button>

                                    {expandedFAQ === index && (
                                        <div className="p-4 bg-dark bg-opacity-50 rounded-3 border-start border-primary border-5 mt-2 animate-fade-in">
                                            <p className="text-muted mb-0">{t(item.a)}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonFAQ;
