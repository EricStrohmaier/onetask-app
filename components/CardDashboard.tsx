"use client"

import { useState } from "react";
import { useSupabase } from "@/app/spabase-provider";

type CardDashboardProps = {
    answer: any;
    title: string;
    description: string;
 
  };

  const CardDashboard: React.FC<CardDashboardProps> = ({  title, description, answer }) => {

   const {supabase}= useSupabase()
  
    const [editing, setEditing] = useState(false);
    const [inputAnswer, setInputAnswer] = useState(answer?.answer || "no answer found");
    const [done, setDone] = useState(answer?.isdone || false);


  
    async function updateAnswer() {
      try {
     
       await supabase
          .from("one-task")
          .update({
            answer: inputAnswer,
          })
          .eq("id", answer?.id)
      
          setEditing(false)
          window.location.reload();         

      } catch (error) {
        console.error(error);
      }
      setInputAnswer(inputAnswer);
    }
    
    async function checkAnswer() {
      try {
        await supabase.from("one-task").update({
          isdone: "true",
        }).eq("id", answer?.id);
  
        // window.location.reload();
      } catch (error) {
        console.error(error);
      }
      setDone(true);
    }
  
    return (
      <div className=" mb-3 rounded-lg px-5 py-4 bg-gray-100 border border-transparent transition-colors hover:border-gray-300">
        <div className="lg:text-2xl sm:text-lg">
          <h2 className="lg:text-3xl sm:text-xl font-bold">My {title ||"Title"}</h2>
          <p className="mt-2 lg:text-xl sm:text-md">{description || "Question"}</p>
          <div className="flex justify-center items-center mt-4 lg:text-3xl sm:text-xl">
            <span className="text-gray-800">Your answer: </span>
            {editing ? (
              <>
                <input
                  value={inputAnswer}
                  onChange={(e) => setInputAnswer(e.target.value)}
                  className="rounded-2xl p-1 indent-4"
                  type="text"
                />
                <button title="Done">
                  <div onClick={updateAnswer} className="w-8 h-8 hover:text-gray-700" >check</div>
                </button>
              </>
            ) : done ? (
              <span className="m-2 font-bold text-green-600">{inputAnswer}</span>
            ) : (
              <>
<span className="m-2 font-bold text-blue-400">{answer?.answer || ""}</span>
                <div className="ml-2  relative text-gray-500 ">
                  <button title="EDIT ME">
                    <div onClick={() => setEditing(true)} className="w-8 h-8 hover:text-gray-700 mx-4" >edit</div>
                  </button>
                  <button title="FINISH ME">
                    <div onClick={checkAnswer} className="w-8 h-8 hover:text-gray-700 mx-4" >done</div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
  export default CardDashboard;