import { footerLinks, socialMedia } from "@/app/data";
import styles from "@/app/style";
import Link from "next/link";


const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        {/* <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        /> */}
        <Link href={"/"}><h1 className="font-bold text-3xl">oneTask</h1></Link>
        <p className={`${styles.paragraph} mt-4 max-w-[372px]`}>
          A new way to make the goal achieving easy.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-end flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-text">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-text hover:text-accent cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                 <Link href={link.link}>{link.name}</Link> 
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-text">
        Copyright Ⓒ Eric Strohmaier
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <div  className={`w-[21px] h-[21px] object-contain cursor-pointer mx-2 `}>
         <p  className="bg-primary rounded-full w-full h-full"> </p>
            </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
