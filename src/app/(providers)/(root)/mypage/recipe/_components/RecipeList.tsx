import { CardDescription, CardImage, CardItem, CardList, CardTitle } from '@/components/Card';
import Typography from '@/components/Typography';

const RecipeList = ({ recipes, isRecipesPending }) =>
  !isRecipesPending &&
  (recipes.length > 0 ? (
    <CardList className="mt-[60px]">
      {recipes.map((recipe: any, index: number) => (
        <CardItem href={`/detail/${recipe.id}`} key={index}>
          <CardImage src={recipe.thumbnail} />
          <CardTitle>{recipe.title}</CardTitle>
          <CardDescription>{recipe.subtitle}</CardDescription>
        </CardItem>
      ))}
    </CardList>
  ) : (
    <div className="mt-[140px]">
      <Typography as="p" size="md" className="text-center text-[#999]">
        글이 없어요
      </Typography>
    </div>
  ));

export default RecipeList;
