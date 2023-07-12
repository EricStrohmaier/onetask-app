import Sidebar from '@/components/Sidebar'
import { FC } from 'react'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers'

const supabase = createServerComponentClient({ cookies })



export default async function Home(){


  return (
    <div className="">
    dashboard
     {/* Linear line fade in out  */}
    <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

  </div>
  )
}

