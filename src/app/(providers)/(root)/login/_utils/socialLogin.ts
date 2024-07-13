import { supabase } from '@/utils/supabase/supabaseClient';

export const googleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent'
      },
      redirectTo: `${process.env.NEXT_PUBLIC_API_URL}`
    }
  });
  if (data) return alert('로그인 성공!');
  if (error) return alert(`로그인에 실패했습니다. error: ${error.message}`);
};

export const kakaoLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent'
      }
    }
  });
  if (data) return alert('로그인 성공!');
  if (error) return alert(`로그인에 실패했습니다. error: ${error.message}`);
};

// export const useSocialLogin = () => {
//   const supabase: SupabaseClient = useSupabaseClient();

//   const signInWithKakao = async () => {
//     await supabase.auth.signInWithOAuth({
//       provider: 'kakao',
//       options: { redirectTo: `${process.env.NEXT_PUBLIC_API_URL}` }
//     });
//   };

//   const signInWithGoogle = async () => {
//     await supabase.auth.signInWithOAuth({
//       provider: 'google',
//       options: { redirectTo: `${process.env.NEXT_PUBLIC_API_URL}` }
//     });
//   };

//   return { signInWithKakao, signInWithGoogle };
// };
