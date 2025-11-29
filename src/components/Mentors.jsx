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

                        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 flex flex-col gap-4 z-20 bg-gradient-to-t from-black via-black/90 to-transparent pt-20">

                            {/* Mentor 1: David Cardona */}
                            <div className="backdrop-blur-md bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-brand-blue/50 transition-colors group/card">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-1.5 h-12 bg-brand-blue shadow-[0_0_20px_#00F0FF]"></div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-black text-white leading-none mb-1">DAVID CARDONA</h3>
                                        <p className="text-brand-blue font-bold tracking-wider text-sm">PUNTAJE: 477/500</p>
                                    </div>
                                </div>
                                <ul className="text-gray-300 text-xs sm:text-sm space-y-1.5 pl-2">
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-blue mt-1"></i> <span>477 en primer intento</span></li>
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-blue mt-1"></i> <span>100/100 en Sociales (2 veces)</span></li>
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-blue mt-1"></i> <span>Certificado en IA con Helppeople</span></li>
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-blue mt-1"></i> <span>Egresado del Colombo Americano</span></li>
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-blue mt-1"></i> <span>Postulado Beca Nutresa Icesi</span></li>
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-blue mt-1"></i> <span>3 años de experiencia Saber 11°</span></li>
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-blue mt-1"></i> <span>Promedio académico de 4.80</span></li>
                                </ul>
                            </div>

                            {/* Mentor 2: Sebastián Martínez */}
                            <div className="backdrop-blur-md bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-colors group/card">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-1.5 h-12 bg-brand-gold shadow-[0_0_20px_#FFD600]"></div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-black text-white leading-none mb-1">SEBASTIÁN MARTÍNEZ</h3>
                                        <p className="text-brand-gold font-bold tracking-wider text-sm">PUNTAJE: 433/500</p>
                                    </div>
                                </div>
                                <ul className="text-gray-300 text-xs sm:text-sm space-y-1.5 pl-2">
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-gold mt-1"></i> <span>Mejor ICFES 2025 Jamundí</span></li>
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-gold mt-1"></i> <span>100/100 en Sociales e Inglés</span></li>
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-gold mt-1"></i> <span>Certificado en IA Helppeople</span></li>
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-gold mt-1"></i> <span>Promedio académico 4.80</span></li>
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-gold mt-1"></i> <span>Nivel B2 en Inglés</span></li>
                                    <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-gold mt-1"></i> <span>2do Lugar Olimpiadas del Saber</span></li>
                                </ul>
                            </div>

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
