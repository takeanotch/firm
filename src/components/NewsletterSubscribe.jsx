
// 'use client'
// import { useState } from 'react';
// import { 
//   Mail, 
//   Check, 
//   Send, 
//   Sparkles, 
//   ArrowRight,
//   Shield,
//   Bell
// } from 'lucide-react';

// export default function NewsletterSubscribe() {
//   const [email, setEmail] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !email.includes('@')) return;
    
//     setIsLoading(true);
    
//     // Simulation d'un appel API
//     await new Promise(resolve => setTimeout(resolve, 1500));
    
//     setIsLoading(false);
//     setIsSubscribed(true);
//     setEmail('');
    
//     // Réinitialiser après 5 secondes
//     setTimeout(() => {
//       setIsSubscribed(false);
//     }, 5000);
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-4">
//       <div className="max-w-4xl w-full mx-auto">
//         <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          
//           {/* Partie gauche - Illustration et description */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-2 mb-2">
//               <div className="p-1 bg-gray-100">
//                 <Bell className="h-5 w-5 text-gray-800" />
//               </div>
//               <span className="text-xs font-medium text-gray-800 uppercase tracking-wider">Newsletter</span>
//             </div>
            
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
//               Restez <span className="text-gray-800">informé</span>
//             </h1>
            
//             <p className="text-gray-600">
//               Recevez les dernières actualités, des ressources exclusives et des conseils directement dans votre boîte de réception.
//             </p>
            
//             <div className="space-y-3 pt-2">
//               <div className="flex items-start gap-3">
//                 <div className="mt-0.5 p-0.5 bg-gray-100">
//                   <Check className="h-3.5 w-3.5 text-gray-700" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-gray-900 text-sm">Contenu exclusif</h3>
//                   <p className="text-gray-500 text-xs">Articles et ressources uniques</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <div className="mt-0.5 p-0.5 bg-gray-100">
//                   <Sparkles className="h-3.5 w-3.5 text-gray-700" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-gray-900 text-sm">Design inspirant</h3>
//                   <p className="text-gray-500 text-xs">Conseils design chaque semaine</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <div className="mt-0.5 p-0.5 bg-gray-100">
//                   <Shield className="h-3.5 w-3.5 text-gray-700" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-gray-900 text-sm">Respect de la vie privée</h3>
//                   <p className="text-gray-500 text-xs">Désabonnement à tout moment</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Partie droite - Formulaire */}
//           <div className="relative">
//             <div className="bg-white border border-gray-200 p-6 md:p-8">
              
//               {/* En-tête minimaliste */}
//               <div className="mb-6">
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="p-1 bg-gray-900">
//                     <Mail className="h-4 w-4 text-white" />
//                   </div>
//                   <span className="text-sm font-medium text-gray-900">Newsletter</span>
//                 </div>
                
//                 <h2 className="text-xl font-bold text-gray-900 mb-1">
//                   Abonnez-vous
//                 </h2>
//                 <p className="text-gray-500 text-sm">
//                   Rejoignez +5000 abonnés
//                 </p>
//               </div>
              
//               {isSubscribed ? (
//                 <div className="text-center py-6 border border-gray-200">
//                   <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 mb-3">
//                     <Check className="h-5 w-5 text-gray-900" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-1">
//                     Félicitations
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     Vous êtes maintenant abonné. Vérifiez votre boîte de réception.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
//                       Adresse email
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <Mail className="h-4 w-4 text-gray-400" />
//                       </div>
//                       <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="votre@email.com"
//                         className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors duration-200"
//                         required
//                       />
//                     </div>
//                   </div>
                  
//                   <button
//                     type="submit"
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                     disabled={isLoading}
//                     className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 font-medium text-white ${isLoading ? 'bg-gray-400' : 'bg-gray-900 hover:bg-gray-800'} transition-colors duration-200`}
//                   >
//                     {isLoading ? (
//                       <>
//                         <div className="h-4 w-4 border-2 border-white border-t-transparent animate-spin"></div>
//                         <span className="text-sm">Abonnement...</span>
//                       </>
//                     ) : (
//                       <>
//                         <span className="text-sm">S'abonner</span>
//                         <ArrowRight className={`h-3.5 w-3.5 transition-transform duration-200 ${isHovered ? 'translate-x-0.5' : ''}`} />
//                       </>
//                     )}
//                   </button>
                  
//                   <div className="flex items-center justify-center gap-1 text-xs text-gray-500 pt-2">
//                     <Send className="h-3 w-3" />
//                     <span>Premier envoi immédiat</span>
//                   </div>
                  
//                   <p className="text-xs text-center text-gray-400 pt-4 border-t border-gray-100">
//                     En vous abonnant, vous acceptez notre politique de confidentialité.
//                   </p>
//                 </form>
//               )}
              
//               {/* Statistiques */}
//               <div className="mt-6 pt-6 border-t border-gray-100">
//                 <div className="flex items-center justify-around text-center">
//                   <div>
//                     <div className="text-lg font-bold text-gray-900">5,000+</div>
//                     <div className="text-xs text-gray-500">Abonnés</div>
//                   </div>
//                   <div className="h-6 w-px bg-gray-200"></div>
//                   <div>
//                     <div className="text-lg font-bold text-gray-900">99%</div>
//                     <div className="text-xs text-gray-500">Satisfaction</div>
//                   </div>
//                   <div className="h-6 w-px bg-gray-200"></div>
//                   <div>
//                     <div className="text-lg font-bold text-gray-900">&lt;0.1%</div>
//                     <div className="text-xs text-gray-500">Spam</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Bordures décoratives */}
//             <div className="absolute -top-1 -left-1 h-full w-full border border-gray-300 -z-10"></div>
//             <div className="absolute -top-2 -left-2 h-full w-full border border-gray-100 -z-20"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client'
import { useState } from 'react';
import { 
  Mail, 
  Check, 
  Send, 
  Sparkles, 
  ArrowRight,
  Shield,
  Bell,
  Building,
  Users,
  Briefcase
} from 'lucide-react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setIsLoading(true);
    
    // Simulation d'un appel API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');
    
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          
          {/* Partie gauche - Illustration et description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-next-orange">
                <Bell className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs font-medium text-next-gray uppercase tracking-wider">
                Newsletter Next Plus Africa
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug">
              Restez <span className="text-next-orange">connecté</span> avec nous
            </h1>
            
            <p className="text-next-gray">
              Recevez les dernières actualités sur nos services de sécurité, tenues de travail, 
              nettoyage et fournitures. Soyez informé des nouvelles opportunités d'emploi et 
              des offres exclusives.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-0.5 bg-next-orange">
                  <Building className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-black text-sm">Actualités entreprise</h3>
                  <p className="text-next-gray text-xs">Développements, nouveaux services et expansions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-0.5 bg-next-orange">
                  <Briefcase className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-black text-sm">Offres d'emploi</h3>
                  <p className="text-next-gray text-xs">Opportunités chez Next Plus Africa et ses filiales</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-0.5 bg-next-orange">
                  <Users className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-black text-sm">Conseils professionnels</h3>
                  <p className="text-next-gray text-xs">Expertise sécurité, nettoyage et équipements</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partie droite - Formulaire */}
          <div className="relative">
            <div className="bg-white border border-next-gray p-6 md:p-8">
              
              {/* En-tête minimaliste */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1 bg-black">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-black">Next Plus Africa</span>
                </div>
                
                <h2 className="text-xl font-bold text-black mb-1">
                  Abonnez-vous à notre newsletter
                </h2>
                <p className="text-next-gray text-sm">
                  Rejoignez nos partenaires et clients satisfaits
                </p>
              </div>
              
              {isSubscribed ? (
                <div className="text-center py-6 border border-next-gray">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-next-orange mb-3">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-1">
                    Bienvenue chez Next Plus Africa
                  </h3>
                  <p className="text-next-gray text-sm">
                    Vous êtes maintenant abonné. Recevez nos actualités sur la sécurité, 
                    les tenues de travail et le nettoyage en RDC.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-black mb-1">
                      Adresse email professionnelle
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-next-gray" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="entreprise@email.com"
                        className="block w-full pl-10 pr-3 py-2.5 border border-next-gray focus:ring-1 focus:ring-next-orange focus:border-next-orange transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 font-medium text-white ${isLoading ? 'bg-next-gray' : 'bg-black hover:bg-next-orange'} transition-colors duration-200`}
                  >
                    {isLoading ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent animate-spin"></div>
                        <span className="text-sm">Inscription...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-sm">S'abonner maintenant</span>
                        <ArrowRight className={`h-3.5 w-3.5 transition-transform duration-200 ${isHovered ? 'translate-x-0.5' : ''}`} />
                      </>
                    )}
                  </button>
                  
                  <div className="flex items-center justify-center gap-1 text-xs text-next-gray pt-2">
                    <Send className="h-3 w-3" />
                    <span>Première newsletter immédiate</span>
                  </div>
                  
                  <p className="text-xs text-center text-next-gray pt-4 border-t border-next-gray/20">
                    En vous abonnant, vous acceptez de recevoir des communications de 
                    Next Plus Africa concernant nos services et opportunités.
                  </p>
                </form>
              )}
              
              {/* Statistiques */}
              <div className="mt-6 pt-6 border-t border-next-gray/20">
                <div className="flex items-center justify-around text-center">
                  <div>
                    <div className="text-lg font-bold text-black">40+</div>
                    <div className="text-xs text-next-gray">Agents déployés</div>
                  </div>
                  <div className="h-6 w-px bg-next-gray/30"></div>
                  <div>
                    <div className="text-lg font-bold text-black">3</div>
                    <div className="text-xs text-next-gray">Départements</div>
                  </div>
                  <div className="h-6 w-px bg-next-gray/30"></div>
                  <div>
                    <div className="text-lg font-bold text-black">100%</div>
                    <div className="text-xs text-next-gray">Satisfaction client</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bordures décoratives */}
            <div className="absolute -top-1 -left-1 h-full w-full border border-next-orange -z-10"></div>
            <div className="absolute -top-2 -left-2 h-full w-full border border-next-gray/30 -z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}