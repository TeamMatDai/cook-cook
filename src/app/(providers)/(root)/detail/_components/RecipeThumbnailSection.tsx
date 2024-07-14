'use client';

import Link from 'next/link';
import IconBackButton from '@/icons/arrow-left.svg';
import IconSearch from '@/icons/search-white.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { Recipe } from '@/types/recipe';

type RecipeThumbnailProps = {
  thumbnail: Exclude<Recipe['thumbnail'], File>;
  title: string;
};
const RecipeThumbnailSection = ({ thumbnail, title }: RecipeThumbnailProps) => {
  const router = useRouter();

  return (
    <article className="h-[500px] w-full">
      <header className="px-[24px] absolute left-0 top-0 z-10 w-full h-[80px] flex flex-row justify-between items-center">
        <button onClick={() => router.back()}>
          <IconBackButton className="fill-current text-white" />
        </button>
        <Link href="/search">
          <IconSearch />
        </Link>
      </header>
      <div className="relative w-full h-full">
        <Image
          src={thumbnail || ''}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,_255,_255,_0)_50%,_#fff)]" />
      </div>
    </article>
  );
};
export default RecipeThumbnailSection;
