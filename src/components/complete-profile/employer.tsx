'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { User, Phone, Building, Upload, Mail, X, Check, Globe, Users, Briefcase, FileText } from 'lucide-react'

export default function CompleteProfileEmployer() {
  const router = useRouter()
  const supabase = createClient()
  
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'personal' | 'company'>('personal')
  
  // Données pour la table profiles
  const [profileData, setProfileData] = useState({
    full_name: '',
    phone: '',
    email: '',
    avatar_url: '/avatars/default.png',
  })
  
  // Données spécifiques aux employeurs
  const [employerData, setEmployerData] = useState({
    company_name: '',
    company_size: '',
    industry: '',
    website: '',
    description: '',
    company_logo: '',
  })
  
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null)
  const [previewLogo, setPreviewLogo] = useState<string | null>(null)

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
          
          // Récupérer les données employeur
          const { data: employer } = await supabase
            .from('employers')
            .select('*')
            .eq('profile_id', user.id)
            .single()
          
          if (employer) {
            setEmployerData({
              company_name: employer.company_name || '',
              company_size: employer.company_size || '',
              industry: employer.industry || '',
              website: employer.website || '',
              description: employer.description || '',
              company_logo: employer.company_logo || '',
            })
          }
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
      const fileName = `${user.id}/avatar/${Date.now()}.${fileExt}`
      const filePath = `${fileName}`
      
      // Supprimer l'ancien avatar s'il existe
      const oldAvatar = profileData.avatar_url?.split('/').pop()
      if (oldAvatar && oldAvatar !== 'default.png') {
        await supabase.storage
          .from('avatars')
          .remove([`${user.id}/avatar/${oldAvatar}`])
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

  const handleLogoUpload = async (file: File) => {
    try {
      setUploading(true)
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) throw new Error('Non authentifié')
      
      const fileExt = file.name.split('.').pop()
      const fileName = `${user.id}/logo/${Date.now()}.${fileExt}`
      const filePath = `${fileName}`
      
      // Supprimer l'ancien logo s'il existe
      const oldLogo = employerData.company_logo?.split('/').pop()
      if (oldLogo) {
        await supabase.storage
          .from('avatars')
          .remove([`${user.id}/logo/${oldLogo}`])
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
      
      setEmployerData(prev => ({ ...prev, company_logo: publicUrl }))
      setPreviewLogo(URL.createObjectURL(file))
      
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
      
      if (!employerData.company_name.trim()) {
        throw new Error('Le nom de l\'entreprise est requis')
      }
      
      // Mettre à jour le profil de base
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          email: profileData.email,
          full_name: profileData.full_name,
          phone: profileData.phone,
          avatar_url: profileData.avatar_url,
          role: 'employer',
          updated_at: new Date().toISOString()
        })
      
      if (profileError) {
        console.error('Profile error:', profileError)
        throw new Error(`Erreur profil: ${profileError.message}`)
      }
      
      // Mettre à jour les données employeur
      const { error: employerError } = await supabase
        .from('employers')
        .upsert({
          profile_id: user.id,
          company_name: employerData.company_name,
          company_size: employerData.company_size || null,
          industry: employerData.industry || null,
          website: employerData.website || null,
          description: employerData.description || null,
          company_logo: employerData.company_logo || null,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'profile_id'
        })
      
      if (employerError) {
        console.error('Employer error:', employerError)
        throw new Error(`Erreur employeur: ${employerError.message}`)
      }
      
      // Rediriger vers le dashboard
      router.push('/dashboard')
      router.refresh()
      
    } catch (error: any) {
      console.error('Submit error:', error)
      setError(error.message || 'Erreur lors de la mise à jour')
    } finally {
      setLoading(false)
    }
  }

  const renderPersonalTab = () => (
    <div className="space-y-6">
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
    </div>
  )

  const renderCompanyTab = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-24 h-24 overflow-hidden border border-gray-300 bg-white">
            {previewLogo || employerData.company_logo ? (
              <img
                src={previewLogo || employerData.company_logo}
                alt="Logo"
                className="w-full h-full object-contain p-2"
              />
            ) : (
              <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                <Building className="w-12 h-12 text-gray-400" />
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
                  handleLogoUpload(e.target.files[0])
                }
              }}
              disabled={uploading}
            />
          </label>
        </div>
        
        <div className="text-sm text-gray-500">
          <p>Logo de l'entreprise</p>
          <p className="text-xs">JPG, PNG, max 2MB</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom de l'entreprise *
          </label>
          <div className="flex items-center gap-3 p-3 border border-gray-300">
            <Building className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={employerData.company_name}
              onChange={(e) => setEmployerData(prev => ({ ...prev, company_name: e.target.value }))}
              className="flex-1 focus:outline-none"
              placeholder="Nom de votre entreprise"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Site web
          </label>
          <div className="flex items-center gap-3 p-3 border border-gray-300">
            <Globe className="w-5 h-5 text-gray-400" />
            <input
              type="url"
              value={employerData.website}
              onChange={(e) => setEmployerData(prev => ({ ...prev, website: e.target.value }))}
              className="flex-1 focus:outline-none"
              placeholder="https://example.com"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Taille de l'entreprise
          </label>
          <div className="flex items-center gap-3 p-3 border border-gray-300">
            <Users className="w-5 h-5 text-gray-400" />
            <select
              value={employerData.company_size}
              onChange={(e) => setEmployerData(prev => ({ ...prev, company_size: e.target.value }))}
              className="flex-1 focus:outline-none bg-transparent"
            >
              <option value="">Sélectionner</option>
              <option value="1-10">1-10 employés</option>
              <option value="11-50">11-50 employés</option>
              <option value="51-200">51-200 employés</option>
              <option value="201-500">201-500 employés</option>
              <option value="500+">500+ employés</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Secteur d'activité
          </label>
          <div className="flex items-center gap-3 p-3 border border-gray-300">
            <Briefcase className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={employerData.industry}
              onChange={(e) => setEmployerData(prev => ({ ...prev, industry: e.target.value }))}
              className="flex-1 focus:outline-none"
              placeholder="Technologie, Finance, Santé..."
            />
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description de l'entreprise
        </label>
        <div className="p-3 border border-gray-300">
          <textarea
            value={employerData.description}
            onChange={(e) => setEmployerData(prev => ({ ...prev, description: e.target.value }))}
            rows={5}
            className="w-full focus:outline-none resize-none"
            placeholder="Décrivez votre entreprise, sa mission, ses valeurs, ses produits/services..."
          />
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white flex items-start justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <h1 className="text-2xl font-normal text-black mb-2">
            Compléter votre profil Employeur
          </h1>
          <p className="text-gray-600 text-sm">
            Remplissez vos informations personnelles et celles de votre entreprise
          </p>
          <div className="mt-2">
            <span className="inline-block px-3 py-1 text-xs bg-green-100 text-green-800">
              Employeur
            </span>
          </div>
        </div>
        
        {/* Navigation par onglets */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('personal')}
              className={`py-4 px-1 border-b-2 font-medium transition-colors ${activeTab === 'personal' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Informations personnelles
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('company')}
              className={`py-4 px-1 border-b-2 font-medium transition-colors ${activeTab === 'company' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                Entreprise
              </div>
            </button>
          </nav>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Contenu des onglets */}
          <div className="mb-8">
            {activeTab === 'personal' && renderPersonalTab()}
            {activeTab === 'company' && renderCompanyTab()}
          </div>
          
          {error && (
            <div className="mb-6 p-4 border border-red-300 bg-red-50">
              <div className="flex items-center gap-2 text-red-700">
                <X className="w-5 h-5" />
                <p>{error}</p>
              </div>
            </div>
          )}
          
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
        </form>
      </div>
    </div>
  )
}