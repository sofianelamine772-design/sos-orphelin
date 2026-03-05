import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import logoImage from '../../assets/logosansfond.png';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('fr');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // check active translation
        const match = document.cookie.match(/googtrans=\/fr\/([a-z]{2})/);
        if (match && match[1]) {
            setCurrentLang(match[1]);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setLangMenuOpen(false);
    }, [location.pathname]);

    const changeLanguage = (langCode: string) => {
        if (langCode === 'fr') {
            document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
        } else {
            document.cookie = `googtrans=/fr/${langCode}; path=/;`;
            document.cookie = `googtrans=/fr/${langCode}; path=/; domain=.${window.location.hostname};`;
        }
        window.location.reload();
    };

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'Qui sommes-nous', path: '/about' },
        { name: 'Nos Actions', path: '/actions' },
        { name: 'Témoignages', path: '/temoignages' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
            <div className="container nav-container">
                <Link
                    to="/"
                    className="brand"
                    onClick={() => {
                        if (location.pathname === '/') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                >
                    <img src={logoImage} alt="SOS Aide Orphelins" className="brand-logo-img" />
                    <span className="brand-text">
                        <strong>SOS</strong> Aide Orphelins
                    </span>
                </Link>

                <nav className="desktop-nav hidden md:flex">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Language Switcher */}
                    <div className="lang-switcher-container">
                        <button className="lang-toggle-btn" onClick={() => setLangMenuOpen(!langMenuOpen)}>
                            <Globe size={20} />
                            <span className="lang-label">{currentLang.toUpperCase()}</span>
                            <ChevronDown size={16} className={`lang-chevron ${langMenuOpen ? 'open' : ''}`} />
                        </button>
                        {langMenuOpen && (
                            <div className="lang-dropdown">
                                <button className={`lang-option ${currentLang === 'fr' ? 'active' : ''}`} onClick={() => changeLanguage('fr')}>🇫🇷 Français</button>
                                <button className={`lang-option ${currentLang === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>🇬🇧 English</button>
                                <button className={`lang-option ${currentLang === 'ar' ? 'active' : ''}`} onClick={() => changeLanguage('ar')}>🇸🇦 العربية</button>
                            </div>
                        )}
                    </div>

                    <Link to="/don" className="btn btn-primary nav-cta">
                        Faire un don
                    </Link>
                </nav>

                <button
                    className="mobile-menu-btn md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-nav md:hidden ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}

                    {/* Mobile Language Switcher */}
                    <li className="mobile-lang-section">
                        <div className="mobile-lang-header">
                            <Globe size={20} />
                            <span>Langue / Language / لغة</span>
                        </div>
                        <div className="mobile-lang-options">
                            <button className={`mobile-lang-btn ${currentLang === 'fr' ? 'active' : ''}`} onClick={() => changeLanguage('fr')}>🇫🇷 FR</button>
                            <button className={`mobile-lang-btn ${currentLang === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>🇬🇧 EN</button>
                            <button className={`mobile-lang-btn ${currentLang === 'ar' ? 'active' : ''}`} onClick={() => changeLanguage('ar')}>🇸🇦 AR</button>
                        </div>
                    </li>

                    <li className="mobile-nav-item-cta">
                        <Link to="/contact" className="btn btn-primary w-full text-center">
                            Faire un don
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
