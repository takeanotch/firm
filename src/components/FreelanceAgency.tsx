
'use client';
import React from 'react';
import { FaArrowRight, FaEye, FaRocket, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowDown01, ArrowDownCircle, FolderOpen} from 'lucide-react';
import Link from 'next/link';
import { FaArrowDownLong } from 'react-icons/fa6';
const FreelanceAgency = () => {
  return (
    <div className="items-center justify-center p-">
      <div className="max-w-4xl mx-auto text-center">
        {/* En-tête */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex justify-center my-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <FaRocket className="text-4xl text-blue-600 mr-2" />
            <FaLightbulb className="text-4xl text-yellow-500" />
          </motion.div>
          
          <motion.p 
            className="text-xl text-eft md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
        
           

            Nous transformons vos idées en réalité digitale.
          </motion.p>
        </motion.div>

        {/* Boutons d'action */}
        <motion.div 
          className="flex px-3  flex- sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
       

    <Link href="/projects">
          <motion.button 
            className="group text-s mb- bg-black  px-4 backdrop-blur-md dark:bg-white dark:text-black hover:bg-gray-800 text-white xs:x-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 border border-white/30 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[150px] sm:min-w-[220px] md:text-lg sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Voir nos réalisations</span>
<FolderOpen className="w-4 h-4 group-hover" />
          </motion.button>
    </Link>
        </motion.div>
      </div>
      <div className='mx-auto my-5 animat-bounce'>
        <div className='w- mx-auto w-max text-gray-600 border-gr relative'>
       <ArrowDownCircle/>
        </div>
      </div>
    </div>
  );
};

export default FreelanceAgency;