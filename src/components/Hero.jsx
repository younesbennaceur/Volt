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
        
        {/* COLONNE GAUCHE (Texte) */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col items-start gap-y-3 lg:gap-y-4 z-20 mt-4 lg:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm md:text-base font-medium text-slate-200">+2 000 dépanneurs actifs en France</span>
          </motion.div>

          {/* TITRE MODIFIÉ ICI */}
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

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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

        {/* COLONNE DROITE (Images alignées sur le design Figma) */}
        <motion.div 
          className="w-full lg:w-1/2 relative mt-20 lg:mt-0 flex justify-center lg:justify-end items-center lg:pr-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
           <motion.img 
              animate={floatAnimation(1)} 
              src="/rating.png" 
              alt="Widget Rating" 
              className="absolute z-30 md:-bottom-[35%] left-3/4 transform -translate-x-1/2 w-[160%] md:w-[170%] h-auto drop-shadow-2xl rounded-2xl" 
            />
              {/* 2. Le Devis : À Gauche */}
            <motion.img 
              animate={floatAnimation(0.5)} 
              src="/devis.png" 
              alt="Widget Devis" 
              className="absolute z-20 top-[15%] -left-[60%] md:left-1/4 w-[10%] md:w-[45%] h-auto drop-shadow-2xl rounded-xl" 
            />
          {/* L'iPhone central */}
          <div className="relative w-[200px] md:w-[240px] lg:w-[240px]">
            
            {/* RECTANGLE BLANC DE FOND */}
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '60%' }} 
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-[15%] -right-[15%] w-[130%] bg-white rounded-[2.5rem] z-0 shadow-2xl"
            ></motion.div>

            {/* 1. L'iPhone central */}
            <motion.img 
              animate={floatAnimation(0)} 
              src="/iphone.png" 
              alt="App iPhone" 
              className="relative z-10 w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]" 
            />

          

          </div>
          
          {/* Lueur d'arrière-plan */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] z-0 pointer-events-none"></div>
        </motion.div>

      </div>
      
      {/* Vague blanche du bas */}
      <div className="absolute bottom-0 left-0 w-full h-12 md:h-16 bg-white rounded-t-[50%] md:rounded-t-[70%] scale-110 -mb-6 md:-mb-8 z-0"></div>
    </div>
  );
};

export default Hero;