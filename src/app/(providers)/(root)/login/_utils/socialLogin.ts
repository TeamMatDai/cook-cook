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

export const signInWithKakao = async () => {
  const response = await fetch('/api/login/kakao', { method: 'POST' });
  return response;
};

export const signInWithGoogle = async () => {
  const response = await fetch('/api/login/google', { method: 'POST' });
  return response;
};
