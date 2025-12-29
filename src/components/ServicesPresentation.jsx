
// // // 'use client'
// // // import { motion, useInView } from 'framer-motion';
// // // import { useRef } from 'react';

// // // const ServicesPresentation = () => {
// // //   const services = [
// // //     {
// // //       id: 1,
// // //       title: "Sécurité et Gardiennage",
// // //       subtitle: "LION EVOLUTION SECURITY",
// // //       description: "Services de sécurité rentables et compétitifs. Formation continue, technologies avancées et solutions sur mesure.",
// // //       servicesList: ["Intervention", "Escorte", "Garde personnel", "Transport", "Alarmes", "GPS", "Caméras"],
// // //       values: "DISCIPLINE, PONCTUALITÉ, QUALITÉ",
// // //       image: "/one.jpg",
// // //       position: 'left'
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Tenues de travail & Safety",
// // //       description: "Tenues professionnelles brodées, sérigraphiées ou floquées. Large gamme pour tous secteurs : Mining, chantier, hôpital, aviation.",
// // //       features: ["Broderie", "Personnalisation", "Signalisation"],
// // //       image: "/two.jpg",
// // //       position: 'right'
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Nettoyage",
// // //       subtitle: "ROSE CLEANING",
// // //       description: "Service de qualité supérieure avec produits haut de gamme. Solutions personnalisées pour chaque client.",
// // //       servicesList: ["Bureaux", "Industriel", "Véhicules", "Jardinage"],
// // //       image: "/three.jpg",
// // //       position: 'left'
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "Fournitures",
// // //       description: "Fournitures professionnelles de haute qualité. Vente en ligne et sur place du mobilier aux véhicules.",
// // //       image: "/four.jpg",
// // //       position: 'right'
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-white py-20 px-4">
// // //       <div className="max-w-5xl mx-auto">
// // //         {/* Header */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           className="text-center mb-20"
// // //         >
// // //           <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
// // //             Nos Services
// // //           </h1>
// // //           <p className="text-gray-600 max-w-2xl mx-auto">
// // //             Solutions complètes pour vos besoins en sécurité, nettoyage, tenues de travail et fournitures
// // //           </p>
// // //         </motion.div>

// // //         {/* Services */}
// // //         <div className="space-y-20">
// // //           {services.map((service) => {
// // //             const ref = useRef(null);
// // //             const isInView = useInView(ref, { once: false, amount: 0.3 });
            
// // //             return (
// // //               <div 
// // //                 key={service.id} 
// // //                 ref={ref}
// // //                 className={`flex flex-col ${service.position === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
// // //               >
// // //                 {/* Image */}
// // //                 <motion.div 
// // //                   initial={{ opacity: 0, x: service.position === 'left' ? -50 : 50 }}
// // //                   animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: service.position === 'left' ? -50 : 50 }}
// // //                   transition={{ duration: 0.6 }}
// // //                   className="w-full lg:w-1/2"
// // //                 >
// // //                   <div className="aspect-video relative overflow-hidden rounded-lg bg-gray-100">
// // //                     {/* Image réelle - ajuste objectFit selon besoin */}
// // //                     <img 
// // //                       src={service.image} 
// // //                       alt={service.title}
// // //                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
// // //                     />
// // //                   </div>
// // //                 </motion.div>

// // //                 {/* Content */}
// // //                 <motion.div 
// // //                   initial={{ opacity: 0, y: 30 }}
// // //                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
// // //                   transition={{ duration: 0.6, delay: 0.2 }}
// // //                   className="w-full lg:w-1/2"
// // //                 >
// // //                   <div className="space-y-4">
// // //                     <div className="flex items-center gap-3">
// // //                       <div className="w-8 h-px bg-orange-500"></div>
// // //                       <span className="text-sm font-medium text-orange-600">Service {service.id}</span>
// // //                     </div>
                    
// // //                     <h2 className="text-2xl md:text-3xl font-light text-gray-900">
// // //                       {service.title}
// // //                     </h2>
                    
// // //                     {service.subtitle && (
// // //                       <p className="text-lg font-medium text-gray-700">
// // //                         {service.subtitle}
// // //                       </p>
// // //                     )}
                    
// // //                     <p className="text-gray-600 leading-relaxed">
// // //                       {service.description}
// // //                     </p>
                    
// // //                     {service.servicesList && (
// // //                       <div className="pt-2">
// // //                         <div className="flex flex-wrap gap-2">
// // //                           {service.servicesList.map((item, index) => (
// // //                             <span 
// // //                               key={index}
// // //                               className="px-3 py-1 text-sm bg-orange-50 text-orange-700 rounded-full border border-orange-100"
// // //                             >
// // //                               {item}
// // //                             </span>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     )}
                    
// // //                     {service.features && (
// // //                       <div className="pt-2">
// // //                         <div className="flex flex-wrap gap-3">
// // //                           {service.features.map((feature, index) => (
// // //                             <span 
// // //                               key={index}
// // //                               className="text-sm text-gray-500"
// // //                             >
// // //                               • {feature}
// // //                             </span>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     )}
                    
// // //                     {service.values && (
// // //                       <div className="pt-4">
// // //                         <p className="text-sm font-medium text-gray-800 italic">
// // //                           {service.values}
// // //                         </p>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </motion.div>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* Footer */}
// // //         <motion.div 
// // //           initial={{ opacity: 0 }}
// // //           whileInView={{ opacity: 1 }}
// // //           transition={{ duration: 0.8 }}
// // //           viewport={{ once: false }}
// // //           className="mt-32 pt-8 border-t border-gray-100"
// // //         >
// // //           <div className="text-center">
// // //             <h3 className="text-2xl font-light text-gray-900 mb-6">
// // //               Nos Valeurs
// // //             </h3>
// // //             <div className="flex flex-wrap justify-center gap-4">
// // //               {["PRIX", "DÉLAI", "QUALITÉ", "INNOVATION"].map((value, index) => (
// // //                 <motion.div
// // //                   key={value}
// // //                   initial={{ opacity: 0, scale: 0.9 }}
// // //                   whileInView={{ opacity: 1, scale: 1 }}
// // //                   transition={{ duration: 0.4, delay: index * 0.1 }}
// // //                   viewport={{ once: false }}
// // //                   className="px-6 py-2 border border-orange-200 text-orange-700 rounded-full hover:bg-orange-50 transition-colors"
// // //                 >
// // //                   {value}
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //             <p className="mt-8 text-gray-600 max-w-xl mx-auto">
// // //               Notre engagement en faveur de la qualité et de la satisfaction client fait de Next Plus Africa le choix idéal.
// // //             </p>
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ServicesPresentation;
// // 'use client'
// // import { motion, useInView } from 'framer-motion';
// // import { useRef } from 'react';

// // const ServicesPresentation = () => {
// //   const services = [
// //     {
// //       id: 1,
// //       title: "Sécurité et Gardiennage",
// //       subtitle: "LION EVOLUTION SECURITY",
// //       description: "Services de sécurité rentables et compétitifs. Formation continue, technologies avancées et solutions sur mesure.",
// //       servicesList: ["Intervention", "Escorte", "Garde personnel", "Transport", "Alarmes", "GPS", "Caméras"],
// //       values: "DISCIPLINE, PONCTUALITÉ, QUALITÉ",
// //       images: [
// //         { src: "/one.jpg", span: "col-span-2 row-span-2" }, // Grande image
// //         { src: "/two.jpg", span: "col-span-1 row-span-1" },
// //         { src: "/three.jpg", span: "col-span-1 row-span-1" }
// //       ],
// //       position: 'left'
// //     },
// //     {
// //       id: 2,
// //       title: "Tenues de travail & Safety",
// //       description: "Tenues professionnelles brodées, sérigraphiées ou floquées. Large gamme pour tous secteurs : Mining, chantier, hôpital, aviation.",
// //       features: ["Broderie", "Personnalisation", "Signalisation"],
// //       images: [
// //         { src: "/two.jpg", span: "col-span-3 row-span-1" }, // Grande image verticale
// //         { src: "/four.jpg", span: "col-span-1 row-span-1" },
// //         { src: "/five.jpg", span: "col-span-2 row-span-1" }
// //       ],
// //       position: 'right'
// //     },
// //     {
// //       id: 3,
// //       title: "Nettoyage",
// //       subtitle: "ROSE CLEANING",
// //       description: "Service de qualité supérieure avec produits haut de gamme. Solutions personnalisées pour chaque client.",
// //       servicesList: ["Bureaux", "Industriel", "Véhicules", "Jardinage"],
// //       images: [
// //         { src: "/three.jpg", span: "col-span-2 row-span-1" }, // Grande image
// //         { src: "/six.jpg", span: "col-span-1 row-span-1" },
// //         { src: "/nine.jpg", span: "col-span-3 row-span-1" }
// //       ],
// //       position: 'left'
// //     },
// //     {
// //       id: 4,
// //       title: "Fournitures",
// //       description: "Fournitures professionnelles de haute qualité. Vente en ligne et sur place du mobilier aux véhicules.",
// //       images: [
// //         { src: "/four.jpg", span: "col-span- row-span-1" }, // Grande image verticale
// //         { src: "/two.jpg", span: "col-span-1 row-span-1" },
// //         { src: "/five.jpg", span: "col-span-3 row-span-1" }
// //       ],
// //       position: 'right'
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-white py-20 px-4">
// //       <div className="max-w-5xl mx-auto">
// //         {/* Header */}
// //         <div className="text-center mb-24">
// //           <motion.div
// //             initial={{ width: 0 }}
// //             animate={{ width: "80px" }}
// //             transition={{ duration: 0.8 }}
// //             className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"
// //           />
          
// //           <motion.h1
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-4xl md:text-6xl font-light text-gray-900 mb-6"
// //           >
// //             Nos <span className="text-orange-600 font-normal">Services</span>
// //           </motion.h1>
          
// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             className="text-gray-600 text-lg max-w-3xl mx-auto"
// //           >
// //             Solutions complètes pour vos besoins en sécurité, nettoyage, tenues de travail et fournitures
// //           </motion.p>
// //         </div>

// //         {/* Services */}
// //         <div className="space-y-32">
// //           {services.map((service) => {
// //             const ref = useRef(null);
// //             const isInView = useInView(ref, { 
// //               once: true,
// //               amount: 0.3
// //             });

// //             return (
// //               <div 
// //                 key={service.id} 
// //                 ref={ref}
// //                 className={`flex flex-col ${service.position === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
// //               >
// //                 {/* Image Grid Container */}
// //                 <div className="w-full lg:w-1/2">
// //                   <motion.div
// //                     initial={{ opacity: 0, scale: 0.95 }}
// //                     animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
// //                     transition={{ duration: 0.5 }}
// //                     className="aspect-square lg:aspect-auto lg:h-[500px]"
// //                   >
// //                     {/* Grid Container */}
// //                     <div className="h-full grid grid-cols-3 grid-rows-2 gap-3 lg:gap-4">
// //                       {service.images.map((image, index) => {
// //                         // Animation pour chaque image individuellement
// //                         const animationDelay = 0.1 * index;
                        
// //                         return (
// //                           <motion.div
// //                             key={index}
// //                             initial={{ opacity: 0, scale: 0.9 }}
// //                             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
// //                             transition={{ duration: 0.4, delay: animationDelay }}
// //                             whileHover={{ scale: 1.02 }}
// //                             className={`relative overflow-hidden rounded-xl ${image.span} group`}
// //                           >
// //                             <img 
// //                               src={image.src} 
// //                               alt={`${service.title} ${index + 1}`}
// //                               className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// //                             />
// //                             {/* Overlay au survol */}
// //                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
// //                           </motion.div>
// //                         );
// //                       })}
// //                     </div>
// //                   </motion.div>
// //                 </div>

// //                 {/* Content */}
// //                 <div className="w-full lg:w-1/2">
// //                   <motion.div
// //                     initial={{ opacity: 0, y: 30 }}
// //                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
// //                     transition={{ duration: 0.5, delay: 0.2 }}
// //                     className="space-y-6"
// //                   >
// //                     {/* Service Number */}
// //                     <div className="flex items-center gap-3">
// //                       <motion.div
// //                         initial={{ width: 0 }}
// //                         animate={isInView ? { width: "40px" } : { width: 0 }}
// //                         transition={{ duration: 0.5, delay: 0.3 }}
// //                         className="h-px bg-orange-500"
// //                       />
// //                       <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
// //                         Service 0{service.id}
// //                       </span>
// //                     </div>

// //                     {/* Title */}
// //                     <h2 className="text-3xl md:text-4xl font-light text-gray-900">
// //                       {service.title}
// //                     </h2>

// //                     {/* Subtitle */}
// //                     {service.subtitle && (
// //                       <p className="text-xl text-gray-700 font-medium">
// //                         {service.subtitle}
// //                       </p>
// //                     )}

// //                     {/* Description */}
// //                     <p className="text-gray-600 leading-relaxed">
// //                       {service.description}
// //                     </p>

// //                     {/* Services List */}
// //                     {service.servicesList && (
// //                       <div className="pt-2">
// //                         <div className="flex flex-wrap gap-2">
// //                           {service.servicesList.map((item, index) => (
// //                             <motion.span
// //                               key={index}
// //                               initial={{ opacity: 0, scale: 0.9 }}
// //                               animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
// //                               transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
// //                               className="px-3 py-1 text-sm bg-orange-50 text-orange-700 rounded-full border border-orange-100"
// //                             >
// //                               {item}
// //                             </motion.span>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     )}

// //                     {/* Features */}
// //                     {service.features && (
// //                       <div className="pt-2">
// //                         <div className="space-y-2">
// //                           {service.features.map((feature, index) => (
// //                             <motion.div
// //                               key={index}
// //                               initial={{ opacity: 0, x: -10 }}
// //                               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
// //                               transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
// //                               className="flex items-center gap-3"
// //                             >
// //                               <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
// //                               <span className="text-gray-700">{feature}</span>
// //                             </motion.div>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     )}

// //                     {/* Values */}
// //                     {service.values && (
// //                       <motion.div
// //                         initial={{ opacity: 0 }}
// //                         animate={isInView ? { opacity: 1 } : { opacity: 0 }}
// //                         transition={{ duration: 0.5, delay: 0.6 }}
// //                         className="pt-6 border-t border-gray-100"
// //                       >
// //                         <p className="text-sm font-medium text-gray-800 italic">
// //                           {service.values}
// //                         </p>
// //                       </motion.div>
// //                     )}
// //                   </motion.div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>

// //         {/* Footer */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="mt-40 pt-12 border-t border-gray-100"
// //         >
// //           <div className="text-center">
// //             <motion.h3
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5 }}
// //               viewport={{ once: true }}
// //               className="text-3xl font-light text-gray-900 mb-10"
// //             >
// //               Nos Valeurs Fondamentales
// //             </motion.h3>

// //             {/* Grid des valeurs */}
// //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
// //               {["PRIX", "DÉLAI", "QUALITÉ", "INNOVATION"].map((value, index) => (
// //                 <motion.div
// //                   key={value}
// //                   initial={{ opacity: 0, scale: 0.8 }}
// //                   whileInView={{ opacity: 1, scale: 1 }}
// //                   transition={{ duration: 0.4, delay: index * 0.1 }}
// //                   viewport={{ once: true }}
// //                   whileHover={{ scale: 1.05, y: -5 }}
// //                   className="aspect-square p-6 flex items-center justify-center border border-orange-200 rounded-xl hover:bg-orange-50 transition-colors"
// //                 >
// //                   <span className="text-lg font-medium text-orange-700 text-center">
// //                     {value}
// //                   </span>
// //                 </motion.div>
// //               ))}
// //             </div>

// //             <motion.p
// //               initial={{ opacity: 0 }}
// //               whileInView={{ opacity: 1 }}
// //               transition={{ duration: 0.6, delay: 0.3 }}
// //               viewport={{ once: true }}
// //               className="text-gray-600 max-w-2xl mx-auto mb-8"
// //             >
// //               Notre engagement en faveur de la qualité et de la satisfaction client fait de Next Plus Africa le choix idéal.
// //             </motion.p>

// //             <motion.button
// //               initial={{ opacity: 0, y: 10 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: 0.4 }}
// //               viewport={{ once: true }}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.98 }}
// //               className="px-8 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors"
// //             >
// //               Contactez-nous pour un devis
// //             </motion.button>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServicesPresentation;

// 'use client'
// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'

// const ServicesPresentation = () => {
//   const services = [
//     {
//       id: 1,
//       title: "Sécurité",
//       description: "Services de sécurité rentables et compétitifs. Formation continue, technologies avancées et solutions sur mesure.",
//       servicesList: ["Intervention", "Escorte", "Garde", "Transport", "Alarmes"],
//       images: [
//         { src: "/services/fence.jpg", span: "col-span-2 row-span-2" },
//         { src: "/services/security.jpg", span: "col-span-1 row-span-1" },
//         { src: "/services/security2.jpg", span: "col-span-1 row-span-1" }
//       ],
//       position: 'left'
//     },
//     {
//       id: 2,
//       title: "Tenues de travail",
//       description: "Tenues professionnelles brodées, sérigraphiées ou floquées. Large gamme pour tous secteurs : Mining, chantier, hôpital, aviation.",
//       features: ["Broderie", "Personnalisation", "Signalisation"],
//       images: [
//         { src: "/services/safety1.jpg", span: "col-span-3 row-span-1" },
//         { src: "/services/safety2.jpg", span: "col-span-1 row-span-1" },
//         { src: "/services/safety-no.png", span: "col-span-2 row-span-1" }
//       ],
//       position: 'right'
//     },
//     {
//       id: 3,
//       title: "Nettoyage",
//       description: "Service de qualité supérieure avec solutions personnalisées.",
//       servicesList: ["Bureaux", "Industriel", "Véhicules"],
//       images: [
//         { src: "/services/cleaning2.jpg", span: "col-span-2 row-span-1" },
//         { src: "/services/cleaning3.jpg", span: "col-span-1 row-span-1" },
//         { src: "/services/cleaning.jpg", span: "col-span-3 row-span-1" }
//       ],
//       position: 'left'
//     },
//     {
//       id: 4,
//       title: "Fournitures",
//       description: "Fournitures professionnelles de haute qualité.",
//       images: [
//         { src: "/four.jpg", span: "col-span-2 row-span-1" },
//         { src: "/two.jpg", span: "col-span-1 row-span-1" },
//         { src: "/five.jpg", span: "col-span-3 row-span-1" }
//       ],
//       position: 'right'
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-white py-12 px-4">
//       <div className="max-w-5xl mx-auto">
//         {/* Header compact */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "60px" }}
//             transition={{ duration: 0.6 }}
//             className="h-px bg-orange-500 mx-auto mb-4"
//           />
          
//           <motion.h1
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl md:text-4xl font-light text-gray-900 mb-3"
//           >
//             Nos <span className="text-orange-600 font-normal">Services</span>
//           </motion.h1>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-gray-600 max-w-xl mx-auto text-sm"
//           >
//             Solutions complètes pour vos besoins professionnels
//           </motion.p>
//         </div>

//         {/* Services compact */}
//         <div className="space-y-20">
//           {services.map((service) => {
//             const ref = useRef(null)
//             const isInView = useInView(ref, { 
//               once: true,
//               amount: 0.2
//             })

//             return (
//               <div 
//                 key={service.id} 
//                 ref={ref}
//                 className={`flex flex-col ${service.position === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-10 items-center`}
//               >
//                 {/* Image Grid Container plus compact */}
//                 <div className="w-full lg:w-1/2">
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     <div className="h-72 md:h-80 grid grid-cols-3 grid-rows-2 gap-2">
//                       {service.images.map((image, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//                           transition={{ duration: 0.3, delay: 0.1 * index }}
//                           className={`relative overflow-hidden rounded-lg ${image.span}`}
//                         >
//                           <img 
//                             src={image.src} 
//                             alt=""
//                             className="absolute inset-0 w-full h-full object-cover"
//                           />
//                         </motion.div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* Content plus compact */}
//                 <div className="w-full lg:w-1/2">
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                     transition={{ duration: 0.4, delay: 0.1 }}
//                     className="space-y-4"
//                   >
//                     <div className="flex items-center gap-2">
//                       <div className="w-6 h-px bg-orange-500" />
//                       <span className="text-xs font-medium text-orange-600 uppercase tracking-wider">
//                         0{service.id}
//                       </span>
//                     </div>

//                     <h2 className="text-2xl md:text-3xl font-light text-gray-900">
//                       {service.title}
//                     </h2>

//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {service.description}
//                     </p>

//                     {service.servicesList && (
//                       <div className="flex flex-wrap gap-1.5 pt-1">
//                         {service.servicesList.map((item, index) => (
//                           <motion.span
//                             key={index}
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//                             transition={{ duration: 0.2, delay: 0.2 + index * 0.03 }}
//                             className="px-2.5 py-1 text-xs bg-orange-50 text-orange-700 rounded-full"
//                           >
//                             {item}
//                           </motion.span>
//                         ))}
//                       </div>
//                     )}

//                     {service.features && (
//                       <div className="pt-1">
//                         <div className="space-y-1.5">
//                           {service.features.map((feature, index) => (
//                             <motion.div
//                               key={index}
//                               initial={{ opacity: 0, x: -5 }}
//                               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
//                               transition={{ duration: 0.2, delay: 0.2 + index * 0.05 }}
//                               className="flex items-center gap-2"
//                             >
//                               <div className="w-1 h-1 bg-orange-500 rounded-full" />
//                               <span className="text-gray-700 text-sm">{feature}</span>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </motion.div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Footer compact */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-24 pt-8"
//         >
//           <div className="text-center">
//             <motion.h3
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//               className="text-2xl font-light text-gray-900 mb-6"
//             >
//               Nos Valeurs
//             </motion.h3>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-lg mx-auto mb-8">
//               {["PRIX", "DÉLAI", "QUALITÉ", "INNOVATION"].map((value, index) => (
//                 <motion.div
//                   key={value}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3, delay: index * 0.08 }}
//                   viewport={{ once: true }}
//                   className="p-4 border border-orange-200 rounded-lg bg-white"
//                 >
//                   <span className="text-sm font-medium text-orange-700">
//                     {value}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.button
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.4, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="px-6 py-2.5 bg-orange-500 text-white text-sm rounded-full font-medium hover:bg-orange-600 transition-colors"
//             >
//               Contactez-nous
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default ServicesPresentation
'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

// Composant ServiceItem séparé pour mieux gérer les animations
const ServiceItem = ({ service, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  })
  
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] // Courbe easing smooth
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <div 
      ref={ref}
      className={`flex flex-col ${service.position === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-10 items-center`}
    >
      {/* Image Grid Container */}
      <div className="w-full lg:w-1/2">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="h-72 md:h-80 grid grid-cols-3 grid-rows-2 gap-2">
            {service.images.map((image, imgIndex) => (
              <motion.div
                key={imgIndex}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.4, 
                      delay: 0.1 * imgIndex,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
                initial="hidden"
                animate={controls}
                className={`relative overflow-hidden rounded-lg ${image.span}`}
              >
                <img 
                  src={image.src} 
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={controls}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-orange-500" />
            <span className="text-xs font-medium text-orange-600 uppercase tracking-wider">
              0{service.id}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-light text-gray-900">
            {service.title}
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            {service.description}
          </p>

          {service.servicesList && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {service.servicesList.map((item, itemIndex) => (
                <motion.span
                  key={itemIndex}
                  variants={itemVariants}
                  initial="hidden"
                  animate={controls}
                  custom={itemIndex}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.2 + itemIndex * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="px-2.5 py-1 text-xs bg-orange-50 text-orange-700 rounded-full"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          )}

          {service.features && (
            <div className="pt-1">
              <div className="space-y-1.5">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    variants={{
                      hidden: { opacity: 0, x: -5 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          duration: 0.3, 
                          delay: 0.2 + featureIndex * 0.05,
                          ease: [0.22, 1, 0.36, 1]
                        }
                      }
                    }}
                    initial="hidden"
                    animate={controls}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-orange-500 rounded-full" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

// Composant pour les valeurs
const ValuesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const values = ["PRIX", "DÉLAI", "QUALITÉ", "INNOVATION"]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mt-24 pt-8"
    >
      <div className="text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-light text-gray-900 mb-6"
        >
          Nos Valeurs
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-lg mx-auto mb-8">
          {values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="p-4 border border-orange-200 rounded-lg bg-white"
            >
              <span className="text-sm font-medium text-orange-700">
                {value}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 py-2.5 bg-orange-500 text-white text-sm rounded-full font-medium hover:bg-orange-600 transition-colors"
        >
          Contactez-nous
        </motion.button>
      </div>
    </motion.div>
  )
}

const ServicesPresentation = () => {
  const services = [
    {
      id: 1,
      title: "Sécurité",
      description: "Services de sécurité rentables et compétitifs. Formation continue, technologies avancées et solutions sur mesure.",
      servicesList: ["Intervention", "Escorte", "Garde", "Transport", "Alarmes"],
      images: [
        { src: "/services/fence.jpg", span: "col-span-2 row-span-2" },
        { src: "/services/security.jpg", span: "col-span-1 row-span-1" },
        { src: "/services/security2.jpg", span: "col-span-1 row-span-1" }
      ],
      position: 'left'
    },
    {
      id: 2,
      title: "Tenues de travail",
      description: "Tenues professionnelles brodées, sérigraphiées ou floquées. Large gamme pour tous secteurs : Mining, chantier, hôpital, aviation.",
      features: ["Broderie", "Personnalisation", "Signalisation"],
      images: [
        { src: "/services/safety1.jpg", span: "col-span-3 row-span-1" },
        { src: "/services/safety2.jpg", span: "col-span-1 row-span-1" },
        { src: "/services/safety-no.png", span: "col-span-2 row-span-1" }
      ],
      position: 'right'
    },
    {
      id: 3,
      title: "Nettoyage",
       description: "Service de qualité supérieure avec solutions personnalisées.",
       servicesList: ["Bureaux", "Industriel", "Véhicules"],
      images: [
        { src: "/services/cleaning2.jpg", span: "col-span-2 row-span-1" },
        { src: "/services/cleaning3.jpg", span: "col-span-1 row-span-1" },
        { src: "/services/cleaning.jpg", span: "col-span-3 row-span-1" }
      ],
      position: 'left'
    },
    {
      id: 4,
       title: "Fournitures",
       description: "Fournitures professionnelles de haute qualité.",
      images: [
        { src: "/services/firefighter.webp", span: "col-span-2 row-span-2" },
        { src: "/services/fire.jpg", span: "col-span-1 row-span-1" },
        { src: "/services/acc.png", span: "col-span-1 row-span-1" },
      ],
      position: 'right'
    }
  ]

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header compact */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="h-px bg-orange-500 mx-auto mb-4"
          />
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="text-3xl md:text-4xl font-light text-gray-900 mb-3"
          >
            Nos <span className="text-orange-600 font-normal">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="text-gray-600 max-w-xl mx-auto text-sm"
          >
            Solutions complètes pour vos besoins professionnels
          </motion.p>
        </div>

        {/* Services */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <ServiceItem 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>

        {/* Footer compact */}
        <ValuesSection />
      </div>
    </div>
  )
}

export default ServicesPresentation