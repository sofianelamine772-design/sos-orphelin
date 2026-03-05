import { motion } from 'framer-motion';
import { Moon, BookOpen, Quote, Shield } from 'lucide-react';
import './About.css';
import aboutBgImage from '../assets/three-children-making-holding-their-hands-together.jpg';

const About = () => {
    const fadeInUp: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="about-page">
            <div className="page-header page-header-bg" style={{ backgroundImage: `url(${aboutBgImage})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <motion.h1
                        className="page-title text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Qui Sommes-Nous ?
                    </motion.h1>
                    <motion.p
                        className="page-subtitle text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Une association née d'une volonté d'agir sincèrement pour nos frères, sœurs et leurs enfants vulnérables.
                    </motion.p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-image-wrapper"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="about-visual glass">
                                <Moon size={80} className="text-secondary" strokeWidth={1.5} />
                                <h3 className="mt-4">Fondée à Toulouse</h3>
                                <p>Née d'une fraternité locale et d'une volonté d'apporter l'Amana (le dépôt de confiance) là où l'urgence l'exige.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                            }}
                        >
                            <motion.div variants={fadeInUp} className="about-block">
                                <h2 className="text-primary mb-2">Notre Histoire</h2>
                                <p className="about-text">
                                    L'association SOS Aide Orphelins a été fondée dans le but d’agir avec <strong>Ehsan (excellence) et sincérité</strong> pour subvenir aux besoins fondamentaux des personnes les plus vulnérables. Guidés par l'injonction divine d'assister la veuve et l'orphelin, nous avons décidé de ne pas rester les bras croisés face à la précarité.
                                </p>

                                <div className="hadith-box mt-4">
                                    <Quote size={20} className="text-accent mb-2" />
                                    <p className="font-quote arabic-text text-center">أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هَكَذَا</p>
                                    <p className="text-sm italic">
                                        « Celui qui s'occupe d'un orphelin, qu'il lui soit apparenté ou non, et moi, serons dans le Paradis comme ces deux-là » (Le Prophète a joint son index et son majeur). (Mouslim)
                                    </p>
                                </div>
                            </motion.div>

                            <div className="about-cards mt-4">
                                <motion.div className="about-card" variants={fadeInUp}>
                                    <div className="icon-box"><BookOpen size={24} /></div>
                                    <h4>Notre Vision</h4>
                                    <p>Un monde où chaque veuve retrouve sa dignité et où chaque orphelin bénéficie d'une éducation, accomplissant ainsi pleinement son potentiel.</p>
                                </motion.div>

                                <motion.div className="about-card" variants={fadeInUp}>
                                    <div className="icon-box"><Shield size={24} /></div>
                                    <h4>Notre Mission</h4>
                                    <p>Intervenir rapidement pour les besoins vitaux via la Sadaqa et la Zakat, tout en construisant des projets d'autonomie à long terme.</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
