import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwqZBX8qEm42reUEjvl77pJQCfY4TO-YOhla6sHcAreCJ4IdFIfKJaEmFm-S1g8ORVcfA/exec';

const RegistrationModal = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const saveToLocal = (data) => {
        const existing = JSON.parse(localStorage.getItem('maraton_registros') || '[]');
        existing.push(data);
        localStorage.setItem('maraton_registros', JSON.stringify(existing));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const formData = new FormData(form);
        formData.append('timestamp', new Date().toISOString());

        const dataObj = Object.fromEntries(formData.entries());

        // 2. Save to LocalStorage (Backup)
        saveToLocal(dataObj);

        // 3. Send to Google Sheets
        if (GOOGLE_SCRIPT_URL) {
            try {
                const params = new URLSearchParams(formData);
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: params.toString()
                });
                console.log('Enviado a Sheets');
            } catch (error) {
                console.error('Error enviando a Sheets:', error);
            }
        }

        // 4. Success Feedback
        setTimeout(() => {
            setIsSubmitting(false);
            onClose();
            form.reset();

            Swal.fire({
                title: '¡BIENVENIDO!',
                text: 'Tu registro ha sido exitoso. Prepárate para romperla.',
                icon: 'success',
                background: '#0A0A0A',
                color: '#fff',
                confirmButtonColor: '#00F0FF',
                confirmButtonText: '¡VAMOS!'
            });
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div id="registrationModal" className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        onClick={onClose}
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="w-full max-w-xl relative"
                    >
                        <div className="glass-panel rounded-3xl p-8 md:p-10 relative border border-white/10 shadow-[0_0_100px_rgba(0,240,255,0.1)]">

                            <button
                                onClick={onClose}
                                aria-label="Cerrar modal"
                                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                            >
                                <i className="fa-solid fa-xmark text-2xl"></i>
                            </button>

                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-black text-white uppercase mb-3 tracking-tight">Inscripción Oficial</h2>
                                <p className="text-gray-400 text-sm">Reserva tu cupo y recibe acceso inmediato a la plataforma.</p>
                            </div>

                            <form id="registrationForm" className="space-y-5" onSubmit={handleSubmit}>
                                {/* Nombre */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Nombre Completo</label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        required
                                        className="w-full px-5 py-4 rounded-xl glass-input text-sm focus:ring-2 focus:ring-brand-blue/50"
                                        placeholder="Ej: Juan Pérez"
                                    />
                                </div>

                                {/* Contacto Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-5 py-4 rounded-xl glass-input text-sm"
                                            placeholder="juan@ejemplo.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">WhatsApp</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            className="w-full px-5 py-4 rounded-xl glass-input text-sm"
                                            placeholder="300 123 4567"
                                        />
                                    </div>
                                </div>

                                {/* Grado y Depto Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Grado Actual</label>
                                        <div className="relative">
                                            <select
                                                name="grade"
                                                required
                                                aria-label="Grado Actual"
                                                className="w-full px-5 py-4 rounded-xl glass-input text-sm appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-gray-900 text-gray-500">Selecciona...</option>
                                                <option value="11° (Once)" className="bg-gray-900">11° (Once)</option>
                                                <option value="10° (Décimo)" className="bg-gray-900">10° (Décimo)</option>
                                                <option value="9° (Noveno)" className="bg-gray-900">9° (Noveno)</option>
                                                <option value="Graduado/Bachiller" className="bg-gray-900">Ya me gradué</option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                <i className="fa-solid fa-chevron-down text-xs"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Departamento</label>
                                        <div className="relative">
                                            <select
                                                name="department"
                                                required
                                                aria-label="Departamento"
                                                className="w-full px-5 py-4 rounded-xl glass-input text-sm appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-gray-900">Selecciona...</option>
                                                <option value="Amazonas" className="bg-gray-900">Amazonas</option>
                                                <option value="Antioquia" className="bg-gray-900">Antioquia</option>
                                                <option value="Arauca" className="bg-gray-900">Arauca</option>
                                                <option value="Atlántico" className="bg-gray-900">Atlántico</option>
                                                <option value="Bolívar" className="bg-gray-900">Bolívar</option>
                                                <option value="Boyacá" className="bg-gray-900">Boyacá</option>
                                                <option value="Caldas" className="bg-gray-900">Caldas</option>
                                                <option value="Caquetá" className="bg-gray-900">Caquetá</option>
                                                <option value="Casanare" className="bg-gray-900">Casanare</option>
                                                <option value="Cauca" className="bg-gray-900">Cauca</option>
                                                <option value="Cesar" className="bg-gray-900">Cesar</option>
                                                <option value="Chocó" className="bg-gray-900">Chocó</option>
                                                <option value="Córdoba" className="bg-gray-900">Córdoba</option>
                                                <option value="Cundinamarca" className="bg-gray-900">Cundinamarca</option>
                                                <option value="Guainía" className="bg-gray-900">Guainía</option>
                                                <option value="Guaviare" className="bg-gray-900">Guaviare</option>
                                                <option value="Huila" className="bg-gray-900">Huila</option>
                                                <option value="La Guajira" className="bg-gray-900">La Guajira</option>
                                                <option value="Magdalena" className="bg-gray-900">Magdalena</option>
                                                <option value="Meta" className="bg-gray-900">Meta</option>
                                                <option value="Nariño" className="bg-gray-900">Nariño</option>
                                                <option value="Norte de Santander" className="bg-gray-900">Norte de Santander</option>
                                                <option value="Putumayo" className="bg-gray-900">Putumayo</option>
                                                <option value="Quindío" className="bg-gray-900">Quindío</option>
                                                <option value="Risaralda" className="bg-gray-900">Risaralda</option>
                                                <option value="San Andrés y Providencia" className="bg-gray-900">San Andrés y Providencia</option>
                                                <option value="Santander" className="bg-gray-900">Santander</option>
                                                <option value="Sucre" className="bg-gray-900">Sucre</option>
                                                <option value="Tolima" className="bg-gray-900">Tolima</option>
                                                <option value="Valle del Cauca" className="bg-gray-900">Valle del Cauca</option>
                                                <option value="Vaupés" className="bg-gray-900">Vaupés</option>
                                                <option value="Vichada" className="bg-gray-900">Vichada</option>
                                                <option value="Otro" className="bg-gray-900">Otro</option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                <i className="fa-solid fa-chevron-down text-xs"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Marketing Consent */}
                                <div className="flex items-start gap-3 mt-2 p-1">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            name="marketing_consent"
                                            id="marketing_consent"
                                            className="custom-checkbox"
                                            defaultChecked
                                        />
                                    </div>
                                    <label htmlFor="marketing_consent" className="text-xs text-gray-400 cursor-pointer select-none leading-relaxed">
                                        Quiero recibir tips de estudio, invitaciones a clases gratuitas y novedades de <span className="text-brand-blue font-bold">SeamosGenios</span> en mi correo.
                                    </label>
                                </div>

                                {/* Hidden Fields */}
                                <input type="hidden" name="utm_source" defaultValue={new URLSearchParams(window.location.search).get('utm_source') || 'Directo'} />
                                <input type="hidden" name="utm_medium" defaultValue={new URLSearchParams(window.location.search).get('utm_medium') || ''} />
                                <input type="hidden" name="utm_campaign" defaultValue={new URLSearchParams(window.location.search).get('utm_campaign') || ''} />

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-brand-gold text-black font-black text-lg rounded-xl hover:shadow-[0_0_30px_rgba(255,214,0,0.4)] transition-all transform hover:-translate-y-1 mt-4 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10">{isSubmitting ? 'PROCESANDO...' : 'CONFIRMAR REGISTRO'}</span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </button>

                                <p className="text-center text-[10px] text-gray-600 mt-6">
                                    🔒 Tus datos están cifrados y seguros.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RegistrationModal;
