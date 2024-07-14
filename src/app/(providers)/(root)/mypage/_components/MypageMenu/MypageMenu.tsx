import type { StrictPropsWithChildren } from '@/types/common';

type MenuItemProps<T extends 'button' | 'a'> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

type tt = StrictPropsWithChildren<MenuItemProps<'button' | 'a'>>;

export const MenuItem = ({
  as: Component = 'button',
  children,
  ...props
}: MenuItemProps<'button' | 'a'>): React.ReactElement => {
  return (
    <Component
      className="flex justify-between items-center px-4 py-4 bg-white rounded-lg hover:bg-gray-50 active:bg-gray-100 active:scale-95 transition duration-300"
      {...props}
    >
      {children}
    </Component>
  );
};

export const MypageMenu = ({ children }: StrictPropsWithChildren) => {
  return <ul className="mt-4 space-y-2">{children}</ul>;
};

export const ArrowIcon = ({
  className,
  width,
  height,
  fill
}: {
  className?: string;
  width: number;
  height: number;
  fill: string;
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L10.59 3.41 18.17 11H2V13H18.17L10.59 20.59L12 22L22 12L12 2Z" />
    </svg>
  );
};
