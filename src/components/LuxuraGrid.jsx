// // // "use client";

// // // import { motion } from "framer-motion";
// // // import Image from "next/image";

// // // export default function LuxuraGrid() {
// // //   return (
// // //     <section className="max-w-7xl mx-auto px-6 py-20">
// // //       {/* Title */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 30 }}
// // //         whileInView={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6 }}
// // //         className="text-center mb-14"
// // //       >
// // //         <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
// // //           Innovation
// // //         </p>
// // //         <h2 className="text-4xl font-semibold text-gray-900">
// // //           Why style lovers choose <span className="font-bold">LUXURA</span>
// // //         </h2>
// // //         <p className="mt-3 text-gray-500 max-w-xl mx-auto">
// // //           Exceptional services and unparalleled craftsmanship that set the
// // //           standard for luxury fashion
// // //         </p>
// // //       </motion.div>

// // //       {/* Grid */}
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
// // //         {/* Card 1 */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 40 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.5 }}
// // //           className="bg-gray-100 rounded-2xl p-6 flex flex-col justify-between"
// // //         >
// // //           <Image
// // //             src="/images/jewelry.jpg"
// // //             alt="Handcrafted jewelry"
// // //             width={400}
// // //             height={400}
// // //             className="rounded-xl object-cover"
// // //           />
// // //           <h3 className="mt-6 font-semibold text-lg">
// // //             Handcrafted by master artisans
// // //           </h3>
// // //           <p className="text-gray-500 mt-2 text-sm">
// // //             Timeless elegance and unmatched quality.
// // //           </p>
// // //           <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
// // //             Explore Collection →
// // //           </button>
// // //         </motion.div>

// // //         {/* Card 2 */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 40 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           className="bg-gray-100 rounded-2xl p-6"
// // //         >
// // //           <Image
// // //             src="/images/handshake.jpg"
// // //             alt="Trusted worldwide"
// // //             width={400}
// // //             height={400}
// // //             className="rounded-xl object-cover"
// // //           />
// // //           <h3 className="mt-6 font-semibold text-lg">
// // //             Trusted by fashion connoisseurs worldwide
// // //           </h3>
// // //         </motion.div>

// // //         {/* Card 3 */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 40 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.7 }}
// // //           className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center"
// // //         >
// // //           <Image
// // //             src="/images/chess.jpg"
// // //             alt="50 years"
// // //             width={180}
// // //             height={180}
// // //             className="object-contain"
// // //           />
// // //           <h3 className="mt-6 text-4xl font-bold">50%</h3>
// // //           <p className="text-gray-500 text-sm">
// // //             Years of heritage craftsmanship
// // //           </p>
// // //         </motion.div>

// // //         {/* Card 4 (Large) */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 40 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8 }}
// // //           className="md:col-span-3 bg-gray-100 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6"
// // //         >
// // //           <Image
// // //             src="/images/model.jpg"
// // //             alt="Luxury style"
// // //             width={600}
// // //             height={400}
// // //             className="rounded-xl object-cover"
// // //           />
// // //           <div>
// // //             <h3 className="text-2xl font-semibold">
// // //               Elevates personal style
// // //             </h3>
// // //             <p className="mt-2 text-gray-500">
// // //               Transforms your wardrobe into a statement of luxury.
// // //             </p>
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import Image from "next/image";

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: { opacity: 1, y: 0 },
// // };

// // export default function LuxuraGrid() {
// //   return (
// //     <section className="max-w-7xl mx-auto px-6 py-20">
      
// //       {/* Header */}
// //       <motion.div
// //         initial="hidden"
// //         whileInView="visible"
// //         variants={fadeUp}
// //         transition={{ duration: 0.6 }}
// //         className="text-center mb-16"
// //       >
// //         <span className="inline-block text-xs tracking-widest text-gray-400 uppercase mb-2">
// //           Innovation
// //         </span>
// //         <h2 className="text-4xl font-semibold text-gray-900">
// //           Why style lovers choose <span className="font-bold">LUXURA</span>
// //         </h2>
// //         <p className="mt-3 text-gray-500 max-w-xl mx-auto">
// //           Exceptional services and unparalleled craftsmanship that set the
// //           standard for luxury fashion
// //         </p>
// //       </motion.div>

// //       {/* GRID */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">

// //         {/* Card A – row-span-2 */}
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           variants={fadeUp}
// //           transition={{ duration: 0.5 }}
// //           className="md:row-span-2 bg-gray-100 rounded-2xl p-6 flex flex-col justify-between"
// //         >
// //           <Image
// //             src="/five.jpg"
// //             alt="Jewelry"
// //             width={400}
// //             height={500}
// //             className="rounded-xl object-cover"
// //           />

// //           <div className="mt-6">
// //             <h3 className="font-semibold text-lg leading-snug">
// //               Handcrafted by master artisans to deliver timeless elegance and unmatched quality.
// //             </h3>

// //             <button className="mt-6 inline-flex items-center gap-3 px-4 py-2 border rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
// //               Explore Collection
// //               <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
// //                 →
// //               </span>
// //             </button>
// //           </div>
// //         </motion.div>

// //         {/* Card B */}
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           variants={fadeUp}
// //           transition={{ duration: 0.6 }}
// //           className="bg-gray-100 rounded-2xl p-6"
// //         >
// //           <Image
// //             src="/nine.jpg"
// //             alt="Trusted"
// //             width={400}
// //             height={300}
// //             className="rounded-xl object-cover"
// //           />

// //           <h3 className="mt-4 font-semibold">
// //             Trusted by <span className="font-bold">fashion</span>
// //           </h3>
// //           <p className="text-sm text-gray-500">
// //             connoisseurs worldwide.
// //           </p>
// //         </motion.div>

// //         {/* Card C */}
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           variants={fadeUp}
// //           transition={{ duration: 0.7 }}
// //           className="bg-gray-100 rounded-2xl p-6 flex items-center justify-between"
// //         >
// //           <div>
// //             <h3 className="text-4xl font-bold">50%</h3>
// //             <p className="text-sm text-gray-500">
// //               Years of heritage craftsmanship
// //             </p>
// //           </div>

// //           <Image
// //             src="/nine.jpg"
// //             alt="Chess"
// //             width={120}
// //             height={120}
// //             className="object-contain"
// //           />
// //         </motion.div>

// //         {/* Card D */}
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           variants={fadeUp}
// //           transition={{ duration: 0.8 }}
// //           className="bg-gray-100 rounded-2xl p-6 col-span-2 flex items-center"
// //         >
// //           <p className="font-medium text-gray-800">
// //             Elevates personal style and transforms your wardrobe into a statement of luxury.
// //           </p>
// //         </motion.div>

// //         {/* Card E – col-span-2 */}
// //         {/* <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           variants={fadeUp}
// //           transition={{ duration: 0.9 }}
// //           className="md:col-span-2 bg-gray-100 rounded-2xl p-6 flex items-center gap-6"
// //         >
// //           <Image
// //             src="/images/model.jpg"
// //             alt="Luxury model"
// //             width={500}
// //             height={300}
// //             className="rounded-xl object-cover"
// //           />

// //           <div>
// //             <h3 className="text-xl font-semibold">
// //               Elevates personal style
// //             </h3>
// //             <p className="mt-2 text-gray-500 text-sm">
// //               Transforms your wardrobe into a statement of luxury.
// //             </p>
// //           </div>
// //         </motion.div> */}

// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function LuxuraGrid() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20">
      
//       {/* Header */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         variants={fadeUp}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <span className="inline-block text-xs tracking-widest text-gray-400 uppercase mb-2">
//           Innovation
//         </span>
//         <h2 className="text-4xl font-semibold text-gray-900">
//           Why style lovers choose <span className="font-bold">LUXURA</span>
//         </h2>
//         <p className="mt-3 text-gray-500 max-w-xl mx-auto">
//           Exceptional services and unparalleled craftsmanship that set the
//           standard for luxury fashion
//         </p>
//       </motion.div>

//       {/* GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">

//         {/* Card A – row-span-2 - Image complète */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeUp}
//           transition={{ duration: 0.5 }}
//           className="md:row-span-2 bg-gray-100 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
//         >
//           {/* Image de fond */}
//           <div className="absolute inset-0 z-0">
//             <Image
//               src="/five.jpg"
//               alt="Jewelry"
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             {/* Overlay sombre */}
//             <div className="absolute inset-0 bg-black/20" />
//           </div>

//           {/* Contenu par-dessus */}
//           <div className="relative z-10 text-white">
//             <h3 className="font-semibold text-lg leading-snug">
//               Handcrafted by master artisans to deliver timeless elegance and unmatched quality.
//             </h3>

//             <button className="mt-6 inline-flex items-center gap-3 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
//               Explore Collection
//               <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
//                 →
//               </span>
//             </button>
//           </div>
//         </motion.div>

//         {/* Card B - Image complète avec texte par-dessus */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeUp}
//           transition={{ duration: 0.6 }}
//           className="bg-gray-100 rounded-2xl p-6 relative overflow-hidden group min-h-[250px]"
//         >
//           {/* Image de fond */}
//           <div className="absolute inset-0 z-0">
//             <Image
//               src="/nine.jpg"
//               alt="Trusted fashion"
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             {/* Overlay sombre */}
//             <div className="absolute inset-0 bg-black/30" />
//           </div>

//           {/* Texte par-dessus */}
//           <div className="relative z-10 text-white h-full flex flex-col justify-end">
//             <h3 className="font-semibold text-lg">
//               Trusted by <span className="font-bold">fashion</span>
//             </h3>
//             <p className="text-sm text-gray-200">
//               connoisseurs worldwide.
//             </p>
//           </div>
//         </motion.div>

//         {/* Card C - Image complète avec texte par-dessus */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeUp}
//           transition={{ duration: 0.7 }}
//           className="bg-gray-100 rounded-2xl p-6 relative overflow-hidden group min-h-[250px]"
//         >
//           {/* Image de fond */}
//           <div className="absolute inset-0 z-0">
//             <Image
//               src="/five.jpg"
//               alt="Heritage craftsmanship"
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             {/* Overlay sombre */}
//             <div className="absolute inset-0 bg-black/40" />
//           </div>

//           {/* Texte par-dessus */}
//           <div className="relative z-10 text-white h-full flex flex-col justify-center">
//             <h3 className="text-4xl font-bold">50%</h3>
//             <p className="text-sm text-gray-200">
//               Years of heritage craftsmanship
//             </p>
//           </div>
//         </motion.div>

//         {/* Card D - Image complète avec texte par-dessus */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeUp}
//           transition={{ duration: 0.8 }}
//           className="md:col-span-2 bg-gray-100 rounded-2xl p-6 relative overflow-hidden group min-h-[250px]"
//         >
//           {/* Image de fond */}
//           <div className="absolute inset-0 z-0">
//             <Image
//               src="/nine.jpg"
//               alt="Personal style"
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             {/* Overlay sombre */}
//             <div className="absolute inset-0 bg-black/25" />
//           </div>

//           {/* Texte par-dessus */}
//           <div className="relative z-10 text-white h-full flex items-center">
//             <p className="font-medium text-white text-lg max-w-md">
//               Elevates personal style and transforms your wardrobe into a statement of luxury.
//             </p>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function FinanceConsultingGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs tracking-widest text-gray-400 uppercase mb-2">
          Excellence Financière
        </span>
        <h2 className="text-4xl font-semibold text-gray-900">
          Pourquoi les leaders choisissent <span className="font-bold">FINANCE CONSULT</span>
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Expertise stratégique et solutions sur mesure qui redéfinissent les performances financières
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">

        {/* Card A – row-span-2 - Image complète */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="md:row-span-2 bg-gray-100 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
        >
          {/* Image de fond */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/five.jpg" // À remplacer par une image de finance/consulting
              alt="Réunion stratégique"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Contenu par-dessus */}
          <div className="relative z-10 text-white">
            <h3 className="font-semibold text-lg leading-snug">
              Conseils stratégiques personnalisés pour optimiser vos investissements et maximiser votre croissance.
            </h3>

            <button className="mt-6 inline-flex items-center gap-3 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
              Explorer nos services
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                →
              </span>
            </button>
          </div>
        </motion.div>

        {/* Card B - Image complète avec texte par-dessus */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-2xl p-6 relative overflow-hidden group min-h-[250px]"
        >
          {/* Image de fond */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/mount.webp" // À remplacer par une image de data/analyse
              alt="Analyses financières"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Texte par-dessus */}
          <div className="relative z-10 text-white h-full flex flex-col justify-end">
            <h3 className="font-semibold text-lg">
              Confiance des <span className="font-bold">entreprises</span>
            </h3>
            <p className="text-sm text-gray-200">
              leaders à travers le monde.
            </p>
          </div>
        </motion.div>

        {/* Card C - Image complète avec texte par-dessus */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="bg-gray-100 rounded-2xl p-6 relative overflow-hidden group min-h-[250px]"
        >
          {/* Image de fond */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/woman.webp" // À remplacer par une image de croissance
              alt="Expérience en consulting"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Texte par-dessus */}
          <div className="relative z-10 text-white h-full flex flex-col justify-center">
            <h3 className="text-4xl font-bold">25+</h3>
            <p className="text-sm text-gray-200">
              Années d'expertise en stratégie financière
            </p>
          </div>
        </motion.div>

        {/* Card D - Image complète avec texte par-dessus */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 bg-gray-100 rounded-2xl p-6 relative overflow-hidden group min-h-[250px]"
        >
          {/* Image de fond */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/nine.jpg" // À remplacer par une image de succès/collaboration
              alt="Transformation financière"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* Texte par-dessus */}
          <div className="relative z-10 text-white h-full flex items-center">
            <p className="font-medium text-white text-lg max-w-md">
              Nous transformons vos défis financiers en opportunités de croissance durable et de valeur ajoutée.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}