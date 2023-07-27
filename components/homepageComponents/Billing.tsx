import styles, { layout } from "@/app/style";
import { homewifi } from "@/assets";
import Image from "next/image";



const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse}`}>
    <div className={`w-full h-full relative z-[5] ${styles.flexCenter}`}>
      <div className={`w-2/3 h-fit  bg-bluegray rounded-[120px] ${styles.flexCenter}`}>
        <Image  className={`w-1/2 h-1/2   ${styles.flexCenter}`}  src={homewifi} alt={"homewifi"}/>
      </div>
    </div>
     
      

      {/* gradient start */}
      <div className="absolute z-[0] -left-1/2 top-0 w-[100%] h-[100%] -rotate-12  bg-secondary opacity-30 filter blur-3xl" />
      <div className="absolute z-[0] w-[90%] h-[90%] -left-1/2 bottom-0 -rotate-12 rounded-full bg-primary opacity-30 filter blur-3xl" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Alignment with Goals
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Align your actions with your long-term goals and vision.
       By constantly asking yourself what the ONE Thing is that will make the biggest difference, you ensure that you stay on track toward your ultimate objectives.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> 
      </div> */}
    </div>
  </section>
);

export default Billing;
