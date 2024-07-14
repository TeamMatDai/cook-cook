import Image from 'next/image';
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Typography from '../Typography';

export const CardList = ({
  as: Component = 'ul',
  className,
  children
}: PropsWithChildren<{ as?: React.ElementType; className?: string }>) => {
  return (
    <Component className={clsx('grid grid-cols-2 gap-[10px] gap-y-[26px]', className)}>
      {children}
    </Component>
  );
};

export const CardImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt=""
      width={500}
      height={500}
      className="aspect-square object-cover"
      unoptimized
    />
  );
};

export const CardTitle = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <Typography
      as="strong"
      size="md"
      weight="bold"
      className={clsx('block text-[#222] mt-[16px]', className)}
    >
      {children}
    </Typography>
  );
};

export const CardDescription = ({
  children,
  className
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <Typography
      as="p"
      size="sm"
      weight="light"
      className={clsx('text-[#666] truncate mt-[6px]', className)}
    >
      {children}
    </Typography>
  );
};

export const CardItem = ({
  as: Component = 'li',
  href,
  children
}: PropsWithChildren<{ as?: React.ElementType; href: string }>) => {
  return (
    <Component>
      <Link href={href}>{children}</Link>
    </Component>
  );
};
