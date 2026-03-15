import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Zap, Check, Star } from 'lucide-react';

const HowItWorks = () => {
  // --- ANIMATIONS D'APPARITION ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  // --- ANIMATIONS DE SURVOL ---
  const cardHoverVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    hover: { 
      borderColor: "#d1d5db", 
      transition: { staggerChildren: 0.05 } 
    }
  };

  const scatterLeft = { hover: { x: -5, y: -2, rotate: -1, transition: { type: "spring", stiffness: 400, damping: 15 } } };
  const scatterRight = { hover: { x: 5, y: 2, rotate: 1, transition: { type: "spring", stiffness: 400, damping: 15 } } };
  const scatterUp = { hover: { x: 2, y: -5, rotate: 1, transition: { type: "spring", stiffness: 400, damping: 15 } } };
  const scatterDown = { hover: { x: -2, y: 5, rotate: -1, transition: { type: "spring", stiffness: 400, damping: 15 } } };
  
  // Bulles qui "poppent" au survol
  const bubblePopLeft = { hover: { scale: 1.1, rotate: -6, x: -5, y: -5, transition: { type: "spring", stiffness: 300, damping: 12 } } };
  const bubblePopRight = { hover: { scale: 1.1, rotate: 6, x: 5, y: -5, transition: { type: "spring", stiffness: 300, damping: 12 } } };

  const floatAnimation = (delay) => ({
    y: ["-3px", "3px", "-3px"],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay }
  });

  return (
    <section id='concept' className="bg-white py-16 px-4 sm:px-6 md:px-12 lg:p-20 font-sans text-[#07101f] overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER SECTION */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={{ hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0} }} className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
            Volt, comment ça marche ?
          </motion.h2>
          <motion.p variants={{ hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0} }} className="text-base sm:text-lg text-gray-500 leading-relaxed px-4 sm:px-0">
            Votre voiture est en panne ou vous souhaitez simplement remorquer votre véhicule ? C'est simple, le nouveau réflexe, c'est <span className="font-bold text-[#07101f]">Volt</span>.
          </motion.p>
        </motion.div>

        {/* BENTO GRID */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          
          {/* ÉTAPE 1 - Créer un compte */}
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="lg:col-span-2 bg-blue-50/30 border border-blue-100/50 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row justify-between min-h-[350px] md:min-h-[400px]"
          >
            {/* Bulle Chill */}
            <motion.div 
              animate={floatAnimation(0.2)} 
              variants={bubblePopRight}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 md:right-1/3 bg-white text-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold shadow-sm z-20 border border-blue-50 rotate-3"
            >
              En 2 min chrono ⏱️
            </motion.div>

            <div className="relative z-10 w-full md:w-3/5 flex flex-col items-start justify-center mb-48 md:mb-0">
              <motion.div variants={scatterLeft} className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</div>
                <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase">Étape 1</span>
              </motion.div>
              <motion.h3 variants={scatterRight} className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3">Créez un Compte</motion.h3>
              <motion.p variants={scatterUp} className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 uppercase mb-3 sm:mb-4">Facile et en 2 minutes !</motion.p>
              <motion.p variants={scatterDown} className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-relaxed pr-0 sm:pr-4">
                Inscrivez-vous, renseignez votre véhicule et vous êtes prêt à commander un dépanneur en quelques clics.
              </motion.p>
              <motion.div variants={scatterLeft} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600 bg-white/50 py-2 px-3 rounded-lg w-fit">
                <Zap size={16} className="text-yellow-500" />
                Inscription via Google/Apple
              </motion.div>
            </div>
            
            <motion.div 
              animate={floatAnimation(0)}
              variants={{ hover: { scale: 1.05, rotate: -2, x: -5, y: 5 } }}
              className="absolute right-0 bottom-0 w-[60%] sm:w-[50%] md:w-[45%] h-[60%] md:h-[90%] md:translate-x-0 md:translate-y-4"
            >
              {/* Le object-contain et object-right-bottom évite que l'image soit coupée bizarrement */}
              <img src="/1.png" alt="Créer un compte" className="w-full h-full object-contain object-right-bottom sm:object-center" />
            </motion.div>
          </motion.div>

          {/* 24/7 */}
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="lg:col-span-1 bg-amber-50/60 border border-amber-100 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[400px] relative overflow-hidden"
          >
            <motion.div 
              animate={floatAnimation(0.5)} 
              variants={bubblePopLeft}
              className="absolute top-6 right-4 sm:top-10 sm:right-6 bg-white text-amber-600 px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold shadow-sm z-20 -rotate-6"
            >
              Même à 3h du mat' 🌙
            </motion.div>

            <div className="relative z-10">
              <motion.div variants={scatterUp} className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
                <Clock className="text-amber-500 w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              <motion.h3 variants={scatterRight} className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4 text-amber-950">24/7</motion.h3>
              <motion.p variants={scatterLeft} className="text-sm sm:text-base text-amber-800/70 leading-relaxed font-medium">
                Service disponible sans interruption, jour et nuit, partout en France.
              </motion.p>
            </div>
            <motion.div variants={scatterDown} className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 relative z-10">
              <div className="flex -space-x-3">
                <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-amber-50" src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
                <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-amber-50" src="https://i.pravatar.cc/100?img=2" alt="Avatar" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-amber-50 bg-amber-400 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">+</div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-amber-900"><span className="font-bold text-amber-950">+2 000</span> pros</p>
            </motion.div>
          </motion.div>

          {/* 100% Gratuit */}
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="lg:col-span-1 bg-emerald-50/60 border border-emerald-100 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[400px] relative overflow-hidden"
          >
             <motion.div 
              animate={floatAnimation(0.8)} 
              variants={bubblePopRight}
              className="absolute bottom-6 right-4 sm:bottom-10 sm:right-6 bg-white text-emerald-600 px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold shadow-sm z-20 rotate-6"
            >
              Zéro frais cachés 💸
            </motion.div>

             <div className="relative z-10">
              <motion.div variants={scatterLeft} className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
                <CheckCircle2 className="text-emerald-500 w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              <motion.h3 variants={scatterUp} className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4 leading-tight text-emerald-950">100% Gratuit pour <br className="hidden sm:block"/> les clients</motion.h3>
              <motion.p variants={scatterRight} className="text-sm sm:text-base text-emerald-800/70 mb-6 sm:mb-8 leading-relaxed font-medium">
                Comparez les offres, choisissez votre professionnel et repartez serein.
              </motion.p>
            </div>
            <ul className="space-y-2 sm:space-y-3 relative z-10">
              <motion.li variants={scatterLeft} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-emerald-900">
                <Check size={16} className="text-emerald-500" /> Devis instantané
              </motion.li>
              <motion.li variants={scatterRight} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-emerald-900">
                <Check size={16} className="text-emerald-500" /> Paiement sécurisé
              </motion.li>
              <motion.li variants={scatterDown} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-emerald-900">
                <Check size={16} className="text-emerald-500" /> Sans engagement
              </motion.li>
            </ul>
          </motion.div>

          {/* ÉTAPE 2 - Commandez une course */}
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="lg:col-span-2 bg-purple-50/30 border border-purple-100/50 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col-reverse md:flex-row justify-between items-center min-h-[400px]"
          >
            <motion.div 
              animate={floatAnimation(1)} 
              variants={bubblePopLeft}
              className="absolute top-4 left-4 sm:top-8 sm:left-8 md:top-1/4 md:left-1/3 bg-white text-purple-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold shadow-sm z-20 border border-purple-50 -rotate-3"
            >
              J'ai crevé 🚗💨
            </motion.div>

            {/* Sur mobile : image en haut au centre, sur desktop : à gauche */}
            <motion.div 
              animate={floatAnimation(0.5)}
              variants={{ hover: { scale: 1.05, rotate: 2, x: 5, y: -5 } }}
              className="relative w-full h-48 md:w-2/5 md:h-full mt-6 md:mt-0 flex justify-center md:justify-start"
            >
              <img src="/2.png" alt="Commander un dépanneur" className="h-full w-auto md:absolute md:-bottom-10 md:-left-4 md:w-[90%] md:h-auto object-contain" />
            </motion.div>
            
            <div className="relative z-10 w-full md:w-[55%] flex flex-col items-start justify-center">
              <motion.div variants={scatterUp} className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">2</div>
                <span className="text-xs sm:text-sm font-bold tracking-wider text-purple-600 uppercase">Étape 2</span>
              </motion.div>
              <motion.h3 variants={scatterLeft} className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3">Commandez une Course</motion.h3>
              <motion.p variants={scatterRight} className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 uppercase mb-3 sm:mb-4">À chaque problème, une solution !</motion.p>
              <motion.p variants={scatterDown} className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-relaxed">
                Panne carburant, accident, remorquage... sélectionnez votre service, l'application répondra à toutes vos demandes.
              </motion.p>
              <div className="flex flex-wrap gap-2">
                <motion.span variants={scatterLeft} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-gray-600 text-[10px] sm:text-sm font-medium rounded-full border border-gray-100">Remorquage</motion.span>
                <motion.span variants={scatterUp} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-gray-600 text-[10px] sm:text-sm font-medium rounded-full border border-gray-100">Dépannage</motion.span>
                <motion.span variants={scatterRight} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-gray-600 text-[10px] sm:text-sm font-medium rounded-full border border-gray-100">Carburant</motion.span>
              </div>
            </div>
          </motion.div>

          {/* ÉTAPE 3 - Véhicule dépanné */}
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="lg:col-span-3 bg-slate-50 border border-slate-100/50 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:py-12 relative overflow-hidden flex flex-col md:flex-row justify-between items-center min-h-[400px] md:min-h-[450px]"
          >
            <motion.div 
              animate={floatAnimation(0.3)} 
              variants={bubblePopRight}
              className="absolute top-4 right-4 sm:top-8 sm:right-10 md:top-1/3 md:right-1/4 bg-white text-pink-500 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold shadow-sm z-20 border border-pink-50 rotate-6"
            >
              Ouf, merci Volt ! 💙
            </motion.div>

            <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start justify-center pr-0 md:pr-10 mb-48 md:mb-0">
              <motion.div variants={scatterRight} className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#07101f] text-white flex items-center justify-center text-xs font-bold">3</div>
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#07101f] uppercase">Étape 3</span>
              </motion.div>
              <motion.h3 variants={scatterLeft} className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3">Votre véhicule est dépanné !</motion.h3>
              <motion.p variants={scatterUp} className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 uppercase mb-3 sm:mb-4">Prise en charge rapide</motion.p>
              <motion.p variants={scatterDown} className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-10 leading-relaxed">
                Suivez l'arrivée de votre dépanneur en temps réel sur la carte. Contactez-le directement, évaluez le service et repartez serein. Application et services disponibles 24h/24 et 7j/7.
              </motion.p>
              
              <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 w-full justify-between sm:justify-start">
                <motion.div variants={scatterLeft}>
                  <p className="text-xl sm:text-2xl font-black mb-1">12 min</p>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Temps moyen</p>
                </motion.div>
                <motion.div variants={scatterUp}>
                  <p className="text-xl sm:text-2xl font-black mb-1">98%</p>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Satisfaits</p>
                </motion.div>
                <motion.div variants={scatterRight}>
                  <p className="text-xl sm:text-2xl font-black mb-1 flex items-center gap-1">4.9 <Star className="fill-[#07101f] text-[#07101f]" size={16} sm:size={20} /></p>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Note moyenne</p>
                </motion.div>
              </div>
            </div>

            <motion.div 
              animate={floatAnimation(1)}
              variants={{ hover: { scale: 1.05, rotate: -2, x: -5, y: 5 } }}
              className="absolute right-0 bottom-0 w-[80%] sm:w-[60%] md:w-1/2 h-[50%] md:h-[90%] md:flex md:justify-end"
            >
              {/* object-right-bottom force l'image en bas à droite */}
              <img src="/3.png" alt="Suivi en temps réel" className="w-full h-full object-contain object-right-bottom" />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;