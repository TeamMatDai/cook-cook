import { SupabaseClient, useSupabaseClient } from '@supabase/auth-helpers-react';

export const useSocialLogin = () => {
  const supabase: SupabaseClient = useSupabaseClient();

  const signInWithKakao = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: { redirectTo: `${process.env.NEXT_PUBLIC_API_URL}` }
    });
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${process.env.NEXT_PUBLIC_API_URL}` }
    });
  };

  return { signInWithKakao, signInWithGoogle };
};
