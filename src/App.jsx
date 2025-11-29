import React, { useState } from 'react';
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
    const handleKeyDown = (e) => {
      // Check for CTRL + S + G
      if (e.ctrlKey && (e.key === 's' || e.key === 'S') && (e.code === 'KeyS' || e.code === 'KeyG')) {
        // This logic is tricky because 'g' needs to be pressed while Ctrl+S is held, or just Ctrl+S+G sequence?
        // Browsers usually handle Ctrl+S as save. 
        // Let's implement a simpler check: e.ctrlKey && e.key === 'g' might be easier but user asked for Ctrl+S+G.
        // Standard interpretation: Ctrl + S + G usually means holding Ctrl, then S, then G? Or holding Ctrl, S and G together?
        // Most likely Ctrl + G while S is held is impossible to detect cleanly without a state machine.
        // Let's assume the user means a custom combo. 
        // Let's try to detect if all three are pressed.
      }
    };

    // Better approach for "CTRL + S + G":
    // It's a non-standard shortcut. 
    // Let's implement: If Ctrl is held, and 's' is pressed, set a flag? 
    // Actually, let's just listen for the specific event. 
    // If the user presses G while Ctrl and S are held?
    // Browser 'Save' (Ctrl+S) might intercept.

    // Let's try a simpler interpretation or a sequence. 
    // But to strictly follow "CTRL + S + G", we can try to check active keys.

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

      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
