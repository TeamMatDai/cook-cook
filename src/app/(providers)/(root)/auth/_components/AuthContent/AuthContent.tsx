'use client';
import { useRouter } from 'next/navigation';
import { useUser } from '@supabase/auth-helpers-react';
import { SupabaseClient, User, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';

const AuthContent = () => {
  const supabase: SupabaseClient = createClientComponentClient();
  const router = useRouter();
  const user: User | null = useUser();
  console.log(user);

  const handleAuth = async () => {
    if (user) {
      const { error } = await supabase.auth.signOut();

      if (error) {
        alert(error.message);
      }

      return;
    }

    router.push('/auth');
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

export default AuthContent;
