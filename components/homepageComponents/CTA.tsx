
import styles from "@/app/style";
import Button from "./LinkButton";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-primary rounded-3xl box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Not convinced yet?
      <br className="sm:block hidden" />{" "}Try our demo service account</h2>
      <p className={`${styles.paragraph}  mt-5`}>
      To effectively use the Focusing Question, ask it regularly during planning sessions, goal setting, and when faced with choices throughout the day.
       By making it a habit, you empower yourself to focus on the most critical tasks and make steady progress toward your most meaningful goals and aspirations.
       Remember that the power of the Focusing Question lies in consistently asking it and acting upon the insights it reveals.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button title={"Try NOW"} href={"/login"} style={"bg-bluegray hover:scale-105"} />
    </div>
  </section>
);

export default CTA;
