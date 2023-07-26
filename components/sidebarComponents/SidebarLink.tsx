"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

interface SidebarLinkProps {
  src: string;
  alt: string;
  href: any;
  tag: string
}

const SidebarLink: FC<SidebarLinkProps> = ({ src, alt, href ,tag}) => {
  const [buttonState, setButtonState] = useState('closed');

  const handleButtonHover = () => {
    setButtonState('open');
  };

  const handleButtonLeave = () => {
    setButtonState('closed');
  };

  return (
    <Link className="block" href={href} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>
      <div className="transition-colors duration-200 flex items-center justify-center h-10 w-10 lg:h-16 lg:w-16 rounded bg-gray-100 hover:bg-gray-300 shadow-sm relative">
        {buttonState === 'open' && (
          <div className="absolute lg:top-4 lg:-right-16 top-2 -right-16 bg-gray-500 text-white px-2 py-1 text-xs rounded z-20">
           {tag}
          </div>
        )}
        <div className="lg:w-8 lg:h-8 w-6 h-6">
          <Image src={src} alt={alt} />
        </div>
      </div>
    </Link>
  );
};

export default SidebarLink;
