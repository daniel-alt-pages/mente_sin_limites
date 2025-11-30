import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ openModal }) => {
    
    // Función para desplazarse suavemente a la sección de mentores
    const scrollToMentors = () => {
        const mentorsSection = document.getElementById('mentors');
        if (mentorsSection) {
            mentorsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn("La sección con id 'mentors' no se encontró en el documento.");
        }
    };

    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 relative py-8 sm:py-20 overflow-hidden">

            {/* Logo Profile */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mb-4 sm:mb-8 relative group"
            >
                <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse-slow"></div>
                <img
                    src="images/mente_sin_limites.svg"
                    alt="Mente Sin Límites Logo"
                    className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-black/20 backdrop-blur-sm p-1 object-contain group-hover:scale-105 transition-transform duration-500"
                />
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.1] mb-4 sm:mb-8 max-w-5xl"
            >
                MARATÓN <br />
                <span className="text-gradient-blue relative inline-block">
                    ACADÉMICA
                    <svg className="absolute w-full h-2 sm:h-3 -bottom-1 left-0 text-brand-blue opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </span>
            </motion.h1>

            {/* Subtítulo / Organizadores (CORREGIDO) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-4 sm:mb-8 flex flex-col items-center gap-2"
            >
                <p className="text-gray-400 text-sm sm:text-base uppercase tracking-widest font-bold">
                    Organizado por <span className="text-white">SeamosGenios</span> y su grupo de estudio
                </p>
                <a
                    href="https://whatsapp.com/channel/0029Vb0XtNA0rGiOZmEutE2x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-blue hover:text-white transition-colors font-bold border-b border-brand-blue/30 hover:border-brand-blue pb-0.5"
                >
                    <i className="fa-brands fa-whatsapp"></i> MENTE SIN LÍMITES 
                </a>
            </motion.div>

            {/* Descripción */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10 px-2"
            >
                La preparación definitiva para el ICFES Saber 11°.
                <span className="text-white block sm:inline"> Cambiamos la rivalidad por colaboración. Únete a la revolución educativa gratuita donde tu origen no importa, y descubre que la excelencia académica está al alcance de quienes se ayudan mutuamente.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4"
            >
                <button
                    onClick={openModal}
                    className="relative w-full sm:w-auto px-8 py-4 bg-brand-gold text-black font-black text-lg rounded-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,214,0,0.3)] hover:shadow-[0_0_60px_rgba(255,214,0,0.5)]"
                >
                    RESERVAR MI CUPO GRATIS
                    <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 ring-offset-2 ring-offset-black"></div>
                </button>
                <button
                    onClick={scrollToMentors}
                    className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                    CONOCER MÁS
                </button>
            </motion.div>

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/10 backdrop-blur-md mt-6 sm:mt-8"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
                <span className="text-brand-gold text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">ADMISIONES 2025 ABIERTAS</span>
            </motion.div>

            {/* Event Details Bar */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-10 sm:mt-12 w-full max-w-5xl glass-panel rounded-2xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10"
            >
                <div className="text-center md:text-left">
                    <h4 className="text-2xl sm:text-3xl font-black text-white mb-1">30 NOV</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest">6:00 PM - 9:00 PM</p>
                </div>
                <div className="text-center md:text-left md:border-l border-white/5 md:pl-8">
                    <h4 className="text-2xl sm:text-3xl font-black text-brand-gold mb-1">3 HRS</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest">Clases en Vivo</p>
                </div>
                <div className="text-center md:text-left md:border-l border-white/5 md:pl-8">
                    <h4 className="text-2xl sm:text-3xl font-black text-brand-blue mb-1">MATERIAL</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest">Última Prueba 2025</p>
                </div>
                <div className="text-center md:text-left md:border-l border-white/5 md:pl-8">
                    <h4 className="text-2xl sm:text-3xl font-black text-white mb-1">PREMIOS</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest">Ruleta & Simulacro</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
