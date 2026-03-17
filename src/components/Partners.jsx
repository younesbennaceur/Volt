import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight, CheckCircle2, TrendingUp, MapPin } from 'lucide-react';

const PartnerSection = () => {
  // --- ANIMATIONS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const floatAnimation = (delay, duration = 6) => ({
    y: ["-6px", "6px", "-6px"],
    transition: { duration: duration, repeat: Infinity, ease: "easeInOut", delay: delay }
  });

  return (
    <section id='partenaire' className="bg-white py-24 px-6 md:px-12 lg:px-20 font-sans text-[#07101f] overflow-hidden relative">
      
      {/* Background doux (Tons verts/émeraudes pour différencier l'espace Pro) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* COLONNE GAUCHE : COMPOSITION VISUELLE */}
        <motion.div 
          className="relative h-[500px] sm:h-[600px] flex justify-center items-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* L'iPhone principal (Application Pro) */}
          <motion.div 
            variants={itemVariants}
            animate={floatAnimation(0, 8)}
            className="relative z-20 w-[220px] sm:w-[260px] md:w-[280px]"
          >
            {/* Remplacer par ton image de l'app Pro : src="/iphone-pro.png" */}
            <img src="/partner.png" alt="Application Volt Pro" className="w-full h-auto drop-shadow-2xl rounded-[2.5rem]" />
          </motion.div>

          {/* CARTE FLOTTANTE 1 : Pop-up Nouvelle Course (Recréée en code) */}
          <motion.div 
            variants={itemVariants}
            animate={floatAnimation(1, 6)}
            className="absolute top-[15%] -left-[10%] sm:-left-[20%] md:-left-[10%] z-30 w-[220px] bg-white/95 backdrop-blur-md border border-gray-200 rounded-3xl p-4 rotate-[-4deg] shadow-xl"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">Nouvelle course</span>
              <span className="text-lg font-black text-emerald-600">75€</span>
            </div>
            <h4 className="font-bold text-sm mb-1">Dépannage Batterie</h4>
            <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
              <MapPin size={12} /> 10 Rue de Rivoli, Paris
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-gray-100 text-gray-600 text-xs font-bold py-2 rounded-xl">Refuser</button>
              <button className="bg-[#07101f] text-white text-xs font-bold py-2 rounded-xl">Accepter</button>
            </div>
          </motion.div>

          {/* CARTE FLOTTANTE 2 : Dashboard Revenus (Recréée en code) */}
          <motion.div 
            variants={itemVariants}
            animate={floatAnimation(0.5, 7)}
            className="absolute bottom-[10%] -right-[10%] sm:-right-[15%] md:-right-[5%] z-30 w-[200px] bg-white/95 backdrop-blur-md border border-gray-200 rounded-3xl p-5 rotate-[4deg] shadow-xl"
          >
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <TrendingUp size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Cette semaine</span>
            </div>
            <div className="text-3xl font-black mb-1">850,50€</div>
            <div className="text-xs font-bold text-emerald-500 flex items-center gap-1">
              <span>+12% vs sem. dernière</span>
            </div>
            
            {/* Faux petit graphique en barres */}
            <div className="flex items-end justify-between gap-1 h-12 mt-4 border-b border-gray-100 pb-1">
              <div className="w-full bg-blue-100 rounded-t-sm h-[40%]"></div>
              <div className="w-full bg-blue-100 rounded-t-sm h-[60%]"></div>
              <div className="w-full bg-blue-100 rounded-t-sm h-[30%]"></div>
              <div className="w-full bg-blue-600 rounded-t-sm h-[90%]"></div>
              <div className="w-full bg-blue-100 rounded-t-sm h-[70%]"></div>
            </div>
          </motion.div>

        </motion.div>


        {/* COLONNE DROITE : CONTENU & TEXTE */}
        <motion.div 
          className="flex flex-col items-start justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wide mb-6">
            <Briefcase size={16} />
            Espace Pro
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Dépanneurs, remorqueurs. <br/>
            <span className="text-emerald-600">Prenez le contrôle.</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-500 leading-relaxed mb-8">
            Rejoignez le réseau Volt et augmentez votre chiffre d'affaires. Comment s'inscrire ? C'est simple, téléchargez l'application et notre équipe s'occupe du reste.
          </motion.p>

          <motion.ul variants={containerVariants} className="space-y-4 mb-10 w-full">
            <motion.li variants={itemVariants} className="flex items-center gap-3 text-[#07101f] font-medium bg-gray-50 border border-gray-100 p-4 rounded-2xl">
              <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
              Travaillez quand vous voulez, sans contrainte.
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-center gap-3 text-[#07101f] font-medium bg-gray-50 border border-gray-100 p-4 rounded-2xl">
              <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
              Gérez vos revenus et courses en temps réel.
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-center gap-3 text-[#07101f] font-medium bg-gray-50 border border-gray-100 p-4 rounded-2xl">
              <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
              Support dédié disponible 24h/24 et 7j/7.
            </motion.li>
          </motion.ul>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 w-full">
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#07101f] text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-colors group">
              Télécharger l'app Pro
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Logo Stripe & Réassurance (Modifié ici) */}
            <div className="flex items-center gap-3">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wide text-right leading-tight">
                Paiements<br/>sécurisés
              </div>
              <div className="h-8 border-l border-gray-200"></div>
              {/* Image Stripe importée via URL */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
                alt="Logo Stripe" 
                className="h-6 object-contain"
              />
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default PartnerSection;