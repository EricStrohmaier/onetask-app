import React from 'react';
import { fetchSupabase } from '../page';
import AllCards from '@/components/AllCards';
import { questionsObject } from '@/app/data';
import styles from '@/app/style';

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
    <div className={`my-1  ${styles.heading2} ${styles.flexCenter} `}>Here you can see all your question</div>
    {cards}
    </div>;
}
