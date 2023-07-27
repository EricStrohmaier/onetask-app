import { features } from "@/app/data";
import styles, { layout } from "@/app/style";
import Button from "./LinkButton";
import Image from "next/image";
import { rotateCube } from "@/assets";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Time blocking is a highly <br className="sm:block hidden" /> effective time management technique 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <span className="font-bold">Focused Work:  </span>Time blocking allows you to allocate focused and uninterrupted periods for specific tasks.
       By concentrating solely on one task during each block, you can work with greater efficiency and depth, resulting in higher-quality output.
      </p>

      <Button style={`mt-10 bg-bluegray hover:scale-105`} title={"Read more"} href={"/about-the-book"} />
    </div>

    <div className={layout.sectionImg}>
     <div className="w-[100%] h-[100%] bg-secondary rounded-3xl bg-opacity-70">
      <Image className={`z-20`} src={rotateCube} alt={""}/>
     </div>
    </div>
  </section>
);

export default CardDeal;
