import { createClient } from '@/lib/supabase/server'

export async function getUser() {
  const supabase = await createClient()
  try {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur:', error)
    return null
  }
}

export async function getUserProfile() {
  const supabase = await createClient()
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) return null
    
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()
    
    return profile
  } catch (error) {
    console.error('Erreur lors de la récupération du profil:', error)
    return null
  }
}

export async function requireAuth(redirectTo = '/login') {
  const user = await getUser()
  if (!user) {
    throw new Error('Non autorisé')
  }
  return user
}

export async function requireRole(roles: string[], redirectTo = '/unauthorized') {
  const profile = await getUserProfile()
  
  if (!profile || !roles.includes(profile.role)) {
    throw new Error('Accès refusé')
  }
  
  return profile
}