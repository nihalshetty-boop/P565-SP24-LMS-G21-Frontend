import { supabase } from '../../lib/helper/supabaseClient';
//const [user, setUser] = useState(null);

export async function useGoogleAuth() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })
  if (error) throw new Error(error.message);
  
  return data;
}