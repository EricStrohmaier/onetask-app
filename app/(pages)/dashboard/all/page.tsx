import React from 'react';
import { fetchSupabase } from '../page';
import AllCards from '@/components/AllCards';
import { questionsObject } from '@/app/data';
import styles from '@/app/style';
import Link from 'next/link';

export default async function page() {
  const { data } = await fetchSupabase();
  const { questions } = questionsObject;

  const questionData = questions.map(({ id, question, title }) => ({
    id,
    question,
    title,
  }));


  const dataArray = data ?? [];



  // Map over the 'dataArray' and create cards for each item
  const cards = dataArray.map(({ id_number, answer }) => {
    // Find the corresponding questionData item using the id
    const { question, title } = questionData.find((item) => item.id === id_number) || {};
    return (
      <>
      <AllCards
        key={id_number}
        title={title || "No title found"}
        description={question || "No question found"}
        answer={answer || "No answer found"}
      />
      </>
    );
  });

  return <div>
    <div className={`my-1   ${styles.flexCenter} flex-col`}>
      <p className={`${styles.heading2}  ${styles.flexCenter}  `}>Here you can see all your question</p>  
        {data?.length === 0 && <div>no questions found please enter your <Link href={"/dashboard/questions"} className='bg-gray-300 rounded-2xl p-1 px-3 '> first questions </Link></div>}  
    </div>
         {cards}
    </div>;
}
