'use client'

import { Shield, Users, BarChart3, Settings, FileText, AlertCircle, CheckCircle, Clock } from 'lucide-react'
import { useSupabase } from '@/providers/supabase-provider'
import { useState } from 'react'

interface DashboardAdminProps {
  profile: {
    id: string
    email: string
    role: 'admin'
    full_name: string
  }
}

export default function DashboardAdmin({ profile }: DashboardAdminProps) {
  const { signOut } = useSupabase()
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Utilisateurs', value: '1,234', change: '+12%', icon: Users, color: 'bg-purple-500' },
    { label: 'Offres actives', value: '89', change: '+5%', icon: FileText, color: 'bg-blue-500' },
    { label: 'Candidatures', value: '2,543', change: '+23%', icon: BarChart3, color: 'bg-green-500' },
    { label: 'Taux de réponse', value: '87%', change: '+2%', icon: CheckCircle, color: 'bg-amber-500' },
  ]

  const quickActions = [
    { label: 'Gérer utilisateurs', icon: Users, href: '/admin/users' },
    { label: 'Modération contenus', icon: AlertCircle, href: '/admin/moderation' },
    { label: 'Statistiques avancées', icon: BarChart3, href: '/admin/analytics' },
    { label: 'Paramètres système', icon: Settings, href: '/admin/settings' },
  ]

  const recentActivities = [
    { user: 'Alexandre Dupont', action: 'a créé un compte', time: '2 min', status: 'success' },
    { user: 'Recrutement Tech', action: 'a publié une offre', time: '15 min', status: 'info' },
    { user: 'Marie Laurent', action: 'a signalé un contenu', time: '1h', status: 'warning' },
    { user: 'System', action: 'Maintenance planifiée', time: 'Demain', status: 'info' },
  ]

  return (
    <div className="space-y-8">
      {/* STATS GRID - CARRÉ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                <stat.icon className={`w-6 h-6 ${
                  stat.color === 'bg-purple-500' ? 'text-purple-600' :
                  stat.color === 'bg-blue-500' ? 'text-blue-600' :
                  stat.color === 'bg-green-500' ? 'text-green-600' : 'text-amber-600'
                }`} />
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded ${
                stat.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* QUICK ACTIONS */}
        <div className="lg:col-span-2 space-y-6">
          {/* QUICK ACTIONS GRID */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Actions rapides</h2>
              <Shield className="w-5 h-5 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.href}
                  className="group border border-gray-200 rounded-lg p-4 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white">
                      <action.icon className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                      {action.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* SYSTEM STATUS */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">État du système</h2>
            <div className="space-y-4">
              {[
                { label: 'Serveur API', status: 'operational', uptime: '99.9%' },
                { label: 'Base de données', status: 'operational', uptime: '99.8%' },
                { label: 'Authentification', status: 'degraded', uptime: '98.5%' },
                { label: 'Stockage fichiers', status: 'operational', uptime: '99.7%' },
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      service.status === 'operational' ? 'bg-green-500' : 'bg-amber-500'
                    }`} />
                    <span className="text-sm font-medium text-gray-700">{service.label}</span>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded ${
                      service.status === 'operational' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {service.status === 'operational' ? 'Opérationnel' : 'Dégradé'}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{service.uptime} uptime</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ACTIVITÉ RÉCENTE */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Activité récente</h2>
              <Clock className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg">
                  <div className={`p-2 rounded ${
                    activity.status === 'success' ? 'bg-green-50' :
                    activity.status === 'warning' ? 'bg-amber-50' : 'bg-blue-50'
                  }`}>
                    {activity.status === 'success' ? <CheckCircle className="w-4 h-4 text-green-600" /> :
                     activity.status === 'warning' ? <AlertCircle className="w-4 h-4 text-amber-600" /> :
                     <Clock className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                    <p className="text-sm text-gray-500">{activity.action}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ADMIN ACTIONS */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions administratives</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all">
                <p className="text-sm font-medium text-gray-900">Générer rapport</p>
                <p className="text-xs text-gray-500">Export des données mensuelles</p>
              </button>
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all">
                <p className="text-sm font-medium text-gray-900">Backup système</p>
                <p className="text-xs text-gray-500">Sauvegarde complète</p>
              </button>
              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-3 border border-red-200 text-red-700 rounded-lg hover:bg-red-50 transition-all"
              >
                <p className="text-sm font-medium">Déconnexion</p>
                <p className="text-xs text-red-500">Quitter l'administration</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}