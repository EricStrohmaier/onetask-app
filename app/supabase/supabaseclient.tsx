import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rnuofxtaszszbnpmbegz.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; // Use non-null assertion operator

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  // Additional Supabase client options
});
