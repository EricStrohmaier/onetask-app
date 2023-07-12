
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';


export default function Index() {


  return (
    <div className="flex h-full">
     
      <div className="w-full flex flex-col items-center">
       
      <Navbar/>
        <div className="animate-in flex flex-col gap-14 opacity-0 max-w-6xl px-3 py-16 lg:py-24 text-foreground">
          <div className="flex flex-col items-center mb-4 lg:mb-12 ">
        

          </div>
                {/* Linear line fade in out  */}
          <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

          <div className="flex flex-col gap-8 text-foreground">
            <div>Homepage is here </div>
            </div>
            </div>
            
      </div>
    </div>
  )
}
