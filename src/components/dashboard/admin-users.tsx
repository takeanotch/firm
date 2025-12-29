// 'use client'

// import { useState, useEffect } from 'react'
// import { createClient } from '@/lib/supabase/client'
// import { 
//   Search, Filter, Mail, Phone, Building, 
//   Download, Eye, MoreVertical, Trash2, Edit,
//   UserCheck, Users, UserX, ChevronLeft, ChevronRight,
//   FileText, MapPin, Calendar, CheckCircle,
//   XCircle, Shield, UserPlus
// } from 'lucide-react'

// interface User {
//   id: string
//   email: string
//   full_name: string
//   phone: string | null
//   role: 'admin' | 'employer' | 'seeker'
//   created_at: string
//   avatar_url: string | null
//   employer_data?: {
//     company_name: string
//     company_size: string | null
//     industry: string | null
//   }
//   seeker_data?: {
//     headline: string | null
//     location: string | null
//     cv_url: string | null
//     cv_name: string | null
//     experience_years: number | null
//   }
// }

// export function UsersManagement() {
//   const supabase = createClient()
  
//   const [users, setUsers] = useState<User[]>([])
//   const [loading, setLoading] = useState(true)
//   const [searchTerm, setSearchTerm] = useState('')
//   const [roleFilter, setRoleFilter] = useState<'all' | 'seeker' | 'employer' | 'admin'>('all')
//   const [currentPage, setCurrentPage] = useState(1)
//   const [selectedUser, setSelectedUser] = useState<User | null>(null)
//   const [showDetails, setShowDetails] = useState(false)
//   const itemsPerPage = 10

//   useEffect(() => {
//     fetchUsers()
//   }, [])

//   const fetchUsers = async () => {
//     try {
//       setLoading(true)
      
//       // Récupérer tous les profils
//       const { data: profiles } = await supabase
//         .from('profiles')
//         .select('*')
//         .order('created_at', { ascending: false })

//       if (!profiles) {
//         setUsers([])
//         return
//       }

//       // Récupérer les données supplémentaires selon le rôle
//       const usersWithData: User[] = await Promise.all(
//         profiles.map(async (profile) => {
//           let additionalData = {}
          
//           if (profile.role === 'employer') {
//             const { data: employer } = await supabase
//               .from('employers')
//               .select('company_name, company_size, industry')
//               .eq('profile_id', profile.id)
//               .single()
            
//             additionalData = { employer_data: employer }
//           }
          
//           if (profile.role === 'seeker') {
//             const { data: seeker } = await supabase
//               .from('seekers')
//               .select('headline, location, cv_url, cv_name, experience_years')
//               .eq('profile_id', profile.id)
//               .single()
            
//             additionalData = { seeker_data: seeker }
//           }

//           return {
//             id: profile.id,
//             email: profile.email,
//             full_name: profile.full_name || 'Non spécifié',
//             phone: profile.phone,
//             role: profile.role,
//             created_at: profile.created_at,
//             avatar_url: profile.avatar_url,
//             ...additionalData
//           }
//         })
//       )

//       setUsers(usersWithData)
//     } catch (error) {
//       console.error('Error fetching users:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const downloadCV = async (userId: string, fileName: string) => {
//     try {
//       // Récupérer l'URL du CV
//       const { data: seeker } = await supabase
//         .from('seekers')
//         .select('cv_url')
//         .eq('profile_id', userId)
//         .single()

//       if (!seeker?.cv_url) {
//         alert('CV non disponible')
//         return
//       }

//       // Télécharger le fichier
//       const response = await fetch(seeker.cv_url)
//       if (!response.ok) throw new Error('Erreur de téléchargement')
      
//       const blob = await response.blob()
//       const url = window.URL.createObjectURL(blob)
//       const a = document.createElement('a')
//       a.href = url
//       a.download = fileName || 'CV.pdf'
//       document.body.appendChild(a)
//       a.click()
//       window.URL.revokeObjectURL(url)
//       document.body.removeChild(a)

//     } catch (error) {
//       console.error('Error downloading CV:', error)
//       alert('Erreur lors du téléchargement du CV')
//     }
//   }

//   const updateUserRole = async (userId: string, newRole: User['role']) => {
//     try {
//       const { error } = await supabase
//         .from('profiles')
//         .update({ role: newRole })
//         .eq('id', userId)

//       if (error) throw error

//       // Mettre à jour localement
//       setUsers(prev => prev.map(user =>
//         user.id === userId ? { ...user, role: newRole } : user
//       ))

//       alert('Rôle mis à jour avec succès')
//     } catch (error) {
//       console.error('Error updating role:', error)
//       alert('Erreur lors de la mise à jour du rôle')
//     }
//   }

//   const deleteUser = async (userId: string) => {
//     if (!confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
//       return
//     }

//     try {
//       const { error } = await supabase
//         .from('profiles')
//         .delete()
//         .eq('id', userId)

//       if (error) throw error

//       // Mettre à jour localement
//       setUsers(prev => prev.filter(user => user.id !== userId))
      
//       alert('Utilisateur supprimé avec succès')
//     } catch (error) {
//       console.error('Error deleting user:', error)
//       alert('Erreur lors de la suppression')
//     }
//   }

//   const filteredUsers = users.filter(user => {
//     const matchesSearch = 
//       searchTerm === '' ||
//       user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (user.role === 'employer' && user.employer_data?.company_name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       (user.role === 'seeker' && user.seeker_data?.headline?.toLowerCase().includes(searchTerm.toLowerCase()))
    
//     const matchesFilter = 
//       roleFilter === 'all' ||
//       user.role === roleFilter
    
//     return matchesSearch && matchesFilter
//   })

//   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
//   const startIndex = (currentPage - 1) * itemsPerPage
//   const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

//   const getRoleColor = (role: User['role']) => {
//     switch (role) {
//       case 'admin': return 'bg-purple-100 text-purple-800'
//       case 'employer': return 'bg-blue-100 text-blue-800'
//       case 'seeker': return 'bg-green-100 text-green-800'
//       default: return 'bg-gray-100 text-gray-800'
//     }
//   }

//   const getRoleLabel = (role: User['role']) => {
//     switch (role) {
//       case 'admin': return 'Administrateur'
//       case 'employer': return 'Recruteur'
//       case 'seeker': return 'Chercheur'
//       default: return role
//     }
//   }

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString)
//     return date.toLocaleDateString('fr-FR')
//   }

//   return (
//     <div>
//       {/* Header */}
//       <div className="mb-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-normal text-black">Gestion des utilisateurs</h2>
//           <div className="flex items-center gap-2">
//             <button className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors flex items-center gap-2">
//               <UserPlus className="w-4 h-4" />
//               Ajouter un utilisateur
//             </button>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row gap-3 mb-6">
//           <div className="flex-1 relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Rechercher par nom, email, entreprise..."
//               className="w-full pl-10 pr-4 py-2.5 border border-gray-300 focus:outline-none focus:border-black"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
          
//           <div className="flex items-center gap-2">
//             <div className="flex items-center gap-2 px-3 py-2.5 border border-gray-300">
//               <Filter className="w-5 h-5 text-gray-400" />
//               <select
//                 value={roleFilter}
//                 onChange={(e) => setRoleFilter(e.target.value as any)}
//                 className="focus:outline-none bg-transparent"
//               >
//                 <option value="all">Tous les rôles</option>
//                 <option value="seeker">Chercheurs d'emploi</option>
//                 <option value="employer">Recruteurs</option>
//                 <option value="admin">Administrateurs</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Users Table */}
//       {loading ? (
//         <div className="text-center py-12">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
//           <p className="mt-3 text-gray-600">Chargement des utilisateurs...</p>
//         </div>
//       ) : (
//         <>
//           <div className="border border-gray-300">
//             {/* Table Header */}
//             <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-300">
//               <div className="col-span-3">
//                 <span className="text-sm font-medium text-gray-700">Utilisateur</span>
//               </div>
//               <div className="col-span-3">
//                 <span className="text-sm font-medium text-gray-700">Informations</span>
//               </div>
//               <div className="col-span-2">
//                 <span className="text-sm font-medium text-gray-700">Rôle</span>
//               </div>
//               <div className="col-span-2">
//                 <span className="text-sm font-medium text-gray-700">Date d'inscription</span>
//               </div>
//               <div className="col-span-2">
//                 <span className="text-sm font-medium text-gray-700">Actions</span>
//               </div>
//             </div>

//             {/* Table Rows */}
//             {paginatedUsers.length === 0 ? (
//               <div className="p-8 text-center">
//                 <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//                 <p className="text-gray-600">Aucun utilisateur trouvé</p>
//               </div>
//             ) : (
//               <div className="divide-y divide-gray-200">
//                 {paginatedUsers.map((user) => (
//                   <div key={user.id} className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-50 transition-colors">
//                     {/* User Info */}
//                     <div className="col-span-3">
//                       <div className="flex items-center gap-3">
//                         {user.avatar_url ? (
//                           <img
//                             src={user.avatar_url}
//                             alt={user.full_name}
//                             className="w-10 h-10 rounded-full object-cover border"
//                           />
//                         ) : (
//                           <div className="w-10 h-10 rounded-full bg-gray-100 border flex items-center justify-center">
//                             <span className="text-sm font-medium text-gray-600">
//                               {user.full_name.charAt(0)}
//                             </span>
//                           </div>
//                         )}
//                         <div>
//                           <p className="font-medium text-gray-900">{user.full_name}</p>
//                           <p className="text-sm text-gray-600 truncate">{user.email}</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Additional Info */}
//                     <div className="col-span-3">
//                       {user.role === 'employer' && user.employer_data && (
//                         <div>
//                           <p className="text-sm text-gray-900 flex items-center gap-1">
//                             <Building className="w-4 h-4" />
//                             {user.employer_data.company_name}
//                           </p>
//                           {user.employer_data.industry && (
//                             <p className="text-xs text-gray-500 mt-1">
//                               {user.employer_data.industry}
//                             </p>
//                           )}
//                         </div>
//                       )}
                      
//                       {user.role === 'seeker' && user.seeker_data && (
//                         <div>
//                           {user.seeker_data.headline && (
//                             <p className="text-sm text-gray-900">{user.seeker_data.headline}</p>
//                           )}
//                           {user.seeker_data.location && (
//                             <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
//                               <MapPin className="w-3 h-3" />
//                               {user.seeker_data.location}
//                             </p>
//                           )}
//                         </div>
//                       )}
                      
//                       {user.role === 'admin' && (
//                         <p className="text-sm text-gray-500">Administrateur système</p>
//                       )}
//                     </div>

//                     {/* Role */}
//                     <div className="col-span-2">
//                       <span className={`px-3 py-1 text-xs rounded-full ${getRoleColor(user.role)}`}>
//                         {getRoleLabel(user.role)}
//                       </span>
//                     </div>

//                     {/* Date */}
//                     <div className="col-span-2">
//                       <p className="text-sm text-gray-600">
//                         {formatDate(user.created_at)}
//                       </p>
//                     </div>

//                     {/* Actions */}
//                     <div className="col-span-2">
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => {
//                             setSelectedUser(user)
//                             setShowDetails(true)
//                           }}
//                           className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
//                           title="Voir détails"
//                         >
//                           <Eye className="w-4 h-4" />
//                         </button>
                        
//                         {user.role === 'seeker' && user.seeker_data?.cv_url && (
//                           <button
//                             onClick={() => downloadCV(user.id, user.seeker_data?.cv_name || 'CV.pdf')}
//                             className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
//                             title="Télécharger CV"
//                           >
//                             <Download className="w-4 h-4" />
//                           </button>
//                         )}
                        
//                         <button
//                           onClick={() => setSelectedUser(user)}
//                           className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
//                           title="Modifier"
//                         >
//                           <Edit className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-300">
//               <div className="text-sm text-gray-600">
//                 Affichage de {startIndex + 1} à {Math.min(startIndex + itemsPerPage, filteredUsers.length)} sur {filteredUsers.length} utilisateurs
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                   disabled={currentPage === 1}
//                   className="p-2 border border-gray-300 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </button>
                
//                 {Array.from({ length: totalPages }, (_, i) => i + 1)
//                   .filter(page => 
//                     page === 1 || 
//                     page === totalPages || 
//                     Math.abs(page - currentPage) <= 1
//                   )
//                   .map((page, index, array) => (
//                     <div key={page}>
//                       {index > 0 && array[index - 1] !== page - 1 && (
//                         <span className="px-2 text-gray-400">...</span>
//                       )}
//                       <button
//                         onClick={() => setCurrentPage(page)}
//                         className={`px-3 py-1 text-sm ${
//                           currentPage === page
//                             ? 'bg-black text-white'
//                             : 'border border-gray-300 hover:border-gray-400'
//                         }`}
//                       >
//                         {page}
//                       </button>
//                     </div>
//                   ))
//                 }
                
//                 <button
//                   onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                   disabled={currentPage === totalPages}
//                   className="p-2 border border-gray-300 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           )}
//         </>
//       )}

//       {/* User Details Modal */}
//       {showDetails && selectedUser && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-lg font-medium text-gray-900">
//                   Détails de l'utilisateur
//                 </h3>
//                 <button
//                   onClick={() => setShowDetails(false)}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <XCircle className="w-5 h-5" />
//                 </button>
//               </div>

//               <div className="space-y-6">
//                 {/* Basic Info */}
//                 <div>
//                   <h4 className="font-medium text-gray-900 mb-3">Informations de base</h4>
//                   <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50">
//                     <div>
//                       <p className="text-sm text-gray-600">Nom complet</p>
//                       <p className="font-medium">{selectedUser.full_name}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Email</p>
//                       <p className="font-medium">{selectedUser.email}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Téléphone</p>
//                       <p className="font-medium">{selectedUser.phone || 'Non spécifié'}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Rôle</p>
//                       <span className={`px-2 py-1 text-xs rounded ${getRoleColor(selectedUser.role)}`}>
//                         {getRoleLabel(selectedUser.role)}
//                       </span>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Date d'inscription</p>
//                       <p className="font-medium">{formatDate(selectedUser.created_at)}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Role Specific Info */}
//                 {selectedUser.role === 'employer' && selectedUser.employer_data && (
//                   <div>
//                     <h4 className="font-medium text-gray-900 mb-3">Informations entreprise</h4>
//                     <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50">
//                       <div>
//                         <p className="text-sm text-gray-600">Nom de l'entreprise</p>
//                         <p className="font-medium">{selectedUser.employer_data.company_name}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Taille</p>
//                         <p className="font-medium">{selectedUser.employer_data.company_size || 'Non spécifié'}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Secteur</p>
//                         <p className="font-medium">{selectedUser.employer_data.industry || 'Non spécifié'}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {selectedUser.role === 'seeker' && selectedUser.seeker_data && (
//                   <div>
//                     <h4 className="font-medium text-gray-900 mb-3">Informations professionnelles</h4>
//                     <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50">
//                       {selectedUser.seeker_data.headline && (
//                         <div>
//                           <p className="text-sm text-gray-600">Titre professionnel</p>
//                           <p className="font-medium">{selectedUser.seeker_data.headline}</p>
//                         </div>
//                       )}
//                       {selectedUser.seeker_data.location && (
//                         <div>
//                           <p className="text-sm text-gray-600">Localisation</p>
//                           <p className="font-medium">{selectedUser.seeker_data.location}</p>
//                         </div>
//                       )}
//                       {selectedUser.seeker_data.experience_years && (
//                         <div>
//                           <p className="text-sm text-gray-600">Expérience</p>
//                           <p className="font-medium">{selectedUser.seeker_data.experience_years} ans</p>
//                         </div>
//                       )}
//                       {selectedUser.seeker_data.cv_url && (
//                         <div>
//                           <p className="text-sm text-gray-600">CV</p>
//                           <button
//                             onClick={() => downloadCV(selectedUser.id, selectedUser.seeker_data?.cv_name || 'CV.pdf')}
//                             className="text-black hover:text-gray-700 flex items-center gap-1"
//                           >
//                             <Download className="w-4 h-4" />
//                             Télécharger
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 {/* Actions */}
//                 <div className="pt-4 border-t border-gray-300">
//                   <div className="flex items-center gap-3">
//                     <select
//                       value={selectedUser.role}
//                       onChange={(e) => updateUserRole(selectedUser.id, e.target.value as User['role'])}
//                       className="px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
//                     >
//                       <option value="seeker">Chercheur d'emploi</option>
//                       <option value="employer">Recruteur</option>
//                       <option value="admin">Administrateur</option>
//                     </select>
                    
//                     <button
//                       onClick={() => deleteUser(selectedUser.id)}
//                       className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center gap-2"
//                     >
//                       <Trash2 className="w-4 h-4" />
//                       Supprimer
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { 
  Search, Filter, Mail, Phone, Building, 
  Download, Eye, MoreVertical, Trash2, Edit,
  UserCheck, Users, UserX, ChevronLeft, ChevronRight,
  FileText, MapPin, Calendar, CheckCircle,
  XCircle, Shield, UserPlus
} from 'lucide-react'

interface User {
  id: string
  email: string
  full_name: string
  phone: string | null
  role: 'admin' | 'employer' | 'seeker'
  created_at: string
  avatar_url: string | null
  employer_data?: {
    company_name: string
    company_size: string | null
    industry: string | null
  }
  seeker_data?: {
    headline: string | null
    location: string | null
    cv_url: string | null
    cv_name: string | null
    experience_years: number | null
  }
}

export function UsersManagement() {
  const supabase = createClient()
  
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState<'all' | 'seeker' | 'employer' | 'admin'>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [showDetails, setShowDetails] = useState(false)
  const itemsPerPage = 10

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      
      // Récupérer tous les profils
      const { data: profiles } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })

      if (!profiles) {
        setUsers([])
        return
      }

      // Récupérer les données supplémentaires selon le rôle
      const usersWithData: User[] = await Promise.all(
        profiles.map(async (profile) => {
          let additionalData = {}
          
          if (profile.role === 'employer') {
            const { data: employer } = await supabase
              .from('employers')
              .select('company_name, company_size, industry')
              .eq('profile_id', profile.id)
              .single()
            
            additionalData = { employer_data: employer }
          }
          
          if (profile.role === 'seeker') {
            const { data: seeker } = await supabase
              .from('seekers')
              .select('headline, location, cv_url, cv_name, experience_years')
              .eq('profile_id', profile.id)
              .single()
            
            additionalData = { seeker_data: seeker }
          }

          return {
            id: profile.id,
            email: profile.email,
            full_name: profile.full_name || 'Non spécifié',
            phone: profile.phone,
            role: profile.role,
            created_at: profile.created_at,
            avatar_url: profile.avatar_url,
            ...additionalData
          }
        })
      )

      setUsers(usersWithData)
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setLoading(false)
    }
  }

  const downloadCV = async (user: User) => {
    if (!user.seeker_data?.cv_url) {
      alert('CV non disponible')
      return
    }

    try {
      let cvPath = user.seeker_data.cv_url
      
      // Extraire le chemin du fichier depuis l'URL complète si nécessaire
      if (cvPath.includes('supabase.co/storage/v1/object/public/cvs/')) {
        cvPath = cvPath.split('supabase.co/storage/v1/object/public/cvs/')[1]
      }
      
      // Obtenir l'URL publique depuis le bucket 'cvs'
      const { data: { publicUrl } } = supabase.storage
        .from('cvs')
        .getPublicUrl(cvPath)

      // Télécharger le fichier
      const response = await fetch(publicUrl)
      if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`)
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = user.seeker_data.cv_name || `CV_${user.full_name.replace(/\s+/g, '_')}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)

    } catch (error) {
      console.error('Error downloading CV:', error)
      alert('Erreur lors du téléchargement du CV')
    }
  }

  const updateUserRole = async (userId: string, newRole: User['role']) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId)

      if (error) throw error

      // Mettre à jour localement
      setUsers(prev => prev.map(user =>
        user.id === userId ? { ...user, role: newRole } : user
      ))

      alert('Rôle mis à jour avec succès')
    } catch (error) {
      console.error('Error updating role:', error)
      alert('Erreur lors de la mise à jour du rôle')
    }
  }

  const deleteUser = async (userId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      return
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId)

      if (error) throw error

      // Mettre à jour localement
      setUsers(prev => prev.filter(user => user.id !== userId))
      
      alert('Utilisateur supprimé avec succès')
    } catch (error) {
      console.error('Error deleting user:', error)
      alert('Erreur lors de la suppression')
    }
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      searchTerm === '' ||
      user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.role === 'employer' && user.employer_data?.company_name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.role === 'seeker' && user.seeker_data?.headline?.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesFilter = 
      roleFilter === 'all' ||
      user.role === roleFilter
    
    return matchesSearch && matchesFilter
  })

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

  const getRoleColor = (role: User['role']) => {
    switch (role) {
      case 'admin': return 'bg-purple-100 text-purple-800'
      case 'employer': return 'bg-blue-100 text-blue-800'
      case 'seeker': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRoleLabel = (role: User['role']) => {
    switch (role) {
      case 'admin': return 'Administrateur'
      case 'employer': return 'Recruteur'
      case 'seeker': return 'Chercheur'
      default: return role
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR')
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-normal text-black">Gestion des utilisateurs</h2>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Ajouter un utilisateur
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par nom, email, entreprise..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 focus:outline-none focus:border-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2.5 border border-gray-300">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value as any)}
                className="focus:outline-none bg-transparent"
              >
                <option value="all">Tous les rôles</option>
                <option value="seeker">Chercheurs d'emploi</option>
                <option value="employer">Recruteurs</option>
                <option value="admin">Administrateurs</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-3 text-gray-600">Chargement des utilisateurs...</p>
        </div>
      ) : (
        <>
          <div className="border border-gray-300">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-300">
              <div className="col-span-3">
                <span className="text-sm font-medium text-gray-700">Utilisateur</span>
              </div>
              <div className="col-span-3">
                <span className="text-sm font-medium text-gray-700">Informations</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm font-medium text-gray-700">Rôle</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm font-medium text-gray-700">Date d'inscription</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm font-medium text-gray-700">Actions</span>
              </div>
            </div>

            {/* Table Rows */}
            {paginatedUsers.length === 0 ? (
              <div className="p-8 text-center">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">Aucun utilisateur trouvé</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {paginatedUsers.map((user) => (
                  <div key={user.id} className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-50 transition-colors">
                    {/* User Info */}
                    <div className="col-span-3">
                      <div className="flex items-center gap-3">
                        {user.avatar_url ? (
                          <img
                            src={user.avatar_url}
                            alt={user.full_name}
                            className="w-10 h-10 rounded-full object-cover border"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gray-100 border flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-600">
                              {user.full_name.charAt(0)}
                            </span>
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{user.full_name}</p>
                          <p className="text-sm text-gray-600 truncate">{user.email}</p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="col-span-3">
                      {user.role === 'employer' && user.employer_data && (
                        <div>
                          <p className="text-sm text-gray-900 flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {user.employer_data.company_name}
                          </p>
                          {user.employer_data.industry && (
                            <p className="text-xs text-gray-500 mt-1">
                              {user.employer_data.industry}
                            </p>
                          )}
                        </div>
                      )}
                      
                      {user.role === 'seeker' && user.seeker_data && (
                        <div>
                          {user.seeker_data.headline && (
                            <p className="text-sm text-gray-900">{user.seeker_data.headline}</p>
                          )}
                          {user.seeker_data.location && (
                            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3" />
                              {user.seeker_data.location}
                            </p>
                          )}
                        </div>
                      )}
                      
                      {user.role === 'admin' && (
                        <p className="text-sm text-gray-500">Administrateur système</p>
                      )}
                    </div>

                    {/* Role */}
                    <div className="col-span-2">
                      <span className={`px-3 py-1 text-xs rounded-full ${getRoleColor(user.role)}`}>
                        {getRoleLabel(user.role)}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="col-span-2">
                      <p className="text-sm text-gray-600">
                        {formatDate(user.created_at)}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedUser(user)
                            setShowDetails(true)
                          }}
                          className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                          title="Voir détails"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        
                        {user.role === 'seeker' && user.seeker_data?.cv_url && (
                          <button
                            onClick={() => downloadCV(user)}
                            className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                            title="Télécharger CV"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        )}
                        
                        <button
                          onClick={() => setSelectedUser(user)}
                          className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                          title="Modifier"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-300">
              <div className="text-sm text-gray-600">
                Affichage de {startIndex + 1} à {Math.min(startIndex + itemsPerPage, filteredUsers.length)} sur {filteredUsers.length} utilisateurs
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-300 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(page => 
                    page === 1 || 
                    page === totalPages || 
                    Math.abs(page - currentPage) <= 1
                  )
                  .map((page, index, array) => (
                    <div key={page}>
                      {index > 0 && array[index - 1] !== page - 1 && (
                        <span className="px-2 text-gray-400">...</span>
                      )}
                      <button
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 text-sm ${
                          currentPage === page
                            ? 'bg-black text-white'
                            : 'border border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {page}
                      </button>
                    </div>
                  ))
                }
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-300 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* User Details Modal */}
      {showDetails && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Détails de l'utilisateur
                </h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Basic Info */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Informations de base</h4>
                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50">
                    <div>
                      <p className="text-sm text-gray-600">Nom complet</p>
                      <p className="font-medium">{selectedUser.full_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{selectedUser.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Téléphone</p>
                      <p className="font-medium">{selectedUser.phone || 'Non spécifié'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rôle</p>
                      <span className={`px-2 py-1 text-xs rounded ${getRoleColor(selectedUser.role)}`}>
                        {getRoleLabel(selectedUser.role)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Date d'inscription</p>
                      <p className="font-medium">{formatDate(selectedUser.created_at)}</p>
                    </div>
                  </div>
                </div>

                {/* Role Specific Info */}
                {selectedUser.role === 'employer' && selectedUser.employer_data && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Informations entreprise</h4>
                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50">
                      <div>
                        <p className="text-sm text-gray-600">Nom de l'entreprise</p>
                        <p className="font-medium">{selectedUser.employer_data.company_name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Taille</p>
                        <p className="font-medium">{selectedUser.employer_data.company_size || 'Non spécifié'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Secteur</p>
                        <p className="font-medium">{selectedUser.employer_data.industry || 'Non spécifié'}</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedUser.role === 'seeker' && selectedUser.seeker_data && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Informations professionnelles</h4>
                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50">
                      {selectedUser.seeker_data.headline && (
                        <div>
                          <p className="text-sm text-gray-600">Titre professionnel</p>
                          <p className="font-medium">{selectedUser.seeker_data.headline}</p>
                        </div>
                      )}
                      {selectedUser.seeker_data.location && (
                        <div>
                          <p className="text-sm text-gray-600">Localisation</p>
                          <p className="font-medium">{selectedUser.seeker_data.location}</p>
                        </div>
                      )}
                      {selectedUser.seeker_data.experience_years && (
                        <div>
                          <p className="text-sm text-gray-600">Expérience</p>
                          <p className="font-medium">{selectedUser.seeker_data.experience_years} ans</p>
                        </div>
                      )}
                      {selectedUser.seeker_data.cv_url && (
                        <div>
                          <p className="text-sm text-gray-600">CV</p>
                          <button
                            onClick={() => downloadCV(selectedUser)}
                            className="text-black hover:text-gray-700 flex items-center gap-1"
                          >
                            <Download className="w-4 h-4" />
                            Télécharger
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="pt-4 border-t border-gray-300">
                  <div className="flex items-center gap-3">
                    <select
                      value={selectedUser.role}
                      onChange={(e) => updateUserRole(selectedUser.id, e.target.value as User['role'])}
                      className="px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
                    >
                      <option value="seeker">Chercheur d'emploi</option>
                      <option value="employer">Recruteur</option>
                      <option value="admin">Administrateur</option>
                    </select>
                    
                    <button
                      onClick={() => deleteUser(selectedUser.id)}
                      className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}