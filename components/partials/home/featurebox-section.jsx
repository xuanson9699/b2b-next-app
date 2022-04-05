import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function FeatureBoxSection() {
    return (
        <section className="feature-boxes-container overflow-hidden">
            <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000} triggerOnce>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-box feature-box-simple text-center">
                                <div className="feature-box-icon">
                                    <i className="icon-earphones-alt"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3 className="mb-0 pb-1">Customer Support</h3>
                                    <h5 className="mb-1 pb-1">Need Assistance?</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature-box feature-box-simple text-center">
                                <div className="feature-box-icon">
                                    <i className="icon-credit-card"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3 className="mb-0 pb-1">SECURED PAYMENT</h3>
                                    <h5 className="mb-1 pb-1">Safe & Fast</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature-box feature-box-simple text-center">
                                <div className="feature-box-icon">
                                    <i className="icon-action-undo"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3 className="mb-0 pb-1">RETURNS</h3>
                                    <h5 className="mb-1 pb-1">Easy & Free</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

export default React.memo(FeatureBoxSection);