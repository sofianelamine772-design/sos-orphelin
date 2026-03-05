import { motion } from 'framer-motion';
import { ShieldAlert, BookOpen, Utensils, HeartPulse, HeartHandshake, Sun } from 'lucide-react';
import './Actions.css';
import heroImage from '../assets/islamic_charity_hero.png';

const Actions = () => {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const actionsList = [
        {
            id: 1,
            icon: <Utensils size={40} />,
            title: "Colis Alimentaires (Iftar/Sadaqa)",
            desc: "Distribution de colis alimentaires pour couvrir les besoins nutritionnels vitaux, tout au long de l'année et particulièrement lors du mois de Ramadan.",
            color: "var(--color-secondary)"
        },
        {
            id: 2,
            icon: <BookOpen size={40} />,
            title: "Pépinière de l'Espoir",
            desc: "Prise en charge des frais de scolarité et soutien scolaire. Permettre à l'orphelin d'étudier, c'est lui donner les outils pour s'épanouir.",
            color: "var(--color-primary)"
        },
        {
            id: 3,
            icon: <HeartPulse size={40} />,
            title: "Soins & Santé",
            desc: "Accompagnement médical : paiement de consultations, médicaments et soins spécialisés pour les enfants et les mères isolées.",
            color: "var(--color-accent)"
        },
        {
            id: 4,
            icon: <ShieldAlert size={40} />,
            title: "Logement & Stabilité",
            desc: "Aide au loyer d'urgence et aménagement des lieux de vie. Offrir un foyer sûr et digne à une veuve est une grande aumône.",
            color: "var(--color-text-muted)"
        },
        {
            id: 5,
            icon: <HeartHandshake size={40} />,
            title: "Kafala (Parrainage)",
            desc: "Un don régulier pour assurer un soutien mensuel stable à un orphelin, garantissant sa dignité, son vêtement et sa scolarité.",
            color: "var(--color-secondary)"
        },
        {
            id: 6,
            icon: <Sun size={40} />,
            title: "Zakat Al-Maal",
            desc: "Nous collectons et distribuons minutieusement votre Zakat (selon les règles de l'Islam) pour répondre en priorité aux urgences des orphelins.",
            color: "var(--color-accent)"
        }
    ];

    return (
        <div className="actions-page">
            <div className="page-header actions-header page-header-bg" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="page-header-overlay"></div>
                <div className="container page-header-content">
                    <motion.h1
                        className="page-title text-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Nos Actions & Projets
                    </motion.h1>
                    <motion.p
                        className="page-subtitle text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Subvenir avec Amana (dépôt de confiance) aux besoins de la Oumma.
                    </motion.p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <motion.div
                        className="actions-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {actionsList.map((action) => (
                            <motion.div
                                key={action.id}
                                className="action-card"
                                variants={itemVariants}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            >
                                <div
                                    className="action-icon-wrapper"
                                    style={{ color: action.color, backgroundColor: `rgba(2, 44, 34, 0.05)` }}
                                >
                                    {action.icon}
                                </div>
                                <h2>{action.title}</h2>
                                <div className="action-divider"></div>
                                <p>{action.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Actions;
