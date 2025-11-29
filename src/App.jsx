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
