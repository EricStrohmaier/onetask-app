import LogoutButton from "@/components/LogoutButton";
import Sidebar from "@/components/Sidebar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { fetchSupabase } from "./page";



export default async function RootLayout({ children }: { children: React.ReactNode }) {
const supabase = createServerComponentClient({ cookies });

  const { data: { user } = {} } = await supabase.auth.getUser(); // Use object destructuring with a default value

  const { data: session } = await supabase.auth.getSession();

  if(!session.session){
    redirect('/login')
  }
  const { data} = await fetchSupabase();
  console.log(data?.length);
  
  
  

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full overflow-x-hidden h-screen">
        <div className="flex h-12 max-h-12 items-center justify-between py-2 px-5 border-b border-gray-300 ">
          <div className="ml-2 flex items-center text-sm">
            {user ? <div> Hey, {user.email}!</div> : <><p>no user </p> </>}
          </div>
          <div className="flex items-center space-x-2">
            {user ? (
              <LogoutButton />
            ) : (
              <Link href="/login" className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                Login
              </Link>
            )}
          </div>
        </div>
        <main className="flex-1 overflow-y-auto ">
          <div className="animate-in mx-auto my-1 w-full max-w-7xl p-1 space-y-5 ">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
