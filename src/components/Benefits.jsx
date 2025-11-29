import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
    const cards = [
        {
            icon: "fa-brain",
            title: "Neuroeducación",
            desc: "Técnicas científicas para potenciar tu memoria y aprendizaje acelerado.",
            color: "text-brand-blue"
        },
        {
            icon: "fa-robot",
            title: "Simulacros IA",
            desc: "Entrenamiento adaptativo que identifica y fortalece tus áreas de mejora.",
            color: "text-brand-gold"
        },
        {
            icon: "fa-chart-line",
            title: "Analytics",
            desc: "Seguimiento detallado de tu progreso con métricas de rendimiento en tiempo real.",
            color: "text-purple-400"
        }
    ];

    return (
        <section id="benefits" className="py-20 sm:py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 sm:mb-24"
                >
                    <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
                        TECNOLOGÍA <span className="text-brand-blue">EDUCATIVA</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Fusionamos pedagogía avanzada con herramientas digitales de última generación.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all group relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 p-32 bg-${card.color.replace('text-', '')}/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-${card.color.replace('text-', '')}/10 transition-all duration-500`}></div>

                            <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
                                <i className={`fa-solid ${card.icon} text-3xl ${card.color}`}></i>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
