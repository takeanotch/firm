'use client'

import { useSupabase } from '@/providers/supabase-provider'

interface Profile {
  id: string
  email: string
  role: 'admin' | 'employer' | 'seeker'
  full_name: string
  company_name?: string
}

export default function DashboardContent({ profile }: { profile: Profile }) {
  const { signOut } = useSupabase()

  const renderRoleSpecificContent = () => {
    switch (profile.role) {
      case 'admin':
        return (
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="text-lg font-semibold text-purple-800">Espace Administrateur</h3>
            <p className="text-purple-600">Gestion complète de la plateforme</p>
          </div>
        )
      case 'employer':
        return (
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="text-lg font-semibold text-blue-800">Espace Recruteur</h3>
            <p className="text-blue-600">
              Entreprise: {profile.company_name || 'Non spécifié'}
            </p>
          </div>
        )
      case 'seeker':
        return (
          <div className="bg-green-50 p-4 rounded">
            <h3 className="text-lg font-semibold text-green-800">Espace Candidat</h3>
            <p className="text-green-600">Recherchez vos opportunités</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Tableau de bord</h1>
            <p className="text-gray-600">Bienvenue, {profile.full_name || profile.email}</p>
          </div>
          <button
            onClick={() => signOut()}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Déconnexion
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Rôle</h3>
            <p className="text-2xl font-bold capitalize">{profile.role}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-lg">{profile.email}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Statut</h3>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Connecté
            </span>
          </div>
        </div>

        {renderRoleSpecificContent()}

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Actions rapides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.role === 'admin' && (
              <>
                <button className="p-4 border rounded hover:bg-gray-50">
                  Gérer les utilisateurs
                </button>
                <button className="p-4 border rounded hover:bg-gray-50">
                  Voir les statistiques
                </button>
                <button className="p-4 border rounded hover:bg-gray-50">
                  Paramètres système
                </button>
              </>
            )}
            {profile.role === 'employer' && (
              <>
                <button className="p-4 border rounded hover:bg-gray-50">
                  Publier une offre
                </button>
                <button className="p-4 border rounded hover:bg-gray-50">
                  Voir les candidatures
                </button>
                <button className="p-4 border rounded hover:bg-gray-50">
                  Gérer mon entreprise
                </button>
              </>
            )}
            {profile.role === 'seeker' && (
              <>
                <button className="p-4 border rounded hover:bg-gray-50">
                  Rechercher des offres
                </button>
                <button className="p-4 border rounded hover:bg-gray-50">
                  Mon CV
                </button>
                <button className="p-4 border rounded hover:bg-gray-50">
                  Mes candidatures
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}