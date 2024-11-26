import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function login(email, password) {
    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) {
        return null;
    }
    return data;
}