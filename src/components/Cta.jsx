import React from 'react';
import { motion } from 'framer-motion';
import { Play, Apple, Clock, ShieldCheck, Zap } from 'lucide-react';

const CTASection = () => {
  // --- ANIMATIONS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* LE GRAND BLOC BLEU NUIT */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative bg-[#07101f] rounded-[3rem] px-6 py-16 md:py-20 lg:py-24 flex flex-col items-center text-center overflow-hidden shadow-2xl"
        >
          {/* Cercles décoratifs en arrière-plan */}
          <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] border border-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          {/* CONTENU RELATIF (au-dessus du fond) */}
          <div className="relative z-10 w-full flex flex-col items-center">
            
            {/* Badge Disponibilité */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-sm mb-10">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="text-sm font-medium text-slate-300">Disponible sur iOS et Android</span>
            </motion.div>

            {/* Titre Principal avec effet "Ticket" */}
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              Prêt à être dépanné{' '}
              <br className="sm:hidden" />
              <span className="inline-block bg-white text-[#07101f] px-5 py-2 transform -rotate-2 mt-2 sm:mt-0 shadow-lg">
                en un clic
              </span> ?
            </motion.h2>

            {/* Sous-titre */}
            <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Téléchargez <span className="text-white font-bold">Volt</span> gratuitement et rejoignez des milliers d'automobilistes qui nous font confiance.
            </motion.p>

            {/* Ligne des 3 fonctionnalités (Pills) */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                <Clock size={16} className="text-blue-400" />
                Disponible 24h/24, 7j/7
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                <ShieldCheck size={16} className="text-blue-400" />
                Dépanneurs vérifiés et certifiés
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                <Zap size={16} className="text-blue-400" />
                Intervention en moins de 30 min
              </div>
            </motion.div>

            {/* Boutons de téléchargement */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <button className="flex items-center justify-center gap-3 bg-white text-[#07101f] px-8 py-3.5 rounded-full hover:bg-slate-100 transition-all shadow-xl hover:scale-105">
                <Play size={24} className="fill-[#07101f]" />
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block leading-none mb-1">Disponible sur</span>
                  <span className="text-base font-black block leading-none tracking-tight">Google Play</span>
                </div>
              </button>
              
              <button className="flex items-center justify-center gap-3 bg-white text-[#07101f] px-8 py-3.5 rounded-full hover:bg-slate-100 transition-all shadow-xl hover:scale-105">
                <Apple size={28} className="fill-[#07101f]" />
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block leading-none mb-1">Télécharger dans</span>
                  <span className="text-base font-black block leading-none tracking-tight">l'App Store</span>
                </div>
              </button>
            </motion.div>

            {/* Mini Footer / Réassurance */}
            <motion.p variants={itemVariants} className="text-xs text-slate-500 mt-12 font-medium tracking-wide">
              Gratuit - Sans engagement - Plus de 15 000 utilisateurs
            </motion.p>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;