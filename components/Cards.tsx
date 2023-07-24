"use client"
import { FC, useEffect, useState } from 'react';
import CardDashboard from './CardDashboard';
import { questionsObject } from '@/app/data';
import { useSupabase } from '@/app/spabase-provider';

interface CardsProps {
  answer: string;
}

const Cards: FC<CardsProps> = ({  answer }) => {

  const { questions } = questionsObject;
  const questionData = questions.map(({ id, question, title }) => ({ question, id, title }));
  const [latestEntries, setLatestEntries] = useState<{question: any; title: string; answer: any; }[]>([]);
  const {supabase} = useSupabase();

  useEffect(() => {
    async function fetchData() {
      try {
        const ids = questionData.map(({ id }) => id);
        const queries = ids.map((id) =>
          supabase
            .from('one-task')
            .select('*')
            .eq('id_number', id)
            .order('created_at', { ascending: false })
            .limit(1)
            .single()
        );
  
        const results = await Promise.all(queries);
         
        
        const latestEntries = results.map((result, index) => ({
          title: questionData[index].title,
          question :questionData[index].question,
          answer: result.data ? result.data : null,
        }));
        console.log(latestEntries);
  
        setLatestEntries(latestEntries);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
       {latestEntries.map((entry, index) => (
            entry.answer !== null && (
              <CardDashboard
             key={index}
             title={entry.title}
             description={entry.question}
             answer={entry.answer}        
                   />
                )
            ))}
    </div>
  );
};

export default Cards;
