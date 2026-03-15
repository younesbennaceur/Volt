import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AppGallery = () => {
  // Liste de tes 9 écrans
  const screens = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Configuration des "Bulles Chill" assignées à certains écrans
  const bubbles = {
    1: { text: "Création en 2 min ⚡", styles: "text-amber-600 border-amber-100 -top-4 -left-4 -rotate-6" },
    3: { text: "Géolocalisation 📍", styles: "text-blue-600 border-blue-100 top-1/2 -right-8 rotate-6" },
    6: { text: "Paiement In-App 💳", styles: "text-emerald-600 border-emerald-100 -bottom-4 -left-4 -rotate-3" },
    9: { text: "Votre avis compte ⭐", styles: "text-purple-600 border-purple-100 -top-6 -right-2 rotate-6" },
  };

  // --- ANIMATIONS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  // Animation de flottement organique individuel
  const floatAnimation = (index) => ({
    y: ["-8px", "8px", "-8px"],
    transition: { 
      duration: 5 + (index % 3), // Alterne la vitesse pour ne pas qu'ils flottent tous en même temps
      repeat: Infinity, 
      ease: "easeInOut", 
      delay: index * 0.2 
    }
  });

  return (
    <section id='galerie' className="bg-slate-50 py-24 font-sans text-[#07101f] overflow-hidden relative">
      
      {/* Formes d'arrière-plan douces */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        
        {/* HEADER */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-full text-xs font-bold text-[#07101f] uppercase tracking-wide mb-6 shadow-sm">
            <Sparkles size={16} className="text-amber-500" />
            L'application en images
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Découvrez l'expérience <span className="text-[#091E50] ">Volt</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Une interface claire, intuitive et sans fioritures pour vous sortir d'affaire en quelques secondes. Glissez pour découvrir.
          </motion.p>
        </motion.div>

        {/* CARROUSEL INFINI (MARQUEE) */}
        <div className="relative w-full overflow-hidden py-10">
          {/* Dégradés sur les bords pour fondre le carrousel */}
          <div className="absolute top-0 left-0 w-16 md:w-40 h-full bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-40 h-full bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

          {/* On duplique le tableau "screens" pour créer l'illusion d'une boucle infinie.
            La div se déplace de 0% à -50%, puis recommence instantanément.
          */}
          <motion.div 
            className="flex w-max gap-8 md:gap-16 px-8 md:px-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 40, // Plus le chiffre est grand, plus ça défile doucement
              repeat: Infinity 
            }}
          >
            {[...screens, ...screens].map((num, index) => {
              // On crée une légère rotation aléatoire (-3deg, 0deg, 3deg) selon l'index
              const rotation = index % 3 === 0 ? '-3deg' : index % 2 === 0 ? '3deg' : '0deg';
              // On décale certains téléphones vers le haut ou le bas
              const translateY = index % 2 === 0 ? '20px' : '-20px';

              return (
                <motion.div 
                  key={index}
                  className="relative w-[220px] md:w-[260px] lg:w-[300px] flex-shrink-0"
                  animate={floatAnimation(index)}
                  style={{ transform: `rotate(${rotation}) translateY(${translateY})` }}
                  // Arrête le défilement au survol de ce téléphone pour le regarder
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 50, transition: { duration: 0.3 } }}
                >
                  {/* Bulle Chill conditionnelle (seulement sur certains écrans) */}
                  {bubbles[num] && index < 9 && ( // index < 9 évite d'avoir les bulles en double dans la boucle
                    <div className={`absolute bg-white border px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold z-30 shadow-xl ${bubbles[num].styles}`}>
                      {bubbles[num].text}
                    </div>
                  )}

                  {/* L'image de ton iPhone */}
                  <img 
                    src={`/iphone${num}.png`} 
                    alt={`Écran Volt ${num}`} 
                    className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-[2.5rem]" 
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        {/* BOUTON D'APPEL À L'ACTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12 md:mt-20 px-6"
        >
           <button className="bg-[#07101f] text-white px-8 py-4 rounded-full font-bold hover:bg-[#07101f]/80 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
             Télécharger l'application
           </button>
        </motion.div>

      </div>
    </section>
  );
};

export default AppGallery;