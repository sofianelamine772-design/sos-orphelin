import { motion } from 'framer-motion';
import heroImage from '../assets/islamic_charity_hero.png';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header page-header-bg" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <motion.h1
                        className="page-title text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Témoignages
                    </motion.h1>
                    <motion.p
                        className="page-subtitle text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Découvrez les histoires et les ressentis de ceux qui vivent la solidarité de près au sein de notre association.
                    </motion.p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="grid grid-cols-2 gap-8">
                        <motion.a
                            href="/partager-vos-histoires"
                            className="glass"
                            style={{ padding: 'var(--spacing-8)', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', textDecoration: 'none' }}
                            whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--color-secondary)' }}
                            transition={{ duration: 0.3 }}
                        >
                            <Quote className="text-secondary" size={40} />
                            <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-2)' }}>Partager vos histoires</h2>
                            <p style={{ flex: 1, color: 'var(--color-text-main)' }}>Lisez les récits et témoignages de nos parrains et marraines qui partagent leur expérience et la joie de donner et soutenir un orphelin.</p>
                            <span className="text-secondary font-bold" style={{ fontWeight: 600 }}>Lire la suite →</span>
                        </motion.a>

                        <motion.a
                            href="/recits-dorphelins-et-orphelines"
                            className="glass"
                            style={{ padding: 'var(--spacing-8)', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', textDecoration: 'none' }}
                            whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--color-secondary)' }}
                            transition={{ duration: 0.3 }}
                        >
                            <Quote className="text-secondary" size={40} />
                            <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-2)' }}>Récits d'orphelins et orphelines</h2>
                            <p style={{ flex: 1, color: 'var(--color-text-main)' }}>Découvrez les lettres touchantes et les remerciements des orphelins qui ont retrouvé le sourire et l'espoir grâce à votre soutien.</p>
                            <span className="text-secondary font-bold" style={{ fontWeight: 600 }}>Lire la suite →</span>
                        </motion.a>

                        <motion.a
                            href="/merci"
                            className="glass"
                            style={{ padding: 'var(--spacing-8)', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', textDecoration: 'none', gridColumn: '1 / -1' }}
                            whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--color-secondary)' }}
                            transition={{ duration: 0.3 }}
                        >
                            <Quote className="text-secondary" size={40} />
                            <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-2)' }}>MERCI</h2>
                            <p style={{ flex: 1, color: 'var(--color-text-main)' }}>Un message de reconnaissance de la part du président de l'association pour tous nos bienfaiteurs et parrains, piliers de notre action.</p>
                            <span className="text-secondary font-bold" style={{ fontWeight: 600 }}>Lire la suite →</span>
                        </motion.a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
