'use client';
import useShallowSelector from '@/hooks/useShallowSelector';
import { useAuthStore } from '@/providers/AuthStoreProvider';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthStoreContext } from '@/providers/AuthStoreProvider';
import { useContext } from 'react';
import { supabase } from '@/utils/supabase/supabaseClient';

const MyPage = () => {
  const router = useRouter();
  const authStoreContext = useContext(AuthStoreContext);
  const { avatar_url, fullName, email, logout } = useShallowSelector(
    useAuthStore,
    ({ user, logout }) => ({
      avatar_url: user?.user_metadata?.avatar_url || '',
      fullName: user?.user_metadata?.full_name || '',
      email: user?.email || '',
      logout: logout
    })
  );

  const authLogout = async () => {
    const confirmLogout = confirm('정말 로그아웃 하시겠습니까?');
    if (!confirmLogout || !authStoreContext) return;
    logout();
    const { error } = await supabase.auth.signOut();

    error ? alert('로그아웃 실패') : router.push('/');
  };

  if (!email) return null;

  return (
    <>
      <div className="flex items-center mt-[30px]">
        <Image
          src={avatar_url}
          alt="My Page"
          width={50}
          height={50}
          className="w-[50px] h-[50px] rounded-full object-cover"
          unoptimized
        />
        <div className="ml-4">
          <p className="text-black">{fullName}님 반가워요</p>
          <p className="text-gray-500 text-sm">{email}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        <li className="flex justify-between items-center px-4 py-4 bg-white rounded-md hover:bg-gray-50 active:bg-gray-100 active:scale-95 transition duration-300">
          <Link href="/mypage/pin" className="text-black">
            북마크
          </Link>
          <div className="text-gray-200">&gt;</div>
        </li>
        <li
          onClick={authLogout}
          className="flex justify-between items-center px-4 py-4 bg-white rounded-md hover:bg-gray-50 active:bg-gray-100 active:scale-95 transition duration-300"
        >
          <Link href="#" className="text-black">
            로그아웃
          </Link>
          <div className="text-gray-200">&gt;</div>
        </li>
      </ul>
    </>
  );
};

export default MyPage;
