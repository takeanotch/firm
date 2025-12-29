
// 'use client'
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// export default function HeroPage() {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const fadeInLeft = {
//     hidden: { opacity: 0, x: -30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut"
//       }
//     }
//   };

//   const fadeInRight = {
//     hidden: { opacity: 0, x: 30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut"
//       }
//     }
//   };

//   const scaleIn = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Variants pour les boutons
//   const buttonHoverVariants = {
//     rest: { scale: 1 },
//     hover: { 
//       scale: 1.05,
//       transition: {
//         duration: 0.2,
//         type: "spring",
//         stiffness: 400,
//         damping: 10
//       }
//     }
//   };

//   // Variants pour l'image
//   const imageHoverVariants = {
//     rest: { scale: 1 },
//     hover: { 
//       scale: 1.02,
//       transition: {
//         duration: 0.4,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const badgePulseVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   const statsVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1 + 0.8,
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     })
//   };

//   const highlightWordVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "backOut"
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white px-4 md:px-8 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         {/* Main Content */}
//         <motion.main 
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24"
//           initial="hidden"
//           animate={isMounted ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           {/* Colonne Gauche - Image avec masque */}
//           <motion.div 
//             className="order-2 lg:order-2" 
//             variants={fadeInRight}
//           >
//             <motion.div 
//               className="relative h-[340px] md:h-[400px] w-full overflow-hidden"
//               initial="rest"
//               animate="rest"
//               whileHover="hover"
//               variants={imageHoverVariants}
//             >
//               {/* Conteneur avec masque PNG */}
//               <div 
//                 className="relative w-full h-full"
//                 style={{
//                   maskImage: 'url(/load.png)',
//                   WebkitMaskImage: 'url(/load.png)',
//                   maskSize: 'contain',
//                   WebkitMaskSize: 'contain',
//                   maskRepeat: 'no-repeat',
//                   WebkitMaskRepeat: 'no-repeat',
//                   maskPosition: 'center',
//                   WebkitMaskPosition: 'center'
//                 }}
//               >
//                 {/* Image réelle - Hero image */}
//                 <Image
//                   src="/one.jpg"
//                   alt="Next Plus Africa - Sécurité, Nettoyage, Tenues de travail"
//                   fill
//                   className="object-cover"
//                   priority
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
                
//                 {/* Overlay décoratif */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
//               </div>
              
//               {/* Badge sur l'image */}
//               <motion.div 
//                 className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
//                 variants={badgePulseVariants}
//                 whileHover={{ 
//                   scale: 1.1,
//                   backgroundColor: "rgba(255, 255, 255, 1)"
//                 }}
//                 animate={{
//                   y: [0, -5, 0]
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatType: "reverse"
//                 }}
//               >
//                 <span className="text-gray-900 font-semibold">Experts Depuis 2023</span>
//               </motion.div>
              
//               {/* Éléments décoratifs */}
//               <motion.div 
//                 className="absolute bottom-6 right-6 bg-next-orange text-white px-4 py-3 rounded-lg shadow-lg"
//                 variants={scaleIn}
//                 transition={{ delay: 0.5 }}
//                 whileHover={{ 
//                   scale: 1.1,
//                   rotate: [0, 5, -5, 0],
//                   transition: { duration: 0.3 }
//                 }}
//                 animate={{
//                   boxShadow: [
//                     "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
//                     "0 20px 40px -10px rgba(59, 130, 246, 0.7)",
//                     "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
//                   ]
//                 }}
//               >
//                 <motion.div 
//                   className="text-2xl font-bold"
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   50+
//                 </motion.div>
//                 <div className="text-sm">Agents Déployés</div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
          
//           {/* Colonne Droite - Texte */}
//           <div className="order-1 lg:order-1">
//             {/* Badge/Tag */}
//             <motion.div 
//               className="inline-flex items-center bg-orange-50 text-next-orange px-4 py-2 rounded-full text-sm font-medium mb-6"
//               variants={fadeInUp}
//             >
//               <motion.span 
//                 className="h-2 w-2 bg-next-orange-light rounded-full mr-2"
//                 animate={{
//                   scale: [1, 1.2, 1],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatType: "reverse"
//                 }}
//               />
//               Leader en Sécurité
//             </motion.div>
            
//             {/* Main Heading */}
//             <motion.h1 
//               className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
//               variants={containerVariants}
//             >
//               Solutions Complètes pour
//               <motion.span 
//                 className='fa mx-3 text-next-orange relative inline-block'
//                 variants={highlightWordVariants}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 votre sécurité
//                 <motion.span 
//                   className="absolute -bottom-1 left-0 w-full h-1 bg-blue-200"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ delay: 0.5, duration: 0.3 }}
//                 />
//               </motion.span>
//               et propreté.
//             </motion.h1>
            
//             {/* Subheading */}
//             <motion.p 
//               className="text-xl text-gray-600 mb-8 max-w-lg"
//               variants={fadeInUp}
//               transition={{ delay: 0.2 }}
//             >
//               Next Plus Africa vous offre des services de sécurité, nettoyage professionnel, 
//               tenues de travail personnalisées et fournitures de qualité supérieure en 
//               République Démocratique du Congo.
//             </motion.p>
            
//             {/* Divider */}
//             <motion.div 
//               className="w-16 h-1 bg-gray-300 mb-8"
//               initial={{ width: 0 }}
//               animate={{ width: 64 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             />
            
//             {/* CTA Buttons */}
//             <motion.div 
//               className="flex flex-col sm:flex-row gap-4 mb-12"
//               variants={containerVariants}
//             >
//               <motion.button 
//                 className="bg-next-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center shadow-lg"
//                 variants={fadeInUp}
//                 initial="rest"
//                 whileHover="hover"
               
//               >
//                 Nos Services
//                 <motion.svg 
//                   className="ml-2 w-5 h-5"
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24" 
//                   xmlns="http://www.w3.org/2000/svg"
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                 </motion.svg>
//               </motion.button>
              
//               <motion.button 
//                 className="text-next-gray border-2 border-next-gray-light px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center shadow-md"
//                 variants={fadeInUp}
//                 transition={{ delay: 0.1 }}
//                 initial="rest"
//                 whileHover="hover"
               
//               >
//                 Demander un Devis
//                 <motion.svg 
//                   className="ml-2 w-5 h-5"
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24" 
//                   xmlns="http://www.w3.org/2000/svg"
//                   animate={{ rotate: [0, 10, 0, -10, 0] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//                 </motion.svg>
//               </motion.button>
//             </motion.div>
            
//             {/* Trusted By Section */}
//             <motion.div 
//               variants={fadeInUp}
//               transition={{ delay: 0.4 }}
//             >
//               <p className="text-gray-500 text-sm mb-6">Ils nous font confiance</p>
              
//               {/* Company Logos */}
//               <motion.div 
//                 className="flex flex-wrap items-center gap-6"
//                 variants={containerVariants}
//               >
//                 {/* LANG GROUP */}
//                 <motion.div 
//                   className="h-10 w-auto"
//                   variants={fadeInUp}
//                   whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Image
//                     src="/confiance/amen.png"
//                     alt="LANG GROUP"
//                     width={80}
//                     height={40}
//                     className="h-10 w-auto object-contain"
//                   />
//                 </motion.div>
                
//                 {/* MSC CRUISES */}
//                 <motion.div 
//                   className="h-10 w-auto"
//                   variants={fadeInUp}
//                   transition={{ delay: 0.1 }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <Image
//                     src="/confiance/Ecobank-Logo.png"
//                     alt="MSC CRUISES"
//                     width={80}
//                     height={40}
//                     className="h-10 w-auto object-contain"
//                   />
//                 </motion.div>
                
//                 {/* AMEN */}
//                 <motion.div 
//                   className="h-10 w-auto"
//                   variants={fadeInUp}
//                   transition={{ delay: 0.2 }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <Image
//                     src="/confiance/lakegroup.webp"
//                     alt="AMEN"
//                     width={80}
//                     height={40}
//                     className="h-10 w-auto object-contain"
//                   />
//                 </motion.div>
                
//                 {/* UNITED TRADING COMP */}
//                 <motion.div 
//                   className="h-10 w-auto"
//                   variants={fadeInUp}
//                   transition={{ delay: 0.3 }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <Image
//                     src="/confiance/Logo-ambassade-rdc-1.png"
//                     alt="United Trading Comp"
//                     width={80}
//                     height={40}
//                     className="h-10 w-auto object-contain"
//                   />
//                 </motion.div>
                
//                 {/* ECOBANK */}
//                 <motion.div 
//                   className="h-10 w-auto"
//                   variants={fadeInUp}
//                   transition={{ delay: 0.4 }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <Image
//                     src="/confiance/MSC-Cruise-Logo.png"
//                     alt="Ecobank - The Pan African Bank"
//                     width={80}
//                     height={40}
//                     className="h-10 w-auto object-contain"
//                   />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.main>

//         {/* Stats Section */}
//         <motion.div 
//           className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12"
//           initial="hidden"
//           animate={isMounted ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           {[
//             { value: "50+", label: "Agents Sécurité & Nettoyage" },
//             { value: "4", label: "Services Spécialisés" },
//             { value: "2+", label: "Années d'Expérience" },
//             { value: "14.5M+", label: "Capital Social (CDF)" }
//           ].map((stat, index) => (
//             <motion.div 
//               key={index}
//               className="text-center"
//               variants={statsVariants}
//               custom={index}
//               whileHover={{ 
//                 y: -10,
//                 transition: { duration: 0.2 }
//               }}
//             >
//               <motion.div 
//                 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
//                 animate={{ 
//                   scale: [1, 1.05, 1]
//                 }}
//                 transition={{ 
//                   delay: index * 0.2 + 1,
//                   duration: 0.5,
//                   repeat: Infinity,
//                   repeatDelay: 3
//                 }}
//               >
//                 {stat.value}
//               </motion.div>
//               <p className="text-gray-600">{stat.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }
'use client'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 pour gauche, 1 pour droite

  // Images pour le carousel
  const carouselImages = [
    { src: "/services/safety.png", alt: "Service de Sécurité" },
    { src: "/services/cleaning3.jpg", alt: "Service de Nettoyage" },
    { src: "/services/security.jpg", alt: "Service de Gardiennage" }
  ];

  // Services avec descriptions
  const services = [
    { 
      title: "Security", 
      description: "Protection 24h/24 avec nos agents formés",
      icon: "🛡️"
    },
    { 
      title: "Cleaning", 
      description: "Nettoyage professionnel et hygiène totale",
      icon: "🧹"
    },
    { 
      title: "Gardiennage", 
      description: "Surveillance continue de vos locaux",
      icon: "👮"
    }
  ];

  // Fonction pour changer d'image
  const goToNextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    const newDirection = index > currentImageIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentImageIndex(index);
  };

  // Carousel auto-play
  useEffect(() => {
    setIsMounted(true);
    
    const interval = setInterval(() => {
      goToNextImage();
    }, 3000); // Changement toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Variants pour le carousel - animation améliorée
  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    })
  };

  const imageHoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const badgePulseVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.8,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const highlightWordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  // Animation pour les points du carousel
  const dotVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "#D1D5DB"
    },
    active: {
      scale: 1.4,
      backgroundColor: "#F97316",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <motion.main 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Colonne Gauche - Image avec masque et carousel */}
          <motion.div 
            className="order-2 lg:order-2" 
            variants={fadeInRight}
          >
            <motion.div 
              className="relative h-[340px] md:h-[400px] w-full overflow-hidden rounded-xl"
              initial="rest"
              animate="rest"
              whileHover="hover"
              variants={imageHoverVariants}
            >
              {/* Conteneur avec masque PNG */}
              <div 
                className="relative w-full h-full"
                style={{
                  maskImage: 'url(/load.png)',
                  WebkitMaskImage: 'url(/load.png)',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              >
                {/* Carousel d'images avec AnimatePresence */}
                <AnimatePresence initial={false} custom={direction} mode='popLayout'>
                  <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0"
                    custom={direction}
                    variants={carouselVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <Image
                      src={carouselImages[currentImageIndex].src}
                      alt={carouselImages[currentImageIndex].alt}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Overlay décoratif */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Boutons de navigation */}
                <motion.button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-20"
                  onClick={goToPrevImage}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <motion.button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-20"
                  onClick={goToNextImage}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
              
              {/* Badge Services */}
              <motion.div 
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-10"
                variants={badgePulseVariants}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 1)"
                }}
                animate={{
                  boxShadow: [
                    "0 4px 12px rgba(0,0,0,0.1)",
                    "0 8px 20px rgba(0,0,0,0.15)",
                    "0 4px 12px rgba(0,0,0,0.1)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <motion.span 
                    className="text-lg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ⭐
                  </motion.span>
                  <span className="text-gray-900 font-semibold">Nos Services</span>
                </div>
              </motion.div>
              
           
              
              {/* Points indicateurs du carousel */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
                {carouselImages.map((_, index) => (
                  <motion.button
                    key={index}
                    className="w-2 h-2 rounded-full"
                    onClick={() => goToImage(index)}
                    whileHover={{ scale: 1.5 }}
                    variants={dotVariants}
                    animate={index === currentImageIndex ? "active" : "inactive"}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>
              
              {/* Indicateur de carousel */}
              <motion.div 
                className="absolute top-6 right-6 bg-black/70 text-white px-3 py-1 rounded-full text-xs z-10"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
              >
                <span className="font-mono">
                  {currentImageIndex + 1}/{carouselImages.length}
                </span>
              </motion.div>
              
              {/* Élément décoratif avec compteur */}
              <motion.div 
                className="absolute -bottom-3 -right-3 bg-next-orange text-white px-4 py-3 rounded-lg shadow-lg z-10"
                variants={scaleIn}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5,
                  boxShadow: { duration: 2, repeat: Infinity },
                  rotateY: { duration: 4, repeat: Infinity, ease: "linear" }
                }}
              >
                <div 
                  className="text-2xl font-bold"
                >
                  50+
                <div className="text-sm">Agents Déployés</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Légende de l'image courante */}
            <AnimatePresence mode='wait'>
              <motion.div 
                key={currentImageIndex}
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700 font-medium">
                  {services[currentImageIndex]?.title} - {services[currentImageIndex]?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          {/* Colonne Droite - Texte */}
          <div className="order-1 lg:order-1">
            {/* Badge/Tag */}
            <motion.div 
              className="inline-flex items-center bg-orange-50 text-next-orange px-4 py-2 rounded-full text-sm font-medium mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="h-2 w-2 bg-next-orange-light rounded-full mr-2"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              Leader en Sécurité
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              variants={containerVariants}
            >
              Solutions Complètes pour
              <motion.span 
                className='fa mx-3 text-next-orange relative inline-block'
                variants={highlightWordVariants}
                whileHover={{ scale: 1.05 }}
              >
                votre sécurité
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-1 bg-blue-200"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                />
              </motion.span>
              et propreté.
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-lg"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Next Plus Africa vous offre des services de sécurité, nettoyage professionnel, 
              tenues de travail personnalisées et fournitures de qualité supérieure en 
              République Démocratique du Congo.
            </motion.p>
            
            {/* Divider */}
            <motion.div 
              className="w-16 h-1 bg-gray-300 mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={containerVariants}
            >
              <motion.button 
                className="bg-next-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center shadow-lg"
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                Nos Services
                <motion.svg 
                  className="ml-2 w-5 h-5"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </motion.svg>
              </motion.button>
              
              <motion.button 
                className="text-next-gray border-2 border-next-gray-light px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center shadow-md"
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                Demander un Devis
                <motion.svg 
                  className="ml-2 w-5 h-5"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </motion.svg>
              </motion.button>
            </motion.div>
            
            {/* Trusted By Section */}
            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-500 text-sm mb-6">Ils nous font confiance</p>
              
              {/* Company Logos */}
              <motion.div 
                className="flex flex-wrap items-center gap-6"
                variants={containerVariants}
              >
                {/* LANG GROUP */}
                <motion.div 
                  className="h-10 w-auto"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/confiance/amen.png"
                    alt="LANG GROUP"
                    width={80}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>
                
                {/* MSC CRUISES */}
                <motion.div 
                  className="h-10 w-auto"
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src="/confiance/Ecobank-Logo.png"
                    alt="MSC CRUISES"
                    width={80}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>
                
                {/* AMEN */}
                <motion.div 
                  className="h-10 w-auto"
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src="/confiance/lakegroup.webp"
                    alt="AMEN"
                    width={80}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>
                
                {/* UNITED TRADING COMP */}
                <motion.div 
                  className="h-10 w-auto"
                  variants={fadeInUp}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src="/confiance/Logo-ambassade-rdc-1.png"
                    alt="United Trading Comp"
                    width={80}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>
                
                {/* ECOBANK */}
                <motion.div 
                  className="h-10 w-auto"
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src="/confiance/MSC-Cruise-Logo.png"
                    alt="Ecobank - The Pan African Bank"
                    width={80}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.main>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {[
            { value: "50+", label: "Agents Sécurité & Nettoyage" },
            { value: "4", label: "Services Spécialisés" },
            { value: "2+", label: "Années d'Expérience" },
            { value: "14.5M+", label: "Capital Social (CDF)" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={statsVariants}
              custom={index}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  delay: index * 0.2 + 1,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}