
'use client';

import { Project } from '@/types';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowBigRight, ArrowLeftToLine, Link2 } from 'lucide-react';
import BlurEffect from "react-progressive-blur";
import { FaArrowDown } from 'react-icons/fa6';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden n border-none rounded-3xl bg-gray-100/50 dark:bg-white/5 border  cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
      onClick={handleClick}
      style={{
        width: "104%",
        height: "470px",
      }}
    >

      {/* Overlay noir au hover */}
      <div
        className="
          absolute inset-0 
          bg-black/0 
          group-hover:bg-black/10 
          transition-all duration-500 
          z-10
        "
      />

      {/* IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          onLoad={() => setLoaded(true)}
          className={`
            w-full h-full object-cover transition-all duration-700
            group-hover:scale-110
            }
          `}
          alt={project.title}
        />

        {/* Blur effect overlay (progressive) */}
       
          <BlurEffect
            intensity={200}
            position="bottom"
            className="h-[159px] bg-gradient-to-t from-black/20 to-transparent"
          />
      
      </div>

      {/* --- BOTTOM CONTENT --- */}
      <div className="
        absolute bottom-0 left-0 right-0 
        bg-gradient-to-t from-black/20 dark:from-black/50 to-transparent
        px-4 pb-4 pt-10
        group-hover:opacity-0 
        group-hover:translate-y-4
        opacity-100 
        translate-y-0
        transition-all duration-500 ease-out
        z-20
      ">
          {/* <p className="text-white text-left text- fa line-clamp-2 mt-1 flex-1">
            {project.title}
          </p> */}
           <span className=" text-xs text-left block w-max text-gray-00 texsx bg-black/40 px-2 py-1  backdrop-blur-lg text-white rounded-full">
            {project.year}
          </span>
        <div className='flex items-center'>
          <p className="text-white text-left text-sm line-clamp-2 mt-1 flex-1">
            {project.shortDescription}
          </p>
          <div className="ml-2">
            <Link2 className='text-white' size={18} />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 backdrop-blur-xl py-1 rounded-full bg-white/20 text-white"
            >
              {tech}
            </span>
          ))}

        </div>
      </div>
     <div className='absolute   top-3 right-3 mix-blend-exclusion'>
  <div className='size-[40px] grid place-content-center bg-white rounded-full'>
   <FaArrowDown className='text-gray-700 rotate-[-120deg]'/>
  </div>
</div>    

      {/* --- OVERLAY HOVER --- */}
      <div className="
        absolute inset-0
        flex flex-col items-center justify-center
        opacity-0 bg-black/40
        group-hover:opacity-100
        transition-all duration-500
        z-30
        p-6
      ">
        <h3 className="text-white p-2 rounded-full font-semibold text-lg mix-blend-difference">
          {project.title}
        </h3>

        <div className="
          flex items-center justify-center
          gap-3
          px-6 py-3
          rounded-full
          bg-white/10
          border border-white/20
          text-white
          font-semibold
          hover:bg-white/20
          hover:scale-105
          transition-all duration-300
        ">
          <span>Voir le projet</span>
          <Link2 size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}

// 'use client';

// import { Project } from '@/types';
// import { useRef, useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { Link2, Eye } from 'lucide-react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Enregistrer GSAP si côté client
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// interface ProjectCardProps {
//   project: Project;
//   index: number;
// }

// export default function ProjectCard({ project, index }: ProjectCardProps) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     if (!cardRef.current) return;

//     // Animation GSAP pour l'apparition
//     gsap.fromTo(cardRef.current,
//       {
//         y: 80,
//         opacity: 0,
//         scale: 0.9,
//         rotation: -3
//       },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: cardRef.current,
//           start: "top 85%",
//           end: "top 40%",
//           toggleActions: "play none none reverse",
//           once: true
//         },
//         delay: index * 0.15
//       }
//     );

//     // Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [index]);

//   const handleClick = () => {
//     // Animation au clic
//     if (cardRef.current) {
//       gsap.to(cardRef.current, {
//         scale: 0.95,
//         duration: 0.2,
//         ease: "power2.in",
//         onComplete: () => {
//           gsap.to(cardRef.current, {
//             scale: 1,
//             duration: 0.2,
//             ease: "power2.out",
//             onComplete: () => {
//               router.push(`/projects/${project.id}`);
//             }
//           });
//         }
//       });
//     } else {
//       router.push(`/projects/${project.id}`);
//     }
//   };

//   const handleMouseEnter = () => {
//     if (cardRef.current) {
//       gsap.to(cardRef.current, {
//         scale: 1.03,
//         y: -8,
//         duration: 0.4,
//         ease: "power2.out"
//       });
//     }
    
//     if (imageRef.current) {
//       gsap.to(imageRef.current, {
//         scale: 1.1,
//         duration: 0.7,
//         ease: "power2.out"
//       });
//     }
//   };

//   const handleMouseLeave = () => {
//     if (cardRef.current) {
//       gsap.to(cardRef.current, {
//         scale: 1,
//         y: 0,
//         duration: 0.4,
//         ease: "power2.out"
//       });
//     }
    
//     if (imageRef.current) {
//       gsap.to(imageRef.current, {
//         scale: 1,
//         duration: 0.7,
//         ease: "power2.out"
//       });
//     }
//   };

//   return (
//     <div
//       ref={cardRef}
//       className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 cursor-pointer transform transition-all duration-300 hover:border-blue-500/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10"
//       onClick={handleClick}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         width: "100%",
//         height: "380px",
//       }}
//     >
//       {/* Effet de brillance au hover */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10" />

//       {/* IMAGE */}
//       <div ref={imageRef} className="absolute inset-0 z-0 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent z-10" />
        
//         <img
//           src={project.image}
//           onLoad={() => setLoaded(true)}
//           className={`
//             w-full h-full object-cover transition-all duration-700
//             ${loaded ? 'opacity-100' : 'opacity-0'}
//             scale-100 group-hover:scale-110
//           `}
//           alt={project.title}
//         />

//         {/* Overlay coloré au hover */}
//         <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 via-blue-500/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20" />
//       </div>

//       {/* CONTENU PRINCIPAL (visible par défaut) */}
//       <div className="
//         absolute inset-0 z-30
//         flex flex-col justify-end
//         p-5 md:p-6
//       ">
//         {/* Année */}
//         <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-gray-700/50 text-white/80 text-xs font-medium">
//           {project.year}
//         </div>

//         {/* Titre et Description */}
//         <div className="mb-4">
//           <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
//             {project.title}
//           </h3>
//           <p className="text-sm text-gray-300 line-clamp-2">
//             {project.shortDescription}
//           </p>
//         </div>

//         {/* Technologies */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.technologies.slice(0, 4).map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-gray-700/50 text-white text-xs font-medium transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/10"
//             >
//               {tech}
//             </span>
//           ))}
//           {project.technologies.length > 4 && (
//             <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-gray-700/50 text-white/60 text-xs">
//               +{project.technologies.length - 4}
//             </span>
//           )}
//         </div>

//         {/* Bouton Voir (visible par défaut mais discret) */}
//         <div className="flex items-center justify-between opacity-100 group-hover:opacity-0 transition-all duration-300">
//           <div className="flex items-center text-blue-400 text-sm font-medium">
//             <Eye size={16} className="mr-2" />
//             Voir le projet
//           </div>
//           <Link2 size={18} className="text-gray-400 group-hover:rotate-45 transition-transform duration-500" />
//         </div>
//       </div>

//       {/* OVERLAY HOVER (apparaît au survol) */}
//       <div className="
//         absolute inset-0 z-40
//         flex flex-col items-center justify-center
//         opacity-0 group-hover:opacity-100
//         transition-all duration-500
//         p-6
//         bg-gradient-to-t from-black/70 via-black/40 to-transparent
//       ">
//         {/* Titre agrandi */}
//         <h3 className="text-2xl font-bold text-white mb-4 text-center px-4 py-2 rounded-xl bg-black/30 backdrop-blur-sm">
//           {project.title}
//         </h3>

//         {/* Description complète */}
//         <p className="text-gray-300 text-center mb-8 max-w-md line-clamp-3 px-4 py-3 rounded-xl bg-black/20 backdrop-blur-sm">
//           {project.shortDescription}
//         </p>

//         {/* Bouton principal */}
//         <button
//           className="
//             relative overflow-hidden
//             px-8 py-3
//             rounded-full
//             bg-gradient-to-r from-blue-600 to-blue-700
//             text-white
//             font-semibold
//             border border-blue-500/50
//             hover:from-blue-500 hover:to-blue-600
//             hover:scale-105
//             hover:shadow-2xl hover:shadow-blue-500/30
//             transition-all duration-300
//             group/btn
//             flex items-center gap-3
//           "
//           onClick={(e) => {
//             e.stopPropagation();
//             handleClick();
//           }}
//         >
//           {/* Effet de brillance sur le bouton */}
//           <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
          
//           <span>Explorer le projet</span>
//           <Link2 size={20} className="group-hover/btn:rotate-45 transition-transform duration-500" />
//         </button>

//         {/* Indicateur de technologies */}
//         <div className="mt-6 text-sm text-gray-400">
//           {project.technologies.length} technologies utilisées
//         </div>
//       </div>
//     </div>
//   );
// }