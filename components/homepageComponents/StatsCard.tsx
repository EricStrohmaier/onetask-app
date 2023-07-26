import { FC } from 'react'

interface StatsCardProps {
  value: any
  title: string
}

const StatsCard: FC<StatsCardProps> = ({value, title}) => {
  return <div className={`flex-1 flex justify-start items-center flex-row m-3`} >
  <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] ">
    {value}
  </h4>
  <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px]   uppercase ml-3">
    {title}
  </p>
</div>
}

export default StatsCard