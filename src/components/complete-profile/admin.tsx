'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { User, Phone, Upload, Mail, X, Check } from 'lucide-react'

export default function CompleteProfileAdmin() {
  const router = useRouter()
  const supabase = createClient()
  
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Données pour la table profiles
  const [profileData, setProfileData] = useState({
    full_name: '',
    phone: '',
    email: '',
    avatar_url: '/avatars/default.png',
  })
  
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null)

  // Récupérer les infos existantes
  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        // Récupérer le profil de base
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()
        
        if (profile) {
          setProfileData({
            full_name: profile.full_name || '',
            phone: profile.phone || '',
            email: profile.email || user.email || '',
            avatar_url: profile.avatar_url || '/avatars/default.png',
          })
        } else {
          // Si pas de profil, utiliser l'email de l'utilisateur auth
          setProfileData(prev => ({
            ...prev,
            email: user.email || ''
          }))
        }
      }
    }
    
    fetchProfile()
  }, [supabase])
  
  const handleAvatarUpload = async (file: File) => {
    try {
      setUploading(true)
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) throw new Error('Non authentifié')
      
      const fileExt = file.name.split('.').pop()
      const fileName = `${user.id}/${Date.now()}.${fileExt}`
      const filePath = `${fileName}`
      
      // Supprimer l'ancien avatar s'il existe
      const oldAvatar = profileData.avatar_url?.split('/').pop()
      if (oldAvatar && oldAvatar !== 'default.png') {
        await supabase.storage
          .from('avatars')
          .remove([`${user.id}/${oldAvatar}`])
      }
      
      // Uploader le nouveau
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        })
      
      if (uploadError) throw uploadError
      
      // Mettre à jour le formulaire
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath)
      
      setProfileData(prev => ({ ...prev, avatar_url: publicUrl }))
      setPreviewAvatar(URL.createObjectURL(file))
      
    } catch (error: any) {
      setError(error.message || 'Erreur lors du téléchargement')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) throw new Error('Non authentifié')
      
      // Validation
      if (!profileData.full_name.trim()) {
        throw new Error('Le nom complet est requis')
      }
      
      if (!profileData.phone.trim()) {
        throw new Error('Le téléphone est requis')
      }
      
      // Mettre à jour le profil
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          email: profileData.email,
          full_name: profileData.full_name,
          phone: profileData.phone,
          avatar_url: profileData.avatar_url,
          role: 'admin', // Rôle fixe pour admin
          updated_at: new Date().toISOString()
        })
      
      if (profileError) {
        console.error('Profile error:', profileError)
        throw new Error(`Erreur: ${profileError.message}`)
      }
      
      // Rediriger vers le dashboard admin
      router.push('/dashboard')
      router.refresh()
      
    } catch (error: any) {
      console.error('Submit error:', error)
      setError(error.message || 'Erreur lors de la mise à jour')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-start justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <h1 className="text-2xl font-normal text-black mb-2">
            Compléter votre profil Administrateur
          </h1>
          <p className="text-gray-600 text-sm">
            Remplissez vos informations personnelles pour accéder au panel d'administration
          </p>
          <div className="mt-2">
            <span className="inline-block px-3 py-1 text-xs bg-blue-100 text-blue-800">
              Administrateur
            </span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Section Avatar */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-24 h-24 overflow-hidden border border-gray-300">
                  {previewAvatar || profileData.avatar_url ? (
                    <img
                      src={previewAvatar || profileData.avatar_url}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <User className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                </div>
                
                <label className="absolute bottom-0 right-0 bg-black text-white p-2 cursor-pointer hover:bg-gray-800 transition-colors text-xs">
                  <Upload className="w-4 h-4" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        handleAvatarUpload(e.target.files[0])
                      }
                    }}
                    disabled={uploading}
                  />
                </label>
              </div>
              
              <div className="text-sm text-gray-500">
                <p>Photo de profil</p>
                <p className="text-xs">JPG, PNG, max 2MB</p>
              </div>
            </div>
            
            {/* Formulaire */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={profileData.full_name}
                  onChange={(e) => setProfileData(prev => ({ ...prev, full_name: e.target.value }))}
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <div className="flex items-center gap-3 p-3 border border-gray-300">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                    className="flex-1 focus:outline-none"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <div className="flex items-center gap-3 p-3 border border-gray-300">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                    className="flex-1 focus:outline-none"
                    placeholder="+33612345678"
                    required
                  />
                </div>
              </div>
            </div>
            
            {error && (
              <div className="p-4 border border-red-300 bg-red-50">
                <div className="flex items-center gap-2 text-red-700">
                  <X className="w-5 h-5" />
                  <p>{error}</p>
                </div>
              </div>
            )}
            
            {/* Boutons */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.push('/dashboard')}
                className="px-6 py-3 border border-gray-300 hover:border-black transition-colors"
              >
                Passer pour l'instant
              </button>
              
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                {loading ? (
                  'Enregistrement...'
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    Enregistrer et continuer
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}