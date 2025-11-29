import React from 'react';

const Benefits = () => {
    return (
        <section id="benefits" className="py-20 sm:py-32 px-4 sm:px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 sm:mb-20 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">MÉTODO <span className="text-gradient-gold">PROBADO</span></h2>
                        <p className="text-gray-400 max-w-md">No improvisamos. Usamos ciencia y datos para maximizar tu puntaje.</p>
                    </div>
                    <div className="h-[1px] flex-grow bg-white/10 mb-2 hidden md:block ml-10"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {/* Card 1 */}
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden h-full flex flex-col hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:border-brand-blue/30">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-150"></div>
                        <div className="w-14 h-14 bg-brand-blue/20 rounded-2xl flex items-center justify-center text-brand-blue text-2xl mb-8 border border-brand-blue/20 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-brain"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Neuroeducación</h3>
                        <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                            Entrenamos tu cerebro para la resistencia y velocidad. Aprende a gestionar la fatiga cognitiva durante el examen.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden h-full flex flex-col border-brand-gold/20 hover:shadow-[0_0_30px_rgba(255,214,0,0.15)] hover:border-brand-gold/40">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-150"></div>
                        <div className="w-14 h-14 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold text-2xl mb-8 border border-brand-gold/20 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-trophy"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Simulacros IA</h3>
                        <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                            Preguntas tipo ICFES analizadas con Inteligencia Artificial para predecir tus puntos débiles antes del examen real.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden h-full flex flex-col hover:shadow-[0_0_30px_rgba(157,0,255,0.15)] hover:border-brand-purple/30">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-150"></div>
                        <div className="w-14 h-14 bg-brand-purple/20 rounded-2xl flex items-center justify-center text-brand-purple text-2xl mb-8 border border-brand-purple/20 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-chart-line"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Analytics</h3>
                        <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                            Dashboard personalizado con tu progreso. Visualiza tu mejora en Matemáticas, Lectura y Ciencias en tiempo real.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
