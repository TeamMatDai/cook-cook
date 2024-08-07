import { supabase } from '@/utils/supabase/supabaseClient';

export const googleLogin = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_API_URL}`
    }
  });
};

export const kakaoLogin = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_API_URL}`
    }
  });
};
