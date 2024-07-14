'use client';

import { useAuthStore } from '@/providers/AuthStoreProvider';
import Image from 'next/image';

export default function UserPage() {
  const { user, isLogin, login, logout } = useAuthStore((state) => state);

  console.log('user', user);
  console.log('isLogin', isLogin);
  console.log('login', login);
  console.log('logout', logout);
  return (
    <div>
      {user ? (
        <>
          user: {user?.user_metadata.full_name}
          <Image
            src={user?.user_metadata.avatar_url}
            alt="avatar"
            width={100}
            height={100}
            unoptimized
          />
          <hr />
        </>
      ) : (
        <>No user</>
      )}
    </div>
  );
}
