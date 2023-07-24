import { features } from "@/app/data";
import styles, { layout } from "@/app/style";
import Button from "./LinkButton";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button style={`mt-10 bg-bluegray hover:scale-105`} title={"Read more"} href={"/about-us"} />
    </div>

    <div className={layout.sectionImg}>
     <div className="w-[100%] h-[100%] bg-secondary rounded-3xl opacity-70"></div>
    </div>
  </section>
);

export default CardDeal;
