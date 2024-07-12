'use client';
import { CardDescription, CardImage, CardItem, CardList, CardTitle } from '@/components/Card';
import Typography from '@/components/Typography';
import axiosInstance from '@/utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';

const THIRTY_MINUTES_IN_MS = 30 * 60 * 1000;

const MyPinPage = () => {
  const getPinnedRecipes = async () => {
    const { data } = await axiosInstance.get(`/api/mypage/pin`);
    return data;
  };

  const { data: pinnedRecipes = [], isPending } = useQuery({
    queryKey: ['pinnedRecipes'],
    queryFn: getPinnedRecipes,
    staleTime: THIRTY_MINUTES_IN_MS
  });

  return (
    <>
      <Typography as="strong" size="xl" weight="medium" className="text-black block mt-[42px] mb-4">
        내가 저장한 레시피
      </Typography>
      {!isPending &&
        (pinnedRecipes.length > 0 ? (
          <CardList>
            {pinnedRecipes.map((recipe: any, index: number) => (
              <CardItem href={`/detail/${recipe.recipes.id}`} key={index}>
                <CardImage src={recipe.recipes.thumbnail} />
                <CardTitle>{recipe.recipes.title}</CardTitle>
                <CardDescription>{recipe.recipes.subtitle}</CardDescription>
              </CardItem>
            ))}
          </CardList>
        ) : (
          <div className="mt-[140px]">
            <Typography as="p" size="md" className="text-center text-[#999]">
              글이 없어요
            </Typography>
          </div>
        ))}
    </>
  );
};

export default MyPinPage;
