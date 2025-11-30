import React, { useState, useEffect, useMemo, useRef } from 'react';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyk-vZybr60khZ_NnLPnbScPm2KxcgPcNWNxhMirdSn81GSNEYErZIsDrK_FtZv4j-gvw/exec';

const COUNTRIES = [
    { name: "Colombia", code: "+57", iso: "co" },
    { name: "México", code: "+52", iso: "mx" },
    { name: "Estados Unidos", code: "+1", iso: "us" },
    { name: "Perú", code: "+51", iso: "pe" },
    { name: "Argentina", code: "+54", iso: "ar" },
    { name: "Chile", code: "+56", iso: "cl" },
    { name: "Ecuador", code: "+593", iso: "ec" },
    { name: "Venezuela", code: "+58", iso: "ve" },
    { name: "España", code: "+34", iso: "es" },
    { name: "Bolivia", code: "+591", iso: "bo" },
    { name: "Costa Rica", code: "+506", iso: "cr" },
    { name: "Rep. Dominicana", code: "+1", iso: "do" },
    { name: "Guatemala", code: "+502", iso: "gt" },
    { name: "Honduras", code: "+504", iso: "hn" },
    { name: "Nicaragua", code: "+505", iso: "ni" },
    { name: "Panamá", code: "+507", iso: "pa" },
    { name: "Paraguay", code: "+595", iso: "py" },
    { name: "El Salvador", code: "+503", iso: "sv" },
    { name: "Uruguay", code: "+598", iso: "uy" },
];

const EMAIL_PROVIDERS = [
    {
        domain: '@gmail.com',
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-8 h-8">
                <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
                <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
                <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon>
                <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
                <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
            </svg>
        )
    },
    {
        domain: '@hotmail.com',
        logo: <i className="fa-brands fa-microsoft text-[#00a4ef] text-2xl"></i>
    },
    {
        domain: '@outlook.com',
        logo: <i className="fa-brands fa-microsoft text-[#0078d4] text-2xl"></i>
    },
    {
        domain: '@yahoo.com',
        logo: <i className="fa-brands fa-yahoo text-[#6001d2] text-2xl"></i>
    },
    {
        domain: '@icloud.com',
        logo: <i className="fa-brands fa-apple text-white text-2xl"></i>
    },
];

const RegistrationModal = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Email State
    const [emailMode, setEmailMode] = useState('split');
    const [emailUser, setEmailUser] = useState('');
    const [emailDomain, setEmailDomain] = useState('@gmail.com');
    const [isEmailDomainOpen, setIsEmailDomainOpen] = useState(false);

    // Department State
    const [deptMode, setDeptMode] = useState('select');
    const [selectedDept, setSelectedDept] = useState('');
    const [customDept, setCustomDept] = useState('');

    // Phone State
    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // Refs for click outside
    const countryDropdownRef = useRef(null);
    const emailDropdownRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        const handleClickOutside = (e) => {
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target)) {
                setIsCountryOpen(false);
            }
            if (emailDropdownRef.current && !emailDropdownRef.current.contains(e.target)) {
                setIsEmailDomainOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const filteredCountries = useMemo(() => {
        return COUNTRIES.filter(c =>
            c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
            c.code.includes(countrySearch)
        );
    }, [countrySearch]);

    const saveToLocal = (data) => {
        const existing = JSON.parse(localStorage.getItem('maraton_registros') || '[]');
        existing.push(data);
        localStorage.setItem('maraton_registros', JSON.stringify(existing));
    };

    const handleSubmit = async (e) => {
        formData.set('department', finalDept);
        formData.set('phone', finalPhone);
        formData.append('timestamp', new Date().toISOString());

        const dataObj = Object.fromEntries(formData.entries());

        // 2. Save to LocalStorage (Backup)
        saveToLocal(dataObj);

        // 3. Send to Google Sheets
        if (GOOGLE_SCRIPT_URL) {
            try {
                const params = new URLSearchParams();
                for (const [key, value] of formData.entries()) {
                    params.append(key, value);
                }

                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: params.toString()
                });

                const result = await response.json();
                console.log('Respuesta Sheets:', result);

                // --- DEBUG TEMPORAL: Mostrar respuesta cruda ---
                // Swal.fire({
                //     title: 'DEBUG',
                //     text: JSON.stringify(result),
                //     icon: 'info'
                // });
                // -----------------------------------------------

                if (result.result === 'error' && (result.message === 'duplicate_email' || result.message.includes('duplicate'))) {
                    Swal.fire({
                        title: '¡YA ESTÁS REGISTRADO!',
                        text: 'Este usuario ya se encuentra en nuestra base de datos. ¡Nos vemos en clase!',
                        icon: 'warning',
                        background: '#0A0A0A',
                        color: '#fff',
                        confirmButtonColor: '#FFD600',
                        confirmButtonText: 'ENTENDIDO'
                    });
                    setIsSubmitting(false);
                    return;
                }

                if (result.result === 'success') {
                    // 4. Success Feedback (Only if explicit success)
                    setTimeout(() => {
                        setIsSubmitting(false);
                        onClose();
                        // Reset Form States
                        setEmailMode('split');
                        setEmailUser('');
                        setEmailDomain('@gmail.com');
                        setDeptMode('select');
                        setSelectedDept('');
                        setCustomDept('');
                        setPhoneNumber('');
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
                } else {
                    // Si no es error de duplicado ni éxito, lanzamos error genérico
                    if (result.result === 'error') {
                        throw new Error(result.message || 'Error desconocido del servidor');
                    }
                    throw new Error('Respuesta desconocida del servidor: ' + JSON.stringify(result));
                }

            } catch (error) {
                console.error('Error enviando a Sheets:', error);
                setIsSubmitting(false);
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al conectar con el servidor. Inténtalo de nuevo.',
                    icon: 'error',
                    background: '#0A0A0A',
                    color: '#fff'
                });
            }
        }
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
                        className="w-full max-w-2xl relative"
                    >
                        <div className="glass-panel rounded-3xl p-8 md:p-10 relative border border-white/10 shadow-[0_0_100px_rgba(0,240,255,0.1)] max-h-[90vh] overflow-y-auto custom-scrollbar">

                            <button
                                onClick={onClose}
                                aria-label="Cerrar modal"
                                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-10"
                            >
                                <i className="fa-solid fa-xmark text-2xl"></i>
                            </button>

                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-black text-white uppercase mb-2 tracking-tight">Inscripción Oficial</h2>
                                <p className="text-gray-400 text-sm">Reserva tu cupo GRATIS y recibe acceso inmediato.</p>
                            </div>

                            <form id="registrationForm" className="space-y-6" onSubmit={handleSubmit}>
                                {/* Nombre */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Nombre Completo</label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        required
                                        className="w-full px-5 py-4 rounded-xl glass-input text-sm focus:ring-2 focus:ring-brand-blue/50 transition-all"
                                        placeholder="Ej: Juan Pérez"
                                        onInput={(e) => e.target.value = e.target.value.toUpperCase()}
                                    />
                                </div>

                                {/* Contacto Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Email</label>
                                        {emailMode === 'split' ? (
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value={emailUser}
                                                    onChange={(e) => {
                                                        const val = e.target.value;
                                                        if (val.includes('@')) {
                                                            const [user, domain] = val.split('@');
                                                            const matchingProvider = EMAIL_PROVIDERS.find(p => p.domain === '@' + domain);

                                                            if (matchingProvider) {
                                                                setEmailUser(user);
                                                                setEmailDomain(matchingProvider.domain);
                                                            } else {
                                                                setEmailMode('full');
                                                                setEmailUser(val);
                                                            }
                                                        } else {
                                                            setEmailUser(val);
                                                        }
                                                    }}
                                                    required
                                                    className="w-[55%] px-5 py-4 rounded-xl glass-input text-sm"
                                                    placeholder="juan"
                                                />
                                                <div className="relative w-[45%]" ref={emailDropdownRef}>
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsEmailDomainOpen(!isEmailDomainOpen)}
                                                        className="w-full px-3 py-4 rounded-xl glass-input text-sm flex items-center justify-between gap-1 hover:bg-white/10 transition-colors"
                                                    >
                                                        <span className="truncate">{emailDomain}</span>
                                                        <i className="fa-solid fa-chevron-down text-[10px] text-gray-500"></i>
                                                    </button>

                                                    <AnimatePresence>
                                                        {isEmailDomainOpen && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: 10 }}
                                                                className="absolute top-full right-0 mt-2 w-48 bg-[#0F0F0F] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
                                                            >
                                                                <div className="max-h-48 overflow-y-auto custom-scrollbar">
                                                                    {EMAIL_PROVIDERS.map((provider) => (
                                                                        <button
                                                                            key={provider.domain}
                                                                            type="button"
                                                                            onClick={() => {
                                                                                setEmailDomain(provider.domain);
                                                                                setIsEmailDomainOpen(false);
                                                                            }}
                                                                            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors text-left"
                                                                        >
                                                                            <span className="w-8 flex justify-center">{provider.logo}</span>
                                                                            <span className="text-xs text-white">{provider.domain}</span>
                                                                        </button>
                                                                    ))}
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => {
                                                                            setEmailMode('full');
                                                                            setEmailUser(emailUser + (emailDomain !== '@gmail.com' ? emailDomain : ''));
                                                                            setIsEmailDomainOpen(false);
                                                                        }}
                                                                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors text-left border-t border-white/5"
                                                                    >
                                                                        <i className="fa-solid fa-pen text-gray-400 w-4 text-center"></i>
                                                                        <span className="text-xs text-brand-gold font-bold">Otro...</span>
                                                                    </button>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    value={emailUser}
                                                    onChange={(e) => setEmailUser(e.target.value)}
                                                    required
                                                    autoFocus
                                                    className="w-full px-5 py-4 rounded-xl glass-input text-sm"
                                                    placeholder="juan@ejemplo.com"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setEmailMode('split');
                                                        setEmailDomain('@gmail.com');
                                                        // Try to split if possible, otherwise clear
                                                        const parts = emailUser.split('@');
                                                        if (parts.length > 1) {
                                                            setEmailUser(parts[0]);
                                                        }
                                                    }}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-brand-blue hover:underline"
                                                >
                                                    Volver
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* WhatsApp with Country Selector */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">WhatsApp</label>
                                        <div className="flex gap-2 relative" ref={countryDropdownRef}>
                                            {/* Country Trigger */}
                                            <button
                                                type="button"
                                                onClick={() => setIsCountryOpen(!isCountryOpen)}
                                                className="w-[35%] px-3 py-4 rounded-xl glass-input text-sm flex items-center justify-between gap-1 hover:bg-white/10 transition-colors"
                                            >
                                                <img
                                                    src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
                                                    alt={selectedCountry.name}
                                                    className="w-6 h-auto rounded-sm object-cover"
                                                />
                                                <span className="font-mono text-gray-300 text-xs">{selectedCountry.code}</span>
                                                <i className="fa-solid fa-chevron-down text-[10px] text-gray-500"></i>
                                            </button>

                                            {/* Phone Input */}
                                            <input
                                                type="tel"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                                                required
                                                className="w-[65%] px-5 py-4 rounded-xl glass-input text-sm font-mono"
                                                placeholder="300 123 4567"
                                            />

                                            {/* Country Dropdown */}
                                            <AnimatePresence>
                                                {isCountryOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        className="absolute top-full left-0 mt-2 w-64 bg-[#0F0F0F] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
                                                    >
                                                        {/* Search */}
                                                        <div className="p-3 border-b border-white/5 sticky top-0 bg-[#0F0F0F] z-10">
                                                            <div className="relative">
                                                                <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Buscar país..."
                                                                    value={countrySearch}
                                                                    onChange={(e) => setCountrySearch(e.target.value)}
                                                                    className="w-full bg-white/5 border border-white/5 rounded-lg pl-8 pr-3 py-2 text-xs text-white focus:outline-none focus:border-brand-blue/50"
                                                                    autoFocus
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* List */}
                                                        <div className="max-h-48 overflow-y-auto custom-scrollbar">
                                                            {filteredCountries.map((country) => (
                                                                <button
                                                                    key={country.name}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setSelectedCountry(country);
                                                                        setIsCountryOpen(false);
                                                                        setCountrySearch('');
                                                                    }}
                                                                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors text-left"
                                                                >
                                                                    <img
                                                                        src={`https://flagcdn.com/w40/${country.iso}.png`}
                                                                        alt={country.name}
                                                                        className="w-6 h-auto rounded-sm object-cover"
                                                                    />
                                                                    <div className="flex flex-col">
                                                                        <span className="text-xs text-white font-medium">{country.name}</span>
                                                                        <span className="text-[10px] text-gray-500 font-mono">{country.code}</span>
                                                                    </div>
                                                                </button>
                                                            ))}
                                                            {filteredCountries.length === 0 && (
                                                                <div className="p-4 text-center text-xs text-gray-500">No encontrado</div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>

                                {/* Grado y Depto Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Grado Actual</label>
                                        <div className="relative">
                                            <select
                                                name="grade"
                                                required
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
                                        {deptMode === 'select' ? (
                                            <div className="relative">
                                                <select
                                                    value={selectedDept}
                                                    onChange={(e) => {
                                                        if (e.target.value === 'Otro') {
                                                            setDeptMode('input');
                                                        } else {
                                                            setSelectedDept(e.target.value);
                                                        }
                                                    }}
                                                    required
                                                    className="w-full px-5 py-4 rounded-xl glass-input text-sm appearance-none cursor-pointer"
                                                >
                                                    <option value="" className="bg-gray-900">Selecciona...</option>
                                                    <option value="Amazonas" className="bg-gray-900">Amazonas</option>
                                                    <option value="Antioquia" className="bg-gray-900">Antioquia</option>
                                                    <option value="Arauca" className="bg-gray-900">Arauca</option>
                                                    <option value="Atlántico" className="bg-gray-900">Atlántico</option>
                                                    <option value="Bogotá D.C." className="bg-gray-900">Bogotá D.C.</option>
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
                                                    <option value="San Andrés" className="bg-gray-900">San Andrés</option>
                                                    <option value="Santander" className="bg-gray-900">Santander</option>
                                                    <option value="Sucre" className="bg-gray-900">Sucre</option>
                                                    <option value="Tolima" className="bg-gray-900">Tolima</option>
                                                    <option value="Valle del Cauca" className="bg-gray-900">Valle del Cauca</option>
                                                    <option value="Vaupés" className="bg-gray-900">Vaupés</option>
                                                    <option value="Vichada" className="bg-gray-900">Vichada</option>
                                                    <option value="Otro" className="bg-gray-900 font-bold text-brand-gold">Otro (Escribir manual)</option>
                                                </select>
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                    <i className="fa-solid fa-chevron-down text-xs"></i>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={customDept}
                                                    onChange={(e) => setCustomDept(e.target.value)}
                                                    required
                                                    autoFocus
                                                    className="w-full px-5 py-4 rounded-xl glass-input text-sm"
                                                    placeholder="Escribe tu departamento/estado..."
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setDeptMode('select');
                                                        setSelectedDept('');
                                                        setCustomDept('');
                                                    }}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-brand-blue hover:underline"
                                                >
                                                    Volver
                                                </button>
                                            </div>
                                        )}
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
                                    <span className="relative z-10">{isSubmitting ? 'PROCESANDO...' : 'CONFIRMAR REGISTRO GRATIS'}</span>
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
