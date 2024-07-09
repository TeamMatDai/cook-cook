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
      medium: 'font-medium'
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl'
    },
    color: {
      black: 'text-black',
      white: 'text-white',
      gray: 'text-gray-500'
    }
  },
  defaultVariants: {
    weight: 'regular',
    size: 'md',
    color: 'black'
  }
});

const Typography = ({
  as: Component = 'div',
  weight = 'regular',
  size = 'md',
  color = 'black',
  className,
  children,
  ...props
}: TypographyProps) => {
  return (
    <Component className={clsx(typographyClass({ weight, size, color }), className)} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
