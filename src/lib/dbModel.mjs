import { createClient } from '@supabase/supabase-js'
import { userStore } from './stores.js'
import { get } from 'svelte/store'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

export async function saveResponses(responseData) {
    const store = get(userStore);
    console.log(store);
    const user_id = store.user.id;
    const { data, error } = await supabase
        .from('quiz_responses')
        .insert([
            { user_id, response: JSON.stringify(responseData) }
        ])
    if (error) {
        console.error('Error inserting data:', error)
    } else {
        console.log('Data inserted successfully:', data)
    }
}

export async function getResponses() {
    const store = get(userStore);
    const user_id = store.user.id;
    const { data, error } = await supabase
        .from('quiz_responses')
        .select('response')
        .eq('user_id', user_id)
    if (error) {
        console.error('Error fetching data:', error)
    } else {
        console.log('Data fetched successfully:', data)
        return data;
    }
}