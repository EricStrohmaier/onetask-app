'use client'

import styles from '@/app/style'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <button
      className={`py-2 px-4 rounded-md no-underline ${styles.linkHover} `}
      onClick={signOut}
    >
      Logout
    </button>
  )
}
