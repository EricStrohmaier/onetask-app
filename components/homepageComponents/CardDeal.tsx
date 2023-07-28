
import styles, { layout } from "@/app/style";
import Button from "./LinkButton";
import Image from "next/image";
import { rotateCube } from "@/assets";

const CardDeal = () => {


  return ( <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Time blocking is a highly <br className="sm:block hidden" /> effective time management technique 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <span className="font-bold">Focused Work:  </span>Time blocking allows you to allocate focused and uninterrupted periods for specific tasks.
       By concentrating solely on one task during each block, you can work with greater efficiency and depth, resulting in higher-quality output.
      </p>

      <Button style={`mt-10 bg-bluegray hover:scale-105`} title={"Read more"} href={"/about/the-book"} />
    </div>

    <div
      className={layout.sectionImg}>
      <div className={` w-2/3 h-2/3 flex justify-center items-center bg-secondary rounded-[120px]`}>
          <Image className={`z-20 w-full h-full`} src={rotateCube} alt={""} />
      </div>
    </div>
  </section>
  )
};

export default CardDeal;
