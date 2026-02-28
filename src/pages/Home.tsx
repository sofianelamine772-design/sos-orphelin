import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartHandshake, Shield, Sparkles } from 'lucide-react';
import heroImage from '../assets/islamic_charity_hero.png';
import './Home.css';

const Home = () => {
    const fadeInUp: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-overlay"></div>
                <div className="container hero-container">
                    <motion.div
                        className="hero-content text-center"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1 variants={fadeInUp} className="hero-title">
                            Donner de la dignité aux femmes veuves et de l’espoir à leurs enfants.
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="hero-description">
                            Œuvrons ensemble pour subvenir aux besoins de ceux qui sont éprouvés.
                            Au nom de la fraternité et de la solidarité.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="hero-cta">
                            <Link to="/don" className="btn btn-primary btn-lg">
                                Faire un Don
                            </Link>
                            <Link to="/actions" className="btn btn-outline btn-lg">
                                Nos Actions
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Islamic Hadith/Quran Section */}
            <section className="section-padding section-quote">
                <div className="container">
                    <motion.div
                        className="quote-container"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <p className="font-quote arabic-text">
                            وَإِن تُخْفُوهَا وَتُؤْتُوهَا الْفُقَرَاءَ فَهُوَ خَيْرٌ لَّكُمْ
                        </p>
                        <p className="quote-translation">
                            « Et si vous les cachez (vos aumônes) et les donnez aux pauvres, cela est bien meilleur pour vous. »
                        </p>
                        <span className="quote-source">— Coran : Al-Baqarah (2:271)</span>
                    </motion.div>
                </div>
            </section>

            {/* Modern Mission Section */}
            <section className="section-padding bg-elevated">
                <div className="container">
                    <motion.div
                        className="mission-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="section-title">Notre Engagement</h2>
                        <p className="section-subtitle">
                            S'inspirant des préceptes de Miséricorde, l'association s'attache à offrir un soutien matériel et moral continu.
                        </p>
                    </motion.div>

                    <motion.div
                        className="features-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        {/* Feature 1 */}
                        <motion.div
                            className="feature-card"
                            variants={fadeInUp}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="feature-icon"><HeartHandshake size={32} /></div>
                            <h3>Parrainage d'Orphelins</h3>
                            <p>
                                « Moi et celui qui prend en charge un orphelin serons au Paradis comme ces deux doigts. » (Rapporté par Al-Bukhari)
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            className="feature-card"
                            variants={fadeInUp}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="feature-icon"><Shield size={32} /></div>
                            <h3>Soutien aux Veuves</h3>
                            <p>
                                Accompagnement social, aide au logement et soutien alimentaire, pour rendre dignité et autonomie aux femmes seules.
                            </p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            className="feature-card"
                            variants={fadeInUp}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="feature-icon"><Sparkles size={32} /></div>
                            <h3>Transparence & Amana</h3>
                            <p>
                                Chaque don est un dépôt 100% reversé. Nous garantissons une totale transparence dans l'allocation de vos aumônes (Sadaqa).
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Home;
