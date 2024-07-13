// 'use client';
// import { SupabaseClient, User, useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
// import Kakao from '@/icons/kakao.svg';
// import Google from '@/icons/google.svg';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// // import { useUserStore } from '@/stores/userStores';

// const AuthLogin = () => {
//   const supabaseClient: SupabaseClient = useSupabaseClient();
//   const user: User | null = useUser();
//   const router = useRouter();
//   // const { setUser } = useUserStore();

//   const signInWithKakao = async () => {
//     await supabaseClient.auth.signInWithOAuth({
//       provider: 'kakao',
//       options: { redirectTo: `${process.env.NEXT_PUBLIC_API_URL}` }
//     });
//   };

//   const signInWithGoogle = async () => {
//     await supabaseClient.auth.signInWithOAuth({
//       provider: 'google',
//       options: { redirectTo: `${process.env.NEXT_PUBLIC_API_URL}` }
//     });
//   };

//   useEffect(() => {
//     if (user) {
//       // setUser(user);
//       alert('이미 로그인 중입니다.');
//       router.push('/');
//     }
//   }, [user, router]);

//   return (
//     <div className="flex flex-col justify-center items-center mb-10">
//       <button
//         type="button"
//         onClick={signInWithKakao}
//         className="w-[399px] h-[50px] flex-grow-0 flex flex-row justify-center items-center gap-[10px] m-[0_0_10px] p-[10px_24px] rounded-[12px] bg-[#ffe812] text-[14px] font-bold text-black"
//       >
//         <Kakao /> 카카오로 로그인하기
//       </button>

//       <button
//         type="button"
//         onClick={signInWithGoogle}
//         className="w-[399px] h-[50px] flex-grow-0 flex flex-row justify-center items-center gap-[10px] m-[0_0_10px] p-[10px_24px] rounded-[12px] bg-[#fff] text-[14px] font-bold text-black"
//       >
//         <Google /> 구글로 로그인하기
//       </button>
//     </div>
//   );
// };

// export default AuthLogin;
'use client';
import Kakao from '@/icons/kakao.svg';
import Google from '@/icons/google.svg';
import { useRouter } from 'next/navigation';

const AuthLogin = () => {
  const router = useRouter();

  const signInWithKakao = async () => {
    const response = await fetch('/api/kakaologin', { method: 'POST' });
    if (response.ok) {
      router.push('/');
    } else {
      const errorData = await response.json();
      alert(`로그인 실패: ${errorData.errorMsg}`);
    }
  };

  const signInWithGoogle = async () => {
    await fetch('/api/googlelogin', { method: 'POST' });
  };

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <button
        type="button"
        onClick={signInWithKakao}
        className="w-[399px] h-[50px] flex-grow-0 flex flex-row justify-center items-center gap-[10px] m-[0_0_10px] p-[10px_24px] rounded-[12px] bg-[#ffe812] text-[14px] font-bold text-black"
      >
        <Kakao /> 카카오로 로그인하기
      </button>

      <button
        type="button"
        onClick={signInWithGoogle}
        className="w-[399px] h-[50px] flex-grow-0 flex flex-row justify-center items-center gap-[10px] m-[0_0_10px] p-[10px_24px] rounded-[12px] bg-[#fff] text-[14px] font-bold text-black"
      >
        <Google /> 구글로 로그인하기
      </button>
    </div>
  );
};

export default AuthLogin;
