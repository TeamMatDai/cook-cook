import { CardDescription, CardImage, CardItem, CardList, CardTitle } from '@/components/Card';
import Typography from '@/components/Typography';

type Recipe = {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
};

type RecipeListProps = {
  recipes: Recipe[];
  isRecipesPending: boolean;
};

const RecipeList = ({ recipes, isRecipesPending }: RecipeListProps) =>
  !isRecipesPending &&
  (recipes.length > 0 ? (
    <CardList className="mt-[60px]">
      {recipes.map((recipe: Recipe) => (
        <CardItem href={`/detail/${recipe.id}`} key={recipe.id}>
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
