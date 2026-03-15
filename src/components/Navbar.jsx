import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Liens de navigation (comme sur l'image Volt)
  const navLinks = [
    { name: "Concept", path: "#concept" },
    { name: "Fonctionnalités", path: "#fonctionnalites" },
    { name: "Galerie", path: "#galerie" },
    { name: "Devenir Partenaire", path: "#partenaire" },
    { name: "Contact", path: "#contact" }
  ];

  // Détection du scroll pour ajouter un peu plus de flou ou d'ombre quand on descend
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Le conteneur principal reste fixed pour rester en haut, 
    // mais on lui donne un padding (pt-6) pour décoller la barre du bord haut de l'écran.
    <div className="fixed top-0 left-0 w-full z-50 px-4 pt-6 pb-2 pointer-events-none flex justify-center">
      
      {/* C'EST ICI LA MAGIE : La barre "pilule"
        pointer-events-auto : permet de cliquer sur la barre (car le parent est none)
        rounded-[2rem] : donne les bords très arrondis comme sur l'image
        bg-[#07101f]/40 + backdrop-blur-md : effet de verre sombre
        border border-white/10 : la petite ligne fine autour
      */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`pointer-events-auto flex items-center justify-between w-full  px-6 py-4 rounded-[2.5rem] transition-all duration-300 ${
          scrolled 
            ? 'bg-[#020617]/50 backdrop-blur-lg border max-w-[1300px] border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]' 
            : 'bg-[#020617]/40 backdrop-blur-md border border-white/10 shadow-lg max-w-[1000px]'
        }`}
      >
        
        {/* --- LOGO --- */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          {/* Remplacement du logo image par le logo CSS Volt (ou tu peux remettre ton img) */}
          <img className='h-10' src="/VoltLogo.png" alt="Volt Logo" />
        </a>

        {/* --- LIENS DE NAVIGATION (Centrés) --- */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.path}
              className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              {/* Petite animation de soulignement au survol */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* --- BOUTON TÉLÉCHARGER (Droite) --- */}
        <div className="flex items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-white text-[#0a192f] px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-slate-100 transition-colors"
          >
            <Smartphone size={16} className="text-[#0a192f]" />
            Télécharger
          </motion.button>

          {/* Menu Burger Mobile (Reste discret à droite sur petit écran) */}
          <button className="lg:hidden text-white p-2 ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

      </motion.nav>
    </div>
  );
};

export default Navbar;