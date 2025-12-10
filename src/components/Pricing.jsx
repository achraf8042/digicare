import React from 'react';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
    const { t } = useTranslation();

    return (
        <section id="pricing" className="pricing" style={{ background: 'transparent' }}>
            <div className="container">
                <h2 className="section-title text-center">{t('pricing.title')}</h2>
                <p className="text-center text-muted mb-5" style={{ fontSize: '1.2rem' }}>{t('pricing.subtitle')}</p>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="pricing-card featured">
                            <div className="pricing-badge">{t('pricing.badge')}</div>

                            <div className="text-center mb-4">
                                <h3 className="mb-3 text-white">{t('pricing.licenseTitle')}</h3>
                                <p className="original-price mb-2" style={{ opacity: 0.5 }}>{t('pricing.originalPrice')}</p>
                                <div className="final-price">{t('pricing.discountedPrice')}</div>
                                <div className="discount-label" style={{ background: 'var(--accent)', color: 'black' }}>
                                    <i className="fas fa-tag me-2"></i>{t('pricing.discountLabel')}
                                </div>
                            </div>

                            <ul className="pricing-features">
                                {t('pricing.features', { returnObjects: true }).map((feature, index) => (
                                    <li key={index}><i className="fas fa-check-circle"></i> {feature}</li>
                                ))}
                            </ul>

                            <div className="text-center mt-4">
                                <a href="https://digispher.lemonsqueezy.com/checkout" className="btn btn-primary-custom btn-lg w-100 shadow-lg" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-shopping-cart me-2"></i>{t('pricing.buyBtn')}
                                </a>
                                <p className="mt-3 text-muted">
                                    <i className="fas fa-calendar-alt me-2"></i>{t('pricing.offerValid')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
