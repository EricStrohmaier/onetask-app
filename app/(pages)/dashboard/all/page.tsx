import DataCard from '@/components/DataCard'
import React from 'react'
import { fetchSupabase } from '../page'

export default async function page() {

  const {data} = await fetchSupabase();
  return (
    <div>
      <DataCard json={data}/>
    </div>
  )
}

// const [editing, setEditing] = useState(false);
// const [inputAnswer, setInputAnswer] = useState(answer);
// const [done, setDone] = useState(isdone || "");

// const currentQuestion = questionData[id_number];
// const currentDataQuestion = {... currentQuestion, created_at, updated_at}

