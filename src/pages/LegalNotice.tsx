import { motion } from 'framer-motion';
import heroImage from '../assets/islamic_charity_hero.png';

const LegalNotice = () => {
    return (
        <div className="legal-page">
            <div className="page-header contact-header page-header-bg" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <motion.h1
                        className="page-title text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Mentions Légales
                    </motion.h1>
                </div>
            </div>

            <section className="section-padding">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="content-block" style={{ backgroundColor: 'var(--color-surface)', padding: 'var(--spacing-8)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)' }}>
                        <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-4)' }}>Éditeur du site</h2>
                        <p style={{ marginBottom: 'var(--spacing-6)', color: 'var(--color-text-main)', lineHeight: '1.7' }}>
                            Le site web <strong>sos-aide-orphelins.fr</strong> est édité par l'association SOS Aide Orphelins.<br /><br />
                            <strong>Siège social :</strong><br />
                            2 Petite Allée du Portalas<br />
                            31770 COLOMIERS<br />
                            France<br /><br />
                            <strong>Contact :</strong><br />
                            Email : contact@sos-aide-orphelins.fr<br />
                            Téléphone : 06.03.27.09.13
                        </p>

                        <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-4)' }}>Hébergement</h2>
                        <p style={{ marginBottom: 'var(--spacing-6)', color: 'var(--color-text-main)', lineHeight: '1.7' }}>
                            (Remplissez ici le nom de votre hébergeur de site web - ex: Hostinger, OVH, Vercel, Netlify)<br />
                            Adresse de l'hébergeur : (Adresse de l'hébergeur)
                        </p>

                        <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-4)' }}>Propriété intellectuelle</h2>
                        <p style={{ marginBottom: 'var(--spacing-6)', color: 'var(--color-text-main)', lineHeight: '1.7' }}>
                            L'ensemble des éléments figurant sur notre site (textes, images, logos, etc.) sont protégés par les dispositions du Code de la Propriété Intellectuelle.
                            Toute reproduction, totale ou partielle, est strictement interdite sans autorisation préalable.
                        </p>

                        <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-4)' }}>Données personnelles</h2>
                        <p style={{ marginBottom: 'var(--spacing-6)', color: 'var(--color-text-main)', lineHeight: '1.7' }}>
                            L'association SOS Aide Orphelins s’engage à ce que la collecte et le traitement de vos données, effectués à partir du site, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
                            Pour toute information ou exercice de vos droits sur les traitements de données personnelles gérés par l’association, vous pouvez nous contacter via l'adresse email mentionnée plus haut.
                        </p>

                        <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-4)' }}>Cookies</h2>
                        <p style={{ color: 'var(--color-text-main)', lineHeight: '1.7' }}>
                            La navigation sur le site est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LegalNotice;
