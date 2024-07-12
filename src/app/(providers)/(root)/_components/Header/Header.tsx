'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LogoIcon from '@/icons/header-logo.svg';
import SearchIcon from '@/icons/header-search.svg';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 w-full max-w-[500px] h-[109px] flex flex-col justify-start gap-2 pt-[15px] px-[16px] pb-0 border-b border-[#f1f1f1] bg-white z-10">
      <div className="h-[40px] flex justify-between items-center">
        <h1>
          <Link href="/search">
            <LogoIcon className="w-[118px] h-[31.3px] cursor-pointer" />
          </Link>
        </h1>
        <div className="relative w-full max-w-xs ml-4">
          <input
            type="text"
            placeholder="지금 뭐 먹지?"
            className="w-full h-10 p-3 rounded-full bg-[#f9f9f9] focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={handleSearch}
          >
            <SearchIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
      <nav className="flex justify-around items-center mt-2">
        <Link href="/best" className="text-black font-bold">
          베스트
        </Link>
        <Link href="/new" className="text-black font-bold">
          신상품
        </Link>
        <Link href="/recommend" className="text-black font-bold">
          추천
        </Link>
        <Link href="/event" className="text-black font-bold">
          이벤트
        </Link>
      </nav>
    </header>
  );
};

export default Header;
