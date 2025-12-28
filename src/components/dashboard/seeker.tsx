
// 'use client'

// import { useState } from 'react'
// import { 
//   User, Phone, Mail, MapPin, Briefcase, GraduationCap, 
//   Award, Download, FileText, Calendar, Building, 
//   Heart, Settings, BookOpen, Target, ExternalLink
// } from 'lucide-react'
// import Link from 'next/link'

// type TabType = 'overview' | 'experience' | 'education' | 'skills' | 'preferences'

// interface EducationItem {
//   id?: string
//   school: string
//   degree: string
//   field: string
//   start_year: string
//   end_year: string
//   current: boolean
// }

// interface ExperienceItem {
//   id?: string
//   company: string
//   position: string
//   description: string
//   start_year: string
//   end_year: string
//   current: boolean
// }

// interface JobPreferences {
//   job_type?: string
//   salary_expectation?: string
//   remote_preference?: string
//   [key: string]: any
// }

// interface SeekerData {
//   id: string
//   profile_id: string
//   headline?: string
//   bio?: string
//   location?: string
//   cv_url?: string
//   cv_name?: string
//   experience_years?: number
//   sectors?: string[]
//   skills?: string[]
//   education?: EducationItem[]
//   employment?: ExperienceItem[]
//   job_preferences?: JobPreferences
// }

// interface SeekerProfileProps {
//   profile: {
//     id: string
//     email: string
//     role: 'seeker'
//     full_name: string
//     phone?: string
//     avatar_url?: string
//     created_at: string
//     updated_at: string
//   }
//   seekerData: SeekerData | null
// }

// export default function SeekerProfileView({ profile, seekerData }: SeekerProfileProps) {
//   const [activeTab, setActiveTab] = useState<TabType>('overview')
  
//   // Données par défaut pour seekerData s'il est null
//   const safeSeekerData: SeekerData = seekerData || {
//     id: '',
//     profile_id: profile.id,
//     headline: '',
//     bio: '',
//     location: '',
//     sectors: [],
//     skills: [],
//     education: [],
//     employment: [],
//     job_preferences: {}
//   }

//   const handleDownloadCV = () => {
//     if (safeSeekerData.cv_url) {
//       const link = document.createElement('a')
//       link.href = safeSeekerData.cv_url
//       link.download = safeSeekerData.cv_name || 'cv.pdf'
//       document.body.appendChild(link)
//       link.click()
//       document.body.removeChild(link)
//     }
//   }

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('fr-FR', {
//       day: 'numeric',
//       month: 'long',
//       year: 'numeric'
//     })
//   }

//   // Combiner les données pour faciliter l'affichage
//   const combinedData = {
//     ...profile,
//     ...safeSeekerData,
//     job_preferences: safeSeekerData.job_preferences || {}
//   }

//   // Onglet Vue d'ensemble
//   const renderOverviewTab = () => (
//     <div className="space-y-8">
//       {/* Bio */}
//       {safeSeekerData.bio && (
//         <div className="border border-gray-300 p-6">
//           <h2 className="text-lg font-medium text-black mb-4 flex items-center gap-2">
//             <User className="w-5 h-5" />
//             Présentation
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             {safeSeekerData.bio}
//           </p>
//         </div>
//       )}

//       {/* Informations de contact */}
//       <div className="border border-gray-300 p-6">
//         <h2 className="text-lg font-medium text-black mb-6">Informations de contact</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="flex items-center gap-3">
//             <Mail className="w-4 h-4 text-gray-400" />
//             <div>
//               <p className="text-xs text-gray-500">Email</p>
//               <p className="text-sm text-black">{profile.email}</p>
//             </div>
//           </div>
          
//           {profile.phone && (
//             <div className="flex items-center gap-3">
//               <Phone className="w-4 h-4 text-gray-400" />
//               <div>
//                 <p className="text-xs text-gray-500">Téléphone</p>
//                 <p className="text-sm text-black">{profile.phone}</p>
//               </div>
//             </div>
//           )}
          
//           {safeSeekerData.location && (
//             <div className="flex items-center gap-3">
//               <MapPin className="w-4 h-4 text-gray-400" />
//               <div>
//                 <p className="text-xs text-gray-500">Localisation</p>
//                 <p className="text-sm text-black">{safeSeekerData.location}</p>
//               </div>
//             </div>
//           )}
          
//           {safeSeekerData.experience_years !== undefined && (
//             <div className="flex items-center gap-3">
//               <Calendar className="w-4 h-4 text-gray-400" />
//               <div>
//                 <p className="text-xs text-gray-500">Expérience</p>
//                 <p className="text-sm text-black">
//                   {safeSeekerData.experience_years} {safeSeekerData.experience_years > 1 ? 'années' : 'année'} d'expérience
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Secteurs d'intérêt */}
//       {safeSeekerData.sectors && safeSeekerData.sectors.length > 0 && (
//         <div className="border border-gray-300 p-6">
//           <h2 className="text-lg font-medium text-black mb-6">Secteurs d'intérêt</h2>
//           <div className="flex flex-wrap gap-2">
//             {safeSeekerData.sectors.map((sector, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1.5 bg-gray-50 text-sm text-gray-700 border border-gray-200"
//               >
//                 {sector}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* CV */}
//       {safeSeekerData.cv_name && (
//         <div className="border border-gray-300 p-6">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-medium text-black flex items-center gap-2">
//               <FileText className="w-5 h-5" />
//               CV
//             </h2>
//             {safeSeekerData.cv_url && (
//               <button
//                 onClick={handleDownloadCV}
//                 className="px-4 py-2 border border-black text-black text-sm hover:bg-black hover:text-white transition-colors flex items-center gap-2"
//               >
//                 <Download className="w-4 h-4" />
//                 Télécharger
//               </button>
//             )}
//           </div>
//           <div className="flex items-center justify-between p-4 bg-gray-50">
//             <div className="flex items-center gap-3">
//               <FileText className="w-5 h-5 text-gray-400" />
//               <div>
//                 <p className="text-sm text-black">{safeSeekerData.cv_name}</p>
//                 <p className="text-xs text-gray-500">
//                   {safeSeekerData.cv_url ? 'CV disponible' : 'CV non disponible'}
//                 </p>
//               </div>
//             </div>
//             {safeSeekerData.cv_url && (
//               <a
//                 href={safeSeekerData.cv_url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-black"
//                 title="Ouvrir dans un nouvel onglet"
//               >
//                 <ExternalLink className="w-4 h-4" />
//               </a>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )

//   // Onglet Expérience
//   const renderExperienceTab = () => (
//     <div className="space-y-8">
//       {safeSeekerData.employment && safeSeekerData.employment.length > 0 ? (
//         <div className="space-y-6">
//           {safeSeekerData.employment.map((exp, index) => (
//             <div key={index} className="border border-gray-300 p-6">
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <h3 className="text-lg font-medium text-black mb-1">{exp.position}</h3>
//                   <div className="flex items-center gap-2">
//                     <Building className="w-4 h-4 text-gray-400" />
//                     <p className="text-sm text-gray-600">{exp.company}</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm text-gray-500">
//                     {exp.start_year} - {exp.current ? 'Présent' : exp.end_year}
//                   </p>
//                   {exp.current && (
//                     <span className="text-xs text-green-600 mt-1 inline-block">Actuel</span>
//                   )}
//                 </div>
//               </div>
              
//               {exp.description && (
//                 <div className="mt-4 pt-4 border-t border-gray-100">
//                   <h4 className="text-sm font-medium text-gray-700 mb-2">Description</h4>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {exp.description}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="border border-gray-300 p-8 text-center">
//           <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//           <p className="text-gray-500">Aucune expérience professionnelle renseignée</p>
//         </div>
//       )}

//       {/* Expérience globale */}
//       {safeSeekerData.experience_years !== undefined && (
//         <div className="border border-gray-300 p-6">
//           <h2 className="text-lg font-medium text-black mb-4 flex items-center gap-2">
//             <Calendar className="w-5 h-5" />
//             Expérience globale
//           </h2>
//           <div className="p-4 bg-gray-50">
//             <p className="text-2xl font-light text-black">
//               {safeSeekerData.experience_years} {safeSeekerData.experience_years > 1 ? 'années' : 'année'} d'expérience
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   )

//   // Onglet Formation
//   const renderEducationTab = () => (
//     <div className="space-y-8">
//       {safeSeekerData.education && safeSeekerData.education.length > 0 ? (
//         <div className="space-y-6">
//           {safeSeekerData.education.map((edu, index) => (
//             <div key={index} className="border border-gray-300 p-6">
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <h3 className="text-lg font-medium text-black mb-1">{edu.degree}</h3>
//                   <div className="flex items-center gap-2 mb-2">
//                     <GraduationCap className="w-4 h-4 text-gray-400" />
//                     <p className="text-sm text-gray-600">{edu.school}</p>
//                   </div>
//                   {edu.field && (
//                     <p className="text-sm text-gray-500">{edu.field}</p>
//                   )}
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm text-gray-500">
//                     {edu.start_year} - {edu.current ? 'En cours' : edu.end_year}
//                   </p>
//                   {edu.current && (
//                     <span className="text-xs text-blue-600 mt-1 inline-block">En cours</span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="border border-gray-300 p-8 text-center">
//           <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//           <p className="text-gray-500">Aucune formation renseignée</p>
//         </div>
//       )}
//     </div>
//   )

//   // Onglet Compétences
//   const renderSkillsTab = () => (
//     <div className="space-y-8">
//       {/* Compétences techniques */}
//       {safeSeekerData.skills && safeSeekerData.skills.length > 0 && (
//         <div className="border border-gray-300 p-6">
//           <h2 className="text-lg font-medium text-black mb-6 flex items-center gap-2">
//             <Award className="w-5 h-5" />
//             Compétences
//           </h2>
//           <div className="flex flex-wrap gap-3">
//             {safeSeekerData.skills.map((skill, index) => (
//               <span
//                 key={index}
//                 className="px-4 py-2 bg-gray-100 text-sm text-gray-700 font-medium"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//           <div className="mt-6 pt-6 border-t border-gray-200">
//             <p className="text-sm text-gray-600">
//               <span className="font-medium">{safeSeekerData.skills.length}</span> compétence(s)
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Secteurs d'intérêt détaillés */}
//       {safeSeekerData.sectors && safeSeekerData.sectors.length > 0 && (
//         <div className="border border-gray-300 p-6">
//           <h2 className="text-lg font-medium text-black mb-6">Secteurs d'expertise</h2>
//           <div className="space-y-4">
//             {safeSeekerData.sectors.map((sector, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 <Heart className="w-4 h-4 text-gray-400" />
//                 <span className="text-sm text-gray-700">{sector}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )

//   // Onglet Préférences
//   const renderPreferencesTab = () => (
//     <div className="space-y-8">
//       {safeSeekerData.job_preferences && Object.keys(safeSeekerData.job_preferences).length > 0 ? (
//         <>
//           <div className="border border-gray-300 p-6">
//             <h2 className="text-lg font-medium text-black mb-6 flex items-center gap-2">
//               <Target className="w-5 h-5" />
//               Préférences d'emploi
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {safeSeekerData.job_preferences.job_type && (
//                 <div className="p-4 border border-gray-200">
//                   <p className="text-xs text-gray-500 mb-1">Type de contrat</p>
//                   <p className="text-lg font-medium text-black">{safeSeekerData.job_preferences.job_type}</p>
//                 </div>
//               )}
              
//               {safeSeekerData.job_preferences.salary_expectation && (
//                 <div className="p-4 border border-gray-200">
//                   <p className="text-xs text-gray-500 mb-1">Salaire attendu</p>
//                   <p className="text-lg font-medium text-black">{safeSeekerData.job_preferences.salary_expectation}</p>
//                 </div>
//               )}
              
//               {safeSeekerData.job_preferences.remote_preference && (
//                 <div className="p-4 border border-gray-200">
//                   <p className="text-xs text-gray-500 mb-1">Mode de travail</p>
//                   <p className="text-lg font-medium text-black">
//                     {safeSeekerData.job_preferences.remote_preference === 'sur_site' && 'Sur site uniquement'}
//                     {safeSeekerData.job_preferences.remote_preference === 'hybride' && 'Hybride'}
//                     {safeSeekerData.job_preferences.remote_preference === 'remote' && '100% Remote'}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="border border-gray-300 p-8 text-center">
//           <Settings className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//           <p className="text-gray-500">Aucune préférence renseignée</p>
//         </div>
//       )}

//       {/* Métadonnées */}
//       <div className="border border-gray-300 p-6">
//         <h2 className="text-lg font-medium text-black mb-6">Informations</h2>
//         <div className="space-y-2">
//           <div className="flex justify-between items-center">
//             <span className="text-sm text-gray-600">Profil créé le</span>
//             <span className="text-sm text-black">{formatDate(profile.created_at)}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-sm text-gray-600">Dernière mise à jour</span>
//             <span className="text-sm text-black">{formatDate(profile.updated_at)}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )

//   return (
//     <div className="min-h-screen bg-white p-4 md:p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Section profil avec photo */}
//         <div className="mb-8 pb-8 border-b border-gray-200">
//           <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
//             {/* Photo de profil */}
//             <div className="relative">
//               <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden border border-gray-300">
//                 {profile.avatar_url ? (
//                   <img
//                     src={profile.avatar_url}
//                     alt={profile.full_name}
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-100 flex items-center justify-center">
//                     <User className="w-12 h-12 md:w-16 md:h-16 text-gray-400" />
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Informations du profil */}
//             <div className="flex-1">
//               <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
//                 <div>
//                   <h1 className="text-2xl md:text-3xl font-normal text-black mb-2">
//                     {profile.full_name || 'Profil'}
//                   </h1>
                  
//                   <div className="space-y-2 mb-4">
//                     {safeSeekerData.headline && (
//                       <p className="text-gray-700 text-lg">{safeSeekerData.headline}</p>
//                     )}
                    
//                     <div className="flex items-center gap-2">
//                       <Mail className="w-4 h-4 text-gray-400" />
//                       <p className="text-gray-600 text-sm">{profile.email}</p>
//                     </div>
                    
//                     {safeSeekerData.location && (
//                       <div className="flex items-center gap-2">
//                         <MapPin className="w-4 h-4 text-gray-400" />
//                         <p className="text-gray-600 text-sm">{safeSeekerData.location}</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   {/* Bouton télécharger CV */}
//                   {safeSeekerData.cv_url && (
//                     <div className="md:self-start">
//                       <button
//                         onClick={handleDownloadCV}
//                         className="px-4 py-2 border border-black text-black text-sm hover:bg-black hover:text-white transition-colors flex items-center gap-2"
//                       >
//                         <Download className="w-4 h-4" />
//                         Télécharger le CV
//                       </button>
//                     </div>
//                   )}
//                   <Link href="/complete-profile">
//                     <span className='px-3 py-2 inline-flex items-center gap-2 text-orange-600'>
//                       Modifier le profil <User className='w-4 h-4'/>
//                     </span>
//                   </Link>
//                 </div>
//               </div>

//               {/* Badges info rapide */}
//               <div className="flex flex-wrap gap-3 mt-4">
//                 {safeSeekerData.experience_years !== undefined && (
//                   <div className="px-3 py-1.5 bg-gray-100 text-sm text-gray-700">
//                     {safeSeekerData.experience_years} {safeSeekerData.experience_years > 1 ? 'années' : 'année'} d'expérience
//                   </div>
//                 )}
                
//                 {safeSeekerData.sectors && safeSeekerData.sectors.length > 0 && (
//                   <div className="px-3 py-1.5 bg-gray-100 text-sm text-gray-700">
//                     {safeSeekerData.sectors.length} secteur{safeSeekerData.sectors.length > 1 ? 's' : ''} d'intérêt
//                   </div>
//                 )}
                
//                 {safeSeekerData.skills && safeSeekerData.skills.length > 0 && (
//                   <div className="px-3 py-1.5 bg-gray-100 text-sm text-gray-700">
//                     {safeSeekerData.skills.length} compétence{safeSeekerData.skills.length > 1 ? 's' : ''}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation par onglets */}
//         <div className="border-b border-gray-200 mb-8">
//           <nav className="flex space-x-8 overflow-x-auto">
//             <button
//               onClick={() => setActiveTab('overview')}
//               className={`py-3 px-1 border-b-2 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'overview' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//             >
//               <div className="flex items-center gap-2">
//                 <User className="w-4 h-4" />
//                 Vue d'ensemble
//               </div>
//             </button>
            
//             <button
//               onClick={() => setActiveTab('experience')}
//               className={`py-3 px-1 border-b-2 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'experience' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//             >
//               <div className="flex items-center gap-2">
//                 <Briefcase className="w-4 h-4" />
//                 Expérience
//               </div>
//             </button>
            
//             <button
//               onClick={() => setActiveTab('education')}
//               className={`py-3 px-1 border-b-2 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'education' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//             >
//               <div className="flex items-center gap-2">
//                 <GraduationCap className="w-4 h-4" />
//                 Formation
//               </div>
//             </button>
            
//             <button
//               onClick={() => setActiveTab('skills')}
//               className={`py-3 px-1 border-b-2 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'skills' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//             >
//               <div className="flex items-center gap-2">
//                 <Award className="w-4 h-4" />
//                 Compétences
//               </div>
//             </button>
            
//             <button
//               onClick={() => setActiveTab('preferences')}
//               className={`py-3 px-1 border-b-2 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'preferences' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
//             >
//               <div className="flex items-center gap-2">
//                 <Settings className="w-4 h-4" />
//                 Préférences
//               </div>
//             </button>
//           </nav>
//         </div>

//         {/* Contenu des onglets */}
//         <div>
//           {activeTab === 'overview' && renderOverviewTab()}
//           {activeTab === 'experience' && renderExperienceTab()}
//           {activeTab === 'education' && renderEducationTab()}
//           {activeTab === 'skills' && renderSkillsTab()}
//           {activeTab === 'preferences' && renderPreferencesTab()}
//         </div>
//       </div>
//     </div>
//   )
// }
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import {
  Search, Filter, Calendar, MapPin, Briefcase, 
  Clock, CheckCircle, XCircle, Eye, ExternalLink,
  FileText, Building, DollarSign, ChevronDown, ChevronUp,
  RefreshCw, Home, Briefcase as BriefcaseIcon, User
} from 'lucide-react'

interface Application {
  id: string
  status: 'pending' | 'reviewed' | 'rejected' | 'accepted'
  created_at: string
  cover_letter: string | null
  job: {
    id: string
    title: string
    location: string | null
    work_type: string
    salary_min: number | null
    salary_max: number | null
    company_name: string
    company_logo: string | null
  }
}

export default function SeekerApplications() {
  const router = useRouter()
  const supabase = createClient()
  
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }

      // Récupérer le profil seeker
      const { data: seeker } = await supabase
        .from('seekers')
        .select('id')
        .eq('profile_id', user.id)
        .single()

      if (!seeker) {
        router.push('/jobs')
        return
      }

      // Récupérer toutes les candidatures avec les détails du job
      const { data } = await supabase
        .from('applications')
        .select(`
          id,
          status,
          created_at,
          cover_letter,
          job_offer:job_offers!inner(
            id,
            title,
            location,
            work_type,
            salary_min,
            salary_max,
            employer:employers!inner(
              company_name,
              company_logo
            )
          )
        `)
        .eq('seeker_id', seeker.id)
        .order('created_at', { ascending: false })

      const formatted: Application[] = (data || []).map((app: any) => ({
        id: app.id,
        status: app.status,
        created_at: app.created_at,
        cover_letter: app.cover_letter,
        job: {
          id: app.job_offer.id,
          title: app.job_offer.title,
          location: app.job_offer.location,
          work_type: app.job_offer.work_type,
          salary_min: app.job_offer.salary_min,
          salary_max: app.job_offer.salary_max,
          company_name: app.job_offer.employer?.company_name || 'Entreprise',
          company_logo: app.job_offer.employer?.company_logo
        }
      }))

      setApplications(formatted)
    } catch (error) {
      console.error('Error fetching applications:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status: Application['status']) => {
    switch (status) {
      case 'accepted': return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'rejected': return <XCircle className="w-5 h-5 text-red-500" />
      case 'reviewed': return <Eye className="w-5 h-5 text-blue-500" />
      default: return <Clock className="w-5 h-5 text-yellow-500" />
    }
  }

  const getStatusLabel = (status: Application['status']) => {
    switch (status) {
      case 'pending': return 'En attente'
      case 'reviewed': return 'Consultée'
      case 'accepted': return 'Acceptée'
      case 'rejected': return 'Refusée'
      default: return status
    }
  }

  const getStatusColor = (status: Application['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-50 text-yellow-700 border-yellow-200'
      case 'reviewed': return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'accepted': return 'bg-green-50 text-green-700 border-green-200'
      case 'rejected': return 'bg-red-50 text-red-700 border-red-200'
      default: return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  const formatWorkType = (type: string) => {
    const types: Record<string, string> = {
      full_time: 'Temps plein',
      part_time: 'Temps partiel',
      contract: 'Contrat',
      remote: 'Remote',
      hybrid: 'Hybride'
    }
    return types[type] || type
  }

  const formatSalary = (min: number | null, max: number | null) => {
    if (!min && !max) return 'Non spécifié'
    if (min && !max) return `À partir de ${min}€`
    if (!min && max) return `Jusqu'à ${max}€`
    return `${min}€ - ${max}€`
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      searchTerm === '' ||
      app.job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.job.company_name.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = 
      statusFilter === 'all' ||
      app.status === statusFilter
    
    return matchesSearch && matchesFilter
  })

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === 'pending').length,
    reviewed: applications.filter(a => a.status === 'reviewed').length,
    accepted: applications.filter(a => a.status === 'accepted').length,
    rejected: applications.filter(a => a.status === 'rejected').length
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* Header avec boutons de navigation */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-normal text-black mb-2">
                Mes candidatures
              </h1>
              <p className="text-gray-600">
                Suivez l'état de vos candidatures
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Bouton profil */}
              <button
                onClick={() => router.push('/dashboard')}
                className="px-4 py-2.5 border border-gray-300 hover:border-gray-400 transition-colors flex items-center gap-2 text-sm"
              >
                <User className="w-4 h-4" />
                Mon profil
              </button>
              
              {/* Bouton voir toutes les offres */}
              <button
                onClick={() => router.push('/jobs')}
                className="px-4 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-colors flex items-center gap-2 text-sm"
              >
                <BriefcaseIcon className="w-4 h-4" />
                Voir toutes les offres
              </button>
              
              {/* Bouton retour accueil */}
              <button
                onClick={() => router.push('/')}
                className="px-4 py-2.5 bg-black text-white hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm"
              >
                <Home className="w-4 h-4" />
                Accueil
              </button>
            </div>
          </div>

          {/* Stats en grille carrée */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 p-5">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stats.total}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-100 p-5">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stats.pending}</div>
              <div className="text-sm text-gray-600">En attente</div>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 p-5">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stats.reviewed}</div>
              <div className="text-sm text-gray-600">Consultées</div>
            </div>
            
            <div className="bg-green-50 border border-green-100 p-5">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stats.accepted}</div>
              <div className="text-sm text-gray-600">Acceptées</div>
            </div>
            
            <div className="bg-red-50 border border-red-100 p-5">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stats.rejected}</div>
              <div className="text-sm text-gray-600">Refusées</div>
            </div>
          </div>

          {/* Filtres */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par poste ou entreprise..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-3 border border-gray-300">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="focus:outline-none bg-transparent text-sm"
                >
                  <option value="all">Tous les statuts</option>
                  <option value="pending">En attente</option>
                  <option value="reviewed">Consultées</option>
                  <option value="accepted">Acceptées</option>
                  <option value="rejected">Refusées</option>
                </select>
              </div>
              
              <button
                onClick={fetchApplications}
                className="px-4 py-3 border border-gray-300 hover:border-gray-400 transition-colors"
                title="Rafraîchir"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Applications List */}
        {filteredApplications.length === 0 ? (
          <div className="border border-gray-300 p-12 text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              {applications.length === 0 
                ? 'Vous n\'avez pas encore postulé'
                : 'Aucune candidature ne correspond aux filtres'}
            </h3>
            <p className="text-gray-600 mb-6">
              {applications.length === 0
                ? 'Commencez par explorer les offres disponibles'
                : 'Essayez de modifier vos critères de recherche'}
            </p>
            <button
              onClick={() => router.push('/jobs')}
              className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Explorer les offres
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredApplications.map((app) => (
              <div key={app.id} className="border border-gray-300">
                {/* En-tête de la carte */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-5 flex-1">
                      {/* Logo entreprise */}
                      <div className="flex-shrink-0">
                        {app.job.company_logo ? (
                          <div className="w-14 h-14 border border-gray-300 overflow-hidden bg-white p-2">
                            <img
                              src={app.job.company_logo}
                              alt={app.job.company_name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-14 h-14 border border-gray-300 bg-gray-50 flex items-center justify-center p-2">
                            <Building className="w-7 h-7 text-gray-400" />
                          </div>
                        )}
                      </div>

                      {/* Infos du job */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-medium text-gray-900 text-xl">
                            {app.job.title}
                          </h3>
                          <span className={`px-3 py-1.5 text-sm rounded ${getStatusColor(app.status)}`}>
                            {getStatusLabel(app.status)}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-3 text-lg">{app.job.company_name}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          {app.job.location && (
                            <span className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {app.job.location}
                            </span>
                          )}
                          <span className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            {formatWorkType(app.job.work_type)}
                          </span>
                          <span className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            {formatSalary(app.job.salary_min, app.job.salary_max)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Icône statut */}
                    <div className="ml-4">
                      {getStatusIcon(app.status)}
                    </div>
                  </div>

                  {/* Date et actions */}
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Postulée le {formatDate(app.created_at)}</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => router.push(`/jobs/${app.job.id}`)}
                        className="text-sm text-gray-700 hover:text-black flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Voir l'offre
                      </button>
                      
                      <button
                        onClick={() => setExpandedId(expandedId === app.id ? null : app.id)}
                        className="text-sm text-gray-700 hover:text-black flex items-center gap-2"
                      >
                        {expandedId === app.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                        {expandedId === app.id ? 'Réduire' : 'Détails'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Détails dépliés */}
                {expandedId === app.id && (
                  <div className="border-t border-gray-300 p-6 bg-gray-50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Colonne gauche - Détails */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3 text-lg">Statut de la candidature</h4>
                          <div className="flex items-center gap-4">
                            <div className={`p-4 rounded ${getStatusColor(app.status)}`}>
                              {getStatusIcon(app.status)}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 text-lg">{getStatusLabel(app.status)}</p>
                              <p className="text-gray-600 mt-1">
                                {app.status === 'pending' && 'Votre candidature est en attente de traitement par le recruteur.'}
                                {app.status === 'reviewed' && 'Le recruteur a consulté votre candidature.'}
                                {app.status === 'accepted' && 'Félicitations ! Votre candidature a été acceptée.'}
                                {app.status === 'rejected' && 'Votre candidature n\'a pas été retenue pour ce poste.'}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Timeline */}
                        <div>
                          <h4 className="font-medium text-gray-900 mb-4 text-lg">Historique</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                              <div className="text-gray-600">
                                Candidature envoyée le {formatDate(app.created_at)}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${
                                app.status === 'pending' ? 'bg-gray-300' : 'bg-green-500'
                              }`}></div>
                              <div className={`${app.status === 'pending' ? 'text-gray-400' : 'text-gray-600'}`}>
                                Candidature reçue par l'entreprise
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Colonne droite - Lettre de motivation */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 text-lg">Votre lettre de motivation</h4>
                        {app.cover_letter ? (
                          <div className="p-5 bg-white border border-gray-300">
                            <p className="text-gray-700 whitespace-pre-line">
                              {app.cover_letter}
                            </p>
                          </div>
                        ) : (
                          <div className="p-5 bg-white border border-gray-300 text-center">
                            <p className="text-gray-500">
                              Aucune lettre de motivation fournie
                            </p>
                          </div>
                        )}
                        
                        {/* Prochaines étapes */}
                        <div className="mt-6 p-4 bg-gray-100 border border-gray-300">
                          <h5 className="font-medium text-gray-900 mb-2">Prochaines étapes</h5>
                          <p className="text-sm text-gray-600">
                            {app.status === 'pending' && 'Le recruteur vous contactera si votre profil l\'intéresse.'}
                            {app.status === 'reviewed' && 'L\'entreprise pourrait vous contacter pour un entretien.'}
                            {app.status === 'accepted' && 'Contactez l\'entreprise pour discuter des modalités.'}
                            {app.status === 'rejected' && 'Continuez à postuler à d\'autres offres qui vous intéressent.'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-300">
                      <button
                        onClick={() => router.push(`/jobs/${app.job.id}`)}
                        className="px-5 py-2.5 bg-black text-white hover:bg-gray-800 transition-colors"
                      >
                        Voir à nouveau l'offre
                      </button>
                      
                      <button
                        onClick={() => router.push('/jobs')}
                        className="px-5 py-2.5 border border-gray-300 hover:border-gray-400 transition-colors"
                      >
                        Chercher d'autres offres
                      </button>
                      
                      <button
                        onClick={() => router.push('/dashboard')}
                        className="px-5 py-2.5 border border-gray-300 hover:border-gray-400 transition-colors"
                      >
                        Voir mon profil
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Footer résumé */}
        {filteredApplications.length > 0 && (
          <div className="mt-10 pt-8 border-t border-gray-300 text-center">
            <p className="text-gray-600">
              {filteredApplications.length} candidature{filteredApplications.length !== 1 ? 's' : ''} affichée{filteredApplications.length !== 1 ? 's' : ''}
              {filteredApplications.length !== applications.length && (
                <span> (sur {applications.length} au total)</span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}