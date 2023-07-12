"use client"
import { FC, useState } from 'react'
import Image from 'next/image';

interface SidebarProps {
  
}

const Sidebar: FC<SidebarProps> = ({}) => {
    const [buttonState, setButtonState] = useState('closed');

    const handleButtonHover = () => {
      setButtonState('open');
    };
  
    const handleButtonLeave = () => {
      setButtonState('closed');
    };
  return (

    <div className="flex w-14 flex-col justify-between overflow-y-hidden p-2 border-r bg-body border-scale-500">
    <ul className="flex flex-col space-y-2 ">
      <a className="block" href="/dashboard/">
        <div className="bg-blue-500 p-3 rounded-full">O</div>
        {/* <Image height={40} width={30} src="" alt="Logo" className="mx-auto h-[40px] w-6 cursor-pointer rounded"/> */}
      </a>
    
      <button
        data-state={buttonState}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
        className="relative"
        >
        <a href="/dashboard/">
            <span className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded bg-gray-100 hover:bg-gray-300 shadow-sm">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sbui-icon"
            >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            </span>
            </a>
    </button>
      <div className="bg-slate-500 h-[1px] w-full"></div>
      <button
        data-state={buttonState}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
        className="relative"
        >
        <a href="/dashboard/questions/">
            <span className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded bg-gray-100 hover:bg-gray-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="sbui-icon "><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>            </span>
            </a>
    </button>
      <button
        data-state={buttonState}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
        className="relative"
        >
        <a href="/dashboard/all/">
            <span className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded bg-gray-100 hover:bg-gray-300 shadow-sm">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7014 8.34507V5.80169L10.8772 1.00033H3.7014C2.96501 1.00033 2.36805 1.59728 2.36805 2.33367V6.33312M15.6545 5.77939L10.8752 1L10.8752 4.44605C10.8752 5.18243 11.4722 5.77939 12.2086 5.77939L15.6545 5.77939ZM4.29028 6.33312H2.33335C1.59696 6.33312 1 6.93008 1 7.66647V14.3333C1 15.8061 2.19392 17 3.66669 17H14.3333C15.8061 17 17 15.8061 17 14.3333V9.67842C17 8.94203 16.403 8.34507 15.6667 8.34507H7.42712C7.07725 8.34507 6.7414 8.20755 6.492 7.96218L5.2254 6.71601C4.976 6.47063 4.64015 6.33312 4.29028 6.33312Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
            </a>
    </button>
    <button
        data-state={buttonState}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
        className="relative"
        >
        <a href="/dashboard/settings/">
            <span className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded bg-gray-100 hover:bg-gray-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="sbui-icon "><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </span>
            </a>
    </button>
    <button
        data-state={buttonState}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
        className="relative"
        >
        <a href="/dashboard/user/">
            <span className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded bg-gray-100 hover:bg-gray-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="sbui-icon text-scale-900"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </span>
            </a>
    </button>
    
    </ul>

    <ul className="flex flex-col space-y-4 items-center">

    </ul>
  </div>

  )
}

export default Sidebar