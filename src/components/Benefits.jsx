import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
    const cards = [
        {
            icons: ["fa-file-pen", "fa-clock", "fa-check-double"],
            title: "Entrenamiento Real",
            desc: "Material actualizado de la última prueba y mini-simulacro en vivo para medir tu nivel.",
            color: "text-brand-blue",
            borderColor: "group-hover:border-brand-blue/50",
            bgHover: "group-hover:bg-brand-blue/5"
        },
        {
            icons: ["fa-gift", "fa-trophy", "fa-star"],
            title: "Ruleta de Premios",
            desc: "Participa por becas, asesorías personalizadas y material de estudio exclusivo.",
            color: "text-brand-gold",
            borderColor: "group-hover:border-brand-gold/50",
            bgHover: "group-hover:bg-brand-gold/5"
        },
        {
            icons: ["fa-users", "fa-comments", "fa-video"],
            title: "Comunidad VIP",
            desc: "Acceso a grupo privado de WhatsApp con estudiantes de alto rendimiento.",
            color: "text-brand-purple",
            borderColor: "group-hover:border-brand-purple/50",
            bgHover: "group-hover:bg-brand-purple/5"
        }
    ];

    return (
        <section className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                        Beneficios del<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-600">Grupo de estudio</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Hemos diseñado una experiencia de aprendizaje inmersiva que combina la mejor tecnología con la metodología más efectiva.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`glass-panel p-8 rounded-3xl border border-white/10 transition-all duration-300 hover:-translate-y-2 group ${card.borderColor} ${card.bgHover}`}
                        >
                            <div className="flex justify-center gap-4 mb-6">
                                {card.icons.map((icon, i) => (
                                    <div key={i} className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl ${card.color} group-hover:scale-110 transition-transform duration-300 delay-${i * 100}`}>
                                        <i className={`fa-solid ${icon}`}></i>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-white transition-colors">{card.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed text-center group-hover:text-gray-300 transition-colors">
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
