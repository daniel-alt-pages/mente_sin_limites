import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Mentors from './components/Mentors';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  useEffect(() => {


    const keys = new Set();

    const down = (e) => {
      keys.add(e.key.toLowerCase());
      if (keys.has('control') && keys.has('s') && keys.has('g')) {
        e.preventDefault(); // Prevent browser save if possible
        downloadJSON();
      }
    }

    const up = (e) => {
      keys.delete(e.key.toLowerCase());
    }

    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);

    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen font-sans selection:bg-brand-blue selection:text-black">
      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1] bg-[#050505]">
        <div className="absolute inset-0 tech-bg opacity-40"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <Navbar openModal={openModal} />

      <main className="relative z-10 flex-grow pt-20">
        <Hero openModal={openModal} />
        <Benefits />
        <Mentors />
      </main>

      <Footer />

      {/* Fixed Bottom Banner */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-brand-gold/90 backdrop-blur-md text-black text-[10px] sm:text-xs font-black text-center py-2 tracking-widest uppercase shadow-[0_-5px_20px_rgba(255,214,0,0.3)] animate-pulse-slow">
        🔥 Maratón de clases 100% Gratuitas - Cupos Limitados  
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
