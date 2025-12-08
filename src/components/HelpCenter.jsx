import React, { useState } from 'react';

const HelpCenter = () => {
    return (
        <section className="help-center pt-5 mt-5">
            <div className="container pt-5">
                <div className="text-center mb-5 animate-fade-in">
                    <h1 className="display-4 fw-bold mb-3">Professional <span className="text-gradient">User Guide</span></h1>
                    <p className="lead text-muted">Complete documentation & reference manual for DigiSpher EMR</p>
                </div>

                <div className="row g-4 mb-5">
                    {/* Sidebar Navigation */}
                    <div className="col-lg-3">
                        <div className="glass-panel p-4 rounded-4 sticky-lg-top" style={{ top: '100px', maxHeight: '80vh', overflowY: 'auto' }}>
                            <h5 className="mb-4 text-white">Table of Contents</h5>
                            <div className="d-flex flex-column gap-2 nav-pills">
                                <a href="#intro" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">Introduction</a>
                                <a href="#login" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">Login & Security</a>
                                <a href="#patients" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">Patient Management</a>
                                <a href="#appointments" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">Appointments</a>
                                <a href="#notes" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">Clinical Notes</a>
                                <a href="#allergies" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">Allergies</a>
                                <a href="#vitals" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">Vital Signs</a>
                                <a href="#prescriptions" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">Prescriptions</a>
                                <a href="#settings" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">Settings</a>
                                <a href="#backup" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">Backup & Restore</a>
                                <a href="#tips" className="text-decoration-none text-muted hover-text-primary p-2 rounded transition-all">Tips & Best Practices</a>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="col-lg-9">

                        {/* Introduction */}
                        <div id="intro" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-hospital-user text-primary me-3"></i>Introduction</h2>
                            <p className="text-muted"><strong>DigiSpher EMR</strong> is a comprehensive Electronic Medical Record system designed for solo practitioners and small clinics. This desktop application provides a complete suite of tools to manage patient records, appointments, clinical notes, prescriptions, and more.</p>
                        </div>

                        {/* Login & Security */}
                        <div id="login" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-lock text-primary me-3"></i>Login & Password Recovery</h2>

                            <h4 className="text-white mb-3">First Time Login</h4>
                            <div className="alert alert-info border-0 rounded-3 text-white mb-4" style={{ background: 'rgba(34, 211, 238, 0.2)' }}>
                                <strong>Default Credentials:</strong><br />
                                Username: <code className="text-warning">doctor</code><br />
                                Password: <code className="text-warning">doctor123</code>
                            </div>
                            <p className="text-warning mb-4"><i className="fas fa-exclamation-triangle me-2"></i><strong>Important:</strong> Change your password immediately after first login for security.</p>

                            <h4 className="text-white mb-3">Forgot Password? (Secure Recovery)</h4>
                            <p className="text-muted">If you forget your password, follow this secure 3-step recovery process:</p>
                            <ol className="text-muted ms-3">
                                <li className="mb-2">On the login screen, click <strong>Forgot Password?</strong></li>
                                <li className="mb-2"><strong>Step 1:</strong> Enter your username</li>
                                <li className="mb-2"><strong>Step 2:</strong> Enter your clinic name for authentication (must match system record exactly)</li>
                                <li className="mb-2"><strong>Step 3:</strong> Enter your new password twice to confirm</li>
                                <li className="mb-2">Click <strong>Reset Password</strong></li>
                            </ol>
                        </div>

                        {/* Patient Management */}
                        <div id="patients" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-users text-primary me-3"></i>Patient Management</h2>

                            <h4 className="text-white mb-3">Adding a New Patient</h4>
                            <ol className="text-muted ms-3 mb-4">
                                <li className="mb-2">Navigate to <strong>Patients</strong> from the sidebar</li>
                                <li className="mb-2">Click <code className="text-primary bg-dark px-2 py-1 rounded">+ Add Patient</code> (top right)</li>
                                <li className="mb-2">Fill in required information (First Name, Last Name)</li>
                                <li className="mb-2">Click <strong>Save</strong></li>
                            </ol>

                            <h4 className="text-white mb-3">Deleting Patients</h4>
                            <div className="alert alert-warning border-0 rounded-3 text-white" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
                                <i className="fas fa-exclamation-circle me-2"></i>
                                <strong>Warning:</strong> Deleting a patient will also delete all associated appointments, notes, and prescriptions. This action cannot be undone!
                            </div>
                        </div>

                        {/* Appointments */}
                        <div id="appointments" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-calendar-check text-primary me-3"></i>Appointment Scheduling</h2>

                            <h4 className="text-white mb-3">Creating a New Appointment</h4>
                            <ol className="text-muted ms-3 mb-4">
                                <li className="mb-2">Go to <strong>Appointments</strong> tab</li>
                                <li className="mb-2">Click <strong>New Appointment</strong></li>
                                <li className="mb-2">Select patient, date, time, and reason</li>
                                <li className="mb-2">Click <strong>Schedule</strong></li>
                            </ol>

                            <h4 className="text-white mb-3">Status Codes</h4>
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
                            <h2 className="text-white mb-4"><i className="fas fa-notes-medical text-primary me-3"></i>Clinical Notes (SOAP)</h2>

                            <h4 className="text-white mb-3">Creating a Note</h4>
                            <p className="text-muted">Notes follow the standard SOAP format:</p>
                            <ul className="text-muted ms-3 mb-4">
                                <li className="mb-2"><strong>S</strong>ubjective: Chief complaints</li>
                                <li className="mb-2"><strong>O</strong>bjective: Physical exam & vitals</li>
                                <li className="mb-2"><strong>A</strong>ssessment: Diagnosis</li>
                                <li className="mb-2"><strong>P</strong>lan: Treatment & follow-up</li>
                            </ul>

                            <h4 className="text-white mb-3">Exporting to PDF</h4>
                            <p className="text-muted">Click <code className="text-primary bg-dark px-2 py-1 rounded">👁 View Doc</code> then <code className="text-primary bg-dark px-2 py-1 rounded">📄 Export to PDF</code> to generate a professional report.</p>
                        </div>

                        {/* Allergies */}
                        <div id="allergies" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-allergies text-primary me-3"></i>Allergy Management</h2>
                            <p className="text-muted">Track patient allergies to prevent adverse reactions.</p>
                            <div className="alert alert-danger border-0 rounded-3 text-white mb-4" style={{ background: 'rgba(239, 68, 68, 0.2)' }}>
                                <i className="fas fa-shield-alt me-2"></i>
                                <strong>Safety Alert:</strong> Active allergies automatically appear when creating clinical notes or prescriptions!
                            </div>
                        </div>

                        {/* Vitals */}
                        <div id="vitals" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-heartbeat text-primary me-3"></i>Vital Signs Tracking</h2>
                            <p className="text-muted">Record BP, Heart Rate, Temp, Weight, SpO₂, etc. The system automatically calculates BMI.</p>
                            <ul className="text-muted ms-3">
                                <li><strong>Green BMI:</strong> Normal range (18.5 - 24.9)</li>
                                <li><strong>Yellow BMI:</strong> Outside normal range</li>
                            </ul>
                        </div>

                        {/* Prescriptions */}
                        <div id="prescriptions" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-prescription text-primary me-3"></i>Prescription Management</h2>
                            <p className="text-muted">Create e-prescriptions and export them as professional PDFs. Ensure to fill in Medication, Dosage, Frequency, Duration, and Instructions.</p>
                        </div>

                        {/* Settings */}
                        <div id="settings" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-cog text-primary me-3"></i>Settings & Configuration</h2>

                            <h4 className="text-white mb-3">Clinic Information</h4>
                            <p className="text-muted">Navigate to Settings to update your Clinic Name, Address, and License Number. This information appears on all documents.</p>
                            <div className="alert alert-info border-0 rounded-3 text-white mb-4" style={{ background: 'rgba(59, 130, 246, 0.2)' }}>
                                <i className="fas fa-info-circle me-2"></i>
                                <strong>Note:</strong> Clinic Name is used as a secondary security question for password recovery.
                            </div>
                        </div>

                        {/* Backup */}
                        <div id="backup" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-database text-primary me-3"></i>Database Backup</h2>
                            <p className="text-muted">Go to <strong>Settings &gt; Backup Database</strong> to save a snapshot of your records. We recommend:</p>
                            <ul className="text-muted ms-3">
                                <li><strong>Daily:</strong> For active practices</li>
                                <li><strong>Weekly:</strong> For smaller practices</li>
                                <li><strong>Before Updates:</strong> Always backup before updating software</li>
                            </ul>
                        </div>

                        {/* Tips */}
                        <div id="tips" className="glass-panel p-5 rounded-4 mb-5">
                            <h2 className="text-white mb-4"><i className="fas fa-lightbulb text-primary me-3"></i>Tips & Best Practices</h2>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <h5 className="text-white">Data Entry</h5>
                                    <ul className="text-muted small">
                                        <li>Use standardized abbreviations</li>
                                        <li>Fill in all fields for better records</li>
                                        <li>Double-check allergy info</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <h5 className="text-white">Security</h5>
                                    <ul className="text-muted small">
                                        <li>Use strong passwords</li>
                                        <li>Never share credentials</li>
                                        <li>Logout when leaving workstation</li>
                                    </ul>
                                </div>
                            </div>
                            <h5 className="text-white mt-3">Keyboard Shortcuts</h5>
                            <div className="d-flex gap-2 flex-wrap text-muted small mt-2">
                                <span className="border border-secondary px-2 py-1 rounded">Ctrl+N: New Record</span>
                                <span className="border border-secondary px-2 py-1 rounded">Ctrl+S: Save</span>
                                <span className="border border-secondary px-2 py-1 rounded">Ctrl+E: Edit</span>
                                <span className="border border-secondary px-2 py-1 rounded">Esc: Close</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpCenter;
