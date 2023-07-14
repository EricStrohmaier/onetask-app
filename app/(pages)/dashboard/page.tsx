"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/app/supabase/supabaseClient";
import CardDashboard from "@/components/CardDashboard";
import { questionsObject } from "@/app/data";
import Loading from "./loading";



export default function Home() {
  const [latestEntries, setLatestEntries] = useState<{question: any; title: string; entry: any; }[]>([]);

  //check if user has some questions    if not redirect to /questions page else stay 
  const [showQuestions, setShowQuestions] = useState()
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { questions } = questionsObject;
        const questionData = questions.map(({ id, title, question }) => ({ id, title, question }));
  
        const ids = questionData.map(({ id }) => id);
  
        const queries = ids.map((id) =>
          supabaseClient
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
          entry: result.data ? result.data : null,
        }));
        setLoading(false);
  
        setLatestEntries(latestEntries);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
   
    fetchData();
    
  }, []);
  


  const router = useRouter();  
  useEffect(() => {
    if (showQuestions) {
     
      router.push("/dashboard/questions");
    }
  }, [showQuestions,router]);




  
  return (
    <main className="relative max-w-5xl mx-auto pt-12 sm:pt-12 lg:pt-12 text-center item-center">
         {/* Linear line fade in out  */}
   <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
    <div className="font-medium m-5 text-gray-800">
    {loading && <Loading />} 
    {!loading && latestEntries.map((entry, index) => (
            entry.entry !== null && (
              <CardDashboard
                key={index}
                title={entry.title}
                description={entry.question}
                entry={entry.entry}
              />
            )
          ))}
      

    </div>
  </main>
  );
}

