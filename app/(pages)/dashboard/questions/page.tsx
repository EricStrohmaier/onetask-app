
import Question from '@/components/Question'
import React from 'react'
import { fetchSupabase } from '../page';


export default async function Questions() {
   
  const {data} = await fetchSupabase();
  // console.log("data.length => "+ data?.length);
  

  return (
    <div className='flex-1 overflow-y-auto h-screen'>
        <div className='p-4 flex  justify-center items-center'>
            <div className="overflow-hidden m-5 rounded-lg px-5 py-4 bg-gray-100 border border-transparent transition-colors hover:border-gray-300 w-1/2 flex  justify-center items-center"> 
                <div className='  justify-center items-center'>

                <Question data={data}/>
                   
                </div>

            </div>
        </div>
      
    </div>
  )
}
