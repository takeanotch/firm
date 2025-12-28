// 'use client'
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const ServicesPresentation = () => {
//   const services = [
//     {
//       id: 1,
//       title: "Sécurité et Gardiennage",
//       subtitle: "LION EVOLUTION SECURITY",
//       description: "Déterminés à ce que nos services de sécurité soient rentables et compétitifs sur le marché. Nous investissons continuellement dans la formation et l'amélioration de nos équipes de sécurité, en utilisant les dernières technologies pour optimiser nos processus opérationnels et en travaillant avec nos clients pour développer des solutions de sécurité sur mesure qui répondent à leurs besoins spécifiques.",
//       servicesList: [
//         "Intervention",
//         "Escorte & Convois",
//         "Garde personnel",
//         "Transport d'argent",
//         "Alarmes",
//         "Empreintes",
//         "GPS",
//         "Electric fence",
//         "Cameras de sécurité"
//       ],
//       values: "DISCIPLINE, PONCTUALITÉ, QUALITÉ",
//       imagePosition: 'left',
//       imageSrc: "/images/securite.jpg", // Remplace par ton chemin d'image
//     },
//     {
//       id: 2,
//       title: "Tenues de travail & Safety",
//       description: "Habillements des travailleurs sur site et dans les bureaux, la société confectionne et personnalise les tenues de travail brodé, sérigraphies ou floqué ainsi que toutes vos tenues pour travailler en toute sécurité, nous disposons d'un large choix de gamme et des couleurs pour répondre à toute sorte de demande : Mining, chantier, hôpital, compagnies aérienne, etc. Nous vous fournissons la signalisation sur site et les équipements de sécurité de voiture pour une bonne concordance des mouvements sur site.",
//       features: [
//         "Broderie",
//         "Professionnalisme dans la simplicité",
//         "Personnalisation par broderie"
//       ],
//       imagePosition: 'right',
//       imageSrc: "/images/tenues-travail.jpg", // Remplace par ton chemin d'image
//     },
//     {
//       id: 3,
//       title: "Nettoyage",
//       subtitle: "ROSE CLEANING",
//       description: "Un service de qualité supérieure pour nos clients, tout en veillant à leur satisfaction. Nous nous engageons à utiliser des produits de haute qualité pour garantir des résultats de nettoyage impeccables. Nous travaillons en étroite collaboration avec nos clients pour élaborer des solutions de nettoyage personnalisées qui répondent à leurs besoins uniques.",
//       servicesList: [
//         "NETTOYAGE DES BUREAUX",
//         "NETTOYAGE INDUSTRIEL",
//         "NETTOYAGE DE VÉHICULES",
//         "JARDINAGE"
//       ],
//       imagePosition: 'left',
//       imageSrc: "/images/nettoyage.jpg", // Remplace par ton chemin d'image
//     },
//     {
//       id: 4,
//       title: "Fournitures",
//       description: "Une grande variété de fournitures de haute qualité pour répondre à vos besoins professionnels et personnels. VENTE EN LIGNE ET SUR PLACE ALLANT DES MOBILIERS DE BUREAUX AUX VEHICULES ETC.",
//       imagePosition: 'right',
//       imageSrc: "/images/fournitures.jpg", // Remplace par ton chemin d'image
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* En-tête */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Nos Services
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Nous sommes fiers de proposer une gamme complète des solutions pour répondre à tous vos besoins de sécurité, nettoyage, tenues de travail(safety) ainsi que des fournitures professionnelles
//           </p>
//         </motion.div>

//         {/* Liste des services */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="space-y-24"
//         >
//           {services.map((service) => (
//             <motion.div
//               key={service.id}
//               variants={itemVariants}
//               className={`flex flex-col ${
//                 service.imagePosition === 'right' 
//                   ? 'lg:flex-row-reverse' 
//                   : 'lg:flex-row'
//               } gap-8 lg:gap-12 items-center`}
//             >
//               {/* Image */}
//               <motion.div
//                 variants={imageVariants}
//                 className="w-full lg:w-1/2"
//               >
//                 <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden rounded-2xl shadow-2xl">
//                   {/* Image de démonstration - remplace avec ton composant Image Next.js */}
//                   <div className="w-full h-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
//                     <div className="text-center p-4">
//                       <div className="text-4xl mb-2">🛡️</div>
//                       <p className="text-gray-700 font-medium">Image: {service.title}</p>
//                       <p className="text-sm text-gray-500 mt-2">(Remplace avec ta propre image)</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Contenu texte */}
//               <motion.div
//                 variants={itemVariants}
//                 className="w-full lg:w-1/2"
//               >
//                 <div className="space-y-4">
//                   <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
//                     Service {service.id}
//                   </div>
                  
//                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//                     {service.title}
//                   </h2>
                  
//                   {service.subtitle && (
//                     <p className="text-xl font-semibold text-cyan-700">
//                       {service.subtitle}
//                     </p>
//                   )}
                  
//                   <p className="text-gray-600 text-lg leading-relaxed">
//                     {service.description}
//                   </p>
                  
//                   {service.servicesList && (
//                     <div className="pt-4">
//                       <h3 className="font-semibold text-gray-800 mb-2">Services inclus:</h3>
//                       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                         {service.servicesList.map((item, index) => (
//                           <li key={index} className="flex items-center">
//                             <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
//                             <span className="text-gray-700">{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
                  
//                   {service.features && (
//                     <div className="pt-4">
//                       <div className="flex flex-wrap gap-3">
//                         {service.features.map((feature, index) => (
//                           <span 
//                             key={index} 
//                             className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
//                           >
//                             {feature}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
                  
//                   {service.values && (
//                     <div className="pt-6">
//                       <p className="text-lg font-bold text-gray-900 border-l-4 border-yellow-500 pl-4">
//                         {service.values}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bannière de conclusion */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-24 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100"
//         >
//           <div className="max-w-3xl mx-auto text-center">
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//               Pourquoi nous choisir ?
//             </h3>
//             <p className="text-gray-700 text-lg">
//               Nous sommes convaincus que notre engagement en faveur de la qualité et de la satisfaction client fait de Next Plus Africa le choix parfait pour tous vos besoins en matière de sécurité, de tenues de travail et de fournitures professionnelles.
//             </p>
//             <div className="mt-8 flex flex-wrap justify-center gap-6">
//               <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
//                 <span className="font-semibold text-gray-800">PRIX</span>
//               </div>
//               <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
//                 <span className="font-semibold text-gray-800">DÉLAI</span>
//               </div>
//               <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
//                 <span className="font-semibold text-gray-800">QUALITÉ</span>
//               </div>
//               <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
//                 <span className="font-semibold text-gray-800">L'INNOVATION</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPresentation;
'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ServicesPresentation = () => {
  const services = [
    {
      id: 1,
      title: "Sécurité et Gardiennage",
      subtitle: "LION EVOLUTION SECURITY",
      description: "Services de sécurité rentables et compétitifs. Formation continue, technologies avancées et solutions sur mesure.",
      servicesList: ["Intervention", "Escorte", "Garde personnel", "Transport", "Alarmes", "GPS", "Caméras"],
      values: "DISCIPLINE, PONCTUALITÉ, QUALITÉ",
      image: "/one.jpg",
      position: 'left'
    },
    {
      id: 2,
      title: "Tenues de travail & Safety",
      description: "Tenues professionnelles brodées, sérigraphiées ou floquées. Large gamme pour tous secteurs : Mining, chantier, hôpital, aviation.",
      features: ["Broderie", "Personnalisation", "Signalisation"],
      image: "/two.jpg",
      position: 'right'
    },
    {
      id: 3,
      title: "Nettoyage",
      subtitle: "ROSE CLEANING",
      description: "Service de qualité supérieure avec produits haut de gamme. Solutions personnalisées pour chaque client.",
      servicesList: ["Bureaux", "Industriel", "Véhicules", "Jardinage"],
      image: "/three.jpg",
      position: 'left'
    },
    {
      id: 4,
      title: "Fournitures",
      description: "Fournitures professionnelles de haute qualité. Vente en ligne et sur place du mobilier aux véhicules.",
      image: "/four.jpg",
      position: 'right'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Nos Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Solutions complètes pour vos besoins en sécurité, nettoyage, tenues de travail et fournitures
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-20">
          {services.map((service) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: false, amount: 0.3 });
            
            return (
              <div 
                key={service.id} 
                ref={ref}
                className={`flex flex-col ${service.position === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, x: service.position === 'left' ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: service.position === 'left' ? -50 : 50 }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="aspect-video relative overflow-hidden rounded-lg bg-gray-100">
                    {/* Image réelle - ajuste objectFit selon besoin */}
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-orange-500"></div>
                      <span className="text-sm font-medium text-orange-600">Service {service.id}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-light text-gray-900">
                      {service.title}
                    </h2>
                    
                    {service.subtitle && (
                      <p className="text-lg font-medium text-gray-700">
                        {service.subtitle}
                      </p>
                    )}
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {service.servicesList && (
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-2">
                          {service.servicesList.map((item, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 text-sm bg-orange-50 text-orange-700 rounded-full border border-orange-100"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {service.features && (
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-3">
                          {service.features.map((feature, index) => (
                            <span 
                              key={index}
                              className="text-sm text-gray-500"
                            >
                              • {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {service.values && (
                      <div className="pt-4">
                        <p className="text-sm font-medium text-gray-800 italic">
                          {service.values}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mt-32 pt-8 border-t border-gray-100"
        >
          <div className="text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              Nos Valeurs
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["PRIX", "DÉLAI", "QUALITÉ", "INNOVATION"].map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="px-6 py-2 border border-orange-200 text-orange-700 rounded-full hover:bg-orange-50 transition-colors"
                >
                  {value}
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-gray-600 max-w-xl mx-auto">
              Notre engagement en faveur de la qualité et de la satisfaction client fait de Next Plus Africa le choix idéal.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPresentation;