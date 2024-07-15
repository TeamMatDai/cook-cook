import { ERROR_MESSAGES } from '@/constants/errorMessage';
import { createClient } from '@/utils/supabase/supabaseServer';

export const getUser = async () => {
  const supabase = createClient();

  const {
    data: { user },
    error
  } = await supabase.auth.getUser();
  if (error?.message || !user) {
    throw new Error(ERROR_MESSAGES.INVALID_TOKEN);
  }
  return user;
};
