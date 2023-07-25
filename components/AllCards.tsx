import { FC } from 'react'

interface AllCardsProps {
  answer: any;
  title: string;
  description: string; 

}

const AllCards: FC<AllCardsProps> = ({  title, description, answer,  }) => {



  return <div className='relative max-w-5xl mx-auto text-center item-center'>
  <div className=" mb-3 rounded-lg px-5 py-4 bg-gray-100 border border-transparent transition-colors hover:border-gray-300">
  <div className="lg:text-2xl sm:text-lg">
    <h2 className="lg:text-3xl sm:text-xl font-bold">My {title ||"No title found"}</h2>
    <p className="mt-2 lg:text-xl sm:text-md">{description || "No question found"}</p>
    <div className="flex justify-center items-center mt-4 lg:text-3xl sm:text-xl">
      <span className="text-gray-800">Your answer: </span>
      <span className="m-2 font-bold text-blue-400">{answer || "No answer found"}</span>
                
              
          
          </div>
        </div>
      </div>
    </div>
}

export default AllCards