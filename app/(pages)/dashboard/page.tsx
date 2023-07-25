// Make sure to import the required types/interfaces
import DataCard from '@/components/DataCard';
import { Session, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export const revalidate = 0;

export interface FetchSupabaseResult {
  data: any[] | null;

}

export async function fetchSupabase(): Promise<FetchSupabaseResult> {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from('one-task').select('*');
  return { data }; 
}

export default async function Home() {

  const { data} = await fetchSupabase();

    return (
      <main className="relative max-w-5xl mx-auto text-center item-center">
        <DataCard json={data} />
      </main>
    );
}
