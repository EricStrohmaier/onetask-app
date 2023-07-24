import styles from '@/app/style'
import React from 'react'

export default function Hero() {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
          The One Task <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Application</span>{" "}
        </h1>
     
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards
        most likely to fit your needs. We examine annual percentage rates,
        annual fees.
      </p>
    </div>


 
  </section>
  )
}
