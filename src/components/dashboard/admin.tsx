// 'use client'

// import { Shield, Users, BarChart3, Settings, FileText, AlertCircle, CheckCircle, Clock } from 'lucide-react'
// import { useSupabase } from '@/providers/supabase-provider'
// import { useState } from 'react'

// interface DashboardAdminProps {
//   profile: {
//     id: string
//     email: string
//     role: 'admin'
//     full_name: string
//   }
// }

// export default function DashboardAdmin({ profile }: DashboardAdminProps) {
//   const { signOut } = useSupabase()
//   const [activeTab, setActiveTab] = useState('overview')

//   const stats = [
//     { label: 'Utilisateurs', value: '1,234', change: '+12%', icon: Users, color: 'bg-purple-500' },
//     { label: 'Offres actives', value: '89', change: '+5%', icon: FileText, color: 'bg-blue-500' },
//     { label: 'Candidatures', value: '2,543', change: '+23%', icon: BarChart3, color: 'bg-green-500' },
//     { label: 'Taux de réponse', value: '87%', change: '+2%', icon: CheckCircle, color: 'bg-amber-500' },
//   ]

//   const quickActions = [
//     { label: 'Gérer utilisateurs', icon: Users, href: '/admin/users' },
//     { label: 'Modération contenus', icon: AlertCircle, href: '/admin/moderation' },
//     { label: 'Statistiques avancées', icon: BarChart3, href: '/admin/analytics' },
//     { label: 'Paramètres système', icon: Settings, href: '/admin/settings' },
//   ]

//   const recentActivities = [
//     { user: 'Alexandre Dupont', action: 'a créé un compte', time: '2 min', status: 'success' },
//     { user: 'Recrutement Tech', action: 'a publié une offre', time: '15 min', status: 'info' },
//     { user: 'Marie Laurent', action: 'a signalé un contenu', time: '1h', status: 'warning' },
//     { user: 'System', action: 'Maintenance planifiée', time: 'Demain', status: 'info' },
//   ]

//   return (
//     <div className="space-y-8">
//       {/* STATS GRID - CARRÉ */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {stats.map((stat, index) => (
//           <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
//             <div className="flex items-center justify-between mb-4">
//               <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
//                 <stat.icon className={`w-6 h-6 ${
//                   stat.color === 'bg-purple-500' ? 'text-purple-600' :
//                   stat.color === 'bg-blue-500' ? 'text-blue-600' :
//                   stat.color === 'bg-green-500' ? 'text-green-600' : 'text-amber-600'
//                 }`} />
//               </div>
//               <span className={`text-sm font-medium px-2 py-1 rounded ${
//                 stat.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//               }`}>
//                 {stat.change}
//               </span>
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
//             <p className="text-sm text-gray-500">{stat.label}</p>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* QUICK ACTIONS */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* QUICK ACTIONS GRID */}
//           <div className="bg-white border border-gray-200 rounded-lg p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-lg font-semibold text-gray-900">Actions rapides</h2>
//               <Shield className="w-5 h-5 text-gray-400" />
//             </div>
//             <div className="grid grid-cols-2 gap-3">
//               {quickActions.map((action, index) => (
//                 <a
//                   key={index}
//                   href={action.href}
//                   className="group border border-gray-200 rounded-lg p-4 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white">
//                       <action.icon className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
//                     </div>
//                     <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
//                       {action.label}
//                     </span>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* SYSTEM STATUS */}
//           <div className="bg-white border border-gray-200 rounded-lg p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-6">État du système</h2>
//             <div className="space-y-4">
//               {[
//                 { label: 'Serveur API', status: 'operational', uptime: '99.9%' },
//                 { label: 'Base de données', status: 'operational', uptime: '99.8%' },
//                 { label: 'Authentification', status: 'degraded', uptime: '98.5%' },
//                 { label: 'Stockage fichiers', status: 'operational', uptime: '99.7%' },
//               ].map((service, index) => (
//                 <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
//                   <div className="flex items-center gap-3">
//                     <div className={`w-2 h-2 rounded-full ${
//                       service.status === 'operational' ? 'bg-green-500' : 'bg-amber-500'
//                     }`} />
//                     <span className="text-sm font-medium text-gray-700">{service.label}</span>
//                   </div>
//                   <div className="text-right">
//                     <span className={`text-xs px-2 py-1 rounded ${
//                       service.status === 'operational' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
//                     }`}>
//                       {service.status === 'operational' ? 'Opérationnel' : 'Dégradé'}
//                     </span>
//                     <p className="text-xs text-gray-500 mt-1">{service.uptime} uptime</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ACTIVITÉ RÉCENTE */}
//         <div className="space-y-6">
//           <div className="bg-white border border-gray-200 rounded-lg p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-lg font-semibold text-gray-900">Activité récente</h2>
//               <Clock className="w-5 h-5 text-gray-400" />
//             </div>
//             <div className="space-y-4">
//               {recentActivities.map((activity, index) => (
//                 <div key={index} className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg">
//                   <div className={`p-2 rounded ${
//                     activity.status === 'success' ? 'bg-green-50' :
//                     activity.status === 'warning' ? 'bg-amber-50' : 'bg-blue-50'
//                   }`}>
//                     {activity.status === 'success' ? <CheckCircle className="w-4 h-4 text-green-600" /> :
//                      activity.status === 'warning' ? <AlertCircle className="w-4 h-4 text-amber-600" /> :
//                      <Clock className="w-4 h-4 text-blue-600" />}
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-sm font-medium text-gray-900">{activity.user}</p>
//                     <p className="text-sm text-gray-500">{activity.action}</p>
//                     <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ADMIN ACTIONS */}
//           <div className="bg-white border border-gray-200 rounded-lg p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions administratives</h2>
//             <div className="space-y-3">
//               <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all">
//                 <p className="text-sm font-medium text-gray-900">Générer rapport</p>
//                 <p className="text-xs text-gray-500">Export des données mensuelles</p>
//               </button>
//               <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all">
//                 <p className="text-sm font-medium text-gray-900">Backup système</p>
//                 <p className="text-xs text-gray-500">Sauvegarde complète</p>
//               </button>
//               <button
//                 onClick={() => signOut()}
//                 className="w-full text-left px-4 py-3 border border-red-200 text-red-700 rounded-lg hover:bg-red-50 transition-all"
//               >
//                 <p className="text-sm font-medium">Déconnexion</p>
//                 <p className="text-xs text-red-500">Quitter l'administration</p>
//               </button>
//             </div>
//           </div>
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
  Users, Briefcase, FileText, UserPlus, Shield, 
  Download, Search, Filter, Mail, Phone, Building,
  Eye, MoreVertical, Trash2, Edit, UserCheck,
  ChevronLeft, ChevronRight, Calendar, MapPin,
  BarChart3, TrendingUp, Activity
} from 'lucide-react'
import { UsersManagement } from './admin-users'
import { JobsManagement } from './admin-jobs'
interface UserStats {
  total: number
  seekers: number
  employers: number
  admins: number
  activeToday: number
}

interface RecentActivity {
  id: string
  type: 'user_created' | 'job_posted' | 'application_submitted'
  user_name: string
  user_role: string
  description: string
  created_at: string
}

interface JobStats {
  total: number
  active: number
  applications: number
  avg_applications: number
}

export default function DashboardAdmin() {
  const router = useRouter()
  const supabase = createClient()
  
  const [loading, setLoading] = useState(true)
  const [userStats, setUserStats] = useState<UserStats>({
    total: 0,
    seekers: 0,
    employers: 0,
    admins: 0,
    activeToday: 0
  })
  
  const [jobStats, setJobStats] = useState<JobStats>({
    total: 0,
    active: 0,
    applications: 0,
    avg_applications: 0
  })
  
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'jobs'>('overview')

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      
      // Récupérer les statistiques utilisateurs
      const { data: profiles } = await supabase
        .from('profiles')
        .select('role, created_at')
      
      if (profiles) {
        const today = new Date().toISOString().split('T')[0]
        const activeToday = profiles.filter(p => 
          new Date(p.created_at).toISOString().split('T')[0] === today
        ).length
        
        setUserStats({
          total: profiles.length,
          seekers: profiles.filter(p => p.role === 'seeker').length,
          employers: profiles.filter(p => p.role === 'employer').length,
          admins: profiles.filter(p => p.role === 'admin').length,
          activeToday
        })
      }

      // Récupérer les statistiques jobs
      const { data: jobs } = await supabase
        .from('job_offers')
        .select(`
          *,
          applications!left (
            id
          )
        `)

      if (jobs) {
        const totalApplications = jobs.reduce((acc, job) => 
          acc + (job.applications?.length || 0), 0
        )
        
        setJobStats({
          total: jobs.length,
          active: jobs.filter(j => j.is_active).length,
          applications: totalApplications,
          avg_applications: jobs.length > 0 ? Math.round(totalApplications / jobs.length) : 0
        })
      }

      // Récupérer l'activité récente
      fetchRecentActivity()

    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchRecentActivity = async () => {
    try {
      // Récupérer les derniers profils créés
      const { data: recentProfiles } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5)

      // Récupérer les derniers jobs créés
      const { data: recentJobs } = await supabase
        .from('job_offers')
        .select('*, employers(profiles(full_name))')
        .order('created_at', { ascending: false })
        .limit(5)

      // Récupérer les dernières candidatures
      const { data: recentApplications } = await supabase
        .from('applications')
        .select('*, seekers(profiles(full_name))')
        .order('created_at', { ascending: false })
        .limit(5)

      const activities: RecentActivity[] = []

      // Ajouter les nouveaux utilisateurs
      recentProfiles?.forEach(profile => {
        activities.push({
          id: profile.id,
          type: 'user_created',
          user_name: profile.full_name || 'Utilisateur',
          user_role: profile.role,
          description: `${profile.role === 'seeker' ? 'Chercheur d\'emploi' : 
                        profile.role === 'employer' ? 'Recruteur' : 'Administrateur'} inscrit`,
          created_at: profile.created_at
        })
      })

      // Ajouter les nouveaux jobs
      recentJobs?.forEach(job => {
        activities.push({
          id: job.id,
          type: 'job_posted',
          user_name: job.employers?.profiles?.full_name || 'Recruteur',
          user_role: 'employer',
          description: `Nouvelle offre: "${job.title}"`,
          created_at: job.created_at
        })
      })

      // Ajouter les nouvelles candidatures
      recentApplications?.forEach(app => {
        activities.push({
          id: app.id,
          type: 'application_submitted',
          user_name: app.seekers?.profiles?.full_name || 'Candidat',
          user_role: 'seeker',
          description: 'Nouvelle candidature soumise',
          created_at: app.created_at
        })
      })

      // Trier par date et limiter
      activities.sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      ).slice(0, 10)

      setRecentActivity(activities.slice(0, 10))

    } catch (error) {
      console.error('Error fetching recent activity:', error)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getActivityIcon = (type: RecentActivity['type']) => {
    switch (type) {
      case 'user_created': return <UserPlus className="w-4 h-4 text-blue-500" />
      case 'job_posted': return <Briefcase className="w-4 h-4 text-green-500" />
      case 'application_submitted': return <FileText className="w-4 h-4 text-purple-500" />
      default: return <Activity className="w-4 h-4 text-gray-500" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white mt-2">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-normal text-black mb-2">
                Administration
              </h1>
              <p className="text-gray-600">
                Gestion complète de la plateforme
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium">Administrateur</p>
                <p className="text-xs text-gray-500">Panel de contrôle</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Vue d'ensemble
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'users' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Utilisateurs
              </button>
              <button
                onClick={() => setActiveTab('jobs')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'jobs' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Offres d'emploi
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {activeTab === 'overview' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              <div className="border border-gray-300 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{userStats.total}</p>
                    <p className="text-sm text-gray-600">Utilisateurs total</p>
                  </div>
                  <div className="p-2 bg-blue-50 rounded">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-300 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{userStats.seekers}</p>
                    <p className="text-sm text-gray-600">Chercheurs d'emploi</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <UserCheck className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-300 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{userStats.employers}</p>
                    <p className="text-sm text-gray-600">Recruteurs</p>
                  </div>
                  <div className="p-2 bg-orange-50 rounded">
                    <Building className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-300 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{jobStats.total}</p>
                    <p className="text-sm text-gray-600">Offres publiées</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-300 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{jobStats.applications}</p>
                    <p className="text-sm text-gray-600">Candidatures</p>
                  </div>
                  <div className="p-2 bg-red-50 rounded">
                    <FileText className="w-5 h-5 text-red-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Charts/Graphs Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-300 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">Activité des utilisateurs</h3>
                  <BarChart3 className="w-5 h-5 text-gray-400" />
                </div>
                <div className="h-64 bg-gray-50 flex items-center justify-center">
                  <p className="text-gray-500">Graphique d'activité (à implémenter)</p>
                </div>
              </div>
              
              <div className="border border-gray-300 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">Tendances des offres</h3>
                  <TrendingUp className="w-5 h-5 text-gray-400" />
                </div>
                <div className="h-64 bg-gray-50 flex items-center justify-center">
                  <p className="text-gray-500">Graphique des tendances (à implémenter)</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="border border-gray-300">
              <div className="p-5 border-b border-gray-300">
                <h3 className="font-medium text-gray-900">Activité récente</h3>
              </div>
              
              <div className="divide-y divide-gray-200">
                {recentActivity.length === 0 ? (
                  <div className="p-6 text-center">
                    <Activity className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-600">Aucune activité récente</p>
                  </div>
                ) : (
                  recentActivity.map((activity) => (
                    <div key={activity.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-gray-900">{activity.user_name}</p>
                            <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded">
                              {activity.user_role}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{activity.description}</p>
                        </div>
                        <span className="text-xs text-gray-500">
                          {formatDate(activity.created_at)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}

        {activeTab === 'users' && (
          <UsersManagement />
        )}

        {activeTab === 'jobs' && (
          <JobsManagement />
        )}
      </div>
    </div>
  )
}