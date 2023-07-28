import Button from "./LinkButton";
import styles, { layout } from "@/app/style";


export interface FeaturedCardProps {
    icon: string;
    title: string;
    content: string;
    index: any
  }
  

  const FeatureCard: React.FC<FeaturedCardProps> = ({ icon, title, content, index }) => (
  <div className={`z-20 flex flex-row p-6 rounded-[20px] ${index ==  1 ? "mb-6" : "mb-0"} bg-bluegray`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-primary border-[2px] border-accent`}>
      <div className="w-[50%] h-[50%] object-contain  bg-accent rounded-full border-[2px] border-secondary" ></div>
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
      Methodology<br className="sm:block hidden" />
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "The One Thing" follows a practical and actionable approach to help readers apply the principles in their lives.
       The book emphasizes the following methods
      </p>

      <Button title={"Read more"} href={"/about/the-book"} style="mt-10 bg-primary hover:scale-105" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
    
        <FeatureCard icon={"O"} title={"Focusing Question"} content={`The core of the methodology, guiding readers to ask the powerful question, "What's the ONE Thing I can do such that by doing it, everything else will be easier or unnecessary?"`} index={1}  />
        <FeatureCard icon={"O"} title={"Goal Setting"} content={"Encouraging readers to set clear and specific goals that align with their ONE Thing, ensuring a sense of purpose and direction"} index={1}  />
        <FeatureCard icon={"Ö"} title={"Habit Formation"} content={"Emphasizing the need to develop success habits and routines that support progress toward the ONE Thing"} index={3}  />

    </div>
  </section>
);

export default Business;
