
import { cookies } from "next/headers";
import DataCard from "../../../components/DataCard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

   export const revalidate = 0;

   export interface FetchSupabaseResult {
     data: any[] | null;
   }

  export async function fetchSupabase(): Promise<FetchSupabaseResult> {
   const supabase = createServerComponentClient({cookies})
      const { data } = await supabase.from('one-task').select('*');
   return { data }
 }

  export default async function Home (){
   const {data} = await fetchSupabase();
  //  console.log(data);
  
    return (
      <main className="relative max-w-5xl mx-auto pt-12 sm:pt-12 lg:pt-12 text-center item-center">
          <DataCard json={data}/>
      </main>
  );
}
