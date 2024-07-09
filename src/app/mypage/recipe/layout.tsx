import type { PropsWithChildren } from 'react';

const RecipeLayout = ({ children }: PropsWithChildren) => {
  return <main className="px-[22px] pb-12">{children}</main>;
};

export default RecipeLayout;
