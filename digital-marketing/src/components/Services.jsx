import React from 'react';
import './Services.css';  // Link to the CSS file

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBullhorn, faEnvelope, faChartLine, faFileAlt, faDraftingCompass } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <section className="services">
            <h2>Our Premium Marketing Services</h2>
            <p>We provide data-driven, customer-focused marketing strategies to accelerate your business growth and increase conversions.</p>
            <div className="container">

                <div className="service-card">
                    <FontAwesomeIcon icon={faBullhorn} size="2x" className="service-icon" />
                    <h3>Content Marketing</h3>
                    <p>Expertly crafted content that not only attracts attention but also engages and converts potential customers.</p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faSearch} size="2x" className="service-icon" />
                    <h3>SEO Optimization</h3>
                    <p>We push your site to the top of search engines, driving organic traffic and improving online visibility exponentially.</p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faBullhorn} size="2x" className="service-icon" />
                    <h3>Social Media Marketing</h3>
                    <p>Harness the power of social platforms to engage a broader audience, amplify your message, and foster real connections.</p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="service-icon" />
                    <h3>Email Marketing</h3>
                    <p>Tailored email campaigns that nurture your leads and drive conversions with precision and efficiency.</p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faFileAlt} size="2x" className="service-icon" />
                    <h3>Lead Generation</h3>
                    <p>Capture quality leads through creative strategies like webinars, free trials, and engaging downloadable resources.</p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faChartLine} size="2x" className="service-icon" />
                    <h3>Data Analysis & Optimization</h3>
                    <p>We analyze campaign performance and user behavior to continuously refine strategies, ensuring better conversion rates.</p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faDraftingCompass} size="2x" className="service-icon" />
                    <h3>A/B Testing</h3>
                    <p>Optimize every aspect of your marketing campaign with thorough testing to determine the most effective approaches.</p>
                </div>

            </div>
        </section>
    );
};

export default Services;
