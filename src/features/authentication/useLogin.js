import { supabase } from '../../lib/helper/supabaseClient';

export async function useLogin(e, p) {
    const { data, error } =  await supabase.auth.signInWithPassword({
        email: e,
        password: p,
    })
    if (error) throw new Error(error.message);
    console.log(data);
    
    return data;
}