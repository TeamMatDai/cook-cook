'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LogoIcon from '@/icons/logo.svg';
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
    <header className="sticky top-0 w-full flex flex-col justify-start gap-2 pt-[15px] px-[16px] pb-0 border-b border-[#f1f1f1] bg-white z-50">
      <div className="h-[40px] flex gap-4 justify-between items-center">
        <h1>
          <Link href="/">
            <LogoIcon className="cursor-pointer" alt="cook cook" />
          </Link>
        </h1>
        <div className="relative w-full flex-grow">
          <input
            type="text"
            placeholder="지금 뭐 먹지?"
            className="w-full h-10 px-[16px] rounded-full bg-[#f9f9f9] focus:outline-none"
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
      <nav className="flex justify-around items-center h-[46px]">
        <Link href="#" className="text-[15px] font-medium text-[#000]">
          베스트
        </Link>
        <Link href="#" className="text-[15px] font-medium text-[#000]">
          신상품
        </Link>
        <Link href="#" className="text-[15px] font-medium text-[#000]">
          추천
        </Link>
        <Link href="#" className="text-[15px] font-medium text-[#000]">
          이벤트
        </Link>
      </nav>
    </header>
  );
};

export default Header;
