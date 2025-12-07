import React from 'react';

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <h2 className="section-title">Powerful Features</h2>
                <p className="text-center text-muted mb-5" style={{ fontSize: '1.2rem' }}>Everything you need to manage your practice efficiently</p>

                <div className="row g-4">
                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Patient Management</h3>
                            <p>Comprehensive patient records with demographics, contact information, allergy tracking, and vital signs monitoring. Quick search and detailed patient profiles at your fingertips.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                            <h3>Appointment Scheduling</h3>
                            <p>Smart appointment management with calendar views, status tracking, and automated reminders. Schedule, reschedule, and track appointments with ease.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-file-medical"></i>
                            </div>
                            <h3>Clinical Notes</h3>
                            <p>Professional clinical documentation with structured templates. Export notes to PDF for printing or sharing with patients and other healthcare providers.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-prescription"></i>
                            </div>
                            <h3>E-Prescription</h3>
                            <p>Generate professional prescriptions with drug name, dosage, frequency, and duration. Export to PDF with your signature. Integrated medication management system.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-exclamation-triangle"></i>
                            </div>
                            <h3>Allergy Tracking</h3>
                            <p>Maintain detailed allergy records for each patient including allergen, reaction type, severity, and notes. Critical safety feature for prescription management.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-heartbeat"></i>
                            </div>
                            <h3>Vital Signs Monitoring</h3>
                            <p>Track patient vitals including blood pressure, heart rate, temperature, weight, and oxygen saturation. Complete history for trend analysis.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Privacy & Security</h3>
                            <p>On-premise deployment means your data stays on your computer. No cloud storage, no recurring subscriptions. Complete control over patient information.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3>Analytics Dashboard</h3>
                            <p>Real-time statistics showing total patients, today's appointments, weekly schedules, and recent activity. Make informed decisions with data insights.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-question-circle"></i>
                            </div>
                            <h3>Comprehensive Help</h3>
                            <p>Built-in help documentation with step-by-step guides for all features. Password recovery with clinic verification for enhanced security.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
