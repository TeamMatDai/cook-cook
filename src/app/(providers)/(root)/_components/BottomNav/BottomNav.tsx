'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';
import { LAYOUT } from '@/constants/tailwind';
import HomeIcon from '@/icons/home.svg';
import SearchIcon from '@/icons/search.svg';
import PencilIcon from '@/icons/pencil.svg';
import CalendarIcon from '@/icons/calendar.svg';
import UserIcon from '@/icons/user.svg';

const NAV_ITEMS = [
  { href: '/', label: '홈', component: HomeIcon, exact: true },
  { href: '/search', label: '검색', component: SearchIcon },
  { href: '/editor', label: '글쓰기', component: PencilIcon },
  { href: '/mypage/recipe', label: '내 레시피', component: CalendarIcon },
  { href: '/mypage', label: '마이페이지', component: UserIcon, exact: true }
];

const BottomNav = () => {
  const currentPath = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {NAV_ITEMS.map(({ href, component: Component, label, exact }, index) => {
          const isActive = exact ? currentPath === href : currentPath.includes(href);

          return (
            <li key={index} className={styles.li}>
              <Link href={href} className={styles.link}>
                <div className={styles.icon}>
                  <Component className={iconClass({ isActive })} />
                </div>
                <span className={textClass({ isActive })}>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const iconClass = cva('', {
  variants: {
    isActive: {
      true: 'text-black fill-current',
      false: 'text-[#999] fill-current'
    }
  }
});

const textClass = cva('text-[13px] font-medium', {
  variants: {
    isActive: {
      true: 'text-black',
      false: 'text-[#999]'
    }
  }
});

const styles = {
  nav: [
    'fixed',
    'bottom-0',
    'left-1/2',
    'transform',
    '-translate-x-1/2',
    'bg-white',
    'z-50',
    LAYOUT.CONTAINER_MAX_WIDTH,
    'w-full',
    LAYOUT.BOTTOM_NAV_HEIGHT,
    'border-t',
    'border-[#F1F1F1]'
  ].join(' '),
  ul: ['grid', 'grid-cols-5', 'h-full'].join(' '),
  li: ['flex', 'flex-col', 'items-center', 'justify-center', 'flex-1'].join(' '),
  link: ['flex', 'flex-col', 'items-center', 'justify-center', 'w-full', 'h-full'].join(' '),
  icon: ['h-6', 'flex', 'items-center'].join(' ')
};

export default BottomNav;
