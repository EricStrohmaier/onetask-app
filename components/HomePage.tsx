import React from 'react'
import Hero from './homepageComponents/Hero'
import LogoutButton from './LogoutButton'
import LinkButton from './homepageComponents/LinkButton'
import CoolEffect from './homepageComponents/CoolEffect'
import GridCards from './homepageComponents/GridCards'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center ">
        <Hero/>
            <div className='flex '>
                <LinkButton title="Get Started" href="https://www.google.com" />
                {/* <LinkButton title="Read more" href="https://www.google.com" /> */}
            </div>
                <GridCards/>
                  <CoolEffect/>
    </div>
  )
}
