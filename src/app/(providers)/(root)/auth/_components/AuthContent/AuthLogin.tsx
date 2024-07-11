import { useSupabaseClient } from '@supabase/auth-helpers-react';
// import { Auth } from '@supabase/auth-ui-react';
// import { ThemeSupa } from '@supabase/auth-ui-shared';
import Kakao from '@/icons/kakao.svg';
import Google from '@/icons/google.svg';

const AuthLogin = () => {
  const supabaseClient = useSupabaseClient();

  const signInWithKakao = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: 'kakao',
      options: { redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}` }
    });
  };

  const signInWithGoogle = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}` }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <button
        onClick={signInWithKakao}
        className="w-[399px] h-[50px] flex-grow-0 flex flex-row justify-center items-center gap-[10px] m-[0_0_10px] p-[10px_24px] rounded-[12px] bg-[#ffe812] text-[14px] font-bold text-black"
      >
        <Kakao /> 카카오로 로그인하기
      </button>

      <button
        onClick={signInWithGoogle}
        className="w-[399px] h-[50px] flex-grow-0 flex flex-row justify-center items-center gap-[10px] m-[0_0_10px] p-[10px_24px] rounded-[12px] bg-[#fff] text-[14px] font-bold text-black"
      >
        <Google /> 구글로 로그인하기
      </button>
    </div>
  );
};

export default AuthLogin;
