import { createClient } from '@/utils/supabase/supabaseServer';

export const getUserInfo = async () => {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  return user?.data?.user;
};
