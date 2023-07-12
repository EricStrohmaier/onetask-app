"use client"
import React, { ChangeEvent, useState,MouseEvent, useEffect  } from 'react'
import { questionsObject } from "../app/data";
import { supabase } from '@/app/supabase/supabaseclient';
import { useRouter } from 'next/navigation';


export default function Question() {

    const router = useRouter();  
    const { questions } = questionsObject;
   
     //Get Questions depennding on the Day
     const getActiveQuestion = () => {
        
      const today = new Date();
      // const dayOfWeek = today.getDay();
      const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));
      const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      const endOfYear = new Date(today.getFullYear()+1,0,0);

      if (today.getTime() === endOfYear.getTime()) {
         return 0;
      } else if (today.getDate() === endOfMonth.getDate()) {
          return 1;
      } else
      // const daysToEndOfWeek = (endOfWeek.getTime() - today.getTime()) / (1000 * 3600 * 24);
     
      if (today.getDay() === 1) {
        return 2; // Return Mondays
      } else
      return 3; // Default case
    }

    //now i can use activeQuestion and function in my frontend
    const [inputAnswer, setInputAnswer] = useState('');
    const [checked, setChecked] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(getActiveQuestion());
        
    const { id, title, question} = questions[activeQuestion];

    const getAnswerInput = async (e: ChangeEvent<HTMLInputElement>) => {
        const answer = e.target.value;
        setInputAnswer(answer);
        setChecked(true);
      };
     
      const nextQuestion = async (e: MouseEvent<HTMLButtonElement>) => {
        const answer = e.currentTarget.value;
        try {
            const { data, error } = await supabase.from("one-task").insert([
              {
                id_number: id,
                answer: answer,
              },
            ]);
            if (error) throw error;
                    
          } catch (error) {
            console.error(error);
          }

        if (activeQuestion === questions.length - 1) {
          // Last question, show the dashboard
          setIsFinished(true);
        } else {
          setActiveQuestion(activeQuestion + 1);
          setInputAnswer('');
          setChecked(false);
        }
      }; 
      
      useEffect(() => {
        if (isFinished) {
         
          router.push("/dashboard");
        }
      }, [isFinished,router]);
      

  return (
    <div className=''>
      <p>{questions[activeQuestion].title}</p>
      <p>{questions[activeQuestion].question}</p>
    
        <div>
      <input  
             value={inputAnswer}
            onChange={getAnswerInput}
            className="rounded-2xl p-1  indent-4"
            type="text"
            placeholder="Your Awnser" /> 
        
        {checked ? (
              <button  value={inputAnswer} onClick={nextQuestion}  className='p-1 m-2 rounded-lg bg-blue-200'>
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button  value={inputAnswer} onClick={nextQuestion} disabled className='p-1 m-2 rounded-lg bg-blue-200 disabled'>
          
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
            </div>
         
    </div>
  )
}
