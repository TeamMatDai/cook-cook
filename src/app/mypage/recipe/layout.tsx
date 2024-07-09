import type { PropsWithChildren } from 'react';

const RecipeLayout = ({ children }: PropsWithChildren) => {
  return <main className="px-[22px]">{children}</main>;
};

export default RecipeLayout;
