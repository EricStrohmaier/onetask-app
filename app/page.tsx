
import React, { useState } from 'react';
import styles from "./style";
import Navbar from '@/components/Navbar';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Hero from '@/components/homepageComponents/Hero';
import Stats from '@/components/homepageComponents/Stats';
import Business from '@/components/homepageComponents/Bussines';
import CardDeal from '@/components/homepageComponents/CardDeal';
import Billing from '@/components/homepageComponents/Billing';
import CTA from '@/components/homepageComponents/CTA';
import Footer from '@/components/homepageComponents/Footer';



export default async function Index() {
  const supabase = createServerComponentClient({
		cookies,
	});

	const { data: {session} } = await supabase.auth.getSession();


  return (
    <div className="bg-background w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-background ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-background ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats data={null}/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  </div>
  )
}



          	 {/* Linear line fade in out  */}
          {/* <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" /> */}