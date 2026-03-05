import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';
import heroImage from '../assets/islamic_charity_hero.png';

const Contact = () => {
    const fadeInUp: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="contact-page">
            <div className="page-header contact-header page-header-bg" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <motion.h1
                        className="page-title text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Sadaqa & Soutien
                    </motion.h1>
                    <motion.p
                        className="page-subtitle text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Faites de votre aumône une protection et une source de bienfaits. Contactez-nous pour toute question.
                    </motion.p>
                </div>
            </div>

            <section className="section-padding contact-section">
                <div className="container contact-container">
                    {/* Info Column */}
                    <motion.div
                        className="contact-info-col"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h2>Unissons nos efforts</h2>
                        <p className="contact-intro">
                            Que ce soit pour accomplir une Sadaqa Jariya, payer votre Zakat Al-Maal, ou proposer un partenariat... Vos actions nous permettent d'agir sur le terrain.
                        </p>

                        <div className="info-cards">
                            <div className="info-card">
                                <div className="info-icon"><MapPin size={24} /></div>
                                <div className="info-text">
                                    <h4>Adresse (Courrier)</h4>
                                    <p>SOS Aide Orphelins<br />2 Petite Allée du Portalas<br />31770 COLOMIERS</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon"><Mail size={24} /></div>
                                <div className="info-text">
                                    <h4>Email</h4>
                                    <p>contact@sos-aide-orphelins.fr</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon"><Phone size={24} /></div>
                                <div className="info-text">
                                    <h4>Téléphone / WhatsApp</h4>
                                    <p>06.03.27.09.13</p>
                                </div>
                            </div>
                        </div>

                        <div className="donation-box mt-4">
                            <h3>Faire une action</h3>
                            <p>« Jamais aumône n'a diminué une richesse. »</p>
                            <Link to="/don" className="btn btn-primary w-full mt-4 text-center block" style={{ display: 'block', textAlign: 'center' }}>
                                Faire un Don
                            </Link>
                        </div>
                    </motion.div>

                    {/* Form Column */}
                    <motion.div
                        className="contact-form-col"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3>Envoyez-nous un message</h3>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group grid-cols-2 grid gap-4">
                                <div className="input-field mt-4">
                                    <label htmlFor="firstName">Prénom</label>
                                    <input type="text" id="firstName" placeholder="Votre prénom" />
                                </div>
                                <div className="input-field mt-4">
                                    <label htmlFor="lastName">Nom</label>
                                    <input type="text" id="lastName" placeholder="Votre nom" />
                                </div>
                            </div>

                            <div className="form-group mt-4">
                                <label htmlFor="email">Adresse Email</label>
                                <input type="email" id="email" placeholder="nom@exemple.com" />
                            </div>

                            <div className="form-group mt-4">
                                <label htmlFor="subject">Sujet</label>
                                <select id="subject">
                                    <option value="sadaqa">Soutien / Sadaqa</option>
                                    <option value="zakat">Paiement Zakat Al-Maal</option>
                                    <option value="kafala">Kafala (Parrainage d'orphelin)</option>
                                    <option value="info">Demande d'informations</option>
                                </select>
                            </div>

                            <div className="form-group mt-4 mb-2">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={5} placeholder="Comment pouvons-nous vous assister ?"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-submit w-full">
                                <span>Envoyer le Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
