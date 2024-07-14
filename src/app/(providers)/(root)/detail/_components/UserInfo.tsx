// TODO: user정보 받아와서 로직 짜기
'use client';
import { supabase } from '@/utils/supabase/supabaseClient';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const UserInfo = ({ recipesId }) => {
  const [user, setUser] = useState({ name: '', thumbnail: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      const { data, error } = await supabase
        .from('recipes')
        .select('users(name, thumbnail)')
        .eq('id', recipesId)
        .single();

      if (error) {
        console.error('Error fetching user data:', error);
      } else {
        setUser({ name: data?.users?.name || '', thumbnail: data?.users?.thumbnail || '' });
      }
    };

    fetchUserData();
  }, [recipesId]);

  return (
    <div className="flex flex-col gap-[18px] justify-center items-center">
      <Image
        className="w-[50px] h-[50px] rounded-full overflow-hidden object-cover"
        src={user.thumbnail}
        alt="프로필이미지"
        width={50}
        height={50}
        unoptimized
      />
      <div className="flex flex-col gap-2 text-center">
        <div className="font-bold text-[#222222] text-lg">{user.name}</div>
        <div className="text-base text-[#222222]">{user.name}님의 레시피</div>
      </div>
    </div>
  );
};
export default UserInfo;
