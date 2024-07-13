import { LAYOUT } from '@/constants/tailwind';
import BottomNav from '../_components/BottomNav';

export default function DetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={LAYOUT.BOTTOM_NAV_PADDING_BOTTOM}>
      <section className="pb-[90px] overflow-hidden break-words">{children}</section>
      <BottomNav />
    </div>
  );
}
