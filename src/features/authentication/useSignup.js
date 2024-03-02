import { supabase } from '../../lib/helper/supabaseClient';

export async function useSignup(e, p) {
    const { data, error } =  await supabase.auth.signUp({
        email: e,
        password: p,
    })
    if (error) throw new Error(error.message);
    console.log(data);

    return data;
}