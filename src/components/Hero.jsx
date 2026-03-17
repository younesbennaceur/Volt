import React from 'react';
import { motion } from 'framer-motion';
import { Play, Apple } from 'lucide-react';
import Navbar from './Navbar'; 

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const floatAnimation = (delay) => ({
    y: ["-8px", "8px", "-8px"],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay }
  });

  return (
    <div 
      className="min-h-screen w-full text-white flex flex-col relative overflow-hidden bg-[#07101f]"
      style={{ 
        backgroundImage: "url('/bg.png')",
        backgroundSize: 'cover', 
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Navbar />

      <div className="flex-grow max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between px-6 pt-28 pb-10 md:px-12 lg:px-20 relative z-10">
        
        {/* ========================================= */}
        {/* COLONNE GAUCHE (Textes et Boutons)        */}
        {/* ========================================= */}
        <motion.div 
          className="w-full lg:w-[45%] flex flex-col items-start gap-y-3 lg:gap-y-4 z-20 mt-4 lg:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm md:text-base font-medium text-slate-200">+2 000 dépanneurs actifs en France</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.5rem] font-extrabold leading-[1.1] tracking-tight">
            <span className="inline-block bg-white text-[#020617] px-5 py-2 transform -rotate-2 mb-3">
              Commandez
            </span> <br/>
            un dépanneur...<br/>
            <span className="font-serif italic font-medium text-slate-300">... à tout moment !</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base md:text-lg lg:text-xl text-slate-300 max-w-lg leading-relaxed">
            Comparez les offres en temps réel, choisissez votre pro, et repartez serein. <br className="hidden md:block"/>
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 ">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-slate-300">
              🛞 Dépannage Pneu
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-slate-300">
              🔋 Batterie
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-slate-300">
              🚗 Remorquage
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <button className="flex items-center justify-center gap-3 bg-white text-black px-6 md:px-8 py-3 rounded-2xl hover:bg-slate-100 transition-all shadow-xl hover:scale-105">
              <Play size={24} className="text-black" />
              <div className="text-left">
                <span className="text-[10px] uppercase font-semibold text-slate-600 block leading-tight">Disponible sur</span>
                <span className="text-base md:text-lg font-bold block leading-tight">Google Play</span>
              </div>
            </button>
            
            <button className="flex items-center justify-center gap-3 bg-white text-black px-6 md:px-8 py-3 rounded-2xl hover:bg-slate-100 transition-all shadow-xl hover:scale-105">
              <Apple size={28} className="text-black" />
              <div className="text-left">
                <span className="text-[10px] uppercase font-semibold text-slate-600 block leading-tight">Télécharger dans</span>
                <span className="text-base md:text-lg font-bold block leading-tight">l'App Store</span>
              </div>
            </button>
          </motion.div>
        </motion.div>


        {/* ========================================= */}
        {/* COLONNE DROITE (2 iPHONES CÔTE À CÔTE)      */}
        {/* ========================================= */}
        <motion.div 
          className="w-full lg:w-[55%] relative mt-20 lg:mt-0 flex justify-center lg:justify-end items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Le conteneur est plus large pour accueillir les deux téléphones (jusqu'à 480px sur PC) */}
          <div className="relative w-[300px] md:w-[420px] lg:w-[480px]">
            
            {/* RECTANGLE BLANC DE FOND */}
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '55%' }} 
              transition={{ duration: 0.8, delay: 0.6 }}
              // Il englobe les deux téléphones en largeur
              className="absolute bottom-[18%] -left-[5%] w-[110%] bg-white rounded-[3rem] z-0 shadow-2xl"
            ></motion.div>

            {/* LES DEUX TÉLÉPHONES EN FLEX (Côte à côte) */}
            <div className="flex gap-4 md:gap-6 w-full relative z-10">
              
              {/* iPhone 1 (Gauche) */}
              <motion.div 
                animate={floatAnimation(0)} 
                className="w-1/2 relative z-20"
              >
                <img 
                  src="/iphone.png" 
                  alt="App Client" 
                  className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]" 
                />
              </motion.div>

              {/* iPhone 2 (Droite - Légèrement décalé vers le bas avec mt-10) */}
              <motion.div 
                animate={floatAnimation(0.4)} 
                className="w-1/2 relative z-10 mt-8 md:mt-12"
              >
                <img 
                  src="/pneu.png" // Assure-toi d'avoir une image iphone2.png
                  alt="App Pro" 
                  className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]" 
                />
              </motion.div>

            </div>

            {/* WIDGETS (Placés par-dessus le groupe) */}
            
            {/* Le Devis : À Gauche du groupe */}
            <motion.img 
              animate={floatAnimation(0.5)} 
              src="/devis.png" 
              alt="Widget Devis" 
              // w-[45%] par rapport au grand conteneur
              className="absolute z-30 top-[12%] -left-[15%] md:-left-[20%] w-[45%] md:w-[50%] h-auto drop-shadow-2xl rounded-xl" 
            />

            {/* Le Rating : TRÈS GRAND ET BIEN CENTRÉ EN BAS DU GROUPE */}
            <motion.img 
              animate={floatAnimation(1)} 
              src="/rating.png" 
              alt="Widget Rating" 
              // w-[110%] couvre toute la largeur des deux téléphones réunis !
              className="absolute z-40 -bottom-[12%] left-1/2 transform -translate-x-1/2 w-[110%] md:w-[110%] h-auto drop-shadow-2xl rounded-2xl" 
            />

          </div>
          
          {/* Lueur d'arrière-plan bleue */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] z-0 pointer-events-none"></div>
        </motion.div>

      </div>
      
      {/* Vague blanche du bas */}
      <div className="absolute bottom-0 left-0 w-full h-12 md:h-16 bg-white rounded-t-[50%] md:rounded-t-[70%] scale-110 -mb-6 md:-mb-8 z-0"></div>
    </div>
  );
};

export default Hero;