"use client"
import { useRouter } from 'next/navigation';
import generateUniqueId from '@/utils/generateUuid';
import React, { useState } from 'react';
import { useSupabase } from '@/app/spabase-provider';

const CreateProjectForm = () => {
  const [projectId, setProjectId] = useState('');
  const router = useRouter();
  const {supabase}= useSupabase()

  const handleCreateProject = async () => {
    // Generate the unique project ID using the function
    const newProjectId = generateUniqueId();
    const { data, error } = await supabase.from("one-task").insert([
        {
            project_id: newProjectId,
        },
      ]);

    // Update the URL with the generated project ID as a query parameter
    router.push(`/dashboard/project/${newProjectId}`);

    // For this example, we'll also update the state to display the values
    setProjectId(newProjectId);
  };

  return (
    <div>
        <div className="h-80 w-80 m-2 rounded-lg px-5 py-4 bg-gray-100 border border-transparent transition-colors hover:border-gray-300 flex flex-col justify-center items-center">
            <button className='font-bold text-xl bg-gray-300 rounded-3xl px-3 py-1' onClick={handleCreateProject}>Create Project + </button>
        </div>
    </div>
  );
};

export default CreateProjectForm;