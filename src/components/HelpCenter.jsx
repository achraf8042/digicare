import React from 'react';
import { useTranslation } from 'react-i18next';

const HelpCenter = () => {
    const { t } = useTranslation();

    return (
        <section className="help-center pt-5 mt-5">
            <div className="container pt-5">
                <div className="text-center mb-5 animate-fade-in">
                    <h1 className="display-4 fw-bold mb-3">{t('helpCenter.title')} <span className="text-gradient">{t('helpCenter.support')}</span></h1>
                    <p className="lead text-muted">{t('helpCenter.subtitle')}</p>
                </div>

                <div className="row g-4 mb-5">
                    {/* Sidebar Navigation */}
                    <div className="col-lg-3">
                        <div className="glass-panel p-4 rounded-4 sticky-lg-top" style={{ top: '100px', maxHeight: '80vh', overflowY: 'auto' }}>
                            <h5 className="mb-4 text-white">{t('helpCenter.tableOfContents')}</h5>
                            <div className="d-flex flex-column gap-2 nav-pills">
                                <a href="#intro" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">{t('helpCenter.introduction')}</a>
                                <a href="#login" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">{t('helpCenter.loginSecurity')}</a>
                                <a href="#patients" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">{t('helpCenter.patientManagement')}</a>
                                <a href="#appointments" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">{t('helpCenter.appointments')}</a>
                                <a href="#notes" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">{t('helpCenter.clinicalNotes')}</a>
                                <a href="#allergies" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">{t('helpCenter.allergies')}</a>
                                <a href="#vitals" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">{t('helpCenter.vitalSigns')}</a>
                                <a href="#prescriptions" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">{t('helpCenter.prescriptions')}</a>
                                <a href="#settings" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">{t('helpCenter.settings')}</a>
                                <a href="#backup" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">{t('helpCenter.backup')}</a>
                                <a href="#tips" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">{t('helpCenter.tips')}</a>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="col-lg-9">

                        {/* Introduction */}
                        <div id="intro" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-hospital-user text-primary me-3"></i>{t('helpCenter.introduction')}</h2>
                            <p className="text-muted">{t('helpCenter.introText')}</p>
                        </div>

                        {/* Login & Security */}
                        <div id="login" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-lock text-primary me-3"></i>{t('helpCenter.loginSecurity')}</h2>

                            <h4 className="text-white mb-3">{t('helpCenter.firstTimeLogin')}</h4>
                            <div className="alert alert-info border-0 rounded-3 text-white mb-4" style={{ background: 'rgba(34, 211, 238, 0.2)' }}>
                                <strong>{t('helpCenter.defaultCredentials')}</strong><br />
                                {t('helpCenter.username')} <code className="text-warning">doctor</code><br />
                                {t('helpCenter.password')} <code className="text-warning">doctor123</code>
                            </div>
                            <p className="text-warning mb-4"><i className="fas fa-exclamation-triangle me-2"></i><strong>Important:</strong> {t('helpCenter.changePassword')}</p>

                            <h4 className="text-white mb-3">{t('helpCenter.forgotPassword')}</h4>
                            <p className="text-muted">{t('helpCenter.forgotPasswordDesc')}</p>
                            <ol className="text-muted ms-3">
                                <li className="mb-2">{t('helpCenter.step1')}</li>
                                <li className="mb-2">{t('helpCenter.step2')}</li>
                                <li className="mb-2">{t('helpCenter.step3')}</li>
                                <li className="mb-2">{t('helpCenter.step4')}</li>
                                <li className="mb-2">{t('helpCenter.step5')}</li>
                            </ol>
                        </div>

                        {/* Patient Management */}
                        <div id="patients" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-users text-primary me-3"></i>{t('helpCenter.patientManagement')}</h2>

                            <h4 className="text-white mb-3">{t('helpCenter.addNewPatient')}</h4>
                            <ol className="text-muted ms-3 mb-4">
                                <li className="mb-2">{t('helpCenter.navPatients')}</li>
                                <li className="mb-2">{t('helpCenter.addPatientBtn')}</li>
                                <li className="mb-2">{t('helpCenter.fillRequired')}</li>
                                <li className="mb-2">{t('helpCenter.clickSave')}</li>
                            </ol>

                            <h4 className="text-white mb-3">{t('helpCenter.deletingPatients')}</h4>
                            <div className="alert alert-warning border-0 rounded-3 text-white" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
                                <i className="fas fa-exclamation-circle me-2"></i>
                                <strong>Warning:</strong> {t('helpCenter.deleteWarning')}
                            </div>
                        </div>

                        {/* Appointments */}
                        <div id="appointments" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-calendar-check text-primary me-3"></i>{t('helpCenter.appointments')}</h2>

                            <h4 className="text-white mb-3">{t('helpCenter.createAppointment')}</h4>
                            <ol className="text-muted ms-3 mb-4">
                                <li className="mb-2">{t('helpCenter.gotoAppointments')}</li>
                                <li className="mb-2">{t('helpCenter.newAppointmentBtn')}</li>
                                <li className="mb-2">{t('helpCenter.selectDetails')}</li>
                                <li className="mb-2">{t('helpCenter.clickSchedule')}</li>
                            </ol>

                            <h4 className="text-white mb-3">{t('helpCenter.statusCodes')}</h4>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-primary">SCHEDULED</span>
                                <span className="badge bg-success">CONFIRMED</span>
                                <span className="badge bg-info text-dark">IN_PROGRESS</span>
                                <span className="badge bg-secondary">COMPLETED</span>
                                <span className="badge bg-danger">CANCELLED</span>
                                <span className="badge bg-dark border border-secondary">NO_SHOW</span>
                            </div>
                        </div>

                        {/* Clinical Notes */}
                        <div id="notes" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-notes-medical text-primary me-3"></i>{t('helpCenter.clinicalNotes')}</h2>

                            <h4 className="text-white mb-3">{t('helpCenter.createNote')}</h4>
                            <p className="text-muted">{t('helpCenter.soapFormat')}</p>
                            <ul className="text-muted ms-3 mb-4">
                                <li className="mb-2">{t('helpCenter.subjective')}</li>
                                <li className="mb-2">{t('helpCenter.objective')}</li>
                                <li className="mb-2">{t('helpCenter.assessment')}</li>
                                <li className="mb-2">{t('helpCenter.plan')}</li>
                            </ul>

                            <h4 className="text-white mb-3">{t('helpCenter.exportPDF')}</h4>
                            <p className="text-muted">{t('helpCenter.exportDesc')}</p>
                        </div>

                        {/* Allergies */}
                        <div id="allergies" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-allergies text-primary me-3"></i>{t('helpCenter.allergies')}</h2>
                            <p className="text-muted">{t('helpCenter.allergyManagement')}</p>
                            <div className="alert alert-danger border-0 rounded-3 text-white mb-4" style={{ background: 'rgba(239, 68, 68, 0.2)' }}>
                                <i className="fas fa-shield-alt me-2"></i>
                                <strong>Safety Alert:</strong> {t('helpCenter.safetyAlert')}
                            </div>
                        </div>

                        {/* Vitals */}
                        <div id="vitals" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-heartbeat text-primary me-3"></i>{t('helpCenter.vitalSigns')}</h2>
                            <p className="text-muted">{t('helpCenter.vitalSignsTracking')}</p>
                            <ul className="text-muted ms-3">
                                <li><strong>{t('helpCenter.greenBMI')}</strong></li>
                                <li><strong>{t('helpCenter.yellowBMI')}</strong></li>
                            </ul>
                        </div>

                        {/* Prescriptions */}
                        <div id="prescriptions" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-prescription text-primary me-3"></i>{t('helpCenter.prescriptions')}</h2>
                            <p className="text-muted">{t('helpCenter.prescriptionManagement')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpCenter;

