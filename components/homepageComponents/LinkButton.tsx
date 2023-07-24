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
      <a href={href} target="_blank" rel="noopener noreferrer" className="w-fit ">
        <button className={`flex justify-center p-3 rounded-[10px] transiton duration-100 ${style}`} >
          {title}
        </button>
      </a>
    </div>
  );
}
