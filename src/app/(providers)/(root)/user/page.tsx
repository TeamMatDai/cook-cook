'use client';
import { createClient } from '@/utils/supabase/supabaseClient';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/providers/UserProvider';

const UserPage = () => {
  const { user } = useUserContext();
  const supabase = createClient();
  const router = useRouter();
  console.log('UserPage >>>', user);

  const handleAuth = async () => {
    if (user) {
      const { error } = await supabase.auth.signOut();
      router.push('/');
      if (error) {
        console.error(error);
      }
    }
    if (!user) {
      router.push('/login');
    }
  };

  return (
    <div className="font-semibold h-full flex flex-col items-center justify-center">
      {user && (
        <div>
          안녕하세요 {user?.user_metadata.full_name}님
          <Image
            className="rounded-full"
            src={user?.user_metadata.avatar_url}
            alt="profile"
            width={100}
            height={100}
            priority={true}
            unoptimized
          />
        </div>
      )}
      <div>
        <button
          className="border border-neutral-400 rounded-lg px-4 py-1 hover:bg-neutral-100 hover:border-neutral-500 transition"
          onClick={handleAuth}
        >
          {user ? '로그아웃' : '로그인'}
        </button>
      </div>
    </div>
  );
};

export default UserPage;
