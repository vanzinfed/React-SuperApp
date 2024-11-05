import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Контакты</h4>
                    <p>Email: info@example.com</p>
                    <p>Телефон: +7 (123) 456-78-90</p>
                </div>
                <div className="footer-section">
                    <h4>Социальные сети</h4>
                    <div className="social-buttons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-button facebook">
                            <img src={require('./facebook.png')} alt="Facebook" className="social-logo" />
                            Facebook
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-button twitter">
                            <img src={require('./twitter.png')} alt="Twitter" className="social-logo" />
                            Twitter
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-button instagram">
                            <img src={require('./instagram.png')} alt="Instagram" className="social-logo" />
                            Instagram
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>О нас</h4>
                    <p>Мы - команда, стремящаяся к сотрудничеству и развитию.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} WEB MADI. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;
