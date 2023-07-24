import React from 'react'

export default function SingleGridCard() {
  return (
    <div className="m-4 max-w-lg">
        <div className="flex flex-col">
            <div className="rounded-xl overflow-hidden">
                 <img alt="" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="w-full"  src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=80/www/solution-images/1.jpg" />
            </div>
     <h6 className="text-2xl font-medium mt-5 font-heading">Send customized newsletters</h6>
        <p className="mt-2 text-lg">Introducing the best, most flexible editor in email. Why look like every other newsletter?</p>
            <a href="/newsletter-solutions/publish" className="w-fit">
                <button aria-label="arrow-right" className="flex justify-center gap-[10px] text-white bg-black  rounded-full after:pl-1 after:max-h-6 after:h-full after:m-auto after:flex after:delay-150 after:transition-all after:ease-slick after:-translate-x-[2px] enabled:hover:after:delay-150 enabled:hover:after:transition-all enabled:hover:after:ease-slick enabled:hover:after:translate-x-[2px] hover:after:delay-150 hover:aftertransition-all hover:afterease-slick hover:after:translate-x-[2px] font-semibold delay-150 transition-all ease-slick font-heading shadow-[6px_6px_0px_rgba(0,_0,_0,_0.25)] active:shadow-[6px_6px_0px_rgba(0,_0,_0,_0.15)] hover:shadow-[0px_0px_0px_rgba(0,_0,_0,_0.25)] h-[60px] w-[60px]">
                </button>
            </a>
        </div>
    </div>
  )
}
