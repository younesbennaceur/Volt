import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleQuestion, Plus, Minus } from 'lucide-react';

// --- COMPOSANT POUR UNE QUESTION INDIVIDUELLE ---
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div 
      className={`border-b border-gray-100 overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-blue-50/30 rounded-2xl border-transparent px-4' : 'hover:bg-gray-50'}`}
      initial={false}
    >
      <button
        className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-[#07101f]'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="pb-6 text-gray-600 leading-relaxed font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- COMPOSANT PRINCIPAL FAQ ---
const FAQ = () => {
  // L'index de la question actuellement ouverte (null si tout est fermé)
  const [openIndex, setOpenIndex] = useState(0); // Ouvre la première par défaut pour inciter à lire

  const faqs = [
    {
      question: "Volt est-il vraiment 100% gratuit pour les clients ?",
      answer: "Absolument ! Le téléchargement de l'application et la demande de devis sont totalement gratuits. Vous ne payez que le prix de l'intervention affiché sur le devis que vous acceptez. Zéro frais cachés, zéro mauvaise surprise."
    },
    {
      question: "Quel est le temps d'attente moyen pour un dépanneur ?",
      answer: "Grâce à notre réseau de plus de 2 000 partenaires actifs en France, le temps d'attente moyen est de 15 à 30 minutes selon votre localisation et l'état du trafic. Vous pouvez d'ailleurs suivre l'arrivée du dépanneur en temps réel sur la carte !"
    },
    {
      question: "Quels types de pannes prenez-vous en charge ?",
      answer: "Nous couvrons presque tout : batterie à plat, crevaison, panne d'essence, erreur de carburant, remorquage classique, ou même si vous êtes embourbé. Il vous suffit de sélectionner votre problème dans l'application."
    },
    {
      question: "Comment s'effectue le paiement ?",
      answer: "Le paiement se fait directement et de manière 100% sécurisée via l'application. Vous pouvez utiliser votre Carte Bancaire, Apple Pay ou Google Pay. Vous n'avez pas besoin d'avoir de l'espèce sur vous au bord de la route."
    },
    {
      question: "Les dépanneurs partenaires sont-ils des professionnels ?",
      answer: "Oui, tous nos dépanneurs sont des professionnels certifiés, assurés et rigoureusement sélectionnés. De plus, ils sont évalués en continu par la communauté Volt pour vous garantir le meilleur service possible."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 font-sans text-[#07101f]">
      <div className="max-w-[800px] mx-auto">
        
        {/* HEADER */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-5 py-2 rounded-full text-xs font-bold text-[#07101f] uppercase tracking-wide mb-6 shadow-sm">
            <MessageCircleQuestion size={16} className="text-blue-500" />
            Questions fréquentes
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Des questions ? <br className="hidden sm:block" />
            <span className="text-gray-400">On a les réponses.</span>
          </h2>
        </motion.div>

        {/* LISTE DES QUESTIONS */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)} // Permet de fermer si on clique sur celui déjà ouvert
            />
          ))}
        </div>

        {/* PETIT BLOC DE CONTACT SI LA QUESTION N'EST PAS LÀ */}
        <motion.div 
          className="mt-12 bg-gray-50 rounded-3xl p-8 text-center border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-lg font-bold mb-2">Vous ne trouvez pas votre réponse ?</h4>
          <p className="text-gray-500 mb-6 font-medium text-sm">Notre équipe de support est là pour vous aider 24/7.</p>
          <button className="bg-white border border-gray-200 text-[#07101f] px-6 py-3 rounded-full font-bold hover:border-gray-300 hover:shadow-sm transition-all text-sm">
            Contactez-nous
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;