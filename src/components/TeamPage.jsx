
// 'use client';

// import { Linkedin, Twitter, Github, Instagram, Globe } from 'lucide-react';
// import { motion } from 'framer-motion';

// const TeamPage = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Alexandre Martin",
//       role: "Lead Développeur",
//       bio: "Spécialiste React et Next.js avec 8 ans d'expérience. Passionné par les architectures micro-frontend.",
//       email: "alex.martin@company.com",
//       image: "/nine.jpg",
//     },
//     {
//       id: 2,
//       name: "Sophie Bernard",
//       role: "Designer UI/UX",
//       bio: "Créatrice d'interfaces intuitives et esthétiques. Fan de design systems et d'expériences utilisateur fluides.",
//       email: "sophie.b@company.com",
//       image: "/nine.jpg",
//     },
//     {
//       id: 3,
//       name: "Thomas Leroy",
//       role: "Product Manager",
//       bio: "Transforme les visions stratégiques en produits concrets. Expert en méthodologies agiles.",
//       email: "thomas.leroy@company.com",
//       image: "/nine.jpg",
//     },
//   ];

//   const socialMedia = [
//     { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-50 hover:text-blue-600" },
//     { icon: Twitter, label: "Twitter", color: "hover:bg-sky-50 hover:text-sky-500" },
//     { icon: Github, label: "GitHub", color: "hover:bg-gray-50 hover:text-gray-900" },
//     { icon: Instagram, label: "Instagram", color: "hover:bg-pink-50 hover:text-pink-600" },
//     { icon: Globe, label: "Website", color: "hover:bg-green-50 hover:text-green-600" },
//   ];

//   // Animation pour le conteneur principal
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1
//       }
//     }
//   };

//   // Animation pour chaque carte d'équipe
//   const cardVariants = {
//     hidden: { 
//       opacity: 0,
//       y: 40,
//       scale: 0.9
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 20,
//         mass: 1,
//         duration: 0.8
//       }
//     },
//     hover: {
//       y: -10,
//       scale: 1.02,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 15
//       }
//     }
//   };

//   // Animation pour l'image de profil
//   const imageVariants = {
//     hidden: { 
//       scale: 0,
//       rotate: -15
//     },
//     visible: {
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 150,
//         damping: 15,
//         delay: 0.2
//       }
//     },
//     hover: {
//       rotate: 5,
//       scale: 1.05,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 10
//       }
//     }
//   };

//   // Animation pour le contenu texte
//   const contentVariants = {
//     hidden: { 
//       opacity: 0,
//       y: 20
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         delay: 0.4
//       }
//     }
//   };

//   // Animation pour les icônes sociales
//   const socialIconVariants = {
//     hidden: { 
//       scale: 0,
//       opacity: 0
//     },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//         staggerChildren: 0.05,
//         delayChildren: 0.5
//       }
//     },
//     hover: {
//       scale: 1.1,
//       y: -5,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10
//       }
//     }
//   };

//   // Animation pour chaque icône individuelle
//   const singleIconVariants = {
//     hidden: { 
//       scale: 0,
//       rotate: -90
//     },
//     visible: {
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 15
//       }
//     }
//   };

//   // Animation pour le header
//   const headerVariants = {
//     hidden: { 
//       opacity: 0,
//       y: -30
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         duration: 0.8
//       }
//     }
//   };

//   // Animation pour les lignes de séparation
//   const lineVariants = {
//     hidden: { 
//       width: 0,
//       opacity: 0
//     },
//     visible: {
//       width: "100%",
//       opacity: 1,
//       transition: {
//         width: {
//           duration: 0.8,
//           ease: "easeInOut"
//         },
//         opacity: {
//           duration: 0.6,
//           delay: 0.2
//         }
//       }
//     }
//   };

//   // Animation pour le bouton
//   const buttonVariants = {
//     hidden: { 
//       opacity: 0,
//       y: 20
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         delay: 0.6
//       }
//     },
//     hover: {
//       scale: 1.05,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10
//       }
//     }
//   };

//   return (
//     <div className=" bg-red">
//       <div className="max-w-6xl mx-auto px-4 ">
//         {/* Header avec animation */}
//         <motion.div 
//           className="text-center mb-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.3 }}
//         >
//           <div className="inline-block mb-6">
//             <motion.div 
//               className="h-px w-24 bg-gray-800 mx-auto mb-4"
//               variants={lineVariants}
//             ></motion.div>
//             <motion.h1 
//               className="text-5xl font-normal tracking-tight text-gray-900 mb-2"
//               variants={headerVariants}
//             >
//               Notre Équipe
//             </motion.h1>
//             <motion.div 
//               className="h-px w-16 bg-gray-300 mx-auto"
//               variants={lineVariants}
//               transition={{ delay: 0.2 }}
//             ></motion.div>
//           </div>
//           <motion.p 
//             className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ amount: 0.3 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           >
//             Une équipe soudée qui allie expertise technique et vision créative pour concevoir l'avenir.
//           </motion.p>
//         </motion.div>

//         {/* Team Grid avec animations */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.1 }}
//         >
//           {teamMembers.map((member) => (
//             <motion.div 
//               key={member.id}
//               className="group cursor-pointer"
//               variants={cardVariants}
//               whileHover="hover"
//               viewport={{ amount: 0.3 }}
//             >
//               {/* Card */}
//               <div className="relative p-8 transition-all duration-500 ease-out group-hover:border bg-white border-gray-100 rounded-none overflow-hidden">
                
//                 {/* Photo ronde avec animation */}
//                 <motion.div 
//                   className="relative mb-8 mx-auto w-32 h-32"
//                   variants={imageVariants}
//                   whileHover="hover"
//                 >
//                   <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
//                     <motion.img 
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover"
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </div>
                  
//                   {/* Indicateur de survol */}
//                   <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gray-800 transition-all duration-300"></div>
//                 </motion.div>

//                 {/* Informations avec animation */}
//                 <motion.div 
//                   className="text-center space-y-6"
//                   variants={contentVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ amount: 0.1 }}
//                 >
//                   <div>
//                     <motion.h3 
//                       className="text-2xl font-normal text-gray-900 mb-2"
//                       whileHover={{ scale: 1.02 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                     >
//                       {member.name}
//                     </motion.h3>
//                     <motion.p 
//                       className="text-gray-500 uppercase tracking-wider text-sm font-medium"
//                       whileHover={{ x: 5 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       {member.role}
//                     </motion.p>
//                   </div>

//                   {/* Ligne de séparation avec animation */}
//                   <motion.div 
//                     className="h-px w-12 bg-gray-800 mx-auto"
//                     initial={{ scaleX: 0 }}
//                     whileInView={{ scaleX: 1 }}
//                     viewport={{ amount: 0.1 }}
//                     transition={{ delay: 0.2, duration: 0.4 }}
//                   ></motion.div>

//                   <motion.p 
//                     className="text-gray-600 leading-relaxed text-base"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ amount: 0.1 }}
//                     transition={{ delay: 0.3, duration: 0.6 }}
//                   >
//                     {member.bio}
//                   </motion.p>

//                   <motion.a 
//                     href={`mailto:${member.email}`}
//                     className="inline-block text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors duration-300"
//                     whileHover={{ scale: 1.05, x: 5 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     {member.email}
//                   </motion.a>
//                 </motion.div>

//                 {/* Social Media Icons avec animation */}
//                 <motion.div 
//                   className="mt-8 pt-6 border-t border-gray-100"
//                   variants={socialIconVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ amount: 0.1 }}
//                 >
//                   <div className="flex justify-center space-x-3">
//                     {socialMedia.map((social, index) => {
//                       const Icon = social.icon;
//                       return (
//                         <motion.a
//                           key={social.label}
//                           href="#"
//                           className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 transition-all duration-300 ${social.color}`}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             // Ouverture des liens sociaux
//                           }}
//                           aria-label={social.label}
//                           variants={singleIconVariants}
//                           custom={index}
//                           whileHover="hover"
//                         >
//                           <Icon className="w-5 h-5" />
//                         </motion.a>
//                       );
//                     })}
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bouton "Voir plus de membres" avec animation */}
//         <motion.div 
//           className="mt-16 text-center"
//           variants={buttonVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.3 }}
//         >
//           <motion.a
//             href="/equipe"
//             className="inline-flex items-center px-8 py-3 bg-gray-900 text-white text-sm font-medium tracking-wide uppercase rounded-none hover:bg-black transition-all duration-300 hover:shadow-lg group border border-gray-900"
//             whileHover="hover"
//           >
//             <motion.span
//               whileHover={{ x: 5 }}
//               transition={{ type: "spring", stiffness: 400 }}
//             >
//               Voir plus de membres
//             </motion.span>
//             <svg 
//               className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>
//           </motion.a>
//         </motion.div>
//       </div>

//       {/* Styles globaux */}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
//         body {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }
        
//         * {
//           letter-spacing: -0.01em;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TeamPage;
'use client';

import { Linkedin, Twitter, Github, Instagram, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alexandre Martin",
      role: "Lead Développeur",
      bio: "Spécialiste React et Next.js avec 8 ans d'expérience.",
      email: "alex.martin@company.com",
      image: "/nine.jpg",
    },
    {
      id: 2,
      name: "Sophie Bernard",
      role: "Designer UI/UX",
      bio: "Créatrice d'interfaces intuitives et esthétiques.",
      email: "sophie.b@company.com",
      image: "/nine.jpg",
    },
    {
      id: 3,
      name: "Thomas Leroy",
      role: "Product Manager",
      bio: "Transforme les visions stratégiques en produits concrets.",
      email: "thomas.leroy@company.com",
      image: "/nine.jpg",
    },
  ];

  const socialMedia = [
    { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-50 hover:text-blue-600" },
    { icon: Twitter, label: "Twitter", color: "hover:bg-sky-50 hover:text-sky-500" },
    { icon: Github, label: "GitHub", color: "hover:bg-gray-50 hover:text-gray-900" },
    { icon: Instagram, label: "Instagram", color: "hover:bg-pink-50 hover:text-pink-600" },
    { icon: Globe, label: "Website", color: "hover:bg-green-50 hover:text-green-600" },
  ];

  // Animations préservées
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    },
    hover: {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
      }
    }
  };

  const socialIconVariants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        staggerChildren: 0.03,
        delayChildren: 0.3
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
      }
    }
  };

  const singleIconVariants = {
    hidden: { 
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header compact */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="h-px w-20 bg-gray-800 mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h1 
            className="text-3xl font-normal text-gray-900 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            Notre Équipe
          </motion.h1>
          <motion.p 
            className="text-gray-600 max-w-xl mx-auto text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.4 }}
          >
            Une équipe soudée qui allie expertise technique et vision créative.
          </motion.p>
        </motion.div>

        {/* Team Grid compact */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              className="group cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              viewport={{ amount: 0.1 }}
            >
              {/* Carte compacte */}
              <div className="relative p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                
                {/* Photo de profil compacte */}
                <motion.div 
                  className="relative mb-6 mx-auto w-24 h-24"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <motion.img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* Informations */}
                <div className="text-center space-y-4">
                  <div>
                    <motion.h3 
                      className="text-xl font-normal text-gray-900 mb-1"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-500 text-xs uppercase tracking-wider"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {member.role}
                    </motion.p>
                  </div>

                  <motion.div 
                    className="h-px w-8 bg-gray-300 mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ amount: 0.1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  />

                  <motion.p 
                    className="text-gray-600 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {member.bio}
                  </motion.p>

                  <motion.a 
                    href={`mailto:${member.email}`}
                    className="inline-block text-gray-500 hover:text-gray-900 text-xs font-medium transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {member.email}
                  </motion.a>
                </div>

                {/* Icônes sociales compactes */}
                <motion.div 
                  className="mt-6 pt-4 border-t border-gray-50"
                  variants={socialIconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.1 }}
                >
                  <div className="flex justify-center space-x-2">
                    {socialMedia.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href="#"
                          className={`w-8 h-8 rounded-full flex items-center justify-center border border-gray-100 text-gray-500 transition-all duration-300 ${social.color}`}
                          onClick={(e) => e.preventDefault()}
                          aria-label={social.label}
                          variants={singleIconVariants}
                          custom={index}
                          whileHover="hover"
                        >
                          <Icon className="w-4 h-4" />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bouton compact */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="/equipe"
            className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white text-xs font-medium tracking-wide uppercase rounded hover:bg-black transition-all duration-300 hover:shadow-sm group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span>Voir plus</span>
            <svg 
              className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-0.5 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Styles globaux */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        * {
          letter-spacing: -0.01em;
        }
      `}</style>
    </div>
  );
};

export default TeamPage;