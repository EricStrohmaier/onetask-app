import LogoutButton from "@/components/LogoutButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import styles, { layout } from "../style";
import LinkButton from "@/components/homepageComponents/LinkButton";


export default async function RootLayout({ children }: { children: React.ReactNode }) {

    const supabase = createServerComponentClient({ cookies });

    const { data: { user } = {} } = await supabase.auth.getUser(); 

  return (
    <div className="flex h-full">
  
      <div className="flex flex-col flex-1 w-full overflow-x-hidden h-screen">
        <div className="flex h-12 max-h-12 items-center justify-between py-2 px-5 border-b border-gray-300 ">
          <div className="ml-2 flex  items-center ">
            {user ? 
            <div>
               Hey, {user.email}! 
               </div> 
               : <>
            <LinkButton title={"Back"} href={"/"} style={`py-2 px-4 rounded-md no-underline ${styles.linkHover}`}/>
             </>}
          </div>
          <div className="flex items-center space-x-2">
            {user ? (
              <LogoutButton />
            ) : (
             <LinkButton title={"Login"} href={"/login"} style={`py-2 px-4 rounded-md no-underline ${styles.linkHover}`}/>
            )}
          </div>
        </div>
        <main className="flex-1 overflow-y-auto ">
          <div className="animate-in mx-auto my-1 w-full max-w-7xl p-1 space-y-5 ">
            <div className={`${layout.section} ${styles.flexCenter}${styles.marginX} `}>
                <div className={`  `}>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
