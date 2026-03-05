import { motion } from 'framer-motion';
import heroImage from '../assets/islamic_charity_hero.png';
import { Quote, UserCircle } from 'lucide-react';

const SponsorStories = () => {
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
                        Partager vos histoires
                    </motion.h1>
                    <motion.p
                        className="page-subtitle text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Récits de parrains et de marraines
                    </motion.p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div className="stories-grid flex flex-col gap-12">

                        <div className="glass story-card" style={{ padding: 'var(--spacing-8)', borderRadius: 'var(--radius-xl)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'var(--spacing-6)' }}>
                                <UserCircle size={48} className="text-secondary" />
                                <div>
                                    <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)' }}>Miloud-Belhachemi</h2>
                                    <p style={{ margin: 0, color: 'var(--color-accent)', fontWeight: 600 }}>Soyons intelligemment généreux</p>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 'calc(48px + 1rem)' }}>
                                <Quote size={24} className="text-secondary" style={{ opacity: 0.5, marginBottom: '0.5rem' }} />
                                <p style={{ fontSize: '1.125rem', color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
                                    Quand on souhaite apporter du réconfort à son prochain, les occasions ne manquent pas, il faut juste se renseigner avant de se lancer. J’ai choisi l’association <strong>SOS AIDE ORPHELINS</strong> suite au conseil d’un ami de confiance et j’en suis ravi.
                                </p>
                                <p style={{ fontSize: '1.125rem', color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
                                    J’ai régulièrement le plaisir de croiser le frère Saïd à la mosquée et d’échanger avec lui : tout sourire et des projets plein la tête, c’est dans le soulagement de la peine des plus démunis que lui et ses contacts trouvent leurs énergies. Saïd est intègre, engagé, dynamique et fait en sorte que l’intention soit concrétisée et le prouve.
                                </p>
                                <p style={{ fontSize: '1.125rem', color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
                                    Les correspondances sont évidemment possibles pour mieux connaître et suivre l’enfant que l’on parraine. Je suis parrain de 3 magnifiques enfants dont les familles sont éprouvées et j’estime qu’il serait dommage de ne pas participer à ce beau projet, surtout quant à l’investissement demandé pour le résultat obtenu.
                                </p>
                                <p style={{ fontSize: '1.125rem', color: 'var(--color-text-main)', lineHeight: 1.8 }}>
                                    Agir selon ses moyens pour apporter du réconfort à une famille durement touchée, ce n’est pas anodin. C’est un geste d’amour envers son prochain, sans autre intérêt que lui venir en aide et qu’il sache que quelque part, un frère ou une sœur pense à lui.
                                </p>
                                <p style={{ fontSize: '1.125rem', color: 'var(--color-accent)', fontWeight: 'bold', marginTop: '1.5rem', fontStyle: 'italic' }}>
                                    Soyons intelligemment généreux.
                                </p>
                            </div>
                        </div>

                        <div className="glass story-card" style={{ padding: 'var(--spacing-8)', borderRadius: 'var(--radius-xl)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'var(--spacing-6)' }}>
                                <UserCircle size={48} className="text-secondary" />
                                <div>
                                    <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)' }}>Lettre de NASSERA</h2>
                                    <p style={{ margin: 0, color: 'var(--color-accent)', fontWeight: 600 }}>Un moyen honorable de subvenir aux besoins de ces orphelins</p>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 'calc(48px + 1rem)' }}>
                                <Quote size={24} className="text-secondary" style={{ opacity: 0.5, marginBottom: '0.5rem' }} />
                                <p style={{ fontSize: '1.125rem', color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
                                    Je voulais mettre en place un don qui aurait un sens dans mes valeurs et mes convictions religieuses, mais je ne savais pas vers quelle association me tourner. Il s’avère qu’en mai 2018 mon conjoint me remet un flyer d’une association qui avait pour but de parrainer des orphelins.
                                </p>
                                <p style={{ fontSize: '1.125rem', color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
                                    J’ai contacté le numéro et elhamdoulilah je me suis entretenue avec la personne qui l’avait mis en place, et mieux encore la personne réside dans ma ville ..!
                                </p>
                                <p style={{ fontSize: '1.125rem', color: 'var(--color-text-main)', lineHeight: 1.8 }}>
                                    J’ai tout de suite fait confiance car Said et son épouse nous ont apporté des preuves concrètes, du sérieux dans cet engagement auprès des orphelins. Ils sont investis et dévoués, qu'Allah les préserve.
                                </p>
                            </div>
                        </div>

                        <div className="glass story-card" style={{ padding: 'var(--spacing-8)', borderRadius: 'var(--radius-xl)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'var(--spacing-6)' }}>
                                <UserCircle size={48} className="text-secondary" />
                                <div>
                                    <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)' }}>Récit d’ABDELKRIM</h2>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 'calc(48px + 1rem)' }}>
                                <Quote size={24} className="text-secondary" style={{ opacity: 0.5, marginBottom: '0.5rem' }} />
                                <p style={{ fontSize: '1.125rem', color: 'var(--color-text-main)', lineHeight: 1.8, fontStyle: 'italic' }}>
                                    (Le témoignage de ce parrain est conservé avec gratitude par l'association)
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default SponsorStories;
