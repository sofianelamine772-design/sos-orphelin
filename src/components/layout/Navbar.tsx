import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '../../assets/logosansfond.png';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'Qui sommes-nous', path: '/about' },
        { name: 'Nos Actions', path: '/actions' },
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
