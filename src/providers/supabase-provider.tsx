// 'use client'

// import { createClient } from '@/lib/supabase/client'
// import { useRouter } from 'next/navigation'
// import { createContext, useContext, useEffect, useState } from 'react'
// import type { User } from '@supabase/supabase-js'

// type SupabaseContext = {
//   user: User | null
//   isLoading: boolean
//   signOut: () => Promise<void>
// }

// const Context = createContext<SupabaseContext | undefined>(undefined)

// export default function SupabaseProvider({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const [user, setUser] = useState<User | null>(null)
//   const [isLoading, setIsLoading] = useState(true)
//   const router = useRouter()
//   const supabase = createClient()

//   useEffect(() => {
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((event, session) => {
//       setUser(session?.user ?? null)
      
//       // Rafraîchir la page lors des changements d'authentification
//       if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
//         router.refresh()
//       }
//     })

//     // Récupérer l'utilisateur initial
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setUser(session?. user ?? null)
//       setIsLoading(false)
//     })

//     return () => {
//       subscription.unsubscribe()
//     }
//   }, [router, supabase])

//   const signOut = async () => {
//     await supabase.auth.signOut()
//     router.push('/')
//     router.refresh()
//   }

//   return (
//     <Context.Provider value={{ user, isLoading, signOut }}>
//       {children}
//     </Context.Provider>
//   )
// }

// export const useSupabase = () => {
//   const context = useContext(Context)
//   if (context === undefined) {
//     throw new Error('useSupabase must be used inside SupabaseProvider')
//   }
//   return context
// }
'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import type { User, SupabaseClient } from '@supabase/supabase-js'

type SupabaseContext = {
  supabase: SupabaseClient
  user: User | null
  isLoading: boolean
  signOut: () => Promise<void>
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
      
      // Rafraîchir la page lors des changements d'authentification
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
        router.refresh()
      }
    })

    // Récupérer l'utilisateur initial
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setIsLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabase])

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <Context.Provider value={{ supabase, user, isLoading, signOut }}>
      {children}
    </Context.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  }
  return context
}