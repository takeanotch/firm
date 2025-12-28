
// 'use client'
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { FaLocationPin, FaMapLocation } from 'react-icons/fa6';
// import { MapPin } from 'lucide-react';

// const WhereWeWork = () => {
//   return (
//     <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
//       {/* Section Title */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-center mb-12"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           Où travaillons-nous ?
//         </h2>
//         <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
//       </motion.div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Column: Text Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
//             <strong className="text-orange-600">NEXT PLUS AFRICA</strong> est prête à coopérer et collaborer avec toute organisation et personnes trouvant de l'intérêt pour ses services.
//           </p>

//           <p className="text-gray-600 leading-relaxed">
//             Nous sommes fiers d'être basés en Afrique, précisément en{' '}
//             <strong className="text-orange-600">République démocratique du Congo</strong>.
//             Nous travaillons pour offrir des produits et services de qualité qui répondent aux besoins venant de partout dans le monde.
//           </p>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             viewport={{ once: true }}
//             className="p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg shadow-sm"
//           >
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Notre engagement
//             </h3>
//             <p className="text-gray-700">
//               Une présence locale, une vision mondiale. Nous combinons l'expertise africaine avec des standards internationaux pour servir une clientèle diverse et exigeante.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Right Column: Image without card styling */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="relative flex justify-center items-center"
//         >
//           {/* Image container without card styling - more integrated look */}
//           <div className="relative w-full h-80 md:h-96">
//             <Image
//               src='/africa.png'
//               alt="Carte de l'Afrique mettant en valeur la présence de Next Plus Africa"
//               fill
//               className="object-contain "
//               sizes="(max-width: 768px) 100vw, 50vw"
//               priority
//             />
            
//             {/* Animated overlay point for DRC */}
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: [1, 1.3, 1] }}
//               transition={{ repeat: Infinity, duration: 2, delay: 1 }}
//               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
//             >
//               <div className="w-8 h-8 bg-orange-500 border-4 border-white rounded-full shadow-2xl"></div>
//             </motion.div>
//           </div>

//           {/* Floating label avec couleur orange */}
//           <motion.div
//             initial={{ y: 10, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             viewport={{ once: true }}
//             className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2  shadow-lg border-l-4 border-orange-500"
//           >
//             <p className="text-sm font-semibold text-gray-800">

//                 <MapPin className="inline-block text-orange-600 mr-1 w-4"/>
//                <span className="text-orange-600 font-bold">R.D. Congo</span>
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Animated decorative elements avec couleurs orange */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.08 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-orange-400 blur-3xl"
//       ></motion.div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.08 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         viewport={{ once: true }}
//         className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-orange-300 blur-3xl"
//       ></motion.div>
//     </section>
//   );
// };

// export default WhereWeWork;
'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLocationPin, FaMapLocation } from 'react-icons/fa6';
import { MapPin } from 'lucide-react';

const WhereWeWork = () => {
  // Variants pour animation en cascade
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.55, 0.55, 1]
      }
    }
  };

  const floatingLabelVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.3, 1],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16  overflow-hidden">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Où travaillons-nous ?
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-1 bg-orange-500 mx-auto"
        ></motion.div>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content avec animation en cascade */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            <strong className="text-orange-600">NEXT PLUS AFRICA</strong> est prête à coopérer et collaborer avec toute organisation et personnes trouvant de l'intérêt pour ses services.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 leading-relaxed"
          >
            Nous sommes fiers d'être basés en Afrique, précisément en{' '}
            <strong className="text-orange-600">République démocratique du Congo</strong>.
            Nous travaillons pour offrir des produits et services de qualité qui répondent aux besoins venant de partout dans le monde.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Notre engagement
            </h3>
            <p className="text-gray-700">
              Une présence locale, une vision mondiale. Nous combinons l'expertise africaine avec des standards internationaux pour servir une clientèle diverse et exigeante.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Image avec animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex justify-center items-center"
        >
          {/* Image container avec animation */}
          <motion.div
            variants={imageVariants}
            className="relative w-full h-80 md:h-96"
          >
            <Image
              src='/africa.png'
              alt="Carte de l'Afrique mettant en valeur la présence de Next Plus Africa"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            
            {/* Animated overlay point for DRC */}
            <motion.div
              variants={pulseVariants}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              animate="pulse"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="w-8 h-8 bg-orange-500 border-4 border-white rounded-full shadow-2xl"></div>
            </motion.div>
          </motion.div>

          {/* Floating label avec animation */}
          <motion.div
            variants={floatingLabelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-lg border-l-4 border-orange-500"
          >
            <p className="text-sm font-semibold text-gray-800">
              <MapPin className="inline-block text-orange-600 mr-1 w-4"/>
              <span className="text-orange-600 font-bold">R.D. Congo</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-orange-400 blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-orange-300 blur-3xl"
      ></motion.div>

      {/* Ajout d'une ligne animée en bas */}
     
    </section>
  );
};

export default WhereWeWork;