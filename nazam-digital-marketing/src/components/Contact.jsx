import React from 'react';
import './Contact.css';  // Link to the CSS file

// Import Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section className="contact">
            <h2>Get in Touch</h2>

            {/* Social Media Icons Section */}
            <div className="social-links">
                <a href="mailto:nazamlfsheen833@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="whatsapp-icon" />
                </a>
                <a href="https://www.instagram.com/nazamm._____?igsh=OG5kazExMDZuNTE0" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram-icon" />
                </a>
                <a href="https://t.me/dummylink" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram} size="2x" className="telegram-icon" />
                </a>
            </div>
        </section>
    );
};

export default Contact;
