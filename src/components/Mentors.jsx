import React from 'react';
import { motion } from 'framer-motion';

const Mentors = () => {
    return (
        <section id="mentors" className="py-20 sm:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 sm:gap-20 items-center min-h-[80vh]">

                {/* Left Column: Image & Cards */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 lg:order-1 flex flex-col justify-center h-full"
                >
                    <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] rounded-full"></div>

                    {/* Main Image Container */}
                    <div className="relative z-10 glass-panel rounded-3xl p-3 border border-white/10 mb-8 transform hover:scale-[1.02] transition-transform duration-500">
                        <img
                            src="https://images.prismic.io/seamosgenios2026/aSskZXNYClf9nmV9_IMG-20251129-WA0074.jpg?auto=format,compress"
                            alt="Mentores de Élite"
                            className="w-full h-auto rounded-2xl shadow-2xl"
                        />
                    </div>

                    {/* Mentor Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Mentor 1: David Cardona */}
                        <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-brand-blue/50 transition-all group/card hover:-translate-y-1 bg-black/40 backdrop-blur-xl">
                            <div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-3">
                                <div className="w-1.5 h-10 bg-brand-blue shadow-[0_0_15px_#00F0FF]"></div>
                                <div>
                                    <h3 className="text-lg font-black text-white leading-none mb-1">DAVID CARDONA</h3>
                                    <p className="text-brand-blue font-bold tracking-wider text-xs">PUNTAJE: 477/500</p>
                                </div>
                            </div>
                            <ul className="text-gray-300 text-xs space-y-2 font-medium">
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-blue mt-0.5"></i> <span>477/500 en primer intento</span></li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-blue mt-0.5"></i> <span>100/100 en Sociales (2 veces)</span></li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-blue mt-0.5"></i> <span>Certificado en IA con Helppeople</span></li>
                            </ul>
                        </div>

                        {/* Mentor 2: Sebastián Martínez */}
                        <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-all group/card hover:-translate-y-1 bg-black/40 backdrop-blur-xl">
                            <div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-3">
                                <div className="w-1.5 h-10 bg-brand-gold shadow-[0_0_15px_#FFD600]"></div>
                                <div>
                                    <h3 className="text-lg font-black text-white leading-none mb-1">SEBASTIÁN M.</h3>
                                    <p className="text-brand-gold font-bold tracking-wider text-xs">PUNTAJE: 433/500</p>
                                </div>
                            </div>
                            <ul className="text-gray-300 text-xs space-y-2 font-medium">
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-gold mt-0.5"></i> <span>Mejor ICFES 2025, en todo Jamundí</span></li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-gold mt-0.5"></i> <span>100/100 en Sociales e Inglés</span></li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-brand-gold mt-0.5"></i> <span>Certificado en IA Helppeople</span></li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 lg:order-2 flex flex-col justify-center h-full"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-brand-purple text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(157,0,255,0.2)] w-fit"
                    >
                        Experiencia Comprobada
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-[1.1] drop-shadow-2xl"
                    >
                        TUTORES DE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500 filter drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">SEAMOSGENIOS</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white text-lg mb-10 leading-relaxed font-medium drop-shadow-md bg-black/20 p-4 rounded-xl border border-white/5 backdrop-blur-sm"
                    >
                        No somos profesores tradicionales. Somos jóvenes que descifraron el examen y obtuvieron los mejores puntajes del país. Te enseñaremos exactamente cómo lo hicimos.
                    </motion.p>

                    <div className="space-y-4 mb-10">
                        {[
                            { title: "Clases en vivo con interacciones reales", desc: "Pregunta y participa en tiempo real. Nada de clases grabadas aburridas." },
                            { title: "Resolución de dudas 24/7", desc: "Acceso directo a nosotros por WhatsApp para resolver cualquier inquietud." },
                            { title: "Hackeo del Examen", desc: "Estrategias específicas para descartar opciones y responder rápido." },
                            { title: "Comunidad de Estudiantes", desc: "Grupo de estudio activo con otros estudiantes enfocados en el mismo objetivo." },
                            { title: "Material Actualizado", desc: "Acceso a bancos de preguntas recientes y simulacros exclusivos." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
                                className="flex gap-5 group p-4 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10 bg-black/20"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                                    <i className="fa-solid fa-check text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1 group-hover:text-brand-blue transition-colors drop-shadow-sm">{item.title}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.a
                        href="https://chat.whatsapp.com/ESI7hscJuUF1BQIkeBefRj"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-black text-lg rounded-xl hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all w-full sm:w-auto justify-center group border border-white/10"
                    >
                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                        <span>UNIRME A LA COMUNIDAD</span>
                        <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </motion.a>
                </motion.div>

            </div>

            {/* Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none whitespace-nowrap z-0 select-none">
                MENTE SIN LÍMITES
            </div>
        </section>
    );
};

export default Mentors;
