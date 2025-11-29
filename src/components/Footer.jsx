import React from 'react';
import Swal from 'sweetalert2';

const Footer = () => {
    const downloadJSON = () => {
        const data = localStorage.getItem('maraton_registros');
        if (!data || JSON.parse(data).length === 0) {
            Swal.fire({
                title: 'Sin datos',
                text: 'No hay registros aún.',
                icon: 'info',
                background: '#0A0A0A',
                color: '#fff'
            });
            return;
        }
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `registros_maraton_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <footer className="py-12 border-t border-white/5 bg-[#020202]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h4 className="font-black text-2xl text-white mb-2 tracking-widest">MENTE SIN LÍMITES</h4>
                    <p className="text-gray-600 text-sm">© 2025 Transformando la educación en Colombia.</p>
                </div>
                <div className="flex gap-6">
                    <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-blue hover:text-black hover:border-brand-blue transition-all duration-300">
                        <i className="fa-brands fa-instagram text-xl"></i>
                    </a>
                    <a href="#" aria-label="WhatsApp" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all duration-300">
                        <i className="fa-brands fa-whatsapp text-xl"></i>
                    </a>
                </div>
                <div className="text-right">
                    <button
                        onClick={downloadJSON}
                        className="text-xs text-gray-700 hover:text-brand-blue transition-colors font-mono"
                    >
                        <i className="fa-solid fa-database mr-2"></i>ADMIN DATA
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
