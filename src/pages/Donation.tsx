import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import chequeImage from '../assets/cheque.png';
import paypalImage from '../assets/paypal.png';
import helloassoImage from '../assets/helloasso.png';
import cbImage from '../assets/payementaveccb.svg';
import './Donation.css';
import heroImage from '../assets/islamic_charity_hero.png';

const Donation = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <div className="donation-page">
            <div className="page-header contact-header page-header-bg" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <motion.h1
                        className="page-title text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Soutenir nos actions
                    </motion.h1>
                    <motion.p
                        className="page-subtitle text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Choisissez le mode de don qui vous convient. Chaque don compte.
                    </motion.p>
                </div>
            </div>

            <section className="section-padding bg-elevated">
                <div className="container">
                    <motion.div
                        className="payment-methods-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Cheque */}
                        <motion.div className="payment-card" variants={fadeInUp}>
                            <img src={chequeImage} alt="Paiement par chèque" className="payment-logo" />
                            <h3 className="payment-title">Paiement par Chèque</h3>
                            <p className="payment-text">à l'ordre de :<br /><strong>SOS Aide Orphelins</strong></p>
                            <p className="payment-subtext mt-2 text-sm">À envoyer à:<br />2 Petite Allée du Portalas<br />31770 COLOMIERS</p>
                        </motion.div>

                        {/* Virement / CB */}
                        <motion.div className="payment-card" variants={fadeInUp}>
                            <img src={cbImage} alt="Paiement par virement bancaire ou CB" className="payment-logo payment-cb" />
                            <h3 className="payment-title">Paiement par Virement Bancaire</h3>
                            <button className="btn btn-outline btn-sm mt-4">Obtenir le RIB</button>
                        </motion.div>

                        {/* PayPal */}
                        <motion.a
                            href="https://www.paypal.me/sosaideorphelins"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="payment-card payment-link"
                            variants={fadeInUp}
                        >
                            <img src={paypalImage} alt="Paiement par Paypal" className="payment-logo" />
                            <h3 className="payment-title pt-2">Paiement par Paypal</h3>
                            <span className="payment-url">paypal.me/sosaideorphelins</span>
                        </motion.a>

                        {/* HelloAsso */}
                        <motion.a
                            href="https://www.helloasso.com/associations/sos-aide-orphelins/formulaires/3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="payment-card payment-link"
                            variants={fadeInUp}
                        >
                            <img src={helloassoImage} alt="Paiement par HelloAsso" className="payment-logo" />
                            <h3 className="payment-title pt-2">Paiement par HelloAsso</h3>
                            <span className="payment-url text-xs">helloasso.com/associations/...</span>
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <motion.div
                        className="tax-reduction-box"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="tax-icon-wrapper">
                            <Shield className="tax-icon" size={40} />
                        </div>
                        <div className="tax-content">
                            <h2 className="tax-title">RÉDUCTION FISCALE</h2>
                            <h3 className="tax-subtitle">BÉNÉFICIEZ D’UNE RÉDUCTION D’IMPÔT</h3>
                            <p className="tax-text">
                                Vos dons à SOS Aide Orphelins permettent de bénéficier d’une réduction de l’impôt sur le revenu à hauteur de <strong>75%</strong> de leur montant, dans la limite de 1000 € jusqu’au 31 décembre 2021. Au-delà, les dons sont déductibles à 66% dans la limite de 20% du revenu imposable, l’excédent est reportable sur les 5 années suivantes (Art 200 et 238 bis du CGI).
                            </p>
                            <p className="tax-text mt-4">
                                Si vous effectuez un don au nom d’une <strong>personne morale</strong>, la réduction d’impôt est égale à 60% du montant de votre don, dans la limite de 0,5% du chiffre d’affaires.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Donation;
