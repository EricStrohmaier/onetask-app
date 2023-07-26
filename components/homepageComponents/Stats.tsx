import { stats } from '@/app/data'
import styles from '@/app/style'
import { FC } from 'react'

interface StatsProps {
  
}
//make user stats    if user is sign in    how many question he answerd how many he has completed and his one year goal ?? 
const Stats: FC<StatsProps> = ({}) => {
  return  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 z-20`}>
  {stats.map((stat) => (
    <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
      <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] ">
        {stat.value}
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px]   uppercase ml-3">
        {stat.title}
      </p>
    </div>
  ))}

</section>
}

export default Stats