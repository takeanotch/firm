
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Next Plus Africa a considérablement amélioré notre sécurité sur site grâce à des équipes professionnelles et des technologies de pointe. Leur service de gardiennage est exceptionnel.",
      name: "David Lukusa",
      position: "Directeur des Opérations",
      company: "Ecobank RDC"
    },
    {
      id: 2,
      quote: "Les tenues de travail personnalisées et les équipements de sécurité fournis par Next Plus Africa répondent parfaitement aux normes internationales de notre industrie.",
      name: "Sarah Kabila",
      position: "Responsable Logistique",
      company: "MSC Cruises"
    },
    {
      id: 3,
      quote: "Un partenaire fiable pour nos besoins en fournitures et nettoyage professionnel. Leur engagement envers la qualité et les délais est remarquable.",
      name: "Jonathan Mulumba",
      position: "Directeur Général",
      company: "Lang Group"
    }
  ];

  // Animations pour le container des cartes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Animation pour chaque carte individuelle
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  // Animation pour le titre
  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  // Animation pour la barre sous le titre
  const lineVariants = {
    hidden: { 
      width: 0,
      opacity: 0 
    },
    visible: { 
      width: 80,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation pour l'indicateur en bas
  const indicatorVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.6
      }
    }
  };

  // Animation pour l'icône de citation
  const quoteIconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180 
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  };

  // Animation pour l'avatar
  const avatarVariants = {
    hidden: { 
      scale: 0,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        delay: 0.4
      }
    }
  };

  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header minimaliste avec animation qui se répète */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <motion.h1 
            className="text-3xl font-light text-gray-800 mb-3 tracking-tight"
            variants={titleVariants}
          >
            What Our Customers Are Saying
          </motion.h1>
          <motion.div 
            className="w-20 h-0.5 bg-gray-300 mx-auto"
            variants={lineVariants}
          ></motion.div>
        </motion.div>

        {/* Grille de témoignages avec animation stagger qui se répète */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col h-full hover:border-gray-300 transition-colors"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
              viewport={{ amount: 0.3 }}
            >
              {/* Icône de citation avec animation qui se répète */}
              <motion.div 
                className="mb-5"
                variants={quoteIconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
              >
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </motion.div>
              
              {/* Texte tronqué - même hauteur pour toutes les cartes */}
              <div className="flex-grow">
                <motion.p 
                  className="text-gray-700 mb-6 line-clamp-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.1 }}
                  transition={{ delay: 0.3 }}
                >
                  {testimonial.quote}
                </motion.p>
              </div>
              
              {/* Informations utilisateur */}
              <div className="pt-5 border-t border-gray-100">
                <div className="flex items-start">
                  {/* Avatar minimaliste avec animation qui se répète */}
                  <motion.div 
                    className="mr-4 flex-shrink-0"
                    variants={avatarVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <motion.span 
                        className="text-gray-700 font-medium text-sm"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ amount: 0.1 }}
                        transition={{ 
                          type: "spring",
                          delay: 0.5,
                          stiffness: 200,
                          damping: 15
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </motion.span>
                    </div>
                  </motion.div>
                  
                  {/* Nom et entreprise */}
                  <div className="min-w-0">
                    <motion.h3 
                      className="font-medium text-gray-900 truncate"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ amount: 0.1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {testimonial.name}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 text-sm truncate"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ amount: 0.1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {testimonial.position}
                    </motion.p>
                    <motion.div 
                      className="flex items-center mt-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ amount: 0.1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded">
                        {testimonial.company}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Indicateur visuel de texte tronqué avec animation qui se répète */}
        <motion.div 
          className="mt-8 text-center"
          variants={indicatorVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <p className="text-gray-500 text-sm">
            * Les témoignages sont tronqués pour une lecture rapide
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsPage;