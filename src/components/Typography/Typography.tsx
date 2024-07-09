import { VariantProps, cva } from 'class-variance-authority';
import type { ElementType, PropsWithChildren } from 'react';
import clsx from 'clsx';

type TypographyProps = PropsWithChildren &
  VariantProps<typeof typographyClass> & {
    as?: ElementType;
    className?: string;
  };

const typographyClass = cva('', {
  variants: {
    weight: {
      regular: 'font-regular',
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      light: 'font-light'
    },
    size: {
      sm: 'text-[13px]',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    }
  },
  defaultVariants: {
    weight: 'regular',
    size: 'md'
  }
});

const Typography = ({
  as: Component = 'div',
  weight = 'regular',
  size = 'md',
  className,
  children,
  ...props
}: TypographyProps) => {
  return (
    <Component className={clsx(typographyClass({ weight, size }), className)} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
