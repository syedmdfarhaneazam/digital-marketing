import React from 'react';
import './Hero.css';  // Link to the CSS file

const Hero = () => {
    return (
        <section className="hero">
            <h1 className='title' >NAZAM DIGITAL MARKETING</h1>
            <h1>Boost Your Business</h1>
            <p>Maximize your conversions with our cutting-edge strategies, driving leads like never before.</p>

            <div className="hero-details">
                <h2>Our Proven Strategies</h2>
                <ul>
                    <li><strong>Targeting Previous Visitors:</strong> Re-engage users who visited your website but didn’t convert, using precision-targeted ads that reignite their interest.</li>
                    <li><strong>Personalized Offers:</strong> Deliver customized ads based on past user interactions, creating relevance that leads to higher engagement and conversions.</li>
                    <li><strong>Cross-Platform Engagement:</strong> Expand your reach with seamless marketing across social media, search engines, and more, ensuring consistent messaging that strengthens your brand.</li>
                    <li><strong>Improving User Experience (UX):</strong> Optimize your website's design and navigation to provide a flawless experience that keeps visitors engaged and leads them to conversion.</li>
                    <li><strong>Effective Call-to-Actions (CTA):</strong> Craft compelling, action-driven CTAs that push users to take the next step, whether it’s signing up, making a purchase, or learning more.</li>
                    <li><strong>Landing Page Optimization:</strong> Create high-converting, dedicated landing pages tailored to specific campaigns, making it easy for your audience to resonate with your offer and convert.</li>
                </ul>

                <p>For as low as <strong>$3,500</strong>, we can help you generate <strong>$50,000+</strong> in sales with our expert marketing team. From Facebook Ads, Instagram Ads, to lead generation and social media marketing, we’ve got you covered!</p>
            </div>
        </section>
    );
};

export default Hero;
