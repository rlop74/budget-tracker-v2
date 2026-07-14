import { createClient } from '@supabase/supabase-js';

const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

if (!supabaseKey || !supabaseUrl) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
