import { motion } from 'framer-motion';
import heroImage from '../assets/islamic_charity_hero.png';
import { Heart } from 'lucide-react';

const Merci = () => {
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
                        MERCI
                    </motion.h1>
                </div>
            </div>

            <section className="section-padding">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="content-block glass" style={{ padding: 'var(--spacing-12)', borderRadius: 'var(--radius-xl)' }}>
                        <div className="text-center mb-8" style={{ marginBottom: 'var(--spacing-8)' }}>
                            <Heart size={64} className="text-secondary mx-auto" style={{ margin: '0 auto', marginBottom: 'var(--spacing-4)' }} />
                            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-4)' }}>Au nom de tous les parrains</h2>
                        </div>

                        <p style={{ marginBottom: 'var(--spacing-6)', color: 'var(--color-text-main)', fontSize: '1.125rem', lineHeight: '1.8' }}>
                            De l’association <strong>SOS AIDE ORPHELINS</strong>, nous vous adressons nos remerciements les plus sincères. Grâce à vos dons de toutes natures, vous allez permettre aux orphelins de l’association de bénéficier d’une éducation et d'une vie meilleure.
                        </p>
                        <p style={{ marginBottom: 'var(--spacing-6)', color: 'var(--color-text-main)', fontSize: '1.125rem', lineHeight: '1.8' }}>
                            C’est grâce à ses fidèles donateurs que l’association SOS AIDE ORPHELINS accompagne chaque année plus de <strong>600 orphelins</strong> à retrouver une vie plus agréable.
                        </p>

                        <div style={{ backgroundColor: 'rgba(2, 44, 34, 0.03)', padding: 'var(--spacing-6)', borderRadius: 'var(--radius-lg)', marginTop: 'var(--spacing-8)', marginBottom: 'var(--spacing-8)', borderLeft: '4px solid var(--color-secondary)' }}>
                            <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Nos engagements : La transparence avant tout</h3>
                            <p style={{ color: 'var(--color-text-main)', fontSize: '1.1rem' }}>
                                Il est primordial pour nous d’établir une réelle relation de confiance avec nos donateurs. Nous sommes fiers de nos actions et nous souhaitons les partager avec vous.
                            </p>
                        </div>

                        <div className="text-right" style={{ textAlign: 'right', marginTop: 'var(--spacing-12)' }}>
                            <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '4px' }}>Merci à vous tous.</p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}><strong>Said Mohammed-Cherif</strong><br />Le président de l’association</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Merci;
