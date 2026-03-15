import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      initials: 'MD',
      name: 'Marie Dubois',
      location: 'Paris, France',
      text: 'Service incroyable ! Ma voiture est tombée en panne à 23h et un dépanneur est arrivé en moins de 20 minutes. L’application est super intuitive et le prix transparent.',
      date: 'Il y a 2 jours',
      colorBg: 'bg-blue-50/40',
      colorBorder: 'border-blue-100/60',
      iconColor: 'bg-blue-600',
      bubbleText: 'Sauvée ! 💙',
      bubbleColor: 'text-blue-600 bg-white border-blue-50',
      bubbleVariant: 'right'
    },
    {
      initials: 'TB',
      name: 'Thomas Bernard',
      location: 'Lyon, France',
      text: 'J’ai utilisé Volt pour un remorquage après un accident. Le dépanneur était professionnel, rapide et très courtois. Je recommande à 100% !',
      date: 'Il y a 1 semaine',
      colorBg: 'bg-amber-50/60',
      colorBorder: 'border-amber-100',
      iconColor: 'bg-amber-500',
      bubbleText: 'Top pro ! 🌟',
      bubbleColor: 'text-amber-600 bg-white border-amber-50',
      bubbleVariant: 'left'
    },
    {
      initials: 'SM',
      name: 'Sophie Martin',
      location: 'Marseille, France',
      text: 'Panne de batterie un dimanche matin, j’ai trouvé un dépanneur en 5 minutes sur l’app. Le suivi en temps réel est un vrai plus. Merci Volt !',
      date: 'Il y a 3 jours',
      colorBg: 'bg-emerald-50/60',
      colorBorder: 'border-emerald-100',
      iconColor: 'bg-emerald-500',
      bubbleText: 'Rapide ⚡',
      bubbleColor: 'text-emerald-600 bg-white border-emerald-50',
      bubbleVariant: 'right'
    },
    {
      initials: 'JL',
      name: 'Julien L.',
      location: 'Bordeaux, France',
      text: 'Interface super claire et aucun frais caché. Le dépanneur m\'a même aidé à redémarrer sans avoir besoin de remorquer. Super expérience globale.',
      date: 'Il y a 2 semaines',
      colorBg: 'bg-purple-50/40',
      colorBorder: 'border-purple-100/60',
      iconColor: 'bg-purple-500',
      bubbleText: 'Zéro stress 🧘‍♂️',
      bubbleColor: 'text-purple-600 bg-white border-purple-50',
      bubbleVariant: 'left'
    },
  ];

  // --- ANIMATIONS D'APPARITION ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  // --- ANIMATIONS DE SURVOL (SCATTER & BULLES) ---
  const cardHoverVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    hover: { 
      borderColor: "#d1d5db", 
      transition: { staggerChildren: 0.05 } 
    }
  };

  const scatterLeft = { hover: { x: -6, y: -3, rotate: -1, transition: { type: "spring", stiffness: 400, damping: 15 } } };
  const scatterRight = { hover: { x: 6, y: 3, rotate: 1, transition: { type: "spring", stiffness: 400, damping: 15 } } };
  const scatterUp = { hover: { x: 3, y: -6, rotate: 1, transition: { type: "spring", stiffness: 400, damping: 15 } } };
  const scatterDown = { hover: { x: -3, y: 6, rotate: -1, transition: { type: "spring", stiffness: 400, damping: 15 } } };

  const bubblePopLeft = { hover: { scale: 1.15, rotate: -8, x: -10, y: -10, transition: { type: "spring", stiffness: 300, damping: 12 } } };
  const bubblePopRight = { hover: { scale: 1.15, rotate: 8, x: 10, y: -10, transition: { type: "spring", stiffness: 300, damping: 12 } } };

  const floatAnimation = (delay) => ({
    y: ["-4px", "4px", "-4px"],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay }
  });

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 font-sans text-[#07101f] overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div variants={{ hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0} }} className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-bold text-[#07101f] uppercase tracking-wide mb-6">
            <Star size={14} className="text-[#07101f] fill-[#07101f]" />
            Avis Clients
          </motion.div>
          
          <motion.h2 variants={{ hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0} }} className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
            Ce que disent nos utilisateurs
          </motion.h2>
          
          <motion.p variants={{ hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0} }} className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Des milliers de conducteurs font confiance à Volt pour leurs besoins de dépannage
          </motion.p>
        </motion.div>

        {/* GRILLE DES AVIS */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={cardHoverVariants}
              whileHover="hover"
              className={`${testimonial.colorBg} ${testimonial.colorBorder} border p-8 rounded-[2rem] relative flex flex-col justify-between h-full cursor-default`}
            >
              {/* Bulle Chill flottante */}
              <motion.div 
                animate={floatAnimation(index * 0.3)} 
                variants={testimonial.bubbleVariant === 'left' ? bubblePopLeft : bubblePopRight}
                className={`absolute -top-3 ${testimonial.bubbleVariant === 'left' ? '-left-3 rotate-[-4deg]' : '-right-3 rotate-[4deg]'} ${testimonial.bubbleColor} px-3 py-1.5 rounded-xl text-xs font-bold border z-20`}
              >
                {testimonial.bubbleText}
              </motion.div>

              {/* Guillemet de fond */}
              <motion.div variants={scatterUp}>
                <Quote size={40} className="absolute top-6 right-6 text-black/5 rotate-180" />
              </motion.div>

              <div className="relative z-10">
                {/* En-tête */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div variants={scatterLeft} className={`w-12 h-12 rounded-full ${testimonial.iconColor} flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.initials}
                  </motion.div>
                  <div>
                    <motion.h4 variants={scatterRight} className="font-extrabold text-[#07101f]">{testimonial.name}</motion.h4>
                    <motion.p variants={scatterUp} className="text-xs text-[#07101f]/50 font-medium">{testimonial.location}</motion.p>
                  </div>
                </div>

                {/* Étoiles */}
                <motion.div variants={scatterLeft} className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </motion.div>

                {/* Texte */}
                <motion.p variants={scatterDown} className="text-sm text-gray-700 leading-relaxed font-medium mb-8">
                  {testimonial.text}
                </motion.p>
              </div>

              {/* Date */}
              <motion.div variants={scatterUp} className="text-xs text-gray-400 font-bold uppercase tracking-wider pt-4 mt-auto border-t border-black/5">
                {testimonial.date}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* PAGINATION / CONTRÔLES */}
        <motion.div 
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.button whileHover={{ x: -3 }} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-[#07101f] transition-colors">
            <ChevronLeft size={20} />
          </motion.button>
          
          <div className="flex items-center gap-2">
            <span className="w-6 h-1.5 rounded-full bg-[#07101f] transition-all cursor-pointer"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"></span>
          </div>
          
          <motion.button whileHover={{ x: 3 }} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-[#07101f] transition-colors">
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;