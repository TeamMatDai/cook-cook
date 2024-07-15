'use client';
import Kakao from '@/icons/kakao.svg';
import Google from '@/icons/google.svg';
import { googleLogin, kakaoLogin } from '../_utils/socialLogin';

const AuthLogin = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-10 w-full px-4">
      <button
        type="button"
        onClick={kakaoLogin}
        className="max-w-[360px] w-full h-[50px] flex-grow-0 flex flex-row justify-center items-center gap-[10px] m-[0_0_10px] p-[10px_24px] rounded-[12px] bg-[#ffe812] text-[14px] font-bold text-black"
      >
        <Kakao /> 카카오로 로그인하기
      </button>

      <button
        type="button"
        onClick={googleLogin}
        className="max-w-[360px] w-full h-[50px] flex-grow-0 flex flex-row justify-center items-center gap-[10px] m-[0_0_10px] p-[10px_24px] rounded-[12px] bg-[#fff] text-[14px] font-bold text-black"
      >
        <Google /> 구글로 로그인하기
      </button>
    </div>
  );
};

export default AuthLogin;
