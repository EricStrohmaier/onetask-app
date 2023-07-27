import { FC } from 'react'

interface StatsCardProps {
  value: any
  title: string
}

const StatsCard: FC<StatsCardProps> = ({value, title}) => {
  return <div className={`flex-1 flex md:justify-center justify-start items-center flex-row m-2 w-full`} >
  <p className="font-poppins font-normal xs:text-[21.45px] text-[18.45px] xs:leading-[26.58px] leading-[21.58px] uppercase ">
    {title}
  </p>
  <h4 className="font-poppins font-semibold xs:text-[30.89px] text-[24.89px] xs:leading-[53.16px] leading-[43.16px] ml-3">
    {value}
  </h4>
</div>
}

export default StatsCard