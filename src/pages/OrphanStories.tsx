import { motion } from 'framer-motion';
import heroImage from '../assets/islamic_charity_hero.png';
import { Quote } from 'lucide-react';

const OrphanStories = () => {
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
                        Récits d’Orphelins et Orphelines
                    </motion.h1>
                </div>
            </div>

            <section className="section-padding">
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div className="stories-grid flex flex-col gap-8">

                        <div className="glass story-card" style={{ padding: 'var(--spacing-8)', borderRadius: 'var(--radius-xl)', position: 'relative' }}>
                            <Quote size={40} className="text-secondary" style={{ opacity: 0.2, position: 'absolute', top: 'var(--spacing-6)', right: 'var(--spacing-8)' }} />
                            <h2 style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-primary)' }}>Récits de AYA</h2>
                            <p className="font-quote" style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: 'var(--spacing-4)', lineHeight: 1.8 }}>
                                « Vous êtes très bon, je ne trouve pas les mots pour vous exprimer mes remerciements parce que vous êtes mon soutien dans cette vie et votre récompense vous sera donné le jour de la résurrection. Toutes mes prières et mes douas sont destinées pour qu’Allah vous donne plus et si vous avez des enfants qu’ils soient des enfants pieux inchallah. Qu’Allah accepte mes douas et accepte vos bonnes actions et qu’il alourdit votre balance parce que vous parrainez une orpheline. »
                            </p>
                            <p style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>Votre récompense auprès d’Allah sera immense.<br />Louange à Allah.</p>
                        </div>

                        <div className="glass story-card" style={{ padding: 'var(--spacing-8)', borderRadius: 'var(--radius-xl)', position: 'relative' }}>
                            <Quote size={40} className="text-secondary" style={{ opacity: 0.2, position: 'absolute', top: 'var(--spacing-6)', right: 'var(--spacing-8)' }} />
                            <h2 style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-primary)' }}>Récit d’AMELE</h2>
                            <p className="font-quote" style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: 'var(--spacing-4)', lineHeight: 1.8 }}>
                                « Je n’arrive pas à exprimer tout ce que je ressens comme sentiment, tendresse et de gratitude. Je ne trouve pas les mots pour vous exprimer tout ce que vous avez fait pour moi. Grâce à dieu et à votre générosité, j’ai pu avoir une vie sereine, stable et j’ai pu poursuivre mes études en toute confiance parce que j’ai eu un parrain comme père qui m’a permis d’avoir une vie meilleure. »
                            </p>
                            <p style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>Qu’Allah vous récompense et vous illumine votre vie et que le paradis soit votre demeure éternelle.<br />Vous êtes un être et un père merveilleux.</p>
                        </div>

                        <div className="glass story-card" style={{ padding: 'var(--spacing-8)', borderRadius: 'var(--radius-xl)', position: 'relative' }}>
                            <Quote size={40} className="text-secondary" style={{ opacity: 0.2, position: 'absolute', top: 'var(--spacing-6)', right: 'var(--spacing-8)' }} />
                            <h2 style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-primary)' }}>Récit de MOUSSA</h2>
                            <p className="font-quote" style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: 'var(--spacing-4)', lineHeight: 1.8 }}>
                                « C’est avec une grande joie que je vous écris cette lettre de remerciements pour vous exprimer ma gratitude pour votre grande générosité à mon égard, et je prie Allah du fond de mon coeur pour qu’il vous apporte la santé, la paix et vous protège de tout mal. Votre aide financière est un soulagement et une clé de bonheur pour moi et ma famille. »
                            </p>
                            <p style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>Qu’Allah vous bénisse et vous procure une longue vie.<br />Merci.</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrphanStories;
