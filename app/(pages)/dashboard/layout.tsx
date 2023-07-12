import Sidebar from "@/components/Sidebar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers'

const supabase = createServerComponentClient({ cookies })

export default async function RootLayout({
    children
  }: {
    children: React.ReactNode
  }) {

    const {
        data: { user },
      } = await supabase.auth.getUser()
  
    return (
        <div className="flex h-full">
        <Sidebar/>
       <div className="flex flex-col flex-1 w-full overflow-x-hidden h-screen">
        <div className="flex h-12 max-h-12 items-center justify-between py-2 px-5 border-b border-gray-500">
            	{user ? (
                    <div> Hey, {user.email}!</div>
                     ): (
                       <div>no user</div>
                     )}
        </div>
       <main className="flex-1 overflow-y-auto">
         <div className="animate-in mx-auto my-16 w-full max-w-7xl space-y-16">
          
           {children}
          
         </div>
             
       </main>
     </div>
     </div>
    );
  }
  