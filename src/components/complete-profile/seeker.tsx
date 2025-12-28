

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { User, Phone, Building, Upload, Briefcase, GraduationCap, MapPin, FileText, X, Mail, Check } from 'lucide-react'

type TabType = 'personal' | 'professional' | 'jobSeeker'

export default function CompleteProfileSeeker() {
  const router = useRouter()
  const supabase = createClient()
  
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<TabType>('personal')
  const [userRole, setUserRole] = useState<'employer' | 'seeker'>('seeker')
  
  // Données pour la table profiles (communes)
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
  })
  
  // Données spécifiques aux chercheurs d'emploi
  const [seekerData, setSeekerData] = useState({
    headline: '',
    bio: '',
    location: '',
    cv_url: '',
    cv_name: '',
    experience_years: 0,
    sectors: [] as string[],
    skills: [] as string[],
    education: {} as any,
    employment: {} as any,
    job_preferences: {
      job_types: [] as string[],
      remote_preference: 'none' as 'none' | 'hybrid' | 'full',
      salary_expectations: '',
      location_preferences: [] as string[]
    }
  })
  
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null)
  const [newSkill, setNewSkill] = useState('')
  const [newSector, setNewSector] = useState('')
  const [sectorOptions] = useState([
    'Technologie', 'Santé', 'Finance', 'Éducation', 'Construction',
    'Commerce', 'Transport', 'Restauration', 'Marketing', 'Design'
  ])
  
  const [skillOptions] = useState([
    'React', 'Node.js', 'Python', 'Java', 'PHP',
    'SQL', 'MongoDB', 'AWS', 'Docker', 'Git',
    'UI/UX', 'Project Management', 'Communication', 'Analytics'
  ])

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
          
          setUserRole(profile.role as 'employer' | 'seeker')
          
          // Récupérer les données spécifiques selon le rôle
          if (profile.role === 'employer') {
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
              })
            }
          } else if (profile.role === 'seeker') {
            const { data: seeker } = await supabase
              .from('seekers')
              .select('*')
              .eq('profile_id', user.id)
              .single()
            
            if (seeker) {
              setSeekerData({
                headline: seeker.headline || '',
                bio: seeker.bio || '',
                location: seeker.location || '',
                cv_url: seeker.cv_url || '',
                cv_name: seeker.cv_name || '',
                experience_years: seeker.experience_years || 0,
                sectors: seeker.sectors || [],
                skills: seeker.skills || [],
                education: seeker.education || {},
                employment: seeker.employment || {},
                job_preferences: seeker.job_preferences || {
                  job_types: [],
                  remote_preference: 'none',
                  salary_expectations: '',
                  location_preferences: []
                }
              })
            }
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

  const handleCVUpload = async (file: File) => {
    try {
      setUploading(true)
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) throw new Error('Non authentifié')
      
      const fileExt = file.name.split('.').pop()
      const fileName = `${user.id}/${Date.now()}.${fileExt}`
      const filePath = fileName
      
      // Uploader le CV
      const { error: uploadError } = await supabase.storage
        .from('cvs')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        })
      
      if (uploadError) {
        console.error('Upload error:', uploadError)
        throw new Error(`Erreur upload: ${uploadError.message}`)
      }
      
      // Récupérer l'URL publique
      const { data: { publicUrl } } = supabase.storage
        .from('cvs')
        .getPublicUrl(filePath)
      
      console.log('CV uploaded successfully:', { filePath, publicUrl })
      
      // Mettre à jour les données du chercheur d'emploi
      setSeekerData(prev => ({
        ...prev,
        cv_url: filePath,
        cv_name: file.name
      }))
      
    } catch (error: any) {
      console.error('CV upload error:', error)
      setError(error.message || 'Erreur lors du téléchargement du CV')
    } finally {
      setUploading(false)
    }
  }

  const addSkill = () => {
    if (newSkill.trim() && !seekerData.skills.includes(newSkill.trim())) {
      setSeekerData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }))
      setNewSkill('')
    }
  }

  const removeSkill = (skill: string) => {
    setSeekerData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }))
  }

  const addSector = () => {
    if (newSector.trim() && !seekerData.sectors.includes(newSector.trim())) {
      setSeekerData(prev => ({
        ...prev,
        sectors: [...prev.sectors, newSector.trim()]
      }))
      setNewSector('')
    }
  }

  const removeSector = (sector: string) => {
    setSeekerData(prev => ({
      ...prev,
      sectors: prev.sectors.filter(s => s !== sector)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)
  setError(null)
  
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) throw new Error('Non authentifié')
    
    // Validation basique
    if (!profileData.full_name.trim()) {
      throw new Error('Le nom complet est requis')
    }
    
    if (!profileData.phone.trim()) {
      throw new Error('Le téléphone est requis')
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
        role: userRole,
        updated_at: new Date().toISOString()
      })
    
    if (profileError) {
      console.error('Profile error:', profileError)
      throw new Error(`Erreur profil: ${profileError.message}`)
    }
    
    // Mettre à jour les données spécifiques selon le rôle
    if (userRole === 'employer') {
      // Validation pour employer
      if (!employerData.company_name.trim()) {
        throw new Error('Le nom de l\'entreprise est requis')
      }
      
      const { error: employerError } = await supabase
        .from('employers')
        .upsert({
          profile_id: user.id,
          company_name: employerData.company_name,
          company_size: employerData.company_size || null,
          industry: employerData.industry || null,
          website: employerData.website || null,
          description: employerData.description || null,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'profile_id' // Important: spécifier la colonne unique
        })
      
      if (employerError) {
        console.error('Employer error:', employerError)
        throw new Error(`Erreur employeur: ${employerError.message}`)
      }
    } else {
      // Chercheur d'emploi - validation minimale
      if (!seekerData.headline.trim()) {
        throw new Error('Le titre professionnel est requis')
      }
      
      if (!seekerData.location.trim()) {
        throw new Error('La localisation est requise')
      }
      
      if (seekerData.sectors.length === 0) {
        throw new Error('Veuillez sélectionner au moins un secteur')
      }
      
      // Créer un objet clean sans les propriétés undefined
      const seekerUpdateData: any = {
        profile_id: user.id,
        headline: seekerData.headline,
        bio: seekerData.bio || null,
        location: seekerData.location,
        cv_url: seekerData.cv_url || null,
        cv_name: seekerData.cv_name || null,
        experience_years: seekerData.experience_years || 0,
        sectors: seekerData.sectors.length > 0 ? seekerData.sectors : null,
        skills: seekerData.skills.length > 0 ? seekerData.skills : null,
        updated_at: new Date().toISOString()
      }
      
      // Ajouter les champs JSONB seulement s'ils ne sont pas vides
      if (seekerData.education && Object.keys(seekerData.education).length > 0) {
        seekerUpdateData.education = seekerData.education
      }
      
      if (seekerData.employment && Object.keys(seekerData.employment).length > 0) {
        seekerUpdateData.employment = seekerData.employment
      }
      
      if (seekerData.job_preferences && (
        seekerData.job_preferences.job_types?.length > 0 ||
        seekerData.job_preferences.remote_preference !== 'none' ||
        seekerData.job_preferences.salary_expectations ||
        seekerData.job_preferences.location_preferences?.length > 0
      )) {
        seekerUpdateData.job_preferences = seekerData.job_preferences
      }
      
      console.log('Seeker data to upsert:', seekerUpdateData)
      
      const { error: seekerError } = await supabase
        .from('seekers')
        .upsert(seekerUpdateData, {
          onConflict: 'profile_id' // Important: spécifier la colonne unique
        })
      
      if (seekerError) {
        console.error('Seeker error:', seekerError)
        throw new Error(`Erreur chercheur: ${seekerError.message}`)
      }
    }
    
    // Rediriger vers le dashboard
    router.push('/dashboard')
    router.refresh() // Rafraîchir pour mettre à jour les données
    
  } catch (error: any) {
    console.error('Submit error:', error)
    setError(error.message || 'Erreur lors de la mise à jour')
  } finally {
    setLoading(false)
  }
}
  
  const renderPersonalTab = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className="w-20 h-20 overflow-hidden border border-gray-300">
            {previewAvatar || profileData.avatar_url ? (
              <img
                src={previewAvatar || profileData.avatar_url}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>
          
          <label className="absolute bottom-0 right-0 bg-black text-white p-1 cursor-pointer hover:bg-gray-800 transition-colors text-xs">
            <Upload className="w-3 h-3" />
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Nom complet *
          </label>
          <input
            type="text"
            value={profileData.full_name}
            onChange={(e) => setProfileData(prev => ({ ...prev, full_name: e.target.value }))}
            className="w-full p-2 border border-gray-300 focus:border-black focus:outline-none"
            placeholder="John Doe"
            required
          />
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Email *
          </label>
          <div className="flex items-center gap-2 p-2 border border-gray-300">
            <Mail className="w-4 h-4 text-gray-400" />
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
              className="flex-1 focus:outline-none text-sm"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Téléphone *
          </label>
          <div className="flex items-center gap-2 p-2 border border-gray-300">
            <Phone className="w-4 h-4 text-gray-400" />
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
              className="flex-1 focus:outline-none text-sm"
              placeholder="+33612345678"
              required
            />
          </div>
        </div>
        
        {userRole === 'seeker' && (
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Localisation
            </label>
            <div className="flex items-center gap-2 p-2 border border-gray-300">
              <MapPin className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={seekerData.location}
                onChange={(e) => setSeekerData(prev => ({ ...prev, location: e.target.value }))}
                className="flex-1 focus:outline-none text-sm"
                placeholder="Paris, France"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const renderProfessionalTab = () => {
    if (userRole === 'employer') {
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Nom de l'entreprise *
              </label>
              <div className="flex items-center gap-2 p-2 border border-gray-300">
                <Building className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={employerData.company_name}
                  onChange={(e) => setEmployerData(prev => ({ ...prev, company_name: e.target.value }))}
                  className="flex-1 focus:outline-none text-sm"
                  placeholder="Nom de votre entreprise"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Site web
              </label>
              <input
                type="url"
                value={employerData.website}
                onChange={(e) => setEmployerData(prev => ({ ...prev, website: e.target.value }))}
                className="w-full p-2 border border-gray-300 focus:border-black focus:outline-none"
                placeholder="https://example.com"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Taille de l'entreprise
              </label>
              <select
                value={employerData.company_size}
                onChange={(e) => setEmployerData(prev => ({ ...prev, company_size: e.target.value }))}
                className="w-full p-2 border border-gray-300 focus:border-black focus:outline-none text-sm"
              >
                <option value="">Sélectionner</option>
                <option value="1-10">1-10 employés</option>
                <option value="11-50">11-50 employés</option>
                <option value="51-200">51-200 employés</option>
                <option value="201-500">201-500 employés</option>
                <option value="500+">500+ employés</option>
              </select>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Secteur d'activité
              </label>
              <input
                type="text"
                value={employerData.industry}
                onChange={(e) => setEmployerData(prev => ({ ...prev, industry: e.target.value }))}
                className="w-full p-2 border border-gray-300 focus:border-black focus:outline-none"
                placeholder="Technologie, Finance, etc."
              />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Description de l'entreprise
            </label>
            <textarea
              value={employerData.description}
              onChange={(e) => setEmployerData(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
              className="w-full p-2 border border-gray-300 focus:border-black focus:outline-none text-sm"
              placeholder="Décrivez votre entreprise, sa mission, ses valeurs..."
            />
          </div>
        </div>
      )
    } else {
      // Chercheur d'emploi - version professionnelle
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Titre professionnel
              </label>
              <input
                type="text"
                value={seekerData.headline}
                onChange={(e) => setSeekerData(prev => ({ ...prev, headline: e.target.value }))}
                className="w-full p-2 border border-gray-300 focus:border-black focus:outline-none"
                placeholder="Développeur Full Stack"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Années d'expérience
              </label>
              <input
                type="number"
                min="0"
                max="50"
                value={seekerData.experience_years}
                onChange={(e) => setSeekerData(prev => ({ ...prev, experience_years: parseInt(e.target.value) || 0 }))}
                className="w-full p-2 border border-gray-300 focus:border-black focus:outline-none"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Bio / Présentation
            </label>
            <textarea
              value={seekerData.bio}
              onChange={(e) => setSeekerData(prev => ({ ...prev, bio: e.target.value }))}
              rows={4}
              className="w-full p-2 border border-gray-300 focus:border-black focus:outline-none text-sm"
              placeholder="Décrivez votre parcours professionnel, vos compétences, vos réalisations..."
            />
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Compétences
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {seekerData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-xs"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-gray-500 hover:text-black"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                className="flex-1 p-2 border border-gray-300 focus:border-black focus:outline-none text-sm"
                placeholder="Ajouter une compétence"
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors"
              >
                Ajouter
              </button>
            </div>
            
            <div className="mt-2">
              <p className="text-xs text-gray-500 mb-2">Suggestions :</p>
              <div className="flex flex-wrap gap-2">
                {skillOptions
                  .filter(skill => !seekerData.skills.includes(skill))
                  .slice(0, 8)
                  .map((skill, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        if (!seekerData.skills.includes(skill)) {
                          setSeekerData(prev => ({
                            ...prev,
                            skills: [...prev.skills, skill]
                          }))
                        }
                      }}
                      className="px-3 py-1 text-xs border border-gray-300 hover:border-black transition-colors"
                    >
                      {skill}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  const renderJobSeekerTab = () => {
    // Cet onglet n'est visible que pour les chercheurs d'emploi
    if (userRole !== 'seeker') {
      return (
        <div className="text-center py-8">
          <p className="text-gray-600">
            Cette section est uniquement disponible pour les chercheurs d'emploi.
          </p>
        </div>
      )
    }
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              CV
            </label>
            <div className="flex items-center gap-2 p-2 border border-gray-300">
              <FileText className="w-4 h-4 text-gray-400" />
              <div className="flex-1">
                {seekerData.cv_name ? (
                  <span className="text-sm">{seekerData.cv_name}</span>
                ) : (
                  <span className="text-sm text-gray-500">Aucun CV téléchargé</span>
                )}
              </div>
              <label className="text-xs text-black hover:text-gray-700 cursor-pointer">
                <Upload className="w-3 h-3 inline mr-1" />
                {seekerData.cv_name ? 'Changer' : 'Télécharger'}
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handleCVUpload(e.target.files[0])
                    }
                  }}
                  disabled={uploading}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX, max 5MB</p>
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Secteurs d'intérêt
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {seekerData.sectors.map((sector, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-xs"
                >
                  {sector}
                  <button
                    type="button"
                    onClick={() => removeSector(sector)}
                    className="text-gray-500 hover:text-black"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={newSector}
                onChange={(e) => setNewSector(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSector())}
                className="flex-1 p-2 border border-gray-300 focus:border-black focus:outline-none text-sm"
                placeholder="Ajouter un secteur"
              />
              <button
                type="button"
                onClick={addSector}
                className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors"
              >
                Ajouter
              </button>
            </div>
            
            <div className="mt-2">
              <p className="text-xs text-gray-500 mb-2">Suggestions :</p>
              <div className="flex flex-wrap gap-2">
                {sectorOptions
                  .filter(sector => !seekerData.sectors.includes(sector))
                  .slice(0, 6)
                  .map((sector, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        if (!seekerData.sectors.includes(sector)) {
                          setSeekerData(prev => ({
                            ...prev,
                            sectors: [...prev.sectors, sector]
                          }))
                        }
                      }}
                      className="px-3 py-1 text-xs border border-gray-300 hover:border-black transition-colors"
                    >
                      {sector}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">
            Préférences de travail
          </label>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-600 mb-2">Type de télétravail</p>
              <div className="flex gap-2">
                {(['none', 'hybrid', 'full'] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSeekerData(prev => ({
                      ...prev,
                      job_preferences: {
                        ...prev.job_preferences,
                        remote_preference: option
                      }
                    }))}
                    className={`px-4 py-2 text-xs border ${seekerData.job_preferences.remote_preference === option ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'}`}
                  >
                    {option === 'none' && 'Présentiel'}
                    {option === 'hybrid' && 'Hybride'}
                    {option === 'full' && 'Full remote'}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-xs text-gray-600 mb-1">Expectations salariales</p>
              <input
                type="text"
                value={seekerData.job_preferences.salary_expectations}
                onChange={(e) => setSeekerData(prev => ({
                  ...prev,
                  job_preferences: {
                    ...prev.job_preferences,
                    salary_expectations: e.target.value
                  }
                }))}
                className="w-full p-2 border border-gray-300 focus:border-black focus:outline-none text-sm"
                placeholder="€45,000 - €55,000"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Masquer l'onglet "Chercheur d'emploi" si c'est un employeur
  const shouldShowJobSeekerTab = userRole === 'seeker'

  return (
    <div className="min-h-screen bg-white flex items-start justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <h1 className="text-2xl font-normal text-black mb-2">
            Compléter votre profil
          </h1>
          <p className="text-gray-600 text-sm">
            {userRole === 'employer' 
              ? 'Remplissez les informations de votre entreprise'
              : 'Remplissez vos informations professionnelles et vos préférences'}
          </p>
          <div className="mt-2">
            <span className="inline-block px-3 py-1 text-xs bg-gray-100">
              {userRole === 'employer' ? 'Employeur' : 'Chercheur d\'emploi'}
            </span>
          </div>
        </div>
        
        {/* Navigation par onglets */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('personal')}
              className={`py-3 px-1 border-b-2 text-sm font-medium transition-colors ${activeTab === 'personal' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Informations personnelles
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('professional')}
              className={`py-3 px-1 border-b-2 text-sm font-medium transition-colors ${activeTab === 'professional' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {userRole === 'employer' ? 'Entreprise' : 'Professionnel'}
              </div>
            </button>
            
            {shouldShowJobSeekerTab && (
              <button
                onClick={() => setActiveTab('jobSeeker')}
                className={`py-3 px-1 border-b-2 text-sm font-medium transition-colors ${activeTab === 'jobSeeker' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Préférences
                </div>
              </button>
            )}
          </nav>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Contenu des onglets */}
          <div className="mb-8">
            {activeTab === 'personal' && renderPersonalTab()}
            {activeTab === 'professional' && renderProfessionalTab()}
            {activeTab === 'jobSeeker' && renderJobSeekerTab()}
          </div>
          
          {error && (
            <div className="mb-6 p-3 border border-red-300 bg-red-50">
              <div className="flex items-center gap-2 text-red-700 text-sm">
                <X className="w-4 h-4" />
                <p>{error}</p>
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => router.push('/dashboard')}
              className="px-6 py-3 border border-gray-300 text-sm hover:border-black transition-colors"
            >
              Passer pour l'instant
            </button>
            
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-black text-white text-sm hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {loading ? (
                'Enregistrement...'
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  Enregistrer 
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}