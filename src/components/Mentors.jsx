import React from 'react';

const Mentors = () => {
    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent to-black/80 relative overflow-hidden">
            {/* Watermark Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 select-none">
                <h2 className="text-[12vw] sm:text-[10vw] font-black text-white/[0.03] leading-none whitespace-nowrap">MENTORES DE ÉLITE</h2>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 sm:mb-24">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight relative inline-block">
                        Mentores de Élite
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-blue rounded-full"></div>
                    </h2>
                    <p className="text-gray-400 mt-8 text-lg">Aprende de los mejores puntajes del país.</p>
                </div>

                <div className="relative rounded-3xl shadow-2xl border border-white/10 group bg-[#0A0A0A] overflow-hidden max-w-4xl mx-auto">
                    {/* Photo with Gradient Mask */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-blue/5 mix-blend-overlay z-10"></div>
                        <img
                            src="https://images.prismic.io/seamosgenios2026/aSskZXNYClf9nmV9_IMG-20251129-WA0074.jpg?auto=format,compress"
                            alt="Equipo Docente"
                            className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                            }}
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 flex flex-col md:flex-row justify-between items-end gap-6 z-20">
                        {/* Mentor 1 */}
                        <div className="flex items-center gap-5 backdrop-blur-md bg-black/60 p-4 rounded-2xl border border-white/10 w-full md:w-auto hover:border-brand-blue/50 transition-colors">
                            <div className="w-1.5 h-12 sm:h-16 bg-brand-blue shadow-[0_0_20px_#00F0FF]"></div>
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">DAVID CARDONA</h3>
                                <p className="text-brand-blue font-bold tracking-wider text-sm sm:text-base">PUNTAJE: 477/500</p>
                            </div>
                        </div>
                        {/* Mentor 2 */}
                        <div className="flex items-center gap-5 backdrop-blur-md bg-black/60 p-4 rounded-2xl border border-white/10 w-full md:w-auto text-right md:text-left md:flex-row-reverse hover:border-brand-gold/50 transition-colors">
                            <div className="w-1.5 h-12 sm:h-16 bg-brand-gold shadow-[0_0_20px_#FFD600]"></div>
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">SEBASTIÁN M.</h3>
                                <p className="text-brand-gold font-bold tracking-wider text-sm sm:text-base">PUNTAJE: 433/500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mentors;
