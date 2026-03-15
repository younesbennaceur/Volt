import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Wrench, CalendarClock, BriefcaseBusiness } from 'lucide-react';

const Features = () => {
  // --- ANIMATIONS D'APPARITION ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  // --- ANIMATIONS DE SURVOL (EFFET DÉSORDRE & BULLES) ---
  const cardHoverVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    hover: { 
      borderColor: "#d1d5db", 
      transition: { staggerChildren: 0.05 } 
    }
  };

  const scatterLeft = { hover: { x: -5, y: -2, rotate: -1, transition: { type: "spring", stiffness: 400, damping: 15 } } };
  const scatterRight = { hover: { x: 5, y: 2, rotate: 1, transition: { type: "spring", stiffness: 400, damping: 15 } } };
  const scatterUp = { hover: { x: 2, y: -5, rotate: 1, transition: { type: "spring", stiffness: 400, damping: 15 } } };
  
  // Bulle flottante
  const bubblePop = { hover: { scale: 1.1, rotate: 6, x: 5, y: -10, transition: { type: "spring", stiffness: 300, damping: 12 } } };

  const floatAnimation = (delay) => ({
    y: ["-4px", "4px", "-4px"],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay }
  });

  return (
    <section id='fonctionnalites' className="bg-white py-20 px-6 md:px-12 lg:p-20 font-sans text-[#07101f] overflow-hidden">
      <motion.div 
        className="max-w-[1200px] mx-auto lg:grid lg:grid-cols-12 gap-12 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        
        {/* =========================================
            COLONNE DE GAUCHE : Intro & Image
        ========================================= */}
        <div className="lg:col-span-5 mb-16 lg:mb-0 lg:sticky lg:top-24">
          <motion.h2 
            variants={{ hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0} }} 
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Fonctionnalités
          </motion.h2>
          
          {/* Ligne pointillée inspirée de la maquette, version moderne */}
          <motion.div 
            variants={{ hidden: {opacity: 0, width: 0}, visible: {opacity: 1, width: "6rem", transition: { duration: 0.8 }} }} 
            className="border-b-4 border-dashed border-blue-900 mb-8"
          ></motion.div>
          
          <motion.div variants={{ hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0} }} className="text-gray-500 space-y-6 leading-relaxed text-lg">
            <p>
              Volt est un service de <strong className="text-[#07101f]">dépannage et remorquage à la demande</strong>, c'est un intermédiaire mettant en relation des dépanneurs ou remorqueurs avec les <strong className="text-[#07101f]">usagers de la route.</strong>
            </p>
            <p>
              Suite à une panne, un accident, ou simplement pour <strong className="text-[#07101f]">déplacer ou rapatrier son véhicule...</strong> (voiture VL, 4x4, moto, utilitaires, voiture de collection ou de prestige, engins de chantiers...).
            </p>
          </motion.div>

          {/* Illustration Vaisseau/Voiture */}
          <motion.div 
            variants={{ hidden: {opacity: 0, scale: 0.9}, visible: {opacity: 1, scale: 1} }}
            className="mt-12 relative h-64 bg-slate-50 border border-slate-100 rounded-[2rem] flex items-center justify-center overflow-hidden"
          >
             <motion.div animate={floatAnimation(0)} className="text-center">
                {/* Remplacez par votre image exacte */}
                <img src="/logo.png" alt="Véhicules et App" className="sm:h-2 md:w-full md:h-full  object-contain drop-shadow-xl" />
                
             </motion.div>
          </motion.div>
        </div>

        {/* =========================================
            COLONNE DE DROITE : Grille Bento des 4 Cartes
        ========================================= */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Carte 1 : Temps réel */}
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="bg-blue-50/50 border border-blue-100/50 rounded-[2rem] p-8 relative overflow-hidden cursor-default flex flex-col"
          >
            <motion.div variants={scatterUp} className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <Timer className="text-blue-500" size={24} />
            </motion.div>
            <motion.h3 variants={scatterRight} className="text-xl font-extrabold mb-3 text-[#07101f] leading-tight">
              Disponibilité en temps réel, commande immédiate
            </motion.h3>
            <motion.p variants={scatterLeft} className="text-gray-500 text-sm leading-relaxed">
              Grâce à la géolocalisation, Volt recherche pour vous, proche de vous, un partenaire dépanneur disponible.
            </motion.p>
          </motion.div>

          {/* Carte 2 : Sur place */}
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="bg-emerald-50/50 border border-emerald-100/50 rounded-[2rem] p-8 relative overflow-hidden cursor-default flex flex-col"
          >
            {/* Petite bulle fun */}
            <motion.div 
              animate={floatAnimation(0.2)} 
              variants={bubblePop}
              className="absolute top-6 right-6 bg-white text-emerald-600 px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm z-20 rotate-3"
            >
              Coup de boost 🔋
            </motion.div>

            <motion.div variants={scatterUp} className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <Wrench className="text-emerald-500" size={24} />
            </motion.div>
            <motion.h3 variants={scatterRight} className="text-xl font-extrabold mb-3 text-[#07101f] leading-tight">
              La solution sur place existe !
            </motion.h3>
            <motion.p variants={scatterLeft} className="text-gray-500 text-sm leading-relaxed pr-4">
              Changement de roue, carburant, batterie... Nos partenaires viennent vous aider à reprendre la route sereinement.
            </motion.p>
          </motion.div>

          {/* Carte 3 : Réservation */}
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="bg-purple-50/50 border border-purple-100/50 rounded-[2rem] p-8 relative overflow-hidden cursor-default flex flex-col"
          >
            <motion.div variants={scatterUp} className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <CalendarClock className="text-purple-500" size={24} />
            </motion.div>
            <motion.h3 variants={scatterRight} className="text-xl font-extrabold mb-3 text-[#07101f] leading-tight">
              Réservation pour plus tard
            </motion.h3>
            <motion.p variants={scatterLeft} className="text-gray-500 text-sm leading-relaxed">
              Planifiez le transport de votre véhicule au moment et à l'endroit qui vous conviennent le mieux.
            </motion.p>
          </motion.div>

          {/* Carte 4 : Pro */}
          <motion.div 
            variants={cardHoverVariants}
            whileHover="hover"
            className="bg-amber-50/50 border border-amber-100/50 rounded-[2rem] p-8 relative overflow-hidden cursor-default flex flex-col"
          >
             <motion.div 
              animate={floatAnimation(0.5)} 
              variants={bubblePop}
              className="absolute top-6 right-6 bg-white text-amber-600 px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm z-20 -rotate-3"
            >
              Espace B2B 💼
            </motion.div>

            <motion.div variants={scatterUp} className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <BriefcaseBusiness className="text-amber-500" size={24} />
            </motion.div>
            <motion.h3 variants={scatterRight} className="text-xl font-extrabold mb-3 text-[#07101f] leading-tight">
              Compte Professionnel
            </motion.h3>
            <motion.p variants={scatterLeft} className="text-gray-500 text-sm leading-relaxed">
              Garagistes, concessionnaires, loueurs... Volt offre des solutions adaptées à vos besoins professionnels.
            </motion.p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Features;