import { fetchSupabase } from '@/app/(pages)/dashboard/page'
import styles from '@/app/style'
import { FC } from 'react'
import StatsCard from './StatsCard';

interface StatsProps {
  data:  any[] | null
}
//make user stats    if user is sign in    how many question he answerd how many he has completed and his one year goal ?? 
const Stats: FC<StatsProps> = async ({}) => {

  const {data} = await fetchSupabase()

 const dataNumber = data?.length ?? 0;

  const answerdQuestion = dataNumber && dataNumber > 0 ? dataNumber : '13'


  const isDoneQuestion = data?.filter((dat) => dat.isdone === true);

  const completedTasks = isDoneQuestion?.length ?? 0;

   const showCompletedTasks = completedTasks > 0 ? completedTasks : '2'

 const dataOneYearGoal = data?.filter((dat) => dat.id_number === 1);

 const yearlyGoal =
 dataOneYearGoal && dataOneYearGoal.length > 0
   ? dataOneYearGoal.map((item) => item.answer)
   : ['Flying to the moon'];


return (
  <section className={`${styles.flexCenter} md:flex-row flex-col flex-wrap sm:mb-20 mb-6 z-20`}>
    <StatsCard value={answerdQuestion} title={'Answered Questions'} />
    <StatsCard value={showCompletedTasks} title={'Completed tasks'} />
    <StatsCard value={yearlyGoal} title={'Yearly Goal'} />
  </section>
);
}

export default Stats