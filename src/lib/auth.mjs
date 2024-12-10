import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function login(email, password) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return null;
  }
  return data;
}

export async function signup(email, password, firstName, lastName) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    return null;
  }

  const userId = data.user.id;
  const username = email.split("@")[0];
  const fullName = firstName + lastName;

  const { data: insertData, error: insertError } = await supabase
    .from("profiles")
    .update({
      username,
      full_name: fullName,
    })
    .eq("id", userId)
    .select();
  if (error) {
    return null;
  }
  return data;
}
