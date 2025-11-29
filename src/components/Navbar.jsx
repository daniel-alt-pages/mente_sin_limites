import React from 'react';

const Navbar = ({ openModal }) => {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl h-20 transition-all duration-300" id="navbar">
            <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img
                        src="/images/mente_sin_limites.svg"
                        alt="Logo"
                        className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    />
                    <span className="font-bold text-xl tracking-widest hidden sm:block text-white">MENTE SIN LÍMITES</span>
                </div>
                <button
                    onClick={openModal}
                    aria-label="Inscribirme ahora"
                    className="group relative px-6 py-2 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all hover:border-brand-blue/50"
                >
                    <div className="absolute inset-0 w-0 bg-brand-blue/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-sm font-bold text-white group-hover:text-brand-blue tracking-wide">INSCRIBIRME AHORA</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
