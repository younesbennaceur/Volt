import React from 'react';
import { motion } from 'framer-motion';
import { Play, Apple, Send, Disc } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
   
    <footer id="contact" className="bg-[#07101f] pt-24 pb-8 px-6 md:px-12 lg:px-20 font-sans text-white border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          
          <div className="flex flex-col">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <img className="h-16" src="./VoltLogo.png" alt="Volt Logo" />
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Volt. révolutionne le dépannage automobile en connectant conducteurs en détresse et dépanneurs professionnels en temps réel. Disponible partout, à tout moment.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <button className="flex items-center gap-3 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-2xl hover:bg-white/10 transition-colors">
                <Apple size={24} className="fill-white" />
                <div className="text-left">
                  <span className="text-[9px] uppercase font-bold text-slate-400 block leading-none mb-1">Télécharger dans</span>
                  <span className="text-sm font-bold block leading-none">l'App Store</span>
                </div>
              </button>
              
              <button className="flex items-center gap-3 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-2xl hover:bg-white/10 transition-colors">
                <Play size={20} className="fill-white" />
                <div className="text-left">
                  <span className="text-[9px] uppercase font-bold text-slate-400 block leading-none mb-1">Disponible sur</span>
                  <span className="text-sm font-bold block leading-none">Google Play</span>
                </div>
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8">
              {/* Menu Navigation */}
              <div>
                <h4 className="text-white font-bold mb-4">Navigation</h4>
                <ul className="space-y-3">
                  {/* 2. ON MET À JOUR LES LIENS ICI */}
                  <li><a href="#concept" className="text-slate-400 hover:text-white text-sm transition-colors">Concept</a></li>
                  <li><a href="#fonctionnalites" className="text-slate-400 hover:text-white text-sm transition-colors">Fonctionnalités</a></li>
                  <li><a href="#galerie" className="text-slate-400 hover:text-white text-sm transition-colors">Galerie</a></li>
                  <li><a href="#partenaire" className="text-slate-400 hover:text-white text-sm transition-colors">Devenir Partenaire</a></li>
                  <li><a href="#contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Menu Légal */}
              <div>
                <h4 className="text-white font-bold mb-4">Légal</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Mentions légales</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">CGU</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Politique de confidentialité</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Cookies</a></li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">Contactez-nous</h3>
            <p className="text-slate-400 text-sm mb-8">Une question ? Un partenariat ? Ecrivez-nous.</p>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Votre nom" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
              <input type="email" placeholder="Votre email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
              <textarea placeholder="Votre message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"></textarea>
              <button type="submit" className="w-full bg-white text-[#07101f] font-bold text-base px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors mt-2">
                Envoyer le message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </motion.div>

        <div className="w-full h-px bg-white/10 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Volt. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Twitter</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Instagram</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;