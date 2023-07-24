
import { features } from "@/app/data";

import Button from "./LinkButton";
import styles, { layout } from "@/app/style";


export interface FeaturedCardProps {
    icon: string;
    title: string;
    content: string;
    index: any
  }
  

  const FeatureCard: React.FC<FeaturedCardProps> = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} bg-bluegray`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-accent`}>
      <div className="w-[50%] h-[50%] object-contain bg-primary rounded-tr-full " ></div>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-text text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button title={"Get Started"} href={"/login"} style="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
