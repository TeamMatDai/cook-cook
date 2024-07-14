'use client';
import useShallowSelector from '@/hooks/useShallowSelector';
import { useAuthStore } from '@/providers/AuthStoreProvider';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthStoreContext } from '@/providers/AuthStoreProvider';
import { useContext } from 'react';
import { supabase } from '@/utils/supabase/supabaseClient';
import type { AuthStoreTypes } from '@/stores/authStore';
import type { User, UserMetadata } from '@supabase/supabase-js';
import showSwal from '@/utils/swal';

type UserType = {
  fullName: UserMetadata['full_name'];
  thumbnail: UserMetadata['avatar_url'];
  email: User['email'];
  logout: AuthStoreTypes['logout'];
};

const MyPage = () => {
  const router = useRouter();
  const authStoreContext = useContext(AuthStoreContext);
  const { thumbnail, fullName, email, logout } = useShallowSelector<AuthStoreTypes, UserType>(
    useAuthStore,
    ({ user, logout }) => ({
      thumbnail: user?.user_metadata?.avatar_url || null,
      fullName: user?.user_metadata?.full_name || null,
      email: user?.email,
      logout
    })
  );

  const authLogout = async () => {
    const confirmLogout = confirm('정말 로그아웃 하시겠습니까?');
    if (!confirmLogout || !authStoreContext) return;
    logout();
    const { error } = await supabase.auth.signOut();

    error ? showSwal({ icon: 'error', title: '로그아웃 실패' }) : router.push('/');
  };

  if (!email) return null;

  return (
    <>
      <div className="flex items-center mt-[30px]">
        <Image
          src={thumbnail}
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
        <li className="bg-white rounded-md hover:bg-gray-50 active:bg-gray-100 active:scale-95 transition duration-300">
          <Link
            href="/mypage/pin"
            className="text-black text-left flex-grow px-4 py-4 flex justify-between items-center"
          >
            <span> 내가 저장한 레시피</span>
            <div className="text-gray-300">&gt;</div>
          </Link>
        </li>
        <li className="bg-white rounded-md hover:bg-gray-50 active:bg-gray-100 active:scale-95 transition duration-300">
          <button
            type="button"
            onClick={authLogout}
            className="text-black text-left flex-grow px-4 py-4 flex justify-between items-center w-full"
          >
            <span className="flex-grow">로그아웃</span>
            <div className="text-gray-300">&gt;</div>
          </button>
        </li>
      </ul>
    </>
  );
};

export default MyPage;
