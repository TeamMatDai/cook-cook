import HomeIcon from '@/icons/home.svg';
import SearchIcon from '@/icons/search.svg';
import PencilIcon from '@/icons/pencil.svg';
import CalendarIcon from '@/icons/calendar.svg';
import UserIcon from '@/icons/user.svg';

const NAV_ITEMS = [
  { href: '/', label: '홈', component: HomeIcon, exact: true },
  { href: '/search', label: '검색', component: SearchIcon },
  { href: '/editor', label: '글쓰기', component: PencilIcon },
  { href: '/mypage/recipe', label: '내 레시피', component: CalendarIcon }
];

export const NAV_ITEMS_LOGIN = [
  ...NAV_ITEMS,
  { href: '/mypage', label: '마이페이지', component: UserIcon, exact: true }
];

export const NAV_ITEMS_NOT_LOGIN = [
  ...NAV_ITEMS,
  { href: '/login', label: '로그인', component: UserIcon, exact: true }
];
