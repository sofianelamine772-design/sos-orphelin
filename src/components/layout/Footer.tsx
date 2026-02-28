import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import logoImage from '../../assets/logosansfond.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link
                        to="/"
                        className="brand footer-logo"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        <img src={logoImage} alt="SOS Aide Orphelins" className="footer-logo-img filter-brightness-plus" />
                        <span className="brand-text">
                            <strong>SOS</strong> Aide Orphelins
                        </span>
                    </Link>
                    <p className="footer-mission">
                        Donner de la dignité aux femmes veuves et de l’espoir à leurs enfants, dans l'excellence et la compassion envers les plus démunis.
                    </p>
                    <div className="footer-socials">
                        <a href="#" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-links-col">
                    <h4 className="footer-heading">Découvrir</h4>
                    <ul className="footer-links">
                        <li><Link to="/about">Qui Sommes-Nous ?</Link></li>
                        <li><Link to="/actions">Nos Actions</Link></li>
                        <li><Link to="/actions">Transparence</Link></li>
                    </ul>
                </div>

                <div className="footer-links-col">
                    <h4 className="footer-heading">Agir</h4>
                    <ul className="footer-links">
                        <li><Link to="/don">Faire une Sadaqa</Link></li>
                        <li><Link to="/don">Zakat Al-Maal</Link></li>
                        <li><Link to="/contact">Parrainer un Orphelin</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4 className="footer-heading">Contact</h4>
                    <ul className="footer-contact-info">
                        <li>
                            <MapPin size={22} className="text-secondary" />
                            <span>2 Petite Allée du Portalas<br />31770 COLOMIERS</span>
                        </li>
                        <li>
                            <Mail size={22} className="text-secondary" />
                            <span>contact@sos-aide-orphelins.fr</span>
                        </li>
                        <li>
                            <Phone size={22} className="text-secondary" />
                            <span>06.03.27.09.13</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} SOS Aide Orphelins. Tous droits réservés.</p>
                <div style={{ marginTop: 'var(--spacing-2)' }}>
                    <Link to="/mentions-legales" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'underline', fontSize: '0.85rem' }}>Mentions Légales</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
