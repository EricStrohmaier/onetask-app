import React from 'react'
import Cards from '@/components/Cards';

interface ChildComponentProps {
  json: any;
}

const DataCard: React.FC<ChildComponentProps> = ({ json }) => {

  const dataSet = json.map(({answer}: {  answer: string; }) => ({
    answer,
  }));

  return (
    <div>
      
      <div className="font-medium m-5 text-text">
        
              <Cards answer={dataSet}/>

        </div>
    </div>
  );
};

export default DataCard;

