import React from 'react'
import SingleGridCard from './SingleGridCard'

export default function GridCards() {
  return (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 xl:gap-x-20 mt-8'>
                <SingleGridCard/>
                <SingleGridCard/>
            </div>
  )
}
