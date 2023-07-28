import Link from 'next/link';
import React from 'react';

interface LinkButtonProps {
  title: string;
  href: string;
  style: string
}

export default function LinkButton(props: LinkButtonProps) {
  const { title, href, style } = props;

  return (
    <div>
      <Link href={href} className="w-fit ">
        <button className={`flex justify-center p-3 rounded-[10px] transiton duration-100 ${style}`} >
          {title}
        </button>
      </Link>
    </div>
  );
}
