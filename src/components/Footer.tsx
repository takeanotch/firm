
// 'use client'
// import { Linkedin, Twitter, Instagram, Mail, ArrowUpRight, ArrowUp } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-50 border-t border-gray-100">
//       <div className="container mx-auto px-6 py-12 md:py-16">
        
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
//           {/* Brand Section */}
//           <div className="md:col-span-4 lg:col-span-3">
//             <div className="mb-6">
//               <span className="text-xl font-bold text-gray-900 tracking-tight">
//             <img src='/logo.png' className='w-[120px]'/>
//               </span>
//               <p className="text-gray-500 text-sm mt-2">
//                 Strategic finance consulting for the modern era lies in here.
//               </p>
//             </div>
            
//             {/* Social Links */}
//             <div className="flex space-x-3">
//               <a 
//                 href="#" 
//                 className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={16} />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={16} />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={16} />
//               </a>
//               <a 
//                 href="mailto:contact@nexus.com" 
//                 className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
//                 aria-label="Email"
//               >
//                 <Mail size={16} />
//               </a>
//             </div>
//           </div>

//           {/* Services */}
//           <div className="md:col-span-2 lg:col-span-2">
//             <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
//               Services
//             </h3>
//             <ul className="space-y-3">
//               {['Digital Transformation', 'Strategy Consulting', 'Operations', 'Technology Advisory', 'Growth Strategy'].map((item) => (
//                 <li key={item}>
//                   <a 
//                     href="#" 
//                     className="text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center group"
//                   >
//                     {item}
//                     <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Expertise */}
//           <div className="md:col-span-2 lg:col-span-2">
//             <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
//               Expertise
//             </h3>
//             <ul className="space-y-3">
//               {['Financial Services', 'Healthcare', 'Retail', 'Technology', 'Manufacturing'].map((item) => (
//                 <li key={item}>
//                   <a 
//                     href="#" 
//                     className="text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center group"
//                   >
//                     {item}
//                     <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Insights */}
//           <div className="md:col-span-2 lg:col-span-2">
//             <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
//               Insights
//             </h3>
//             <ul className="space-y-3">
//               {['Case Studies', 'Industry Reports', 'Articles', 'White Papers', 'Webinars'].map((item) => (
//                 <li key={item}>
//                   <a 
//                     href="#" 
//                     className="text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center group"
//                   >
//                     {item}
//                     <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact CTA */}
//           <div className="md:col-span-3 lg:col-span-3">
//             <div className="bg-white p-6 rounded-xl border border-gray-200">
//               <h3 className="text-sm font-semibold text-gray-900 mb-3">
//                 Start a conversation
//               </h3>
//               <p className="text-gray-600 text-sm mb-4">
//                 Ready to transform your business? Let&apos;s discuss your challenges.
//               </p>
//               <a 
//                 href="mailto:contact@nexus.com" 
//                 className="inline-flex items-center text-sm text-gray-900 font-medium hover:text-gray-700 transition-colors group"
//               >
//                 contact@nextplusafrica.com
//                 <ArrowUpRight size={14} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-200 my-8 md:my-12"></div>

//         {/* Bottom Footer */}
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="text-gray-500 text-sm mb-4 md:mb-0">
//             © {currentYear} StoneConsulting. All rights reserved.
//           </div>
          
//           <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
//             <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
//               Terms of Service
//             </a>
//             <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
//               Cookie Policy
//             </a>
//             <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
//               Accessibility
//             </a>
//           </div>
//         </div>

//         {/* Back to Top */}
//         <button 
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="fixed bottom-6 right-6 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors z-40"
//           aria-label="Back to top"
//         >
//           <ArrowUp size={18} className="rotate-270" />
//         </button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
'use client'
import { Linkedin, Twitter, Instagram, Mail, ArrowUpRight, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 py-12 md:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="mb-6">
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                <img src='/logo.png' className='w-[120px]' alt="Next Plus Africa Logo"/>
              </span>
              <p className="text-gray-500 text-sm mt-2">
                Spécialistes en sécurité, tenues de travail, nettoyage et fournitures professionnelles.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="mailto:nextplusafrica@gmail.com" 
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {['Sécurité & Gardiennage', 'Tenues de Travail', 'Nettoyage Professionnel', 'Fournitures', 'Personnalisation'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center group"
                  >
                    {item}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Nos Divisions
            </h3>
            <ul className="space-y-3">
              {['Lion Evolution Security', 'Rose Cleaning', 'Next Plus Africa Fournitures', 'Transport & Logistique', 'Signalisation'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center group"
                  >
                    {item}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Informations
            </h3>
            <ul className="space-y-3">
              {['À propos', 'Nos valeurs', 'Nos clients', 'Carrières', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center group"
                  >
                    {item}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Contactez-nous
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                8452 AV. Rte contournement Golf-TSHIAMALALE<br/>
                République Démocratique du Congo
              </p>
              <p className="text-gray-600 text-sm mb-3">
                Téléphone: +243 89 3000 416
              </p>
              <a 
                href="mailto:nextplusafrica@gmail.com" 
                className="inline-flex items-center text-sm text-gray-900 font-medium hover:text-gray-700 transition-colors group"
              >
                nextplusafrica@gmail.com
                <ArrowUpRight size={14} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8 md:my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Next Plus Africa. Tous droits réservés.
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Cookies
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Accessibilité
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors z-40"
          aria-label="Retour en haut"
        >
          <ArrowUp size={18} className="rotate-270" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;