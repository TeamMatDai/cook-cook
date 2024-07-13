import Link from 'next/link';
import IconBackButton from '@/icons/arrow-left.svg';
import IconSearch from '@/icons/search-white.svg';
import Image from 'next/image';

type RecipeThumbnailProps = {
  thumbnail: string;
  title: string;
};
const RecipeThumbnailSection = ({thumbnail , title}:RecipeThumbnailProps) => {
  return (
    <article className="h-[500px] w-full">
      <header className="px-[24px] absolute left-0 top-0 z-10 w-full h-[80px] flex flex-row justify-between items-center">
        <Link href="/">
          <IconBackButton />
        </Link>
        <Link href="/search">
          <IconSearch />
        </Link>
      </header>
      <div className="relative w-full h-full">
        <Image src={thumbnail} alt={title} width={500} height={500} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,_255,_255,_0)_50%,_#fff)]" />
      </div>
    </article>
  )
}
export default RecipeThumbnailSection;