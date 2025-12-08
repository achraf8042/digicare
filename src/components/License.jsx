import React from 'react';

const License = () => {
    return (
        <section className="license pt-5 mt-5">
            <div className="container pt-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3"><i className="fas fa-file-contract text-primary me-3"></i>License <span className="text-gradient">Agreement</span> (EULA)</h1>
                    <p className="lead text-muted">DigiSpher EMR Software License Terms</p>
                </div>

                <div className="glass-panel p-5 rounded-4 mb-5 mx-auto" style={{ maxWidth: '900px' }}>

                    <div className="p-4 rounded-3 mb-5" style={{ background: 'rgba(245, 158, 11, 0.2)', borderLeft: '4px solid #f59e0b' }}>
                        <h4 className="text-white mb-2"><i className="fas fa-exclamation-triangle me-2"></i>IMPORTANT - READ CAREFULLY</h4>
                        <p className="mb-0 text-white-50">By installing, copying, or otherwise using the Application, you agree to be bound by the terms of this EULA. If you do not agree to the terms of this EULA, do not install or use the Application.</p>
                    </div>

                    <h2 className="text-white mb-4">1. License Grant</h2>
                    <p className="text-muted mb-4">Subject to the terms and conditions of this EULA, DigiSpher EMR Systems grants you a <strong>limited, non-exclusive, non-transferable license</strong> to use the Application solely for your personal or internal business purposes.</p>

                    <h2 className="text-white mb-4">2. Restrictions</h2>
                    <div className="bg-dark bg-opacity-50 p-4 rounded-3 mb-5">
                        <ul className="text-muted mb-0 list-unstyled">
                            <li className="mb-2"><i className="fas fa-times text-danger me-2"></i>You may NOT sell, lease, rent, or transfer the Application to any third party</li>
                            <li className="mb-2"><i className="fas fa-times text-danger me-2"></i>You may NOT distribute, transmit, or share the Application</li>
                            <li className="mb-2"><i className="fas fa-times text-danger me-2"></i>You may NOT modify, reverse engineer, or decompile the Application</li>
                        </ul>
                    </div>

                    <h2 className="text-white mb-4">3. Ownership</h2>
                    <p className="text-muted mb-5">The Application is <strong>licensed, not sold</strong>. All rights, title, and interest in and to the Application, including all intellectual property rights, remain with DigiSpher EMR Systems.</p>

                    <h2 className="text-white mb-4">4. Disclaimer of Warranty</h2>
                    <div className="p-4 rounded-3 mb-5" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444' }}>
                        <p className="mb-0 text-white-50 text-uppercase small">THE APPLICATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
                    </div>

                    <div className="p-4 rounded-3 text-center" style={{ background: 'rgba(8, 145, 178, 0.1)', border: '2px solid var(--primary)' }}>
                        <h4 className="text-white mb-2"><i className="fas fa-check-circle me-2"></i>ACKNOWLEDGMENT</h4>
                        <p className="mb-0 text-white-50">BY INSTALLING, COPYING, OR OTHERWISE USING THIS APPLICATION, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS EULA, UNDERSTAND IT, AND AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default License;
