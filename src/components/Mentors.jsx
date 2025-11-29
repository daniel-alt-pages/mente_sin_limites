import React from 'react';
import { motion } from 'framer-motion';

const Mentors = () => {
    return (
        <section className="py-20 sm:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 sm:gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 md:order-1"
                >
                    <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] rounded-full"></div>
                    <div className="relative z-10 glass-panel rounded-3xl p-2 border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="https://images.prismic.io/seamosgenios2026/aSskZXNYClf9nmV9_IMG-20251129-WA0074.jpg?auto=format,compress"
                            alt="Mentores de Élite"
                            className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl border border-white/10">
                            <p className="text-white font-bold text-lg">Equipo de Expertos</p>
                            <p className="text-brand-blue text-sm">Ingenieros, Médicos y Psicólogos</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2"
                >
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                        MENTORES DE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">ÉLITE</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        No somos profesores tradicionales. Somos profesionales exitosos que ya hackearon el sistema y te enseñarán a hacer lo mismo.
                    </p>

                    <div className="space-y-4">
                        {[
                            "Clases en vivo con interacción real",
                            "Resolución de dudas 24/7 por WhatsApp",
                            "Talleres de manejo de ansiedad y estrés"
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                            >
                                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <span className="text-gray-300 font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>

            {/* Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 pointer-events-none whitespace-nowrap z-0">
                MENTE SIN LÍMITES
            </div>
        </section>
    );
};

export default Mentors;
