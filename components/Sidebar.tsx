"use client"
import { FC, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

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
      {/* use link */}
      <Link className="block" href="/">
        <div className="bg-blue-500 p-3 rounded-full">O</div>
        {/* <Image height={40} width={30} src="" alt="Logo" className="mx-auto h-[40px] w-6 cursor-pointer rounded"/> */}
      </Link>
    
      <button
        data-state={buttonState}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
        className="relative"
        >
        <Link href="/dashboard/">
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
            </Link>
    </button>
      <div className="bg-slate-500 h-[1px] w-full"></div>
      <button
        data-state={buttonState}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
        className="relative"
        >
        <Link href="/dashboard/questions/">
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
        </Link>
    </button>
      <button
        data-state={buttonState}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
        className="relative"
        >
        <Link href="/dashboard/all/">
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
            </Link>
    </button>
    <button
        data-state={buttonState}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
        className="relative"
        >
        <Link href="/dashboard/settings/">
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
            </Link>
    </button>
    <button
        data-state={buttonState}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
        className="relative"
        >
        <Link href="/dashboard/user/">
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
            </Link>
    </button>
    
    </ul>

    <ul className="flex flex-col space-y-4 items-center">

    </ul>
  </div>

  )
}

export default Sidebar