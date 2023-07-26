"use client"
import styles, { layout } from '@/app/style'
import { task } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
          The <span className='font-bold'>oneTask</span>
           <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Application</span>
        </h1>
     
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "Maximize Your Productivity and Achieve Extraordinary Results with oneTask:
       Your All-in-One Software Tool for Laser-Focused Efficiency,
       Goal Attainment, and Unleashing Your True Potential!"
      </p>
    </div>
    <div className='w-fit h-fit flex justify-center items-center'>
  <div className={`w-1/2 h-1/2 bg-bluegray rounded-[120px] p-5 `}>
   
    <Image className='w-full h-full object-cover' src={task} alt={'task'} />
  </div>
</div>

  </section>
  )
}
