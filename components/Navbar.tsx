import LogoutButton from './LogoutButton'
import Link from 'next/link'
import { supabaseServer } from '@/app/supabase/supabaseServer'
import styles from '@/app/style'

export default async function Navbar() {

    const {
        data: { user },
      } = await supabaseServer.auth.getUser()

  return (
    <nav className="w-full flex justify-center border-b border-b-text/10 h-16">
        <div className="w-full  flex justify-between items-center p-3 text-md text-text">
          <Link href={'/'} className='font-bold text-2xl'>oneTask </Link>
          <div>
            {user ? (
              <div className="flex items-center">
                Hey, {user.email}
                <Link
                href="/dashboard"
                className={`py-2 px-4 mx-2 rounded-md no-underline ${styles.linkHover}`}
              >
                Dahsboard
              </Link>
              <LogoutButton/>
              </div>
            ) : (
              <Link
                href="/login"
                className={`py-2 px-4 mx-2 rounded-md no-underline ${styles.linkHover}`}
              >
                Login
              </Link>
            )}
          </div>
        </div>
   
      </nav>
  )
}
