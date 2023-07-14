"use client"
import { supabaseClient } from "@/app/supabase/supabaseClient";
import { useEffect, useState } from "react";

type CardDashboardProps = {
    title: string;
    description: string;
    entry: any;
  };

  const CardDashboard: React.FC<CardDashboardProps> = ({ title, description, entry }) => {
  
    const [editing, setEditing] = useState(false);
    const [inputAnswer, setInputAnswer] = useState(entry?.answer || "");
    const [done, setDone] = useState(entry?.isdone || "");

    // Update inputAnswer state when entry prop changes
      useEffect(() => {
        setInputAnswer(entry?.answer || "");
      }, [entry]);
      
    async function updateAnswer() {
      try {
        // Update the state immediately?? 
         setInputAnswer(inputAnswer);
         //setEditing(false);
    
        // Update the database in the background
       await supabaseClient
          .from("one-task")
          .update({
            answer: inputAnswer,
          })
          .eq("id", entry.id)
          window.location.reload();             
      } catch (error) {
        console.error(error);
      }
    }
    
    
    async function checkAnswer() {
      try {
        await supabaseClient.from("one-task").update({
          isdone: "true",
        }).eq("id", entry.id);
  
        // window.location.reload();
      } catch (error) {
        console.error(error);
      }
      setDone(true);
    }
  
    return (
      <div className="mt-5 mb-3 rounded-lg px-5 py-4 bg-gray-100 border border-transparent transition-colors hover:border-gray-300">
        <div className="lg:text-2xl sm:text-lg">
          <h2 className="lg:text-3xl sm:text-xl font-bold">My {title ||""}</h2>
          <p className="mt-2 lg:text-xl sm:text-md">{description || ""}</p>
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
                <span className="m-2 font-bold text-blue-400">{entry?.answer || ""}</span>
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