"use client"
import styles, { layout } from '@/app/style'
import { task } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
          The <span className='font-bold'>oneTask</span>
           <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Application</span>
        </h1>
     
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "Maximize Your Productivity and Achieve Extraordinary Results with <span className='font-bold'>oneTask: </span> 
       Your All-in-One Software Tool for Laser-Focused Efficiency,
       Goal Attainment, and Unleashing Your True Potential!"
      </p>
    </div>
    <div className={`md:w-1/2 md:h-1/2 flex md:justify-end justify-center items-center  ${styles.paddingY} ${styles.paddingX}`} >
  <div className={`w-2/3 h-2/3 bg-primary rounded-[120px] p-5 `}>
   
    <Image className='w-full h-full object-cover ' src={task} alt={'task'} />
  </div>
</div>

  </section>
  )
}
