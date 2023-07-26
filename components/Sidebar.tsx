
import { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { book, dashboard, document, edit, home, setting, user } from '@/assets';
import SidebarLink from './sidebarComponents/SidebarLink';

interface SidebarProps {
  
}

const Sidebar: FC<SidebarProps> = ({}) => {

  return (

    <div className="flex lg:w-20 w-14 flex-col justify-between  p-2 border-r bg-body border-scale-500 text-text">
    <ul className="flex flex-col space-y-2 ">

      <Link className="block"  href={"/"} >
            <div className="transition-colors duration-200 flex items-center justify-center h-10 w-10 lg:h-16 lg:w-16 rounded bg-bluegray hover:opacity-90  shadow-sm">
                <Image src={home} width={25} height={25} alt={"home"} />
            </div>
        </Link>

     <SidebarLink src={dashboard} alt={'dashboard'} href={"/dashboard/"} tag={'Dashboard'}/>
        <div className="bg-text opacity-40 rounded-full h-[1px] w-full"></div>
          <SidebarLink src={edit} alt={'edit'} href={"/dashboard/questions"} tag={'Question'}/>
            <SidebarLink src={document} alt={'document'} href={"/dashboard/all"} tag={'Archive'}/>
              <SidebarLink src={book} alt={'book'} href={"/dashboard/book"} tag={'The Book'}/>
    </ul>

    <ul className="flex flex-col space-y-4 items-center">
        <SidebarLink src={setting} alt={'setting'} href={"/dashboard/user"} tag={'Setting'}/>
            <div className="bg-text opacity-40 rounded-full h-[1px] w-full"></div>
        <SidebarLink src={user} alt={'user'} href={"/dashboard/user"} tag={'Account'}/>
    </ul>
  </div>
  )
}

export default Sidebar