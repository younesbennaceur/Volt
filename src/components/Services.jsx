import React from 'react';
import { motion } from 'framer-motion';
import { CircleDashed, Zap, Truck, MapPin } from 'lucide-react';

const Services = () => {
  // Les données de vos services avec des textes bien vendeurs
  const servicesList = [
    {
      icon: <CircleDashed size={32} className="text-blue-600" />,
      title: "Dépannage Pneu Express",
      description: "Une crevaison au pire moment ? Ne vous salissez pas les mains. Commandez un pro pour réparer ou changer votre roue en un clin d'œil, directement sur place."
    },
    {
      icon: <Zap size={32} className="text-blue-600" />,
      title: "Panne de Batterie",
      description: "Votre voiture refuse de démarrer ? Un dépanneur intervient avec des câbles ou un booster pour vous faire repartir en quelques minutes."
    },
    {
      icon: <Truck size={32} className="text-blue-600" />,
      title: "Remorquage Sécurisé",
      description: "Si la panne est trop lourde, choisissez un camion de remorquage adapté pour transporter votre véhicule vers le garage de votre choix."
    },
    {
      icon: <MapPin size={32} className="text-blue-600" />,
      title: "Suivi en Temps Réel",
      description: "Fini l'attente dans le flou. Suivez l'approche de votre dépanneur directement sur la carte de l'application, comme pour un VTC."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    // J'ai changé l'ID ici pour correspondre au nouveau nom
    <section id="services" className="py-24 bg-white text-slate-800 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* En-tête de la section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-wider uppercase text-sm"
          >
            Nos Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-[#07101f]"
          >
            Une solution à chaque problème
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500"
          >
            Que ce soit un simple pneu dégonflé ou une panne moteur, Volt vous connecte avec le bon professionnel, équipé pour votre situation.
          </motion.p>
        </div>

        {/* Grille des services */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#07101f]">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;