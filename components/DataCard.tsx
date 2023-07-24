
import React from 'react'
import Cards from '@/components/Cards';

interface ChildComponentProps {
  json: any;
  
}

const DataCard: React.FC<ChildComponentProps> = ({ json }) => {

  const dataSet = json.map(({answer,  }: {  answer: string; }) => ({
    answer,
  }));
console.log(dataSet);

  return (
    <div>
      {/* Linear line fade in out  */}
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="font-medium m-5 text-gray-800">

          <Cards
           answer={dataSet} 
          />
     
        </div>
    </div>
  );
};

export default DataCard;

