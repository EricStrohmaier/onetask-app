import { fetchSupabase } from '@/app/(pages)/dashboard/page'
import { stats } from '@/app/data'
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
 const dataOneYearGoal = data?.map((dat, index)=>{
  

 })
  console.log(data);
  

  return  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 z-20`}>
  
    <StatsCard value={dataNumber} title={'Answerd Questions'}/>
    <StatsCard value={dataNumber} title={'Stats'}/>
    <StatsCard value={"dataNumber"} title={'Yearly Goal'}/>

 

</section>
}

export default Stats