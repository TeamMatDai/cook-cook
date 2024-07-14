'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';
import { LAYOUT } from '@/constants/tailwind';
import { useAuthStore } from '@/providers/AuthStoreProvider';
import { NAV_ITEMS_LOGIN, NAV_ITEMS_NOT_LOGIN } from './constants';

const BottomNav = () => {
  const currentPath = usePathname();
  const isLogin = useAuthStore<boolean>(({ isLogin }) => isLogin);

  return (
    <nav
      className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white z-50 ${LAYOUT.CONTAINER_MAX_WIDTH} w-full ${LAYOUT.BOTTOM_NAV_HEIGHT} border-t border-[#F1F1F1]`}
    >
      <ul className="grid grid-cols-5 h-full">
        {(isLogin ? NAV_ITEMS_LOGIN : NAV_ITEMS_NOT_LOGIN).map(
          ({ href, component: Component, label, exact }, index) => {
            const isActive = exact ? currentPath === href : currentPath.includes(href);

            return (
              <li key={index} className="flex flex-col items-center justify-center flex-1">
                <Link
                  href={href}
                  className="flex flex-col items-center justify-center w-full h-full"
                >
                  <div className="h-6 flex items-center">
                    <Component className={iconClass({ isActive })} />
                  </div>
                  <span className={textClass({ isActive })}>{label}</span>
                </Link>
              </li>
            );
          }
        )}
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

export default BottomNav;
